import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { GlassCard } from "@/components/ui/glass-card";

const TECHS = [
  "Microsoft 365",
  "Bitdefender",
  "Fortinet",
  "GoTo",
  "HD Telecom"
];

export function Technologies() {
  return (
    <Section id="tecnologias" className="py-20 bg-black/50">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold font-heading text-white mb-4">
          Tecnologias e Parceiros
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Trabalhamos com soluções reconhecidas para entregar estabilidade, segurança e suporte com qualidade.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {TECHS.map((tech, index) => (
          <GlassCard 
            key={index}
            hoverEffect
            className="px-8 py-4 flex items-center justify-center min-w-[150px]"
          >
             <span className="font-bold text-white/70 hover:text-white transition-colors">{tech}</span>
          </GlassCard>
        ))}
      </div>
    </Section>
  );
}
