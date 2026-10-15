import React from 'react';
import { UserCheck, Award, Calendar, CheckCircle2 } from 'lucide-react';
import { SPECIALISTS } from '../data/clinicData';
import { Specialist } from '../types';

interface SpecialistsSectionProps {
  onSelectSpecialistForBooking: (doctorName: string) => void;
}

export const SpecialistsSection: React.FC<SpecialistsSectionProps> = ({
  onSelectSpecialistForBooking,
}) => {
  return (
    <section id="especialistas" className="relative py-24 bg-[#0D0D0D] overflow-hidden">
      {/* Decorative lighting */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#5C0A1F]/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#1A1A1A] border border-[#D4AF37]/40 mb-3">
            <UserCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-xs font-semibold tracking-widest uppercase text-amber-200">
              Corpo Clínico Multidisciplinar
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white mb-4">
            Conheça nossos <span className="gold-gradient-text">especialistas</span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 font-light max-w-2xl mx-auto">
            Dentistas altamente qualificados, pós-graduados e comprometidos com a precisão científica e o acolhimento humano.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-6"></div>
        </div>

        {/* Featured Card for Technical Director / Dr. Carlos Eduardo Carvalho Vilela */}
        {SPECIALISTS.filter((s) => s.isDirector).map((director: Specialist) => (
          <div
            key={director.id}
            className="mb-14 rounded-3xl p-1 bg-gradient-to-r from-[#D4AF37]/60 via-[#5C0A1F]/60 to-[#D4AF37]/60 shadow-[0_15px_40px_rgba(0,0,0,0.8)]"
          >
            <div className="rounded-[22px] bg-gradient-to-br from-[#161616] via-[#121212] to-[#0A0A0A] p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Photo */}
              <div className="lg:col-span-5 relative group overflow-hidden rounded-2xl border-2 border-[#D4AF37]/50 shadow-2xl">
                <div className="aspect-[4/3] sm:aspect-[4/3] lg:aspect-[4/4] overflow-hidden bg-black">
                  <img
                    src={director.image}
                    alt={director.name}
                    className="w-full h-full object-cover object-[50%_18%] group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent flex items-end p-4">
                  <span className="text-xs text-amber-200 font-semibold uppercase tracking-wider bg-black/60 px-3 py-1 rounded backdrop-blur-sm border border-[#D4AF37]/40">
                    Homem Central na Equipe Pro Dentes
                  </span>
                </div>
              </div>

              {/* Bio & Details */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#5C0A1F] text-amber-200 border border-[#D4AF37]/40 uppercase tracking-wider">
                    {director.role}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#222] text-zinc-300 border border-zinc-700">
                    {director.cro}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                  {director.name}
                </h3>

                <p className="text-sm font-semibold text-[#D4AF37] uppercase tracking-wider">
                  {director.specialty}
                </p>

                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                  {director.bio}
                </p>

                {/* Qualifications */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                  {director.qualifications.map((q, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-xs sm:text-sm text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                      <span>{q}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex flex-wrap gap-4">
                  <button
                    type="button"
                    onClick={() => onSelectSpecialistForBooking(director.name)}
                    className="inline-flex items-center space-x-2 px-6 py-3 rounded-full text-xs uppercase tracking-wider font-bold bg-gradient-to-r from-[#D4AF37] to-[#B8860B] hover:from-[#5C0A1F] hover:to-[#8B0000] text-black hover:text-white border border-[#D4AF37] shadow-lg shadow-[#D4AF37]/20 transition-all cursor-pointer"
                  >
                    <Calendar className="w-4 h-4" />
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
              className="group rounded-2xl bg-[#141414] border border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(201,162,39,0.2)] flex flex-col justify-between overflow-hidden"
            >
              <div>
                {/* Photo with golden frame and hover zoom */}
                <div className="aspect-[4/4] overflow-hidden bg-black/50 relative">
                  <img
                    src={specialist.image}
                    alt={`${specialist.name} - ${specialist.specialty}`}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 right-3">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#0D0D0D]/90 text-amber-200 border border-[#D4AF37]/50 backdrop-blur-sm">
                      {specialist.cro}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-5 space-y-2.5">
                  <span className="text-[11px] font-bold text-[#D4AF37] uppercase tracking-wider block">
                    {specialist.specialty}
                  </span>

                  <h3 className="text-lg font-serif font-bold text-white group-hover:text-amber-200 transition-colors">
                    {specialist.name}
                  </h3>

                  <p className="text-xs text-zinc-400 leading-relaxed line-clamp-4">
                    {specialist.bio}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-5 pt-0">
                <button
                  type="button"
                  onClick={() => onSelectSpecialistForBooking(specialist.name)}
                  className="w-full py-2.5 rounded-xl text-xs uppercase tracking-wider font-semibold text-amber-200 bg-[#1F1F1F] hover:bg-[#5C0A1F] hover:text-white border border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all duration-200 cursor-pointer flex items-center justify-center space-x-1.5"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
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
