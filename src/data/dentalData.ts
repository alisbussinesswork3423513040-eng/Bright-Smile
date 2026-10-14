import { Treatment, Doctor, BeforeAfterCase, Testimonial, FAQItem } from '../types/dental';

export const CLINIC_INFO = {
  name: 'Bright Smile Dental Studio',
  tagline: 'Gentle, Modern Dental Care by Dr. Ali',
  phone: '+92 341 3716 128',
  emergencyPhone: '+92 341 3716 128',
  email: 'alis.bussiness.work.3423513040@gmail.com',
  address: 'Matli Main Road, 34th Street, Hyderabad',
  hours: [
    { days: 'Monday – Saturday', time: '10:00 AM – 9:00 PM' },
    { days: 'Sunday', time: 'By Prior Appointment / Urgent Care' }
  ],
  stats: {
    doctor: 'Dr. Ali',
    careType: '1-on-1 Doctor Care',
    experience: '8+ Years Experience',
    comfort: '100% Gentle & Painless'
  }
};

export const TREATMENTS: Treatment[] = [
  {
    id: 'comprehensive-dental-care',
    category: 'comprehensive',
    title: 'Comprehensive Smile Care & Complete Dental Treatments',
    tagline: 'All-in-one dental care: gentle scaling, teeth polishing, fillings, whitening, restorations, and pain relief.',
    description: 'A complete, patient-tailored clinical service covering ultrasonic cleaning, plaque and tartar removal, cosmetic teeth whitening, composite aesthetic fillings, painless extractions, and rapid toothache relief.',
    fullDetails: 'Led personally by Dr. Ali, our comprehensive dental service provides complete oral health care tailored to your individual needs. Every visit includes a thorough oral examination, careful diagnosis, gentle plaque and tartar removal, restorative tooth fillings, aesthetic brightening, and non-judgmental guidance for lifelong dental health. All procedures are conducted with high sterilization standards and gentle techniques.',
    duration: 'Personalized to your visit',
    recovery: 'Immediate (zero downtime)',
    discomfortLevel: 'Zero (Painless)',
    idealFor: [
      'Patients needing thorough tartar removal, deep cleaning, and polishing',
      'Toothache relief, cavities, broken teeth, or damaged fillings',
      'Cosmetic smile brightening and teeth discoloration correction',
      'Whole-family routine dental checkups and preventive protection'
    ],
    keyBenefits: [
      'Dedicated one-on-one personal attention directly with Dr. Ali',
      'Gentle, painless procedures with comfortable local numbing',
      'High-grade biocompatible composite materials and restorations',
      'Clean, comfortable clinical setting on Matli Main Road, Hyderabad'
    ]
  }
];

export const DOCTORS: Doctor[] = [
  {
    id: 'dr-ali',
    name: 'Dr. Ali',
    credentials: 'BDS, RDS (Dental Surgeon)',
    role: 'Principal Dental Surgeon & Restorative Specialist',
    experienceYears: 8,
    education: 'Bachelor of Dental Surgery (BDS), Registered Dental Surgeon (RDS)',
    associations: ['Pakistan Dental Association', 'Aesthetic & Restorative Dentistry'],
    bio: 'Dr. Ali is the founder and chief dental surgeon at Bright Smile Dental Studio on Matli Main Road, Hyderabad. Known for his calm demeanor, gentle hands, and patient-first approach, Dr. Ali specializes in painless general and cosmetic dentistry. He takes the time to listen to each patient, explaining every procedure clearly so you feel completely at ease.',
    specialties: [
      'Comprehensive Oral Checkups',
      'Ultrasonic Scaling & Polishing',
      'Cosmetic Teeth Whitening',
      'Painless Composite Tooth Fillings',
      'Urgent Toothache Relief & Extractions'
    ],
    philosophy: '“Every patient deserves honest advice, gentle hands, and personalized care in a comfortable environment.”'
  }
];

export const BEFORE_AFTER_CASES: BeforeAfterCase[] = [
  {
    id: 'case-smile-restoration',
    treatmentName: 'Complete Scaling, Enamel Polishing & Cosmetic Whitening',
    patientAge: 'Adult Patient Case',
    concern: 'Stubborn enamel discoloration, surface tea staining, and tartar buildup along gumline.',
    timeline: 'Completed in a single visit',
    overview: 'Full ultrasonic plaque and calculus debridement followed by fine micro-polishing, clinical whitening, and gentle smoothing of minor uneven enamel edges by Dr. Ali.',
    shadeShift: 'Noticeable brightening with refreshed natural translucency',
    beforeNotes: 'Visible surface stains, tartar accumulation, and dull tooth shade.',
    afterNotes: 'Clean, radiant smile with healthy pink gums and smooth natural enamel.'
  }
];

export const TESTIMONIALS: Testimonial[] = [];

export const FAQS: FAQItem[] = [
  {
    category: 'General & First Visit',
    question: 'How do I book an appointment with Dr. Ali?',
    answer: 'You can book directly using our online scheduler on this website, call or WhatsApp Dr. Ali at +92 341 3716 128, or visit our clinic at Matli Main Road, 34th Street, Hyderabad. Walk-ins are also accommodated.'
  },
  {
    category: 'Anxiety & Comfort',
    question: 'Are dental treatments painful?',
    answer: 'Dr. Ali uses modern, gentle techniques and effective local anesthesia so you feel zero pain during tooth fillings, cleanings, or extractions. If you feel nervous, Dr. Ali will take things at your pace with regular pauses.'
  },
  {
    category: 'Cosmetic & Treatments',
    question: 'What is included in the comprehensive dental care service?',
    answer: 'Our comprehensive care service is tailored to whatever your teeth need: detailed checkups, ultrasonic scaling, stain removal, polishing, tooth-colored composite fillings, teeth whitening, and relief for aching or broken teeth.'
  },
  {
    category: 'General & First Visit',
    question: 'Where is the clinic located in Hyderabad?',
    answer: 'Bright Smile Dental Studio is conveniently situated at Matli Main Road, 34th Street, Hyderabad. Parking is available right in front of the clinic.'
  }
];
