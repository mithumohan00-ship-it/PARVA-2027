import React from 'react';
import { Target, Users, Landmark, Contact, Sparkles, Network } from 'lucide-react';

export const WhyParvaSection: React.FC = () => {
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

  return (
    <section className="py-24 bg-[#101A35]/85 relative overflow-hidden backdrop-blur-[1px]">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(214,173,85,0.06),transparent)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#182547] border border-[#D6AD55]/30 text-[#D6AD55] text-xs font-semibold tracking-wider uppercase mb-4">
            <span>Why Exhibit at PARVA</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
            Your Next Admission Opportunity{' '}
            <span className="text-gold-gradient font-normal">Starts Here.</span>
          </h2>

          <p className="text-base text-slate-300 font-light max-w-2xl mx-auto">
            Position your institution at the forefront of Bengaluru North&rsquo;s primary school
            and PU college decision-making corridor.
          </p>
        </div>

        {/* Six Premium Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="bg-[#182547]/80 backdrop-blur-sm border border-white/10 hover:border-[#D6AD55]/60 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group relative overflow-hidden"
              >
                {/* Subtle top gold accent line on hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D6AD55] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#101A35] border border-[#D6AD55]/40 flex items-center justify-center group-hover:border-[#D6AD55] group-hover:bg-[#101A35] transition-all">
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
            );
          })}
        </div>
      </div>
    </section>
  );
};
