import React, { useState, useRef } from 'react';
import {
  Target,
  Users,
  Landmark,
  Contact,
  Sparkles,
  Network,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

export const WhyParvaSection: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const features = [
    {
      number: '01',
      title: 'Targeted Audience',
      description:
        'Connect with parents actively exploring school admissions and PU college options for the 2027–28 academic year in Bengaluru North.',
      icon: Target,
    },
    {
      number: '02',
      title: 'Parent Engagement',
      description:
        'Create opportunities for direct, meaningful, face-to-face conversations with high-intent families interested in your institution.',
      icon: Users,
    },
    {
      number: '03',
      title: 'Institutional Visibility',
      description:
        "Showcase your school's strengths, educational philosophy, world-class facilities, faculty expertise, and unique academic offerings.",
      icon: Landmark,
    },
    {
      number: '04',
      title: 'Parent Lead Opportunities',
      description:
        "Eligible exhibitors can receive registered visitor details after the event, subject to the organiser's data-sharing and privacy policies.",
      icon: Contact,
    },
    {
      number: '05',
      title: 'Stage & Media Exposure',
      description:
        'Depending on the selected package, access exclusive opportunities for expert panel participation, student performances, and promotional media visibility.',
      icon: Sparkles,
    },
    {
      number: '06',
      title: 'Educational Networking',
      description:
        'Build valuable relationships with fellow educators, academic leaders, community stakeholders, and forward-thinking families.',
      icon: Network,
    },
  ];

  const handleScroll = () => {
    if (sliderRef.current) {
      const scrollLeft = sliderRef.current.scrollLeft;
      const card = sliderRef.current.firstElementChild as HTMLElement | null;
      if (card) {
        const cardWidth = card.offsetWidth + 16;
        const index = Math.round(scrollLeft / cardWidth);
        setActiveSlide(Math.min(Math.max(index, 0), features.length - 1));
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
    const next = Math.min(features.length - 1, activeSlide + 1);
    scrollToSlide(next);
  };

  return (
    <section className="py-24 bg-[#031F51]/85 relative overflow-hidden backdrop-blur-[1px]">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(20,145,194,0.08),transparent)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121481] border border-[#1491C2]/40 text-[#1491C2] text-xs font-semibold tracking-wider uppercase mb-4">
            <span>Why Exhibit at PARVA</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
            Your Next Admission Opportunity{' '}
            <span className="bg-gradient-to-r from-white via-cyan-100 to-[#1491C2] bg-clip-text text-transparent font-normal">
              Starts Here.
            </span>
          </h2>

          <p className="text-base text-slate-300 font-light max-w-2xl mx-auto">
            Position your institution at the forefront of Bengaluru North&rsquo;s primary school
            and PU college decision-making corridor.
          </p>
        </div>

        {/* ========================================================= */}
        {/* DESKTOP & TABLET: Regular Multi-Column Grid (md: and up)   */}
        {/* ========================================================= */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="bg-[#121481]/90 backdrop-blur-sm border border-[#245DA9]/40 hover:border-[#1491C2]/80 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-cyan-glow group relative overflow-hidden flex flex-col justify-between"
              >
                {/* Subtle top cyan accent line on hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#1491C2] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#031F51] border border-[#245DA9]/50 flex items-center justify-center group-hover:border-[#1491C2] transition-all">
                      <Icon className="w-6 h-6 text-[#1491C2] group-hover:scale-110 transition-transform" />
                    </div>
                    <span className="font-serif text-2xl font-bold text-[#1491C2]/40 group-hover:text-[#1491C2] transition-colors">
                      {feature.number}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-white mb-3 group-hover:text-[#1491C2] transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed font-light">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* ========================================================= */}
        {/* MOBILE VIEW: Touch Swipeable Horizontal Slider (< md)     */}
        {/* ========================================================= */}
        <div className="block md:hidden">
          {/* Active Counter Header */}
          <div className="flex items-center justify-between px-1 mb-3 text-xs">
            <span className="font-mono text-[#1491C2] font-semibold tracking-wider">
              OPPORTUNITY {features[activeSlide]?.number || '01'} / 06
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
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  className="w-[85vw] max-w-[320px] shrink-0 snap-center bg-[#121481]/95 border border-[#245DA9]/50 rounded-2xl p-6 flex flex-col justify-between shadow-xl relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#1491C2] to-transparent" />

                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-[#031F51] border border-[#245DA9]/50 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-[#1491C2]" />
                      </div>
                      <span className="font-serif text-xl font-bold text-[#1491C2]">
                        {feature.number}
                      </span>
                    </div>

                    <h3 className="font-serif text-lg font-bold text-white mb-2 leading-snug">
                      {feature.title}
                    </h3>

                    <p className="text-xs text-slate-300 font-light leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
                    <span>Exhibitor Value</span>
                    <span className="text-[#1491C2]">Admissions 2027–28</span>
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
              aria-label="Previous opportunity"
            >
              <ChevronLeft className="w-5 h-5 text-[#1491C2]" />
            </button>

            {/* Pagination Dots */}
            <div className="flex items-center gap-1.5">
              {features.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  type="button"
                  onClick={() => scrollToSlide(dotIdx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeSlide === dotIdx
                      ? 'w-6 bg-[#1491C2] shadow-[0_0_8px_#1491C2]'
                      : 'w-2 bg-[#245DA9]/40 hover:bg-[#245DA9]'
                  }`}
                  aria-label={`Go to opportunity ${dotIdx + 1}`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              type="button"
              onClick={handleNext}
              disabled={activeSlide === features.length - 1}
              className="w-9 h-9 rounded-full bg-[#121481] border border-[#245DA9]/50 flex items-center justify-center text-white disabled:opacity-30 disabled:cursor-not-allowed hover:border-[#1491C2] active:scale-95 transition-all shadow-sm"
              aria-label="Next opportunity"
            >
              <ChevronRight className="w-5 h-5 text-[#1491C2]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
