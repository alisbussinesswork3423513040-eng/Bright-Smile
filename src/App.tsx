import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { KeyDifferentiators } from './components/KeyDifferentiators';
import { TreatmentsSection } from './components/TreatmentsSection';
import { BeforeAfterSection } from './components/BeforeAfterSection';
import { DoctorsSection } from './components/DoctorsSection';
import { FAQSection } from './components/FAQSection';
import { LocationContactSection } from './components/LocationContactSection';
import { Footer } from './components/Footer';
import { AppointmentModal } from './components/AppointmentModal';
import { TreatmentDetailModal } from './components/TreatmentDetailModal';
import { Treatment } from './types/dental';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingPrefill, setBookingPrefill] = useState<{
    treatmentId?: string;
    doctorId?: string;
    date?: string;
  } | undefined>(undefined);

  const [selectedDetailTreatment, setSelectedDetailTreatment] = useState<Treatment | null>(null);

  const handleOpenBooking = (prefill?: {
    treatmentId?: string;
    doctorId?: string;
    date?: string;
  }) => {
    setBookingPrefill(prefill);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setBookingPrefill(undefined);
  };

  const handleOpenDetailModal = (treatment: Treatment) => {
    setSelectedDetailTreatment(treatment);
  };

  const handleCloseDetailModal = () => {
    setSelectedDetailTreatment(null);
  };

  const handleBookFromDetail = (treatmentId: string) => {
    handleOpenBooking({ treatmentId });
  };

  return (
    <div className="min-h-screen bg-[#fdfdfc] text-slate-900 font-sans antialiased selection:bg-[#095DB1] selection:text-white">
      {/* Top Bar Navigation */}
      <Header onOpenBooking={() => handleOpenBooking()} />

      <main>
        {/* Hero Section with Clinic Visual & Instant Booking Bar */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* 4 Foundational Practice Pillars */}
        <KeyDifferentiators />

        {/* Single Comprehensive Dental Service (No Price Mentioned) */}
        <TreatmentsSection 
          onSelectTreatment={handleOpenDetailModal}
          onBookTreatment={(treatmentId) => handleOpenBooking({ treatmentId })}
        />

        {/* Real Before & After Smile Transformation Slider */}
        <BeforeAfterSection onOpenBooking={() => handleOpenBooking()} />

        {/* Meet Doctor Ali (BDS, RDS) */}
        <DoctorsSection 
          onBookWithDoctor={(doctorId) => handleOpenBooking({ doctorId })}
        />

        {/* Frequently Asked Questions */}
        <FAQSection />

        {/* Location (Matli Main Road, 34th Street, Hyderabad) & Contact Form */}
        <LocationContactSection />
      </main>

      {/* Quiet Footer */}
      <Footer onOpenBooking={() => handleOpenBooking()} />

      {/* Appointment Booking Modal */}
      <AppointmentModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        prefill={bookingPrefill}
      />

      {/* Procedure Overview Modal */}
      <TreatmentDetailModal
        treatment={selectedDetailTreatment}
        onClose={handleCloseDetailModal}
        onBook={handleBookFromDetail}
      />
    </div>
  );
}
