import React, { useState } from 'react';
import { Calendar, Phone, CheckCircle2, Shield, HeartHandshake, Send } from 'lucide-react';
import { CLINIC_INFO, TREATMENTS, SPECIALISTS } from '../data/clinicData';
import { trackConversion } from '../utils/analytics';

interface BookingSectionProps {
  preselectedTreatment?: string;
  preselectedSpecialist?: string;
}

export const BookingSection: React.FC<BookingSectionProps> = ({
  preselectedTreatment,
  preselectedSpecialist,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    treatment: preselectedTreatment || TREATMENTS[0].title,
    specialist: preselectedSpecialist || 'Dr. Carlos Eduardo (Geral / Implantes / Endodontia)',
    date: '',
    time: '',
    notes: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackConversion('submit_agendamento_form');

    const message = `Olá! Gostaria de agendar uma consulta na Pró Dentes Odontologia:%0A%0A- Nome: ${formData.name}%0A- Telefone: ${formData.phone}%0A- Tratamento: ${formData.treatment}%0A- Profissional: ${formData.specialist}%0A- Data Preferida: ${formData.date} às ${formData.time}%0A- Observações: ${formData.notes}`;

    const whatsappUrl = `https://wa.me/${CLINIC_INFO.phones.whatsapp}?text=${message}`;
    window.open(whatsappUrl, '_blank');
    setIsSubmitted(true);
  };

  return (
    <section id="agendamento" className="relative py-24 bg-[#0F0C0A] text-[#F5F0EB] overflow-hidden">
      {/* Decorative ambient background */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#6B1E2F]/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#1A1210] border border-[#C9A86C]/30 mb-3 shadow-xs">
            <Calendar className="w-3.5 h-3.5 text-[#C9A86C]" />
            <span className="text-xs font-semibold tracking-widest uppercase text-[#C9A86C]">
              Agendamento Rápido & Humanizado
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white mb-4">
            Agende sua <span className="text-[#C9A86C]">Consulta</span>
          </h2>
          <p className="text-base sm:text-lg text-[#D4C9B8] font-light max-w-2xl mx-auto">
            Preencha seus dados abaixo para iniciar o agendamento direto com nossa equipe via WhatsApp com total comodidade.
          </p>
          <div className="w-20 h-1 bg-[#C9A86C] mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          {/* Info Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-2xl bg-[#1A1210] border border-[#C9A86C]/30 shadow-md space-y-6">
              <h3 className="text-xl font-serif font-bold text-white">
                Por que agendar na Pró Dentes?
              </h3>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-[#0F0C0A] border border-[#C9A86C]/30 flex items-center justify-center text-[#C9A86C] flex-shrink-0 mt-0.5">
                    <Shield className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Segurança Pré-Consulta</h4>
                    <p className="text-xs text-[#D4C9B8]">Checagem mandatória de pressão e glicemia antes de qualquer procedimento.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-[#0F0C0A] border border-[#C9A86C]/30 flex items-center justify-center text-[#C9A86C] flex-shrink-0 mt-0.5">
                    <HeartHandshake className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Paciência com a 3ª Idade</h4>
                    <p className="text-xs text-[#D4C9B8]">80% dos pacientes do Dr. Carlos são idosos tratados com carinho e sem pressa.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-[#0F0C0A] border border-[#C9A86C]/30 flex items-center justify-center text-[#C9A86C] flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Anestesia Suave & Laserterapia</h4>
                    <p className="text-xs text-[#D4C9B8]">Técnica delicada onde o paciente quase não sente a picada, com laser cicatrizante.</p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-[#C9A86C]/20">
                <div className="text-xs font-semibold text-[#C9A86C] uppercase tracking-wider mb-2">
                  Atendimento Telefônico & WhatsApp
                </div>
                <a
                  href={`tel:${CLINIC_INFO.phones.clean}`}
                  onClick={() => trackConversion('click_ligar_booking')}
                  className="flex items-center space-x-2 text-white font-bold hover:text-[#C9A86C] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#C9A86C]" />
                  <span>{CLINIC_INFO.phones.display} / {CLINIC_INFO.phones.whatsappDisplay}</span>
                </a>
                <div className="text-xs text-[#D4C9B8] mt-1">
                  {CLINIC_INFO.hours.weekdays}
                </div>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-[#1A1210] border border-[#C9A86C]/30 shadow-xl relative">
              {isSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#0F0C0A] border border-[#C9A86C]/40 text-[#C9A86C] flex items-center justify-center mx-auto text-2xl">
                    ✓
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-white">
                    Redirecionando para o WhatsApp...
                  </h3>
                  <p className="text-sm text-[#D4C9B8] max-w-md mx-auto">
                    Seu pedido de agendamento foi gerado. Caso o WhatsApp não abra automaticamente, clique no botão abaixo.
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2.5 rounded-full text-xs font-bold btn-gold-primary uppercase tracking-wider cursor-pointer"
                  >
                    Fazer Novo Agendamento
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-xl font-serif font-bold text-white mb-2">
                    Formulário de Agendamento Rápido
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#C9A86C] uppercase tracking-wider mb-1.5">
                        Seu Nome Completo *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ex: Maria da Silva"
                        className="w-full px-4 py-3 rounded-xl border border-[#C9A86C]/30 focus:border-[#C9A86C] focus:ring-1 focus:ring-[#C9A86C] text-sm text-white outline-none bg-[#0F0C0A]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#C9A86C] uppercase tracking-wider mb-1.5">
                        Telefone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(11) 99999-9999"
                        className="w-full px-4 py-3 rounded-xl border border-[#C9A86C]/30 focus:border-[#C9A86C] focus:ring-1 focus:ring-[#C9A86C] text-sm text-white outline-none bg-[#0F0C0A]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#C9A86C] uppercase tracking-wider mb-1.5">
                        Tratamento Desejado
                      </label>
                      <select
                        value={formData.treatment}
                        onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#C9A86C]/30 focus:border-[#C9A86C] focus:ring-1 focus:ring-[#C9A86C] text-sm text-white outline-none bg-[#0F0C0A]"
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
                      <label className="block text-xs font-bold text-[#C9A86C] uppercase tracking-wider mb-1.5">
                        Profissional Preferido
                      </label>
                      <select
                        value={formData.specialist}
                        onChange={(e) => setFormData({ ...formData, specialist: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#C9A86C]/30 focus:border-[#C9A86C] focus:ring-1 focus:ring-[#C9A86C] text-sm text-white outline-none bg-[#0F0C0A]"
                      >
                        <option value="Dr. Carlos Eduardo (Geral / Implantes / Endodontia)">Dr. Carlos Eduardo (Implantes / Endodontia)</option>
                        <option value="Dra. Camila Dias Moreschi (Endodontia)">Dra. Camila Dias Moreschi (Endodontia)</option>
                        <option value="Dra. Bruna Andrade Santos (Clareamento)">Dra. Bruna Andrade Santos (Clareamento)</option>
                        <option value="Dra. Letícia Romano Zoccolo (Clínica Geral)">Dra. Letícia Romano Zoccolo (Clínica Geral)</option>
                        <option value="Dra. Andréa Cristina Lopes (Ortopedia / Ortodontia)">Dra. Andréa Cristina Lopes (Ortopedia / Ortodontia)</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#C9A86C] uppercase tracking-wider mb-1.5">
                        Data Preferida
                      </label>
                      <input
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#C9A86C]/30 focus:border-[#C9A86C] focus:ring-1 focus:ring-[#C9A86C] text-sm text-white outline-none bg-[#0F0C0A]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#C9A86C] uppercase tracking-wider mb-1.5">
                        Período / Horário
                      </label>
                      <select
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#C9A86C]/30 focus:border-[#C9A86C] focus:ring-1 focus:ring-[#C9A86C] text-sm text-white outline-none bg-[#0F0C0A]"
                      >
                        <option value="Manhã (09h - 12h)">Manhã (09h - 12h)</option>
                        <option value="Tarde (13h - 17h)">Tarde (13h - 17h)</option>
                        <option value="Noite (17h - 22h)">Noite (17h - 22h)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#C9A86C] uppercase tracking-wider mb-1.5">
                      Observações ou Histórico de Saúde (Opcional)
                    </label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Ex: Sinto sensibilidade ou gostaria de checar pressão/glicemia..."
                      className="w-full px-4 py-3 rounded-xl border border-[#C9A86C]/30 focus:border-[#C9A86C] focus:ring-1 focus:ring-[#C9A86C] text-sm text-white outline-none bg-[#0F0C0A]"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl btn-gold-primary text-xs uppercase tracking-widest font-bold flex items-center justify-center space-x-2 cursor-pointer shadow-lg"
                  >
                    <Send className="w-4 h-4 text-[#C9A86C]" />
                    <span>Enviar Agendamento via WhatsApp</span>
                  </button>

                  <p className="text-[11px] text-[#D4C9B8] text-center">
                    🔒 Seus dados são confidenciais e protegidos. Atendimento de segunda a sexta, das 09h às 22h.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
