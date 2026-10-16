import React from 'react';
import { Award, CheckCircle2, HeartHandshake, Building2, Globe2, Activity, Pill } from 'lucide-react';
import { CLINIC_INFO, CLINIC_PILLARS } from '../data/clinicData';

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="relative py-24 bg-[#F7F3EE] text-[#2C241E] overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C9A86C]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#6B1E2F]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#F0EBE3] border border-[#C9A86C]/30 mb-3 shadow-xs">
            <Award className="w-3.5 h-3.5 text-[#6B1E2F]" />
            <span className="text-xs font-semibold tracking-widest uppercase text-[#6B1E2F]">
              SORISOS REAIS
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#2C241E] mb-4">
            Tratamentos que <span className="text-[#6B1E2F]">transformam vidas.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#2C241E]/80 font-light max-w-2xl mx-auto">
            Unimos tecnologia, conforto e uma equipe experiente para entregar resultados naturais e duradouros.
          </p>
          <div className="w-20 h-1 bg-[#6B1E2F] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Story and Highlight Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          {/* Left Text Block */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-8 sm:p-10 rounded-2xl bg-[#F0EBE3] border border-[#C9A86C]/30 shadow-md relative">
              <div className="absolute -top-3 left-8 px-3.5 py-1 rounded-md bg-[#6B1E2F] text-white text-[11px] font-bold uppercase tracking-wider shadow-xs">
                +27 Anos de História no Bairro • Cuidado Humano
              </div>

              <p className="text-lg sm:text-xl text-[#2C241E] font-serif leading-relaxed italic border-l-4 border-[#6B1E2F] pl-4 mb-6">
                “O Dr. Carlos Eduardo Carvalho Vilela possui mais de 27 anos de experiência cuidando das famílias no mesmo bairro (Rudge Ramos). A clínica atual já soma 17 anos de tradição, somados a outros 10 anos de atuação anterior na mesma região.”
              </p>

              <div className="space-y-4 text-[#2C241E]/90 text-sm sm:text-base leading-relaxed">
                <p>
                  Localizada estrategicamente na <strong className="text-[#2C241E] font-semibold">Avenida Caminho do Mar, 2030 (próximo à Sabesp e ao Supermercado Bem Barato)</strong>, nossa clínica é familiar, pequena e acolhedora. Aqui, o paciente não é apenas um número: cada pessoa é recebida com carinho, tempo de escuta e atenção genuína.
                </p>
                <p className="text-[#2C241E] font-medium bg-white/90 p-4 rounded-xl border border-[#C9A86C]/30 shadow-xs">
                  Cerca de <strong className="text-[#6B1E2F]">80% dos pacientes do Dr. Carlos são da terceira idade</strong>. Por isso, nosso atendimento é marcado por paciência exemplar, empatia e sem pressa (ele não atende crianças). Pela qualidade e honestidade do nosso trabalho, temos a honra de receber pacientes de São Bernardo, de todo o Grande ABC e até de fora do Brasil, vindos dos Estados Unidos, Portugal, Alemanha e outros países.
                </p>
              </div>

              {/* Protocolos Humanos de Segurança */}
              <div className="mt-8 pt-6 border-t border-[#C9A86C]/30 grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs sm:text-sm text-[#2C241E]">
                <div className="flex items-center space-x-2.5">
                  <div className="w-7 h-7 rounded-lg bg-white text-[#6B1E2F] border border-[#C9A86C]/30 flex items-center justify-center flex-shrink-0">
                    <Activity className="w-4 h-4" />
                  </div>
                  <span>Checagem de glicemia e pressão arterial antes da consulta</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <div className="w-7 h-7 rounded-lg bg-white text-[#6B1E2F] border border-[#C9A86C]/30 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span>Anestesia suave: pacientes quase não sentem a picada</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <div className="w-7 h-7 rounded-lg bg-white text-[#6B1E2F] border border-[#C9A86C]/30 flex items-center justify-center flex-shrink-0">
                    <Pill className="w-4 h-4" />
                  </div>
                  <span>Primeira medicação pós-cirurgia já entregue na clínica</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <div className="w-7 h-7 rounded-lg bg-white text-[#6B1E2F] border border-[#C9A86C]/30 flex items-center justify-center flex-shrink-0">
                    <HeartHandshake className="w-4 h-4" />
                  </div>
                  <span>Laserterapia para acelerar a cicatrização e alívio</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual / Leadership Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden p-1 bg-gradient-to-b from-[#C9A86C] to-[#F0EBE3] shadow-xl border border-[#C9A86C]">
              <div className="bg-[#1A1210] text-[#F5F0EB] rounded-2xl p-6 sm:p-8 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-xl bg-[#0F0C0A] border border-[#C9A86C]/40 flex items-center justify-center text-[#C9A86C]">
                      <Building2 className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-white text-lg">Pró Dentes</h4>
                      <p className="text-xs text-[#C9A86C] font-medium">Próx. Sabesp e Bem Barato – SBC</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#0F0C0A] text-[#C9A86C] border border-[#C9A86C]/30">
                    Clínica Familiar
                  </span>
                </div>

                <div className="rounded-xl overflow-hidden border border-[#C9A86C]/30 relative group bg-[#0F0C0A]">
                  <img
                    src={CLINIC_INFO.images.hero}
                    alt="Equipe Pró Dentes Odontologia"
                    className="w-full h-48 sm:h-56 object-cover object-center group-hover:scale-102 transition-transform duration-500 filter brightness-90"
                    loading="lazy"
                  />
                  <div className="p-3 bg-[#0F0C0A] border-t border-[#C9A86C]/20 text-center">
                    <p className="text-xs text-[#D4C9B8] font-medium">
                      Dr. Carlos Eduardo Carvalho Vilela (CRO-SP 62085) e Equipe Pro Dentes
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start space-x-3 text-xs sm:text-sm text-[#D4C9B8]">
                    <HeartHandshake className="w-5 h-5 text-[#C9A86C] flex-shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-white">Acolhimento da 3ª Idade:</strong> Paciência infinita, escuta afetuosa e respeito ao ritmo de cada paciente.
                    </span>
                  </div>
                  <div className="flex items-start space-x-3 text-xs sm:text-sm text-[#D4C9B8]">
                    <Globe2 className="w-5 h-5 text-[#C9A86C] flex-shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-white">Confiança sem Fronteiras:</strong> Atendemos brasileiros residentes nos EUA, Portugal, Alemanha e outros países.
                    </span>
                  </div>
                </div>

                <a
                  href="#contato"
                  className="w-full block text-center py-3.5 rounded-xl btn-gold-primary text-xs uppercase tracking-wider font-bold transition-all duration-200"
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
              className="p-6 rounded-2xl bg-[#F0EBE3] border border-[#C9A86C]/30 hover:border-[#6B1E2F] transition-all duration-300 hover:-translate-y-1 group shadow-xs hover:shadow-md"
            >
              <div className="text-2xl sm:text-3xl font-serif font-bold text-[#6B1E2F] mb-1 group-hover:scale-105 transition-transform">
                {pillar.stat}
              </div>
              <h3 className="text-base font-serif font-bold text-[#2C241E] mb-2">
                {pillar.title}
              </h3>
              <p className="text-xs text-[#2C241E]/80 leading-relaxed font-light">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
