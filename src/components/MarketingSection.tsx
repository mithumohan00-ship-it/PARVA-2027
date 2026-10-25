import React, { useState } from 'react';
import {
  Tv,
  BookOpen,
  Store,
  Newspaper,
  Gift,
  Trophy,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

export const MarketingSection: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const marketingPillars = [
    {
      title: 'Media Partnership',
      headline: 'Broadcast & News Coverage',
      description:
        'Strategic TV promos, regional news stories, press releases, and live event coverage to ensure widespread awareness across Bengaluru.',
      icon: Tv,
    },
    {
      title: 'Pre-Registration Drive',
      headline: 'Value-Led Parent Outreach',
      description:
        'A comprehensive pre-registration campaign offering parents a free "School Admission Guide 2027–28" to capture verified leads beforehand.',
      icon: BookOpen,
    },
    {
      title: 'Pop-Up Stalls',
      headline: 'Community Activations',
      description:
        'Targeted pop-up information booths located inside high-footfall shopping malls and gated apartment complexes across Bengaluru North.',
      icon: Store,
    },
    {
      title: 'Print & Outdoor',
      headline: 'High-Impact Visibility',
      description:
        'Prominent newspaper inserts, strategic junction hoardings, road-facing banners, and school-gate flyers targeting active residential zones.',
      icon: Newspaper,
    },
    {
      title: 'Daily Lucky Draws',
      headline: 'Engagement Incentive',
      description:
        'Planned daily lucky draws held at 7:30 PM on both days to keep parents and families exploring the exhibition grounds all afternoon.',
      icon: Gift,
    },
    {
      title: 'Student Events',
      headline: 'Family Magnet Competitions',
      description:
        'Inter-school art, quiz, and talent competitions designed to bring students, siblings, and extended families together onto the expo grounds.',
      icon: Trophy,
    },
  ];

  const total = marketingPillars.length;

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
    <section className="py-24 bg-[#0A1022]/85 relative overflow-hidden backdrop-blur-[1px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
            We Bring the Parents.{' '}
            <span className="text-gold-gradient font-normal">
              You Win the Admissions.
            </span>
          </h2>

          <p className="text-base text-slate-300 font-light max-w-2xl mx-auto">
            Our multi-channel promotional roadmap is engineered to drive high-intent,
            decision-making parents right to your exhibition stall.
          </p>
        </div>

        {/* ========================================================= */}
        {/* DESKTOP & TABLET: Regular Multi-Column Grid (md: and up)   */}
        {/* ========================================================= */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8">
          {marketingPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-[#101A35] border border-white/10 hover:border-[#D6AD55]/60 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-gold-glow group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#182547] border border-[#D6AD55]/30 flex items-center justify-center mb-5 group-hover:border-[#D6AD55] transition-colors">
                    <Icon className="w-6 h-6 text-[#D6AD55] group-hover:scale-110 transition-transform" />
                  </div>

                  <span className="text-xs font-bold uppercase tracking-widest text-[#D6AD55] block mb-1">
                    {pillar.title}
                  </span>

                  <h3 className="font-serif text-lg font-bold text-white mb-3 group-hover:text-[#D6AD55] transition-colors">
                    {pillar.headline}
                  </h3>

                  <p className="text-sm text-slate-300 font-light leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* ========================================================= */}
        {/* MOBILE VIEW: 3D Stacked Overlapping Cards Slider (< md)   */}
        {/* ========================================================= */}
        <div className="block md:hidden mb-8">
          {/* Stacked Cards Area */}
          <div
            className="relative w-full max-w-[340px] mx-auto h-[380px] flex items-center justify-center touch-pan-y"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {marketingPillars.map((pillar, idx) => {
              const Icon = pillar.icon;

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
                  className={`absolute inset-0 rounded-3xl p-6 sm:p-7 flex flex-col justify-between select-none cursor-pointer ${
                    isCenter
                      ? 'bg-[#131E3D] border-2 border-[#D6AD55] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.7),0_0_25px_rgba(214,173,85,0.3)]'
                      : 'bg-[#101A35] border border-[#D6AD55]/30 shadow-lg'
                  }`}
                >
                  <div>
                    {/* Card Top Row */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-[#182547] border border-[#D6AD55]/40 flex items-center justify-center shadow-inner">
                        <Icon className="w-6 h-6 text-[#D6AD55]" />
                      </div>
                      <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-full bg-[#182547] text-[#D6AD55] border border-[#D6AD55]/30">
                        0{idx + 1}
                      </span>
                    </div>

                    <span className="text-xs font-bold uppercase tracking-widest text-[#D6AD55] block mb-1">
                      {pillar.title}
                    </span>

                    <h3 className="font-serif text-xl font-bold text-white mb-2 leading-snug">
                      {pillar.headline}
                    </h3>

                    <p className="text-xs text-slate-300 font-light leading-relaxed">
                      {pillar.description}
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
              aria-label="Previous initiative"
            >
              <ChevronLeft className="w-5 h-5 text-[#D6AD55]" />
            </button>

            {/* Pagination Dots with Active Pill */}
            <div className="flex items-center gap-1.5">
              {marketingPillars.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  type="button"
                  onClick={() => setActiveSlide(dotIdx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeSlide === dotIdx
                      ? 'w-7 bg-[#D6AD55] shadow-[0_0_10px_#D6AD55]'
                      : 'w-2 bg-[#D6AD55]/30 hover:bg-[#D6AD55]/60'
                  }`}
                  aria-label={`Go to slide ${dotIdx + 1}`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              type="button"
              onClick={handleNext}
              className="w-11 h-11 rounded-full bg-[#182547] border border-[#D6AD55]/40 hover:border-[#D6AD55] flex items-center justify-center text-white active:scale-95 transition-all shadow-md hover:shadow-gold-glow"
              aria-label="Next initiative"
            >
              <ChevronRight className="w-5 h-5 text-[#D6AD55]" />
            </button>
          </div>
        </div>

        {/* Source Note */}
        <p className="text-center text-xs text-slate-400 max-w-xl mx-auto">
          All promotional channels reflect planned event marketing initiatives leading up to 9–10 January 2027.
        </p>
      </div>
    </section>
  );
};
