import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { Briefcase, Building2, ShoppingBag, Stethoscope } from "lucide-react";

const SEGMENTS = [
  { icon: Stethoscope, name: "Saúde" },
  { icon: Building2, name: "Indústria" },
  { icon: ShoppingBag, name: "Varejo" },
  { icon: Briefcase, name: "Serviços" },
];

export function Clients() {
  return (
    <Section id="clientes" className="py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-4">
          Empresas que precisam de estabilidade
        </h2>
        <p className="text-lg text-muted-foreground">
          Saúde, indústria, varejo e serviços, com suporte remoto e presencial.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {SEGMENTS.map((seg, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl bg-white/5 border border-white/5 flex flex-col items-center justify-center gap-3 hover:border-primary/30 transition-colors group"
          >
            <seg.icon className="w-8 h-8 text-primary/50 group-hover:text-primary transition-colors" />
            <span className="font-medium text-white">{seg.name}</span>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
