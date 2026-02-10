import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, Variants } from "framer-motion";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { GlassCard } from "@/components/ui/glass-card";
import { Mail } from "lucide-react";
import { revealVariants } from "@/lib/motion";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const formSchema = z.object({
  name: z.string().min(2, "Nome é obrigatório"),
  email: z.string().email("E-mail inválido"),
  phone: z.string().min(8, "Telefone inválido"),
  message: z.string().min(10, "Mensagem muito curta"),
  privacy: z.boolean().refine((val) => val === true, {
    message: "Você precisa aceitar a Política de Privacidade",
  }),
});

const whatsAppFormSchema = z.object({
  name: z.string().min(2, "Nome é obrigatório"),
  phone: z.string().min(8, "Telefone inválido"),
});

export function Contact() {
  const { toast } = useToast();
  const [isWhatsAppDialogOpen, setIsWhatsAppDialogOpen] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      privacy: false,
    },
  });

  const whatsAppForm = useForm<z.infer<typeof whatsAppFormSchema>>({
    resolver: zodResolver(whatsAppFormSchema),
    defaultValues: {
      name: "",
      phone: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          phone: values.phone,
          message: values.message,
          source: "Site Contact Form",
        }),
      });

      if (!response.ok) {
        throw new Error("Erro ao enviar");
      }

      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Nossa equipe entrará em contato em breve.",
      });

      form.reset();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Erro ao enviar",
        description: "Tente novamente ou entre em contato pelo WhatsApp.",
      });
    }
  }

  async function onWhatsAppSubmit(values: z.infer<typeof whatsAppFormSchema>) {
    try {
      await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.name,
          phone: values.phone,
          source: "WhatsApp",
        }),
      });
    } catch (e) {
    }

    const text = `*Novo contato via WhatsApp*\n\n*Nome:* ${values.name}\n*Telefone:* ${values.phone}\n\nGostaria de falar sobre os serviços da VB Tech.`;
    const whatsappUrl = `https://wa.me/551142570789?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, "_blank");
    setIsWhatsAppDialogOpen(false);
    whatsAppForm.reset();
  }

  return (
    <Section id="contato" className="py-24">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
        <motion.div
           variants={revealVariants as Variants}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-white mb-6">
            Vamos conversar sobre o seu cenário
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Conte rapidamente como está sua TI hoje. A VB Tech retorna com um direcionamento objetivo e próximos passos.
          </p>
          
          <div className="space-y-4">
             <div className="flex items-center gap-4 text-white/80">
               <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                 <Mail size={20} />
               </div>
               <span>Resposta rápida em horário comercial.</span>
             </div>
             
             <Dialog open={isWhatsAppDialogOpen} onOpenChange={setIsWhatsAppDialogOpen}>
               <DialogTrigger asChild>
                 <Button 
                   variant="outline" 
                   className="w-full md:w-auto gap-2 border-primary/50 text-primary hover:bg-primary/10 hover:text-primary"
                 >
                   <MessageCircle size={16} /> Falar no WhatsApp
                 </Button>
               </DialogTrigger>
               <DialogContent className="bg-black/95 border-white/10 text-white sm:max-w-md">
                 <DialogHeader>
                   <DialogTitle>Falar no WhatsApp</DialogTitle>
                   <DialogDescription>
                     Preencha seus dados para iniciar a conversa.
                   </DialogDescription>
                 </DialogHeader>
                 <Form {...whatsAppForm}>
                   <form onSubmit={whatsAppForm.handleSubmit(onWhatsAppSubmit)} className="space-y-4">
                     <FormField
                       control={whatsAppForm.control}
                       name="name"
                       render={({ field }) => (
                         <FormItem>
                           <FormLabel>Nome</FormLabel>
                           <FormControl>
                             <Input placeholder="Seu nome" {...field} className="bg-white/5 border-white/10 text-white" />
                           </FormControl>
                           <FormMessage />
                         </FormItem>
                       )}
                     />
                     <FormField
                       control={whatsAppForm.control}
                       name="phone"
                       render={({ field }) => (
                         <FormItem>
                           <FormLabel>Telefone</FormLabel>
                           <FormControl>
                             <Input placeholder="(11) 99999-9999" {...field} className="bg-white/5 border-white/10 text-white" />
                           </FormControl>
                           <FormMessage />
                         </FormItem>
                       )}
                     />
                     <Button type="submit" className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white">
                       Iniciar Conversa
                     </Button>
                   </form>
                 </Form>
               </DialogContent>
             </Dialog>
          </div>
        </motion.div>

        <motion.div
           variants={revealVariants as Variants}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
        >
          <GlassCard className="p-8">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Nome</FormLabel>
                      <FormControl>
                        <Input placeholder="Seu nome" {...field} className="bg-white/5 border-white/10 text-white focus:border-primary/50" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">E-mail</FormLabel>
                        <FormControl>
                          <Input placeholder="seu@email.com" {...field} className="bg-white/5 border-white/10 text-white focus:border-primary/50" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Telefone/WhatsApp</FormLabel>
                        <FormControl>
                          <Input placeholder="(11) 99999-9999" {...field} className="bg-white/5 border-white/10 text-white focus:border-primary/50" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Mensagem</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Como podemos ajudar?" 
                          {...field} 
                          className="bg-white/5 border-white/10 text-white focus:border-primary/50 min-h-[120px]" 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="privacy"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md p-2">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className="border-white/20 data-[state=checked]:bg-primary data-[state=checked]:text-white"
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="text-white font-normal cursor-pointer">
                          Li e aceito a{" "}
                          <Dialog>
                            <DialogTrigger asChild>
                              <span className="text-primary hover:underline cursor-pointer">Política de Privacidade</span>
                            </DialogTrigger>
                            <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto bg-black/95 border-white/10 text-white">
                              <DialogHeader>
                                <DialogTitle className="text-2xl font-bold mb-4">POLÍTICA DE PRIVACIDADE — FORMULÁRIO DE CONTATO (LGPD)</DialogTitle>
                                <DialogDescription className="text-muted-foreground text-left space-y-4">
                                  <p>Última atualização: 05/02/2026</p>
                                  
                                  <p>A presente Política de Privacidade explica como a VB Tech, (“Controladora”), coleta e utiliza dados pessoais quando você preenche nosso formulário de contato no site.</p>
                                  
                                  <div className="space-y-2">
                                    <h4 className="font-bold text-white">1) Quais dados coletamos</h4>
                                    <p>Ao preencher e enviar o formulário, podemos coletar:</p>
                                    <ul className="list-disc pl-5">
                                      <li>Nome</li>
                                      <li>E-mail</li>
                                      <li>Telefone/WhatsApp</li>
                                      <li>Mensagem (conteúdo do que você escrever)</li>
                                    </ul>
                                    <p>Também podemos registrar informações técnicas para segurança e prevenção a fraudes/spam, como data e horário do envio, IP e informações básicas do navegador/dispositivo (quando disponíveis).</p>
                                  </div>

                                  <div className="space-y-2">
                                    <h4 className="font-bold text-white">2) Para que usamos seus dados (finalidades)</h4>
                                    <p>Seus dados são utilizados para:</p>
                                    <ul className="list-disc pl-5">
                                      <li>Responder sua solicitação e prestar atendimento</li>
                                      <li>Entender sua demanda e, quando aplicável, enviar informações, orçamento ou proposta</li>
                                      <li>Dar continuidade ao relacionamento relacionado ao seu pedido (retornos, agendamentos e esclarecimentos)</li>
                                      <li>Manter um histórico do atendimento para organização interna e melhoria do serviço</li>
                                      <li>Proteger a Controladora contra fraudes, abusos e incidentes de segurança</li>
                                    </ul>
                                    <p>Não utilizamos seus dados para finalidades incompatíveis com as descritas acima.</p>
                                  </div>

                                  <div className="space-y-2">
                                    <h4 className="font-bold text-white">3) Base legal do tratamento</h4>
                                    <p>O tratamento dos dados pode ocorrer com base em:</p>
                                    <ul className="list-disc pl-5">
                                      <li>Procedimentos preliminares relacionados a contrato (ex.: retorno de orçamento/proposta)</li>
                                      <li>Legítimo interesse (ex.: organizar e manter o histórico do atendimento e garantir segurança do site), sempre respeitando seus direitos e expectativas</li>
                                      <li>Cumprimento de obrigação legal/regulatória, quando aplicável</li>
                                    </ul>
                                    <p>Observação: caso a Controladora ofereça comunicações promocionais (marketing), isso deve ser feito com opção específica e destacada, quando aplicável.</p>
                                  </div>

                                  <div className="space-y-2">
                                    <h4 className="font-bold text-white">4) Compartilhamento de dados</h4>
                                    <p>Podemos compartilhar seus dados somente quando necessário para viabilizar o atendimento e o funcionamento do site, com fornecedores e serviços como:</p>
                                    <ul className="list-disc pl-5">
                                      <li>Hospedagem do site e infraestrutura</li>
                                      <li>Plataformas de e-mail e atendimento/CRM (quando usadas)</li>
                                      <li>Ferramentas de formulários e automação de mensagens (quando usadas)</li>
                                      <li>Serviços de segurança/anti-spam</li>
                                    </ul>
                                    <p>Esses terceiros recebem apenas o mínimo necessário e são orientados a tratar os dados com segurança e apenas para as finalidades descritas nesta Política.</p>
                                  </div>

                                  <div className="space-y-2">
                                    <h4 className="font-bold text-white">5) Armazenamento e prazo de retenção</h4>
                                    <p>Os dados serão armazenados pelo tempo necessário para:</p>
                                    <ul className="list-disc pl-5">
                                      <li>Responder e concluir o atendimento da sua solicitação</li>
                                      <li>Manter registro do contato e histórico do atendimento</li>
                                      <li>Cumprir obrigações legais e resguardar direitos da Controladora</li>
                                    </ul>
                                    <p>Como referência operacional, a Controladora poderá manter registros de contato por até 12 (doze) meses após o último atendimento, salvo se houver necessidade de retenção por prazo maior por obrigação legal, exercício regular de direitos ou outra base legal aplicável.</p>
                                  </div>

                                  <div className="space-y-2">
                                    <h4 className="font-bold text-white">6) Seus direitos como titular</h4>
                                    <p>Você pode solicitar, a qualquer momento:</p>
                                    <ul className="list-disc pl-5">
                                      <li>Confirmação do tratamento e acesso aos seus dados</li>
                                      <li>Correção de dados incompletos, inexatos ou desatualizados</li>
                                      <li>Informações sobre uso e compartilhamento</li>
                                      <li>Eliminação de dados, quando cabível</li>
                                      <li>Revogação de consentimento, quando essa for a base utilizada</li>
                                      <li>Outros direitos previstos na legislação aplicável</li>
                                    </ul>
                                    <p>As solicitações serão atendidas conforme os prazos e requisitos legais.</p>
                                  </div>

                                  <div className="space-y-2">
                                    <h4 className="font-bold text-white">7) Como entrar em contato (Canal de Privacidade)</h4>
                                    <p>Para dúvidas, solicitações ou exercício de direitos, fale com a Controladora:</p>
                                    <p>E-mail: contato@vbtech.com.br</p>
                                    <p>WhatsApp/Telefone: (11) 4257-0789</p>
                                    <p>Endereço: Avenida dos Autonomistas, 2561, Sala 12 13 14, Centro, CEP 06090-020, 6789 - SP</p>
                                  </div>

                                  <div className="space-y-2">
                                    <h4 className="font-bold text-white">8) Segurança da informação</h4>
                                    <p>Adotamos medidas técnicas e organizacionais razoáveis para proteger seus dados contra acessos não autorizados, perda, uso indevido, alteração ou divulgação. Ainda assim, nenhum sistema é totalmente livre de riscos.</p>
                                  </div>

                                  <div className="space-y-2">
                                    <h4 className="font-bold text-white">9) Links externos</h4>
                                    <p>Nosso site pode conter links para sites de terceiros. Não somos responsáveis pelas práticas de privacidade desses ambientes. Recomendamos que você leia as políticas deles ao acessar.</p>
                                  </div>

                                  <div className="space-y-2">
                                    <h4 className="font-bold text-white">10) Alterações desta Política</h4>
                                    <p>Esta Política pode ser atualizada a qualquer momento para refletir melhorias, alterações legais ou mudanças de operação. A versão vigente será sempre a publicada nesta página, com data de atualização.</p>
                                  </div>

                                  <div className="space-y-2">
                                    <h4 className="font-bold text-white">DECLARAÇÃO DE CIÊNCIA</h4>
                                    <p>Ao marcar “Li e aceito a Política de Privacidade” no formulário, você declara que leu e está ciente das condições acima, autorizando o uso dos seus dados para fins de atendimento e retorno do contato.</p>
                                  </div>
                                </DialogDescription>
                              </DialogHeader>
                            </DialogContent>
                          </Dialog>
                          .
                        </FormLabel>
                        <p className="text-xs text-muted-foreground mt-2">
                          Usaremos seus dados apenas para responder sua mensagem e dar continuidade ao atendimento, conforme nossa Política de Privacidade.
                        </p>
                      </div>
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-12 shadow-[0_0_20px_rgba(45,169,225,0.3)]">
                  Enviar Mensagem
                </Button>
              </form>
            </Form>
          </GlassCard>
        </motion.div>
      </div>
    </Section>
  );
}
