import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Copy, FileText, Check, Plus, Trash, Lock, Shield } from "lucide-react";

// Schema for the proposal data
const proposalSchema = z.object({
  clientName: z.string().min(2, "Nome do cliente é obrigatório"),
  clientCompany: z.string().min(2, "Empresa é obrigatória"),
  validityDate: z.string().min(1, "Validade é obrigatória"),
  introduction: z.string().min(10, "Introdução é obrigatória"),
  
  // Scope items
  scopeItems: z.array(z.object({
    title: z.string(),
    description: z.string()
  })).min(1, "Adicione pelo menos um item ao escopo"),

  // Financials
  setupFee: z.string().min(1, "Valor de setup é obrigatório"),
  monthlyFee: z.string().min(1, "Valor mensal é obrigatório"),
  paymentTerms: z.string().min(1, "Condições de pagamento são obrigatórias"),
  
  // Custom conditions
  conditions: z.string().min(1, "Condições gerais são obrigatórias"),
});

export type ProposalData = z.infer<typeof proposalSchema> & { id: string; createdAt: string };

export default function ProposalCreator() {
  const { toast } = useToast();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [generatedLink, setGeneratedLink] = useState<string | null>(null);
  const [scopeFields, setScopeFields] = useState([{ title: "", description: "" }]);

  const form = useForm<z.infer<typeof proposalSchema>>({
    resolver: zodResolver(proposalSchema),
    defaultValues: {
      clientName: "",
      clientCompany: "",
      validityDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // +7 days
      introduction: "Com base em nossa conversa, elaboramos esta proposta personalizada para atender às necessidades de gestão de TI, segurança e infraestrutura da sua empresa.",
      scopeItems: [{ title: "Gestão de TI Completa", description: "Monitoramento 24/7, Suporte Remoto e Presencial ilimitado." }],
      setupFee: "R$ 0,00",
      monthlyFee: "R$ 0,00",
      paymentTerms: "Boleto Bancário - Vencimento dia 10",
      conditions: "1. Contrato de 12 meses.\n2. Reajuste anual pelo IGPM.\n3. SLA de atendimento de 4 horas para chamados críticos.",
    },
  });

  // Handle dynamic scope fields
  const addScopeField = () => setScopeFields([...scopeFields, { title: "", description: "" }]);
  const removeScopeField = (index: number) => {
    const newFields = [...scopeFields];
    newFields.splice(index, 1);
    setScopeFields(newFields);
  };

  function onSubmit(values: z.infer<typeof proposalSchema>) {
    // Generate ID
    const proposalId = Math.random().toString(36).substring(2, 8).toUpperCase();
    
    // Create full object
    const proposalData: ProposalData = {
      ...values,
      scopeItems: scopeFields, // Override with state (simple way to handle dynamic inputs in this mock)
      id: proposalId,
      createdAt: new Date().toISOString(),
    };

    // Save to localStorage (Simulating DB)
    const existingProposals = localStorage.getItem("vbtech_proposals");
    const proposals = existingProposals ? JSON.parse(existingProposals) : [];
    localStorage.setItem("vbtech_proposals", JSON.stringify([...proposals, proposalData]));

    // Generate Link
    const link = `${window.location.origin}/proposta/${proposalId}`;
    setGeneratedLink(link);

    toast({
      title: "Proposta Criada!",
      description: `ID: ${proposalId}. O link foi gerado com sucesso.`,
    });
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (res.ok) {
        setIsAuthenticated(true);
        toast({ title: "Acesso Permitido", description: "Bem-vindo ao gerador de propostas." });
      } else {
        toast({ variant: "destructive", title: "Acesso Negado", description: "Senha incorreta." });
      }
    } catch {
      toast({ variant: "destructive", title: "Erro", description: "Falha na conexão." });
    }
  };

  const copyToClipboard = () => {
    if (generatedLink) {
      navigator.clipboard.writeText(generatedLink);
      toast({
        title: "Link copiado!",
        description: "Agora você pode enviar para o cliente.",
      });
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0077be_1px,transparent_1px),linear-gradient(to_bottom,#0077be_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />
        <GlassCard className="w-full max-w-md p-8 border-primary/20">
          <div className="flex flex-col items-center text-center mb-8">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 border border-primary/30">
              <Lock className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-2xl font-bold text-white font-heading" data-testid="text-proposal-title">Área Restrita</h1>
            <p className="text-muted-foreground mt-2">Gerador de Propostas VB Tech</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Input
                type="password"
                placeholder="Senha de acesso"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-white/5 border-white/10 text-white text-center tracking-widest"
                data-testid="input-proposal-password"
              />
            </div>
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90" data-testid="button-proposal-login">
              <Shield className="w-4 h-4 mr-2" /> Acessar
            </Button>
          </form>
          <p className="text-xs text-center text-muted-foreground mt-6">
            Ambiente Seguro
          </p>
        </GlassCard>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-4 md:p-8 pt-24">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white font-heading">Gerador de Propostas</h1>
          <p className="text-muted-foreground">Crie propostas comerciais personalizadas e gere um link único para seu cliente.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form Column */}
          <div className="lg:col-span-2">
            <GlassCard className="p-6">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold text-white border-b border-white/10 pb-2">1. Dados do Cliente</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="clientName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">Nome do Responsável</FormLabel>
                            <FormControl><Input {...field} className="bg-white/5 border-white/10 text-white" /></FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="clientCompany"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">Nome da Empresa</FormLabel>
                            <FormControl><Input {...field} className="bg-white/5 border-white/10 text-white" /></FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="validityDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Validade da Proposta</FormLabel>
                          <FormControl><Input type="date" {...field} className="bg-white/5 border-white/10 text-white" /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="introduction"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Texto Introdutório</FormLabel>
                          <FormControl><Textarea {...field} className="bg-white/5 border-white/10 text-white h-24" /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-white/10 pb-2">
                      <h3 className="text-lg font-bold text-white">2. Escopo do Projeto</h3>
                      <Button type="button" size="sm" onClick={addScopeField} variant="outline" className="h-8 border-primary/50 text-primary hover:bg-primary/10">
                        <Plus className="w-3 h-3 mr-1" /> Adicionar Item
                      </Button>
                    </div>
                    
                    {scopeFields.map((field, index) => (
                      <div key={index} className="flex gap-4 items-start bg-white/5 p-4 rounded-lg">
                        <div className="flex-1 space-y-2">
                          <Input 
                            placeholder="Título do serviço (ex: Monitoramento de Servidores)" 
                            value={field.title}
                            onChange={(e) => {
                              const newFields = [...scopeFields];
                              newFields[index].title = e.target.value;
                              setScopeFields(newFields);
                            }}
                            className="bg-black/20 border-white/10 text-white"
                          />
                          <Textarea 
                            placeholder="Descrição detalhada..." 
                            value={field.description}
                            onChange={(e) => {
                              const newFields = [...scopeFields];
                              newFields[index].description = e.target.value;
                              setScopeFields(newFields);
                            }}
                            className="bg-black/20 border-white/10 text-white h-20"
                          />
                        </div>
                        {scopeFields.length > 1 && (
                          <Button type="button" size="icon" variant="ghost" onClick={() => removeScopeField(index)} className="text-destructive hover:bg-destructive/10">
                            <Trash className="w-4 h-4" />
                          </Button>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-bold text-white border-b border-white/10 pb-2">3. Investimento e Condições</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="monthlyFee"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">Valor Mensal (Recorrente)</FormLabel>
                            <FormControl><Input {...field} className="bg-white/5 border-white/10 text-white font-bold text-lg" /></FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="setupFee"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">Valor de Implantação (Setup)</FormLabel>
                            <FormControl><Input {...field} className="bg-white/5 border-white/10 text-white" /></FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="paymentTerms"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Forma de Pagamento</FormLabel>
                          <FormControl><Input {...field} className="bg-white/5 border-white/10 text-white" /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="conditions"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Termos e Condições Gerais</FormLabel>
                          <FormControl><Textarea {...field} className="bg-white/5 border-white/10 text-white h-32 font-mono text-sm" /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-12 shadow-[0_0_20px_rgba(45,169,225,0.3)]">
                    <FileText className="w-5 h-5 mr-2" /> Gerar Link da Proposta
                  </Button>
                </form>
              </Form>
            </GlassCard>
          </div>

          {/* Sidebar / Result Column */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {generatedLink ? (
                <GlassCard className="p-6 border-primary/50 bg-primary/5">
                  <div className="flex flex-col items-center text-center mb-6">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(45,169,225,0.5)]">
                      <Check className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Proposta Gerada!</h3>
                    <p className="text-sm text-primary-foreground/80 mt-1">Sua proposta está pronta para compartilhamento.</p>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-black/30 p-3 rounded border border-white/10 break-all text-sm font-mono text-muted-foreground">
                      {generatedLink}
                    </div>
                    <Button onClick={copyToClipboard} className="w-full" variant="secondary">
                      <Copy className="w-4 h-4 mr-2" /> Copiar Link
                    </Button>
                    <Button asChild className="w-full" variant="outline">
                      <a href={generatedLink} target="_blank" rel="noopener noreferrer">
                        Visualizar Proposta
                      </a>
                    </Button>
                  </div>
                </GlassCard>
              ) : (
                <GlassCard className="p-6 text-center opacity-70">
                  <FileText className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="font-bold text-white mb-2">Aguardando...</h3>
                  <p className="text-sm text-muted-foreground">Preencha o formulário ao lado para gerar uma nova proposta.</p>
                </GlassCard>
              )}

              <GlassCard className="p-6">
                <h3 className="font-bold text-white mb-4">Dicas de Uso</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex gap-2"><Check className="w-4 h-4 text-primary shrink-0" /> Personalize bem a introdução.</li>
                  <li className="flex gap-2"><Check className="w-4 h-4 text-primary shrink-0" /> Detalhe os itens do escopo para evitar dúvidas.</li>
                  <li className="flex gap-2"><Check className="w-4 h-4 text-primary shrink-0" /> O link gerado é único e público para quem tiver a URL.</li>
                </ul>
              </GlassCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
