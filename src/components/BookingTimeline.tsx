import React from 'react';
import { Sparkles, CheckCircle2 } from 'lucide-react';

export const BookingTimeline: React.FC = () => {
  const milestones = [
    {
      date: '15 Nov 2026',
      title: 'Early-Bird Deadline',
      description: 'Special booking advantages and priority placement for early confirmations.',
      highlight: true,
    },
    {
      date: '15 Dec 2026',
      title: 'Final Booking Deadline',
      description: 'Registration closes for printed event guide directory inclusion.',
      highlight: false,
    },
    {
      date: '20 Dec 2026',
      title: 'Stall Allotment',
      description: 'Official allocation of booth numbers and floor layout confirmations.',
      highlight: false,
    },
    {
      date: '2 Jan 2027',
      title: 'Exhibitor Briefing',
      description: 'Orientation session covering logistics, rules, and student stage coordination.',
      highlight: false,
    },
    {
      date: '8 Jan 2027',
      title: 'Stall Setup',
      description: 'Exhibitor access to the venue grounds for branding installation and technical setup.',
      highlight: false,
    },
    {
      date: '9–10 Jan 2027',
      title: 'PARVA 2027 Expo',
      description: 'Grand 2nd Edition open to the public from 11:00 AM to 8:00 PM both days.',
      highlight: true,
    },
  ];

  return (
    <section className="py-24 bg-[#101A35]/85 relative overflow-hidden backdrop-blur-[1px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
            Key Dates for{' '}
            <span className="text-gold-gradient font-normal">Exhibitors</span>
          </h2>

          <p className="text-base text-slate-300 font-light max-w-2xl mx-auto">
            Plan your institutional calendar ahead to secure preferred stall locations and maximum promotional reach.
          </p>
        </div>

        {/* Horizontal Timeline Container */}
        <div className="relative">
          {/* Timeline Center Connecting Line on large screens */}
          <div className="hidden lg:block absolute top-12 left-10 right-10 h-1 bg-gradient-to-r from-[#D6AD55]/20 via-[#D6AD55] to-[#D6AD55]/20 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 relative z-10">
            {milestones.map((item, idx) => (
              <div
                key={idx}
                className={`rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between text-left group ${
                  item.highlight
                    ? 'bg-gradient-to-b from-[#182547] to-[#101A35] border-2 border-[#D6AD55] shadow-gold-sm hover:-translate-y-1'
                    : 'bg-[#182547]/80 border border-white/10 hover:border-[#D6AD55]/50 hover:-translate-y-1'
                }`}
              >
                <div>
                  {/* Milestone Node */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-10 h-10 rounded-xl bg-[#101A35] border border-[#D6AD55] text-[#D6AD55] flex items-center justify-center font-bold text-xs shadow-sm group-hover:scale-105 transition-transform">
                      {idx + 1}
                    </span>
                    {item.highlight && (
                      <Sparkles className="w-4 h-4 text-[#D6AD55] animate-pulse" />
                    )}
                  </div>

                  <span className="text-xs font-bold uppercase tracking-wider text-[#D6AD55] block mb-1">
                    {item.date}
                  </span>

                  <h3 className="font-serif text-base font-bold text-white mb-2 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-300 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-white/5 flex items-center gap-1.5 text-[11px] text-slate-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D6AD55]" />
                  <span>Confirmed Date</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimer / Notice */}
        <div className="mt-12 text-center text-xs text-slate-400">
          <p>
            * These represent the published official milestones. Any operational schedule updates will be communicated directly to confirmed exhibitors.
          </p>
        </div>
      </div>
    </section>
  );
};
