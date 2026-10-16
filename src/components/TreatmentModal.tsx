import React from 'react';
import { X, CheckCircle, Users, CalendarCheck, Sparkles, Shield, HeartHandshake } from 'lucide-react';
import { Treatment } from '../types';
import { trackConversion } from '../utils/analytics';

interface TreatmentModalProps {
  treatment: Treatment | null;
  onClose: () => void;
  onSelectTreatmentForBooking: (treatmentTitle: string) => void;
}

export const TreatmentModal: React.FC<TreatmentModalProps> = ({
  treatment,
  onClose,
  onSelectTreatmentForBooking,
}) => {
  if (!treatment) return null;

  const handleBooking = () => {
    trackConversion('open_tratamento_modal', { treatment: treatment.title });
    onSelectTreatmentForBooking(treatment.title);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
    >
      <div
        className="relative w-full max-w-2xl bg-gradient-to-b from-[#171717] via-[#121212] to-[#0D0D0D] border border-[#D4AF37]/50 rounded-2xl shadow-2xl p-6 sm:p-8 text-left max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-zinc-400 hover:text-white bg-[#222222] hover:bg-[#5C0A1F] rounded-full transition-colors cursor-pointer"
          aria-label="Fechar detalhes do serviço"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#5C0A1F]/70 text-amber-200 border border-[#D4AF37]/30 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>{treatment.tag}</span>
          </span>
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-2">
            {treatment.title}
          </h3>
          <div className="w-16 h-1 bg-gradient-to-r from-[#D4AF37] to-transparent"></div>
        </div>

        {/* Content Body */}
        <div className="space-y-6 text-zinc-300 text-sm sm:text-base leading-relaxed">
          <p className="text-amber-100/90 font-medium text-base">
            {treatment.shortDescription}
          </p>

          <div className="p-4 rounded-xl bg-[#1A1A1A]/90 border border-zinc-800">
            <div className="text-zinc-300 leading-relaxed whitespace-pre-line">
              {treatment.fullDescription}
            </div>
          </div>

          {/* Benefits */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#D4AF37] mb-3 flex items-center space-x-2">
              <Shield className="w-4 h-4" />
              <span>Diferenciais e Cuidados</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {treatment.benefits.map((benefit, i) => (
                <div key={i} className="flex items-start space-x-2 text-xs sm:text-sm text-zinc-300">
                  <CheckCircle className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Clinical Highlights (sem tempo estimado) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div className="p-3 rounded-lg bg-[#141414] border border-[#D4AF37]/20 flex items-start space-x-3">
              <Users className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
              <div>
                <span className="block text-xs text-zinc-400 font-semibold uppercase">Indicação do Procedimento</span>
                <span className="text-xs text-zinc-200">{treatment.recommendedFor}</span>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-[#141414] border border-[#D4AF37]/20 flex items-start space-x-3">
              <HeartHandshake className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
              <div>
                <span className="block text-xs text-zinc-400 font-semibold uppercase">Protocolo de Cuidado</span>
                <span className="text-xs text-zinc-200">
                  {treatment.careHighlights || 'Aferição de sinais vitais, anestesia suave e acompanhamento próximo.'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="mt-8 pt-6 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-zinc-400 text-center sm:text-left">
            Atendimento carinhoso e sem pressa no Rudge Ramos.
          </p>
          <div className="flex items-center space-x-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              className="w-1/2 sm:w-auto px-5 py-2.5 rounded-full text-xs font-semibold text-zinc-400 hover:text-white bg-zinc-800 hover:bg-zinc-700 transition-colors cursor-pointer"
            >
              Fechar
            </button>
            <button
              type="button"
              onClick={handleBooking}
              className="w-1/2 sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-2.5 rounded-full text-xs uppercase tracking-wider font-bold bg-gradient-to-r from-[#D4AF37] to-[#B8860B] hover:from-[#5C0A1F] hover:to-[#8B0000] text-[#0D0D0D] hover:text-white border border-[#D4AF37] transition-all shadow-lg shadow-[#D4AF37]/20 cursor-pointer"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>Agendar Avaliação</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
