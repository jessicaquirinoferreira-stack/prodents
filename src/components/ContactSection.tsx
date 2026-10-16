import React from 'react';
import { MapPin, Phone, MessageSquare, Clock, Navigation, ExternalLink, Mail } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import { trackConversion } from '../utils/analytics';

export const ContactSection: React.FC = () => {
  const handleMapDirections = () => {
    trackConversion('click_como_chegar');
    window.open(CLINIC_INFO.maps.link, '_blank');
  };

  const handleWhatsApp = () => {
    trackConversion('click_whatsapp', { source: 'contato_section' });
    const text = encodeURIComponent(
      'Olá! Gostaria de mais informações sobre os tratamentos na Pro Dentes Odontologia.'
    );
    window.open(`https://wa.me/${CLINIC_INFO.phones.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <section id="contato" className="relative py-24 bg-[#0D0D0D] overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute top-0 right-1/3 w-96 h-96 bg-[#5C0A1F]/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#1A1A1A] border border-[#D4AF37]/40 mb-3">
            <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-xs font-semibold tracking-widest uppercase text-amber-200">
              Localização & Contato
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white mb-4">
            Onde Estamos em <span className="gold-gradient-text">São Bernardo do Campo</span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 font-light max-w-2xl mx-auto">
            Fácil acesso pela Rodovia Anchieta e vias centrais do ABC. Estacionamento conveniado e estrutura acolhedora para você.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Contact Details Cards */}
          <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
            {/* Address */}
            <div className="p-6 rounded-2xl bg-[#141414] border border-[#D4AF37]/30 hover:border-[#D4AF37] transition-colors shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-[#5C0A1F] border border-[#D4AF37]/40 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-serif font-bold text-white">Endereço & Ponto de Referência</h3>
                  <p className="text-sm text-zinc-200 font-medium">
                    {CLINIC_INFO.address.street}
                  </p>
                  <p className="text-xs text-amber-200 font-medium">
                    📍 {CLINIC_INFO.address.reference}
                  </p>
                  <p className="text-xs text-zinc-400">
                    Bairro {CLINIC_INFO.address.neighborhood} – {CLINIC_INFO.address.city} – {CLINIC_INFO.address.state} • CEP {CLINIC_INFO.address.zip}
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-zinc-800 flex items-center justify-between">
                <button
                  type="button"
                  onClick={handleMapDirections}
                  className="inline-flex items-center space-x-1.5 text-xs uppercase font-bold text-[#D4AF37] hover:text-white transition-colors cursor-pointer"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Traçar Rota no Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Hours */}
            <div className="p-6 rounded-2xl bg-[#141414] border border-[#D4AF37]/30 hover:border-[#D4AF37] transition-colors shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-[#5C0A1F] border border-[#D4AF37]/40 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-serif font-bold text-white">Horários de Funcionamento</h3>
                  <p className="text-xs sm:text-sm text-zinc-300">
                    {CLINIC_INFO.hours.weekdays}
                  </p>
                  <p className="text-xs sm:text-sm text-zinc-300">
                    {CLINIC_INFO.hours.saturday}
                  </p>
                  <p className="text-xs text-zinc-400">
                    {CLINIC_INFO.hours.sunday}
                  </p>
                </div>
              </div>
            </div>

            {/* Telephones & WhatsApp */}
            <div className="p-6 rounded-2xl bg-[#141414] border border-[#D4AF37]/30 hover:border-[#D4AF37] transition-colors shadow-lg">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#5C0A1F] border border-[#D4AF37]/40 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-serif font-bold text-white">Canais de Atendimento</h3>
                  <p className="text-xs text-zinc-400">Ligue para nossa recepção ou envie mensagem no WhatsApp:</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <a
                  href={`tel:${CLINIC_INFO.phones.clean}`}
                  onClick={() => trackConversion('click_ligar_telefone')}
                  className="p-3 rounded-xl bg-[#1A1A1A] hover:bg-[#222] border border-zinc-700 flex items-center space-x-2.5 transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#D4AF37]" />
                  <div>
                    <span className="block text-[10px] text-zinc-400 uppercase">Telefone Fixo</span>
                    <span className="text-xs font-bold text-white">{CLINIC_INFO.phones.display}</span>
                  </div>
                </a>

                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="p-3 rounded-xl bg-[#25D366]/20 hover:bg-[#25D366]/30 border border-[#25D366]/40 flex items-center space-x-2.5 transition-colors text-left cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 text-[#25D366]" />
                  <div>
                    <span className="block text-[10px] text-zinc-400 uppercase">WhatsApp Direto</span>
                    <span className="text-xs font-bold text-white">{CLINIC_INFO.phones.whatsappDisplay}</span>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Interactive Google Maps Embed */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border-2 border-[#D4AF37]/40 shadow-2xl relative min-h-[380px] lg:min-h-full flex flex-col">
            <iframe
              title="Localização Pro Dentes Odontologia São Bernardo do Campo"
              src={CLINIC_INFO.maps.embedUrl}
              className="w-full h-full min-h-[380px] border-0 filter contrast-105"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            <div className="absolute bottom-4 left-4 right-4 sm:left-auto sm:right-4 bg-[#0D0D0D]/95 backdrop-blur-md p-3.5 rounded-xl border border-[#D4AF37]/50 shadow-xl flex items-center justify-between sm:space-x-4">
              <div className="text-left">
                <div className="text-xs font-bold text-white">Av. Caminho do Mar, 2030</div>
                <div className="text-[11px] text-amber-300">Próx. Sabesp e Bem Barato – Rudge Ramos</div>
              </div>
              <button
                type="button"
                onClick={handleMapDirections}
                className="px-4 py-2 rounded-lg text-xs font-bold bg-[#D4AF37] hover:bg-white text-black transition-colors cursor-pointer flex items-center space-x-1"
              >
                <span>Navegar</span>
                <Navigation className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
