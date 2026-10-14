import React, { useState } from 'react';
import { CLINIC_INFO, TREATMENTS, DOCTORS } from '../data/dentalData';
import { Calendar, ShieldCheck, HeartHandshake, ArrowRight, Clock, MapPin, User } from 'lucide-react';

interface HeroProps {
  onOpenBooking: (prefill?: { treatmentId?: string; doctorId?: string; date?: string }) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const [selectedDate, setSelectedDate] = useState(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  });

  const handleHeroReserve = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenBooking({
      treatmentId: TREATMENTS[0].id,
      doctorId: DOCTORS[0].id,
      date: selectedDate
    });
  };

  return (
    <section className="relative bg-gradient-to-b from-stone-50 via-white to-stone-50/60 pt-8 pb-16 lg:pt-12 lg:pb-24 border-b border-neutral-200/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 2-Column Split Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-stretch">
          
          {/* Left Column: Copy & Value Proposition */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Unboxed Metadata Location Bar */}
            <div className="flex items-center flex-wrap gap-2 text-xs font-semibold text-[#095DB1] tracking-wide uppercase mb-4">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" />
                <span>Matli Main Road, 34th Street, Hyderabad</span>
              </span>
              <span aria-hidden="true" className="text-neutral-400">·</span>
              <span>Personalized Care by Dr. Ali</span>
              <span aria-hidden="true" className="text-neutral-400">·</span>
              <span>100% Gentle & Painless</span>
            </div>

            <h1 
              className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-slate-900 tracking-tight leading-[1.14] mb-6"
              style={{ textWrap: 'balance' }}
            >
              Gentle, modern dentistry in Hyderabad designed around your comfort.
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mb-8">
              Welcome to Bright Smile Dental Studio. Led personally by Dr. Ali, our practice delivers comprehensive, stress-free dental care—including ultrasonic scaling, teeth polishing, fillings, whitening, and urgent toothache relief.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <button
                onClick={() => onOpenBooking()}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm font-semibold text-white bg-[#095DB1] rounded-xl hover:bg-[#074787] active:scale-[0.99] transition-all shadow-md hover:shadow-lg cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-sky-200" />
                <span>Schedule an Appointment</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`tel:${CLINIC_INFO.phone}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-800 bg-white border border-neutral-300 rounded-xl hover:bg-neutral-50 hover:text-[#095DB1] transition-all shadow-sm"
              >
                <span>Call Dr. Ali: {CLINIC_INFO.phone}</span>
              </a>
            </div>

            {/* Patient Reassurance Row */}
            <div className="pt-6 border-t border-neutral-200/80 grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-[#095DB1] shrink-0" />
                <span className="text-xs font-medium text-slate-700">Strict hygiene & sterilization</span>
              </div>
              <div className="flex items-center gap-2.5">
                <HeartHandshake className="w-5 h-5 text-[#095DB1] shrink-0" />
                <span className="text-xs font-medium text-slate-700">Painless & anxiety-free care</span>
              </div>
              <div className="flex items-center gap-2.5 col-span-2 sm:col-span-1">
                <Clock className="w-5 h-5 text-[#095DB1] shrink-0" />
                <span className="text-xs font-medium text-slate-700">Mon–Sat: 10:00 AM – 9:00 PM</span>
              </div>
            </div>

          </div>

          {/* Right Column: Architectural Clinic Image */}
          <div className="lg:col-span-5 relative flex items-center">
            <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-full min-h-[380px] lg:min-h-[460px] rounded-2xl overflow-hidden shadow-2xl border border-neutral-200/90 bg-neutral-100">
              <img
                src="/src/assets/images/hero_bright_smile_clinic_1791995692954.jpg"
                alt="Bright Smile Dental Studio interior with comfortable modern dental chair and welcoming aesthetic"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />

              {/* In-image quiet clinic badge */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-white/60 shadow-lg flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-[#095DB1]">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900">Dr. Ali, BDS, RDS</div>
                    <p className="text-xs text-slate-600">
                      Principal Dental Surgeon · Matli Main Rd, Hyderabad
                    </p>
                  </div>
                </div>
                <button 
                  onClick={() => onOpenBooking()}
                  className="text-xs font-bold text-[#095DB1] hover:text-[#074787] underline underline-offset-2 shrink-0 cursor-pointer"
                >
                  Book visit
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Hero Interactive Reservation Bar */}
        <div className="mt-14 bg-white rounded-2xl border border-neutral-200/90 shadow-xl p-5 sm:p-6 lg:p-7">
          <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
            <div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900">
                Book a Visit with Dr. Ali
              </h2>
              <p className="text-xs text-slate-500">
                Select your preferred date to reserve your consultation. Walk-ins also welcomed at our Hyderabad clinic.
              </p>
            </div>
            <div className="text-xs font-semibold text-[#095DB1] bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-100">
              Now Open on Matli Main Road
            </div>
          </div>

          <form onSubmit={handleHeroReserve} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* Step 1: Service */}
            <div>
              <label htmlFor="hero-service-label" className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5">
                Service Required
              </label>
              <div id="hero-service-label" className="w-full text-xs sm:text-sm font-semibold text-slate-800 bg-neutral-100/90 border border-neutral-300 rounded-xl px-3.5 py-2.5 truncate">
                Comprehensive Dental Care
              </div>
            </div>

            {/* Step 2: Doctor */}
            <div>
              <label htmlFor="hero-doctor-label" className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5">
                Consulting Doctor
              </label>
              <div id="hero-doctor-label" className="w-full text-xs sm:text-sm font-semibold text-slate-800 bg-neutral-100/90 border border-neutral-300 rounded-xl px-3.5 py-2.5">
                Dr. Ali (BDS, RDS)
              </div>
            </div>

            {/* Step 3: Date */}
            <div>
              <label htmlFor="hero-date-picker" className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5">
                Preferred Date
              </label>
              <input
                id="hero-date-picker"
                aria-label="Preferred Appointment Date"
                type="date"
                value={selectedDate}
                min={new Date().toISOString().split('T')[0]}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full text-sm font-medium text-slate-800 bg-neutral-50 hover:bg-neutral-100/80 border border-neutral-300 rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#095DB1] focus:bg-white transition-all cursor-pointer"
              />
            </div>

            {/* Step 4: Button */}
            <div className="flex items-end">
              <button
                type="submit"
                className="w-full py-2.5 px-4 bg-[#095DB1] hover:bg-[#074787] active:scale-[0.99] text-white text-sm font-semibold rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer h-[42px]"
              >
                <span>Reserve Appointment</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </form>
        </div>

        {/* 4-Column Verified Practice Fact Strip */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-neutral-200">
          <div>
            <div className="text-xl sm:text-2xl font-bold text-slate-900">
              Dr. Ali
            </div>
            <div className="text-xs sm:text-sm text-slate-600 mt-0.5">
              BDS, RDS Dental Surgeon
            </div>
          </div>

          <div>
            <div className="text-xl sm:text-2xl font-bold text-slate-900">
              All-In-One
            </div>
            <div className="text-xs sm:text-sm text-slate-600 mt-0.5">
              Comprehensive Smile Care
            </div>
          </div>

          <div>
            <div className="text-xl sm:text-2xl font-bold text-slate-900">
              34th Street
            </div>
            <div className="text-xs sm:text-sm text-slate-600 mt-0.5">
              Matli Main Road, Hyderabad
            </div>
          </div>

          <div>
            <div className="text-xl sm:text-2xl font-bold text-slate-900">
              Painless
            </div>
            <div className="text-xs sm:text-sm text-slate-600 mt-0.5">
              Gentle, Stress-Free Care
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
