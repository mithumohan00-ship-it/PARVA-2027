import React from 'react';
import { Clock, Eye, Sparkles, CheckCircle2, AlertCircle } from 'lucide-react';

export const EventProgramme: React.FC = () => {
  return (
    <section id="schedule" className="py-24 bg-[#0A1022]/85 relative backdrop-blur-[1px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
            The Two-Day Event{' '}
            <span className="text-gold-gradient font-normal">Experience</span>
          </h2>

          <p className="text-base text-slate-300 font-light max-w-2xl mx-auto">
            A thoughtfully curated dual-theme itinerary designed to engage parents, empower students, and maximise footfall across both days.
          </p>
        </div>

        {/* Two Large Cards: Day 1 DRISTI (Dark Navy) & Day 2 SRISTI (Soft Light Grey) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mb-8">
          {/* Card 1: Day 1 - PARVA DRISTI */}
          <div className="bg-[#101A35] border-2 border-[#D6AD55]/50 rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden flex flex-col justify-between">
            {/* Top Badge */}
            <div>
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <span className="px-3.5 py-1 rounded-full bg-[#182547] border border-[#D6AD55]/40 text-[#D6AD55] text-xs font-bold tracking-widest uppercase">
                  Day 1 · Saturday, 9 January 2027
                </span>
                <div className="flex items-center gap-1.5 text-xs text-slate-300 font-medium">
                  <Clock className="w-3.5 h-3.5 text-[#D6AD55]" />
                  <span>11:00 AM – 8:00 PM</span>
                </div>
              </div>

              {/* Title & Theme */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-2xl bg-[#182547] border border-[#D6AD55] flex items-center justify-center shrink-0 shadow-gold-sm">
                  <Eye className="w-7 h-7 text-[#D6AD55]" />
                </div>
                <div>
                  <h3 className="font-serif text-3xl font-bold text-white tracking-wide">
                    PARVA DRISTI
                  </h3>
                  <p className="text-sm font-semibold text-[#D6AD55] uppercase tracking-wider">
                    Theme: Vision & Guidance
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed mb-8">
                The first day focuses on educational guidance, informed school selection, and
                navigating modern parenting challenges in the digital age.
              </p>

              {/* Planned Activities */}
              <div className="border-t border-white/10 pt-6">
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#D6AD55] mb-4">
                  Planned Programme Highlights:
                </h4>
                <ul className="space-y-3.5">
                  {[
                    'Inauguration by distinguished educational dignitaries',
                    'Expert panel discussions on choosing the right school',
                    'Curriculum evaluation: CBSE, ICSE, and Karnataka State Board',
                    'Guidance on choosing a PU stream (Science, Commerce, Arts) after Class 10',
                    'Parenting in the screen age & balanced digital habits',
                  ].map((activity, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-[#D6AD55] shrink-0 mt-0.5" />
                      <span>{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
              <span>Audience: Parents & Prospective Students</span>
              <span className="text-[#D6AD55] font-medium">Daily Lucky Draw at 7:30 PM</span>
            </div>
          </div>

          {/* Card 2: Day 2 - PARVA SRISTI (Light Grey with Gold & Royal Navy Accents) */}
          <div className="bg-[#F3F4F7] text-[#101A35] border-2 border-[#D6AD55] rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden flex flex-col justify-between">
            {/* Top Badge */}
            <div>
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <span className="px-3.5 py-1 rounded-full bg-[#182547] text-[#D6AD55] text-xs font-bold tracking-widest uppercase shadow-sm">
                  Day 2 · Sunday, 10 January 2027
                </span>
                <div className="flex items-center gap-1.5 text-xs text-[#182547] font-semibold">
                  <Clock className="w-3.5 h-3.5 text-[#B88E38]" />
                  <span>11:00 AM – 8:00 PM</span>
                </div>
              </div>

              {/* Title & Theme */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-2xl bg-[#101A35] border border-[#D6AD55] flex items-center justify-center shrink-0 shadow-md">
                  <Sparkles className="w-7 h-7 text-[#D6AD55]" />
                </div>
                <div>
                  <h3 className="font-serif text-3xl font-bold text-[#101A35] tracking-wide">
                    PARVA SRISTI
                  </h3>
                  <p className="text-sm font-semibold text-[#B88E38] uppercase tracking-wider">
                    Theme: Creation & Talent
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 font-normal leading-relaxed mb-8">
                The second day celebrates student creativity, talent, entrepreneurship, and
                emerging career pathways for future-ready learners.
              </p>

              {/* Planned Activities */}
              <div className="border-t border-slate-300 pt-6">
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#182547] mb-4">
                  Planned Programme Highlights:
                </h4>
                <ul className="space-y-3.5">
                  {[
                    'Inter-school student competitions & showcases',
                    'Talent performances by exhibiting institutions',
                    'Classroom to company: Student entrepreneurship discussions',
                    'Careers of tomorrow panel & emerging industry outlook',
                    "Distinguished guests' roundtable on the future of education",
                    'Grand valedictory ceremony & Best Stall awards',
                  ].map((activity, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-[#182547] font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[#B88E38] shrink-0 mt-0.5" />
                      <span>{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-300 flex items-center justify-between text-xs text-slate-600">
              <span>Audience: Whole Families, Educators & Youth</span>
              <span className="text-[#101A35] font-bold">Valedictory & Awards</span>
            </div>
          </div>
        </div>

        {/* Clear Notice clarifying planned highlights */}
        <div className="max-w-2xl mx-auto flex items-center justify-center gap-2 text-xs text-slate-400 text-center">
          <AlertCircle className="w-4 h-4 text-[#D6AD55] shrink-0" />
          <span>
            Activities are presented as planned programme highlights. Detailed time slots and official participant guidelines will be shared during the Exhibitor Briefing on 2 January 2027.
          </span>
        </div>
      </div>
    </section>
  );
};
