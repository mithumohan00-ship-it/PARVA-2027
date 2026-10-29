import React from 'react';
import { School, GraduationCap, Building2, AlertTriangle, History } from 'lucide-react';

export const EligibilitySection: React.FC = () => {
  return (
    <section className="py-24 bg-[#0A1022]/85 relative overflow-hidden backdrop-blur-[1px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
            An Exclusive Platform for{' '}
            <span className="text-gold-gradient font-normal">Educational Institutions.</span>
          </h2>

          <p className="text-base text-slate-300 font-light max-w-2xl mx-auto">
            PARVA welcomes schools and PU colleges interested in connecting with families
            exploring educational options for the 2027–28 academic year.
          </p>
        </div>

        {/* Three Eligible Categories Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {/* Schools */}
          <div className="bg-[#101A35] border border-[#D6AD55]/30 rounded-2xl p-8 text-center hover:border-[#D6AD55] transition-all group">
            <div className="w-16 h-16 rounded-2xl bg-[#182547] border border-[#D6AD55]/40 flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform">
              <School className="w-8 h-8 text-[#D6AD55]" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-white mb-3">
              Schools
            </h3>
            <p className="text-sm text-slate-300 font-light leading-relaxed">
              Showcase your institution to parents actively exploring preschool, primary,
              middle, and secondary school admission opportunities across Bengaluru North.
            </p>
          </div>

          {/* PU Colleges */}
          <div className="bg-[#101A35] border border-[#D6AD55]/30 rounded-2xl p-8 text-center hover:border-[#D6AD55] transition-all group">
            <div className="w-16 h-16 rounded-2xl bg-[#182547] border border-[#D6AD55]/40 flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform">
              <GraduationCap className="w-8 h-8 text-[#D6AD55]" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-white mb-3">
              PU Colleges
            </h3>
            <p className="text-sm text-slate-300 font-light leading-relaxed">
              Connect directly with students and families evaluating post-Class-10 educational
              pathways, integrated coaching streams, and vocational specialisations.
            </p>
          </div>

          {/* Educational Institutions */}
          <div className="bg-[#101A35] border border-[#D6AD55]/30 rounded-2xl p-8 text-center hover:border-[#D6AD55] transition-all group">
            <div className="w-16 h-16 rounded-2xl bg-[#182547] border border-[#D6AD55]/40 flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform">
              <Building2 className="w-8 h-8 text-[#D6AD55]" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-white mb-3">
              Educational Institutions
            </h3>
            <p className="text-sm text-slate-300 font-light leading-relaxed">
              Present your comprehensive academic offerings, campus infrastructure, sports
              academies, and institutional strengths in an authentic learning expo.
            </p>
          </div>
        </div>

        {/* Strict Exclusion Notice */}
        <div className="bg-[#182547]/90 border-l-4 border-[#D6AD55] rounded-xl p-6 sm:p-7 max-w-4xl mx-auto mb-16 shadow-lg">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-[#101A35] border border-[#D6AD55]/40 flex items-center justify-center shrink-0 mt-0.5">
              <AlertTriangle className="w-5 h-5 text-[#D6AD55]" />
            </div>
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-1">
                Strict Eligibility Restriction:
              </h4>
              <p className="text-sm sm:text-base text-slate-200 font-light leading-relaxed">
                PARVA exhibitor participation is restricted to{' '}
                <strong className="text-white font-semibold">schools and PU colleges</strong>.
                Coaching centres, tuition classes, robotics companies, and ed-tech companies
                are <span className="text-[#D6AD55] font-semibold underline underline-offset-4">not eligible</span> to book exhibition stalls. This ensures families encounter a distraction-free environment dedicated purely to institutional choices.
              </p>
            </div>
          </div>
        </div>

        {/* Secondary Section: Organised by Educators */}
        <div className="bg-[#101A35] border border-[#D6AD55]/30 rounded-3xl p-8 sm:p-12 max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
            <div className="w-20 h-20 rounded-2xl bg-[#182547] border-2 border-[#D6AD55] flex items-center justify-center shrink-0 shadow-gold-sm">
              <History className="w-10 h-10 text-[#D6AD55]" />
            </div>

            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D6AD55] mb-2">
                <span>Legacy & Commitment</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-3">
                Organised by Educators: Bhadri&rsquo;s Academy
              </h3>
              <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
                PARVA is conceived and managed by educators who work closely with Bengaluru North
                families every single day. The successful 1st edition was held in Bengaluru North
                in January 2026. This second edition in 2027 expands the platform to welcome
                more than 60 schools and PU colleges across the region.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
