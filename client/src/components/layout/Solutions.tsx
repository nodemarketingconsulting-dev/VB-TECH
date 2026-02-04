import { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { ArrowRight, CheckCircle2, Server, Wifi, Shield, Cloud, X } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const SOLUTIONS = [
  {
    id: "terceirizacao",
    title: "Terceirização de TI",
    shortText: "Gestão de ativos, backup seguro, monitoramento proativo e suporte ágil.",
    fullText: "Gestão de ativos, backup seguro, monitoramento proativo e suporte ágil (remoto e presencial), com controle e organização do ambiente.",
    deliverables: [
      "Gestão de ativos e organização do ambiente",
      "Monitoramento proativo e suporte ágil",
      "Backup seguro e manutenção preventiva",
      "Acompanhamento por histórico e SLA"
    ],
    icon: Server,
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: "infra",
    title: "Infraestrutura de Redes",
    shortText: "Diagnóstico e implantação de redes físicas e Wi-Fi com foco em performance.",
    fullText: "Diagnóstico, monitoramento, planejamento, análise, implantação e testes para redes físicas e Wi-Fi, com foco em performance e estabilidade.",
    deliverables: [
      "Diagnóstico de rede e melhorias de performance",
      "Planejamento e análise de rede wireless",
      "Site Survey e desenho de cobertura",
      "Implantação, testes e adequação a normas",
      "Gerenciamento e monitoramento da infraestrutura"
    ],
    icon: Wifi,
    color: "from-indigo-500 to-purple-500"
  },
  {
    id: "seguranca",
    title: "Segurança da Informação",
    shortText: "Proteção completa: análise de riscos, firewall e antivírus gerenciados.",
    fullText: "Proteção completa para reduzir vulnerabilidades e fortalecer sua operação: análise de riscos, firewall e antivírus gerenciados, além de mapeamento de segurança.",
    deliverables: [
      "Correções priorizadas com base em risco real",
      "Firewall e antivírus gerenciados",
      "Mapeamento e fortalecimento de segurança (CIS v8 SMB)",
      "Melhores práticas e prevenção de incidentes"
    ],
    icon: Shield,
    color: "from-red-500 to-orange-500"
  },
  {
    id: "cloud",
    title: "Cloud & Internet",
    shortText: "Soluções em cloud e conectividade para acesso seguro e escalabilidade.",
    fullText: "Soluções em cloud e conectividade para acesso seguro a dados, produtividade e escalabilidade.",
    deliverables: [
      "Internet dedicada e banda larga",
      "Telefonia VoIP e móvel",
      "Hospedagem e backup em nuvem",
      "Integração e suporte com Microsoft 365"
    ],
    icon: Cloud,
    color: "from-emerald-500 to-teal-500"
  }
];

export function Solutions() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedSolution, setSelectedSolution] = useState<typeof SOLUTIONS[0] | null>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section id="solucoes" ref={containerRef} className="relative h-[400vh] bg-black">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />
        
        <div className="relative w-full max-w-7xl mx-auto px-4 md:px-8 h-full flex flex-col justify-center">
          <div className="mb-8 md:mb-12 relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold font-heading text-white mb-4">
              Nossas Soluções
            </h2>
            <p className="text-xl text-muted-foreground">
              Tudo o que você precisa para operar com estabilidade.
            </p>
          </div>

          <div className="relative w-full h-[60vh] md:h-[500px]">
            {SOLUTIONS.map((solution, index) => {
              // Calculate range for each card
              const step = 1 / SOLUTIONS.length;
              const start = index * step;
              const end = start + step;

              const opacity = useTransform(
                scrollYProgress,
                [start, start + 0.1, end - 0.1, end],
                [0, 1, 1, 0] // Fade in, stay, fade out (or stack)
              );
              
              // Modified for stacking effect: 
              // Card i enters from bottom, covers card i-1.
              // We need a specific transform logic.
              // Actually, the prompt asked for "Overlay the next", like stacked cards.
              
              // Let's try a simpler stacking approach where they don't fade out, just get covered.
              const y = useTransform(
                scrollYProgress,
                [start, start + 0.1], // Enter quickly
                ["100%", "0%"]
              );
              
              const scale = useTransform(
                scrollYProgress,
                [start, end],
                [1, 0.95] // Slight scale down as next one comes
              );
              
              // First card should be visible from start, others enter
              const isFirst = index === 0;
              const cardY = isFirst ? "0%" : y;
              const cardOpacity = isFirst 
                  ? useTransform(scrollYProgress, [0, 0.2], [1, 1]) 
                  : useTransform(scrollYProgress, [start - 0.1, start], [0, 1]);

              return (
                <motion.div
                  key={solution.id}
                  style={{ 
                    y: cardY,
                    zIndex: index,
                    scale: isFirst ? useTransform(scrollYProgress, [0, 0.25], [1, 0.95]) : scale,
                  }}
                  className="absolute inset-0 w-full"
                >
                  <GlassCard className="h-full w-full flex flex-col md:flex-row items-center gap-8 md:gap-12 p-8 md:p-12 border-t border-white/10 bg-black/80 backdrop-blur-xl">
                    <div className={`w-20 h-20 md:w-32 md:h-32 rounded-2xl bg-gradient-to-br ${solution.color} flex items-center justify-center shrink-0 shadow-lg shadow-white/5`}>
                      <solution.icon className="text-white w-10 h-10 md:w-16 md:h-16" />
                    </div>
                    
                    <div className="flex-1 space-y-6 text-center md:text-left">
                      <h3 className="text-3xl md:text-4xl font-bold font-heading text-white">
                        {solution.title}
                      </h3>
                      <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                        {solution.shortText}
                      </p>
                      <Button 
                        className="bg-primary/20 hover:bg-primary/30 text-primary border border-primary/50"
                        onClick={() => setSelectedSolution(solution)}
                      >
                        Ver detalhes <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>

                    <div className="hidden lg:block text-9xl font-bold text-white/5 absolute right-8 top-8">
                      0{index + 1}
                    </div>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>

          {/* Progress Indicators */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-50">
            {SOLUTIONS.map((_, idx) => (
              <motion.div
                key={idx}
                className="w-3 h-3 rounded-full bg-white/20"
                style={{
                  backgroundColor: useTransform(
                    scrollYProgress,
                    [idx * 0.25, (idx * 0.25) + 0.1],
                    ["rgba(255,255,255,0.2)", "#2DA9E1"]
                  ),
                  scale: useTransform(
                    scrollYProgress,
                    [idx * 0.25, (idx * 0.25) + 0.1],
                    [1, 1.5]
                  )
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Modal Details */}
      <Dialog open={!!selectedSolution} onOpenChange={(open) => !open && setSelectedSolution(null)}>
        <DialogContent className="bg-black/90 backdrop-blur-xl border-white/10 text-white max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-heading flex items-center gap-3 text-primary">
              {selectedSolution && <selectedSolution.icon className="w-6 h-6" />}
              {selectedSolution?.title}
            </DialogTitle>
            <DialogDescription className="text-lg text-muted-foreground mt-4">
              {selectedSolution?.fullText}
            </DialogDescription>
          </DialogHeader>

          <div className="mt-6 space-y-4">
            <h4 className="font-bold text-white uppercase text-sm tracking-wider">O que entregamos:</h4>
            <ul className="grid gap-3">
              {selectedSolution?.deliverables.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm md:text-base text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 flex justify-end">
             <Button className="bg-primary text-white" onClick={() => {
               setSelectedSolution(null);
               document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
             }}>
               Tenho interesse
             </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
