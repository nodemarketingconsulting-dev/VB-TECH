import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { revealVariants, staggerContainer } from "@/lib/motion";

const PARTNERS = [
  { name: "Microsoft", logo: "/images/partners/microsoft.png" },
  { name: "Bitdefender", logo: "/images/partners/bitdefender.png" },
  { name: "Fortinet", logo: "/images/partners/fortinet.png" },
  { name: "GoTo", logo: "/images/partners/goto.png" },
  { name: "Dell", logo: "/images/partners/dell.png" },
  { name: "Ubiquiti", logo: "/images/partners/ubiquiti.png" },
  { name: "HostFiber", logo: "/images/partners/hostfiber.png" },
  { name: "Guard Ocean", logo: "/images/partners/guardocean.png" },
];

export function Technologies() {
  return (
    <Section id="tecnologias" className="py-24 bg-black/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div
             variants={revealVariants}
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-6">
              Tecnologias e Parceiros
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Trabalhamos com as melhores soluções do mercado para garantir a excelência.
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {PARTNERS.map((partner, index) => (
            <motion.div 
              key={index}
              variants={revealVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative bg-[#1e293b] rounded-xl p-4 md:p-6 h-28 md:h-36 flex items-center justify-center transition-all duration-500 border border-cyan-500/30 md:border-white/5 md:hover:border-cyan-500/50 shadow-[0_0_15px_rgba(6,182,212,0.1)] md:shadow-none md:hover:shadow-[0_0_20px_rgba(6,182,212,0.1)] overflow-hidden cursor-default"
            >
              {/* Subtle Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-100" />
              
              <img 
                src={partner.logo} 
                alt={partner.name}
                className="relative z-10 max-w-[90%] md:max-w-[85%] max-h-[85%] md:max-h-[80%] object-contain transition-all duration-500 md:group-hover:scale-110"
              />
              
              {/* Crisp Bottom Line Accent - Always visible on mobile, hover on desktop */}
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent scale-x-100 md:scale-x-0 md:group-hover:scale-x-100 transition-transform duration-500 ease-out" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
