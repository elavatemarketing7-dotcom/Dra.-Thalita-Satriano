import React, { useState, useEffect, useRef } from 'react';
import { RESULTS_GALLERY, GREEN_FEEDBACKS, PATIENT_COMMENTS } from '../data';
import { Sparkles, Maximize2, X, Heart, MessageSquareQuote } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const ResultsGallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'results' | 'green' | 'comments'>('results');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  const activeItems = 
    activeTab === 'results' ? RESULTS_GALLERY :
    activeTab === 'green' ? GREEN_FEEDBACKS : PATIENT_COMMENTS;

  // Reset slider position when switching tabs
  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  }, [activeTab]);

  // Auto slide interval
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      if (sliderRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 20) {
          sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          const cardWidth = sliderRef.current.firstElementChild?.clientWidth || 320;
          sliderRef.current.scrollBy({ left: cardWidth + 20, behavior: 'smooth' });
        }
      }
    }, 3200);
    return () => clearInterval(interval);
  }, [isHovered, activeTab]);

  // Render only populated URLs or display placeholder slot notice if URL is empty
  const filledCount = activeItems.filter(i => i.url.trim() !== "").length;

  return (
    <section id="prova-visual" className="py-20 lg:py-32 bg-[#0F1113] text-white border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-[#C5A368] font-bold">
            <Sparkles className="w-4 h-4" />
            <span>Prova Visual & Amor</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Transformações Reais, <span className="italic text-[#C5A368] font-normal">Naturalidade Absoluta</span>
          </h2>
          <p className="text-xs sm:text-sm text-gray-400">
            Explore nossa galeria de resultados clínicos, mensagens de gratidão de pacientes (💚) e comentários carinhosos em nossas redes.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => setActiveTab('results')}
            className={`px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all cursor-pointer flex items-center space-x-2 ${
              activeTab === 'results'
                ? 'bg-[#C5A368] text-black shadow-lg shadow-[#C5A368]/20'
                : 'bg-[#1A1C1E] text-gray-400 hover:text-white border border-white/5'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Antes & Depois ({RESULTS_GALLERY.filter(i => i.url && i.url.trim() !== "").length})</span>
          </button>

          <button
            id="provas-emocionais"
            onClick={() => setActiveTab('green')}
            className={`px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all cursor-pointer flex items-center space-x-2 ${
              activeTab === 'green'
                ? 'bg-[#C5A368] text-black shadow-lg shadow-[#C5A368]/20'
                : 'bg-[#1A1C1E] text-gray-400 hover:text-white border border-white/5'
            }`}
          >
            <Heart className="w-3.5 h-3.5 fill-current" />
            <span>Harmonização de 💚 ({GREEN_FEEDBACKS.filter(i => i.url && i.url.trim() !== "").length})</span>
          </button>

          <button
            onClick={() => setActiveTab('comments')}
            className={`px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all cursor-pointer flex items-center space-x-2 ${
              activeTab === 'comments'
                ? 'bg-[#C5A368] text-black shadow-lg shadow-[#C5A368]/20'
                : 'bg-[#1A1C1E] text-gray-400 hover:text-white border border-white/5'
            }`}
          >
            <MessageSquareQuote className="w-3.5 h-3.5" />
            <span>Comentários ({PATIENT_COMMENTS.filter(i => i.url && i.url.trim() !== "").length})</span>
          </button>
        </div>

        {/* Horizontal Slider (Deslizando de lado) */}
        <div 
          className="relative group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={() => setIsHovered(true)}
          onTouchEnd={() => setIsHovered(false)}
        >
          <motion.div 
            ref={sliderRef}
            layout
            className="flex overflow-x-auto snap-x snap-mandatory gap-4 sm:gap-7 pb-6 pt-2 px-2 scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {activeItems.filter(item => item.url && item.url.trim() !== "").map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                key={`${activeTab}-${item.id}`}
                className={`group/card relative rounded-3xl overflow-hidden border border-white/10 bg-[#121416] cursor-pointer shadow-2xl ${
                  activeTab === 'comments' 
                    ? 'w-[68vw] max-w-[280px] sm:max-w-none sm:w-[300px] md:w-[330px]' 
                    : 'w-[78vw] max-w-[310px] sm:max-w-none sm:w-[320px] md:w-[360px] lg:w-[380px]'
                } aspect-square snap-center shrink-0 flex items-center justify-center transition-transform duration-300 hover:-translate-y-1.5 hover:border-[#C5A368]/60`}
                onClick={() => setSelectedImage(item.url)}
              >
                <img
                  src={item.url}
                  alt={item.title || "Resultado Dra. Thalita"}
                  className="w-full h-full object-contain bg-[#121416] p-1 transition-transform duration-500 group-hover/card:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity flex flex-col justify-end p-6">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold tracking-wide text-white truncate pr-2">{item.title}</span>
                    <div className="w-8 h-8 rounded-full bg-[#C5A368] flex items-center justify-center text-black shrink-0">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Notice required */}
        <div className="pt-6 text-center">
          <p className="text-[11px] tracking-wider text-gray-500 uppercase font-medium">
            * Resultados clínicos reais e espontâneos. Os resultados podem variar de pessoa para pessoa conforme a resposta biológica individual.
          </p>
        </div>

      </div>

      {/* Lightbox Simple */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 sm:p-8 backdrop-blur-xl"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={selectedImage}
              alt="Ampliado"
              className="max-w-full max-h-[90vh] rounded-2xl object-contain shadow-2xl border border-white/15"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
