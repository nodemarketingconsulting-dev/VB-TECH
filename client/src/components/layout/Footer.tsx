import { Link } from "wouter";
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black pt-20 pb-10 border-t border-white/10 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[300px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/">
              <a className="flex items-center gap-2 cursor-pointer">
                <div className="w-32 h-10 relative">
                  <img src="/images/vb-tech-logo.png" alt="VB Tech" className="w-full h-full object-contain" />
                </div>
              </a>
            </Link>
            <p className="text-muted-foreground leading-relaxed">
              Gestão de TI com estabilidade, segurança e controle para o seu negócio crescer sem barreiras.
            </p>
            <div className="flex gap-4">
              <a href="https://br.linkedin.com/company/vbtech-ti" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/70 hover:text-primary hover:bg-white/5 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/70 hover:text-primary hover:bg-white/5 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/70 hover:text-primary hover:bg-white/5 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Navegação</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-muted-foreground hover:text-primary transition-colors">Home</a></li>
              <li><a href="#sobre" className="text-muted-foreground hover:text-primary transition-colors">Sobre</a></li>
              <li><a href="#solucoes" className="text-muted-foreground hover:text-primary transition-colors">Soluções</a></li>
              <li><a href="#clientes" className="text-muted-foreground hover:text-primary transition-colors">Clientes</a></li>
              <li><Link href="/cliente"><a className="text-primary hover:text-primary/80 transition-colors">Área do Cliente</a></Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                <span>Avenida dos Autonomistas, 2561, Sala 12 13 14, Centro, CEP 06090-020, 6789 - SP</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>(11) 4257-0789</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>contato@vbtech.com.br</span>
              </li>
            </ul>
          </div>

          {/* Newsletter / Extra */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Diagnóstico</h4>
            <p className="text-muted-foreground mb-4">
              Descubra como otimizar sua estrutura de TI com uma análise gratuita.
            </p>
            <a href="#contato" className="inline-block bg-white/5 border border-white/10 hover:border-primary/50 text-white px-6 py-2 rounded-lg transition-all hover:bg-white/10">
              Solicitar agora
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} VB Tech. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <Link href="/politica-privacidade">
              <a className="hover:text-white transition-colors">Privacidade</a>
            </Link>
            <a href="#" className="hover:text-white transition-colors">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
