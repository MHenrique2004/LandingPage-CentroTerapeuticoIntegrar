import React from 'react';
import { DIRECT_IMAGE_ASSETS } from '../data/content';
import { Quote } from 'lucide-react';

export const QuemSomosSection: React.FC = () => {
  const therapistImg = DIRECT_IMAGE_ASSETS[1]; // therapist_playing
  const blocksImg = DIRECT_IMAGE_ASSETS[2]; // wooden_blocks

  return (
    <section id="sobre" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* Top 2-Column Text & Quote Card */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
        {/* Left Column: Quem Somos */}
        <div className="md:col-span-7 bg-[#f5f2fc] p-8 sm:p-10 rounded-3xl border border-[#e4e1eb] flex flex-col justify-center space-y-4">
          <h2 className="font-display text-5xl sm:text-6xl text-[#000061] tracking-wider uppercase">
            QUEM SOMOS
          </h2>
          <p className="text-base sm:text-lg text-[#1b1b22] leading-relaxed font-normal">
            O <strong className="font-bold text-[#000061]">Centro Terapêutico Integrar</strong> nasceu com um propósito claro: mudar a trajetória de crianças e adolescentes com <strong className="text-[#006782]">Autismo, TDAH</strong> e outras neurodivergências através de práticas baseadas em evidências.
          </p>
        </div>

        {/* Right Column: Highlight Quote Box */}
        <div className="md:col-span-5 bg-[#e4e1eb]/60 p-8 sm:p-10 rounded-3xl border border-[#c6c5d5]/50 flex items-center justify-center relative overflow-hidden">
          <Quote className="absolute top-4 right-4 w-16 h-16 text-[#000061]/10 -rotate-12" />
          <blockquote className="relative z-10 text-lg sm:text-xl font-bold text-[#1b1b22] italic leading-snug text-center">
            "A gente não acredita naquele modelo em que os pais apenas esperam na recepção enquanto a porta do consultório se fecha."
          </blockquote>
        </div>
      </div>

      {/* Grid with 2 Imagery Cards matching screenshot */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Left wider image: Therapist & Child */}
        <div className="md:col-span-8 rounded-3xl overflow-hidden shadow-sm group border border-[#e4e1eb] bg-white">
          <div className="relative h-[320px] sm:h-[400px] overflow-hidden">
            <img
                src="/Images/img_0773.jpg"
                alt="Terapeuta de costas"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 flex items-end">
              <p className="text-white text-sm font-semibold">
                {"Renato Saatman, Terapeuta Ocupacional, trabalhando com criança autista em um externo."}
              </p>
            </div>
          </div>
        </div>

        {/* Right square image: Wooden Blocks */}
        <div className="md:col-span-4 rounded-3xl overflow-hidden shadow-sm group border border-[#e4e1eb] bg-[#8edcfd]/20 p-2">
          <div className="relative h-[320px] sm:h-[400px] rounded-2xl overflow-hidden">
            <img
                src="/Images/img_0794.jpg"
                alt="Terapeuta sorrindo"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            <div className="absolute bottom-3 left-3 right-3 bg-white/90 backdrop-blur-md p-3 rounded-xl border border-white/50 text-xs font-bold text-[#000061]">
              Um de nossos terapeutas sorrindo durante uma sessão de funcional.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
