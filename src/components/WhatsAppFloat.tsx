import React, { useState } from 'react';
import { MessageSquare, X, Send, Sparkles } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import { trackConversion } from '../utils/analytics';

export const WhatsAppFloat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [quickMsg, setQuickMsg] = useState('');

  const handleOpenWhatsApp = (message?: string) => {
    trackConversion('click_whatsapp', { source: 'floating_widget' });
    const textToSend = encodeURIComponent(
      message ||
        quickMsg ||
        'Olá! Gostaria de falar com a recepção da Pro Dentes Odontologia para agendar uma consulta.'
    );
    window.open(`https://wa.me/${CLINIC_INFO.phones.whatsapp}?text=${textToSend}`, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Quick Chat Popup Card */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-88 rounded-2xl bg-[#141414] border-2 border-[#D4AF37]/50 shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#5C0A1F] to-[#350611] p-4 text-white flex items-center justify-between border-b border-[#D4AF37]/30">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-11 h-11 rounded-full bg-black/40 border border-[#D4AF37]/50 p-1 flex items-center justify-center overflow-hidden">
                  <img
                    src={CLINIC_INFO.images.logo}
                    alt="Logo Pro Dentes"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-[#25D366] rounded-full border-2 border-black"></span>
              </div>
              <div>
                <h4 className="text-sm font-bold text-amber-200 font-serif">Pro Dentes Recepção</h4>
                <p className="text-[11px] text-zinc-300 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  Online agora para você
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full text-zinc-300 hover:text-white bg-black/30 hover:bg-black/50"
              aria-label="Fechar popup WhatsApp"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 space-y-3 bg-[#0D0D0D]">
            <div className="bg-[#1C1C1C] rounded-2xl rounded-tl-none p-3.5 text-xs text-zinc-200 border border-zinc-800 shadow">
              <p className="font-medium text-amber-200 mb-1">Olá! Seja bem-vindo(a) à Pró Dentes Odontologia.</p>
              <p className="text-zinc-300">
                Como podemos ajudar com seu sorriso hoje? Tire suas dúvidas ou agende sua avaliação no Rudge Ramos.
              </p>
            </div>

            {/* Quick Suggestions */}
            <div className="space-y-1.5 pt-1">
              <span className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider">
                Como podemos cuidar de você:
              </span>
              <button
                type="button"
                onClick={() =>
                  handleOpenWhatsApp('Olá! Gostaria de agendar uma consulta com o Dr. Carlos.')
                }
                className="w-full text-left p-2 rounded-lg bg-[#181818] hover:bg-[#5C0A1F]/50 border border-zinc-800 text-xs text-zinc-300 hover:text-amber-200 transition-colors cursor-pointer"
              >
                🦷 Consulta com Dr. Carlos (Implantes / Canal / Terceira Idade)
              </button>
              <button
                type="button"
                onClick={() =>
                  handleOpenWhatsApp('Olá! Gostaria de saber mais sobre o Clareamento Sense ou Lentes Emax.')
                }
                className="w-full text-left p-2 rounded-lg bg-[#181818] hover:bg-[#5C0A1F]/50 border border-zinc-800 text-xs text-zinc-300 hover:text-amber-200 transition-colors cursor-pointer"
              >
                ✨ Lentes em Emax ou Clareamento Sense (-80% sensibilidade)
              </button>
              <button
                type="button"
                onClick={() =>
                  handleOpenWhatsApp('Olá! Gostaria de agendar avaliação de Ortopedia dos Maxilares para meu filho(a) com a Dra. Andréa.')
                }
                className="w-full text-left p-2 rounded-lg bg-[#181818] hover:bg-[#5C0A1F]/50 border border-zinc-800 text-xs text-zinc-300 hover:text-amber-200 transition-colors cursor-pointer"
              >
                🧸 Ortopedia dos Maxilares para crianças (Dra. Andréa)
              </button>
            </div>

            {/* Message input */}
            <div className="pt-2 flex items-center space-x-2">
              <input
                type="text"
                placeholder="Digite sua mensagem..."
                value={quickMsg}
                onChange={(e) => setQuickMsg(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleOpenWhatsApp();
                }}
                className="flex-1 px-3 py-2 text-xs rounded-xl bg-[#181818] border border-zinc-700 text-white placeholder-zinc-500 outline-none focus:border-[#D4AF37]"
              />
              <button
                type="button"
                onClick={() => handleOpenWhatsApp()}
                className="p-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-black shadow cursor-pointer transition-colors"
                aria-label="Enviar mensagem no WhatsApp"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="relative group p-4 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-black shadow-[0_8px_30px_rgba(37,211,102,0.4)] hover:shadow-[0_8px_35px_rgba(37,211,102,0.7)] transition-all duration-300 transform hover:scale-110 active:scale-95 cursor-pointer border-2 border-white/40"
        aria-label="Abrir atendimento por WhatsApp"
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400 border border-black"></span>
        </span>
        <MessageSquare className="w-7 h-7 fill-black" />

        {/* Floating tooltip */}
        <span className="absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap bg-black/90 text-white text-xs font-semibold px-3 py-1.5 rounded-lg border border-[#D4AF37]/50 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden sm:block">
          Fale com a Recepção no WhatsApp
        </span>
      </button>
    </div>
  );
};
