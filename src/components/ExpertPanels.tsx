import React, { useState } from 'react';
import {
  Compass,
  Sparkles,
  GraduationCap,
  Smartphone,
  Rocket,
  Briefcase,
  Users2,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

export const ExpertPanels: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

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

  const total = panels.length + 1; // 7 panels + 1 Platinum opportunity card

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
    <section id="schedule" className="py-24 bg-[#0A1022]/85 relative overflow-hidden backdrop-blur-[1px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
            Conversations That{' '}
            <span className="text-gold-gradient font-normal">
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
                className="bg-[#101A35] border border-white/10 hover:border-[#D6AD55]/60 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-gold-glow group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="w-9 h-9 rounded-full bg-[#182547] border border-[#D6AD55]/30 text-[#D6AD55] font-serif font-bold text-sm flex items-center justify-center">
                      #{panel.number}
                    </span>
                    <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded bg-[#182547] text-[#D6AD55]">
                      {panel.day}
                    </span>
                  </div>

                  <div className="w-12 h-12 rounded-xl bg-[#182547] border border-[#D6AD55]/20 flex items-center justify-center mb-4 group-hover:border-[#D6AD55]/60 transition-colors">
                    <Icon className="w-6 h-6 text-[#D6AD55]" />
                  </div>

                  <h3 className="font-serif text-xl font-bold text-white mb-1 group-hover:text-[#D6AD55] transition-colors">
                    {panel.title}
                  </h3>

                  <p className="text-xs font-semibold text-[#D6AD55] tracking-wide mb-3">
                    {panel.subtitle}
                  </p>

                  <p className="text-sm text-slate-300 font-light leading-relaxed">
                    {panel.description}
                  </p>
                </div>
              </div>
            );
          })}

          {/* Platinum Sponsor Opportunity Card */}
          <div className="bg-gradient-to-br from-[#182547] to-[#101A35] border-2 border-[#D6AD55] rounded-2xl p-7 flex flex-col justify-between shadow-gold-glow md:col-span-2 lg:col-span-2">
            <div>
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
            <div className="flex items-center justify-between text-xs text-[#D6AD55] pt-4 border-t border-white/10 font-medium">
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
        {/* MOBILE VIEW: 3D Stacked Overlapping Cards Slider (< md)   */}
        {/* ========================================================= */}
        <div className="block md:hidden mb-8">
          {/* Stacked Cards Area */}
          <div
            className="relative w-full max-w-[340px] mx-auto h-[390px] flex items-center justify-center touch-pan-y"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {/* 7 Panel Cards */}
            {panels.map((panel, idx) => {
              const Icon = panel.icon;

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
                  key={panel.number}
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
                    {/* Top Row */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="w-9 h-9 rounded-full bg-[#182547] border border-[#D6AD55]/40 text-[#D6AD55] font-serif font-bold text-xs flex items-center justify-center">
                        #{panel.number}
                      </span>
                      <span className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded bg-[#182547] text-[#D6AD55]">
                        {panel.day}
                      </span>
                    </div>

                    <div className="w-12 h-12 rounded-xl bg-[#182547] border border-[#D6AD55]/30 flex items-center justify-center mb-3">
                      <Icon className="w-6 h-6 text-[#D6AD55]" />
                    </div>

                    <h3 className="font-serif text-lg font-bold text-white mb-1 leading-snug">
                      {panel.title}
                    </h3>

                    <p className="text-xs font-semibold text-[#D6AD55] tracking-wide mb-2">
                      {panel.subtitle}
                    </p>

                    <p className="text-xs text-slate-300 font-light leading-relaxed">
                      {panel.description}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* 8th Card: Platinum Partner Advantage */}
            {(() => {
              const idx = panels.length;
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
                  key="platinum-card"
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
                      ? 'bg-gradient-to-br from-[#182547] to-[#101A35] border-2 border-[#D6AD55] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.7),0_0_25px_rgba(214,173,85,0.35)]'
                      : 'bg-[#101A35] border border-[#D6AD55]/30 shadow-lg'
                  }`}
                >
                  <div>
                    <h3 className="font-serif text-xl font-bold text-white mb-2 leading-snug">
                      Join the Expert Stage as a Platinum Partner
                    </h3>

                    <p className="text-xs text-slate-200 font-light leading-relaxed mb-4">
                      Platinum exhibitor partners are eligible for an esteemed seat on an expert
                      panel. Position your school principal or leader in front of hundreds of attentive parents.
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-[#D6AD55] font-semibold">
                    <span>Platinum Tier</span>
                    <a href="#packages" className="underline hover:text-white transition-colors">
                      View Packages →
                    </a>
                  </div>
                </div>
              );
            })()}
          </div>

          {/* Bottom Stack Controls: [<]  ══ • • • • •  [>] */}
          <div className="flex items-center justify-center gap-6 mt-8">
            {/* Prev Button */}
            <button
              type="button"
              onClick={handlePrev}
              className="w-11 h-11 rounded-full bg-[#182547] border border-[#D6AD55]/40 hover:border-[#D6AD55] flex items-center justify-center text-white active:scale-95 transition-all shadow-md hover:shadow-gold-glow"
              aria-label="Previous panel"
            >
              <ChevronLeft className="w-5 h-5 text-[#D6AD55]" />
            </button>

            {/* Pagination Dots with Active Pill */}
            <div className="flex items-center gap-1.5">
              {Array.from({ length: total }).map((_, dotIdx) => (
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
              aria-label="Next panel"
            >
              <ChevronRight className="w-5 h-5 text-[#D6AD55]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
