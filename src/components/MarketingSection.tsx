import React, { useState, useRef } from 'react';
import {
  Tv,
  BookOpen,
  Store,
  Newspaper,
  Gift,
  Trophy,
  Megaphone,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

export const MarketingSection: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

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

  const handleScroll = () => {
    if (sliderRef.current) {
      const scrollLeft = sliderRef.current.scrollLeft;
      const card = sliderRef.current.firstElementChild as HTMLElement | null;
      if (card) {
        const cardWidth = card.offsetWidth + 16; // card width + gap (16px)
        const index = Math.round(scrollLeft / cardWidth);
        setActiveSlide(Math.min(Math.max(index, 0), marketingPillars.length - 1));
      }
    }
  };

  const scrollToSlide = (index: number) => {
    if (sliderRef.current) {
      const card = sliderRef.current.firstElementChild as HTMLElement | null;
      if (card) {
        const cardWidth = card.offsetWidth + 16;
        sliderRef.current.scrollTo({
          left: index * cardWidth,
          behavior: 'smooth',
        });
        setActiveSlide(index);
      }
    }
  };

  const handlePrev = () => {
    const prev = Math.max(0, activeSlide - 1);
    scrollToSlide(prev);
  };

  const handleNext = () => {
    const next = Math.min(marketingPillars.length - 1, activeSlide + 1);
    scrollToSlide(next);
  };

  return (
    <section className="py-24 bg-[#031F51]/85 relative overflow-hidden backdrop-blur-[1px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121481] border border-[#1491C2]/40 text-[#1491C2] text-xs font-semibold tracking-wider uppercase mb-4">
            <Megaphone className="w-3.5 h-3.5" />
            <span>Planned Promotion Campaign</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
            We Bring the Parents.{' '}
            <span className="bg-gradient-to-r from-white via-cyan-100 to-[#1491C2] bg-clip-text text-transparent font-normal">
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
                className="bg-[#121481]/90 border border-[#245DA9]/40 hover:border-[#1491C2]/70 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-cyan-glow group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#031F51] border border-[#245DA9]/50 flex items-center justify-center mb-5 group-hover:border-[#1491C2] transition-colors">
                    <Icon className="w-6 h-6 text-[#1491C2] group-hover:scale-110 transition-transform" />
                  </div>

                  <span className="text-xs font-bold uppercase tracking-widest text-[#1491C2] block mb-1">
                    {pillar.title}
                  </span>

                  <h3 className="font-serif text-lg font-bold text-white mb-3">
                    {pillar.headline}
                  </h3>

                  <p className="text-sm text-slate-300 font-light leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
                  <span>Planned Initiative</span>
                  <span className="text-[#1491C2]/80">Bengaluru North</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* ========================================================= */}
        {/* MOBILE VIEW: Touch Swipeable Horizontal Slider (< md)     */}
        {/* ========================================================= */}
        <div className="block md:hidden mb-8">
          {/* Active Counter Header */}
          <div className="flex items-center justify-between px-1 mb-3 text-xs">
            <span className="font-mono text-[#1491C2] font-semibold tracking-wider">
              INITIATIVE {String(activeSlide + 1).padStart(2, '0')} / {String(marketingPillars.length).padStart(2, '0')}
            </span>
            <span className="text-slate-400 flex items-center gap-1">
              Swipe to explore →
            </span>
          </div>

          {/* Swipeable Cards Container */}
          <div
            ref={sliderRef}
            onScroll={handleScroll}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-4 pt-1 -mx-4 px-4 scroll-smooth"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            {marketingPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="w-[85vw] max-w-[320px] shrink-0 snap-center bg-[#121481]/95 border border-[#245DA9]/50 rounded-2xl p-6 flex flex-col justify-between shadow-xl"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-[#031F51] border border-[#245DA9]/50 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-[#1491C2]" />
                      </div>
                      <span className="text-[11px] font-mono font-bold text-[#1491C2] px-2 py-0.5 rounded bg-[#031F51] border border-[#1491C2]/30">
                        0{idx + 1}
                      </span>
                    </div>

                    <span className="text-xs font-bold uppercase tracking-widest text-[#1491C2] block mb-1">
                      {pillar.title}
                    </span>

                    <h3 className="font-serif text-lg font-bold text-white mb-2 leading-snug">
                      {pillar.headline}
                    </h3>

                    <p className="text-xs text-slate-300 font-light leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
                    <span>Planned Campaign</span>
                    <span className="text-[#1491C2]/90 font-medium">Bengaluru North</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile Slider Controls: Arrows & Dot Pagination */}
          <div className="flex items-center justify-between pt-2 px-1">
            {/* Prev Button */}
            <button
              type="button"
              onClick={handlePrev}
              disabled={activeSlide === 0}
              className="w-9 h-9 rounded-full bg-[#121481] border border-[#245DA9]/50 flex items-center justify-center text-white disabled:opacity-30 disabled:cursor-not-allowed hover:border-[#1491C2] active:scale-95 transition-all shadow-sm"
              aria-label="Previous initiative"
            >
              <ChevronLeft className="w-5 h-5 text-[#1491C2]" />
            </button>

            {/* Pagination Dots */}
            <div className="flex items-center gap-1.5">
              {marketingPillars.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  type="button"
                  onClick={() => scrollToSlide(dotIdx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeSlide === dotIdx
                      ? 'w-6 bg-[#1491C2] shadow-[0_0_8px_#1491C2]'
                      : 'w-2 bg-[#245DA9]/40 hover:bg-[#245DA9]'
                  }`}
                  aria-label={`Go to initiative ${dotIdx + 1}`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              type="button"
              onClick={handleNext}
              disabled={activeSlide === marketingPillars.length - 1}
              className="w-9 h-9 rounded-full bg-[#121481] border border-[#245DA9]/50 flex items-center justify-center text-white disabled:opacity-30 disabled:cursor-not-allowed hover:border-[#1491C2] active:scale-95 transition-all shadow-sm"
              aria-label="Next initiative"
            >
              <ChevronRight className="w-5 h-5 text-[#1491C2]" />
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
