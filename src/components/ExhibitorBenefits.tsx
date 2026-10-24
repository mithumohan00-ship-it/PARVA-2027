import React from 'react';
import { Store, Users, Mic2, Tv, BookCheck, Trophy, ArrowRight, ShieldCheck } from 'lucide-react';

interface ExhibitorBenefitsProps {
  onExplorePackages: () => void;
}

export const ExhibitorBenefits: React.FC<ExhibitorBenefitsProps> = ({
  onExplorePackages,
}) => {
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

  return (
    <section id="benefits" className="py-24 bg-[#031F51]/85 relative overflow-hidden backdrop-blur-[1px]">
      {/* Background glow */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-[#1491C2]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121481] border border-[#1491C2]/40 text-[#1491C2] text-xs font-semibold tracking-wider uppercase mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Exhibitor Advantages</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
            More Than a Stall.{' '}
            <span className="bg-gradient-to-r from-white via-cyan-100 to-[#1491C2] bg-clip-text text-transparent font-normal">Leads, Stage & Visibility.</span>
          </h2>

          <p className="text-base text-slate-300 font-light max-w-2xl mx-auto">
            PARVA delivers tangible, multi-dimensional institutional value that extends far beyond physical floor space.
          </p>
        </div>

        {/* 6 Benefit Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
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
