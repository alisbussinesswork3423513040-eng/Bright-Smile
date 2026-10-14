export interface Treatment {
  id: string;
  category: 'comprehensive' | 'cosmetic' | 'restorative' | 'preventive' | 'emergency';
  title: string;
  tagline: string;
  description: string;
  fullDetails: string;
  duration: string;
  recovery: string;
  discomfortLevel: 'Zero (Painless)' | 'Minimal (0-1/5)' | 'Mild (1-2/5)' | 'Immediate pain relief prioritized';
  idealFor: string[];
  startingPrice?: string;
  insuranceCoverage?: string;
  keyBenefits: string[];
}

export interface Doctor {
  id: string;
  name: string;
  credentials: string;
  role: string;
  experienceYears: number;
  education: string;
  associations: string[];
  bio: string;
  specialties: string[];
  philosophy: string;
}

export interface BeforeAfterCase {
  id: string;
  treatmentName: string;
  patientAge: string;
  concern: string;
  timeline: string;
  overview: string;
  shadeShift?: string;
  beforeNotes: string;
  afterNotes: string;
}

export interface Testimonial {
  id: string;
  author: string;
  age?: number;
  location: string;
  treatment: string;
  rating: number;
  date: string;
  quote: string;
  verified: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'General & First Visit' | 'Anxiety & Comfort' | 'Insurance & Costs' | 'Cosmetic & Treatments';
}

export interface InsurancePlan {
  id: string;
  name: string;
  networkStatus: 'In-Network Preferred' | 'In-Network' | 'Out-of-Network (Billed Directly)' | 'In-House Membership';
  preventiveCoverPercent: number;
  basicCoverPercent: number;
  majorCoverPercent: number;
  notes: string;
}

export interface AppointmentFormData {
  treatmentId: string;
  doctorId: string;
  location: string;
  date: string;
  timeSlot: string;
  patientName: string;
  email: string;
  phone: string;
  isFirstVisit: boolean;
  hasInsurance: boolean;
  insuranceCarrier: string;
  anxietyAssistanceNeeded: boolean;
  notes: string;
}

export interface DentalInsight {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string[];
  category: 'Oral Health Tips' | 'Cosmetic Dentistry' | 'Clinic News & Community' | 'Preventive Care';
  author: {
    name: string;
    role: string;
    credentials: string;
  };
  publishedDate: string;
  readTime: string;
  keyTakeaways: string[];
  relatedTreatmentId?: string;
}

