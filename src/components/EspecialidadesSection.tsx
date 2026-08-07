import React, { useState } from 'react';
import { SPECIALTIES } from '../data/content';
import { Brain, Zap, MessageSquare, Sparkles, BookOpen, Users, CheckCircle, ArrowRight } from 'lucide-react';

interface EspecialidadesProps {
  onOpenAgendamento: () => void;
}

export const EspecialidadesSection: React.FC<EspecialidadesProps> = ({ onOpenAgendamento }) => {
  const [selectedId, setSelectedId] = useState<string>(SPECIALTIES[0].id);

  const selectedSpecialty = SPECIALTIES.find((s) => s.id === selectedId) || SPECIALTIES[0];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Brain': return <Brain className="w-5 h-5" />;
      case 'Zap': return <Zap className="w-5 h-5" />;
      case 'MessageSquare': return <MessageSquare className="w-5 h-5" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5" />;
      case 'BookOpen': return <BookOpen className="w-5 h-5" />;
      default: return <Users className="w-5 h-5" />;
    }
  };

  return (
    <section id="especialidades" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <span className="inline-block px-3.5 py-1.5 bg-[#8edcfd]/30 text-[#006782] text-xs font-bold uppercase tracking-widest rounded-full">
          Atendimento Multidisciplinar Integrado
        </span>
        <h2 className="font-display text-5xl sm:text-7xl text-[#000061] tracking-wider uppercase">
          NOSSAS ESPECIALIDADES
        </h2>
        <p className="text-base sm:text-lg text-[#464653] font-medium">
          Tratamentos estruturados com rigor científico e adaptação contínua para as necessidades individuais de cada criança.
        </p>
      </div>

      {/* Specialty Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {SPECIALTIES.map((spec) => {
          const isActive = spec.id === selectedId;
          return (
            <button
              key={spec.id}
              onClick={() => setSelectedId(spec.id)}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                isActive
                  ? 'bg-[#000061] text-white shadow-md scale-105'
                  : 'bg-white text-[#1b1b22] border border-[#e4e1eb] hover:bg-[#f5f2fc] hover:text-[#000061]'
              }`}
            >
              {getIcon(spec.iconName)}
              <span>{spec.title.split(' ')[0]} {spec.title.split(' ')[1] || ''}</span>
            </button>
          );
        })}
      </div>

      {/* Selected Specialty Detailed Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#e4e1eb] shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-[#f5f2fc] text-[#000061] rounded-2xl">
              {getIcon(selectedSpecialty.iconName)}
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#006782]">Especialidade Técnica</span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#000061]">{selectedSpecialty.title}</h3>
            </div>
          </div>

          <p className="text-sm sm:text-base text-[#464653] font-medium leading-relaxed">
            {selectedSpecialty.description}
          </p>

          <div className="p-4 bg-[#f5f2fc] rounded-2xl border border-[#e4e1eb] space-y-1">
            <span className="text-xs font-extrabold text-[#000061] uppercase tracking-wider">Público Alvo</span>
            <p className="text-xs sm:text-sm text-[#1b1b22] font-semibold">{selectedSpecialty.targetAudience}</p>
          </div>

          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#006782]">Benefícios & Objetivos Terapêuticos</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {selectedSpecialty.benefits.map((b, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs font-medium text-[#1b1b22]">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{b}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={onOpenAgendamento}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#000061] text-white font-bold text-xs uppercase tracking-wider rounded-full hover:bg-[#111689] transition-all cursor-pointer shadow-sm"
            >
              <span>Solicitar Avaliação em {selectedSpecialty.title.split(' ')[0]}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="relative rounded-2xl overflow-hidden shadow-md border-2 border-[#e4e1eb]">
            <img
              src={selectedSpecialty.imageUrl}
              alt={selectedSpecialty.title}
              referrerPolicy="no-referrer"
              className="w-full h-[320px] sm:h-[380px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent p-6 flex flex-col justify-end text-white">
              <span className="text-xs uppercase font-bold text-[#8edcfd]">Metodologia CTI</span>
              <p className="text-sm font-semibold">Sessões individuais focadas no engajamento positivo e naturalista.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
