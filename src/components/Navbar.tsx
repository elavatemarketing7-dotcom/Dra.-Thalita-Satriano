import React from 'react';
import { EXPERT } from '../data';
import { Sparkles, MessageCircle } from 'lucide-react';

interface NavbarProps {
  onOpenQuiz: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuiz }) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const navItems = [
    { label: "Sobre Mim", id: "sobre-mim" },
    { label: "Prova Visual", id: "prova-visual" },
    { label: "Harmonização de 💚", id: "provas-emocionais" },
    { label: "Diferenciais", id: "confianca" },
    { label: "Onde nos Encontrar", id: "localizacao" },
    { label: "Contato", id: "cta-final" },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#0F1113]/90 backdrop-blur-md border-b border-white/10 shadow-2xl">
      {/* Slow Marquee Ticker (Logradouro passando devagar) */}
      <div className="bg-[#1A1C1E] py-2.5 border-b border-white/5 overflow-hidden select-none cursor-pointer">
        <div className="animate-marquee text-[11px] md:text-xs font-semibold tracking-widest uppercase text-[#C5A368] flex items-center space-x-8 whitespace-nowrap">
          {Array.from({ length: 4 }).map((_, repeatIndex) => (
            <React.Fragment key={repeatIndex}>
              {navItems.map((item, idx) => (
                <div 
                  key={`${repeatIndex}-${idx}`}
                  onClick={() => scrollToSection(item.id)}
                  className="flex items-center space-x-3 hover:text-white transition-colors duration-200"
                >
                  <span>{item.label}</span>
                  <Sparkles className="w-3 h-3 text-[#C5A368] opacity-80" />
                </div>
              ))}
              <span className="text-gray-400 font-bold tracking-widest">• ESTÉTICA AVANÇADA COM {EXPERT.fullName.toUpperCase()} EM CAIEIRAS SP •</span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Main Header Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Brand Name */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="cursor-pointer flex items-center space-x-3.5 group"
        >
          <div className="w-10 h-10 rounded-full border border-[#C5A368] overflow-hidden p-0.5 transition-transform group-hover:scale-105">
            <img 
              src={EXPERT.heroPhoto} 
              alt={EXPERT.name} 
              className="w-full h-full rounded-full object-cover grayscale-[15%]"
            />
          </div>
          <div>
            <h1 className="font-serif-luxury italic text-lg sm:text-xl font-bold tracking-wide text-white leading-none">
              {EXPERT.name}
            </h1>
            <p className="text-[9px] tracking-[0.25em] uppercase text-[#C5A368] font-bold mt-1">
              {EXPERT.profession} • Caieiras SP
            </p>
          </div>
        </div>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center space-x-7 text-xs uppercase tracking-widest font-semibold text-gray-400">
          {navItems.slice(0, 5).map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="hover:text-[#C5A368] transition-colors py-1 cursor-pointer"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="flex items-center space-x-2">
          <button
            onClick={onOpenQuiz}
            className="group relative inline-flex items-center justify-center px-4 py-2 sm:px-6 sm:py-3 text-xs sm:text-xs uppercase tracking-widest font-bold text-black transition-all duration-300 bg-[#C5A368] rounded-full shadow-xl hover:bg-[#D4B57E] hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            <MessageCircle className="w-3.5 h-3.5 mr-2 fill-current" />
            <span>Agendar Consulta</span>
          </button>
        </div>
      </div>
    </header>
  );
};
