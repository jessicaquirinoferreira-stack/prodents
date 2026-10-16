import React, { useState, useEffect } from 'react';
import { X, Calendar, Send, Shield, HeartHandshake, CheckCircle2 } from 'lucide-react';
import { CLINIC_INFO, TREATMENTS } from '../data/clinicData';
import { trackConversion } from '../utils/analytics';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTreatment?: string;
  initialSpecialist?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  initialTreatment,
  initialSpecialist,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    treatment: initialTreatment || TREATMENTS[0].title,
    specialist: initialSpecialist || 'Dr. Carlos Eduardo (Geral / Implantes / Endodontia)',
    date: '',
    time: 'Manhã (09h - 12h)',
    notes: '',
  });

  useEffect(() => {
    if (initialTreatment) {
      setFormData((prev) => ({ ...prev, treatment: initialTreatment }));
    }
    if (initialSpecialist) {
      setFormData((prev) => ({ ...prev, specialist: initialSpecialist }));
    }
  }, [initialTreatment, initialSpecialist]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackConversion('submit_agendamento_modal');

    const message = `Olá! Gostaria de agendar uma consulta na Pró Dentes Odontologia:%0A%0A- Nome: ${formData.name}%0A- Telefone: ${formData.phone}%0A- Tratamento: ${formData.treatment}%0A- Profissional: ${formData.specialist}%0A- Data Preferida: ${formData.date} às ${formData.time}%0A- Observações: ${formData.notes}`;

    const whatsappUrl = `https://wa.me/${CLINIC_INFO.phones.whatsapp}?text=${message}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0F0C0A]/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-xl bg-[#1A1210] border border-[#C9A86C]/40 rounded-3xl shadow-2xl p-6 sm:p-8 text-left max-h-[90vh] overflow-y-auto text-[#F5F0EB]">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#D4C9B8] hover:text-white bg-[#0F0C0A] hover:bg-[#6B1E2F] rounded-full transition-colors cursor-pointer border border-[#C9A86C]/30"
          aria-label="Fechar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 pr-8">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#0F0C0A] text-[#C9A86C] border border-[#C9A86C]/30 mb-2">
            <Calendar className="w-3.5 h-3.5 text-[#C9A86C]" />
            <span>Agendamento Rápido via WhatsApp</span>
          </div>
          <h3 className="text-2xl font-serif font-bold text-white">
            Agende sua Consulta
          </h3>
          <p className="text-xs sm:text-sm text-[#D4C9B8] mt-1">
            Preencha os campos abaixo para combinarmos horário com total conforto e rapidez.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-[#C9A86C] uppercase tracking-wider mb-1">
              Seu Nome Completo *
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Ex: Ana Maria Souza"
              className="w-full px-4 py-2.5 rounded-xl border border-[#C9A86C]/30 focus:border-[#C9A86C] focus:ring-1 focus:ring-[#C9A86C] text-sm text-white outline-none bg-[#0F0C0A]"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-[#C9A86C] uppercase tracking-wider mb-1">
              Telefone / WhatsApp *
            </label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="(11) 99999-9999"
              className="w-full px-4 py-2.5 rounded-xl border border-[#C9A86C]/30 focus:border-[#C9A86C] focus:ring-1 focus:ring-[#C9A86C] text-sm text-white outline-none bg-[#0F0C0A]"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-[#C9A86C] uppercase tracking-wider mb-1">
                Tratamento
              </label>
              <select
                value={formData.treatment}
                onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                className="w-full px-3 py-2.5 rounded-xl border border-[#C9A86C]/30 focus:border-[#C9A86C] focus:ring-1 focus:ring-[#C9A86C] text-sm text-white outline-none bg-[#0F0C0A]"
              >
                <option value="Avaliação Geral">Avaliação Inicial Geral</option>
                {TREATMENTS.map((t) => (
                  <option key={t.id} value={t.title}>
                    {t.title}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#C9A86C] uppercase tracking-wider mb-1">
                Profissional
              </label>
              <select
                value={formData.specialist}
                onChange={(e) => setFormData({ ...formData, specialist: e.target.value })}
                className="w-full px-3 py-2.5 rounded-xl border border-[#C9A86C]/30 focus:border-[#C9A86C] focus:ring-1 focus:ring-[#C9A86C] text-sm text-white outline-none bg-[#0F0C0A]"
              >
                <option value="Dr. Carlos Eduardo (Implantes / Endodontia)">Dr. Carlos Eduardo (Implantes / Endodontia)</option>
                <option value="Dra. Camila Dias Moreschi (Endodontia)">Dra. Camila Dias Moreschi (Endodontia)</option>
                <option value="Dra. Bruna Andrade Santos (Clareamento)">Dra. Bruna Andrade Santos (Clareamento)</option>
                <option value="Dra. Letícia Romano Zoccolo (Clínica Geral)">Dra. Letícia Romano Zoccolo (Clínica Geral)</option>
                <option value="Dra. Andréa Cristina Lopes (Ortopedia / Ortodontia)">Dra. Andréa Cristina Lopes (Ortopedia / Ortodontia)</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-[#C9A86C] uppercase tracking-wider mb-1">
                Data Preferida
              </label>
              <input
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-[#C9A86C]/30 focus:border-[#C9A86C] focus:ring-1 focus:ring-[#C9A86C] text-sm text-white outline-none bg-[#0F0C0A]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#C9A86C] uppercase tracking-wider mb-1">
                Período
              </label>
              <select
                value={formData.time}
                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                className="w-full px-3 py-2.5 rounded-xl border border-[#C9A86C]/30 focus:border-[#C9A86C] focus:ring-1 focus:ring-[#C9A86C] text-sm text-white outline-none bg-[#0F0C0A]"
              >
                <option value="Manhã (09h - 12h)">Manhã (09h - 12h)</option>
                <option value="Tarde (13h - 17h)">Tarde (13h - 17h)</option>
                <option value="Noite (17h - 22h)">Noite (17h - 22h)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#C9A86C] uppercase tracking-wider mb-1">
              Observações (Opcional)
            </label>
            <textarea
              rows={2}
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              placeholder="Ex: Gostaria de confirmar horário ou tirar dúvida..."
              className="w-full px-4 py-2 rounded-xl border border-[#C9A86C]/30 focus:border-[#C9A86C] focus:ring-1 focus:ring-[#C9A86C] text-sm text-white outline-none bg-[#0F0C0A]"
            ></textarea>
          </div>

          {/* Highlights checklist */}
          <div className="p-3.5 rounded-xl bg-[#0F0C0A] border border-[#C9A86C]/30 text-xs text-[#D4C9B8] space-y-1.5">
            <div className="flex items-center space-x-2 font-medium text-white">
              <Shield className="w-4 h-4 text-[#C9A86C]" />
              <span>Protocolo Seguro Pró Dentes:</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 pl-6">
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A86C]" />
                <span>Pressão e glicemia checadas</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <HeartHandshake className="w-3.5 h-3.5 text-[#C9A86C]" />
                <span>Atendimento sem pressa</span>
              </div>
            </div>
          </div>

          <div className="pt-2 flex items-center justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-full text-xs font-semibold text-[#D4C9B8] hover:text-white bg-[#0F0C0A] hover:bg-[#0F0C0A]/80 transition-colors cursor-pointer border border-[#C9A86C]/30"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 rounded-full btn-gold-primary text-xs uppercase tracking-wider font-bold flex items-center space-x-2 shadow-md cursor-pointer"
            >
              <Send className="w-4 h-4 text-[#C9A86C]" />
              <span>Enviar via WhatsApp</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
