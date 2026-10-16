import React, { useState, useEffect, useCallback } from 'react';
import {
  Camera,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Layers,
  CalendarCheck,
  CheckCircle2,
} from 'lucide-react';
import { GALLERY_ITEMS } from '../data/clinicData';
import { GalleryItem, GalleryCategory } from '../types';

interface SmartGalleryProps {
  onOpenBooking: () => void;
}

export const SmartGallery: React.FC<SmartGalleryProps> = ({ onOpenBooking }) => {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('todos');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState<number>(9);

  const categories: { id: GalleryCategory; label: string }[] = [
    { id: 'todos', label: 'Todos os Ambientes' },
    { id: 'consultorios', label: 'Consultórios' },
    { id: 'recepcao', label: 'Recepção & Espera' },
    { id: 'cirurgia', label: 'Salas Cirúrgicas & Biossegurança' },
    { id: 'conforto', label: 'Espaço Zen & Conforto' },
  ];

  const filteredItems =
    activeCategory === 'todos'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const displayedItems = filteredItems.slice(0, visibleCount);

  const openLightbox = (id: string) => {
    const index = filteredItems.findIndex((item) => item.id === id);
    if (index !== -1) {
      setLightboxIndex(index);
    }
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => ((prev! + 1) % filteredItems.length));
    }
  }, [lightboxIndex, filteredItems.length]);

  const prevImage = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! - 1 + filteredItems.length) % filteredItems.length);
    }
  }, [lightboxIndex, filteredItems.length]);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, nextImage, prevImage]);

  const activeLightboxItem: GalleryItem | null =
    lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <section id="galeria" className="relative py-24 bg-[#0a0a0a] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#5C0A1F]/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#1A1A1A] border border-[#D4AF37]/40 mb-3 shadow">
            <Camera className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-xs font-semibold tracking-widest uppercase text-amber-200">
              Conheça Nossa Estrutura Familiar
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white mb-4">
            Galeria do <span className="gold-gradient-text">Nosso Consultório</span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 font-light max-w-2xl mx-auto">
            Ambiente acolhedor, familiar e climatizado no Rudge Ramos. Cada cantinho foi pensado para proporcionar tranquilidade, privacidade e bem-estar.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-6"></div>
        </div>

        {/* Smart Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => {
            const count =
              cat.id === 'todos'
                ? GALLERY_ITEMS.length
                : GALLERY_ITEMS.filter((i) => i.category === cat.id).length;

            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => {
                  setActiveCategory(cat.id);
                  setVisibleCount(9);
                }}
                className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-[#D4AF37] via-[#C9A227] to-[#B8860B] text-black shadow-lg shadow-[#D4AF37]/25 font-bold scale-105'
                    : 'bg-[#151515] text-zinc-300 hover:text-white hover:bg-[#202020] border border-zinc-800'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isActive ? 'bg-black/30 text-black font-extrabold' : 'bg-[#252525] text-zinc-400'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Images Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {displayedItems.map((item) => (
            <div
              key={item.id}
              onClick={() => openLightbox(item.id)}
              className="group relative rounded-2xl overflow-hidden bg-[#141414] border border-[#D4AF37]/25 hover:border-[#D4AF37] transition-all duration-500 shadow-xl cursor-pointer hover:-translate-y-1.5 hover:shadow-[0_15px_30px_rgba(212,175,55,0.2)] flex flex-col"
            >
              {/* Photo Area */}
              <div className="relative aspect-[16/10] overflow-hidden bg-black/60">
                <img
                  src={item.url}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                />

                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300"></div>

                {/* Top Floating Tag */}
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase bg-black/70 backdrop-blur-md text-amber-300 border border-[#D4AF37]/40 shadow">
                    <Sparkles className="w-2.5 h-2.5 text-[#D4AF37]" />
                    <span>{item.tag}</span>
                  </span>
                </div>

                {/* Top Right Maximize Icon */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="p-2 rounded-full bg-[#5C0A1F]/90 text-amber-200 border border-[#D4AF37]/50 shadow-md flex items-center justify-center transform group-hover:scale-110 transition-transform">
                    <Maximize2 className="w-4 h-4" />
                  </span>
                </div>

                {/* Bottom Overlay Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#D4AF37] block mb-1">
                    {item.categoryLabel}
                  </span>
                  <h3 className="text-base font-serif font-bold text-white group-hover:text-amber-200 transition-colors line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-zinc-300 line-clamp-2 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button if filtered items exceed visible count */}
        {filteredItems.length > visibleCount && (
          <div className="mt-12 text-center">
            <button
              type="button"
              onClick={() => setVisibleCount((prev) => prev + 9)}
              className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#181818] hover:bg-[#252525] text-amber-200 hover:text-white border border-[#D4AF37]/40 hover:border-[#D4AF37] transition-all duration-300 shadow-lg cursor-pointer"
            >
              <Layers className="w-4 h-4 text-[#D4AF37]" />
              <span>Ver mais fotos da clínica ({filteredItems.length - visibleCount} restantes)</span>
            </button>
          </div>
        )}

        {/* Banner with Consultation Booking Callout */}
        <div className="mt-16 rounded-2xl p-6 sm:p-8 bg-gradient-to-r from-[#171717] via-[#2A0610] to-[#171717] border border-[#D4AF37]/35 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-xl font-serif font-bold text-white">
              Gostaria de conhecer nossa clínica pessoalmente?
            </h4>
            <p className="text-xs sm:text-sm text-zinc-300">
              Estamos prontos para recebê-lo com um café especial no Rudge Ramos. Agende sua avaliação presencial.
            </p>
          </div>
          <button
            type="button"
            onClick={onOpenBooking}
            className="px-6 py-3 rounded-full text-xs uppercase tracking-widest font-bold bg-[#D4AF37] hover:bg-white text-black transition-all shadow-lg flex-shrink-0 cursor-pointer flex items-center space-x-2"
          >
            <CalendarCheck className="w-4 h-4" />
            <span>Agendar sua Visita</span>
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeLightboxItem && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/92 backdrop-blur-lg animate-in fade-in duration-200"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2.5 rounded-full bg-black/60 hover:bg-[#5C0A1F] text-zinc-300 hover:text-white border border-[#D4AF37]/40 transition-colors z-20 cursor-pointer"
            aria-label="Fechar galeria"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-[#5C0A1F] text-zinc-300 hover:text-white border border-[#D4AF37]/40 transition-colors z-20 cursor-pointer"
            aria-label="Foto anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-[#5C0A1F] text-zinc-300 hover:text-white border border-[#D4AF37]/40 transition-colors z-20 cursor-pointer"
            aria-label="Próxima foto"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Content Container */}
          <div
            className="relative max-w-5xl w-full max-h-[92vh] flex flex-col rounded-2xl overflow-hidden bg-[#121212] border border-[#D4AF37]/50 shadow-2xl animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image Full Box */}
            <div className="relative w-full max-h-[68vh] bg-black flex items-center justify-center overflow-hidden">
              <img
                src={activeLightboxItem.url}
                alt={activeLightboxItem.title}
                className="max-h-[68vh] w-auto max-w-full object-contain mx-auto"
              />
            </div>

            {/* Image Info & Action Footer */}
            <div className="p-4 sm:p-6 bg-gradient-to-r from-[#141414] via-[#101010] to-[#141414] border-t border-zinc-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1 max-w-xl">
                <div className="flex items-center space-x-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#D4AF37]">
                    {activeLightboxItem.categoryLabel}
                  </span>
                  <span className="text-zinc-500">•</span>
                  <span className="text-xs text-zinc-400">
                    Foto {(lightboxIndex ?? 0) + 1} de {filteredItems.length}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-serif font-bold text-white">
                  {activeLightboxItem.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300">
                  {activeLightboxItem.description}
                </p>
              </div>

              <div className="flex items-center space-x-3 w-full sm:w-auto justify-end">
                <button
                  type="button"
                  onClick={() => {
                    closeLightbox();
                    onOpenBooking();
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-2.5 rounded-full text-xs uppercase font-bold tracking-wider bg-gradient-to-r from-[#D4AF37] to-[#B8860B] hover:from-[#5C0A1F] hover:to-[#8B0000] text-black hover:text-white border border-[#D4AF37] transition-all cursor-pointer shadow-lg"
                >
                  <CalendarCheck className="w-4 h-4" />
                  <span>Agendar Consulta</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
