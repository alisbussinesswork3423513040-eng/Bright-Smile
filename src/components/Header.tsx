import React, { useState } from 'react';
import { CLINIC_INFO } from '../data/dentalData';
import { Calendar, Phone, Menu, X } from 'lucide-react';
import { BrightSmileLogo } from './BrightSmileLogo';

interface HeaderProps {
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-neutral-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          
          {/* Zone 1: Single text element wordmark with logo mascot */}
          <a 
            href="#" 
            className="flex items-center gap-2 group whitespace-nowrap shrink-0 cursor-pointer"
            aria-label="Bright Smile Dental Studio Home"
          >
            <BrightSmileLogo size={46} className="group-hover:scale-105 transition-transform" />
            <div className="flex flex-col">
              <div className="text-xl font-black tracking-tight leading-none">
                <span className="text-[#095DB1]">Bright</span>
                <span className="text-[#00A0F0] ml-1">Smile</span>
              </div>
              <span className="text-[10px] uppercase tracking-wider font-semibold text-slate-500 mt-1">
                Dental Studio · Dr. Ali
              </span>
            </div>
          </a>

          {/* Zone 2: Clean single-line text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600">
            <a 
              href="#doctor" 
              className="hover:text-[#095DB1] transition-colors whitespace-nowrap shrink-0 py-1"
            >
              About Dr. Ali
            </a>
            <a 
              href="#service" 
              className="hover:text-[#095DB1] transition-colors whitespace-nowrap shrink-0 py-1"
            >
              Our Services
            </a>
            <a 
              href="#results" 
              className="hover:text-[#095DB1] transition-colors whitespace-nowrap shrink-0 py-1"
            >
              Before & After
            </a>
            <a 
              href="#faq" 
              className="hover:text-[#095DB1] transition-colors whitespace-nowrap shrink-0 py-1"
            >
              Patient FAQ
            </a>
            <a 
              href="#contact" 
              className="hover:text-[#095DB1] transition-colors whitespace-nowrap shrink-0 py-1"
            >
              Location & Contact
            </a>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-4 shrink-0">
            <a 
              href={`tel:${CLINIC_INFO.phone}`} 
              className="hidden sm:inline-flex items-center gap-2 text-xs font-semibold text-slate-700 hover:text-[#095DB1] px-3 py-2 rounded-lg hover:bg-neutral-100 transition-colors whitespace-nowrap shrink-0"
              title="Call Dr. Ali"
            >
              <Phone className="w-3.5 h-3.5 text-[#095DB1]" />
              <span className="tabular-nums font-bold">{CLINIC_INFO.phone}</span>
            </a>

            <button
              onClick={() => onOpenBooking()}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#095DB1] rounded-lg hover:bg-[#074787] active:scale-[0.99] transition-all shadow-sm hover:shadow whitespace-nowrap shrink-0 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-600 hover:text-slate-900 hover:bg-neutral-100 rounded-lg transition-colors cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-neutral-200 px-6 py-6 space-y-4 shadow-xl">
          <div className="flex flex-col space-y-3 text-base font-medium text-slate-800">
            <a 
              href="#doctor" 
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#095DB1] py-1.5 transition-colors"
            >
              About Dr. Ali
            </a>
            <a 
              href="#service" 
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#095DB1] py-1.5 transition-colors"
            >
              Our Comprehensive Services
            </a>
            <a 
              href="#results" 
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#095DB1] py-1.5 transition-colors"
            >
              Real Before & After Results
            </a>
            <a 
              href="#faq" 
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#095DB1] py-1.5 transition-colors"
            >
              Frequently Asked Questions
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#095DB1] py-1.5 transition-colors"
            >
              Location: Matli Main Road, Hyderabad
            </a>
          </div>

          <div className="pt-4 border-t border-neutral-100 flex flex-col gap-3">
            <a 
              href={`tel:${CLINIC_INFO.phone}`} 
              className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-semibold text-slate-800 bg-neutral-100 rounded-lg hover:bg-neutral-200 transition-colors"
            >
              <Phone className="w-4 h-4 text-[#095DB1]" />
              <span>Call / WhatsApp: {CLINIC_INFO.phone}</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 text-sm font-semibold text-white bg-[#095DB1] rounded-lg hover:bg-[#074787] transition-colors text-center"
            >
              Book an Appointment
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
