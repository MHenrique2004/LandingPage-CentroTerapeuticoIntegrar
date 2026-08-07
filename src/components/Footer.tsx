import React from 'react';
import { MapPin, Clock, Mail, Instagram, MessageCircle, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenAgendamento: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAgendamento }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#000061] text-white pt-16 pb-8 border-t border-[#111689]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <a href="#home" className="flex items-center group py-1">
              <img
                src="assets\Images\LOGO CTI branca.png"
                alt="Centro Terapêutico Integrar Logo Branca"
                className="h-2 sm:h-30 w-auto object-contain group-hover:scale-105 transition-transform"
                referrerPolicy="no-referrer"
              />
        </a>
            </div>

            <p className="text-xs sm:text-sm text-white/80 font-normal leading-relaxed max-w-sm">
              Nossa missão é equipar famílias com ciência e afeto, transformando pais em co-terapeutas para um desenvolvimento real e contínuo.
            </p>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-extrabold tracking-widest text-[#8edcfd] uppercase">NAVEGAÇÃO</h4>
            <ul className="space-y-2 text-xs font-semibold text-white/80">
              <li><a href="#home" className="hover:text-white transition-colors">O Manifesto</a></li>
              <li><a href="#missao" className="hover:text-white transition-colors">Método Co-Terapeuta</a></li>
              <li><a href="#especialidades" className="hover:text-white transition-colors">Especialidades</a></li>
              <li><a href="#espaco" className="hover:text-white transition-colors">Nosso Espaço</a></li>
              <li><a href="#sobre" className="hover:text-white transition-colors">Depoimentos</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-extrabold tracking-widest text-[#8edcfd] uppercase">CONTATO</h4>
            <ul className="space-y-2.5 text-xs font-medium text-white/80">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#8edcfd] shrink-0 mt-0.5" />
                <span>Rua Exemplo, 123 - São Paulo, SP</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#8edcfd] shrink-0" />
                <span>Seg - Sex: 08h às 19h</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#8edcfd] shrink-0" />
                <span>contato@cti.com.br</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-extrabold tracking-widest text-[#8edcfd] uppercase">REDES SOCIAIS</h4>
            <div className="space-y-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 bg-[#111689] hover:bg-white hover:text-[#000061] text-xs font-bold rounded-xl transition-all border border-white/10"
              >
                <Instagram className="w-3.5 h-3.5 text-[#8edcfd]" />
                <span>@centroterapeuticointegrar</span>
              </a>

              <button
                onClick={onOpenAgendamento}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-xs font-bold rounded-xl transition-all border border-white/10 cursor-pointer"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#8edcfd]" />
                <span>Enviar Mensagem Rápida</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom copyright line matching screenshot */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-white/60 font-medium">
          <p>© Centro Terapêutico Integrar. Todos os direitos reservados. Desenvolvimento focado no bem-estar e na evolução contínua da família.</p>

          <div className="flex items-center gap-4">
            <a href="#home" className="hover:text-white transition-colors">Privacidade</a>
            <span className="opacity-40">•</span>
            <a href="#home" className="hover:text-white transition-colors">Termos</a>
            <button
              onClick={scrollToTop}
              className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors ml-2 cursor-pointer"
              title="Voltar ao topo"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
