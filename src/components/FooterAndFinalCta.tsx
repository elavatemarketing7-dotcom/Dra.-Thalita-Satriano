import React from 'react';
import { EXPERT, getWhatsAppLink } from '../data';
import { MessageCircle, MapPin, Instagram, Sparkles, ShieldAlert, ArrowUpRight } from 'lucide-react';

export const FooterAndFinalCta: React.FC = () => {
  const handleWhatsApp = () => {
    window.location.href = getWhatsAppLink("Olá Dra. Thalita! Quero aproveitar a avaliação gratuita e agendar minha consulta pelo WhatsApp.");
  };

  return (
    <footer className="bg-[#0F1113] text-white relative overflow-hidden">
      
      {/* BLOCO 8: CTA FINAL EM DESTAQUE MÁXIMO */}
      <section id="cta-final" className="py-24 lg:py-36 relative border-b border-white/10 overflow-hidden bg-gradient-to-b from-[#1A1C1E] to-[#0F1113]">
        <div className="absolute inset-0 bg-[radial-gradient(#C5A368_1px,transparent_1px)] [background-size:32px_32px] opacity-15 pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#C5A368]/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-10">
          
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-[#C5A368]/10 border border-[#C5A368] text-[#C5A368] text-xs font-bold tracking-widest uppercase animate-pulse">
            <Sparkles className="w-4 h-4" />
            <span>Decisão Inteligente • Horários Limitados em Caieiras</span>
          </div>

          <h2 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
            Pronta para revelar sua beleza autêntica com <br className="hidden sm:block" />
            <span className="italic text-[#C5A368] font-normal">absoluta segurança médica?</span>
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Clique no botão abaixo para conversar diretamente com minha equipe no WhatsApp. Vamos entender seus objetivos estéticos e agendar sua primeira consulta.
          </p>

          {/* Destaque Máximo Button */}
          <div className="pt-6 max-w-lg mx-auto space-y-4">
            <button
              onClick={handleWhatsApp}
              className="w-full py-6 px-8 min-h-[72px] rounded-full bg-[#C5A368] hover:bg-[#D4B57E] text-black font-extrabold text-base sm:text-lg uppercase tracking-widest shadow-2xl hover:shadow-[#C5A368]/30 transition-all transform hover:scale-[1.03] active:scale-[0.98] cursor-pointer flex items-center justify-center space-x-3.5 border-2 border-white/20 animate-bounce group"
            >
              <MessageCircle className="w-7 h-7 fill-current shrink-0" />
              <span>CLIQUE AQUI PARA AGENDAR NO WHATSAPP</span>
            </button>

            <div className="flex items-center justify-center space-x-2 text-xs text-gray-400 font-medium">
              <ShieldAlert className="w-4 h-4 text-emerald-400" />
              <span>Garantia de sigilo médico e resposta rápida da clínica</span>
            </div>
          </div>

        </div>
      </section>

      {/* MAPA DO ENDEREÇO DA CLÍNICA LÁ EM BAIXO DO SITE */}
      <section id="localizacao" className="py-20 bg-[#121416] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-[#C5A368] font-bold mb-2">
                <MapPin className="w-4 h-4" />
                <span>Onde Nos Encontrar</span>
              </div>
              <h3 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-white">Clínica em Caieiras, SP</h3>
            </div>
            <p className="text-xs sm:text-sm text-gray-400 max-w-md text-center sm:text-right">
              Fácil acesso, estacionamento próximo e ambiente sigiloso pensado para o seu máximo relaxamento.
            </p>
          </div>

          {/* Map Embed Container */}
          <div className="w-full h-80 sm:h-96 rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative bg-[#1A1C1E]">
            <iframe
              title="Mapa Clínica Dra Thalita Satriano Caieiras"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14644.026362540544!2d-46.7410052!3d-23.3614214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cee54483a64bf7%3A0x7d6a5c1a40db59bc!2sCaieiras%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(80%) invert(90%) hue-rotate(180deg)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-[#0F1113]/90 backdrop-blur-md p-4 rounded-2xl border border-white/10 flex items-center space-x-3 pointer-events-none">
              <MapPin className="w-6 h-6 text-[#C5A368] shrink-0" />
              <div>
                <p className="text-xs font-bold text-white">{EXPERT.fullName}</p>
                <p className="text-[10px] text-gray-400">Atendimentos Exclusivos em Caieiras / SP</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOCO 9: RODAPÉ SIMPLES */}
      <div className="py-12 bg-[#0A0C0E] text-center sm:text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* Info */}
          <div className="space-y-1">
            <h4 className="font-serif-luxury text-xl font-bold text-white">{EXPERT.fullName}</h4>
            <p className="text-xs text-[#C5A368] uppercase tracking-widest font-semibold">{EXPERT.profession} • {EXPERT.location}</p>
            <p className="text-[11px] text-gray-500 pt-1">WhatsApp Oficial: +{EXPERT.whatsappNumber}</p>
          </div>

          {/* Manual Signature Font required */}
          <div className="py-2 select-none">
            <span className="font-signature text-4xl sm:text-5xl text-[#C5A368] drop-shadow-md">
              Thalita Satriano
            </span>
          </div>

          {/* Social / Links */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href={EXPERT.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full bg-white/5 hover:bg-[#C5A368] hover:text-black text-gray-300 text-xs font-bold uppercase tracking-widest border border-white/10 transition-all flex items-center space-x-2"
            >
              <Instagram className="w-4 h-4" />
              <span>@dra.thalitasatriano</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-[10px] uppercase tracking-widest text-gray-500 hover:text-white underline underline-offset-4 cursor-pointer"
            >
              Voltar ao Topo
            </button>
          </div>

        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 pt-6 border-t border-white/5 text-center text-[10px] text-gray-600 tracking-wider">
          © {new Date().getFullYear()} {EXPERT.fullName}. Todos os direitos reservados. Landing Page Mobile-First focado em conversão WhatsApp.
        </div>
      </div>

    </footer>
  );
};
