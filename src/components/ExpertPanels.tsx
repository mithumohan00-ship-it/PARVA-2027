import React, { useState, useRef } from 'react';
import {
  Compass,
  Sparkles,
  GraduationCap,
  Smartphone,
  Rocket,
  Briefcase,
  Users2,
  Crown,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

export const ExpertPanels: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const panels = [
    {
      number: 1,
      title: 'Choosing the Right School',
      subtitle: 'CBSE, ICSE or State Board?',
      description:
        'A comprehensive breakdown of curriculum philosophies, examination standards, pedagogy, and what fits your child best.',
      icon: Compass,
      day: 'Day 1 · DRISTI',
    },
    {
      number: 2,
      title: 'What Makes a Great School in 2027?',
      subtitle: 'Beyond Grades & Ranks',
      description:
        'Evaluating holistic infrastructure, emotional well-being, experiential learning, and future-readiness in institutional culture.',
      icon: Sparkles,
      day: 'Day 1 · DRISTI',
    },
    {
      number: 3,
      title: 'After Class 10',
      subtitle: 'Science, Commerce or Arts?',
      description:
        'Demystifying subject combinations, competitive exam alignment, and strategic PU college decisions for high-school graduates.',
      icon: GraduationCap,
      day: 'Day 1 · DRISTI',
    },
    {
      number: 4,
      title: 'Parenting in the Screen Age',
      subtitle: 'Nurturing Balance & Focus',
      description:
        'Practical approaches to screen-time management, cyber safety, digital literacy, and fostering meaningful family communication.',
      icon: Smartphone,
      day: 'Day 1 · DRISTI',
    },
    {
      number: 5,
      title: 'From Classroom to Company',
      subtitle: 'Student Entrepreneurs',
      description:
        'Inspiring case studies of young innovators turning ideas into impact, problem-solving, and entrepreneurial mindsets in schools.',
      icon: Rocket,
      day: 'Day 2 · SRISTI',
    },
    {
      number: 6,
      title: 'Careers of Tomorrow',
      subtitle: 'Preparing for the Next Decade',
      description:
        'How AI, sustainability, creative industries, and interdisciplinary fields are redefining global career opportunities.',
      icon: Briefcase,
      day: 'Day 2 · SRISTI',
    },
    {
      number: 7,
      title: "Guests' Roundtable",
      subtitle: 'The Future of Education',
      description:
        'Eminent academic leaders, school trustees, and thought leaders converse on institutional vision and regional educational benchmarks.',
      icon: Users2,
      day: 'Day 2 · SRISTI',
    },
  ];

  const totalSlides = panels.length + 1; // 7 panels + 1 Platinum opportunity card

  const handleScroll = () => {
    if (sliderRef.current) {
      const scrollLeft = sliderRef.current.scrollLeft;
      const card = sliderRef.current.firstElementChild as HTMLElement | null;
      if (card) {
        const cardWidth = card.offsetWidth + 16;
        const index = Math.round(scrollLeft / cardWidth);
        setActiveSlide(Math.min(Math.max(index, 0), totalSlides - 1));
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
    const next = Math.min(totalSlides - 1, activeSlide + 1);
    scrollToSlide(next);
  };

  return (
    <section className="py-24 bg-[#031F51]/85 relative backdrop-blur-[1px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121481] border border-[#1491C2]/40 text-[#1491C2] text-xs font-semibold tracking-wider uppercase mb-4">
            <span>Thought Leadership</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
            Conversations That{' '}
            <span className="bg-gradient-to-r from-white via-cyan-100 to-[#1491C2] bg-clip-text text-transparent font-normal">
              Shape Education.
            </span>
          </h2>

          <p className="text-base text-slate-300 font-light max-w-2xl mx-auto">
            Seven curated panel discussions addressing the most critical questions on
            the minds of Bengaluru North families.
          </p>
        </div>

        {/* ========================================================= */}
        {/* DESKTOP & TABLET: Regular Multi-Column Grid (md: and up)   */}
        {/* ========================================================= */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {panels.map((panel) => {
            const Icon = panel.icon;
            return (
              <div
                key={panel.number}
                className="bg-[#121481]/90 border border-[#245DA9]/40 hover:border-[#1491C2]/70 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-cyan-glow group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="w-9 h-9 rounded-full bg-[#031F51] border border-[#1491C2]/50 text-[#1491C2] font-serif font-bold text-sm flex items-center justify-center">
                      #{panel.number}
                    </span>
                    <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded bg-[#031F51]/80 text-[#1491C2]">
                      {panel.day}
                    </span>
                  </div>

                  <div className="w-12 h-12 rounded-xl bg-[#031F51] border border-[#245DA9]/50 flex items-center justify-center mb-4 group-hover:border-[#1491C2] transition-colors">
                    <Icon className="w-6 h-6 text-[#1491C2]" />
                  </div>

                  <h3 className="font-serif text-xl font-bold text-white mb-1 group-hover:text-[#1491C2] transition-colors">
                    {panel.title}
                  </h3>

                  <p className="text-xs font-semibold text-[#1491C2] tracking-wide mb-3">
                    {panel.subtitle}
                  </p>

                  <p className="text-sm text-slate-300 font-light leading-relaxed">
                    {panel.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Interactive Q&A Session</span>
                  <span className="text-white/60">Open to All Attendees</span>
                </div>
              </div>
            );
          })}

          {/* Platinum Sponsor Opportunity Card */}
          <div className="bg-gradient-to-br from-[#121481] to-[#031F51] border-2 border-[#1491C2] rounded-2xl p-7 flex flex-col justify-between shadow-cyan-glow md:col-span-2 lg:col-span-2">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1491C2]/20 text-[#1491C2] text-xs font-bold uppercase tracking-wider mb-4 border border-[#1491C2]/40">
                <Crown className="w-3.5 h-3.5" />
                <span>Exhibitor Advantage</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-white mb-2">
                Join the Expert Stage as a Platinum Partner
              </h3>
              <p className="text-sm text-slate-200 leading-relaxed font-light mb-4">
                Platinum exhibitor partners are eligible for an esteemed seat on an expert
                panel, subject to the organiser&rsquo;s thematic arrangements. Position your
                school principal, founder, or academic leader as an authority in front of
                hundreds of attentive parents.
              </p>
            </div>
            <div className="flex items-center justify-between text-xs text-[#1491C2] pt-4 border-t border-white/10 font-medium">
              <span>Limited to Platinum Exhibitor Packages</span>
              <a
                href="#packages"
                className="underline hover:text-white transition-colors"
              >
                View Platinum Details →
              </a>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* MOBILE VIEW: Touch Swipeable Horizontal Slider (< md)     */}
        {/* ========================================================= */}
        <div className="block md:hidden mb-8">
          {/* Active Counter Header */}
          <div className="flex items-center justify-between px-1 mb-3 text-xs">
            <span className="font-mono text-[#1491C2] font-semibold tracking-wider">
              {activeSlide < panels.length
                ? `PANEL 0${activeSlide + 1} / 07`
                : 'PLATINUM STAGE PRIVILEGE'}
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
            {/* 7 Panel Cards */}
            {panels.map((panel) => {
              const Icon = panel.icon;
              return (
                <div
                  key={panel.number}
                  className="w-[85vw] max-w-[320px] shrink-0 snap-center bg-[#121481]/95 border border-[#245DA9]/50 rounded-2xl p-6 flex flex-col justify-between shadow-xl"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="w-8 h-8 rounded-full bg-[#031F51] border border-[#1491C2]/50 text-[#1491C2] font-serif font-bold text-xs flex items-center justify-center">
                        #{panel.number}
                      </span>
                      <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-[#031F51] text-[#1491C2]">
                        {panel.day}
                      </span>
                    </div>

                    <div className="w-11 h-11 rounded-xl bg-[#031F51] border border-[#245DA9]/50 flex items-center justify-center mb-3.5">
                      <Icon className="w-5 h-5 text-[#1491C2]" />
                    </div>

                    <h3 className="font-serif text-lg font-bold text-white mb-1 leading-snug">
                      {panel.title}
                    </h3>

                    <p className="text-xs font-semibold text-[#1491C2] tracking-wide mb-2.5">
                      {panel.subtitle}
                    </p>

                    <p className="text-xs text-slate-300 font-light leading-relaxed">
                      {panel.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
                    <span>Interactive Q&A</span>
                    <span className="text-white/70">Open to All</span>
                  </div>
                </div>
              );
            })}

            {/* 8th Card: Platinum Partner Advantage */}
            <div className="w-[85vw] max-w-[320px] shrink-0 snap-center bg-gradient-to-br from-[#121481] to-[#031F51] border-2 border-[#1491C2] rounded-2xl p-6 flex flex-col justify-between shadow-cyan-glow">
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#1491C2]/20 text-[#1491C2] text-[10px] font-bold uppercase tracking-wider mb-3.5 border border-[#1491C2]/40">
                  <Crown className="w-3 h-3" />
                  <span>Exhibitor Advantage</span>
                </div>

                <h3 className="font-serif text-lg font-bold text-white mb-2 leading-snug">
                  Join the Expert Stage as a Platinum Partner
                </h3>

                <p className="text-xs text-slate-200 font-light leading-relaxed mb-3">
                  Platinum exhibitor partners are eligible for an esteemed seat on an expert
                  panel. Position your school principal or leader in front of hundreds of attentive parents.
                </p>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-[#1491C2] font-semibold">
                <span>Platinum Tier</span>
                <a href="#packages" className="underline hover:text-white transition-colors">
                  View Packages →
                </a>
              </div>
            </div>
          </div>

          {/* Mobile Slider Controls: Arrows & Dot Pagination */}
          <div className="flex items-center justify-between pt-2 px-1">
            {/* Prev Button */}
            <button
              type="button"
              onClick={handlePrev}
              disabled={activeSlide === 0}
              className="w-9 h-9 rounded-full bg-[#121481] border border-[#245DA9]/50 flex items-center justify-center text-white disabled:opacity-30 disabled:cursor-not-allowed hover:border-[#1491C2] active:scale-95 transition-all shadow-sm"
              aria-label="Previous panel"
            >
              <ChevronLeft className="w-5 h-5 text-[#1491C2]" />
            </button>

            {/* Pagination Dots */}
            <div className="flex items-center gap-1.5">
              {Array.from({ length: totalSlides }).map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  type="button"
                  onClick={() => scrollToSlide(dotIdx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeSlide === dotIdx
                      ? 'w-6 bg-[#1491C2] shadow-[0_0_8px_#1491C2]'
                      : 'w-2 bg-[#245DA9]/40 hover:bg-[#245DA9]'
                  }`}
                  aria-label={`Go to slide ${dotIdx + 1}`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              type="button"
              onClick={handleNext}
              disabled={activeSlide === totalSlides - 1}
              className="w-9 h-9 rounded-full bg-[#121481] border border-[#245DA9]/50 flex items-center justify-center text-white disabled:opacity-30 disabled:cursor-not-allowed hover:border-[#1491C2] active:scale-95 transition-all shadow-sm"
              aria-label="Next panel"
            >
              <ChevronRight className="w-5 h-5 text-[#1491C2]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
