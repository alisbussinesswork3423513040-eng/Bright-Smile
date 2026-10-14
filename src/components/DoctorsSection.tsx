import React from 'react';
import { DOCTORS } from '../data/dentalData';
import { GraduationCap, Award, Calendar, HeartHandshake, MapPin } from 'lucide-react';

interface DoctorsSectionProps {
  onBookWithDoctor: (doctorId: string) => void;
}

export const DoctorsSection: React.FC<DoctorsSectionProps> = ({ onBookWithDoctor }) => {
  const doctor = DOCTORS[0];

  return (
    <section id="doctor" className="py-20 lg:py-24 bg-white border-b border-neutral-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs font-semibold text-[#095DB1] tracking-wider uppercase mb-2">
            Meet Your Dental Surgeon
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Personalized, Gentle Care by Dr. Ali
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            At Bright Smile Dental Studio, every consultation, checkup, and procedure is performed directly by Dr. Ali with gentle hands and complete dedication to your comfort.
          </p>
        </div>

        {/* Doctor Spotlight Card */}
        <div className="bg-stone-50/80 rounded-3xl border border-neutral-200/90 p-8 sm:p-10 lg:p-12 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left Col: Doctor Overview */}
            <div className="md:col-span-7 space-y-5">
              <div>
                <div className="text-xs font-bold text-[#095DB1] uppercase tracking-wider mb-1">
                  {doctor.role}
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  {doctor.name}
                </h3>
                <div className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">
                  {doctor.credentials} · {doctor.experienceYears} Years Clinical Practice
                </div>
              </div>

              {/* Location & Credentials Badge */}
              <div className="space-y-2 py-3 border-t border-b border-neutral-200/80 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#095DB1] shrink-0" />
                  <span className="font-semibold text-slate-800">Matli Main Road, 34th Street, Hyderabad</span>
                </div>
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-[#095DB1] shrink-0" />
                  <span>{doctor.education}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#095DB1] shrink-0" />
                  <span>{doctor.associations.join(', ')}</span>
                </div>
              </div>

              {/* Bio */}
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {doctor.bio}
              </p>

              {/* Specialties */}
              <div>
                <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wide mb-2">
                  Clinical Focus Areas
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {doctor.specialties.map((spec, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-xs font-medium text-slate-800 bg-white border border-neutral-200 px-3 py-1 rounded-lg"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              {/* Philosophy Quote */}
              <blockquote className="p-4 bg-white rounded-2xl border border-neutral-200/80 text-xs sm:text-sm text-slate-700 italic border-l-4 border-l-[#095DB1]">
                {doctor.philosophy}
              </blockquote>

              <div className="pt-2">
                <button
                  onClick={() => onBookWithDoctor(doctor.id)}
                  className="w-full sm:w-auto px-7 py-3 bg-[#095DB1] hover:bg-[#074787] active:scale-[0.99] text-white text-sm font-semibold rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Schedule Consultation with Dr. Ali</span>
                </button>
              </div>
            </div>

            {/* Right Col: Consultation Photo */}
            <div className="md:col-span-5 flex flex-col items-center">
              <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden border border-neutral-200 shadow-md bg-neutral-100">
                <img
                  src="/src/assets/images/doctor_team_consultation_1791995694194.jpg"
                  alt="Doctor consulting with dental patient in a calm, modern clinic"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="mt-4 p-4 rounded-xl bg-white border border-neutral-200 text-xs text-slate-600 w-full space-y-1.5">
                <div className="flex items-center gap-2 font-bold text-slate-900">
                  <HeartHandshake className="w-4 h-4 text-[#095DB1]" />
                  <span>The Patient-First Promise</span>
                </div>
                <p>
                  Dr. Ali takes the time to explain your oral health clearly, never recommending unnecessary procedures.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
