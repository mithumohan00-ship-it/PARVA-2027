import React from 'react';
import {
  Compass,
  Sparkles,
  GraduationCap,
  Smartphone,
  Rocket,
  Briefcase,
  Users2,
  Crown,
} from 'lucide-react';

export const ExpertPanels: React.FC = () => {
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

  return (
    <section className="py-24 bg-[#031F51]/85 relative backdrop-blur-[1px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121481] border border-[#1491C2]/40 text-[#1491C2] text-xs font-semibold tracking-wider uppercase mb-4">
            <span>Thought Leadership</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
            Conversations That{' '}
            <span className="bg-gradient-to-r from-white via-cyan-100 to-[#1491C2] bg-clip-text text-transparent font-normal">Shape Education.</span>
          </h2>

          <p className="text-base text-slate-300 font-light max-w-2xl mx-auto">
            Seven curated panel discussions addressing the most critical questions on
            the minds of Bengaluru North families.
          </p>
        </div>

        {/* 7 Panels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
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
      </div>
    </section>
  );
};
