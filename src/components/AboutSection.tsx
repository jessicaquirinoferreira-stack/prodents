import React from 'react';
import { Award, Shield, CheckCircle2, HeartHandshake, Building2, Globe2, Activity, Pill } from 'lucide-react';
import { CLINIC_INFO, CLINIC_PILLARS } from '../data/clinicData';

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="relative py-24 bg-[#0D0D0D] overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#5C0A1F]/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#1A1A1A] border border-[#D4AF37]/40 mb-3">
            <Award className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-xs font-semibold tracking-widest uppercase text-amber-200">
              Nossa História & Propósito Familiar
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white mb-4">
            Sobre a <span className="gold-gradient-text">Pró Dentes Odontologia</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 font-light max-w-2xl mx-auto">
            Uma clínica familiar, acolhedora e dedicada ao cuidado humano e individualizado de cada paciente.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-4"></div>
        </div>

        {/* Story and Highlight Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          {/* Left Text Block */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-[#141414] via-[#121212] to-[#1A1A1A] border border-[#D4AF37]/30 shadow-2xl relative">
              <div className="absolute -top-3 left-8 px-4 py-1 rounded bg-[#5C0A1F] border border-[#D4AF37]/40 text-[11px] font-bold uppercase tracking-wider text-amber-200">
                +27 Anos de História no Bairro • Cuidado Humano
              </div>

              <p className="text-lg sm:text-xl text-amber-50 font-serif leading-relaxed italic border-l-4 border-[#D4AF37] pl-4 mb-6">
                “O Dr. Carlos Eduardo Carvalho Vilela possui mais de 27 anos de experiência cuidando das famílias no mesmo bairro (Rudge Ramos). A clínica atual já soma 17 anos de tradição, somados a outros 10 anos de atuação anterior na mesma região.”
              </p>

              <div className="space-y-4 text-zinc-300 text-sm sm:text-base leading-relaxed">
                <p>
                  Localizada estrategicamente na <strong className="text-white font-semibold">Avenida Caminho do Mar, 2030 (próximo à Sabesp e ao Supermercado Bem Barato)</strong>, nossa clínica é familiar, pequena e acolhedora. Aqui, o paciente não é apenas um número: cada pessoa é recebida com carinho, tempo de escuta e atenção genuína.
                </p>
                <p className="text-amber-100/95 font-medium">
                  Cerca de <strong className="text-[#D4AF37]">80% dos pacientes do Dr. Carlos são da terceira idade</strong>. Por isso, nosso atendimento é marcado por paciência exemplar, empatia e sem pressa (ele não atende crianças). Pela qualidade e honestidade do nosso trabalho, temos a honra de receber pacientes de São Bernardo, de todo o Grande ABC e até de fora do Brasil, vindos dos Estados Unidos, Portugal, Alemanha e outros países.
                </p>
              </div>

              {/* Protocolos Humanos de Segurança */}
              <div className="mt-8 pt-6 border-t border-zinc-800 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-zinc-200">
                <div className="flex items-center space-x-2.5">
                  <Activity className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                  <span>Checagem de glicemia e pressão arterial antes da consulta</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                  <span>Anestesia suave: pacientes quase não sentem a picada</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <Pill className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                  <span>Primeira medicação pós-cirurgia já entregue na clínica</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <HeartHandshake className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                  <span>Laserterapia para acelerar a cicatrização e alívio</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual / Leadership Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden p-1 bg-gradient-to-b from-[#D4AF37]/50 via-[#5C0A1F]/40 to-[#1A1A1A] shadow-2xl">
              <div className="bg-[#121212] rounded-2xl p-6 sm:p-8 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-xl bg-[#5C0A1F] border border-[#D4AF37]/50 flex items-center justify-center">
                      <Building2 className="w-6 h-6 text-[#D4AF37]" />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-white text-lg">Pró Dentes</h4>
                      <p className="text-xs text-amber-300">Próx. Sabesp e Bem Barato – SBC</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#262626] text-amber-200 border border-[#D4AF37]/30">
                    Clínica Familiar
                  </span>
                </div>

                <div className="rounded-xl overflow-hidden border border-[#D4AF37]/20 relative group bg-black">
                  <img
                    src={CLINIC_INFO.images.hero}
                    alt="Equipe Pró Dentes Odontologia"
                    className="w-full h-48 sm:h-56 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="p-3 bg-[#161616] border-t border-[#D4AF37]/20 text-center">
                    <p className="text-xs text-zinc-300">
                      Dr. Carlos Eduardo Carvalho Vilela (CRO-SP 62085) e Equipe Pro Dentes
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start space-x-3 text-xs sm:text-sm text-zinc-300">
                    <HeartHandshake className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-white">Acolhimento da 3ª Idade:</strong> Paciência infinita, escuta afetuosa e respeito ao ritmo de cada paciente.
                    </span>
                  </div>
                  <div className="flex items-start space-x-3 text-xs sm:text-sm text-zinc-300">
                    <Globe2 className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-white">Confiança sem Fronteiras:</strong> Atendemos brasileiros residentes nos EUA, Portugal, Alemanha e outros países.
                    </span>
                  </div>
                </div>

                <a
                  href="#contato"
                  className="w-full block text-center py-3 rounded-xl bg-gradient-to-r from-[#1A1A1A] to-[#262626] hover:from-[#5C0A1F] hover:to-[#350611] text-amber-200 hover:text-white border border-[#D4AF37]/40 text-xs uppercase tracking-wider font-bold transition-all duration-300"
                >
                  Venha tomar um café conosco
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CLINIC_PILLARS.map((pillar, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-[#141414] border border-[#D4AF37]/25 hover:border-[#D4AF37] transition-all duration-300 hover:-translate-y-1 group shadow-lg"
            >
              <div className="text-2xl sm:text-3xl font-serif font-bold text-[#D4AF37] mb-1 group-hover:scale-105 transition-transform">
                {pillar.stat}
              </div>
              {pillar.statSub && (
                <div className="text-[11px] text-zinc-400 uppercase tracking-wider mb-2 font-medium">
                  {pillar.statSub}
                </div>
              )}
              <h3 className="text-lg font-serif font-bold text-white mb-2 group-hover:text-amber-200 transition-colors">
                {pillar.title}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
