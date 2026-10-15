import React from 'react';
import { Scan, ShieldCheck, Microscope, Sparkles, Activity, CheckCircle } from 'lucide-react';

export const TechnologySection: React.FC = () => {
  const techItems = [
    {
      icon: <Scan className="w-6 h-6 text-[#D4AF37]" />,
      title: 'Escaneamento Intraoral 3D',
      description:
        'Substitui as antigas moldagens com massa desconfortável por uma câmera tridimensional rápida, precisa e altamente confortável.',
    },
    {
      icon: <Microscope className="w-6 h-6 text-[#D4AF37]" />,
      title: 'Magnificação & Microscopia',
      description:
        'Visão ampliada em até 20 vezes para tratamentos endodônticos e microcirurgias estéticas com precisão inigualável.',
    },
    {
      icon: <Activity className="w-6 h-6 text-[#D4AF37]" />,
      title: 'Tomografia Computadorizada Digital',
      description:
        'Imagens ósseas milimétricas em alta definição com baixíssima emissão de radiação, essenciais para o planejamento de implantes.',
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#D4AF37]" />,
      title: 'Biossegurança Nível Hospitalar',
      description:
        'Autoclaves digitais de barreira, rastreabilidade completa de instrumentais e rigor absoluto no controle de infecções.',
    },
  ];

  return (
    <section id="estrutura" className="relative py-24 bg-[#080808] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading & Concept */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#1A1A1A] border border-[#D4AF37]/40">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="text-xs font-semibold tracking-widest uppercase text-amber-200">
                Infraestrutura Contemporânea
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white leading-tight">
              Tecnologia de ponta a favor do seu <span className="gold-gradient-text">conforto e segurança</span>
            </h2>

            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
              Na Pró Dentes Odontologia, cada investimento tecnológico tem um propósito claro: eliminar o medo, encurtar o tempo de tratamento e assegurar resultados cirúrgicos e protéticos com previsibilidade matemática.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center space-x-3 text-sm text-zinc-200">
                <CheckCircle className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                <span>Salas clínicas climatizadas com privacidade acústica</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-zinc-200">
                <CheckCircle className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                <span>Anestesia computadorizada indolor e sedação consciente</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-zinc-200">
                <CheckCircle className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                <span>Localização nobre no Rudge Ramos com fácil acessibilidade</span>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Tech Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {techItems.map((tech, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-gradient-to-br from-[#141414] to-[#0F0F0F] border border-[#D4AF37]/25 hover:border-[#D4AF37] transition-all duration-300 hover:-translate-y-1 group shadow-lg"
              >
                <div className="w-12 h-12 rounded-xl bg-[#5C0A1F]/70 border border-[#D4AF37]/40 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  {tech.icon}
                </div>
                <h3 className="text-base sm:text-lg font-serif font-bold text-white mb-2 group-hover:text-amber-200 transition-colors">
                  {tech.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {tech.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
