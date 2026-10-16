import React from 'react';
import { Tv, BookOpen, Store, Newspaper, Gift, Trophy, Megaphone } from 'lucide-react';

export const MarketingSection: React.FC = () => {
  const marketingPillars = [
    {
      title: 'Media Partnership',
      headline: 'Broadcast & News Coverage',
      description:
        'Strategic TV promos, regional news stories, press releases, and live event coverage to ensure widespread awareness across Bengaluru.',
      icon: Tv,
    },
    {
      title: 'Pre-Registration Drive',
      headline: 'Value-Led Parent Outreach',
      description:
        'A comprehensive pre-registration campaign offering parents a free "School Admission Guide 2027–28" to capture verified leads beforehand.',
      icon: BookOpen,
    },
    {
      title: 'Pop-Up Stalls',
      headline: 'Community Activations',
      description:
        'Targeted pop-up information booths located inside high-footfall shopping malls and gated apartment complexes across Bengaluru North.',
      icon: Store,
    },
    {
      title: 'Print & Outdoor',
      headline: 'High-Impact Visibility',
      description:
        'Prominent newspaper inserts, strategic junction hoardings, road-facing banners, and school-gate flyers targeting active residential zones.',
      icon: Newspaper,
    },
    {
      title: 'Daily Lucky Draws',
      headline: 'Engagement Incentive',
      description:
        'Planned daily lucky draws held at 7:30 PM on both days to keep parents and families exploring the exhibition grounds all afternoon.',
      icon: Gift,
    },
    {
      title: 'Student Events',
      headline: 'Family Magnet Competitions',
      description:
        'Inter-school art, quiz, and talent competitions designed to bring students, siblings, and extended families together onto the expo grounds.',
      icon: Trophy,
    },
  ];

  return (
    <section className="py-24 bg-[#0A1022] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#182547] border border-[#D6AD55]/30 text-[#D6AD55] text-xs font-semibold tracking-wider uppercase mb-4">
            <Megaphone className="w-3.5 h-3.5" />
            <span>Planned Promotion Campaign</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
            We Bring the Parents.{' '}
            <span className="text-gold-gradient font-normal">You Win the Admissions.</span>
          </h2>

          <p className="text-base text-slate-300 font-light max-w-2xl mx-auto">
            Our multi-channel promotional roadmap is engineered to drive high-intent,
            decision-making parents right to your exhibition stall.
          </p>
        </div>

        {/* Six Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8">
          {marketingPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-[#101A35] border border-white/10 hover:border-[#D6AD55]/50 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#182547] border border-[#D6AD55]/40 flex items-center justify-center mb-5 group-hover:border-[#D6AD55] transition-colors">
                    <Icon className="w-6 h-6 text-[#D6AD55] group-hover:scale-110 transition-transform" />
                  </div>

                  <span className="text-xs font-bold uppercase tracking-widest text-[#D6AD55] block mb-1">
                    {pillar.title}
                  </span>

                  <h3 className="font-serif text-lg font-bold text-white mb-3">
                    {pillar.headline}
                  </h3>

                  <p className="text-sm text-slate-300 font-light leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
                  <span>Planned Initiative</span>
                  <span className="text-[#D6AD55]/70">Bengaluru North</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Source Note */}
        <p className="text-center text-xs text-slate-400 max-w-xl mx-auto">
          All promotional channels reflect planned event marketing initiatives leading up to 9–10 January 2027.
        </p>
      </div>
    </section>
  );
};
