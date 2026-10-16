import React from 'react';
import { MessageCircle } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import { trackConversion } from '../utils/analytics';

export const WhatsAppFloat: React.FC = () => {
  const handleClick = () => {
    trackConversion('click_whatsapp_float');
    const url = `https://wa.me/${CLINIC_INFO.phones.whatsapp}?text=Olá! Gostaria de tirar dúvidas e agendar uma consulta na Pró Dentes Odontologia.`;
    window.open(url, '_blank');
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-40 bg-emerald-600 hover:bg-emerald-700 text-white p-4 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer group focus:outline-none"
      aria-label="Atendimento via WhatsApp"
    >
      <MessageCircle className="w-7 h-7 fill-white text-emerald-600" />
      <span className="absolute right-full mr-3 whitespace-nowrap bg-[#1A1210] text-white text-xs font-bold px-3 py-1.5 rounded-xl shadow-2xl border border-[#C9A86C]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Fale conosco no WhatsApp
      </span>
      <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-[#0F0C0A] animate-ping"></span>
    </button>
  );
};
