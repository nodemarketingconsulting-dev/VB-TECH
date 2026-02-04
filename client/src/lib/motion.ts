export const revealTransition = {
  type: "spring",
  stiffness: 70,
  damping: 20,
  mass: 1,
};

export const revealVariants = {
  hidden: { 
    opacity: 0, 
    y: 40,
    scale: 0.95,
    filter: "blur(10px)" // Add blur for that "video focus" effect
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    filter: "blur(0px)",
    transition: revealTransition
  },
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};
