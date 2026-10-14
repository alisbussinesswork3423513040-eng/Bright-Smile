import React, { useState } from 'react';
import { TREATMENTS, DOCTORS, CLINIC_INFO } from '../data/dentalData';
import { X, Calendar, Clock, MapPin, CheckCircle2, User, Phone, MessageSquare, ArrowRight, ArrowLeft } from 'lucide-react';
import { BrightSmileLogo } from './BrightSmileLogo';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefill?: {
    treatmentId?: string;
    doctorId?: string;
    date?: string;
  };
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  prefill
}) => {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState({
    treatmentId: prefill?.treatmentId || TREATMENTS[0].id,
    doctorId: DOCTORS[0].id,
    location: CLINIC_INFO.address,
    date: prefill?.date || (() => {
      const d = new Date();
      d.setDate(d.getDate() + 1);
      return d.toISOString().split('T')[0];
    })(),
    timeSlot: '11:00 AM',
    patientName: '',
    email: '',
    phone: '',
    isFirstVisit: true,
    anxietyAssistanceNeeded: false,
    notes: ''
  });

  const [confirmationCode, setConfirmationCode] = useState<string>('');

  if (!isOpen) return null;

  const timeSlots = [
    '10:30 AM', '11:30 AM', '1:00 PM',
    '3:00 PM', '5:00 PM', '6:30 PM', '8:00 PM'
  ];

  const selectedTreatment = TREATMENTS[0];
  const selectedDoctor = DOCTORS[0];

  const handleNext = () => {
    setStep(prev => prev + 1);
  };

  const handleBack = () => {
    setStep(prev => Math.max(1, prev - 1));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomCode = 'BS-' + Math.floor(1000 + Math.random() * 9000);
    setConfirmationCode(randomCode);
    setStep(3); // Confirmation screen
  };

  const handleDownloadCalendar = () => {
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Bright Smile Dental Studio//Appointment//EN
BEGIN:VEVENT
SUMMARY:Appointment with Dr. Ali at Bright Smile Dental Studio
DESCRIPTION:Comprehensive dental appointment with Dr. Ali at ${formData.location}. Reference: ${confirmationCode}
LOCATION:${formData.location}
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `BrightSmile-DrAli-Appointment-${confirmationCode}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Dr. Ali, I booked an appointment through your website.\nName: ${formData.patientName}\nDate: ${formData.date} at ${formData.timeSlot}\nCode: ${confirmationCode}\nLocation: ${formData.location}`
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-neutral-200 overflow-hidden">
        
        {/* Modal Top Header */}
        <div className="px-6 py-5 bg-stone-50 border-b border-neutral-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <BrightSmileLogo size={38} />
            <div>
              <span className="text-xs font-bold text-[#095DB1] uppercase tracking-wider">
                Online Appointment Booking
              </span>
              <h3 className="text-lg font-bold text-slate-900">
                {step === 3 ? 'Appointment Confirmed!' : 'Book Your Visit with Dr. Ali'}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white border border-neutral-200 text-slate-500 hover:text-slate-800 flex items-center justify-center hover:bg-neutral-100 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Progress Bar */}
        {step < 3 && (
          <div className="px-6 py-3 bg-neutral-100/70 border-b border-neutral-200/80 flex items-center justify-between text-xs font-semibold text-slate-600">
            <span className={step >= 1 ? 'text-[#095DB1] font-bold' : ''}>1. Date & Time</span>
            <span>→</span>
            <span className={step >= 2 ? 'text-[#095DB1] font-bold' : ''}>2. Your Information</span>
          </div>
        )}

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          
          {/* STEP 1: Date & Time Slot */}
          {step === 1 && (
            <div className="space-y-5">
              {/* Doctor & Service Fixed Info */}
              <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-100 space-y-1.5 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">Consulting Doctor:</span>
                  <span className="font-bold text-slate-900">{selectedDoctor.name} ({selectedDoctor.credentials})</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">Service:</span>
                  <span className="font-semibold text-[#095DB1]">{selectedTreatment.title}</span>
                </div>
                <div className="flex items-center justify-between pt-1 border-t border-blue-100/60">
                  <span className="text-slate-600">Location:</span>
                  <span className="font-medium text-slate-800">{CLINIC_INFO.address}</span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-2">
                  Select Preferred Date
                </label>
                <input
                  type="date"
                  value={formData.date}
                  min={new Date().toISOString().split('T')[0]}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full text-sm font-medium text-slate-800 bg-neutral-50 border border-neutral-300 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#095DB1] cursor-pointer"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-2">
                  Available Clinic Time Slots on {formData.date}
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setFormData({ ...formData, timeSlot: slot })}
                      className={`py-2.5 px-3 rounded-xl border text-xs font-semibold transition-all cursor-pointer text-center ${
                        formData.timeSlot === slot
                          ? 'border-[#095DB1] bg-[#095DB1] text-white shadow-xs'
                          : 'border-neutral-200 hover:border-neutral-300 text-slate-700 bg-white'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  type="button"
                  onClick={handleNext}
                  className="px-6 py-2.5 bg-[#095DB1] hover:bg-[#074787] text-white text-sm font-semibold rounded-xl flex items-center gap-2 cursor-pointer transition-all"
                >
                  <span>Continue to Patient Details</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Patient Information */}
          {step === 2 && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ahmed Khan"
                  value={formData.patientName}
                  onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
                  className="w-full text-sm font-medium text-slate-800 bg-neutral-50 border border-neutral-300 rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#095DB1]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                    Phone Number (Call / WhatsApp) *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+92 3XX XXXXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full text-sm font-medium text-slate-800 bg-neutral-50 border border-neutral-300 rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#095DB1]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full text-sm font-medium text-slate-800 bg-neutral-50 border border-neutral-300 rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#095DB1]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                  Reason for Visit / Primary Concern
                </label>
                <input
                  type="text"
                  placeholder="E.g. Tooth cleaning, toothache, filling, checkup..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full text-sm font-medium text-slate-800 bg-neutral-50 border border-neutral-300 rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#095DB1]"
                />
              </div>

              <div className="p-3.5 rounded-xl bg-stone-50 border border-neutral-200 flex items-start gap-2.5">
                <input
                  type="checkbox"
                  id="anxiety-modal-check"
                  checked={formData.anxietyAssistanceNeeded}
                  onChange={(e) => setFormData({ ...formData, anxietyAssistanceNeeded: e.target.checked })}
                  className="w-4 h-4 rounded text-[#095DB1] focus:ring-[#095DB1] mt-0.5 cursor-pointer"
                />
                <label htmlFor="anxiety-modal-check" className="text-xs text-slate-700 cursor-pointer">
                  I feel nervous about dental visits. Please ensure extra gentle numbing and slow-paced care.
                </label>
              </div>

              <div className="pt-4 flex items-center justify-between">
                <button
                  type="button"
                  onClick={handleBack}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 flex items-center gap-1.5 cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>

                <button
                  type="submit"
                  className="px-6 py-2.5 bg-[#095DB1] hover:bg-[#074787] active:scale-[0.99] text-white text-sm font-semibold rounded-xl flex items-center gap-2 cursor-pointer shadow-md transition-all"
                >
                  <span>Confirm Appointment</span>
                  <CheckCircle2 className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}

          {/* STEP 3: Confirmation */}
          {step === 3 && (
            <div className="text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-blue-50 text-[#095DB1] flex items-center justify-center mx-auto shadow-xs border border-blue-100">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <h4 className="text-2xl font-bold text-slate-900 mb-1">
                  You're Booked, {formData.patientName}!
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                  Your appointment with Dr. Ali has been recorded.
                </p>
              </div>

              {/* Receipt Box */}
              <div className="bg-stone-50 rounded-2xl p-5 border border-neutral-200 text-left space-y-3 text-xs sm:text-sm">
                <div className="flex items-center justify-between pb-2 border-b border-neutral-200">
                  <span className="text-slate-500 font-medium">Appointment Code:</span>
                  <span className="font-mono font-bold text-[#095DB1] text-base">{confirmationCode}</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-neutral-200">
                  <span className="text-slate-500 font-medium">Doctor:</span>
                  <span className="font-semibold text-slate-900">{selectedDoctor.name} ({selectedDoctor.credentials})</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-neutral-200">
                  <span className="text-slate-500 font-medium">Date & Time:</span>
                  <span className="font-semibold text-slate-900">{formData.date} at {formData.timeSlot}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500 font-medium">Clinic Address:</span>
                  <span className="font-semibold text-slate-900">{CLINIC_INFO.address}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`https://wa.me/923413716128?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-xl flex items-center justify-center gap-2 transition-colors shadow-xs"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Confirmation on WhatsApp</span>
                </a>

                <button
                  type="button"
                  onClick={handleDownloadCalendar}
                  className="w-full sm:w-auto px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-xl flex items-center justify-center gap-2 cursor-pointer transition-colors"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Add to Calendar</span>
                </button>
              </div>

              <p className="text-[11px] text-slate-500">
                Clinic Phone: {CLINIC_INFO.phone} · Matli Main Road, 34th Street, Hyderabad
              </p>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
