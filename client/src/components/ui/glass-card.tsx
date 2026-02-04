import { cn } from "@/lib/utils";
import { HTMLMotionProps, motion } from "framer-motion";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export function GlassCard({ children, className, hoverEffect = false, ...props }: GlassCardProps) {
  return (
    <motion.div
      className={cn(
        "glass-card rounded-2xl p-6 relative overflow-hidden transition-all duration-300",
        hoverEffect && "hover:border-primary/40 hover:shadow-[0_0_30px_rgba(45,169,225,0.1)] hover:-translate-y-1",
        className
      )}
      {...props}
    >
      {/* Subtle gradient blob for depth */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
