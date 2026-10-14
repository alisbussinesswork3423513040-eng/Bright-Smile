import React, { useState, useRef } from 'react';
import { BEFORE_AFTER_CASES } from '../data/dentalData';
import { Sparkles, Calendar, ArrowLeftRight, Columns, Layers } from 'lucide-react';

interface BeforeAfterSectionProps {
  onOpenBooking: () => void;
}

export const BeforeAfterSection: React.FC<BeforeAfterSectionProps> = ({ onOpenBooking }) => {
  const [sliderPosition, setSliderPosition] = useState(50); // percentage 0 to 100
  const [isDragging, setIsDragging] = useState(false);
  const [viewMode, setViewMode] = useState<'slider' | 'sideBySide'>('slider');
  const containerRef = useRef<HTMLDivElement>(null);

  const currentCase = BEFORE_AFTER_CASES[0];

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const clampedX = Math.max(5, Math.min(x, rect.width - 5));
    const percentage = (clampedX / rect.width) * 100;
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  return (
    <section id="results" className="py-20 lg:py-24 bg-white border-b border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold text-[#095DB1] tracking-wider uppercase mb-2">
              Clinical Results
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-3">
              Real Before & After Smile Transformation
            </h2>
            <p className="text-base text-slate-600">
              Authentic clinical photography showing real dental results achieved by Dr. Ali through ultrasonic cleaning, plaque removal, and gentle tooth brightening.
            </p>
          </div>

          {/* View toggle (slider vs side-by-side) */}
          <div className="flex items-center gap-1.5 p-1 bg-neutral-100 rounded-xl">
            <button
              onClick={() => setViewMode('slider')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                viewMode === 'slider'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Slider View</span>
            </button>
            <button
              onClick={() => setViewMode('sideBySide')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                viewMode === 'sideBySide'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Columns className="w-3.5 h-3.5" />
              <span>Side-by-Side</span>
            </button>
          </div>
        </div>

        {/* 2-Column Main Case Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-stone-50/70 border border-neutral-200/90 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm">
          
          {/* Left: Real Photo Presentation */}
          <div className="lg:col-span-7">
            {viewMode === 'slider' ? (
              <div>
                <div className="mb-3 flex items-center justify-between text-xs text-slate-500">
                  <span className="font-semibold text-slate-700">← Before (Prior to Treatment)</span>
                  <span className="font-semibold text-[#095DB1]">After (Clean & Brightened) →</span>
                </div>

                <div
                  ref={containerRef}
                  onMouseDown={() => setIsDragging(true)}
                  onMouseUp={() => setIsDragging(false)}
                  onMouseLeave={() => setIsDragging(false)}
                  onMouseMove={handleMouseMove}
                  onTouchMove={handleTouchMove}
                  className="relative aspect-[4/3] rounded-2xl overflow-hidden select-none cursor-ew-resize border border-neutral-300 shadow-lg bg-neutral-900"
                >
                  {/* After Image: Real macro photography of clean healthy teeth */}
                  <img
                    src="/src/assets/images/dental_smile_after_case_1791999388937.jpg"
                    alt="After dental treatment clean healthy smile"
                    className="absolute inset-0 w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />

                  {/* Before Image: Real macro photography of teeth before treatment */}
                  <div
                    className="absolute inset-0 overflow-hidden"
                    style={{ width: `${sliderPosition}%` }}
                  >
                    <div
                      className="relative w-full h-full"
                      style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%' }}
                    >
                      <img
                        src="/src/assets/images/dental_smile_before_case_1791999390191.jpg"
                        alt="Before dental treatment natural teeth with surface staining"
                        className="absolute inset-0 w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>

                  {/* Vertical Divider Line with handle */}
                  <div
                    className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_12px_rgba(0,0,0,0.6)] z-20 flex items-center justify-center"
                    style={{ left: `${sliderPosition}%` }}
                  >
                    <div className="w-9 h-9 rounded-full bg-white text-slate-800 shadow-xl border border-neutral-200 flex items-center justify-center -ml-[18px] cursor-pointer hover:scale-105 transition-transform">
                      <ArrowLeftRight className="w-4 h-4 text-[#095DB1]" />
                    </div>
                  </div>

                  {/* Corner Badges */}
                  <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-xs text-white text-[11px] font-bold px-3 py-1 rounded-md z-10 shadow-sm">
                    Before
                  </div>
                  <div className="absolute top-3 right-3 bg-[#095DB1]/90 backdrop-blur-xs text-white text-[11px] font-bold px-3 py-1 rounded-md z-10 shadow-sm">
                    After Treatment
                  </div>
                </div>

                {/* Slider Drag Hint & Quick Jump Buttons */}
                <div className="mt-3.5 flex items-center justify-between text-xs text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#095DB1]"></span>
                    <span>Drag slider left or right:</span>
                  </span>
                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={() => setSliderPosition(25)}
                      className="px-2.5 py-1 bg-white border border-neutral-200 rounded text-[11px] hover:bg-neutral-100 cursor-pointer"
                    >
                      25%
                    </button>
                    <button
                      type="button"
                      onClick={() => setSliderPosition(50)}
                      className="px-2.5 py-1 bg-white border border-neutral-200 rounded text-[11px] hover:bg-neutral-100 cursor-pointer font-bold text-[#095DB1]"
                    >
                      50% Split
                    </button>
                    <button
                      type="button"
                      onClick={() => setSliderPosition(75)}
                      className="px-2.5 py-1 bg-white border border-neutral-200 rounded text-[11px] hover:bg-neutral-100 cursor-pointer"
                    >
                      75%
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              /* Side-by-side view */
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <div className="text-xs font-bold text-slate-700 mb-1.5">Before Treatment</div>
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-neutral-300 shadow-sm">
                    <img
                      src="/src/assets/images/dental_smile_before_case_1791999390191.jpg"
                      alt="Before treatment"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-2 left-2 bg-black/70 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                      Before
                    </div>
                  </div>
                </div>

                <div>
                  <div className="text-xs font-bold text-[#095DB1] mb-1.5">After Treatment</div>
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-neutral-300 shadow-sm">
                    <img
                      src="/src/assets/images/dental_smile_after_case_1791999388937.jpg"
                      alt="After treatment"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-2 right-2 bg-[#095DB1] text-white text-[10px] font-bold px-2 py-0.5 rounded">
                      After
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right: Authentic Clinical Notes */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#095DB1] uppercase tracking-wide mb-2">
                <span>{currentCase.patientAge}</span>
                <span aria-hidden="true" className="text-neutral-300">·</span>
                <span>{currentCase.timeline}</span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                {currentCase.treatmentName}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                {currentCase.overview}
              </p>

              {/* Case Attributes */}
              <div className="space-y-3.5 mb-6 text-xs sm:text-sm">
                <div className="p-3.5 rounded-xl bg-white border border-neutral-200/80">
                  <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wide mb-1">
                    Presenting Condition
                  </div>
                  <div className="text-slate-800 font-medium">
                    {currentCase.concern}
                  </div>
                </div>

                {currentCase.shadeShift && (
                  <div className="p-3.5 rounded-xl bg-white border border-neutral-200/80">
                    <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wide mb-1">
                      Enamel Outcome
                    </div>
                    <div className="text-slate-800 font-medium flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-sky-500" />
                      <span>{currentCase.shadeShift}</span>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-lg bg-white border border-neutral-200">
                    <span className="font-semibold text-slate-700 block mb-0.5">Before:</span>
                    <span className="text-slate-600">{currentCase.beforeNotes}</span>
                  </div>
                  <div className="p-3 rounded-lg bg-blue-50/70 border border-blue-100">
                    <span className="font-semibold text-[#095DB1] block mb-0.5">After:</span>
                    <span className="text-slate-900 font-medium">{currentCase.afterNotes}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-4 border-t border-neutral-200/80">
              <button
                onClick={onOpenBooking}
                className="w-full py-3 px-4 bg-[#095DB1] hover:bg-[#074787] active:scale-[0.99] text-white text-xs sm:text-sm font-semibold rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Book a Smile Consultation with Dr. Ali</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
