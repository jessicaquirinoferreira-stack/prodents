import React from 'react';
import { Star, Quote, CheckCircle, MessageSquare } from 'lucide-react';
import { TESTIMONIALS } from '../data/clinicData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="depoimentos" className="relative py-24 bg-[#0D0D0D] overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#5C0A1F]/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#1A1A1A] border border-[#D4AF37]/40 mb-3">
            <MessageSquare className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-xs font-semibold tracking-widest uppercase text-amber-200">
              Experiência dos Nossos Pacientes
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white mb-4">
            Histórias Reais de <span className="gold-gradient-text">Sorrisos Transformados</span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 font-light max-w-2xl mx-auto">
            A satisfação e a recuperação da autoestima de quem confia na dedicação da nossa equipe.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-6"></div>
        </div>

        {/* Google Reviews Trust Bar */}
        <div className="max-w-md mx-auto mb-12 p-4 rounded-2xl bg-[#141414] border border-[#D4AF37]/30 flex items-center justify-between shadow-xl">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center font-bold text-[#4285F4] text-lg shadow">
              G
            </div>
            <div>
              <div className="flex items-center space-x-1">
                <span className="font-bold text-white text-base">4.9</span>
                <div className="flex text-[#D4AF37]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D4AF37]" />
                  ))}
                </div>
              </div>
              <div className="text-[11px] text-zinc-400">Classificação no Google Avaliações</div>
            </div>
          </div>
          <div className="text-right">
            <span className="inline-flex items-center space-x-1 text-xs text-emerald-400 font-semibold bg-emerald-950/60 px-2.5 py-1 rounded-full border border-emerald-500/30">
              <CheckCircle className="w-3 h-3" />
              <span>Verificados</span>
            </span>
          </div>
        </div>

        {/* 3 Realistic Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="relative p-8 rounded-2xl bg-gradient-to-b from-[#161616] via-[#121212] to-[#0D0D0D] border border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(201,162,39,0.2)] flex flex-col justify-between group"
            >
              <Quote className="w-10 h-10 text-[#D4AF37]/20 group-hover:text-[#D4AF37]/40 transition-colors mb-4" />

              <div className="space-y-4 mb-6">
                <div className="flex text-[#D4AF37]">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D4AF37]" />
                  ))}
                </div>

                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed italic">
                  "{testimonial.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-800 flex items-center justify-between">
                <div>
                  <h4 className="font-serif font-bold text-white text-base">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-[#D4AF37] font-medium">
                    {testimonial.treatment}
                  </p>
                  <p className="text-[11px] text-zinc-400">{testimonial.role}</p>
                </div>
                <span className="text-[11px] text-zinc-400 bg-zinc-900 px-2 py-1 rounded">
                  {testimonial.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
