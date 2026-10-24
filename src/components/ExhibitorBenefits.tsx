import React, { useState, useRef } from 'react';
import {
  Store,
  Users,
  Mic2,
  Tv,
  BookCheck,
  Trophy,
  ArrowRight,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

interface ExhibitorBenefitsProps {
  onExplorePackages: () => void;
}

export const ExhibitorBenefits: React.FC<ExhibitorBenefitsProps> = ({
  onExplorePackages,
}) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const benefits = [
    {
      title: 'Branded Stall',
      subtitle: 'Prime Exhibition Space',
      description:
        'A dedicated branded stall structure to showcase your school or PU college facilities, ethos, faculty, and academic curriculum.',
      icon: Store,
    },
    {
      title: 'Parent Lead List',
      subtitle: 'Post-Event Data Access',
      description:
        'Access to registered family details after the event, subject to applicable privacy policies, permissions, and organizer terms.',
      icon: Users,
    },
    {
      title: 'Stage Presence',
      subtitle: 'Panels & Performances',
      description:
        'Opportunities for leadership panel participation and student performance slots on the main stage, depending on the selected package.',
      icon: Mic2,
    },
    {
      title: 'Media Visibility',
      subtitle: 'Omnichannel Exposure',
      description:
        'Promotional mentions through our planned media partnership, TV promos, news coverage, and official event digital channels.',
      icon: Tv,
    },
    {
      title: 'Event Guide Listing',
      subtitle: 'Printed Souvenir Directory',
      description:
        'Featured profile in the printed PARVA event guide distributed to all arriving parents and visiting dignitaries.',
      icon: BookCheck,
    },
    {
      title: 'Best Stall Award',
      subtitle: 'Official Institutional Recognition',
      description:
        'Prestigious recognition and awards ceremony planned during Sunday evening’s grand valedictory session.',
      icon: Trophy,
    },
  ];

  const handleScroll = () => {
    if (sliderRef.current) {
      const scrollLeft = sliderRef.current.scrollLeft;
      const card = sliderRef.current.firstElementChild as HTMLElement | null;
      if (card) {
        const cardWidth = card.offsetWidth + 16;
        const index = Math.round(scrollLeft / cardWidth);
        setActiveSlide(Math.min(Math.max(index, 0), benefits.length - 1));
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
    const next = Math.min(benefits.length - 1, activeSlide + 1);
    scrollToSlide(next);
  };

  return (
    <section id="benefits" className="py-24 bg-[#031F51]/85 relative overflow-hidden backdrop-blur-[1px]">
      {/* Background glow */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-[#1491C2]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121481] border border-[#1491C2]/40 text-[#1491C2] text-xs font-semibold tracking-wider uppercase mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Exhibitor Advantages</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
            More Than a Stall.{' '}
            <span className="bg-gradient-to-r from-white via-cyan-100 to-[#1491C2] bg-clip-text text-transparent font-normal">
              Leads, Stage & Visibility.
            </span>
          </h2>

          <p className="text-base text-slate-300 font-light max-w-2xl mx-auto">
            PARVA delivers tangible, multi-dimensional institutional value that extends far beyond physical floor space.
          </p>
        </div>

        {/* ========================================================= */}
        {/* DESKTOP & TABLET: Regular Multi-Column Grid (md: and up)   */}
        {/* ========================================================= */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <div
                key={idx}
                className="bg-[#121481]/90 border border-[#245DA9]/40 hover:border-[#1491C2] rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-cyan-glow group flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#031F51] border border-[#245DA9]/50 flex items-center justify-center mb-6 group-hover:bg-[#031F51] group-hover:scale-105 transition-all">
                    <Icon className="w-7 h-7 text-[#1491C2]" />
                  </div>

                  <span className="text-xs font-bold uppercase tracking-wider text-[#1491C2] block mb-1">
                    {benefit.subtitle}
                  </span>

                  <h3 className="font-serif text-xl font-bold text-white mb-3">
                    {benefit.title}
                  </h3>

                  <p className="text-sm text-slate-300 font-light leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center text-xs text-[#1491C2]">
                  <span>Included with Eligible Packages</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* ========================================================= */}
        {/* MOBILE VIEW: Touch Swipeable Horizontal Slider (< md)     */}
        {/* ========================================================= */}
        <div className="block md:hidden mb-10">
          {/* Active Counter Header */}
          <div className="flex items-center justify-between px-1 mb-3 text-xs">
            <span className="font-mono text-[#1491C2] font-semibold tracking-wider">
              ADVANTAGE {String(activeSlide + 1).padStart(2, '0')} / {String(benefits.length).padStart(2, '0')}
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
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
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

                    <span className="text-xs font-bold uppercase tracking-wider text-[#1491C2] block mb-1">
                      {benefit.subtitle}
                    </span>

                    <h3 className="font-serif text-lg font-bold text-white mb-2 leading-snug">
                      {benefit.title}
                    </h3>

                    <p className="text-xs text-slate-300 font-light leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-white/10 flex items-center text-[11px] text-[#1491C2]">
                    <span>Included with Eligible Packages</span>
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
              aria-label="Previous advantage"
            >
              <ChevronLeft className="w-5 h-5 text-[#1491C2]" />
            </button>

            {/* Pagination Dots */}
            <div className="flex items-center gap-1.5">
              {benefits.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  type="button"
                  onClick={() => scrollToSlide(dotIdx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeSlide === dotIdx
                      ? 'w-6 bg-[#1491C2] shadow-[0_0_8px_#1491C2]'
                      : 'w-2 bg-[#245DA9]/40 hover:bg-[#245DA9]'
                  }`}
                  aria-label={`Go to advantage ${dotIdx + 1}`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              type="button"
              onClick={handleNext}
              disabled={activeSlide === benefits.length - 1}
              className="w-9 h-9 rounded-full bg-[#121481] border border-[#245DA9]/50 flex items-center justify-center text-white disabled:opacity-30 disabled:cursor-not-allowed hover:border-[#1491C2] active:scale-95 transition-all shadow-sm"
              aria-label="Next advantage"
            >
              <ChevronRight className="w-5 h-5 text-[#1491C2]" />
            </button>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button
            onClick={onExplorePackages}
            className="inline-flex items-center gap-2 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#1491C2] via-[#245DA9] to-[#132CA9] rounded-lg shadow-cyan-glow hover:brightness-110 active:scale-95 transition-all duration-200"
          >
            <span>Explore Exhibitor Packages</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
