import React, { useState } from 'react';
import { X, Calendar, CheckCircle2, MessageSquare, Send } from 'lucide-react';
import { AppointmentFormData } from '../types';

interface AgendamentoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AgendamentoModal: React.FC<AgendamentoModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<AppointmentFormData>({
    parentName: '',
    phone: '',
    email: '',
    childName: '',
    childAge: '',
    specialty: 'Autismo (ABA)',
    preferredShift: 'qualquer',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleSendToWhatsapp = () => {
    const text = encodeURIComponent(
      `Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20no%20CTI.%0A%0A*Respons%C3%A1vel:*%20${formData.parentName}%0A*Telefone:*%20${formData.phone}%0A*Crian%C3%A7a:*%20${formData.childName}%20(${formData.childAge}%20anos)%0A*Especialidade:*%20${formData.specialty}%0A*Turno:*%20${formData.preferredShift}%0A*Observa%C3%A7%C3%B5es:*%20${formData.notes || 'Nenhuma'}`
    );
    window.open(`https://wa.me/5511999999999?text=${text}`, '_blank');
    onClose();
    setSubmitted(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-[#e4e1eb] max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#464653] hover:bg-[#f5f2fc] hover:text-[#000061] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div className="space-y-6">
            <div className="space-y-1 pr-8">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8edcfd]/30 text-[#006782] text-xs font-bold uppercase">
                <Calendar className="w-3.5 h-3.5" />
                <span>Agendamento de Avaliação CTI</span>
              </div>
              <h3 className="text-2xl font-extrabold text-[#000061]">Agende uma Avaliação</h3>
              <p className="text-xs text-[#464653] font-medium">Preencha os dados abaixo para entrarmos em contato e agendarmos a recepção da sua família.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs font-semibold text-[#1b1b22]">
              <div>
                <label className="block mb-1 text-[#000061] font-bold">Nome do Responsável *</label>
                <input
                  type="text"
                  required
                  placeholder="Seu nome completo"
                  value={formData.parentName}
                  onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#e4e1eb] focus:border-[#000061] focus:outline-none bg-[#f5f2fc]/50"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block mb-1 text-[#000061] font-bold">WhatsApp / Telefone *</label>
                  <input
                    type="tel"
                    required
                    placeholder="(11) 99999-9999"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#e4e1eb] focus:border-[#000061] focus:outline-none bg-[#f5f2fc]/50"
                  />
                </div>

                <div>
                  <label className="block mb-1 text-[#000061] font-bold">E-mail</label>
                  <input
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#e4e1eb] focus:border-[#000061] focus:outline-none bg-[#f5f2fc]/50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block mb-1 text-[#000061] font-bold">Nome da Criança *</label>
                  <input
                    type="text"
                    required
                    placeholder="Nome da criança"
                    value={formData.childName}
                    onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#e4e1eb] focus:border-[#000061] focus:outline-none bg-[#f5f2fc]/50"
                  />
                </div>

                <div>
                  <label className="block mb-1 text-[#000061] font-bold">Idade da Criança *</label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: 4 anos"
                    value={formData.childAge}
                    onChange={(e) => setFormData({ ...formData, childAge: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#e4e1eb] focus:border-[#000061] focus:outline-none bg-[#f5f2fc]/50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block mb-1 text-[#000061] font-bold">Especialidade Principal</label>
                  <select
                    value={formData.specialty}
                    onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#e4e1eb] focus:border-[#000061] focus:outline-none bg-[#f5f2fc]/50"
                  >
                    <option value="Autismo (ABA)">Autismo (ABA)</option>
                    <option value="TDAH & Foco">TDAH & Foco</option>
                    <option value="Fonoaudiologia">Fonoaudiologia</option>
                    <option value="Terapia Ocupacional">Terapia Ocupacional</option>
                    <option value="Psicopedagogia">Psicopedagogia</option>
                    <option value="Programa Co-Terapeuta">Programa Co-Terapeuta</option>
                  </select>
                </div>

                <div>
                  <label className="block mb-1 text-[#000061] font-bold">Turno de Preferência</label>
                  <select
                    value={formData.preferredShift}
                    onChange={(e) => setFormData({ ...formData, preferredShift: e.target.value as any })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#e4e1eb] focus:border-[#000061] focus:outline-none bg-[#f5f2fc]/50"
                  >
                    <option value="qualquer">Qualquer Turno</option>
                    <option value="manha">Manhã</option>
                    <option value="tarde">Tarde</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block mb-1 text-[#000061] font-bold">Observações / Queixa Principal</label>
                <textarea
                  rows={2}
                  placeholder="Conte-nos brevemente o que buscam..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#e4e1eb] focus:border-[#000061] focus:outline-none bg-[#f5f2fc]/50"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#000061] text-white font-extrabold uppercase text-xs tracking-wider rounded-full hover:bg-[#111689] transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Confirmar Pré-Agendamento</span>
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-8 text-center space-y-5 animate-fadeIn">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-extrabold text-[#000061]">Solicitação Recebida!</h3>
              <p className="text-xs text-[#464653] font-medium max-w-sm mx-auto">
                Obrigado, <strong className="text-[#000061]">{formData.parentName}</strong>. Nossa equipe de acolhimento entrará em contato em breve para confirmar o horário para a avaliação do(a) <strong className="text-[#000061]">{formData.childName}</strong>.
              </p>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={handleSendToWhatsapp}
                className="w-full py-3 bg-amber-400 hover:bg-amber-300 text-[#000061] font-extrabold text-xs uppercase tracking-wider rounded-full shadow-md cursor-pointer flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Agilizar Atendimento via WhatsApp</span>
              </button>

              <button
                onClick={() => setSubmitted(false)}
                className="text-xs font-bold text-[#006782] hover:underline"
              >
                Voltar ao formulário
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
