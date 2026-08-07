import React, { useState } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';

export const WhatsappFloatingButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(message || 'Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20as%20consultas%20no%20CTI.');
    window.open(`https://wa.me/5511999999999?text=${text}`, '_blank');
    setIsOpen(false);
    setMessage('');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Quick Popup Chat Box */}
      {isOpen && (
        <div className="mb-3 w-80 bg-white rounded-3xl shadow-2xl border border-[#e4e1eb] overflow-hidden animate-fadeIn">
          {/* Header */}
          <div className="bg-[#000061] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <div className="w-9 h-9 rounded-full bg-emerald-500 text-white font-bold flex items-center justify-center text-xs">
                  CTI
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-[#000061]" />
              </div>
              <div>
                <h4 className="text-xs font-bold">Atendimento CTI</h4>
                <p className="text-[10px] text-[#8edcfd]">Co-terapia & Avaliações</p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full text-white/80 hover:text-white hover:bg-white/10"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 bg-[#f5f2fc] space-y-3 text-xs font-medium text-[#1b1b22]">
            <div className="bg-white p-3 rounded-2xl border border-[#e4e1eb] shadow-xs space-y-1">
              <p className="font-bold text-[#000061]">Olá! Como podemos ajudar sua família hoje?</p>
              <p className="text-[#464653] text-[11px]">Digite sua mensagem para conversar diretamente com nossa recepção clínica.</p>
            </div>

            <form onSubmit={handleSend} className="space-y-2">
              <textarea
                rows={2}
                placeholder="Ex: Gostaria de agendar avaliação em Fonoaudiologia..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-2.5 rounded-xl border border-[#e4e1eb] bg-white focus:outline-none focus:border-[#000061] text-xs"
              />

              <button
                type="submit"
                className="w-full py-2.5 bg-amber-400 hover:bg-amber-300 text-[#000061] font-extrabold uppercase text-[11px] tracking-wider rounded-xl shadow-xs cursor-pointer flex items-center justify-center gap-1.5"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Enviar no WhatsApp</span>
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group p-4 bg-amber-400 hover:bg-amber-300 text-[#000061] rounded-full shadow-2xl transition-all transform hover:scale-110 cursor-pointer flex items-center gap-2"
        aria-label="Abrir WhatsApp CTI"
      >
        <MessageSquare className="w-6 h-6 fill-current" />
        <span className="hidden group-hover:inline text-xs font-extrabold uppercase tracking-wider pr-1">
          Falar com CTI
        </span>
      </button>
    </div>
  );
};
