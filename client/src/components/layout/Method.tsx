import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { GlassCard } from "@/components/ui/glass-card";
import { Users, FileText, Settings } from "lucide-react";
import { revealVariants, staggerContainer } from "@/lib/motion";

const METHOD_CARDS = [
  {
    title: "Pessoas",
    icon: Users,
    text: "Time técnico capacitado, atendimento responsável e suporte em níveis (N1 e N2)."
  },
  {
    title: "Processos",
    icon: FileText,
    text: "Padrões de atendimento, prevenção, documentação e rastreabilidade."
  },
  {
    title: "Ferramentas",
    icon: Settings,
    text: "Monitoramento e gestão para dar visibilidade, previsibilidade e segurança operacional."
  },
];

export function Method() {
  return (
    <Section id="metodo" className="py-24 bg-gradient-to-b from-transparent to-primary/5">
      <div className="text-center mb-20">
        <motion.div
           variants={revealVariants}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-white mb-6">
            Pessoas, Processos e Ferramentas
          </h2>
          <p className="text-xl text-muted-foreground">
            Tecnologia bem gerida não é só "resolver chamado". É método, rotina e controle.
          </p>
        </motion.div>
      </div>

      <motion.div 
        className="grid md:grid-cols-3 gap-8"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {METHOD_CARDS.map((card, idx) => (
          <GlassCard
            key={idx}
            hoverEffect
            variants={revealVariants}
            className="text-center p-8 group"
          >
            <div className="w-20 h-20 mx-auto bg-white/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              <card.icon className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">{card.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{card.text}</p>
          </GlassCard>
        ))}
      </motion.div>
    </Section>
  );
}
