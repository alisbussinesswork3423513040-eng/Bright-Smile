import React from 'react';
import { CLINIC_INFO } from '../data/dentalData';
import { Phone, Mail, MapPin } from 'lucide-react';
import { BrightSmileLogo } from './BrightSmileLogo';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  return (
    <footer className="bg-slate-900 text-neutral-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand & Practice */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <BrightSmileLogo size={42} />
              <div className="flex items-center text-xl font-black tracking-tight leading-none">
                <span className="text-white">Bright</span>
                <span className="text-[#38BDF8] ml-1">Smile</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed pr-6">
              Modern, gentle dental care in Hyderabad led personally by Dr. Ali (BDS, RDS). We provide all-in-one comprehensive oral health care, painless restorations, and radiant smile cleanings.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="px-5 py-2.5 text-xs font-semibold text-white bg-[#095DB1] hover:bg-[#074787] rounded-xl transition-colors cursor-pointer"
              >
                Schedule Appointment
              </button>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              Quick Links
            </div>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              <li><a href="#doctor" className="hover:text-white transition-colors">About Dr. Ali (BDS, RDS)</a></li>
              <li><a href="#service" className="hover:text-white transition-colors">Comprehensive Dental Service</a></li>
              <li><a href="#results" className="hover:text-white transition-colors">Real Before & After Results</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Patient Care Questions</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Clinic Location & Directions</a></li>
            </ul>
          </div>

          {/* Col 3: Clinic Contact & Address */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              Clinic Location & Timings
            </div>
            
            <div className="text-xs text-neutral-400 space-y-1.5">
              <div className="font-semibold text-neutral-200 flex items-start gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#38BDF8] shrink-0 mt-0.5" />
                <span>Matli Main Road, 34th Street, Hyderabad</span>
              </div>
              <p className="pl-5 text-neutral-400">Sindh, Pakistan</p>
            </div>

            <div className="space-y-2 pt-2 text-xs text-neutral-400">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#38BDF8] shrink-0" />
                <a href={`tel:${CLINIC_INFO.phone}`} className="hover:text-white font-semibold tabular-nums">
                  {CLINIC_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#38BDF8] shrink-0" />
                <a href={`mailto:${CLINIC_INFO.email}`} className="hover:text-white truncate">
                  {CLINIC_INFO.email}
                </a>
              </div>
              <div className="pt-2 text-[11px] text-neutral-400">
                Monday – Saturday: 10:00 AM – 9:00 PM<br />
                Sunday: By Prior Appointment / Urgent Care
              </div>
            </div>
          </div>

        </div>

        {/* Quiet Legal Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <div>
            © {new Date().getFullYear()} {CLINIC_INFO.name}. Dr. Ali, BDS, RDS.
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span>Pakistan Dental Association</span>
            <span aria-hidden="true">·</span>
            <span>Matli Main Road, Hyderabad</span>
            <span aria-hidden="true">·</span>
            <span>Painless Dental Surgery</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
