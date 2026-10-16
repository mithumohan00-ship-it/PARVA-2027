import React from 'react';
import { School, Users, MessagesSquare, CalendarDays, Info, Award } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const stats = [
    {
      value: '60+',
      label: 'Schools & PU Colleges',
      sublabel: 'Target Exhibitors',
      icon: School,
    },
    {
      value: '10,000+',
      label: 'Families Expected',
      sublabel: 'Projected Footfall',
      icon: Users,
    },
    {
      value: '7',
      label: 'Expert Panel Discussions',
      sublabel: 'Across 2 Days',
      icon: MessagesSquare,
    },
    {
      value: '2 DAYS',
      label: 'Education & Engagement',
      sublabel: '9–10 January 2027',
      icon: CalendarDays,
    },
  ];

  return (
    <section id="about" className="py-24 bg-[#0A1022] relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#182547]/40 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#182547] border border-[#D6AD55]/30 text-[#D6AD55] text-xs font-semibold tracking-wider uppercase mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>About The Expo</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
            More Than an Expo.{' '}
            <span className="block text-gold-gradient font-normal mt-1">
              A Destination for Educational Choices.
            </span>
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#D6AD55] to-transparent mx-auto mb-8" />

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light mb-4">
            PARVA is the Bengaluru North Educational Expo organised by{' '}
            <strong className="text-white font-medium">Bhadri&rsquo;s Academy</strong>. Its
            second edition brings schools, PU colleges, parents, and students together on
            one platform to explore educational opportunities and make informed decisions
            for the 2027–28 academic year.
          </p>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light">
            PARVA aims to provide educational institutions with visibility, meaningful
            conversations with parents, and opportunities to connect with prospective families.
          </p>
        </div>

        {/* Four Target / Expected Statistics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="bg-[#101A35] border border-[#D6AD55]/30 rounded-2xl p-6 text-center shadow-lg relative group hover:border-[#D6AD55] transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-[#182547] border border-[#D6AD55]/40 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-[#D6AD55]" />
                </div>
                <div className="font-serif text-4xl sm:text-5xl font-bold text-[#D6AD55] mb-2 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-white mb-1">
                  {stat.label}
                </div>
                <div className="text-xs uppercase tracking-wider text-slate-400">
                  {stat.sublabel}
                </div>
              </div>
            );
          })}
        </div>

        {/* Clear Notice clarifying projected targets */}
        <div className="max-w-2xl mx-auto flex items-center justify-center gap-2 text-xs text-slate-400 bg-[#101A35]/60 border border-white/10 rounded-lg py-2.5 px-4 text-center">
          <Info className="w-4 h-4 text-[#D6AD55] shrink-0" />
          <span>
            These figures represent projected event targets and expected participation based on our marketing campaign for the 2nd Edition.
          </span>
        </div>
      </div>
    </section>
  );
};
