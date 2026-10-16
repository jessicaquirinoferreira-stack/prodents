import React, { useState } from 'react';
import { CalendarCheck, Send, CheckCircle2, Phone, ShieldCheck, Clock, MessageSquare } from 'lucide-react';
import { CLINIC_INFO, TREATMENTS, SPECIALISTS } from '../data/clinicData';
import { BookingFormData } from '../types';
import { trackConversion } from '../utils/analytics';

interface BookingSectionProps {
  preselectedTreatment?: string;
  preselectedSpecialist?: string;
}

export const BookingSection: React.FC<BookingSectionProps> = ({
  preselectedTreatment,
  preselectedSpecialist,
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    phone: '',
    treatment: preselectedTreatment || 'Implantodontia',
    specialist: preselectedSpecialist || '',
    preferredPeriod: 'manha',
    notes: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Track conversion event for Google Ads / Meta Pixel
    trackConversion('submit_formulario_agendamento', {
      treatment: formData.treatment,
      specialist: formData.specialist || 'Indiferente',
      period: formData.preferredPeriod,
    });

    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
    }, 700);
  };

  const handleSendToWhatsApp = () => {
    trackConversion('click_whatsapp', { source: 'pos_formulario' });
    const text = encodeURIComponent(
      `Olá! Meu nome é *${formData.fullName}* e gostaria de agendar uma avaliação na *Pro Dentes Odontologia*.\n\n` +
        `🦷 *Tratamento:* ${formData.treatment}\n` +
        (formData.specialist ? `👨‍⚕️ *Especialista:* ${formData.specialist}\n` : '') +
        `⏰ *Período preferido:* ${formData.preferredPeriod.toUpperCase()}\n` +
        `📱 *Contato:* ${formData.phone}\n` +
        (formData.notes ? `📝 *Observação:* ${formData.notes}\n` : '') +
        `\nAguardo retorno da equipe de atendimento!`
    );
    window.open(`https://wa.me/${CLINIC_INFO.phones.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <section id="agendamento" className="relative py-24 bg-[#080808] overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#080808] via-[#20040A]/40 to-[#080808] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Convincing Copy & Trust Elements */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#1A1A1A] border border-[#D4AF37]/40">
              <CalendarCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="text-xs font-semibold tracking-widest uppercase text-amber-200">
                Avaliação Personalizada
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white leading-tight">
              Dê o primeiro passo para o <span className="gold-gradient-text">sorriso dos seus sonhos</span>
            </h2>

            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
              Preencha o formulário para agendar sua consulta na <strong>Pro Dentes Odontologia</strong>, em São Bernardo do Campo. Nossa recepção entrará em contato rapidamente para confirmar o melhor horário para você.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start space-x-3 text-sm text-zinc-300">
                <ShieldCheck className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Segurança Médica Rigorosa:</strong>
                  Checagem mandatória de pressão arterial e glicemia antes de sentar na cadeira.
                </div>
              </div>
              <div className="flex items-start space-x-3 text-sm text-zinc-300">
                <Clock className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Paciência & Acolhimento:</strong>
                  Consultas sem pressa, especialmente para a terceira idade e crianças.
                </div>
              </div>
              <div className="flex items-start space-x-3 text-sm text-zinc-300">
                <Phone className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Atendimento por Telefone e WhatsApp:</strong>
                  Telefone: {CLINIC_INFO.phones.display} | WhatsApp: {CLINIC_INFO.phones.whatsappDisplay} (próx. à Sabesp e Supermercado Bem Barato).
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Scheduling Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl p-1 bg-gradient-to-br from-[#D4AF37]/60 via-[#5C0A1F]/50 to-[#2A2A2A] shadow-2xl">
              <div className="bg-[#121212] rounded-[22px] p-6 sm:p-10">
                {isSubmitted ? (
                  <div className="text-center py-10 space-y-6 animate-in zoom-in-95 duration-300">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center mx-auto text-emerald-400">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-2xl font-serif font-bold text-white">
                        Solicitação Recebida com Sucesso!
                      </h3>
                      <p className="text-sm text-zinc-300 max-w-md mx-auto">
                        Obrigado, <strong className="text-amber-200">{formData.fullName}</strong>. Nossa equipe entrará em contato em breve no número <strong>{formData.phone}</strong> para confirmar seu agendamento.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-[#1A1A1A] border border-[#D4AF37]/30 max-w-md mx-auto text-xs text-zinc-300 space-y-1 text-left">
                      <p>🦷 <strong>Tratamento:</strong> {formData.treatment}</p>
                      {formData.specialist && <p>👨‍⚕️ <strong>Especialista:</strong> {formData.specialist}</p>}
                      <p>⏰ <strong>Período:</strong> {formData.preferredPeriod.toUpperCase()}</p>
                    </div>

                    <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                      <button
                        type="button"
                        onClick={handleSendToWhatsApp}
                        className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-full text-xs uppercase tracking-wider font-bold bg-[#25D366] hover:bg-[#20ba59] text-black shadow-lg shadow-emerald-900/40 cursor-pointer"
                      >
                        <MessageSquare className="w-4 h-4 fill-black" />
                        <span>Confirmar Agora no WhatsApp</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          setIsSubmitted(false);
                          setFormData({
                            fullName: '',
                            phone: '',
                            treatment: 'Implantodontia',
                            specialist: '',
                            preferredPeriod: 'manha',
                            notes: '',
                          });
                        }}
                        className="w-full sm:w-auto px-5 py-3 rounded-full text-xs text-zinc-400 hover:text-white bg-zinc-800 transition-colors"
                      >
                        Fazer novo pedido
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <h3 className="text-xl font-serif font-bold text-white mb-1">
                        Agende sua Avaliação
                      </h3>
                      <p className="text-xs text-zinc-400">
                        Preencha seus dados para receber nosso contato prioritário.
                      </p>
                    </div>

                    {/* Name */}
                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                        Nome Completo *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ex: Carlos Silva"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#1A1A1A] border border-zinc-700 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] text-white text-sm placeholder-zinc-500 transition-all outline-none"
                      />
                    </div>

                    {/* Phone / WhatsApp */}
                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                        WhatsApp ou Telefone *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="Ex: (11) 98765-4321"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#1A1A1A] border border-zinc-700 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] text-white text-sm placeholder-zinc-500 transition-all outline-none"
                      />
                    </div>

                    {/* Treatment Selection */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                          Tratamento de Interesse *
                        </label>
                        <select
                          value={formData.treatment}
                          onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#1A1A1A] border border-zinc-700 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] text-white text-sm transition-all outline-none cursor-pointer"
                        >
                          {TREATMENTS.map((t) => (
                            <option key={t.id} value={t.title} className="bg-[#1A1A1A] text-white">
                              {t.title}
                            </option>
                          ))}
                          <option value="Avaliação Geral / Outros" className="bg-[#1A1A1A] text-white">
                            Avaliação Geral / Outros
                          </option>
                        </select>
                      </div>

                      {/* Specialist Preference */}
                      <div>
                        <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                          Especialista (Opcional)
                        </label>
                        <select
                          value={formData.specialist}
                          onChange={(e) => setFormData({ ...formData, specialist: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#1A1A1A] border border-zinc-700 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] text-white text-sm transition-all outline-none cursor-pointer"
                        >
                          <option value="" className="bg-[#1A1A1A] text-zinc-400">
                            Sem preferência (Qualquer especialista)
                          </option>
                          {SPECIALISTS.map((s) => (
                            <option key={s.id} value={s.name} className="bg-[#1A1A1A] text-white">
                              {s.name} ({s.specialty})
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Preferred Period */}
                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
                        Melhor Período para Atendimento
                      </label>
                      <div className="grid grid-cols-3 gap-3">
                        {[
                          { id: 'manha', label: 'Manhã (08h - 12h)' },
                          { id: 'tarde', label: 'Tarde (12h - 18h)' },
                          { id: 'noite', label: 'Final de Tarde' },
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
                            className={`py-2 px-2 text-center rounded-xl text-xs font-medium border transition-all cursor-pointer ${
                              formData.preferredPeriod === period.id
                                ? 'bg-[#5C0A1F] border-[#D4AF37] text-amber-200 shadow-md'
                                : 'bg-[#1A1A1A] border-zinc-700 text-zinc-400 hover:text-white'
                            }`}
                          >
                            {period.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Notes */}
                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                        Mensagem ou Sintoma (Opcional)
                      </label>
                      <textarea
                        rows={2}
                        placeholder="Conte-nos brevemente o que deseja avaliar ou se possui alguma queixa..."
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#1A1A1A] border border-zinc-700 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] text-white text-sm placeholder-zinc-500 transition-all outline-none"
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 rounded-xl font-bold text-xs sm:text-sm uppercase tracking-widest bg-gradient-to-r from-[#D4AF37] via-[#C9A227] to-[#B8860B] hover:from-[#5C0A1F] hover:via-[#8B0000] hover:to-[#4A0E0E] text-black hover:text-white border border-[#D4AF37] shadow-[0_0_25px_rgba(201,162,39,0.35)] transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-50"
                    >
                      {loading ? (
                        <span>Enviando solicitação...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Solicitar Agendamento de Avaliação</span>
                        </>
                      )}
                    </button>

                    <p className="text-[11px] text-zinc-400 text-center">
                      🔒 Seus dados estão seguros e serão utilizados exclusivamente para o contato do seu agendamento.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
