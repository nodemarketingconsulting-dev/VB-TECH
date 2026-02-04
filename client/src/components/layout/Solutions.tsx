import { useState, useRef, useEffect } from "react";
import { motion, useAnimation, PanInfo } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, CheckCircle2, Server, Wifi, Shield, Cloud, ChevronRight, ChevronLeft } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

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
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedSolution, setSelectedSolution] = useState<typeof SOLUTIONS[0] | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const wheelTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % SOLUTIONS.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + SOLUTIONS.length) % SOLUTIONS.length);
  };

  // Allow mouse dragging
  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (info.offset.x < -50) {
      nextSlide();
    } else if (info.offset.x > 50) {
      prevSlide();
    }
  };

  // Allow mouse wheel scrolling to navigate
  const handleWheel = (e: React.WheelEvent) => {
    // Only navigate if we're not scrolling the page excessively
    // We want to capture the "intent" to switch slides
    if (wheelTimeoutRef.current) return;

    if (e.deltaY > 20 || e.deltaX > 20) {
      nextSlide();
      wheelTimeoutRef.current = setTimeout(() => { wheelTimeoutRef.current = null; }, 500);
    } else if (e.deltaY < -20 || e.deltaX < -20) {
      prevSlide();
      wheelTimeoutRef.current = setTimeout(() => { wheelTimeoutRef.current = null; }, 500);
    }
  };

  return (
    <section 
      id="solucoes" 
      className="py-24 bg-black overflow-hidden relative min-h-[90vh] flex flex-col justify-center"
      onWheel={handleWheel}
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full relative z-10 mb-12">
        <h2 className="text-4xl md:text-6xl font-bold font-heading text-white mb-2">
          Nossas Soluções
        </h2>
        <p className="text-xl text-muted-foreground">
          Tudo o que você precisa para operar com estabilidade.
        </p>
      </div>

      <div className="relative w-full max-w-[1400px] mx-auto h-[500px] flex items-center justify-center perspective-[1000px]">
        {/* Navigation Arrows */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 md:left-12 z-50 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all backdrop-blur-sm"
        >
          <ChevronLeft size={24} />
        </button>
        
        <button 
          onClick={nextSlide}
          className="absolute right-4 md:right-12 z-50 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all backdrop-blur-sm"
        >
          <ChevronRight size={24} />
        </button>

        {/* Carousel Container */}
        <div className="relative w-full h-full flex items-center justify-center" ref={containerRef}>
          {SOLUTIONS.map((solution, index) => {
            // Calculate relative position based on active index
            // e.g., if active is 1: 0 is prev (-1), 1 is active (0), 2 is next (1)
            let relativeIndex = index - activeIndex;

            // Handle infinite wrapping visual logic
            // We want smooth stacking, so we don't need true infinite wrapping 
            // but we need to handle the stack order correctly.
            
            // Simplified "Deck of Cards" logic:
            // Active (0): Center, Scale 1, Z-index 10
            // Next (+1): Right, Scale 0.9, Z-index 9 (Under active)
            // Prev (-1): Left, Scale 0.9, Opacity 0 (Hidden or faded)
            // Far Next (+2): Right+, Scale 0.8, Z-index 8
            
            // But user said: "Sobe por cima do outro na horizontal" (Climb on top of other horizontally)
            // This implies the incoming card (from right?) slides OVER the current one?
            // Or like the Apple stack where right cards are stacked and slide IN.
            
            // Let's implement: Right cards are stacked. Active is front-left. 
            // When going Next: Active slides out left. Next slides in to became Active.
            // All future cards shift left.
            
            const isVisible = index >= activeIndex;
            const offset = index - activeIndex; // 0 for active, 1 for next...

            // If index < activeIndex, it's "passed" - slide it far left and hide
            const isPassed = index < activeIndex;

            return (
              <motion.div
                key={solution.id}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={handleDragEnd}
                initial={false}
                animate={{
                  x: isPassed 
                    ? -window.innerWidth // Slide out completely to left
                    : offset * 40, // Stacked cards peek out by 40px each
                  scale: isPassed ? 0.9 : 1 - (offset * 0.05), // Slightly smaller as they go back
                  zIndex: SOLUTIONS.length - offset, // Active is highest, then descending
                  opacity: isPassed ? 0 : 1 - (offset * 0.2), // Fade out deeper cards
                  rotateY: isPassed ? -20 : offset * -2, // Subtle 3D effect
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30
                }}
                className={cn(
                  "absolute w-[85vw] md:w-[800px] h-auto md:h-[450px] cursor-grab active:cursor-grabbing",
                  "rounded-3xl border border-white/10 shadow-2xl",
                  "bg-[#0a0a0a] overflow-hidden origin-center-left"
                )}
                style={{
                  left: "50%",
                  marginLeft: window.innerWidth < 768 ? "-42.5vw" : "-400px", // Center alignment hack
                }}
              >
                <div className="h-full flex flex-col md:flex-row p-6 md:p-12 gap-8 items-center">
                  <div className={`w-20 h-20 md:w-32 md:h-32 rounded-2xl bg-gradient-to-br ${solution.color} flex items-center justify-center shrink-0 shadow-lg shadow-white/5`}>
                    <solution.icon className="text-white w-10 h-10 md:w-16 md:h-16" />
                  </div>
                  
                  <div className="flex-1 space-y-6 text-center md:text-left">
                    <h3 className="text-2xl md:text-4xl font-bold font-heading text-white">
                      {solution.title}
                    </h3>
                    <p className="text-base md:text-xl text-muted-foreground leading-relaxed">
                      {solution.shortText}
                    </p>
                    <Button 
                      className="bg-primary/20 hover:bg-primary/30 text-primary border border-primary/50"
                      onClick={() => setSelectedSolution(solution)}
                    >
                      Ver detalhes <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                  
                  <div className="hidden md:block text-8xl font-bold text-white/5 absolute right-8 top-8 pointer-events-none">
                    0{index + 1}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
        
        {/* Indicators */}
        <div className="absolute bottom-[-40px] flex gap-3">
          {SOLUTIONS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={cn(
                "w-3 h-3 rounded-full transition-all duration-300",
                idx === activeIndex ? "bg-primary w-8" : "bg-white/20 hover:bg-white/40"
              )}
            />
          ))}
        </div>
      </div>

      {/* Modal Details */}
      <Dialog open={!!selectedSolution} onOpenChange={(open) => !open && setSelectedSolution(null)}>
        <DialogContent className="bg-zinc-950 border-white/10 text-white max-w-2xl">
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
