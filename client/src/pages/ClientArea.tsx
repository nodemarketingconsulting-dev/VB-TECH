import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { ArrowLeft, Construction } from "lucide-react";

export default function ClientArea() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden p-4">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-primary/10 blur-[150px] rounded-full pointer-events-none" />

      <GlassCard className="max-w-md w-full text-center p-12 flex flex-col items-center gap-6">
        <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4 animate-pulse">
          <Construction size={40} />
        </div>
        
        <h1 className="text-3xl font-bold font-heading text-white">Área do Cliente</h1>
        <p className="text-muted-foreground">
          Estamos preparando um ambiente exclusivo para você acompanhar seus chamados e projetos.
        </p>

        <div className="w-full h-px bg-white/10 my-2" />

        <div className="space-y-3 w-full">
           <Button variant="outline" className="w-full border-white/10 text-white hover:bg-white/5" asChild>
             <Link href="/">
               <ArrowLeft className="mr-2 h-4 w-4" /> Voltar para Home
             </Link>
           </Button>
           
           <Button className="w-full bg-primary hover:bg-primary/90 text-white" onClick={() => window.open("mailto:suporte@vbtech.com.br")}>
             Falar com Suporte
           </Button>
        </div>
      </GlassCard>
    </div>
  );
}
