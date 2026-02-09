import { useEffect, useState } from "react";
import { useRoute, Link } from "wouter";
import { ProposalData } from "./ProposalCreator";
import { Section } from "@/components/ui/section";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { Check, Download, Phone, Mail, Calendar, ArrowRight, ShieldCheck, Server, Users } from "lucide-react";
import { motion } from "framer-motion";
import { LoadingScreen } from "@/components/ui/loading-screen";

export default function ProposalViewer() {
  const [, params] = useRoute("/proposta/:id");
  const [proposal, setProposal] = useState<ProposalData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching data
    const fetchProposal = () => {
      const storedProposals = localStorage.getItem("vbtech_proposals");
      if (storedProposals && params?.id) {
        const proposals: ProposalData[] = JSON.parse(storedProposals);
        const found = proposals.find(p => p.id === params.id);
        if (found) {
          setProposal(found);
        }
      }
      setLoading(false);
    };

    setTimeout(fetchProposal, 1000); // Simulate network delay
  }, [params?.id]);

  if (loading) return <LoadingScreen />;

  if (!proposal) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
        <GlassCard className="max-w-md p-8 text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Proposta não encontrada</h1>
          <p className="text-muted-foreground mb-6">O link pode estar expirado ou incorreto.</p>
          <Link href="/">
            <Button>Voltar para o site</Button>
          </Link>
        </GlassCard>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Cover Section */}
      <section className="min-h-screen relative flex items-center justify-center py-20 px-4">
        <div className="absolute inset-0 bg-[url('/images/tech-hero-bg.png')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/80 to-background" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-48 mx-auto mb-12"
          >
            <img src="/images/vb-tech-logo.png" alt="VB Tech" className="w-full drop-shadow-[0_0_20px_rgba(45,169,225,0.5)]" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-primary font-medium tracking-widest uppercase text-sm">Proposta Comercial</span>
            <h1 className="text-4xl md:text-6xl font-bold font-heading text-white mt-4 mb-6 leading-tight">
              Soluções de Tecnologia para<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">
                {proposal.clientCompany}
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col md:flex-row items-center justify-center gap-6 text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              <span>A/C: {proposal.clientName}</span>
            </div>
            <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-white/10" />
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              <span>Validade: {new Date(proposal.validityDate).toLocaleDateString('pt-BR')}</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="pt-12"
          >
            <a href="#apresentacao" className="animate-bounce inline-block">
              <ArrowRight className="w-8 h-8 text-white/50 rotate-90" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <Section id="apresentacao" className="py-24 bg-black/20">
        <div className="max-w-4xl mx-auto px-4">
          <GlassCard className="p-8 md:p-12">
            <h2 className="text-3xl font-bold font-heading text-white mb-8 border-l-4 border-primary pl-4">Contexto & Objetivo</h2>
            <div className="text-lg text-white/80 leading-relaxed whitespace-pre-wrap">
              {proposal.introduction}
            </div>
          </GlassCard>
        </div>
      </Section>

      {/* Why Us (Placeholder for "Quem Somos" slide content) */}
      <Section className="py-24">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold font-heading text-white mb-4">Por que a VB Tech?</h2>
            <p className="text-muted-foreground">Nossa metodologia focada em prevenção e estabilidade.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <GlassCard className="p-6 text-center hover:border-primary/50 transition-colors">
              <ShieldCheck className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-white mb-2">Segurança</h3>
              <p className="text-sm text-muted-foreground">Proteção avançada contra ameaças digitais e backup garantido.</p>
            </GlassCard>
            <GlassCard className="p-6 text-center hover:border-primary/50 transition-colors">
              <Server className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-white mb-2">Infraestrutura</h3>
              <p className="text-sm text-muted-foreground">Monitoramento 24/7 de servidores e redes para máxima uptime.</p>
            </GlassCard>
            <GlassCard className="p-6 text-center hover:border-primary/50 transition-colors">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-white mb-2">Suporte Humanizado</h3>
              <p className="text-sm text-muted-foreground">Atendimento rápido e resolutivo, sem "robôs" complicados.</p>
            </GlassCard>
          </div>
        </div>
      </Section>

      {/* Scope / Solution */}
      <Section className="py-24 bg-primary/5">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold font-heading text-white mb-12 text-center">Escopo da Solução</h2>
          
          <div className="space-y-6">
            {proposal.scopeItems.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <GlassCard className="p-6 md:p-8 flex gap-6 items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-1">
                    <Check className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Investment */}
      <Section className="py-24">
        <div className="max-w-4xl mx-auto px-4">
          <GlassCard className="p-8 md:p-16 border-primary/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-32 bg-primary/10 blur-[100px] rounded-full pointer-events-none" />
            
            <h2 className="text-3xl font-bold font-heading text-white mb-12 text-center relative z-10">Investimento</h2>

            <div className="grid md:grid-cols-2 gap-12 relative z-10">
              <div className="space-y-2 text-center md:text-left">
                <p className="text-muted-foreground uppercase tracking-widest text-sm">Valor Mensal</p>
                <p className="text-5xl font-bold text-white">{proposal.monthlyFee}</p>
                <p className="text-sm text-white/50">Cobrança recorrente</p>
              </div>

              <div className="space-y-2 text-center md:text-left border-t md:border-t-0 md:border-l border-white/10 pt-8 md:pt-0 md:pl-12">
                <p className="text-muted-foreground uppercase tracking-widest text-sm">Setup (Implantação)</p>
                <p className="text-4xl font-bold text-white">{proposal.setupFee}</p>
                <p className="text-sm text-white/50">Pagamento único</p>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10 relative z-10">
               <h4 className="font-bold text-white mb-4">Condições Comerciais</h4>
               <div className="text-muted-foreground text-sm space-y-2 whitespace-pre-wrap font-mono bg-black/30 p-4 rounded-lg">
                 {proposal.conditions}
               </div>
               <p className="text-sm text-white/60 mt-4">
                 <strong>Forma de Pagamento:</strong> {proposal.paymentTerms}
               </p>
            </div>
          </GlassCard>
        </div>
      </Section>

      {/* CTA / Footer */}
      <section className="py-20 bg-black border-t border-white/10 text-center">
        <div className="max-w-2xl mx-auto px-4 space-y-8">
          <h2 className="text-3xl font-bold font-heading text-white">Pronto para iniciar?</h2>
          <p className="text-muted-foreground">
            Aprovar esta proposta é o primeiro passo para uma TI mais segura e eficiente.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
             <Button className="h-12 px-8 bg-[#25D366] hover:bg-[#20bd5a] text-white w-full md:w-auto text-lg" onClick={() => window.open("https://wa.me/551142570789?text=Ol%C3%A1%2C%20aprovei%20a%20proposta%20comercial!", "_blank")}>
               <Check className="w-5 h-5 mr-2" /> Aprovar Proposta
             </Button>
             <Button variant="outline" className="h-12 px-8 w-full md:w-auto text-lg" onClick={() => window.print()}>
               <Download className="w-5 h-5 mr-2" /> Salvar em PDF
             </Button>
          </div>
          
          <div className="pt-12 text-sm text-muted-foreground">
            <p>VB Tech - Gestão de TI</p>
            <p>Dúvidas? (11) 4257-0789 | contato@vbtech.com.br</p>
          </div>
        </div>
      </section>
    </div>
  );
}
