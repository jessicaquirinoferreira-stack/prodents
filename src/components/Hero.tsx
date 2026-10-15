import React, { useEffect, useState } from 'react';
import { Calendar, ArrowRight, Star, ShieldCheck, Sparkles, MapPin } from 'lucide-react';
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
      className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24"
    >
      {/* Background Hero Image with soft parallax and dual gold/wine gradient overlays */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-100 ease-out will-change-transform scale-105"
        style={{
          backgroundImage: `url(${CLINIC_INFO.images.hero})`,
          transform: `translateY(${scrollY * 0.18}px)`,
        }}
      >
        {/* Multilayered sophisticated overlay: deep black + wine shade + golden amber highlights */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/75 to-[#0D0D0D]/40"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#20040A]/85 via-[#350611]/60 to-[#0D0D0D]/80"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_center,_rgba(212,175,55,0.18)_0%,_transparent_70%)]"></div>
      </div>

      {/* Floating subtle golden particles/sparkles */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        <div className="absolute top-1/4 left-10 w-2 h-2 rounded-full bg-[#D4AF37] opacity-60 animate-ping"></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 rounded-full bg-[#E6CA65] opacity-40 blur-xs animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/5 w-2 h-2 rounded-full bg-[#C9A227] opacity-50 animate-bounce"></div>
        <div className="absolute top-2/3 right-12 w-2.5 h-2.5 rounded-full bg-[#D4AF37] opacity-70 animate-pulse"></div>
        <div className="absolute top-16 right-1/3 w-1.5 h-1.5 rounded-full bg-white opacity-40 animate-ping"></div>
      </div>

      {/* Hero Content Container */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Premium badge */}
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-black/60 border border-[#D4AF37]/50 backdrop-blur-md mb-6 shadow-lg shadow-black/60">
          <Sparkles className="w-4 h-4 text-[#D4AF37] animate-pulse" />
          <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-amber-200">
            Clínica Odontológica de Alto Padrão em São Bernardo
          </span>
        </div>

        {/* Impactful Gold Title as requested: “Nossa equipe ESPERA POR VOCÊ!” */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-4 drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
          <span className="gold-gradient-text block font-serif uppercase tracking-wide leading-tight">
            Nossa equipe
          </span>
          <span className="text-[#F8F1E9] block font-serif tracking-normal mt-1 text-3xl sm:text-5xl md:text-6xl font-light italic">
            ESPERA POR VOCÊ!
          </span>
        </h1>

        {/* Subtitle as requested: “Mais que uma clínica, uma equipe que cuida de você!” */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-amber-100/90 mb-3 font-serif max-w-3xl drop-shadow">
          “Mais que uma clínica, uma equipe que cuida de você!”
        </h2>

        {/* Supporting text as requested: “Qualidade, Atendimento Humanizado e Resultados Reais.” */}
        <p className="text-base sm:text-lg md:text-xl text-zinc-300 font-light max-w-2xl mb-8 tracking-wide">
          Qualidade, Atendimento Humanizado e Resultados Reais.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-12">
          {/* Main CTA */}
          <button
            type="button"
            onClick={handleBooking}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wider bg-gradient-to-r from-[#D4AF37] via-[#C9A227] to-[#B8860B] text-[#0D0D0D] hover:from-[#5C0A1F] hover:via-[#8B0000] hover:to-[#4A0E0E] hover:text-[#F8F1E9] border border-[#D4AF37] shadow-[0_0_30px_rgba(201,162,39,0.45)] hover:shadow-[0_0_35px_rgba(92,10,31,0.7)] transform hover:-translate-y-1 active:translate-y-0 transition-all duration-300 cursor-pointer"
          >
            <Calendar className="w-5 h-5" />
            <span>Agende sua Consulta</span>
          </button>

          {/* Secondary CTA */}
          <a
            href="#tratamentos"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 px-8 py-4 rounded-full font-semibold text-sm uppercase tracking-wider text-amber-100 bg-[#141414]/80 hover:bg-[#1A1A1A] border border-[#D4AF37]/50 hover:border-[#D4AF37] backdrop-blur-md shadow-lg transform hover:-translate-y-1 transition-all duration-300"
          >
            <span>Conheça nossos tratamentos</span>
            <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
          </a>
        </div>

        {/* Trust Badges Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 w-full max-w-4xl pt-6 border-t border-[#D4AF37]/20">
          <div className="bg-[#141414]/70 backdrop-blur-md p-3 sm:p-4 rounded-xl border border-[#D4AF37]/20 flex items-center space-x-3 text-left">
            <div className="w-10 h-10 rounded-lg bg-[#5C0A1F]/50 border border-[#D4AF37]/30 flex items-center justify-center flex-shrink-0">
              <Star className="w-5 h-5 text-[#D4AF37] fill-[#D4AF37]" />
            </div>
            <div>
              <div className="text-sm font-bold text-white flex items-center gap-1">
                4.9 / 5.0
                <span className="text-[10px] text-amber-300 font-normal">Google</span>
              </div>
              <div className="text-[11px] text-zinc-400">Avaliações Positivas</div>
            </div>
          </div>

          <div className="bg-[#141414]/70 backdrop-blur-md p-3 sm:p-4 rounded-xl border border-[#D4AF37]/20 flex items-center space-x-3 text-left">
            <div className="w-10 h-10 rounded-lg bg-[#5C0A1F]/50 border border-[#D4AF37]/30 flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-5 h-5 text-[#D4AF37]" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Desde 2009</div>
              <div className="text-[11px] text-zinc-400">+15 Anos em SBC</div>
            </div>
          </div>

          <div className="bg-[#141414]/70 backdrop-blur-md p-3 sm:p-4 rounded-xl border border-[#D4AF37]/20 flex items-center space-x-3 text-left">
            <div className="w-10 h-10 rounded-lg bg-[#5C0A1F]/50 border border-[#D4AF37]/30 flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-5 h-5 text-[#D4AF37]" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Casos Complexos</div>
              <div className="text-[11px] text-zinc-400">Implantes & Oclusão</div>
            </div>
          </div>

          <div className="bg-[#141414]/70 backdrop-blur-md p-3 sm:p-4 rounded-xl border border-[#D4AF37]/20 flex items-center space-x-3 text-left">
            <div className="w-10 h-10 rounded-lg bg-[#5C0A1F]/50 border border-[#D4AF37]/30 flex items-center justify-center flex-shrink-0">
              <MapPin className="w-5 h-5 text-[#D4AF37]" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Rudge Ramos</div>
              <div className="text-[11px] text-zinc-400">Fácil Estacionamento</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
