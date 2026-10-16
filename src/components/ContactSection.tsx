import React from 'react';
import { MapPin, Phone, Mail, Clock, Navigation } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import { trackConversion } from '../utils/analytics';

export const ContactSection: React.FC = () => {
  return (
    <section id="contato" className="relative py-24 bg-[#1A1210] text-[#F5F0EB] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/3 w-96 h-96 bg-[#C9A86C]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#0F0C0A] border border-[#C9A86C]/30 mb-3 shadow-xs">
            <MapPin className="w-3.5 h-3.5 text-[#C9A86C]" />
            <span className="text-xs font-semibold tracking-widest uppercase text-[#C9A86C]">
              Onde Estamos & Contato Direto
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white mb-4">
            Venha nos <span className="text-[#C9A86C]">Visitar</span>
          </h2>
          <p className="text-base sm:text-lg text-[#D4C9B8] font-light max-w-2xl mx-auto">
            Localização privilegiada no Rudge Ramos, em São Bernardo do Campo, com fácil acesso e estacionamento.
          </p>
          <div className="w-20 h-1 bg-[#C9A86C] mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            <div className="space-y-6">
              {/* Address Card */}
              <div className="p-6 rounded-2xl bg-[#0F0C0A] border border-[#C9A86C]/30 hover:border-[#C9A86C] transition-colors shadow-sm">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-[#1A1210] border border-[#C9A86C]/40 flex items-center justify-center flex-shrink-0 text-[#C9A86C]">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-serif font-bold text-white mb-1">
                      Endereço da Clínica
                    </h3>
                    <p className="text-xs sm:text-sm text-[#D4C9B8] leading-relaxed">
                      {CLINIC_INFO.address.street}<br />
                      {CLINIC_INFO.address.neighborhood} – {CLINIC_INFO.address.city} – {CLINIC_INFO.address.state}<br />
                      <span className="text-xs text-[#C9A86C] font-semibold">
                        {CLINIC_INFO.address.reference}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-[#C9A86C]/20 flex items-center justify-between">
                  <span className="text-xs text-[#D4C9B8]">CEP: {CLINIC_INFO.address.zip}</span>
                  <a
                    href={CLINIC_INFO.maps.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackConversion('click_como_chegar')}
                    className="inline-flex items-center space-x-1.5 text-xs uppercase font-bold text-[#C9A86C] hover:text-[#E8D5B0] transition-colors cursor-pointer"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Como Chegar</span>
                  </a>
                </div>
              </div>

              {/* Hours Card */}
              <div className="p-6 rounded-2xl bg-[#0F0C0A] border border-[#C9A86C]/30 hover:border-[#C9A86C] transition-colors shadow-sm">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-[#1A1210] border border-[#C9A86C]/40 flex items-center justify-center flex-shrink-0 text-[#C9A86C]">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-serif font-bold text-white mb-1">
                      Horário de Funcionamento
                    </h3>
                    <div className="text-xs sm:text-sm text-[#D4C9B8] space-y-1">
                      <p><strong className="text-white">Segunda a Sexta:</strong> 09h00 às 22h00</p>
                      <p><strong className="text-white">Sábado e Domingo:</strong> Fechado</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone & Email Card */}
              <div className="p-6 rounded-2xl bg-[#0F0C0A] border border-[#C9A86C]/30 hover:border-[#C9A86C] transition-colors shadow-sm">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-[#1A1210] border border-[#C9A86C]/40 flex items-center justify-center flex-shrink-0 text-[#C9A86C]">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div className="space-y-2 w-full">
                    <h3 className="text-base font-serif font-bold text-white mb-1">
                      Canais de Atendimento
                    </h3>
                    <div>
                      <a
                        href={`tel:${CLINIC_INFO.phones.clean}`}
                        onClick={() => trackConversion('click_telefone_contato')}
                        className="p-3 rounded-xl bg-[#1A1210] hover:bg-[#1A1210]/80 border border-[#C9A86C]/30 flex items-center space-x-2.5 transition-colors shadow-xs"
                      >
                        <Phone className="w-4 h-4 text-[#C9A86C]" />
                        <span className="text-xs sm:text-sm font-bold text-white">{CLINIC_INFO.phones.display}</span>
                      </a>
                    </div>
                    <div>
                      <a
                        href={`mailto:${CLINIC_INFO.email}`}
                        className="p-3 rounded-xl bg-[#1A1210] hover:bg-[#1A1210]/80 border border-[#C9A86C]/30 flex items-center space-x-2.5 transition-colors shadow-xs"
                      >
                        <Mail className="w-4 h-4 text-[#C9A86C]" />
                        <span className="text-xs sm:text-sm font-bold text-white truncate">{CLINIC_INFO.email}</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map Column */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-[#C9A86C]/30 shadow-xl relative min-h-[380px] lg:min-h-full flex flex-col">
            <iframe
              title="Mapa de Localização - Pró Dentes Odontologia"
              src={CLINIC_INFO.maps.embedUrl}
              className="w-full h-full flex-grow border-0 min-h-[400px] filter contrast-125 invert-90"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="absolute bottom-4 left-4 right-4 sm:left-auto sm:right-4 bg-[#0F0C0A]/95 backdrop-blur-md p-3.5 rounded-xl border border-[#C9A86C]/40 shadow-2xl flex items-center justify-between sm:space-x-4">
              <div>
                <div className="text-xs font-bold text-white">Pró Dentes Odontologia</div>
                <div className="text-[11px] text-[#C9A86C] font-semibold">Próx. Sabesp e Bem Barato – Rudge Ramos</div>
              </div>
              <a
                href={CLINIC_INFO.maps.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackConversion('click_abrir_maps')}
                className="px-4 py-2 rounded-lg btn-gold-primary text-[11px] uppercase tracking-wider font-bold shadow-xs cursor-pointer"
              >
                Abrir Mapa
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
