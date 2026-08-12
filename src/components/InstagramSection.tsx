import React from 'react';
import { Users, Instagram, Heart, Sparkles, ExternalLink } from 'lucide-react';

export const InstagramSection: React.FC = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center space-y-8">
      {/* Top Icon Motif */}
      <div className="flex justify-center">
        <div className="w-16 h-16 rounded-full bg-[#e4e1eb] text-[#000061] flex items-center justify-center border-2 border-white shadow-md">
          <Users className="w-8 h-8" />
        </div>
      </div>

      {/* Main Heading */}
      <h2 className="font-display text-5xl sm:text-7xl md:text-8xl text-[#000061] tracking-wider uppercase max-w-4xl mx-auto leading-none">
        VOCÊ NÃO PRECISA PASSAR POR ESSA JORNADA SOZINHO
      </h2>

      {/* Subtitle */}
      <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#464653] font-medium leading-relaxed">
        Acompanhe nosso dia a dia, dicas práticas e conteúdo focado em desenvolvimento infantil no nosso Instagram.
      </p>

      {/* Instagram Button */}
      <div className="pt-2">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center max-w-full gap-2 sm:gap-3 px-4 sm:px-8 py-3 sm:py-3.5 text-[10px] sm:text-sm font-extrabold tracking-normal sm:tracking-widest text-[#000061] uppercase bg-white border-2 border-[#000061] rounded-full hover:bg-[#000061] hover:text-white transition-all shadow-sm hover:shadow-md cursor-pointer group"
        >
          <Instagram className="w-4 h-4 shrink-0 text-[#006782] group-hover:text-white transition-colors" />
          <span className="truncate">@CENTROTERAPEUTICOINTEGRAR</span>
          <ExternalLink className="w-3.5 h-3.5 shrink-0 opacity-60 group-hover:opacity-100" />
        </a>
      </div>

      {/* Mini Instagram Posts Grid Mockup - a ser adicionado no futuro */}
      {/* {<div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto text-left">
        <div className="bg-white p-3 rounded-2xl border border-[#e4e1eb] shadow-xs space-y-2 hover:shadow-md transition-shadow">
          <div className="h-28 rounded-xl bg-[#8edcfd]/30 overflow-hidden relative group">
            <img
              src="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=400&q=80"
              alt="Dica de Rotina ABA"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform"
            />
            <span className="absolute top-2 left-2 bg-white/90 text-[10px] font-bold px-2 py-0.5 rounded-md text-[#000061]">Dica Prática</span>
          </div>
          <p className="text-xs font-bold text-[#1b1b22] line-clamp-2">Eexemplo de post</p>
          <div className="flex items-center gap-1 text-[11px] text-[#006782] font-semibold">
            <Heart className="w-3 h-3 fill-current text-rose-500" /> 0 curtidas
          </div>
        </div>

        <div className="bg-white p-3 rounded-2xl border border-[#e4e1eb] shadow-xs space-y-2 hover:shadow-md transition-shadow">
          <div className="h-28 rounded-xl bg-[#8edcfd]/30 overflow-hidden relative group">
            <img
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=400&q=80"
              alt="Manejando o TDAH"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform"
            />
            <span className="absolute top-2 left-2 bg-white/90 text-[10px] font-bold px-2 py-0.5 rounded-md text-[#000061]">TDAH & Foco</span>
          </div>
          <p className="text-xs font-bold text-[#1b1b22] line-clamp-2">exemplo 2</p>
          <div className="flex items-center gap-1 text-[11px] text-[#006782] font-semibold">
            <Heart className="w-3 h-3 fill-current text-rose-500" /> 980 curtidas
          </div>
        </div>

        <div className="bg-white p-3 rounded-2xl border border-[#e4e1eb] shadow-xs space-y-2 hover:shadow-md transition-shadow">
          <div className="h-28 rounded-xl bg-[#8edcfd]/30 overflow-hidden relative group">
            <img
              src="https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&w=400&q=80"
              alt="Sensorial"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform"
            />
            <span className="absolute top-2 left-2 bg-white/90 text-[10px] font-bold px-2 py-0.5 rounded-md text-[#000061]">Sensorial</span>
          </div>
          <p className="text-xs font-bold text-[#1b1b22] line-clamp-2">exemplo 3</p>
          <div className="flex items-center gap-1 text-[11px] text-[#006782] font-semibold">
            <Heart className="w-3 h-3 fill-current text-rose-500" /> 1.510 curtidas
          </div>
        </div>

        <div className="bg-white p-3 rounded-2xl border border-[#e4e1eb] shadow-xs space-y-2 hover:shadow-md transition-shadow">
          <div className="h-28 rounded-xl bg-[#8edcfd]/30 overflow-hidden relative group">
            <img
              src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=400&q=80"
              alt="Co-terapia"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform"
            />
            <span className="absolute top-2 left-2 bg-white/90 text-[10px] font-bold px-2 py-0.5 rounded-md text-[#000061]">Depoimentos</span>
          </div>
          <p className="text-xs font-bold text-[#1b1b22] line-clamp-2">"exemplo 4"</p>
          <div className="flex items-center gap-1 text-[11px] text-[#006782] font-semibold">
            <Heart className="w-3 h-3 fill-current text-rose-500" /> 2.100 curtidas
          </div>
        </div>
      </div>} */}
    </section>
  );
};
