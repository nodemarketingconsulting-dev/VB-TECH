import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { revealVariants } from "@/lib/motion";

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

// Duplicate list to create seamless loop
const ROW_1 = [...PARTNERS, ...PARTNERS, ...PARTNERS, ...PARTNERS];
const ROW_2 = [...PARTNERS.reverse(), ...PARTNERS, ...PARTNERS, ...PARTNERS]; // Reversing one just for variety if desired, but user just said 2 rows. Let's keep original order or maybe shuffle slightly. Actually let's just use the same order for consistency or maybe shift them.
// Let's just use the same list extended.

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

        <div className="space-y-8 overflow-hidden">
          {/* Row 1 - Moving Right */}
          <div className="relative w-full">
            <motion.div 
              className="flex gap-6 w-max"
              animate={{ x: ["-50%", "0%"] }}
              transition={{ 
                duration: 40, 
                repeat: Infinity, 
                ease: "linear" 
              }}
            >
              {ROW_1.map((partner, index) => (
                <div 
                  key={`row1-${index}`}
                  className="w-[200px] md:w-[240px] bg-[#1e293b] rounded-xl p-4 md:p-6 h-24 md:h-32 flex items-center justify-center border border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.1)] relative overflow-hidden group shrink-0"
                >
                  {/* Subtle Gradient Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-100" />
                  
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className="relative z-10 max-w-[85%] max-h-[80%] object-contain"
                  />
                  
                  {/* Bottom Line Accent */}
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
                </div>
              ))}
            </motion.div>
            
            {/* Fade edges */}
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-black to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-black to-transparent z-10" />
          </div>

          {/* Row 2 - Moving Left */}
          <div className="relative w-full">
            <motion.div 
              className="flex gap-6 w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ 
                duration: 40, 
                repeat: Infinity, 
                ease: "linear" 
              }}
            >
              {ROW_1.map((partner, index) => (
                <div 
                  key={`row2-${index}`}
                  className="w-[200px] md:w-[240px] bg-[#1e293b] rounded-xl p-4 md:p-6 h-24 md:h-32 flex items-center justify-center border border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.1)] relative overflow-hidden group shrink-0"
                >
                  {/* Subtle Gradient Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-100" />
                  
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className="relative z-10 max-w-[85%] max-h-[80%] object-contain"
                  />
                  
                  {/* Bottom Line Accent */}
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
                </div>
              ))}
            </motion.div>

            {/* Fade edges */}
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-black to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-black to-transparent z-10" />
          </div>
        </div>
      </div>
    </Section>
  );
}
