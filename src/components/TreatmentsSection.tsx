import React from 'react';
import { TREATMENTS } from '../data/dentalData';
import { Treatment } from '../types/dental';
import { Shield, CheckCircle2, ChevronRight, Calendar, Sparkles } from 'lucide-react';

interface TreatmentsSectionProps {
  onSelectTreatment: (treatment: Treatment) => void;
  onBookTreatment: (treatmentId: string) => void;
}

export const TreatmentsSection: React.FC<TreatmentsSectionProps> = ({
  onSelectTreatment,
  onBookTreatment
}) => {
  const service = TREATMENTS[0];

  const servicePillars = [
    {
      title: 'Ultrasonic Scaling & Deep Tartar Cleaning',
      desc: 'Gentle removal of hardened calculus, plaque, and harmful bacterial buildup along gum margins without painful scraping.'
    },
    {
      title: 'Teeth Polishing & Cosmetic Whitening',
      desc: 'Micro-polishing to remove stubborn tea, coffee, and tobacco stains, restoring a radiant, natural tooth luster.'
    },
    {
      title: 'Painless Composite Tooth Fillings',
      desc: 'High-strength tooth-colored composite restorations that repair cavities and chipped enamel seamlessly.'
    },
    {
      title: 'Urgent Toothache Relief & Dental Extractions',
      desc: 'Prompt pain alleviation, diagnosis of infection, and gentle atraumatic extractions when natural teeth cannot be saved.'
    },
    {
      title: 'Crowns, Bridges & Restorative Dentistry',
      desc: 'Durable, biocompatible ceramic crowns to protect weakened or fractured teeth and restore normal chewing function.'
    },
    {
      title: 'Complete Preventive Oral Examination',
      desc: 'Full clinical checkup, gum pocket assessment, and personalized advice by Dr. Ali to preserve your smile for life.'
    }
  ];

  return (
    <section id="service" className="py-20 lg:py-24 bg-stone-50/60 border-b border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold text-[#095DB1] tracking-wider uppercase mb-2">
            Clinical Practice
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-3">
            Our Comprehensive Dental Service
          </h2>
          <p className="text-base text-slate-600">
            A complete, patient-tailored clinical treatment covering preventative oral hygiene, cosmetic improvements, pain-free tooth restorations, and emergency relief.
          </p>
        </div>

        {/* Marquee Single Service Card */}
        <div className="bg-white rounded-3xl border border-neutral-200 p-8 sm:p-10 lg:p-12 shadow-sm">
          
          <div className="max-w-3xl mb-8">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#095DB1] mb-2">
              <Sparkles className="w-4 h-4 text-sky-500" />
              <span>All-In-One Full Care · Led Personally by Dr. Ali</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
              {service.title}
            </h3>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {service.fullDetails}
            </p>
          </div>

          {/* Sub-Capabilities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6 border-t border-neutral-100 mb-10">
            {servicePillars.map((pillar, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-2xl bg-neutral-50/80 border border-neutral-200/70 hover:bg-white hover:border-[#095DB1]/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#095DB1] flex items-center justify-center font-bold text-xs mb-3">
                    0{idx + 1}
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 mb-1.5">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Key Patient Advantages & CTAs */}
          <div className="p-6 rounded-2xl bg-stone-50 border border-neutral-200 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-700">
                Patient Care Commitments:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 text-xs text-slate-600">
                {service.keyBenefits.map((benefit, bIdx) => (
                  <div key={bIdx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#095DB1] shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3 w-full lg:w-auto shrink-0">
              <button
                onClick={() => onSelectTreatment(service)}
                className="flex-1 lg:flex-initial py-3 px-5 text-xs sm:text-sm font-semibold text-slate-700 hover:text-slate-900 bg-white border border-neutral-200 rounded-xl hover:bg-neutral-50 transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
              >
                <span>Read Full Protocol</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onBookTreatment(service.id)}
                className="flex-1 lg:flex-initial py-3 px-6 text-xs sm:text-sm font-semibold text-white bg-[#095DB1] hover:bg-[#074787] rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
