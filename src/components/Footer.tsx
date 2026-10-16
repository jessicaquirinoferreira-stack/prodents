import React from 'react';
import { MapPin, Phone, MessageSquare, Instagram, Facebook, Linkedin, ShieldCheck, ArrowUp } from 'lucide-react';
import { CLINIC_INFO, SPECIALISTS } from '../data/clinicData';
import { trackConversion } from '../utils/analytics';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070707] border-t border-[#D4AF37]/30 text-zinc-400 relative overflow-hidden pt-16 pb-10">
      {/* Subtle top wine accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#5C0A1F] to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Logo and Tagline Centered */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <div className="relative inline-flex items-center justify-center mb-6 group">
            {/* Soft ambient golden light behind transparent emblem */}
            <div className="absolute w-44 h-44 bg-[#D4AF37]/15 rounded-full blur-2xl -z-10 group-hover:bg-[#D4AF37]/25 transition-all duration-500"></div>
            <img
              src={CLINIC_INFO.images.logo}
              alt="Logo Oficial Pro Dentes Odontologia"
              className="h-28 sm:h-36 md:h-44 w-auto object-contain mx-auto drop-shadow-[0_8px_24px_rgba(212,175,55,0.4)] group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </div>
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mb-2">
            Pro Dentes Odontologia
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
            Mais que uma clínica, uma equipe que cuida de você. Referência em reabilitações orais, implantes e estética em São Bernardo do Campo desde 2009.
          </p>
        </div>

        {/* 4 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-zinc-800">
          {/* Col 1: Institutional & Local */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#D4AF37] border-l-2 border-[#D4AF37] pl-2.5">
              Localização
            </h4>
            <div className="space-y-2 text-xs sm:text-sm text-zinc-300">
              <p className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <span>
                  <strong>{CLINIC_INFO.address.street}</strong>
                  <br />
                  <span className="text-amber-200 font-medium">📍 {CLINIC_INFO.address.reference}</span>
                  <br />
                  {CLINIC_INFO.address.neighborhood} – {CLINIC_INFO.address.city} – {CLINIC_INFO.address.state}
                  <br />
                  CEP: {CLINIC_INFO.address.zip}
                </span>
              </p>
            </div>
            <p className="text-xs text-zinc-400 pt-1">
              Clínica familiar e acolhedora com fácil estacionamento e acesso pelas vias do ABC.
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#D4AF37] border-l-2 border-[#D4AF37] pl-2.5">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#inicio" className="hover:text-[#D4AF37] transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-[#D4AF37] transition-colors">
                  Sobre Nós (+27 Anos de História)
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-[#D4AF37] transition-colors">
                  Nossos Serviços
                </a>
              </li>
              <li>
                <a href="#equipe" className="hover:text-[#D4AF37] transition-colors">
                  Nossa Equipe
                </a>
              </li>
              <li>
                <a href="#galeria" className="hover:text-[#D4AF37] transition-colors">
                  Galeria da Clínica
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="hover:text-[#D4AF37] transition-colors">
                  Depoimentos de Pacientes
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-[#D4AF37] transition-colors">
                  Onde Estamos
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Specialists & CROs */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#D4AF37] border-l-2 border-[#D4AF37] pl-2.5">
              Responsabilidade Técnica
            </h4>
            <div className="space-y-2 text-xs text-zinc-300">
              {SPECIALISTS.map((spec) => (
                <div key={spec.id} className="pb-1 border-b border-zinc-800/60 last:border-0">
                  <div className="font-semibold text-zinc-200">{spec.name}</div>
                  <div className="text-[11px] text-[#D4AF37] flex items-center justify-between">
                    <span>{spec.specialty}</span>
                    <span className="text-zinc-400">{spec.cro}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Col 4: Contacts & Socials */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#D4AF37] border-l-2 border-[#D4AF37] pl-2.5">
              Atendimento Direto
            </h4>
            <div className="space-y-3 text-xs sm:text-sm">
              <a
                href={`tel:${CLINIC_INFO.phones.clean}`}
                onClick={() => trackConversion('click_ligar_telefone')}
                className="flex items-center space-x-2 text-zinc-300 hover:text-[#D4AF37] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#D4AF37]" />
                <span>{CLINIC_INFO.phones.display}</span>
              </a>

              <a
                href={`https://wa.me/${CLINIC_INFO.phones.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                onClick={() => trackConversion('click_whatsapp', { source: 'footer' })}
                className="flex items-center space-x-2 text-zinc-300 hover:text-emerald-400 transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>{CLINIC_INFO.phones.whatsappDisplay} (WhatsApp)</span>
              </a>

              <div className="pt-2">
                <span className="block text-xs text-zinc-400 mb-2 font-medium">Redes Sociais:</span>
                <div className="flex items-center space-x-3">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className="w-9 h-9 rounded-full bg-[#1A1A1A] hover:bg-[#5C0A1F] border border-zinc-700 flex items-center justify-center text-zinc-300 hover:text-white transition-colors"
                    aria-label="Instagram Pro Dentes Odontologia"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer"
                    className="w-9 h-9 rounded-full bg-[#1A1A1A] hover:bg-[#5C0A1F] border border-zinc-700 flex items-center justify-center text-zinc-300 hover:text-white transition-colors"
                    aria-label="Facebook Pro Dentes Odontologia"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="w-9 h-9 rounded-full bg-[#1A1A1A] hover:bg-[#5C0A1F] border border-zinc-700 flex items-center justify-center text-zinc-300 hover:text-white transition-colors"
                    aria-label="LinkedIn Pro Dentes Odontologia"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with exact required text */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-400 gap-4">
          <div className="flex items-center space-x-2 text-center sm:text-left">
            <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
            <span>
              © 2025 Pro Dentes Odontologia – Todos os direitos reservados.
            </span>
          </div>

          <div className="text-center sm:text-right flex items-center space-x-4">
            <span className="text-[11px] text-zinc-400">
              Dr. Carlos Eduardo Carvalho Vilela • CRO-SP 62085
            </span>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-full bg-[#1A1A1A] hover:bg-[#D4AF37] hover:text-black text-zinc-300 border border-zinc-700 transition-colors cursor-pointer"
              aria-label="Voltar ao topo"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
