import React from 'react';
import { EXPERT } from '../data';
import { CheckCircle2, Sparkles, Award } from 'lucide-react';

export const About: React.FC = () => {
  const bullets = [
    { title: "Mapeamento Facial Exclusivo", desc: "Estudo minuciosamente a dinâmica do seu sorriso e olhar antes de qualquer aplicação." },
    { title: "Escuta Ativa & Acolhimento", desc: "A consulta é um momento seu. Entendo seus receios para garantir tranquilidade absoluta." },
    { title: "Filosofia Pro-Aging", desc: "Não tentamos congelar o tempo ou criar rostos genéricos, mas sim envelhecer com nobreza e viço." },
    { title: "Suporte Direto Comigo", desc: "Acompanho pessoalmente a evolução da sua pele em cada dia do pós-procedimento." }
  ];

  return (
    <section id="sobre-mim" className="py-20 lg:py-32 bg-[#0F1113] text-white border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Photo */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#1A1C1E] aspect-[4/5]">
              <img
                src={EXPERT.aboutPhoto}
                alt={EXPERT.fullName}
                className="w-full h-full object-cover grayscale-[15%]"
              />
            </div>
          </div>

          {/* Copy */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-[#C5A368] font-bold">
                <Sparkles className="w-4 h-4" />
                <span>Autoridade & Filosofia</span>
              </div>
              <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                Muito prazer, eu sou a <span className="italic text-[#C5A368] font-normal">{EXPERT.name}</span>.
              </h2>
            </div>

            <div className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed">
              <p>
                Minha história na estética avançada nasceu da inquietação com clínicas tradicionais que tratam pacientes como esteiras de produção. Eu sempre acreditei que cuidar do rosto de alguém exige respeito sagrado à sua história de vida.
              </p>
              <p>
                Em meu consultório em <strong className="text-white font-semibold">Caieiras/SP</strong>, criei um refúgio de sofisticação e calma. Quando você senta na minha cadeira, esqueça aquela frieza hospitalar: nós conversamos de igual para igual sobre o que realmente te incomoda no espelho.
              </p>
            </div>

            {/* Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {bullets.map((b, idx) => (
                <div key={idx} className="bg-[#1A1C1E] p-5 rounded-2xl border border-white/5 hover:border-[#C5A368]/40 transition-colors">
                  <div className="flex items-center space-x-3 mb-2">
                    <CheckCircle2 className="w-5 h-5 text-[#C5A368] shrink-0" />
                    <h3 className="font-serif-luxury text-lg font-bold text-white">{b.title}</h3>
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed pl-8">{b.desc}</p>
                </div>
              ))}
            </div>

            {/* Signature quote */}
            <div className="pt-6 border-t border-white/10 flex items-center justify-between">
              <p className="font-signature text-3xl text-[#C5A368]">{EXPERT.fullName}</p>
              <div className="flex items-center text-xs text-gray-400">
                <Award className="w-4 h-4 text-[#C5A368] mr-1.5" />
                <span>CRBM / Estética Avançada</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
