import React, { useState, useEffect } from 'react';
import { X, CalendarCheck, Send, CheckCircle2, MessageSquare, ShieldCheck } from 'lucide-react';
import { CLINIC_INFO, TREATMENTS, SPECIALISTS } from '../data/clinicData';
import { BookingFormData } from '../types';
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
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    phone: '',
    treatment: initialTreatment || 'Implantodontia',
    specialist: initialSpecialist || '',
    preferredPeriod: 'manha',
    notes: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

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
    setLoading(true);

    trackConversion('submit_formulario_agendamento', {
      source: 'modal',
      treatment: formData.treatment,
      specialist: formData.specialist || 'Indiferente',
      period: formData.preferredPeriod,
    });

    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleSendToWhatsApp = () => {
    trackConversion('click_whatsapp', { source: 'pos_modal' });
    const text = encodeURIComponent(
      `Olá! Gostaria de confirmar meu agendamento na *Pro Dentes Odontologia*.\n\n` +
        `👤 *Nome:* ${formData.fullName}\n` +
        `🦷 *Tratamento:* ${formData.treatment}\n` +
        (formData.specialist ? `👨‍⚕️ *Especialista:* ${formData.specialist}\n` : '') +
        `⏰ *Período:* ${formData.preferredPeriod.toUpperCase()}\n` +
        `📱 *Telefone:* ${formData.phone}\n` +
        (formData.notes ? `📝 *Observação:* ${formData.notes}\n` : '')
    );
    window.open(`https://wa.me/${CLINIC_INFO.phones.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
    >
      <div
        className="relative w-full max-w-xl bg-gradient-to-b from-[#181818] via-[#121212] to-[#0D0D0D] border border-[#D4AF37]/50 rounded-2xl shadow-2xl p-6 sm:p-8 text-left max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-zinc-400 hover:text-white bg-[#222222] hover:bg-[#5C0A1F] rounded-full transition-colors cursor-pointer"
          aria-label="Fechar agendamento"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-6 space-y-5 animate-in zoom-in-95 duration-200">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center mx-auto text-emerald-400">
              <CheckCircle2 className="w-7 h-7" />
            </div>

            <div className="space-y-1">
              <h3 className="text-2xl font-serif font-bold text-white">
                Solicitação Confirmada!
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300">
                Entraremos em contato no WhatsApp <strong>{formData.phone}</strong> para finalizar os detalhes.
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                type="button"
                onClick={handleSendToWhatsApp}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-full text-xs uppercase tracking-wider font-bold bg-[#25D366] hover:bg-[#20ba59] text-black shadow-lg cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 fill-black" />
                <span>Confirmar no WhatsApp</span>
              </button>
              <button
                type="button"
                onClick={onClose}
                className="w-full sm:w-auto px-5 py-3 rounded-full text-xs text-zinc-400 hover:text-white bg-zinc-800"
              >
                Concluir
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="pr-8">
              <span className="text-[11px] font-bold text-[#D4AF37] uppercase tracking-wider block mb-1">
                Atendimento com hora marcada
              </span>
              <h3 className="text-2xl font-serif font-bold text-white">
                Agende sua Avaliação
              </h3>
              <p className="text-xs text-zinc-400 mt-1">
                Av. Caminho do Mar, 2030 (Próx. Sabesp e Bem Barato) – Rudge Ramos, SBC.
              </p>
            </div>

            <div>
              <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1">
                Nome Completo *
              </label>
              <input
                type="text"
                required
                placeholder="Seu nome"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#1A1A1A] border border-zinc-700 focus:border-[#D4AF37] text-white text-sm outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1">
                WhatsApp ou Telefone *
              </label>
              <input
                type="tel"
                required
                placeholder="(11) 99999-9999"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#1A1A1A] border border-zinc-700 focus:border-[#D4AF37] text-white text-sm outline-none"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1">
                  Tratamento *
                </label>
                <select
                  value={formData.treatment}
                  onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl bg-[#1A1A1A] border border-zinc-700 focus:border-[#D4AF37] text-white text-xs outline-none"
                >
                  {TREATMENTS.map((t) => (
                    <option key={t.id} value={t.title}>
                      {t.title}
                    </option>
                  ))}
                  <option value="Avaliação Geral">Avaliação Geral</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1">
                  Especialista (Opcional)
                </label>
                <select
                  value={formData.specialist}
                  onChange={(e) => setFormData({ ...formData, specialist: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl bg-[#1A1A1A] border border-zinc-700 focus:border-[#D4AF37] text-white text-xs outline-none"
                >
                  <option value="">Qualquer especialista</option>
                  {SPECIALISTS.map((s) => (
                    <option key={s.id} value={s.name}>
                      {s.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1">
                Melhor Período
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'manha', label: 'Manhã' },
                  { id: 'tarde', label: 'Tarde' },
                  { id: 'noite', label: 'Final do Dia' },
                ].map((period) => (
                  <button
                    key={period.id}
                    type="button"
                    onClick={() =>
                      setFormData({
                        ...formData,
                        preferredPeriod: period.id as BookingFormData['preferredPeriod'],
                      })
                    }
                    className={`py-2 text-center rounded-lg text-xs font-medium border cursor-pointer ${
                      formData.preferredPeriod === period.id
                        ? 'bg-[#5C0A1F] border-[#D4AF37] text-amber-200'
                        : 'bg-[#1A1A1A] border-zinc-700 text-zinc-400'
                    }`}
                  >
                    {period.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1">
                Mensagem ou Observação
              </label>
              <textarea
                rows={2}
                placeholder="Preferência de data ou motivo da consulta..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-[#1A1A1A] border border-zinc-700 focus:border-[#D4AF37] text-white text-xs outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 rounded-xl font-bold text-xs uppercase tracking-widest bg-gradient-to-r from-[#D4AF37] to-[#B8860B] hover:from-[#5C0A1F] hover:to-[#8B0000] text-black hover:text-white border border-[#D4AF37] shadow-lg transition-all cursor-pointer"
            >
              {loading ? 'Processando...' : 'Confirmar Solicitação'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
