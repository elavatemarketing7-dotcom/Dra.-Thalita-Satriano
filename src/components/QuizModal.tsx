import React, { useState, useEffect } from 'react';
import { EXPERT, QUIZ_QUESTIONS, getWhatsAppLink } from '../data';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ArrowRight, ShieldCheck, CheckCircle2, MessageCircle, X } from 'lucide-react';

interface QuizModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuizModal: React.FC<QuizModalProps> = ({ isOpen, onClose }) => {
  const [mode, setMode] = useState<'entry' | 'quiz' | 'analyzing' | 'result'>('entry');
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [analysisProgress, setAnalysisProgress] = useState(0);

  // Reset when re-opened
  useEffect(() => {
    if (isOpen && mode !== 'result') {
      setMode('entry');
      setCurrentStep(0);
      setAnswers([]);
      setAnalysisProgress(0);
    }
  }, [isOpen]);

  // Handle analyzing animation
  useEffect(() => {
    if (mode === 'analyzing') {
      setAnalysisProgress(0);
      const interval = setInterval(() => {
        setAnalysisProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => setMode('result'), 400);
            return 100;
          }
          return prev + 20;
        });
      }, 300);
      return () => clearInterval(interval);
    }
  }, [mode]);

  if (!isOpen) return null;

  const handleSelectOption = (optionLabel: string) => {
    const newAnswers = [...answers, optionLabel];
    setAnswers(newAnswers);

    if (currentStep < QUIZ_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setMode('analyzing');
    }
  };

  const handleSendQuizWhatsApp = () => {
    const summary = answers.map((ans, idx) => `Q${idx + 1}: ${ans}`).join('\n• ');
    const text = `Olá Dra. Thalita Satriano! Realizei a avaliação exclusiva no seu site oficial. Seguem minhas respostas:\n\n• ${summary}\n\nGostaria de saber a compatibilidade e agendar minha consulta!`;
    window.location.href = `https://wa.me/${EXPERT.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  const handleDirectWhatsApp = () => {
    window.location.href = getWhatsAppLink("Olá Dra. Thalita! Gostaria de agendar uma consulta sem compromisso pelo WhatsApp.");
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md">
      {/* Background site peek indicator / Overlay */}
      <div className="absolute top-3 right-3 sm:top-5 sm:right-5 z-10">
        <button
          onClick={onClose}
          className="flex items-center space-x-1 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 text-xs border border-white/20 transition-all cursor-pointer"
        >
          <span>Fechar</span>
          <X className="w-4 h-4" />
        </button>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.94, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 15 }}
        transition={{ duration: 0.25 }}
        className="relative w-full max-w-lg bg-[#0F1113] border border-white/10 rounded-3xl shadow-2xl overflow-hidden p-5 sm:p-7 text-white backdrop-blur-2xl"
      >
        {/* Persistent Hero Header in Quiz */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
          <div className="flex items-center space-x-3.5">
            {/* Flutuante Moldura Foto Herói */}
            <div className="relative group">
              <div className="absolute -inset-1 rounded-full bg-[#C5A368] opacity-30 blur-sm"></div>
              <div className="relative w-12 h-12 rounded-full border border-[#C5A368] overflow-hidden bg-[#1A1C1E]">
                <img 
                  src={EXPERT.heroPhoto} 
                  alt={EXPERT.name}
                  className="w-full h-full object-cover object-top grayscale-[15%]"
                />
              </div>
            </div>
            <div>
              <p className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-[#C5A368] uppercase flex items-center">
                <Sparkles className="w-3 h-3 mr-1 inline" />
                Avaliação Personalizada
              </p>
              <h2 className="font-serif-luxury italic text-base sm:text-lg font-bold text-white leading-tight">
                {EXPERT.fullName}
              </h2>
            </div>
          </div>

          <div className="hidden sm:flex items-center text-[10px] uppercase tracking-widest text-[#C5A368] font-bold bg-white/5 px-3 py-1 rounded-full border border-white/10">
            Exclusivo
          </div>
        </div>

        {/* CONTENT STATES */}
        <AnimatePresence mode="wait">
          {/* STATE 1: ENTRY CHOICE */}
          {mode === 'entry' && (
            <motion.div
              key="entry"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="space-y-5 text-center py-2"
            >
              <div className="space-y-2">
                <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-white leading-snug">
                  Como você prefere iniciar sua experiência com a Dra. Thalita?
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                  Responda 4 perguntas rápidas para descobrirmos o plano facial ideal para o seu perfil ou acesse o site oficial direto.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <button
                  onClick={() => setMode('quiz')}
                  className="w-full py-4 px-6 min-h-[52px] rounded-full bg-[#C5A368] hover:bg-[#D4B57E] text-black font-bold text-xs sm:text-sm uppercase tracking-widest shadow-xl transition-all flex items-center justify-between group cursor-pointer"
                >
                  <span className="flex items-center">
                    <Sparkles className="w-4 h-4 mr-2.5 fill-current" />
                    Fazer Quiz de Avaliação (1 min)
                  </span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={handleDirectWhatsApp}
                  className="w-full py-3.5 px-6 min-h-[48px] rounded-full bg-white/5 hover:bg-white/10 text-white font-bold text-xs uppercase tracking-widest border border-white/10 transition-all flex items-center justify-center cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Chamar direto no WhatsApp
                </button>

                <button
                  onClick={onClose}
                  className="w-full py-2.5 text-xs font-semibold uppercase tracking-widest text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  Ir direto para o site oficial
                </button>
              </div>
            </motion.div>
          )}

          {/* STATE 2: QUIZ QUESTIONS */}
          {mode === 'quiz' && (
            <motion.div
              key={`question-${currentStep}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
              className="space-y-5 py-1"
            >
              {/* Progress Bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-[#C5A368]">
                  <span>Pergunta {currentStep + 1} de {QUIZ_QUESTIONS.length}</span>
                  <span>{Math.round(((currentStep + 1) / QUIZ_QUESTIONS.length) * 100)}%</span>
                </div>
                <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-[#C5A368]"
                    initial={{ width: `${(currentStep / QUIZ_QUESTIONS.length) * 100}%` }}
                    animate={{ width: `${((currentStep + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>

              {/* Question Text */}
              <div className="space-y-1">
                <h3 className="font-serif-luxury text-lg sm:text-xl font-bold text-white leading-snug">
                  {QUIZ_QUESTIONS[currentStep].title}
                </h3>
                {QUIZ_QUESTIONS[currentStep].subtitle && (
                  <p className="text-xs text-gray-400">
                    {QUIZ_QUESTIONS[currentStep].subtitle}
                  </p>
                )}
              </div>

              {/* Options */}
              <div className="space-y-2.5">
                {QUIZ_QUESTIONS[currentStep].options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(opt.label)}
                    className="w-full text-left p-4 min-h-[52px] rounded-2xl bg-white/5 hover:bg-white/10 active:bg-white/15 border border-white/10 hover:border-[#C5A368] transition-all duration-200 flex items-center justify-between group cursor-pointer backdrop-blur-xl"
                  >
                    <span className="text-xs sm:text-sm font-medium text-slate-200 group-hover:text-white pr-2 leading-snug">
                      {opt.label}
                    </span>
                    <div className="w-6 h-6 rounded-full border border-white/20 group-hover:border-[#C5A368] group-hover:bg-[#C5A368] flex items-center justify-center shrink-0 transition-colors">
                      <ArrowRight className="w-3.5 h-3.5 text-transparent group-hover:text-black transition-colors" />
                    </div>
                  </button>
                ))}
              </div>

              {/* Additional Button to skip to site */}
              <div className="pt-2 text-center">
                <button
                  onClick={onClose}
                  className="text-xs uppercase tracking-widest font-semibold text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  Ir para o site oficial direto
                </button>
              </div>
            </motion.div>
          )}

          {/* STATE 3: ANALYZING (PROMPT EXTRA #1) */}
          {mode === 'analyzing' && (
            <motion.div
              key="analyzing"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="py-10 text-center space-y-6"
            >
              <div className="relative w-20 h-20 mx-auto flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border-2 border-white/10"></div>
                <div className="absolute inset-0 rounded-full border-2 border-[#C5A368] border-t-transparent animate-spin"></div>
                <Sparkles className="w-7 h-7 text-[#C5A368] animate-pulse" />
              </div>

              <div className="space-y-2">
                <h3 className="font-serif-luxury italic text-3xl font-bold tracking-wide text-white animate-pulse">
                  Analisando
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 max-w-xs mx-auto leading-relaxed">
                  Cruzando suas respostas com os protocolos de harmonia autêntica da Dra. Thalita...
                </p>
              </div>

              <div className="max-w-xs mx-auto space-y-2">
                <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-[#C5A368]"
                    style={{ width: `${analysisProgress}%` }}
                  />
                </div>
                <span className="text-[10px] uppercase tracking-widest font-mono text-[#C5A368] block">{analysisProgress}% Concluído</span>
              </div>
            </motion.div>
          )}

          {/* STATE 4: RESULT PAGE */}
          {mode === 'result' && (
            <motion.div
              key="result"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4 py-1 text-center"
            >
              {/* Highlight Top Text */}
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-[#C5A368]/60 text-white">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A368]" />
                <span className="text-[11px] sm:text-xs font-bold tracking-widest uppercase text-[#C5A368]">
                  Perfil Compatível. Você é a Paciente ideal.
                </span>
              </div>

              {/* Photo Hero (Enquadramento do peito para cima, fundo chamativo/sofisticado) */}
              <div className="relative w-32 h-32 sm:w-36 sm:h-36 mx-auto rounded-full p-1 border border-[#C5A368] shadow-2xl">
                <div className="w-full h-full rounded-full overflow-hidden bg-[#1A1C1E]">
                  <img 
                    src={EXPERT.heroPhoto} 
                    alt={EXPERT.name}
                    className="w-full h-full object-cover object-top grayscale-[15%]"
                  />
                </div>
                <div className="absolute -bottom-2 inset-x-0 flex justify-center">
                  <span className="bg-[#0F1113] border border-[#C5A368] text-[#C5A368] text-[8px] font-extrabold tracking-[0.25em] uppercase px-3 py-0.5 rounded-full shadow">
                    MÉTODO EXCLUSIVO
                  </span>
                </div>
              </div>

              {/* Exact Phrase Required */}
              <p className="text-xs sm:text-sm font-medium text-gray-200 leading-relaxed px-2 pt-2">
                “Com base nas suas respostas, o <span className="text-[#C5A368] font-bold">Método da {EXPERT.fullName}</span> consegue entregar exatamente a naturalidade e segurança que você procura.”
              </p>

              {/* 3 Large Contrast Buttons */}
              <div className="space-y-2.5 pt-2">
                {/* Botão 1 */}
                <button
                  onClick={handleSendQuizWhatsApp}
                  className="w-full py-4 px-4 min-h-[54px] rounded-full bg-[#C5A368] hover:bg-[#D4B57E] text-black font-extrabold text-xs sm:text-xs uppercase tracking-widest shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center space-x-2 cursor-pointer animate-pulse group"
                >
                  <MessageCircle className="w-4 h-4 fill-current shrink-0" />
                  <span className="text-center">
                    1- Enviar minha avaliação a DRA
                  </span>
                </button>

                {/* Botão 2 */}
                <button
                  onClick={handleDirectWhatsApp}
                  className="w-full py-3.5 px-4 min-h-[50px] rounded-full bg-white/10 hover:bg-white/15 text-white font-bold text-xs uppercase tracking-widest border border-white/20 shadow-lg transition-all flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#C5A368] shrink-0" />
                  <span className="text-center">
                    2- CHAMAR NO WHATSAPP SEM COMPROMISSO
                  </span>
                </button>

                {/* Botão 3 */}
                <button
                  onClick={onClose}
                  className="w-full py-3 px-4 min-h-[46px] rounded-full bg-transparent hover:bg-white/5 text-gray-400 hover:text-white font-semibold text-[11px] uppercase tracking-widest border border-white/10 transition-all flex items-center justify-center cursor-pointer"
                >
                  <span>
                    3- NÃO ENVIAR E CONTINUAR NO SITE
                  </span>
                </button>
              </div>

              <div className="pt-1 flex items-center justify-center space-x-1 text-[10px] tracking-wider text-gray-500 uppercase font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C5A368]" />
                <span>Sigilo e privacidade garantidos</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};
