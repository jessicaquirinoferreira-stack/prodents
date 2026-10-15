import React, { useState, useEffect } from 'react';
import { Menu, X, CalendarCheck, Phone, MapPin } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import { trackConversion } from '../utils/analytics';

interface HeaderProps {
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBookingClick = () => {
    trackConversion('click_agendamento_header');
    onOpenBooking();
  };

  const navLinksLeft = [
    { name: 'Início', href: '#inicio' },
    { name: 'Sobre Nós', href: '#sobre' },
    { name: 'Tratamentos', href: '#tratamentos' },
  ];

  const navLinksRight = [
    { name: 'Especialistas', href: '#especialistas' },
    { name: 'Estrutura', href: '#estrutura' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <>
      {/* Top micro bar with contact and address info */}
      <div className="hidden lg:block bg-[#080808]/95 border-b border-[#D4AF37]/20 text-xs py-1.5 px-6 text-[#F8F1E9]/80 backdrop-blur-md relative z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center space-x-1.5 text-amber-100/90 hover:text-[#D4AF37] transition-colors">
              <MapPin className="w-3.5 h-3.5 text-[#C9A227]" />
              <span>Av. Caminho do Mar, 2030 – Rudge Ramos, São Bernardo do Campo</span>
            </span>
            <span className="text-[#D4AF37]/40">|</span>
            <span className="text-zinc-400">Segunda a Sexta: 08h às 19h | Sábados: 08h às 13h</span>
          </div>
          <div className="flex items-center space-x-5">
            <a
              href={`tel:${CLINIC_INFO.phones.clean}`}
              onClick={() => trackConversion('click_ligar_telefone')}
              className="flex items-center space-x-1.5 text-zinc-300 hover:text-[#D4AF37] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#C9A227]" />
              <span>{CLINIC_INFO.phones.display}</span>
            </a>
            <span className="text-emerald-400 flex items-center space-x-1 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block mr-1"></span>
              Atendimento Aberto
            </span>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0D0D0D]/95 backdrop-blur-md shadow-2xl shadow-black/80 border-b border-[#D4AF37]/30 py-2.5'
            : 'bg-gradient-to-b from-[#080808]/90 via-[#0D0D0D]/60 to-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Desktop Left Navigation */}
            <nav className="hidden lg:flex items-center space-x-8 flex-1 justify-end pr-8">
              {navLinksLeft.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm uppercase tracking-wider font-medium text-[#F8F1E9]/90 hover:text-[#D4AF37] transition-colors duration-200 relative group py-1"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#D4AF37] to-[#C9A227] transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </nav>

            {/* Centered Brand Logo */}
            <div className="flex-shrink-0 flex items-center justify-center">
              <a
                href="#inicio"
                className="group flex flex-col items-center focus:outline-none transition-transform duration-300 hover:scale-105"
                aria-label="Pro Dentes Odontologia - Página Inicial"
              >
                <div className="relative flex items-center justify-center py-1">
                  <img
                    src={CLINIC_INFO.images.logo}
                    alt="Logo Oficial Pro Dentes Odontologia"
                    className="h-14 sm:h-16 md:h-20 w-auto object-contain drop-shadow-[0_4px_16px_rgba(212,175,55,0.45)] group-hover:drop-shadow-[0_4px_24px_rgba(212,175,55,0.75)] transition-all duration-300"
                    loading="eager"
                  />
                </div>
              </a>
            </div>

            {/* Desktop Right Navigation & CTA */}
            <div className="hidden lg:flex items-center space-x-8 flex-1 justify-start pl-8">
              <nav className="flex items-center space-x-8">
                {navLinksRight.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-sm uppercase tracking-wider font-medium text-[#F8F1E9]/90 hover:text-[#D4AF37] transition-colors duration-200 relative group py-1"
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#D4AF37] to-[#C9A227] transition-all duration-300 group-hover:w-full"></span>
                  </a>
                ))}
              </nav>

              <button
                type="button"
                onClick={handleBookingClick}
                className="ml-auto inline-flex items-center space-x-2 px-5 py-2.5 rounded-full text-xs uppercase tracking-widest font-semibold bg-gradient-to-r from-[#D4AF37] via-[#C9A227] to-[#B8860B] text-[#0D0D0D] hover:from-[#5C0A1F] hover:via-[#8B0000] hover:to-[#4A0E0E] hover:text-[#F8F1E9] border border-[#D4AF37]/70 shadow-lg shadow-[#C9A227]/25 hover:shadow-[#5C0A1F]/50 transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>Agende sua Avaliação</span>
              </button>
            </div>

            {/* Mobile menu trigger */}
            <div className="flex lg:hidden items-center space-x-3">
              <button
                type="button"
                onClick={handleBookingClick}
                className="px-3.5 py-2 rounded-full text-xs font-semibold bg-gradient-to-r from-[#D4AF37] to-[#C9A227] text-[#0D0D0D] shadow-md"
              >
                Agendar
              </button>
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg text-zinc-300 hover:text-white bg-[#1A1A1A]/80 border border-[#D4AF37]/30 focus:outline-none"
                aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6 text-[#D4AF37]" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-[#0D0D0D]/98 backdrop-blur-xl border-b border-[#D4AF37]/30 px-6 pt-4 pb-8 space-y-4 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
            <div className="flex flex-col space-y-3 pt-2">
              {[...navLinksLeft, ...navLinksRight].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-base font-medium text-zinc-200 hover:text-[#D4AF37] hover:bg-[#1A1A1A] px-3 py-2.5 rounded-lg transition-colors border-l-2 border-transparent hover:border-[#D4AF37]"
                >
                  {item.name}
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-zinc-800 space-y-3">
              <button
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  handleBookingClick();
                }}
                className="w-full flex items-center justify-center space-x-2 px-5 py-3 rounded-full text-sm font-bold bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-[#0D0D0D] shadow-lg shadow-[#C9A227]/30"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>Agende sua Avaliação</span>
              </button>

              <div className="text-center text-xs text-zinc-400 pt-2 space-y-1">
                <p>📍 {CLINIC_INFO.address.street} – {CLINIC_INFO.address.neighborhood}</p>
                <p>📞 {CLINIC_INFO.phones.display}</p>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
