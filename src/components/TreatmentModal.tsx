import React from 'react';
import { X, Sparkles, CheckCircle, Shield, Users, HeartHandshake, Calendar } from 'lucide-react';
import { Treatment } from '../types';

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
    onSelectTreatmentForBooking(treatment.title);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0F0C0A]/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#1A1210] border border-[#C9A86C]/40 rounded-2xl shadow-2xl p-6 sm:p-8 text-left max-h-[90vh] overflow-y-auto text-[#F5F0EB]">
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
          <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#0F0C0A] text-[#C9A86C] border border-[#C9A86C]/30 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C9A86C]" />
            <span>{treatment.tag}</span>
          </span>
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-2">
            {treatment.title}
          </h3>
          <div className="w-16 h-1 bg-[#C9A86C] rounded-full"></div>
        </div>

        {/* Full Description */}
        <div className="space-y-6 text-[#D4C9B8] text-sm sm:text-base leading-relaxed">
          <div className="p-4 rounded-xl bg-[#0F0C0A] border border-[#C9A86C]/30">
            <p className="font-light">{treatment.fullDescription}</p>
          </div>

          {/* Benefits list */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#C9A86C] mb-3 flex items-center space-x-2">
              <Shield className="w-4 h-4 text-[#C9A86C]" />
              <span>Diferenciais & Vantagens deste Tratamento:</span>
            </h4>
            <ul className="space-y-2.5">
              {treatment.benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-[#D4C9B8]">
                  <CheckCircle className="w-4 h-4 text-[#C9A86C] flex-shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Recommended for */}
          <div className="p-3.5 rounded-xl bg-[#0F0C0A] border border-[#C9A86C]/30 flex items-start space-x-3">
            <Users className="w-4 h-4 text-[#C9A86C] flex-shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm">
              <strong className="text-white font-semibold block mb-0.5">Para quem é indicado:</strong>
              <span className="text-[#D4C9B8]">{treatment.recommendedFor}</span>
            </div>
          </div>

          {/* Care Highlights */}
          <div className="p-3.5 rounded-xl bg-[#0F0C0A] border border-[#C9A86C]/30 flex items-start space-x-3">
            <HeartHandshake className="w-4 h-4 text-[#C9A86C] flex-shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm">
              <strong className="text-white font-semibold block mb-0.5">Compromisso Humano Pró Dentes:</strong>
              <span className="text-[#D4C9B8]">{treatment.careHighlights}</span>
            </div>
          </div>
        </div>

        {/* Footer CTAs */}
        <div className="mt-8 pt-6 border-t border-[#C9A86C]/30 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 rounded-full text-xs font-semibold text-[#D4C9B8] hover:text-white bg-[#0F0C0A] hover:bg-[#0F0C0A]/80 transition-colors cursor-pointer border border-[#C9A86C]/30"
          >
            Fechar
          </button>
          <button
            type="button"
            onClick={handleBooking}
            className="w-full sm:w-auto px-6 py-3 rounded-full btn-gold-primary text-xs uppercase tracking-wider font-bold flex items-center justify-center space-x-2 shadow-md cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-[#C9A86C]" />
            <span>Agendar este Tratamento</span>
          </button>
        </div>
      </div>
    </div>
  );
};
