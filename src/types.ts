export interface Treatment {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  benefits: string[];
  duration: string;
  recommendedFor: string;
  tag: string;
}

export interface Specialist {
  id: string;
  name: string;
  cro: string;
  role: string;
  specialty: string;
  image: string;
  bio: string;
  isDirector?: boolean;
  qualifications: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  rating: number;
  treatment: string;
  comment: string;
  date: string;
  avatar?: string;
}

export interface BookingFormData {
  fullName: string;
  phone: string;
  treatment: string;
  specialist?: string;
  preferredDate?: string;
  preferredPeriod: 'manha' | 'tarde' | 'noite';
  notes?: string;
}
