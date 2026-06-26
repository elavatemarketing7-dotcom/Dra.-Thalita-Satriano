/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { QuizModal } from './components/QuizModal';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { ResultsGallery } from './components/ResultsGallery';
import { TrustAndSteps } from './components/TrustAndSteps';
import { FooterAndFinalCta } from './components/FooterAndFinalCta';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from './data';

export default function App() {
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  // Auto open Quiz after 1.5 seconds to engage visitor before site
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsQuizOpen(true);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#0F1113] text-white flex flex-col selection:bg-[#C5A368] selection:text-black">
      {/* Top sticky navigation with scrolling ticker */}
      <Navbar onOpenQuiz={() => setIsQuizOpen(true)} />

      {/* Main landing page content */}
      <main className="flex-grow">
        <Hero />
        <About />
        <ResultsGallery />
        <TrustAndSteps />
        <FooterAndFinalCta />
      </main>

      {/* Floating WhatsApp Button for Instant Mobile Tap */}
      <div className="fixed bottom-4 right-4 z-30 lg:hidden">
        <a
          href={getWhatsAppLink("Olá Dra. Thalita! Quero agendar minha consulta gratuita.")}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-transform border-2 border-white/20"
          aria-label="Chamar no WhatsApp"
        >
          <MessageCircle className="w-8 h-8 fill-current" />
        </a>
      </div>

      {/* Interactive Quiz Modal Overlay */}
      <QuizModal
        isOpen={isQuizOpen}
        onClose={() => setIsQuizOpen(false)}
      />
    </div>
  );
}
