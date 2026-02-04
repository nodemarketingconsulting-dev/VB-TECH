import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { GlassCard } from "@/components/ui/glass-card";
import { AlertTriangle, Zap, Lock, BarChart3, TrendingUp } from "lucide-react";

const SIGNS = [
  { icon: TrendingUp, title: "Expansão ou fusão", text: "Sua empresa cresceu e a TI antiga não acompanha mais a demanda." },
  { icon: Zap, title: "Lentidão e falhas", text: "Quedas frequentes, sistema lento e funcionários parados." },
  { icon: AlertTriangle, title: "Ameaças de segurança", text: "Medo de ransonware, vírus ou vazamento de dados críticos." },
  { icon: Lock, title: "Prevenção de riscos", text: "Necessidade de garantir compliance e evitar multas." },
  { icon: BarChart3, title: "Otimização de recursos", text: "Gastos com TI que não trazem retorno claro." },
];

export function Signs() {
  return (
    <Section id="sinais" className="py-24">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold font-heading text-white mb-6"
        >
          Sinais de que sua TI precisa de estrutura
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-lg text-muted-foreground max-w-2xl mx-auto"
        >
          Se algum desses pontos está presente, o melhor caminho é organizar a base: disponibilidade, segurança e controle.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SIGNS.map((sign, index) => (
          <GlassCard 
            key={index} 
            hoverEffect 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex flex-col items-start gap-4"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-2">
              <sign.icon size={24} />
            </div>
            <h3 className="text-xl font-bold text-white">{sign.title}</h3>
            <p className="text-muted-foreground">{sign.text}</p>
          </GlassCard>
        ))}
      </div>
    </Section>
  );
}
