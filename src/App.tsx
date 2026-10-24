import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { EventCountdown } from './components/EventCountdown';
import { AboutSection } from './components/AboutSection';
import { WhyParvaSection } from './components/WhyParvaSection';
import { EventProgramme } from './components/EventProgramme';
import { ExpertPanels } from './components/ExpertPanels';
import { MarketingSection } from './components/MarketingSection';
import { VisitorJourney } from './components/VisitorJourney';
import { ExhibitorBenefits } from './components/ExhibitorBenefits';
import { PackagesSection } from './components/PackagesSection';
import { EligibilitySection } from './components/EligibilitySection';
import { BookingTimeline } from './components/BookingTimeline';
import { LocationSection } from './components/LocationSection';
import { BookingForm } from './components/BookingForm';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { LegalModal } from './components/LegalModal';
import { ScrollRotatingLogo } from './components/ScrollRotatingLogo';
import { PackageType } from './types';

export const App: React.FC = () => {
  const [selectedPackage, setSelectedPackage] = useState<PackageType>('Basic');
  const [legalModalState, setLegalModalState] = useState<{
    isOpen: boolean;
    type: 'privacy' | 'terms' | null;
  }>({
    isOpen: false,
    type: null,
  });

  const scrollToBooking = (pkg?: PackageType) => {
    if (pkg) {
      setSelectedPackage(pkg);
    }
    const bookingEl = document.getElementById('booking');
    if (bookingEl) {
      bookingEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const aboutEl = document.getElementById('about');
    if (aboutEl) {
      aboutEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPackages = () => {
    const packagesEl = document.getElementById('packages');
    if (packagesEl) {
      packagesEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#031F51] text-slate-100 flex flex-col font-sans selection:bg-[#1491C2] selection:text-white relative">
      {/* 3D Y-Axis Center Rotating Logo (Constant Low Speed across entire page) */}
      <ScrollRotatingLogo />

      {/* Top Navbar */}
      <Navbar onBookClick={() => scrollToBooking()} />

      <main className="flex-grow relative z-10">
        {/* Hero Section */}
        <HeroSection
          onReserveClick={() => scrollToBooking()}
          onExploreClick={scrollToAbout}
        />

        {/* Dynamic Countdown */}
        <EventCountdown />

        {/* About PARVA & Target Statistics */}
        <AboutSection />

        {/* Why PARVA Feature Cards */}
        <WhyParvaSection />

        {/* Two-Day Event Experience (DRISTI & SRISTI) */}
        <EventProgramme />

        {/* Seven Expert Panel Discussions */}
        <ExpertPanels />

        {/* Planned Marketing & Promotion */}
        <MarketingSection />

        {/* Visitor Engagement Journey (Passport) */}
        <VisitorJourney />

        {/* Exhibitor Benefits */}
        <ExhibitorBenefits onExplorePackages={scrollToPackages} />

        {/* Exhibitor Packages (Basic, Premium, Platinum) */}
        <PackagesSection onSelectPackage={(pkg) => scrollToBooking(pkg)} />

        {/* Who Can Exhibit & Organised by Educators */}
        <EligibilitySection />

        {/* Important Dates Timeline */}
        <BookingTimeline />

        {/* Location & Google Maps */}
        <LocationSection />

        {/* Primary Stall Booking Form */}
        <BookingForm initialPackage={selectedPackage} />

        {/* FAQ Accordion */}
        <FAQSection />

        {/* Contact Organiser Section */}
        <ContactSection onEnquireClick={() => scrollToBooking()} />
      </main>

      {/* Footer */}
      <Footer
        onOpenPrivacy={() => setLegalModalState({ isOpen: true, type: 'privacy' })}
        onOpenTerms={() => setLegalModalState({ isOpen: true, type: 'terms' })}
      />

      {/* Privacy Policy & Terms Modal */}
      <LegalModal
        isOpen={legalModalState.isOpen}
        type={legalModalState.type}
        onClose={() => setLegalModalState({ isOpen: false, type: null })}
      />
    </div>
  );
};

export default App;
