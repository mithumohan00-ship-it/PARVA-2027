import React from 'react';
import { Calendar, Sparkles, CheckCircle2 } from 'lucide-react';

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
      description: 'Exhibitor access to MEI Ground for branding installation and technical setup.',
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
    <section className="py-24 bg-[#031F51]/85 relative overflow-hidden backdrop-blur-[1px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121481] border border-[#1491C2]/40 text-[#1491C2] text-xs font-semibold tracking-wider uppercase mb-4">
            <Calendar className="w-3.5 h-3.5" />
            <span>Important Milestones</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
            Key Dates for{' '}
            <span className="bg-gradient-to-r from-white via-cyan-100 to-[#1491C2] bg-clip-text text-transparent font-normal">Exhibitors</span>
          </h2>

          <p className="text-base text-slate-300 font-light max-w-2xl mx-auto">
            Plan your institutional calendar ahead to secure preferred stall locations and maximum promotional reach.
          </p>
        </div>

        {/* Horizontal Timeline Container */}
        <div className="relative">
          {/* Timeline Center Connecting Line on large screens */}
          <div className="hidden lg:block absolute top-12 left-10 right-10 h-1 bg-gradient-to-r from-[#1491C2]/20 via-[#1491C2] to-[#1491C2]/20 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 relative z-10">
            {milestones.map((item, idx) => (
              <div
                key={idx}
                className={`rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between text-left group ${
                  item.highlight
                    ? 'bg-gradient-to-b from-[#121481] to-[#031F51] border-2 border-[#1491C2] shadow-cyan-glow hover:-translate-y-1'
                    : 'bg-[#121481]/80 border border-[#245DA9]/40 hover:border-[#1491C2]/60 hover:-translate-y-1'
                }`}
              >
                <div>
                  {/* Milestone Node */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-10 h-10 rounded-xl bg-[#031F51] border border-[#1491C2] text-[#1491C2] flex items-center justify-center font-bold text-xs shadow-sm group-hover:scale-105 transition-transform">
                      {idx + 1}
                    </span>
                    {item.highlight && (
                      <Sparkles className="w-4 h-4 text-[#1491C2] animate-pulse" />
                    )}
                  </div>

                  <span className="text-xs font-bold uppercase tracking-wider text-[#1491C2] block mb-1">
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
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#1491C2]" />
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
