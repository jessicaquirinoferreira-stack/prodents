import React from 'react';
import { MessageSquare, Star, CheckCircle, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/clinicData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="depoimentos" className="relative py-24 bg-[#1A1210] text-[#F5F0EB] overflow-hidden">
      {/* Decorative ambient lighting */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#C9A86C]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#0F0C0A] border border-[#C9A86C]/30 mb-3 shadow-xs">
            <MessageSquare className="w-3.5 h-3.5 text-[#C9A86C]" />
            <span className="text-xs font-semibold tracking-widest uppercase text-[#C9A86C]">
              Depoimentos & Histórias Reais
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white mb-4">
            O que nossos <span className="text-[#C9A86C]">Pacientes</span> dizem
          </h2>
          <p className="text-base sm:text-lg text-[#D4C9B8] font-light max-w-2xl mx-auto">
            Carinho, honestidade e respeito à terceira idade. Veja o relato de quem confia na nossa equipe há anos.
          </p>
          <div className="w-20 h-1 bg-[#C9A86C] mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Google Rating Badge Banner */}
        <div className="max-w-md mx-auto mb-12 p-4 rounded-2xl bg-[#0F0C0A] border border-[#C9A86C]/30 flex items-center justify-between shadow-md">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-[#1A1210] flex items-center justify-center font-bold text-[#C9A86C] text-lg shadow-sm border border-[#C9A86C]/40">
              G
            </div>
            <div>
              <div className="text-sm font-bold text-white">Avaliações Verificadas Google</div>
              <div className="flex text-[#C9A86C] items-center space-x-0.5 mt-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#C9A86C]" />
                ))}
                <span className="text-xs text-[#D4C9B8] font-bold ml-1.5">4.9 / 5.0</span>
              </div>
            </div>
          </div>
          <span className="inline-flex items-center space-x-1 text-xs text-[#C9A86C] font-semibold bg-[#1A1210] px-3 py-1 rounded-full border border-[#C9A86C]/30">
            <CheckCircle className="w-3 h-3 text-[#C9A86C]" />
            <span>100% Genuíno</span>
          </span>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="relative p-8 rounded-2xl bg-[#0F0C0A] border border-[#C9A86C]/25 hover:border-[#C9A86C] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl flex flex-col justify-between group shadow-md"
            >
              <Quote className="w-10 h-10 text-[#C9A86C]/30 group-hover:text-[#C9A86C] transition-colors mb-4" />

              <div className="space-y-4 mb-6">
                <div className="flex text-[#C9A86C]">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C9A86C]" />
                  ))}
                </div>

                <p className="text-sm sm:text-base text-[#D4C9B8] font-light leading-relaxed italic">
                  “{item.comment}”
                </p>
              </div>

              <div className="pt-4 border-t border-[#C9A86C]/20 flex items-center justify-between">
                <div>
                  <h4 className="font-serif font-bold text-white text-sm">
                    {item.name}
                  </h4>
                  <p className="text-xs text-[#C9A86C] font-medium">
                    {item.role}
                  </p>
                </div>
                <span className="text-[11px] text-[#D4C9B8] bg-[#1A1210] px-2.5 py-1 rounded border border-[#C9A86C]/20">
                  {item.treatment}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
