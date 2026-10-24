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
    <section id="about" className="py-24 bg-[#031F51]/85 relative overflow-hidden backdrop-blur-[1px]">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#245DA9]/20 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#121481] border border-[#1491C2]/40 text-[#1491C2] text-xs font-semibold tracking-wider uppercase mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>About The Expo</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
            More Than an Expo.{' '}
            <span className="block bg-gradient-to-r from-white via-cyan-100 to-[#1491C2] bg-clip-text text-transparent font-normal mt-1">
              A Destination for Educational Choices.
            </span>
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#1491C2] to-transparent mx-auto mb-8" />

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="bg-[#121481] border border-[#245DA9]/40 rounded-2xl p-6 text-center shadow-lg relative group hover:border-[#1491C2] transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-[#031F51] border border-[#245DA9]/50 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-[#1491C2]" />
                </div>
                <div className="font-serif text-4xl sm:text-5xl font-bold text-[#1491C2] mb-2 tracking-tight">
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

        {/* Authentic Student & Parent Feature Card */}
        <div className="bg-[#031F51] border border-[#245DA9]/50 rounded-3xl overflow-hidden shadow-2xl mb-8 grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-5 h-72 sm:h-96 lg:h-full min-h-[340px] relative overflow-hidden bg-[#121481]">
            <img
              src="/student-primary-doodles.jpg"
              alt="Aspiring young student with big educational dreams"
              className="w-full h-full object-cover object-top filter contrast-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#031F51] via-transparent to-transparent lg:hidden" />
          </div>

          <div className="lg:col-span-7 p-8 sm:p-12 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121481] text-[#1491C2] text-xs font-semibold uppercase tracking-wider border border-[#1491C2]/40">
              <span>Bengaluru North Admission Corridor</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-snug">
              Position Your Campus at the Very Heart of Admission Season
            </h3>

            <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
              Every January, thousands of parents across Bagalagunte, Jalahalli, Hesaraghatta Road,
              Yelahanka, and Dasarahalli actively evaluate school and PU college admissions.
              PARVA unifies this decision-making corridor on a single ground.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs sm:text-sm text-slate-200">
              <div className="flex items-start gap-2.5">
                <div className="w-2 h-2 rounded-full bg-[#1491C2] mt-1.5 shrink-0" />
                <span>Meaningful face-to-face counselor conversations</span>
              </div>
              <div className="flex items-start gap-2.5">
                <div className="w-2 h-2 rounded-full bg-[#1491C2] mt-1.5 shrink-0" />
                <span>Direct engagement with admission-seeking parents</span>
              </div>
              <div className="flex items-start gap-2.5">
                <div className="w-2 h-2 rounded-full bg-[#1491C2] mt-1.5 shrink-0" />
                <span>Spot registration & campus tour bookings</span>
              </div>
              <div className="flex items-start gap-2.5">
                <div className="w-2 h-2 rounded-full bg-[#1491C2] mt-1.5 shrink-0" />
                <span>Zero distraction from test-prep companies</span>
              </div>
            </div>
          </div>
        </div>

        {/* Clear Notice clarifying projected targets */}
        <div className="max-w-2xl mx-auto flex items-center justify-center gap-2 text-xs text-slate-400 bg-[#121481]/60 border border-[#245DA9]/40 rounded-lg py-2.5 px-4 text-center">
          <Info className="w-4 h-4 text-[#1491C2] shrink-0" />
          <span>
            These figures represent projected event targets and expected participation based on our marketing campaign for the 2nd Edition.
          </span>
        </div>
      </div>
    </section>
  );
};
