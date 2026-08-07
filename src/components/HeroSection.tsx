import React from 'react';
import { Heart, Calendar, ArrowRight, CheckCircle2 } from 'lucide-react';
import { DIRECT_IMAGE_ASSETS } from '../data/content';

interface HeroSectionProps {
  onOpenAgendamento: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenAgendamento }) => {
  
  return (
    <section id="home" className="relative min-h-[85vh] flex items-center justify-center overflow-hidden py-16 px-4 sm:px-6 lg:px-8">
      {/* Background Image Container with Soft Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/Images/background.png"
          alt="Foto principal da clínica"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 filter brightness-95"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#fbf8ff] via-[#fbf8ff]/60 to-black/20" />
      </div>

      {/* Content Box */}
      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8 pt-8">
        {/* Main Display Headline in Six Caps Condensed Style */}
        <div className="space-y-2">
          <h1 className="font-display text-6xl sm:text-8xl md:text-9xl text-[#000061] tracking-wider leading-none drop-shadow-sm uppercase">
            MUDANDO A FORMA COMO FAZEMOS TERAPIA
          </h1>
        </div>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl font-medium text-[#1b1b22] leading-relaxed drop-shadow-xs">
          Conheça o <strong className="text-[#000061] font-bold">Centro Terapêutico Integrar</strong>, onde a tecnologia e a ciência estão a serviço do cuidado humano.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={onOpenAgendamento}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-[#000061] font-extrabold text-sm sm:text-base tracking-wider uppercase rounded-full shadow-lg hover:shadow-xl hover:bg-[#000061] hover:text-white border-2 border-white transition-all transform hover:-translate-y-0.5 cursor-pointer"
          >
            <Calendar className="w-5 h-5 text-[#006782] group-hover:text-white" />
            <span>AGENDE UMA AVALIAÇÃO</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </button>

          {/* Social proof pill badge */}
          <div className="inline-flex items-center gap-2.5 px-6 py-3 bg-white/90 backdrop-blur-md rounded-full shadow-md border border-[#c6c5d5]/50 text-xs sm:text-sm font-bold text-[#000061]">
            <div className="p-1.5 rounded-full bg-[#8edcfd]/30 text-[#006782]">
              <Heart className="w-4 h-4 fill-current" />
            </div>
            <span>+500 famílias acompanhadas</span>
          </div>
        </div>

        {/* Quick Trust Highlights */}
        <div className="pt-8 grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-3xl mx-auto text-left sm:text-center text-xs sm:text-sm font-semibold text-[#464653]">
          <div className="flex items-center justify-center gap-2 bg-white/70 backdrop-blur-sm p-2.5 rounded-xl border border-white">
            <CheckCircle2 className="w-4 h-4 text-[#006782] shrink-0" />
            <span>Ciência ABA</span>
          </div>
          <div className="flex items-center justify-center gap-2 bg-white/70 backdrop-blur-sm p-2.5 rounded-xl border border-white">
            <CheckCircle2 className="w-4 h-4 text-[#006782] shrink-0" />
            <span>Empoderamento Parental</span>
          </div>
          <div className="col-span-2 sm:col-span-1 flex items-center justify-center gap-2 bg-white/70 backdrop-blur-sm p-2.5 rounded-xl border border-white">
            <CheckCircle2 className="w-4 h-4 text-[#006782] shrink-0" />
            <span>Equipe Multidisciplinar</span>
          </div>
        </div>
      </div>
    </section>
  );
};
