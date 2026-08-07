import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { QuemSomosSection } from './components/QuemSomosSection';
import { NossaMissaoSection } from './components/NossaMissaoSection';
import { SeuFilhoSection } from './components/SeuFilhoSection';
import { CienciaParceriaSection } from './components/CienciaParceriaSection';
import { EspecialidadesSection } from './components/EspecialidadesSection';
import { InstagramSection } from './components/InstagramSection';
import { WhatsappBannerSection } from './components/WhatsappBannerSection';
import { EspacoGallerySection } from './components/EspacoGallerySection';
import { TriagemQuiz } from './components/TriagemQuiz';
import { AgendamentoModal } from './components/AgendamentoModal';
import { WhatsappFloatingButton } from './components/WhatsappFloatingButton';
import { Footer } from './components/Footer';

export default function App() {
  const [isAgendamentoOpen, setIsAgendamentoOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#fbf8ff] text-[#1b1b22] flex flex-col font-['Montserrat',sans-serif]">
      {/* Sticky Top Header */}
      <Navbar
        onOpenAgendamento={() => setIsAgendamentoOpen(true)}
        activeSection="home"
      />

      {/* Main Page Sections matching the screenshot design & flow */}
      <main className="flex-1 space-y-4">
        {/* Hero Banner */}
        <HeroSection onOpenAgendamento={() => setIsAgendamentoOpen(true)} />

        {/* Quem Somos section & Quote Banner */}
        <QuemSomosSection />

        {/* Nossa Missão card with co-therapist highlight */}
        <NossaMissaoSection />

        {/* Seu Filho passa algumas horas conosco, mas vive com você */}
        <SeuFilhoSection />

        {/* Ciência com Parceria de Verdade */}
        <CienciaParceriaSection />

        {/* Especialidades Multidisciplinares */}
        <EspecialidadesSection onOpenAgendamento={() => setIsAgendamentoOpen(true)} />

        {/* Triagem Co-Terapeuta Quiz */}
        <TriagemQuiz />

        {/* Nosso Espaço & Media Gallery */}
        <EspacoGallerySection />

        {/* Você não precisa passar por essa jornada sozinho (Instagram) */}
        <InstagramSection />

        {/* Pronto para transformar... (WhatsApp CTA Banner) */}
        <WhatsappBannerSection />
      </main>

      {/* Dark Footer */}
      <Footer
        onOpenAgendamento={() => setIsAgendamentoOpen(true)}
      />

      {/* Modals & Floating Tools */}
      <AgendamentoModal
        isOpen={isAgendamentoOpen}
        onClose={() => setIsAgendamentoOpen(false)}
      />

      {/* Floating WhatsApp chat widget */}
      <WhatsappFloatingButton />
    </div>
  );
}
