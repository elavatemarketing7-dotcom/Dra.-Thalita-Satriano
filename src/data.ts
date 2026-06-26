import { GalleryItem, QuizQuestion, TrustCard, ConsultationStep } from './types';

export const EXPERT = {
  name: "Thalita Satriano",
  prefix: "Dra.",
  fullName: "Dra. Thalita Satriano",
  profession: "Estética Avançada",
  location: "Caieiras, SP",
  whatsappNumber: "5511940191441",
  instagramUrl: "https://www.instagram.com/dra.thalitasatriano/",
  heroPhoto: "https://i.imgur.com/e69z1Ta.png",
  aboutPhoto: "https://i.imgur.com/m5eeule.png",
  behindScenesPhoto: "https://i.imgur.com/uulgF8i.png",
  videoUrl: "https://i.imgur.com/ty0601n.mp4",
  videoPageUrl: "https://imgur.com/ty0601n",
  videoSideText: "descubra como a beleza pode ser realçada com técnica, sensibilidade e propósito. resultado naturais e transformadores. Aperte o play e sinta a diferença de ser cuidada por quem entende que sua beleza é única, e merece atenção especial."
};

export const getWhatsAppLink = (customMessage?: string) => {
  const msg = customMessage || "Olá Dra. Thalita! Vi o seu site oficial e gostaria de agendar uma consulta sem compromisso no WhatsApp.";
  return `https://wa.me/${EXPERT.whatsappNumber}?text=${encodeURIComponent(msg)}`;
};

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    title: "Qual é o seu principal objetivo estético no momento?",
    subtitle: "Selecione a opção que melhor reflete seu desejo hoje",
    options: [
      { label: "Suavizar linhas de expressão com acabamento 100% natural" },
      { label: "Realçar contornos da face e redefinir a harmonia do rosto" },
      { label: "Recuperar a firmeza, hidratação profunda e viço da pele" },
      { label: "Prevenção inteligente e rejuvenescimento sofisticado" }
    ]
  },
  {
    id: 2,
    title: "O que é inegociável para você em um procedimento?",
    subtitle: "Sua segurança e conforto vêm em primeiro lugar",
    options: [
      { label: "Naturalidade absoluta (ninguém dizer que fiz 'procedimento')" },
      { label: "Produtos padrão ouro e segurança médica rigorosa" },
      { label: "Atendimento exclusivo, humanizado e focado em mim" },
      { label: "Combinação perfeita de técnica de ponta e escuta ativa" }
    ]
  },
  {
    id: 3,
    title: "Qual a sua experiência prévia com estética avançada?",
    subtitle: "Queremos entender o seu histórico de cuidados",
    options: [
      { label: "Já realizo procedimentos habitualmente e amo me cuidar" },
      { label: "Já fiz no passado, mas sinto que preciso de um olhar mais cauteloso" },
      { label: "Será minha primeira vez e busco máxima confiança" }
    ]
  },
  {
    id: 4,
    title: "Qual o seu momento atual para agendar sua avaliação?",
    subtitle: "Atendimentos exclusivos em Caieiras/SP",
    options: [
      { label: "Estou pronta para agendar o quanto antes neste mês" },
      { label: "Quero me planejar para as próximas semanas" },
      { label: "Estou pesquisando para entender o método ideal" }
    ]
  }
];

// 36 itens na galeria de resultados antes/depois (prontos para novos links)
export const RESULTS_GALLERY: GalleryItem[] = [
  { id: 1, url: "https://i.imgur.com/kzxoD0k.png", title: "Harmonia Facial Natural" },
  { id: 2, url: "https://i.imgur.com/rxWskgB.png", title: "Suavização e Rejuvenescimento" },
  { id: 3, url: "https://i.imgur.com/ObHxVEW.png", title: "Realce de Contornos" },
  { id: 4, url: "https://i.imgur.com/ThOem7M.png", title: "Viço e Refinamento" },
  { id: 5, url: "https://i.imgur.com/0JQf5h5.png", title: "Proporção e Equilíbrio" },
  { id: 6, url: "https://i.imgur.com/sbrjl91.png", title: "Elegância e Sutileza" },
  // Placeholders 7 a 36 conforme solicitado: (DEIXE A GALERIA PRONTA PARA EU ADICIONAR MAIS LINKS DEPOIS)
  ...Array.from({ length: 30 }, (_, i) => ({
    id: i + 7,
    url: "",
    title: `Resultado Exclusivo ${i + 7}`
  }))
];

// Galeria de 💚 (Feedbacks carinhosos) - 14 itens
export const GREEN_FEEDBACKS: GalleryItem[] = [
  { id: 1, url: "https://i.imgur.com/2aEzqei.png", title: "Depoimento de Paciente 1" },
  { id: 2, url: "https://i.imgur.com/3rKYwoY.png", title: "Depoimento de Paciente 2" },
  { id: 3, url: "https://i.imgur.com/stpoXEV.png", title: "Depoimento de Paciente 3" },
  ...Array.from({ length: 11 }, (_, i) => ({
    id: i + 4,
    url: "",
    title: `Depoimento de 💚 ${i + 4}`
  }))
];

// Área de comentários de pacientes - 13 itens
export const PATIENT_COMMENTS: GalleryItem[] = [
  { id: 1, url: "https://i.imgur.com/fn3xoP2.png", title: "Comentário 1" },
  { id: 2, url: "https://i.imgur.com/12MaKzV.png", title: "Comentário 2" },
  { id: 3, url: "https://i.imgur.com/Qclh79x.png", title: "Comentário 3" },
  { id: 4, url: "https://i.imgur.com/rT3KPqo.png", title: "Comentário 4" },
  ...Array.from({ length: 9 }, (_, i) => ({
    id: i + 5,
    url: "",
    title: `Comentário Paciente ${i + 5}`
  }))
];

export const TRUST_CARDS: TrustCard[] = [
  {
    icon: "ShieldCheck",
    title: "Avaliação Honesta e Transparente",
    description: "Nunca indicarei excessos. Meu compromisso ético é realçar sua beleza autêntica, preservando sua identidade facial."
  },
  {
    icon: "UserCheck",
    title: "Atendimento 100% Comigo",
    description: "Você não será atendida por assistentes ou protocolos em massa. Cada etapa é executada pessoalmente por mim."
  },
  {
    icon: "Sparkles",
    title: "Clareza Absoluta em Detalhes",
    description: "Explico minuciosa e calmamente cada mililitro aplicado, marca utilizada e o porquê de cada estratégia anatômica."
  },
  {
    icon: "Award",
    title: "Produtos Padrão Ouro Internacional",
    description: "Trabalho exclusivamente com as marcas mais seguras, premiadas e reconhecidas mundialmente na medicina estética."
  },
  {
    icon: "HeartHandshake",
    title: "Acompanhamento do Início ao Fim",
    description: "Nossa relação não acaba na saída da sala. Mantenho suporte direto via WhatsApp no seu pós-procedimento."
  },
  {
    icon: "Gem",
    title: "Visão Artística Única",
    description: "Estética avançada não é matemática fria; é arte de precisão para harmonizar traços com elegância atemporal."
  }
];

export const CONSULTATION_STEPS: ConsultationStep[] = [
  {
    number: "01",
    title: "Contato Direto no WhatsApp",
    description: "Você clica no botão, fala diretamente com minha equipe acolhedora e tira suas dúvidas iniciais sem nenhum compromisso."
  },
  {
    number: "02",
    title: "Agendamento Exclusivo",
    description: "Reservamos um horário dedicado especialmente para você em nossa clínica em Caieiras/SP, com total discrição e conforto."
  },
  {
    number: "03",
    title: "Avaliação Facial Detalhada",
    description: "Realizo seu mapeamento facial completo em consultório, montando o plano ideal para revelar sua versão mais radiante."
  }
];
