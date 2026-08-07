import React from 'react';
import { DIRECT_IMAGE_ASSETS } from '../data/content';
import { MessageSquare, ArrowUpRight, Sparkles } from 'lucide-react';

export const WhatsappBannerSection: React.FC = () => {
  const kidImg = DIRECT_IMAGE_ASSETS[5]; // happy_kid_headphones

  const handleOpenWhatsapp = () => {
    const text = encodeURIComponent('Olá! Vim pelo site do Centro Terapêutico Integrar (CTI) e gostaria de agendar uma avaliação e tirar dúvidas sobre a co-terapia.');
    window.open(`https://wa.me/5511999999999?text=${text}`, '_blank');
  };

  return (
    <section id="contato" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Dark Navy Rounded Container matching screenshot */}
      <div className="relative bg-gradient-to-r from-[#000061] via-[#111689] to-[#000061] rounded-[2.5rem] p-8 sm:p-12 md:p-16 overflow-hidden shadow-2xl text-white">
        {/* Decorative background grid and glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#8edcfd]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
          {/* Left Column Text & CTA Button */}
          <div className="lg:col-span-8 space-y-6">
            <h2 className="font-display text-5xl sm:text-7xl md:text-8xl tracking-wider uppercase leading-none text-white drop-shadow-sm">
              PRONTO PARA TRANSFORMAR O DIA A DIA DA SUA FAMÍLIA COM PARCERIA, CIÊNCIA E AFETO?
            </h2>

            <p className="text-base sm:text-lg text-white/90 font-medium leading-relaxed max-w-2xl">
              Fale diretamente com a nossa equipe multidisciplinar. Tire suas dúvidas sobre o método de co-terapia, avaliações e suporte escolar.
            </p>

            {/* Vibrant Yellow/Gold WhatsApp CTA Button (Matching screenshot) */}
            <div className="pt-4">
              <button
                onClick={handleOpenWhatsapp}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-amber-400 hover:bg-amber-300 text-[#000061] font-extrabold text-sm sm:text-base tracking-wider uppercase rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 cursor-pointer active:scale-95"
              >
                <MessageSquare className="w-5 h-5 fill-current text-[#000061]" />
                <span>INICIAR CONVERSA NO WHATSAPP AGORA</span>
                <ArrowUpRight className="w-5 h-5 ml-1" />
              </button>
            </div>
          </div>

          {/* Right Column Child Character Graphic */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-3xl overflow-hidden border-4 border-white/20 shadow-2xl bg-[#8edcfd]/20 p-2 backdrop-blur-sm group">
              <img
                src={kidImg.url}
                alt={kidImg.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-3 right-3 bg-emerald-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-md">
                <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                Online Agora
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
