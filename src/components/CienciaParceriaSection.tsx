import React from 'react';
import { DIRECT_IMAGE_ASSETS } from '../data/content';
import { Award, Check, Microchip } from 'lucide-react';

export const CienciaParceriaSection: React.FC = () => {
  const clinicalLeadImg = DIRECT_IMAGE_ASSETS[4]; // clinical_lead

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column Image */}
        <div className="lg:col-span-5 order-2 lg:order-1">
          <div className="relative rounded-3xl overflow-hidden border border-[#e4e1eb] bg-white p-3 shadow-md">
            <img
              src="/assets/Images/img_0589.jpg"
              alt="Foto da equipe clínica do Centro Terapêutico Integrar estudando um caso clínico juntos"
              referrerPolicy="no-referrer"
              className="w-full h-[400px] sm:h-[480px] object-cover rounded-2xl"
            />
            <div className="absolute top-6 right-6 bg-[#000061] text-white p-3 rounded-2xl shadow-lg flex items-center gap-2">
              <Award className="w-5 h-5 text-[#8edcfd]" />
              <span className="text-xs font-bold uppercase tracking-wider">Evidência Científica</span>
            </div>
          </div>
        </div>

        {/* Right Column Text */}
        <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
          {/* Top Pill Badge matching screenshot */}
          <div>
            <span className="inline-block px-4 py-2 bg-[#000061] text-white text-xs font-bold uppercase tracking-widest rounded-full shadow-xs">
              INCLUSÃO NA PRÁTICA, TODOS OS DIAS.
            </span>
          </div>

          <h2 className="font-display text-5xl sm:text-7xl text-[#000061] tracking-wider uppercase leading-none">
            CIÊNCIA COM PARCERIA DE VERDADE
          </h2>

          <p className="text-base sm:text-lg text-[#464653] font-medium leading-relaxed">
            Nossa equipe une evidência científica e parceria real. Não usamos protocolos rígidos que ignoram a individualidade da criança. Adaptamos a ciência mais rigorosa ao contexto da sua família.
          </p>

          {/* Key Bullet Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            <div className="p-4 bg-[#f5f2fc] rounded-2xl border border-[#e4e1eb] space-y-2">
              <div className="w-8 h-8 rounded-xl bg-[#006782] text-white flex items-center justify-center font-bold">
                <Check className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-[#000061] text-sm">Individualização Total</h3>
              <p className="text-xs text-[#464653]">Planos de intervenção únicos construídos para o perfil sensorial e cognitivo da criança.</p>
            </div>

            <div className="p-4 bg-[#f5f2fc] rounded-2xl border border-[#e4e1eb] space-y-2">
              <div className="w-8 h-8 rounded-xl bg-[#006782] text-white flex items-center justify-center font-bold">
                <Microchip className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-[#000061] text-sm">Tecnologia & Acompanhamento</h3>
              <p className="text-xs text-[#464653]">Relatórios digitais transparentes e acompanhamento de métricas de evolução em tempo real.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
