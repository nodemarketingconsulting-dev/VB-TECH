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
  { name: "Partner", logo: "/images/partners/shield_logo.png" }, // Using generic name as requested to hide text
  { name: "Partner", logo: "/images/partners/block_h.png" },
];

export function Technologies() {
  return (
    <Section id="tecnologias" className="py-24 bg-black/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-30" />
      
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
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {PARTNERS.map((partner, index) => (
            <motion.div 
              key={index}
              variants={revealVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative bg-white rounded-2xl p-6 h-32 flex items-center justify-center shadow-lg hover:shadow-primary/20 transition-all duration-300 overflow-hidden cursor-default"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-gray-50 opacity-100 group-hover:opacity-90 transition-opacity" />
              
              <img 
                src={partner.logo} 
                alt={partner.name}
                className="relative z-10 max-w-full max-h-full object-contain filter transition-all duration-300 drop-shadow-sm group-hover:drop-shadow-md"
              />
              
              {/* Subtle shine effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/50 to-transparent translate-x-[-100%] group-hover:animate-shine z-20 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
