import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";

const STEPS = [
  { title: "Diagnóstico", text: "Análise do ambiente e prioridades" },
  { title: "Plano de Ação", text: "Definição de etapas claras" },
  { title: "Implantação", text: "Execução e padronização" },
  { title: "Operação", text: "Monitoramento e rotinas" },
  { title: "Evolução", text: "Melhoria contínua e prevenção" }
];

export function HowWeWork() {
  return (
    <Section id="como" className="py-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold font-heading text-white mb-4">
          Da análise à melhoria contínua
        </h2>
        <p className="text-muted-foreground">Como trabalhamos</p>
      </div>

      <div className="relative">
        {/* Line for desktop */}
        <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent -translate-y-1/2" />
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 relative z-10">
          {STEPS.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-12 h-12 rounded-full bg-black border-2 border-primary/50 flex items-center justify-center text-primary font-bold z-10 group-hover:bg-primary group-hover:text-white transition-all shadow-[0_0_15px_rgba(45,169,225,0.2)]">
                {index + 1}
              </div>
              <h3 className="text-xl font-bold text-white mt-6 mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
