import React from 'react';
import { Phone, MapPin, Mail, Clock, Heart, ShieldCheck, Instagram, Facebook } from 'lucide-react';
import { CLINIC_INFO, TREATMENTS } from '../data/clinicData';
import { trackConversion } from '../utils/analytics';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0F0C0A] text-[#D4C9B8] pt-20 pb-12 border-t border-[#C9A86C]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img
                src={CLINIC_INFO.images.logo}
                alt="Logo Pró Dentes Odontologia"
                className="h-14 w-auto object-contain filter brightness-110"
              />
            </div>
            <p className="text-xs sm:text-sm text-[#D4C9B8] leading-relaxed font-light">
              Mais de 27 anos de história e dedicação às famílias de Rudge Ramos e São Bernardo do Campo. Atendimento humanizado, paciência com a terceira idade e excelência cirúrgica.
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <a
                href={CLINIC_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackConversion('click_instagram')}
                className="w-10 h-10 rounded-full bg-[#1A1210] border border-[#C9A86C]/30 flex items-center justify-center text-[#F5F0EB] hover:text-[#0F0C0A] hover:border-[#C9A86C] hover:bg-[#C9A86C] transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={CLINIC_INFO.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackConversion('click_facebook')}
                className="w-10 h-10 rounded-full bg-[#1A1210] border border-[#C9A86C]/30 flex items-center justify-center text-[#F5F0EB] hover:text-[#0F0C0A] hover:border-[#C9A86C] hover:bg-[#C9A86C] transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-bold text-white text-base mb-6 tracking-wide border-b border-[#C9A86C]/20 pb-2">
              Navegação
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm font-light">
              <li>
                <a href="#inicio" className="hover:text-white transition-colors flex items-center space-x-2">
                  <span className="text-[#C9A86C]">›</span>
                  <span>Início</span>
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-white transition-colors flex items-center space-x-2">
                  <span className="text-[#C9A86C]">›</span>
                  <span>Sobre Nós (+27 Anos)</span>
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-white transition-colors flex items-center space-x-2">
                  <span className="text-[#C9A86C]">›</span>
                  <span>Nossos Tratamentos</span>
                </a>
              </li>
              <li>
                <a href="#equipe" className="hover:text-white transition-colors flex items-center space-x-2">
                  <span className="text-[#C9A86C]">›</span>
                  <span>Conheça Nossa Equipe</span>
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="hover:text-white transition-colors flex items-center space-x-2">
                  <span className="text-[#C9A86C]">›</span>
                  <span>Depoimentos de Pacientes</span>
                </a>
              </li>
              <li>
                <a href="#agendamento" className="hover:text-white transition-colors flex items-center space-x-2">
                  <span className="text-[#C9A86C]">›</span>
                  <span>Agende sua Consulta</span>
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-white transition-colors flex items-center space-x-2">
                  <span className="text-[#C9A86C]">›</span>
                  <span>Onde Estamos</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Treatments List */}
          <div>
            <h4 className="font-serif font-bold text-white text-base mb-6 tracking-wide border-b border-[#C9A86C]/20 pb-2">
              Tratamentos Principais
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm font-light">
              {TREATMENTS.slice(0, 5).map((t) => (
                <li key={t.id}>
                  <a href="#servicos" className="hover:text-white transition-colors flex items-center space-x-2 truncate">
                    <span className="text-[#C9A86C] flex-shrink-0">›</span>
                    <span className="truncate">{t.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Hours */}
          <div>
            <h4 className="font-serif font-bold text-white text-base mb-6 tracking-wide border-b border-[#C9A86C]/20 pb-2">
              Contato & Local
            </h4>
            <ul className="space-y-4 text-xs sm:text-sm font-light">
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-[#C9A86C] flex-shrink-0 mt-1" />
                <span>{CLINIC_INFO.address.full}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-[#C9A86C] flex-shrink-0" />
                <a href={`tel:${CLINIC_INFO.phones.clean}`} className="hover:text-white transition-colors font-medium">
                  {CLINIC_INFO.phones.display}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-[#C9A86C] flex-shrink-0" />
                <span className="truncate">{CLINIC_INFO.email}</span>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="w-4 h-4 text-[#C9A86C] flex-shrink-0 mt-0.5" />
                <span>{CLINIC_INFO.hours.weekdays}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#C9A86C]/20 flex flex-col sm:flex-row items-center justify-between text-xs text-[#D4C9B8] gap-4">
          <p>© {new Date().getFullYear()} {CLINIC_INFO.legalName}. Todos os direitos reservados.</p>
          <div className="flex items-center space-x-1 text-[#D4C9B8]">
            <span>Desenvolvido com</span>
            <Heart className="w-3.5 h-3.5 text-[#6B1E2F] fill-[#6B1E2F]" />
            <span>para o Rudge Ramos • SBC</span>
          </div>
          <div className="flex items-center space-x-2 text-[#C9A86C]">
            <ShieldCheck className="w-4 h-4 text-[#C9A86C]" />
            <span>CRO-SP Autorizado</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
