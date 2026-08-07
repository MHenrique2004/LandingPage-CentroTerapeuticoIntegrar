export interface AppointmentFormData {
  parentName: string;
  phone: string;
  email: string;
  childName: string;
  childAge: string;
  specialty: string;
  preferredShift: 'manha' | 'tarde' | 'noite' | 'qualquer';
  notes: string;
}

export interface SpecialtyItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  targetAudience: string;
  benefits: string[];
  imageUrl: string;
}

export interface ImageAssetInfo {
  id: string;
  title: string;
  description: string;
  url: string;
  htmlSnippet: string;
  aspectRatio: string;
}

export interface TestimonialItem {
  id: string;
  parentName: string;
  relation: string; // e.g. "Mãe do Lucas, 6 anos (Autismo Nível 1)"
  text: string;
  rating: number;
  avatarUrl: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: {
    label: string;
    points: number;
    category: string;
  }[];
}
