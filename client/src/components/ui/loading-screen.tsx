import { motion } from "framer-motion";
import { Shield, Lock, ShieldCheck } from "lucide-react";

export function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center overflow-hidden">
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0077be_1px,transparent_1px),linear-gradient(to_bottom,#0077be_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        {/* Logo Container with Shield Effect */}
        <div className="relative w-40 h-40 md:w-56 md:h-56 flex items-center justify-center mb-8">
          {/* Rotating Outer Shield Ring - "Firewall" */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-primary/30 border-t-primary border-r-primary shadow-[0_0_30px_rgba(45,169,225,0.2)]"
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute inset-2 rounded-full border border-primary/20 border-b-cyan-400"
            animate={{ rotate: -360 }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          />
          
          {/* Scanning Effect */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-transparent z-0"
            animate={{ top: ['-100%', '100%'] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />

          {/* Center Logo */}
          <motion.div 
            className="relative z-10 w-24 h-24 md:w-32 md:h-32 bg-black/50 backdrop-blur-sm rounded-full p-4 flex items-center justify-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img 
              src="/images/vb-tech-logo.png" 
              alt="VB Tech" 
              className="w-full h-full object-contain" 
            />
          </motion.div>

          {/* Protection Icons Orbiting */}
          <motion.div
            className="absolute inset-0 z-20"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black text-primary p-1.5 rounded-full border border-primary/50 shadow-[0_0_15px_rgba(45,169,225,0.5)]">
               <ShieldCheck size={20} />
            </div>
          </motion.div>
          
          <motion.div
            className="absolute inset-0 z-20"
            animate={{ rotate: -360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          >
             <div className="absolute bottom-4 right-0 bg-black text-cyan-400 p-1.5 rounded-full border border-cyan-400/50 shadow-[0_0_15px_rgba(34,211,238,0.5)]">
               <Lock size={16} />
            </div>
          </motion.div>
        </div>

        {/* Loading Text & Status */}
        <div className="space-y-2 text-center">
          <motion.h2 
            className="text-2xl font-bold text-white tracking-wider"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            VB TECH
          </motion.h2>
          
          <div className="flex flex-col items-center gap-2">
            <div className="h-1 w-48 bg-white/10 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-primary box-shadow-[0_0_10px_rgba(45,169,225,0.8)]"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2.5, ease: "easeInOut" }}
              />
            </div>
            
            <div className="flex items-center gap-2 text-xs text-primary/80 font-mono uppercase tracking-widest">
              <ShieldCheck className="w-3 h-3" />
              <span>Verificando conexão segura...</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
