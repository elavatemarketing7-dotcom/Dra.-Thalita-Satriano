export interface GalleryItem {
  id: number;
  url: string;
  title?: string;
  category?: string;
}

export interface QuizQuestion {
  id: number;
  title: string;
  subtitle?: string;
  options: {
    label: string;
    icon?: string;
  }[];
}

export interface TrustCard {
  icon: string;
  title: string;
  description: string;
}

export interface ConsultationStep {
  number: string;
  title: string;
  description: string;
}
