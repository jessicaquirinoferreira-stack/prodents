import React, { useEffect, useState } from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import { trackConversion } from '../utils/analytics';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBooking = () => {
    trackConversion('click_agendamento_hero');
    onOpenBooking();
  };

  return (
    <section
      id="inicio"
      className="relative min-h-[90vh] sm:min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28 bg-[#0F0C0A]"
    >
      {/* Background Hero Image with soft parallax and dark luxury overlay matching reference image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-100 ease-out will-change-transform scale-105 opacity-35 filter brightness-75"
        style={{
          backgroundImage: `url(${CLINIC_INFO.images.hero})`,
          transform: `translateY(${scrollY * 0.15}px)`,
        }}
      ></div>

      {/* Fading gradient vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F0C0A]/30 via-[#0F0C0A]/65 to-[#0F0C0A] z-10"></div>

      {/* Hero Content Container */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Impactful Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-extrabold tracking-tight mb-6 leading-tight">
          <span className="text-white block uppercase tracking-wide">
            Nossa equipe
          </span>
          <span className="text-[#C9A86C] block tracking-normal mt-1 font-light italic">
            ESPERA POR VOCÊ!
          </span>
        </h1>

        {/* Subtitle */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-[#F5F0EB] mb-4 font-serif max-w-3xl">
          “Mais que uma clínica, uma equipe que cuida de você!”
        </h2>

        {/* Supporting text */}
        <p className="text-base sm:text-lg md:text-xl text-[#D4C9B8] font-light max-w-2xl mb-10 tracking-wide leading-relaxed">
          Qualidade, Atendimento Humanizado e Resultados Reais.
        </p>

        {/* CTAs matching reference buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-16">
          {/* Main CTA */}
          <button
            type="button"
            onClick={handleBooking}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 px-8 py-4 rounded-full font-bold text-xs uppercase tracking-widest btn-gold-primary cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-[#C9A86C]" />
            <span>AGENDAR CONSULTA</span>
          </button>

          {/* Secondary CTA */}
          <a
            href="#servicos"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 px-8 py-4 rounded-full font-semibold text-xs uppercase tracking-widest btn-gold-outline cursor-pointer"
          >
            <span>CONHEÇA NOSSOS SERVIÇOS</span>
            <ArrowRight className="w-4 h-4 text-[#C9A86C]" />
          </a>
        </div>
      </div>
    </section>
  );
};
