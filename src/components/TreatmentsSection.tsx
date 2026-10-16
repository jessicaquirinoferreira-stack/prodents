import React, { useState } from 'react';
import {
  ShieldCheck,
  Bone,
  HeartPulse,
  Sparkles,
  SunMedium,
  Zap,
  Cpu,
  Smile,
  ArrowRight,
  Heart,
} from 'lucide-react';
import { TREATMENTS } from '../data/clinicData';
import { Treatment } from '../types';
import { TreatmentModal } from './TreatmentModal';

interface TreatmentsSectionProps {
  onSelectTreatmentForBooking: (treatmentTitle: string) => void;
}

export const TreatmentsSection: React.FC<TreatmentsSectionProps> = ({
  onSelectTreatmentForBooking,
}) => {
  const [selectedTreatment, setSelectedTreatment] = useState<Treatment | null>(null);

  const getTreatmentIcon = (iconName: string) => {
    const iconClass = 'w-7 h-7 text-[#D4AF37] transition-transform duration-300 group-hover:scale-110';
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className={iconClass} />;
      case 'Bone':
        return <Bone className={iconClass} />;
      case 'HeartPulse':
        return <HeartPulse className={iconClass} />;
      case 'Sparkles':
        return <Sparkles className={iconClass} />;
      case 'SunMedium':
        return <SunMedium className={iconClass} />;
      case 'Zap':
        return <Zap className={iconClass} />;
      case 'Cpu':
        return <Cpu className={iconClass} />;
      case 'Smile':
      default:
        return <Smile className={iconClass} />;
    }
  };

  return (
    <section id="servicos" className="relative py-24 bg-[#080808] overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[radial-gradient(circle,_rgba(92,10,31,0.18)_0%,_transparent_70%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#1A1A1A] border border-[#D4AF37]/40 mb-3">
            <Heart className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-xs font-semibold tracking-widest uppercase text-amber-200">
              Cuidado Humanizado & Experiência
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white mb-4">
            Nossos <span className="gold-gradient-text">Serviços</span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 font-light max-w-2xl mx-auto">
            Atendimento carinhoso e sem pressa. Checamos pressão e glicemia em todas as consultas, usamos anestesia suave com picada quase imperceptível e aplicamos laserterapia cicatrizante.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-6"></div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TREATMENTS.map((treatment) => (
            <div
              key={treatment.id}
              className="group relative rounded-2xl bg-gradient-to-b from-[#141414] via-[#111111] to-[#0E0E0E] p-6 border border-[#D4AF37]/25 hover:border-[#D4AF37] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_35px_-5px_rgba(201,162,39,0.25)] flex flex-col justify-between"
            >
              {/* Top Accent Pill */}
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#5C0A1F]/80 to-[#20040A] border border-[#D4AF37]/40 flex items-center justify-center shadow-lg group-hover:border-[#D4AF37] transition-colors">
                    {getTreatmentIcon(treatment.iconName)}
                  </div>
                  <span className="text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full bg-[#1E1E1E] text-amber-300/90 border border-zinc-800">
                    {treatment.tag}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-serif font-bold text-white group-hover:text-amber-200 transition-colors mb-3">
                  {treatment.title}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed line-clamp-3 mb-6">
                  {treatment.shortDescription}
                </p>
              </div>

              {/* Card Footer with Saiba Mais */}
              <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setSelectedTreatment(treatment)}
                  className="inline-flex items-center space-x-2 text-xs uppercase tracking-wider font-bold text-[#D4AF37] hover:text-white transition-colors group/btn cursor-pointer"
                >
                  <span>Saiba mais</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37] group-hover/btn:translate-x-1 transition-transform" />
                </button>

                <button
                  type="button"
                  onClick={() => onSelectTreatmentForBooking(treatment.title)}
                  className="text-[11px] text-zinc-400 hover:text-amber-200 transition-colors cursor-pointer"
                >
                  Agendar
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Service Help Box */}
        <div className="mt-16 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#171717] via-[#24060E] to-[#171717] border border-[#D4AF37]/35 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="text-center md:text-left">
            <h4 className="text-xl font-serif font-bold text-white mb-1">
              Dúvidas sobre o tratamento mais indicado para você?
            </h4>
            <p className="text-xs sm:text-sm text-zinc-300">
              Nossa equipe ouve você com paciência e carinho para indicar a melhor solução com total clareza e honestidade.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onSelectTreatmentForBooking('Avaliação Geral')}
            className="px-6 py-3 rounded-full text-xs uppercase tracking-widest font-bold bg-[#D4AF37] hover:bg-white text-black transition-all shadow-lg flex-shrink-0 cursor-pointer"
          >
            Solicitar Avaliação Inicial
          </button>
        </div>
      </div>

      {/* Modal for In-depth Treatment Details */}
      <TreatmentModal
        treatment={selectedTreatment}
        onClose={() => setSelectedTreatment(null)}
        onSelectTreatmentForBooking={onSelectTreatmentForBooking}
      />
    </section>
  );
};
