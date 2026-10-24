import React, { useState } from 'react';
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
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

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

  const total = benefits.length;

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
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;

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
                      ? 'bg-[#121481] border-2 border-[#1491C2] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.7),0_0_25px_rgba(20,145,194,0.3)]'
                      : 'bg-[#08255E] border border-[#245DA9]/60 shadow-lg'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-[#031F51] border border-[#245DA9]/60 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-[#1491C2]" />
                      </div>
                      <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-full bg-[#031F51] text-[#1491C2] border border-[#1491C2]/30">
                        0{idx + 1}
                      </span>
                    </div>

                    <span className="text-xs font-bold uppercase tracking-wider text-[#1491C2] block mb-1">
                      {benefit.subtitle}
                    </span>

                    <h3 className="font-serif text-xl font-bold text-white mb-2 leading-snug">
                      {benefit.title}
                    </h3>

                    <p className="text-xs text-slate-300 font-light leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/10 flex items-center text-[11px] text-[#1491C2]">
                    <span>Included with Eligible Packages</span>
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
              className="w-11 h-11 rounded-full bg-[#121481] border border-[#245DA9]/60 hover:border-[#1491C2] flex items-center justify-center text-white active:scale-95 transition-all shadow-md hover:shadow-cyan-glow"
              aria-label="Previous advantage"
            >
              <ChevronLeft className="w-5 h-5 text-[#1491C2]" />
            </button>

            {/* Pagination Dots with Active Pill */}
            <div className="flex items-center gap-1.5">
              {benefits.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  type="button"
                  onClick={() => setActiveSlide(dotIdx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeSlide === dotIdx
                      ? 'w-7 bg-[#1491C2] shadow-[0_0_10px_#1491C2]'
                      : 'w-2 bg-[#245DA9]/50 hover:bg-[#1491C2]/50'
                  }`}
                  aria-label={`Go to slide ${dotIdx + 1}`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              type="button"
              onClick={handleNext}
              className="w-11 h-11 rounded-full bg-[#121481] border border-[#245DA9]/60 hover:border-[#1491C2] flex items-center justify-center text-white active:scale-95 transition-all shadow-md hover:shadow-cyan-glow"
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
