import React from 'react';
import { UserCheck, Calendar, CheckCircle2 } from 'lucide-react';
import { SPECIALISTS } from '../data/clinicData';
import { Specialist } from '../types';

interface SpecialistsSectionProps {
  onSelectSpecialistForBooking: (doctorName: string) => void;
}

export const SpecialistsSection: React.FC<SpecialistsSectionProps> = ({
  onSelectSpecialistForBooking,
}) => {
  return (
    <section id="equipe" className="relative py-24 bg-[#0F0C0A] text-[#F5F0EB] overflow-hidden">
      {/* Decorative lighting */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#C9A86C]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#6B1E2F]/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#1A1210] border border-[#C9A86C]/30 mb-3 shadow-xs">
            <UserCheck className="w-3.5 h-3.5 text-[#C9A86C]" />
            <span className="text-xs font-semibold tracking-widest uppercase text-[#C9A86C]">
              NOSSA EQUIPE
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white mb-4">
            Profissionais que <span className="text-[#C9A86C]">fazem a diferença.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#D4C9B8] font-light max-w-2xl mx-auto">
            Uma equipe qualificada, apaixonada pelo que faz e comprometida com a sua saúde bucal e bem-estar.
          </p>
          <div className="w-20 h-1 bg-[#C9A86C] mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Featured Card for Technical Director / Dr. Carlos Eduardo Carvalho Vilela */}
        {SPECIALISTS.filter((s) => s.isDirector).map((director: Specialist) => (
          <div
            key={director.id}
            className="mb-14 rounded-3xl p-1 bg-gradient-to-r from-[#C9A86C] via-[#6B1E2F] to-[#C9A86C] shadow-2xl border border-[#C9A86C]/40"
          >
            <div className="rounded-[22px] bg-[#1A1210] p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Photo */}
              <div className="lg:col-span-5 relative group overflow-hidden rounded-2xl border border-[#C9A86C]/30 shadow-md bg-[#0F0C0A] flex flex-col justify-center">
                <div className="relative w-full aspect-[16/10] sm:aspect-[16/10] lg:aspect-[16/11] overflow-hidden bg-[#0F0C0A] flex items-center justify-center p-1">
                  <img
                    src={director.image}
                    alt={director.name}
                    className="w-full h-full object-contain group-hover:scale-102 transition-transform duration-500 filter brightness-95"
                    loading="lazy"
                  />
                </div>
                <div className="p-3 bg-[#0F0C0A] border-t border-[#C9A86C]/20 text-center">
                  <span className="text-[11px] sm:text-xs text-[#D4C9B8] font-semibold uppercase tracking-wider">
                    Equipe Pro Dentes • Dr. Carlos Eduardo Carvalho Vilela
                  </span>
                </div>
              </div>

              {/* Bio & Details */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#0F0C0A] text-[#C9A86C] border border-[#C9A86C]/30 uppercase tracking-wider">
                    {director.role}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#0F0C0A] text-[#D4C9B8] border border-[#C9A86C]/20">
                    {director.cro}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#0F0C0A] text-[#C9A86C] border border-[#C9A86C]/30">
                    +27 Anos de Experiência no Bairro
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                  {director.name}
                </h3>

                <p className="text-sm font-semibold text-[#C9A86C] uppercase tracking-wider">
                  {director.specialty}
                </p>

                <p className="text-sm sm:text-base text-[#D4C9B8] font-light leading-relaxed">
                  {director.bio}
                </p>

                {/* Evaluation Info Box */}
                <div className="mt-6 p-6 bg-[#0F0C0A] border border-[#C9A86C]/30 rounded-xl">
                  <h4 className="text-lg font-serif font-bold text-[#6B1E2F] mb-3">
                    Como funciona a avaliação clínica com o Dr. Carlos Vilela?
                  </h4>
                  <p className="text-sm text-[#D4C9B8] font-light leading-relaxed">
                    A consulta inicial é minuciosa e sem pressa. O Dr. Carlos realiza uma anamnese detalhada, escuta as queixas e expectativas do paciente, analisa exames radiográficos e tomográficos tridimensionais e elabora um planejamento cirúrgico e protético individualizado, explicando detalhadamente cada etapa.
                  </p>
                </div>

                {/* Qualifications */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                  {director.qualifications.map((q, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-xs sm:text-sm text-[#D4C9B8]">
                      <CheckCircle2 className="w-4 h-4 text-[#C9A86C] flex-shrink-0" />
                      <span>{q}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex flex-wrap gap-4">
                  <button
                    type="button"
                    onClick={() => onSelectSpecialistForBooking(director.name)}
                    className="inline-flex items-center space-x-2 px-6 py-3 rounded-full text-xs uppercase tracking-wider font-bold btn-gold-primary transition-all cursor-pointer"
                  >
                    <Calendar className="w-4 h-4 text-[#C9A86C]" />
                    <span>Agendar com {director.name.split(' ')[0]} {director.name.split(' ')[1]}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* 4 Other Specialists Cards in Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SPECIALISTS.filter((s) => !s.isDirector).map((specialist) => (
            <div
              key={specialist.id}
              className="group rounded-2xl bg-[#1A1210] border border-[#C9A86C]/25 hover:border-[#C9A86C] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl flex flex-col justify-between overflow-hidden shadow-md"
            >
              <div>
                {/* Photo */}
                <div className="aspect-[4/4] overflow-hidden bg-[#0F0C0A] relative">
                  <img
                    src={specialist.image}
                    alt={`${specialist.name} - ${specialist.specialty}`}
                    className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-500 filter brightness-95"
                    loading="lazy"
                  />
                  <div className="absolute top-3 right-3">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#1A1210]/95 text-[#C9A86C] border border-[#C9A86C]/40 shadow-xs">
                      {specialist.cro}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-5 space-y-2.5">
                  <span className="text-[11px] font-bold text-[#C9A86C] uppercase tracking-wider block">
                    {specialist.specialty}
                  </span>

                  <h3 className="text-lg font-serif font-bold text-white group-hover:text-[#C9A86C] transition-colors">
                    {specialist.name}
                  </h3>

                  <p className="text-xs text-[#D4C9B8] font-light leading-relaxed line-clamp-4">
                    {specialist.bio}
                  </p>

                  {/* Bullet Highlights */}
                  <div className="pt-2 space-y-1.5 border-t border-[#C9A86C]/20">
                    {specialist.qualifications.slice(0, 3).map((q, qIdx) => (
                      <div key={qIdx} className="flex items-center space-x-1.5 text-[11px] text-[#D4C9B8]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A86C] flex-shrink-0" />
                        <span className="truncate">{q}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card CTA */}
              <div className="p-5 pt-0">
                <button
                  type="button"
                  onClick={() => onSelectSpecialistForBooking(specialist.name)}
                  className="w-full py-2.5 rounded-xl border border-[#C9A86C] text-[#C9A86C] hover:bg-[#C9A86C] hover:text-[#0F0C0A] transition-all text-xs font-bold uppercase tracking-wider flex items-center justify-center space-x-1.5 cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Agendar Consulta</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
