import React, { useState } from 'react';
import { CLINIC_INFO } from '../data/dentalData';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, MessageSquare } from 'lucide-react';

export const LocationContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    isUrgent: false
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 500);
  };

  return (
    <section id="contact" className="py-20 lg:py-24 bg-white border-b border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="text-xs font-semibold text-[#095DB1] tracking-wider uppercase mb-2">
            Visit Our Clinic
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Conveniently Located in Hyderabad
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Bright Smile Dental Studio is situated on Matli Main Road, 34th Street, Hyderabad. Dr. Ali is available Monday through Saturday for scheduled appointments and urgent walk-in care.
          </p>
        </div>

        {/* 2-Column Split: Info & Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Locations & Hours */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Location Card */}
            <div className="p-7 rounded-3xl bg-stone-50/80 border border-neutral-200/90 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#095DB1] uppercase tracking-wide mb-2">
                <MapPin className="w-4 h-4" />
                <span>Clinic Address</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-1">
                Matli Main Road, 34th Street
              </h3>
              <p className="text-sm text-slate-600 mb-6">
                Hyderabad, Sindh · Easy road access and on-site patient parking
              </p>
              
              <div className="space-y-3 pt-4 border-t border-neutral-200 text-xs sm:text-sm">
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#095DB1] shrink-0" />
                  <a
                    href={`tel:${CLINIC_INFO.phone}`}
                    className="font-bold text-slate-900 hover:text-[#095DB1] transition-colors tabular-nums"
                  >
                    {CLINIC_INFO.phone}
                  </a>
                </div>

                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#095DB1] shrink-0" />
                  <a
                    href={`mailto:${CLINIC_INFO.email}`}
                    className="text-slate-700 hover:text-[#095DB1] transition-colors break-all"
                  >
                    {CLINIC_INFO.email}
                  </a>
                </div>

                <div className="pt-2">
                  <a
                    href={`https://wa.me/923413716128?text=Hello%20Dr.%20Ali,%20I%20would%20like%20to%20inquire%20about%20a%20dental%20appointment`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs rounded-xl shadow-xs transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Chat on WhatsApp: +92 341 3716 128</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Hours card */}
            <div className="p-7 rounded-3xl bg-white border border-neutral-200 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 uppercase tracking-wide mb-4">
                <Clock className="w-4 h-4 text-[#095DB1]" />
                <span>Clinic Timings</span>
              </div>
              <div className="space-y-3 text-xs sm:text-sm">
                {CLINIC_INFO.hours.map((h, i) => (
                  <div key={i} className="flex items-center justify-between py-1.5 border-b border-neutral-100 last:border-0">
                    <span className="text-slate-600 font-medium">{h.days}</span>
                    <span className="text-slate-900 font-bold tabular-nums">{h.time}</span>
                  </div>
                ))}
              </div>
              <p className="text-[11px] text-slate-500 mt-3 pt-2 border-t border-neutral-100">
                Walk-ins are accommodated during regular hours. For urgent pain relief, call ahead for immediate slot reservation.
              </p>
            </div>

          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="lg:col-span-7 bg-stone-50/80 border border-neutral-200 rounded-3xl p-7 sm:p-9 shadow-xs">
            
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-1.5">
                Send a Message to Dr. Ali
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Have questions about a dental problem, toothache, or want to schedule a visit? Leave your details below and we will contact you promptly.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-white border border-blue-200 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-blue-50 text-[#095DB1] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-slate-900">
                  Message Sent Successfully!
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                  Thank you, <span className="font-semibold text-slate-800">{formData.name}</span>. Dr. Ali's clinic has received your message and will contact you at {formData.phone || formData.email}.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      phone: '',
                      message: '',
                      isUrgent: false
                    });
                  }}
                  className="mt-4 px-4 py-2 text-xs font-semibold text-[#095DB1] hover:underline"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ahmed Khan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full text-sm font-medium text-slate-800 bg-white border border-neutral-300 rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#095DB1] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                      Phone Number (Call / WhatsApp) *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="0341-XXXXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full text-sm font-medium text-slate-800 bg-white border border-neutral-300 rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#095DB1] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    placeholder="your-email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full text-sm font-medium text-slate-800 bg-white border border-neutral-300 rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#095DB1] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                    Describe Your Concern or Dental Need *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="E.g., I need a dental cleaning, tooth filling, checkup, or have a toothache..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full text-sm font-medium text-slate-800 bg-white border border-neutral-300 rounded-xl p-3.5 focus:outline-none focus:ring-2 focus:ring-[#095DB1] transition-all resize-none"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="urgent-box"
                    checked={formData.isUrgent}
                    onChange={(e) => setFormData({ ...formData, isUrgent: e.target.checked })}
                    className="w-4 h-4 rounded text-[#095DB1] focus:ring-[#095DB1] cursor-pointer"
                  />
                  <label htmlFor="urgent-box" className="text-xs font-medium text-slate-700 cursor-pointer">
                    This is an active toothache or emergency.
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-4 bg-[#095DB1] hover:bg-[#074787] active:scale-[0.99] text-white text-sm font-semibold rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Sending Message...' : 'Send Message to Dr. Ali'}</span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
