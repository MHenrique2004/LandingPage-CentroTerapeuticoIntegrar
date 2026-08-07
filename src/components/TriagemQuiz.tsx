import React, { useState } from 'react';
import { QUIZ_QUESTIONS } from '../data/content';
import { HelpCircle, CheckCircle, ArrowRight, RotateCcw, MessageSquare, Sparkles } from 'lucide-react';

export const TriagemQuiz: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);

  const handleSelectOption = (points: number) => {
    const newAnswers = [...answers, points];
    setAnswers(newAnswers);

    if (currentStep < QUIZ_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers([]);
    setShowResult(false);
  };

  const totalPoints = answers.reduce((a, b) => a + b, 0);

  const getRecommendation = () => {
    if (totalPoints <= 4) {
      return {
        title: 'Acompanhamento de Marcos do Desenvolvimento',
        description: 'Seu filho demonstra um bom engajamento básico. Recomendamos uma consulta preventiva para orientações de estímulo em casa.',
        suggestedSpecialty: 'Mentoria Co-Terapeuta & Fonoaudiologia Preventiva'
      };
    } else if (totalPoints <= 7) {
      return {
        title: 'Avaliação Multidisciplinar Recomendada',
        description: 'Identificamos pontos importantes que se beneficiam fortemente de estímulos focados em comunicação e autorregulação.',
        suggestedSpecialty: 'Análise do Comportamento (ABA) e Terapia Ocupacional'
      };
    } else {
      return {
        title: 'Intervenção Prioritária & Programa Co-Terapeuta',
        description: 'Sinais que demandam suporte especializado para equipar os pais e criar estratégias viáveis de rotina imediata.',
        suggestedSpecialty: 'Equipe Multidisciplinar Completa (ABA, TO, Fono e Suporte Parental)'
      };
    }
  };

  const recommendation = getRecommendation();

  const handleSendQuizToWhatsapp = () => {
    const text = encodeURIComponent(
      `Ol%C3%A1!%20Fiz%20a%20Triagem%20Online%20no%20site%20do%20CTI.%20Pontua%C3%A7%C3%A3o:%20${totalPoints}%20pontos.%20Recomenda%C3%A7%C3%A3o:%20${recommendation.title}.%20Gostaria%20de%20agendar%20uma%20conversa!`
    );
    window.open(`https://wa.me/5511999999999?text=${text}`, '_blank');
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#e4e1eb] shadow-lg space-y-8">
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#8edcfd]/30 text-[#006782] text-xs font-bold uppercase tracking-widest rounded-full">
            <HelpCircle className="w-4 h-4" />
            <span>Ferramenta de Orientação Familiar</span>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl text-[#000061] tracking-wider uppercase">
            TRIAGEM RÁPIDA CO-TERAPEUTA
          </h2>
          <p className="text-xs sm:text-sm text-[#464653] font-medium max-w-xl mx-auto">
            Responda 3 perguntas simples para entender o perfil de apoio ideal para o desenvolvimento do seu filho.
          </p>
        </div>

        {!showResult ? (
          /* Question Step */
          <div className="space-y-6">
            {/* Progress Bar */}
            <div className="w-full bg-[#f5f2fc] h-2 rounded-full overflow-hidden">
              <div
                className="bg-[#000061] h-full transition-all duration-300"
                style={{ width: `${((currentStep + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
              />
            </div>

            <div className="flex items-center justify-between text-xs font-bold text-[#006782] uppercase tracking-wider">
              <span>Pergunta {currentStep + 1} de {QUIZ_QUESTIONS.length}</span>
              <span>{Math.round(((currentStep + 1) / QUIZ_QUESTIONS.length) * 100)}% concluído</span>
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-[#000061]">
              {QUIZ_QUESTIONS[currentStep].question}
            </h3>

            <div className="grid gap-3">
              {QUIZ_QUESTIONS[currentStep].options.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(opt.points)}
                  className="p-4 rounded-2xl bg-[#f5f2fc] hover:bg-[#8edcfd]/30 text-left font-medium text-sm text-[#1b1b22] hover:text-[#000061] border border-[#e4e1eb] hover:border-[#000061] transition-all cursor-pointer flex items-center justify-between group"
                >
                  <span>{opt.label}</span>
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-[#000061]" />
                </button>
              ))}
            </div>
          </div>
        ) : (
          /* Quiz Result Box */
          <div className="space-y-6 bg-[#f5f2fc] p-6 sm:p-8 rounded-2xl border border-[#e4e1eb] animate-fadeIn">
            <div className="flex items-center gap-3 text-emerald-600 font-extrabold text-sm uppercase tracking-wider">
              <CheckCircle className="w-6 h-6" />
              <span>Resultado da Orientação Preventiva</span>
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-extrabold text-[#000061]">{recommendation.title}</h3>
              <p className="text-sm text-[#464653] font-medium leading-relaxed">{recommendation.description}</p>
            </div>

            <div className="p-4 bg-white rounded-xl border border-[#e4e1eb]">
              <span className="text-xs font-extrabold text-[#006782] uppercase tracking-wider block">Indicação de Foco:</span>
              <p className="text-sm font-bold text-[#000061] mt-0.5">{recommendation.suggestedSpecialty}</p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <button
                onClick={handleSendQuizToWhatsapp}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-amber-400 hover:bg-amber-300 text-[#000061] font-extrabold text-xs uppercase tracking-wider rounded-full shadow-md cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Enviar Resultado via WhatsApp ao CTI</span>
              </button>

              <button
                onClick={handleReset}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-[#464653] hover:text-[#000061] border border-[#e4e1eb] text-xs font-bold uppercase tracking-wider rounded-full cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Refazer Triagem</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
