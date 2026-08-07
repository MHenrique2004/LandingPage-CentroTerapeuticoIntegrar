import React from 'react';
import { Target, HeartHandshake, Sparkles } from 'lucide-react';

export const NossaMissaoSection: React.FC = () => {
  return (
    <section id="missao" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Large Rounded Primary Navy/Teal Container */}
      <div className="relative bg-gradient-to-br from-[#000061] via-[#004d62] to-[#006782] text-white p-8 sm:p-14 md:p-16 rounded-[2.5rem] shadow-xl overflow-hidden space-y-10">
        {/* Background decorative ambient lights */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#8edcfd]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-2xl pointer-events-none" />

        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-[#8edcfd] text-xs font-bold uppercase tracking-widest backdrop-blur-md">
            <Target className="w-4 h-4" />
            <span>Propósito Clínico & Familiar</span>
          </div>

          <h2 className="font-display text-6xl sm:text-7xl md:text-8xl tracking-wider uppercase text-white drop-shadow-sm">
            NOSSA MISSÃO
          </h2>

          <p className="text-base sm:text-lg md:text-xl font-normal text-white/90 leading-relaxed max-w-2xl mx-auto">
            O nosso propósito vai além da clínica. É equipar as famílias com o conhecimento e as ferramentas necessárias para continuarem o desenvolvimento em casa.
          </p>
        </div>

        {/* Nested Highlighted White Floating Card (Exact design element from screenshot) */}
        <div className="relative z-10 max-w-3xl mx-auto bg-white text-[#1b1b22] p-8 sm:p-10 rounded-2xl shadow-2xl border-4 border-[#8edcfd]/40 transform sm:-rotate-1 hover:rotate-0 transition-transform duration-300">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-[#f5f2fc] text-[#000061] hidden sm:block shrink-0">
              <HeartHandshake className="w-8 h-8" />
            </div>

            <div className="space-y-3 text-center sm:text-left">
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#000061] tracking-tight leading-snug">
                Por isso, nossa missão é ensinar você a ser co-terapeuta.
              </h3>
              <p className="text-sm sm:text-base text-[#464653] font-medium leading-relaxed">
                A gente traduz a ciência para a sua rotina, criando estratégias viáveis e reais para o dia a dia.
              </p>
            </div>
          </div>
        </div>

        {/* 3 Pillars Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-white/10 relative z-10 text-center sm:text-left">
          <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-sm space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-[#8edcfd]">01. Ciência Real</span>
            <p className="text-sm text-white/90 font-medium">Análise do Comportamento Aplicada simplificada para os pais.</p>
          </div>
          <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-sm space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-[#8edcfd]">02. Rotina em Casa</span>
            <p className="text-sm text-white/90 font-medium">Generalização dos ganhos da clínica para momentos em família.</p>
          </div>
          <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-sm space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-[#8edcfd]">03. Afeto & Autonomia</span>
            <p className="text-sm text-white/90 font-medium">Evolução contínua respeitando o tempo e perfil da criança.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
