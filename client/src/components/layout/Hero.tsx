import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Activity, Layers } from "lucide-react";
import { revealVariants, staggerContainer } from "@/lib/motion";

export function Hero() {
  return (
    <Section id="home" fullHeight className="pt-32 pb-20 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[60%] h-[70%] bg-gradient-to-b from-primary/10 to-transparent blur-[120px] rounded-full opacity-30 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[40%] h-[50%] bg-blue-900/10 blur-[100px] rounded-full pointer-events-none" />
        {/* Tech Grid Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{ 
            backgroundImage: "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
            backgroundSize: "4rem 4rem" 
          }} 
        />
      </div>

      <div className="relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left Content */}
        <motion.div 
          className="space-y-8 text-center lg:text-left"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={revealVariants}>
            <span className="inline-block py-1 px-3 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-4 tracking-wide">
              SOLUÇÕES EM TI
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading leading-[1.1] text-white tracking-tight">
              Integrando <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-primary/80">Soluções</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-light text-muted-foreground mt-2">
              Gestão de TI para o seu negócio.
            </h2>
          </motion.div>

          <motion.p
            variants={revealVariants}
            className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed"
          >
            Gestão de TI, redes, segurança e cloud para manter sua empresa estável, 
            segura e pronta para crescer, com suporte remoto e presencial.
          </motion.p>

          <motion.div
            variants={revealVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-12 text-base shadow-[0_0_20px_rgba(45,169,225,0.4)] hover:shadow-[0_0_30px_rgba(45,169,225,0.6)] transition-all transform hover:-translate-y-1"
              onClick={() => document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })}
            >
              Solicitar diagnóstico
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/20 text-white hover:bg-white/5 rounded-full px-8 h-12 text-base backdrop-blur-sm"
              onClick={() => window.open("mailto:contato@vbtech.com.br")}
            >
              Falar com especialista <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>

          <motion.div
            variants={revealVariants}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/5"
          >
            {[
              { icon: Activity, text: "Monitoramento proativo" },
              { icon: ShieldCheck, text: "Segurança total" },
              { icon: Layers, text: "Operação organizada" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 justify-center lg:justify-start text-sm text-muted-foreground">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0 text-primary">
                  <item.icon size={16} />
                </div>
                <span>{item.text}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, filter: "blur(20px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }} // Custom slow cinematic ease
          className="relative hidden lg:block"
        >
          <div className="relative w-full aspect-square max-w-[600px] mx-auto">
            {/* Rotating Rings */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-primary/20 border-dashed"
            />
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[10%] rounded-full border border-white/10"
            />
            
            {/* Center Visual - Use Image or Abstract CSS */}
            <div className="absolute inset-[15%] rounded-2xl glass-card flex items-center justify-center overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent mix-blend-overlay" />
               <img 
                 src="/images/tech-hero-bg.png" 
                 alt="Tech Visualization" 
                 className="w-full h-full object-cover opacity-80 mix-blend-screen"
               />
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 glass-card p-4 rounded-xl border-l-4 border-primary max-w-[200px]"
            >
              <div className="flex gap-3 items-center mb-2">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-bold text-white">Sistema Online</span>
              </div>
              <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                <div className="h-full w-[90%] bg-primary rounded-full" />
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-5 -left-5 glass-card p-4 rounded-xl border-l-4 border-purple-500 max-w-[200px]"
            >
              <div className="text-xs font-bold text-white mb-1">Ameaças Bloqueadas</div>
              <div className="text-2xl font-mono text-purple-400">99.9%</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
