import React, { useState } from 'react';
import {
  QrCode,
  Ticket,
  Store,
  Mic2,
  Gift,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

export const VisitorJourney: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const steps = [
    {
      step: '01',
      title: 'Register',
      detail: 'Visitors register online in advance or scan the QR code at the entrance gate.',
      icon: QrCode,
    },
    {
      step: '02',
      title: 'Get Expo Passport',
      detail: 'Receive a physical stamp card and comprehensive exhibition venue map.',
      icon: Ticket,
    },
    {
      step: '03',
      title: 'Visit Stalls',
      detail: 'Explore participating institutions, interact with counselors, and collect stamps.',
      icon: Store,
    },
    {
      step: '04',
      title: 'Join Expert Panel',
      detail: 'Attend educational discussions, learn from experts, and ask questions.',
      icon: Mic2,
    },
    {
      step: '05',
      title: 'Daily Lucky Draw',
      detail: 'Complete your stamp passport and enter the grand daily lucky draw at 7:30 PM.',
      icon: Gift,
    },
  ];

  const total = steps.length;

  const handlePrev = () => {
    setActiveSlide((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % total);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 45) {
      handleNext();
    } else if (distance < -45) {
      handlePrev();
    }
  };

  return (
    <section className="py-24 bg-[#0A1022]/85 relative backdrop-blur-[1px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
            Every Visit{' '}
            <span className="text-gold-gradient font-normal">
              Counts.
            </span>
          </h2>

          <p className="text-base text-slate-300 font-light max-w-2xl mx-auto">
            Our structured &ldquo;Expo Passport&rdquo; mechanism ensures families do not merely
            browse the entrance—they are guided systematically across all exhibition stalls.
          </p>
        </div>

        {/* ========================================================= */}
        {/* DESKTOP & TABLET: Multi-Column Flow (md: and up)           */}
        {/* ========================================================= */}
        <div className="hidden md:block relative mb-12">
          {/* Connecting line on desktop */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-[2px] bg-gradient-to-r from-[#D6AD55]/10 via-[#D6AD55]/50 to-[#D6AD55]/10 -translate-y-12 z-0" />

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {steps.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#101A35] border border-white/10 hover:border-[#D6AD55] rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-gold-glow group flex flex-col justify-between text-center relative"
                >
                  <div>
                    {/* Step Badge */}
                    <div className="w-14 h-14 rounded-2xl bg-[#182547] border-2 border-[#D6AD55]/40 group-hover:border-[#D6AD55] flex items-center justify-center mx-auto mb-5 shadow-sm group-hover:scale-105 transition-all">
                      <Icon className="w-7 h-7 text-[#D6AD55]" />
                    </div>

                    <div className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold text-[#D6AD55] bg-[#182547] border border-[#D6AD55]/30 mb-2">
                      STEP {item.step}
                    </div>

                    <h3 className="font-serif text-lg font-bold text-white mb-2">
                      {item.title}
                    </h3>

                    <p className="text-xs text-slate-300 font-light leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================= */}
        {/* MOBILE VIEW: 3D Stacked Overlapping Cards Slider (< md)   */}
        {/* ========================================================= */}
        <div className="block md:hidden mb-12">
          {/* Stacked Cards Area */}
          <div
            className="relative w-full max-w-[340px] mx-auto h-[380px] flex items-center justify-center touch-pan-y"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {steps.map((item, idx) => {
              const Icon = item.icon;

              let offset = idx - activeSlide;
              if (offset < -Math.floor(total / 2)) {
                offset += total;
              } else if (offset > Math.floor((total - 1) / 2)) {
                offset -= total;
              }

              const isCenter = offset === 0;
              const isLeft = offset === -1;
              const isRight = offset === 1;

              let transform = 'translateX(0) scale(0.8) rotate(0deg)';
              let zIndex = 10;
              let opacity = 0;

              if (isCenter) {
                transform = 'translateX(0) translateY(0) scale(1) rotate(0deg)';
                zIndex = 30;
                opacity = 1;
              } else if (isLeft) {
                transform = 'translateX(-26px) translateY(8px) scale(0.92) rotate(-5deg)';
                zIndex = 20;
                opacity = 0.65;
              } else if (isRight) {
                transform = 'translateX(26px) translateY(8px) scale(0.92) rotate(5deg)';
                zIndex = 20;
                opacity = 0.65;
              } else {
                transform = `translateX(${offset > 0 ? 50 : -50}px) scale(0.75) rotate(0deg)`;
                zIndex = 10;
                opacity = 0;
              }

              return (
                <div
                  key={idx}
                  onClick={() => {
                    if (isLeft) handlePrev();
                    if (isRight) handleNext();
                  }}
                  style={{
                    transform,
                    zIndex,
                    opacity,
                    transition: 'all 0.4s cubic-bezier(0.25, 1, 0.5, 1)',
                  }}
                  className={`absolute inset-0 rounded-3xl p-6 sm:p-7 flex flex-col justify-between text-center select-none cursor-pointer ${
                    isCenter
                      ? 'bg-[#131E3D] border-2 border-[#D6AD55] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.7),0_0_25px_rgba(214,173,85,0.3)]'
                      : 'bg-[#101A35] border border-[#D6AD55]/30 shadow-lg'
                  }`}
                >
                  <div>
                    {/* Step Icon */}
                    <div className="w-16 h-16 rounded-2xl bg-[#182547] border-2 border-[#D6AD55]/50 flex items-center justify-center mx-auto mb-4 shadow-md">
                      <Icon className="w-8 h-8 text-[#D6AD55]" />
                    </div>

                    <div className="inline-block px-3 py-1 rounded-full text-xs font-mono font-bold text-[#D6AD55] bg-[#182547] border border-[#D6AD55]/30 mb-3">
                      PASSPORT STEP {item.step}
                    </div>

                    <h3 className="font-serif text-xl font-bold text-white mb-2 leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-xs text-slate-300 font-light leading-relaxed px-2">
                      {item.detail}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Stack Controls: [<]  ══ • • • • •  [>] */}
          <div className="flex items-center justify-center gap-6 mt-8">
            {/* Prev Button */}
            <button
              type="button"
              onClick={handlePrev}
              className="w-11 h-11 rounded-full bg-[#182547] border border-[#D6AD55]/40 hover:border-[#D6AD55] flex items-center justify-center text-white active:scale-95 transition-all shadow-md hover:shadow-gold-glow"
              aria-label="Previous step"
            >
              <ChevronLeft className="w-5 h-5 text-[#D6AD55]" />
            </button>

            {/* Pagination Dots with Active Pill */}
            <div className="flex items-center gap-1.5">
              {steps.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  type="button"
                  onClick={() => setActiveSlide(dotIdx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeSlide === dotIdx
                      ? 'w-7 bg-[#D6AD55] shadow-[0_0_10px_#D6AD55]'
                      : 'w-2 bg-[#D6AD55]/30 hover:bg-[#D6AD55]/60'
                  }`}
                  aria-label={`Go to step ${dotIdx + 1}`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              type="button"
              onClick={handleNext}
              className="w-11 h-11 rounded-full bg-[#182547] border border-[#D6AD55]/40 hover:border-[#D6AD55] flex items-center justify-center text-white active:scale-95 transition-all shadow-md hover:shadow-gold-glow"
              aria-label="Next step"
            >
              <ChevronRight className="w-5 h-5 text-[#D6AD55]" />
            </button>
          </div>
        </div>

        {/* Supporting Message Callout */}
        <div className="mt-8 bg-gradient-to-r from-[#182547] via-[#101A35] to-[#182547] border border-[#D6AD55]/30 rounded-2xl p-6 sm:p-8 text-center max-w-4xl mx-auto shadow-md">
          <p className="font-serif italic text-base sm:text-lg text-slate-200 mb-2">
            &ldquo;The visitor engagement programme is designed to encourage families to explore
            participating institutions and spend more time discovering educational opportunities.&rdquo;
          </p>
          <p className="text-xs text-slate-400 font-light">
            Every visiting parent receives incentives to meet multiple school counselors, ensuring higher stall discovery rates.
          </p>
        </div>
      </div>
    </section>
  );
};
