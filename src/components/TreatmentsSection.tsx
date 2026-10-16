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
  Users,
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

  const referenceStripItems = [
    { title: 'Implantes Dentários', icon: ShieldCheck, target: 'implantodontia' },
    { title: 'Estética Dental', icon: Sparkles, target: 'lentes-emax' },
    { title: 'Ortodontia', icon: HeartPulse, target: 'ortopedia-maxilares' },
    { title: 'Lentes de Resina', icon: Smile, target: 'lentes-resina' },
    { title: 'Clareamento Dental', icon: SunMedium, target: 'clareamento-dental' },
    { title: 'Odontologia Preventiva', icon: Zap, target: 'periodontia' },
    { title: 'Atendimento para Toda a Família', icon: Users, target: 'reabilitacao-oral' },
  ];

  const getTreatmentIcon = (iconName: string) => {
    const iconClass = 'w-7 h-7 text-[#C9A86C] transition-transform duration-300 group-hover:scale-110';
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
    <section id="servicos" className="relative bg-[#0F0C0A] overflow-hidden">
      {/* Reference Icon Strip (exact match to image) */}
      <div className="bg-[#0F0C0A] border-y border-[#C9A86C]/20 py-10 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-6 text-center">
          {referenceStripItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                onClick={() => onSelectTreatmentForBooking(item.title)}
                className="group flex flex-col items-center p-4 rounded-xl cursor-pointer transition-all duration-300 hover:bg-[#1A1210] border border-transparent hover:border-[#C9A86C]/30"
              >
                <div className="w-14 h-14 rounded-full border border-[#C9A86C]/40 bg-[#1A1210] flex items-center justify-center mb-3 shadow-md group-hover:border-[#C9A86C] transition-colors">
                  <IconComponent className="w-6 h-6 text-[#C9A86C]" />
                </div>
                <span className="text-xs font-medium text-[#F5F0EB] group-hover:text-[#C9A86C] transition-colors leading-tight">
                  {item.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Main Treatments Content Area */}
      <div className="py-24 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#1A1210] border border-[#C9A86C]/30 mb-3 shadow-xs">
            <Heart className="w-3.5 h-3.5 text-[#C9A86C]" />
            <span className="text-xs font-semibold tracking-widest uppercase text-[#C9A86C]">
              Cuidado Humanizado & Experiência
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white mb-4">
            Nossos <span className="text-[#C9A86C]">Tratamentos</span>
          </h2>
          <p className="text-base sm:text-lg text-[#D4C9B8] font-light max-w-2xl mx-auto">
            Atendimento carinhoso e sem pressa. Checamos pressão e glicemia em todas as consultas, usamos anestesia suave com picada quase imperceptível e aplicamos laserterapia cicatrizante.
          </p>
          <div className="w-20 h-1 bg-[#C9A86C] mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TREATMENTS.map((treatment) => (
            <div
              key={treatment.id}
              className="group relative rounded-2xl bg-[#1A1210] p-7 border border-[#C9A86C]/20 hover:border-[#C9A86C] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-14 h-14 rounded-xl bg-[#0F0C0A] border border-[#C9A86C]/30 flex items-center justify-center shadow-xs group-hover:border-[#C9A86C] transition-colors">
                    {getTreatmentIcon(treatment.iconName)}
                  </div>
                  <span className="text-[10px] uppercase tracking-wider font-semibold px-3 py-1 rounded-full bg-[#0F0C0A] text-[#C9A86C] border border-[#C9A86C]/30">
                    {treatment.tag}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-serif font-bold text-white group-hover:text-[#C9A86C] transition-colors mb-3">
                  {treatment.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#D4C9B8] font-light leading-relaxed line-clamp-3 mb-6">
                  {treatment.shortDescription}
                </p>
              </div>

              {/* Card Footer with Saiba Mais */}
              <div className="pt-4 border-t border-[#C9A86C]/20 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setSelectedTreatment(treatment)}
                  className="inline-flex items-center space-x-1.5 text-xs uppercase tracking-wider font-bold text-[#C9A86C] hover:text-[#E8D5B0] transition-colors group/btn cursor-pointer"
                >
                  <span>Saiba mais</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C9A86C] group-hover/btn:translate-x-1 transition-transform" />
                </button>

                <button
                  type="button"
                  onClick={() => onSelectTreatmentForBooking(treatment.title)}
                  className="text-xs font-semibold text-[#D4C9B8] hover:text-[#C9A86C] transition-colors cursor-pointer px-3 py-1.5 rounded bg-[#0F0C0A] border border-[#C9A86C]/20"
                >
                  Agendar
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Service Help Box matching reference wine color */}
        <div className="mt-16 p-8 rounded-2xl bg-[#6B1E2F] border border-[#C9A86C]/30 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="text-center md:text-left">
            <h4 className="text-xl font-serif font-bold text-white mb-1">
              Dúvidas sobre o tratamento mais indicado para você?
            </h4>
            <p className="text-xs sm:text-sm text-[#F5F0EB]/90">
              Nossa equipe ouve você com paciência e carinho para indicar a melhor solução com total clareza e honestidade.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onSelectTreatmentForBooking('Avaliação Geral')}
            className="px-8 py-3.5 rounded-full text-xs uppercase tracking-widest font-bold bg-[#0F0C0A] text-[#C9A86C] border border-[#C9A86C]/50 hover:bg-[#1A1210] transition-all shadow-md flex-shrink-0 cursor-pointer"
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
