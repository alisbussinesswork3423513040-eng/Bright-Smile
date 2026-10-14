import React from 'react';
import { Heart, Sparkles, User, MapPin } from 'lucide-react';

export const KeyDifferentiators: React.FC = () => {
  const pillars = [
    {
      number: '01',
      title: 'Gentle, Pain-Free Dentistry',
      tagline: 'We prioritize your peace of mind and comfort.',
      description: 'Dr. Ali uses modern, gentle techniques and careful local numbing so every checkup, cleaning, filling, or extraction is completely comfortable without stress.',
      icon: Heart
    },
    {
      number: '02',
      title: 'Dedicated 1-on-1 Doctor Care',
      tagline: 'Every patient is treated directly by Dr. Ali.',
      description: 'You are never passed around between unfamiliar staff. Dr. Ali personally examines your teeth, explains your diagnosis, and performs all treatments with undivided attention.',
      icon: User
    },
    {
      number: '03',
      title: 'All-In-One Comprehensive Care',
      tagline: 'From preventative cleanings to smile restorations.',
      description: 'Whether you need plaque and tartar cleaning, cosmetic tooth whitening, tooth-colored composite fillings, or urgent toothache relief, all treatments are available under one roof.',
      icon: Sparkles
    },
    {
      number: '04',
      title: 'Convenient Hyderabad Location',
      tagline: 'Matli Main Road, 34th Street.',
      description: 'Centrally located with easy road access, on-site parking, and flexible hours from 10:00 AM to 9:00 PM Monday through Saturday to accommodate working individuals and families.',
      icon: MapPin
    }
  ];

  return (
    <section className="py-20 bg-white border-b border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="text-xs font-semibold text-[#095DB1] tracking-wider uppercase mb-2">
            The Bright Smile Standard
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            A dental clinic built around patient comfort & trust.
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            We believe dental visits should be calm, transparent, and respectful. Here is what you can always expect when you visit Dr. Ali's clinic on Matli Main Road, Hyderabad.
          </p>
        </div>

        {/* 4 Pillars Grid with Editorial Numbering */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={pillar.number}
                className="p-6 rounded-2xl bg-neutral-50/70 border border-neutral-200/80 hover:bg-white hover:border-[#095DB1]/30 hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-sm font-bold text-[#095DB1] tabular-nums">
                      {pillar.number}.
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white border border-neutral-200 flex items-center justify-center text-[#095DB1] group-hover:bg-[#095DB1] group-hover:text-white transition-colors shadow-xs">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-[#095DB1] transition-colors">
                    {pillar.title}
                  </h3>
                  <div className="text-xs font-medium text-[#095DB1] mb-3">
                    {pillar.tagline}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
