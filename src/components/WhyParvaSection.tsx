import React, { useState } from 'react';
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
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

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

  const total = features.length;

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
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(214,173,85,0.06),transparent)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
            Your Next Admission Opportunity{' '}
            <span className="text-gold-gradient font-normal">
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
                className="bg-[#101A35] backdrop-blur-sm border border-white/10 hover:border-[#D6AD55]/60 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-gold-glow group relative overflow-hidden flex flex-col justify-between"
              >
                {/* Subtle top gold accent line on hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D6AD55] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#182547] border border-[#D6AD55]/30 flex items-center justify-center group-hover:border-[#D6AD55] transition-all">
                      <Icon className="w-6 h-6 text-[#D6AD55] group-hover:scale-110 transition-transform" />
                    </div>
                    <span className="font-serif text-2xl font-bold text-[#D6AD55]/40 group-hover:text-[#D6AD55] transition-colors">
                      {feature.number}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-white mb-3 group-hover:text-[#D6AD55] transition-colors">
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
        {/* MOBILE VIEW: 3D Stacked Overlapping Cards Slider (< md)   */}
        {/* ========================================================= */}
        <div className="block md:hidden">
          {/* Stacked Cards Area */}
          <div
            className="relative w-full max-w-[340px] mx-auto h-[380px] flex items-center justify-center touch-pan-y"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {features.map((feature, idx) => {
              const Icon = feature.icon;

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
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-[#182547] border border-[#D6AD55]/30 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-[#D6AD55]" />
                      </div>
                      <span className="font-serif text-2xl font-bold text-[#D6AD55]">
                        {feature.number}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl font-bold text-white mb-2 leading-snug">
                      {feature.title}
                    </h3>

                    <p className="text-xs text-slate-300 font-light leading-relaxed">
                      {feature.description}
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
              aria-label="Previous advantage"
            >
              <ChevronLeft className="w-5 h-5 text-[#D6AD55]" />
            </button>

            {/* Pagination Dots with Active Pill */}
            <div className="flex items-center gap-1.5">
              {features.map((_, dotIdx) => (
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
              aria-label="Next advantage"
            >
              <ChevronRight className="w-5 h-5 text-[#D6AD55]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
