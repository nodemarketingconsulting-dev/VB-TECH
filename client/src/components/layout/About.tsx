import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { GlassCard } from "@/components/ui/glass-card";
import { Target, Lightbulb } from "lucide-react";
import { revealVariants } from "@/lib/motion";

export function About() {
  return (
    <Section id="sobre" className="py-24 relative">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          variants={revealVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-white">
            Sobre a VB Tech
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A VB Tech administra todas as atividades, soluções e recursos tecnológicos com o objetivo de garantir segurança e um crescimento organizado para sua empresa, com qualidade e melhoria contínua por meio de recursos tecnológicos que descomplicam a operação.
          </p>
          
          <div className="flex items-start gap-4 text-muted-foreground">
             <Lightbulb className="w-6 h-6 text-primary shrink-0 mt-1" />
             <p>Foco no que realmente importa: o seu negócio. Deixe a tecnologia conosco.</p>
          </div>
        </motion.div>

        <motion.div
           variants={revealVariants}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, margin: "-100px" }}
        >
          <GlassCard className="p-8 md:p-12 border-l-4 border-primary/50 relative mt-12 md:mt-0">
            <div className="absolute -top-6 left-8 md:-left-6 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg shadow-primary/30 mt-[12px] mb-[12px] ml-[-53px] mr-[-53px]">
              <Target className="text-white w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 mt-4 md:mt-2 ml-[38px] mr-[38px]">Nossa Missão</h3>
            <p className="text-lg text-white/80 italic">
              "Mitigar riscos e reduzir a fragilidade de ambientes virtuais, promover economia e aumentar a eficiência para que sua empresa foque no que realmente importa."
            </p>
          </GlassCard>
        </motion.div>
      </div>
    </Section>
  );
}
