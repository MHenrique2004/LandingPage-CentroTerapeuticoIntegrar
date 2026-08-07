import React from 'react';
import { DIRECT_IMAGE_ASSETS } from '../data/content';
import { Home, Heart, ShieldCheck } from 'lucide-react';

export const SeuFilhoSection: React.FC = () => {
  const motherChildImg = DIRECT_IMAGE_ASSETS[3]; // mother_hugging_child

  return (
    <section id="diferenciais" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-[#f5f2fc] rounded-[2.5rem] p-8 sm:p-12 md:p-16 border border-[#e4e1eb] shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column Text */}
        <div className="lg:col-span-6 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8edcfd]/30 text-[#006782] text-xs font-bold uppercase tracking-wider">
            <Home className="w-4 h-4" />
            <span>Empoderamento Parental</span>
          </div>

          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl text-[#000061] tracking-wider uppercase leading-none">
            SEU FILHO PASSA ALGUMAS HORAS CONOSCO, MAS VIVE COM VOCÊ.
          </h2>

          <p className="text-base sm:text-lg text-[#464653] font-medium leading-relaxed">
            Nosso modelo foca no empoderamento parental. O sucesso terapêutico multiplica-se quando a família atua em conjunto com a equipe clínica.
          </p>

          <div className="space-y-3 pt-2">
            <div className="flex items-start gap-3 p-3.5 bg-white rounded-2xl border border-[#e4e1eb]">
              <div className="p-2 rounded-xl bg-[#8edcfd]/20 text-[#006782] shrink-0">
                <Heart className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#000061]">Orientações Práticas</h4>
                <p className="text-xs text-[#464653]">Aprenda exatamente o que fazer em momentos de birra, seletividade ou recusa de tarefas.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3.5 bg-white rounded-2xl border border-[#e4e1eb]">
              <div className="p-2 rounded-xl bg-[#8edcfd]/20 text-[#006782] shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#000061]">Segurança e Acolhimento sem Julgamentos</h4>
                <p className="text-xs text-[#464653]">Espaço seguro para os pais compartilharem dores, dúvidas e celebrarem cada pequena conquista.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column Illustration Image */}
        <div className="lg:col-span-6 relative">
          <div className="relative rounded-3xl overflow-hidden shadow-md border-4 border-white bg-gradient-to-tr from-[#8edcfd]/40 to-[#efecf6] p-3">
            <img
              src={motherChildImg.url}
              alt={motherChildImg.title}
              referrerPolicy="no-referrer"
              className="w-full h-[360px] sm:h-[420px] object-cover rounded-2xl shadow-sm"
            />
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-white/60 shadow-md">
              <p className="text-xs sm:text-sm font-bold text-[#000061] text-center">
                A verdadeira transformação acontece no cotidiano do lar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
