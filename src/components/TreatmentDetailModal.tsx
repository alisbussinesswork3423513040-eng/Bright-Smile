import React from 'react';
import { Treatment } from '../types/dental';
import { X, Clock, Shield, CheckCircle2, Calendar, Sparkles, MapPin } from 'lucide-react';

interface TreatmentDetailModalProps {
  treatment: Treatment | null;
  onClose: () => void;
  onBook: (treatmentId: string) => void;
}

export const TreatmentDetailModal: React.FC<TreatmentDetailModalProps> = ({
  treatment,
  onClose,
  onBook
}) => {
  if (!treatment) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-neutral-200 overflow-hidden">
        
        {/* Header */}
        <div className="px-6 py-5 bg-stone-50 border-b border-neutral-200 flex items-center justify-between">
          <div>
            <div className="text-xs font-bold text-[#095DB1] uppercase tracking-wider">
              Clinical Overview · Dr. Ali (BDS, RDS)
            </div>
            <h3 className="text-xl font-bold text-slate-900 mt-0.5">
              {treatment.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white border border-neutral-200 text-slate-500 hover:text-slate-800 flex items-center justify-center hover:bg-neutral-100 transition-colors cursor-pointer"
            aria-label="Close procedure details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
          
          <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-100 text-xs sm:text-sm text-slate-900 font-medium leading-relaxed">
            {treatment.tagline}
          </div>

          {/* Quick Specifications Strip */}
          <div className="grid grid-cols-2 gap-3 p-4 rounded-xl bg-neutral-50 border border-neutral-200 text-xs">
            <div>
              <div className="text-slate-500 font-semibold uppercase tracking-wider text-[10px] mb-0.5">
                Care Approach
              </div>
              <div className="font-bold text-slate-900 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#095DB1]" />
                <span>Personalized 1-on-1 Consultation</span>
              </div>
            </div>

            <div>
              <div className="text-slate-500 font-semibold uppercase tracking-wider text-[10px] mb-0.5">
                Comfort Level
              </div>
              <div className="font-bold text-[#095DB1] flex items-center gap-1">
                <Shield className="w-3.5 h-3.5" />
                <span>Zero Pain · Gentle Techniques</span>
              </div>
            </div>
          </div>

          {/* Clinical Procedure Description */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-2">
              Clinical Procedure & What to Expect
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {treatment.fullDetails}
            </p>
          </div>

          {/* What is Included / Ideal Candidates */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-2">
              Services Included Under Comprehensive Care
            </h4>
            <div className="space-y-1.5">
              {treatment.idealFor.map((candidate, i) => (
                <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                  <Sparkles className="w-4 h-4 text-[#095DB1] shrink-0 mt-0.5" />
                  <span>{candidate}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Advantages */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-2">
              Key Patient Advantages
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {treatment.keyBenefits.map((benefit, i) => (
                <div key={i} className="p-2.5 rounded-lg bg-neutral-50 border border-neutral-200/80 flex items-start gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#095DB1] shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Location reassurance banner */}
          <div className="p-4 rounded-xl bg-stone-50 border border-neutral-200 text-xs flex items-center gap-3">
            <MapPin className="w-5 h-5 text-[#095DB1] shrink-0" />
            <div className="text-slate-700">
              <span className="font-bold text-slate-900">Clinic Location:</span> Matli Main Road, 34th Street, Hyderabad. Direct phone & WhatsApp: <strong>+92 341 3716 128</strong>.
            </div>
          </div>

        </div>

        {/* Footer actions */}
        <div className="px-6 py-4 bg-stone-50 border-t border-neutral-200 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
          >
            Close
          </button>

          <button
            type="button"
            onClick={() => {
              onClose();
              onBook(treatment.id);
            }}
            className="px-6 py-2.5 bg-[#095DB1] hover:bg-[#074787] text-white text-xs sm:text-sm font-semibold rounded-xl flex items-center gap-2 cursor-pointer shadow-sm transition-all"
          >
            <Calendar className="w-4 h-4" />
            <span>Schedule Appointment with Dr. Ali</span>
          </button>
        </div>

      </div>
    </div>
  );
};
