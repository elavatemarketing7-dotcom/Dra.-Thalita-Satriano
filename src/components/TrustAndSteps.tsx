import React from 'react';
import { TRUST_CARDS, CONSULTATION_STEPS, EXPERT, getWhatsAppLink } from '../data';
import { ShieldCheck, UserCheck, Sparkles, Award, HeartHandshake, Gem, MessageCircle, ArrowRight } from 'lucide-react';

export const TrustAndSteps: React.FC = () => {
  const getIcon = (name: string) => {
    switch(name) {
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-[#C5A368]" />;
      case 'UserCheck': return <UserCheck className="w-6 h-6 text-[#C5A368]" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-[#C5A368]" />;
      case 'Award': return <Award className="w-6 h-6 text-[#C5A368]" />;
      case 'HeartHandshake': return <HeartHandshake className="w-6 h-6 text-[#C5A368]" />;
      default: return <Gem className="w-6 h-6 text-[#C5A368]" />;
    }
  };

  const handleWhatsApp = () => {
    window.location.href = getWhatsAppLink("Olá Dra. Thalita! Li seus diferenciais e quero agendar minha consulta gratuita sem compromisso.");
  };

  return (
    <div className="bg-[#0F1113] text-white overflow-hidden">
      
      {/* BLOCO 4: POR QUE CONFIAR EM MIM */}
      <section id="confianca" className="py-20 lg:py-32 border-b border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-[#C5A368] font-bold">
              <ShieldCheck className="w-4 h-4 text-[#C5A368]" />
              <span>Ética & Cuidado</span>
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Por que pacientes de SP confiam na <span className="italic text-[#C5A368] font-normal">{EXPERT.fullName}</span>?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {TRUST_CARDS.map((card, idx) => (
              <div 
                key={idx}
                className="bg-[#1A1C1E] border border-white/10 rounded-3xl p-8 hover:border-[#C5A368]/60 transition-all duration-300 shadow-xl flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getIcon(card.icon)}
                  </div>
                  <h3 className="font-serif-luxury text-xl font-bold text-white group-hover:text-[#C5A368] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOCO 5: CTA INTERMEDIÁRIO */}
      <section className="py-16 lg:py-24 bg-[#1A1C1E] border-b border-white/5 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#C5A368]/10 via-transparent to-[#C5A368]/5 pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 relative z-10">
          <h2 className="font-serif-luxury text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
            Você merece sentir orgulho do espelho todos os dias. <br />
            <span className="italic text-[#C5A368] font-normal">Dê o primeiro passo com segurança médica.</span>
          </h2>
          
          <div className="max-w-md mx-auto space-y-3">
            <button
              onClick={handleWhatsApp}
              className="w-full py-5 px-8 rounded-full bg-[#C5A368] hover:bg-[#D4B57E] text-black font-extrabold text-sm sm:text-base uppercase tracking-widest shadow-2xl transition-transform hover:scale-102 cursor-pointer flex items-center justify-center space-x-3"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Agendar no WhatsApp</span>
            </button>
            <p className="text-[11px] uppercase tracking-widest text-gray-400 font-semibold">
              Sem compromisso financeiro na primeira conversa
            </p>
          </div>
        </div>
      </section>

      {/* BLOCO 6: COMO FUNCIONA A PRIMEIRA CONSULTA */}
      <section className="py-20 lg:py-32 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-[#C5A368] font-bold">
              <Sparkles className="w-4 h-4" />
              <span>Simples & Transparente</span>
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Como funciona o agendamento?
            </h2>
            <p className="text-xs sm:text-sm text-gray-400">
              Três passos fluidos para revelar sua identidade facial com naturalidade.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 relative">
            {CONSULTATION_STEPS.map((step, idx) => (
              <div 
                key={idx}
                className="bg-[#1A1C1E] border border-white/10 rounded-3xl p-8 relative space-y-6 shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <span className="font-serif-luxury italic text-5xl font-bold text-[#C5A368]/30">
                    {step.number}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#C5A368]/10 border border-[#C5A368]/40 flex items-center justify-center text-[#C5A368]">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
                <h3 className="font-serif-luxury text-2xl font-bold text-white">{step.title}</h3>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOCO 7: MAIS PROVAS (Bastidores e autoridade fornecida) */}
      <section className="py-20 lg:py-32 border-b border-white/5 bg-[#121416]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-[#C5A368] font-bold">
                <Award className="w-4 h-4" />
                <span>Bastidores & Dedicação</span>
              </div>
              <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Atenção aos mínimos detalhes, do <span className="italic text-[#C5A368] font-normal">acolhimento à execução</span>.
              </h2>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                Cada seringa, cada produto e cada planejamento anatômico em nosso consultório em Caieiras reflete o respeito absoluto pela sua confiança. Você merece uma experiência médica memorável.
              </p>
              <div className="pt-2">
                <button
                  onClick={handleWhatsApp}
                  className="py-4 px-8 rounded-full border border-[#C5A368] text-[#C5A368] hover:bg-[#C5A368] hover:text-black font-bold text-xs uppercase tracking-widest transition-all cursor-pointer inline-flex items-center space-x-2"
                >
                  <span>Falar com a equipe no WhatsApp</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#1A1C1E] aspect-[4/3]">
                <img
                  src={EXPERT.behindScenesPhoto}
                  alt="Bastidores Dra. Thalita"
                  className="w-full h-full object-cover grayscale-[15%]"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/40 to-transparent p-6 text-left">
                  <p className="text-xs font-bold uppercase tracking-widest text-[#C5A368]">Atendimento Personalizado</p>
                  <p className="text-xs text-gray-300">Consultório exclusivo em Caieiras / SP</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
