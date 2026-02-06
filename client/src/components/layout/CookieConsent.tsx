import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";

export function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Check if user has already accepted/rejected cookies
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      // Small delay to show after page load
      const timer = setTimeout(() => setShow(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie_consent", "accepted");
    setShow(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie_consent", "declined");
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="max-w-6xl mx-auto">
            <div className="bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
              
              {/* Decorative gradient */}
              <div className="absolute -left-10 top-0 w-32 h-32 bg-primary/20 rounded-full blur-[50px] pointer-events-none" />

              <div className="flex items-start gap-4 relative z-10 flex-1">
                <div className="bg-white/5 p-3 rounded-xl shrink-0">
                   <Cookie className="w-6 h-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-white text-lg">Cookies e Privacidade</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl">
                    Utilizamos cookies para melhorar sua experiência, analisar o tráfego e personalizar conteúdos. 
                    Ao continuar navegando, você concorda com nossa{" "}
                    <Link href="/politica-privacidade">
                      <a className="text-primary hover:underline font-medium">Política de Privacidade</a>
                    </Link>.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto relative z-10">
                <button
                  onClick={handleDecline}
                  className="px-6 py-2.5 rounded-lg border border-white/10 text-white/70 hover:bg-white/5 hover:text-white transition-colors text-sm font-medium"
                >
                  Recusar
                </button>
                <button
                  onClick={handleAccept}
                  className="px-6 py-2.5 rounded-lg bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20 transition-all hover:scale-105 active:scale-95 text-sm font-bold"
                >
                  Aceitar todos
                </button>
              </div>

              <button 
                onClick={() => setShow(false)} 
                className="absolute top-4 right-4 text-white/30 hover:text-white transition-colors md:hidden"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
