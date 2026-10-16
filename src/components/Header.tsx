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
    { name: 'Tratamentos', href: '#servicos' },
  ];

  const navLinksRight = [
    { name: 'Nossa Equipe', href: '#equipe' },
    { name: 'Depoimentos', href: '#depoimentos' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <>
      {/* Main Navbar */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0F0C0A]/95 backdrop-blur-md shadow-2xl border-b border-[#C9A86C]/30 py-3'
            : 'bg-transparent border-b border-[#C9A86C]/15 py-4'
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
                  className="text-xs uppercase tracking-widest font-medium text-[#F5F0EB] hover:text-[#C9A86C] transition-colors duration-200 relative group py-1"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#C9A86C] transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </nav>

            {/* Centered Brand Logo */}
            <div className="flex-shrink-0 flex items-center justify-center">
              <a
                href="#inicio"
                className="group flex flex-col items-center focus:outline-none transition-transform duration-300 hover:scale-102"
                aria-label="Pro Dentes Odontologia - Página Inicial"
              >
                <div className="relative flex items-center justify-center py-0.5">
                  <img
                    src={CLINIC_INFO.images.logo}
                    alt="Logo Oficial Pro Dentes Odontologia"
                    className="h-14 sm:h-16 md:h-18 w-auto object-contain transition-all duration-300 drop-shadow-md filter brightness-110"
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
                    className="text-xs uppercase tracking-widest font-medium text-[#F5F0EB] hover:text-[#C9A86C] transition-colors duration-200 relative group py-1"
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#C9A86C] transition-all duration-300 group-hover:w-full"></span>
                  </a>
                ))}
              </nav>

              <button
                type="button"
                onClick={handleBookingClick}
                className="ml-auto inline-flex items-center space-x-2 px-6 py-2.5 rounded-full text-xs uppercase tracking-widest font-bold btn-gold-primary cursor-pointer"
              >
                <CalendarCheck className="w-4 h-4 text-[#C9A86C]" />
                <span>Agendar</span>
              </button>
            </div>

            {/* Mobile menu trigger */}
            <div className="flex lg:hidden items-center space-x-3">
              <button
                type="button"
                onClick={handleBookingClick}
                className="px-4 py-2 rounded-full text-xs font-bold btn-gold-primary"
              >
                Agendar
              </button>
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg text-[#F5F0EB] hover:text-[#C9A86C] bg-[#0F0C0A] border border-[#C9A86C]/30 focus:outline-none"
                aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-[#1A1210] border-b border-[#C9A86C]/30 shadow-2xl py-6 px-6 animate-fadeIn">
            <nav className="flex flex-col space-y-4">
              {[...navLinksLeft, ...navLinksRight].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-sm uppercase tracking-widest font-medium text-[#F5F0EB] hover:text-[#C9A86C] transition-colors py-2 border-b border-[#C9A86C]/20 flex items-center justify-between"
                >
                  <span>{item.name}</span>
                  <span className="text-[#C9A86C]">›</span>
                </a>
              ))}
              <div className="pt-4 space-y-3">
                <button
                  type="button"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    handleBookingClick();
                  }}
                  className="w-full py-3 rounded-full btn-gold-primary text-xs uppercase tracking-wider font-bold flex items-center justify-center space-x-2"
                >
                  <CalendarCheck className="w-4 h-4 text-[#C9A86C]" />
                  <span>Agendar Consulta</span>
                </button>
                <a
                  href={`tel:${CLINIC_INFO.phones.clean}`}
                  className="w-full py-3 rounded-full bg-[#0F0C0A] border border-[#C9A86C]/30 text-[#F5F0EB] text-xs font-bold uppercase tracking-wider flex items-center justify-center space-x-2"
                >
                  <Phone className="w-4 h-4 text-[#C9A86C]" />
                  <span>{CLINIC_INFO.phones.display}</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};
