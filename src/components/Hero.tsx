import React from 'react';
import { EXPERT, getWhatsAppLink } from '../data';
import { MessageCircle, Sparkles, ShieldCheck, Play, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

export const Hero: React.FC = () => {
  const handleWhatsApp = () => {
    window.location.href = getWhatsAppLink("Olá Dra. Thalita! Vi o seu vídeo e foto no site e quero agendar minha consulta gratuita sem compromisso.");
  };

  return (
    <section className="relative bg-[#0F1113] text-white overflow-hidden pt-6 pb-16 lg:pt-12 lg:pb-24 border-b border-white/5">
      {/* Carbon fibre subtle texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#2A2E33_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12 lg:space-y-20">
        
        {/* TOP VIDEO HIGHLIGHT SECTION */}
        <div className="bg-[#1A1C1E] border border-white/10 rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#C5A368]/5 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
            {/* Video Player */}
            <div className="lg:col-span-6 relative rounded-2xl overflow-hidden border border-white/15 bg-black shadow-xl aspect-[4/3] sm:aspect-video lg:aspect-[4/3] flex items-center justify-center">
              <video
                src={EXPERT.videoUrl}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 flex items-center space-x-1.5 text-[10px] uppercase tracking-widest text-[#C5A368] font-bold">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
                <span>Apresentação Exclusiva</span>
              </div>
            </div>

            {/* Side Text required */}
            <div className="lg:col-span-6 space-y-4 text-left">
              <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-[#C5A368] font-bold">
                <Sparkles className="w-4 h-4" />
                <span>Técnica & Propósito</span>
              </div>
              <blockquote className="font-serif-luxury italic text-xl sm:text-2xl lg:text-3xl text-gray-100 leading-snug font-normal">
                “descubra como a beleza pode ser realçada com técnica, sensibilidade e propósito. resultados naturais e transformadores. Aperte o play e sinta a diferença de ser cuidada por quem entende que sua beleza é única, e merece atenção especial.”
              </blockquote>
              <div className="pt-2 flex items-center space-x-3 text-xs text-gray-400">
                <span className="font-signature text-2xl text-[#C5A368]">Thalita Satriano</span>
                <span>— Especialista em Estética Avançada</span>
              </div>
            </div>
          </div>
        </div>

        {/* MAIN HERO DOBRA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Expert Big Photo (Heroi centralizado) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 order-1 lg:order-2 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#C5A368]/20 via-transparent to-[#C5A368]/10 blur-xl"></div>
              <div className="relative rounded-3xl overflow-hidden border border-[#C5A368]/40 shadow-2xl bg-[#1A1C1E] aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5]">
                <img
                  src={EXPERT.heroPhoto}
                  alt={EXPERT.fullName}
                  className="w-full h-full object-cover object-top grayscale-[15%] filter contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1113] via-transparent to-transparent opacity-60"></div>
                
                {/* Floating Authority Badge */}
                <div className="absolute bottom-6 left-6 right-6 bg-[#0F1113]/90 backdrop-blur-xl p-4 rounded-2xl border border-white/10 flex items-center justify-between">
                  <div>
                    <h2 className="font-serif-luxury text-xl font-bold text-white italic">{EXPERT.fullName}</h2>
                    <p className="text-[10px] tracking-[0.25em] uppercase text-[#C5A368] font-bold mt-0.5">Autoridade em Caieiras SP</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#C5A368] flex items-center justify-center text-black font-bold">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Persuasive Hero Copy (Order 2 mobile, Order 1 Desktop) */}
          <div className="lg:col-span-6 order-2 lg:order-1 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#C5A368] text-xs font-bold tracking-widest uppercase">
              <ShieldCheck className="w-4 h-4 text-[#C5A368]" />
              <span>Atendimento Exclusivo • Sem Padrões de Clínica</span>
            </div>

            <div className="space-y-4">
              <h1 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
                Eu sou <span className="italic text-[#C5A368] font-normal">{EXPERT.name}</span>, e minha missão é revelar a sua melhor versão.
              </h1>
              <p className="text-sm sm:text-base lg:text-lg text-gray-300 font-normal leading-relaxed max-w-xl mx-auto lg:mx-0">
                Rejuvenescimento sofisticado e realce de contornos com absoluta segurança médica. Aqui você não é um número de protocolo: cada traço do seu rosto é tratado como obra de arte única.
              </p>
            </div>

            {/* Giant Mobile First CTA */}
            <div className="pt-4 space-y-3 max-w-md mx-auto lg:mx-0">
              <button
                onClick={handleWhatsApp}
                className="w-full py-5 px-8 min-h-[64px] rounded-full bg-[#C5A368] hover:bg-[#D4B57E] text-black font-extrabold text-sm sm:text-base tracking-widest uppercase shadow-2xl hover:shadow-[#C5A368]/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center space-x-3 cursor-pointer group"
              >
                <MessageCircle className="w-6 h-6 fill-current shrink-0 animate-bounce" />
                <span>Agendar Consulta no WhatsApp</span>
              </button>
            </div>

            {/* Mini Trust Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10 max-w-lg mx-auto lg:mx-0">
              <div>
                <p className="font-serif-luxury text-2xl lg:text-3xl font-bold text-[#C5A368]">100%</p>
                <p className="text-[10px] uppercase tracking-wider text-gray-400">Naturalidade</p>
              </div>
              <div>
                <p className="font-serif-luxury text-2xl lg:text-3xl font-bold text-[#C5A368]">Caieiras</p>
                <p className="text-[10px] uppercase tracking-wider text-gray-400">Atendimento SP</p>
              </div>
              <div>
                <p className="font-serif-luxury text-2xl lg:text-3xl font-bold text-[#C5A368]">Padrão</p>
                <p className="text-[10px] uppercase tracking-wider text-gray-400">Ouro Premium</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
