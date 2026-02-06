import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Section } from "@/components/ui/section";
import { Briefcase, Building2, ShoppingBag, Stethoscope, HardHat } from "lucide-react";
import { motion } from "framer-motion";
import { revealVariants, staggerContainer } from "@/lib/motion";

const SEGMENTS = [
  { icon: Stethoscope, name: "Saúde" },
  { icon: HardHat, name: "Ocupacional" },
  { icon: Building2, name: "Indústria" },
  { icon: ShoppingBag, name: "Varejo" },
  { icon: Briefcase, name: "Serviços" },
];

const CLIENTS = [
  { name: "HClin", logo: "/images/clients/hclin.png" },
  { name: "Climed", logo: "/images/clients/climed.png" },
  { name: "New Oldany", logo: "/images/clients/newoldany.png" },
  { name: "Icobit", logo: "/images/clients/icobit.png" },
  { name: "Hub Plast", logo: "/images/clients/hubplast.png" },
  { name: "Kids Store", logo: "/images/clients/kidsstore.png" },
  { name: "Vida Drogaria", logo: "/images/clients/vidadrogaria.png" },
  { name: "Pimpolho", logo: "/images/clients/pimpolho.png" },
  { name: "ITL", logo: "/images/clients/itl.png" },
  { name: "D'Natale", logo: "/images/clients/dnatale.png" },
  { name: "TI Connected", logo: "/images/clients/ticonnected.png" },
  { name: "Vital Prev", logo: "/images/clients/vitalprev.png" },
  { name: "C4 Ocupacional", logo: "/images/clients/c4.png" },
  { name: "STEM Consultoria", logo: "/images/clients/stem.png" },
  { name: "IPEX", logo: "/images/clients/ipex.png" },
  { name: "Maria K", logo: "/images/clients/mariak.png" },
  { name: "Metaltela", logo: "/images/clients/metaltela.png" },
];

export function Clients() {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "start", dragFree: true }, [
    Autoplay({ delay: 2000, stopOnInteraction: false, rootNode: (emblaRoot) => emblaRoot.parentElement })
  ]);

  return (
    <Section id="clientes" className="py-20 overflow-hidden">
      <div className="text-center mb-16">
        <motion.div
           variants={revealVariants}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-4">
            Empresas que confiam na VB Tech
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            Parceiros que já contam com nossa estabilidade e segurança.
          </p>
        </motion.div>

        {/* Client Logos Carousel */}
        <div className="w-full max-w-7xl mx-auto px-4 mb-24 relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-8 items-center">
              {CLIENTS.map((client, index) => (
                <div key={index} className="flex-[0_0_150px] md:flex-[0_0_200px] min-w-0 pl-8">
                  <div className="h-24 md:h-32 bg-white rounded-xl border border-white/10 shadow-lg flex items-center justify-center p-4 hover:scale-105 transition-transform duration-300">
                    <img 
                      src={client.logo} 
                      alt={client.name} 
                      className="max-w-full max-h-full object-contain" 
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Gradients to fade edges */}
          <div className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
        </div>

        <motion.div
           variants={revealVariants}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
           className="mt-20"
        >
          <h2 className="text-2xl md:text-3xl font-bold font-heading text-white mb-6">
            Segmentos Atendidos
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Soluções especializadas para diversos setores do mercado.
          </p>
        </motion.div>
      </div>

      <motion.div 
        className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto px-4"
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
