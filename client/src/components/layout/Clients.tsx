import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { Briefcase, Building2, ShoppingBag, Stethoscope, HardHat } from "lucide-react";
import { revealVariants, staggerContainer } from "@/lib/motion";

const SEGMENTS = [
  { icon: Stethoscope, name: "Saúde" },
  { icon: HardHat, name: "Ocupacional" },
  { icon: Building2, name: "Indústria" },
  { icon: ShoppingBag, name: "Varejo" },
  { icon: Briefcase, name: "Serviços" },
];

export function Clients() {
  return (
    <Section id="clientes" className="py-20">
      <div className="text-center mb-12">
        <motion.div
           variants={revealVariants}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-4">
            Empresas que precisam de estabilidade
          </h2>
          <p className="text-lg text-muted-foreground">
            Saúde, indústria, varejo e serviços, com suporte remoto e presencial.
          </p>
        </motion.div>
      </div>

      <motion.div 
        className="flex flex-wrap justify-center gap-6"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {SEGMENTS.map((seg, index) => (
          <motion.div
            key={index}
            variants={revealVariants}
            className="w-[160px] p-6 rounded-2xl bg-white/5 border border-white/5 flex flex-col items-center justify-center gap-3 hover:border-primary/30 transition-colors group"
          >
            <seg.icon className="w-8 h-8 text-primary/50 group-hover:text-primary transition-colors" />
            <span className="font-medium text-white">{seg.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
