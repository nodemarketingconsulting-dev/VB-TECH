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
  const isScrollingRef = useRef(false);

  // Manual scroll lock logic
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      // Determine scroll direction
      const isDown = e.deltaY > 0;
      const isUp = e.deltaY < 0;

      // Logic:
      // If going DOWN and NOT at end -> Lock & Next
      // If going UP and NOT at start -> Lock & Prev
      // Otherwise -> Allow default (pass through)
      
      const isAtEnd = activeIndex === SOLUTIONS.length - 1;
      const isAtStart = activeIndex === 0;

      if ((isDown && !isAtEnd) || (isUp && !isAtStart)) {
        e.preventDefault();
        e.stopPropagation();

        if (isScrollingRef.current) return;
        isScrollingRef.current = true;

        if (isDown) {
           setActiveIndex(prev => prev + 1);
        } else {
           setActiveIndex(prev => prev - 1);
        }

        // Debounce slightly to prevent rapid firing
        setTimeout(() => {
          isScrollingRef.current = false;
        }, 500);
      }
    };

    // Attach non-passive listener to properly prevent default
    container.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, [activeIndex]); // Re-bind when index changes to check bounds correctly

  const nextSlide = () => {
    if (activeIndex < SOLUTIONS.length - 1) {
       setActiveIndex(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (activeIndex > 0) {
      setActiveIndex(prev => prev - 1);
    }
  };

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (info.offset.x < -50 && activeIndex < SOLUTIONS.length - 1) {
      nextSlide();
    } else if (info.offset.x > 50 && activeIndex > 0) {
      prevSlide();
    }
  };

  return (
    <section 
      id="solucoes" 
      className="py-24 bg-black overflow-hidden relative min-h-[90vh] flex flex-col justify-center"
      ref={containerRef} // Attach ref to the section itself for the event listener
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
        {activeIndex > 0 && (
          <button 
            onClick={prevSlide}
            className="absolute left-4 md:left-12 z-50 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all backdrop-blur-sm"
          >
            <ChevronLeft size={24} />
          </button>
        )}
        
        {activeIndex < SOLUTIONS.length - 1 && (
          <button 
            onClick={nextSlide}
            className="absolute right-4 md:right-12 z-50 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all backdrop-blur-sm"
          >
            <ChevronRight size={24} />
          </button>
        )}

        {/* Carousel Container */}
        <div className="relative w-full h-full flex items-center justify-center">
          {SOLUTIONS.map((solution, index) => {
            const offset = index - activeIndex; 
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
                    ? -window.innerWidth 
                    : offset * 40,
                  scale: isPassed ? 0.9 : 1 - (offset * 0.05),
                  zIndex: SOLUTIONS.length - offset,
                  opacity: isPassed ? 0 : 1 - (offset * 0.2),
                  rotateY: isPassed ? -20 : offset * -2,
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
                  marginLeft: window.innerWidth < 768 ? "-42.5vw" : "-400px",
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
