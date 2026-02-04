import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { revealVariants, staggerContainer } from "@/lib/motion";

const BENEFITS = [
  "Menos paradas e mais previsibilidade",
  "Redução de riscos e vulnerabilidades",
  "Mais produtividade com ambiente organizado",
  "Melhor controle de acessos e mudanças",
  "TI alinhada ao objetivo de negócio"
];

export function Benefits() {
  return (
    <Section id="beneficios" className="py-24 bg-gradient-to-b from-primary/5 to-transparent">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
           variants={revealVariants}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-white mb-6">
            O que muda quando a TI é bem gerida
          </h2>
          <Button 
            onClick={() => document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })}
            className="mt-8 bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-12 text-base"
          >
            Quero organizar minha TI <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </motion.div>

        <motion.div 
          className="space-y-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {BENEFITS.map((benefit, index) => (
            <motion.div
              key={index}
              variants={revealVariants}
              className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-primary/30 transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold shrink-0">
                {index + 1}
              </div>
              <span className="text-lg text-white/90">{benefit}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
