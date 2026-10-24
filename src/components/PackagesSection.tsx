import React from 'react';
import { Check, Sparkles, Crown, ArrowRight, Clock, HelpCircle } from 'lucide-react';
import { PackageType } from '../types';

interface PackagesSectionProps {
  onSelectPackage: (pkg: PackageType) => void;
}

export const PackagesSection: React.FC<PackagesSectionProps> = ({ onSelectPackage }) => {
  return (
    <section id="packages" className="py-24 bg-[#031F51]/85 relative backdrop-blur-[1px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121481] border border-[#1491C2]/40 text-[#1491C2] text-xs font-semibold tracking-wider uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Exhibitor Packages</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
            Choose Your{' '}
            <span className="bg-gradient-to-r from-white via-cyan-100 to-[#1491C2] bg-clip-text text-transparent font-normal">Exhibition Presence</span>
          </h2>

          <p className="text-base text-slate-300 font-light max-w-2xl mx-auto mb-6">
            Tailored packages designed to match your institutional recruitment goals,
            brand stature, and stage presence.
          </p>

          {/* Early-Bird Announcement & Rate Clarification */}
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 p-3 px-6 rounded-2xl bg-[#121481] border border-[#1491C2]/50 shadow-md">
            <div className="flex items-center gap-2 text-xs font-bold text-[#1491C2] uppercase tracking-wider">
              <Clock className="w-4 h-4 text-[#1491C2]" />
              <span>Early-Bird Discount: Confirmed by 15 November 2026</span>
            </div>
            <span className="hidden sm:inline text-white/30">|</span>
            <span className="text-xs text-slate-300 font-medium tracking-wide">
              Package Rates Available on Request
            </span>
          </div>
        </div>

        {/* Three Pricing / Package Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-12">
          {/* PACKAGE 1: BASIC (Clean Light Background with Navy Accents) */}
          <div className="bg-[#F8FAFC] text-[#031F51] border-2 border-slate-200 rounded-3xl p-8 shadow-xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:border-[#245DA9]">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-[#031F51]/10 text-[#031F51]">
                  Essential Entry
                </span>
                <span className="text-xs font-semibold text-slate-500">Tier 1</span>
              </div>

              <h3 className="font-serif text-3xl font-bold text-[#031F51] mb-1">
                BASIC
              </h3>

              <div className="font-serif italic text-lg font-medium text-[#245DA9] mb-6">
                &ldquo;Be Seen&rdquo;
              </div>

              <div className="py-4 border-y border-slate-200 mb-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-1">
                  Investment
                </span>
                <span className="text-2xl font-bold text-[#031F51]">
                  Rates on Request
                </span>
                <span className="block text-xs text-slate-500 mt-1">
                  Early-bird applicable before 15 Nov 2026
                </span>
              </div>

              <div className="space-y-3.5 mb-8">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                  Included Benefits:
                </span>
                <div className="flex items-start gap-3 text-sm text-[#031F51] font-medium">
                  <div className="w-5 h-5 rounded-full bg-[#031F51] text-[#1491C2] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>Standard stall with branded institution name board</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-[#031F51] font-medium">
                  <div className="w-5 h-5 rounded-full bg-[#031F51] text-[#1491C2] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>Official listing in the printed PARVA event guide</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-[#031F51] font-medium">
                  <div className="w-5 h-5 rounded-full bg-[#031F51] text-[#1491C2] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>Access to verified parent lead list after the event</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => onSelectPackage('Basic')}
              className="w-full py-3.5 px-6 rounded-xl font-bold text-xs uppercase tracking-wider bg-[#031F51] text-white hover:bg-[#121481] active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <span>Enquire About Basic</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* PACKAGE 2: PREMIUM (Clean White with Royal Blue Accents) */}
          <div className="bg-[#FFFFFF] text-[#031F51] border-2 border-[#245DA9] rounded-3xl p-8 shadow-2xl flex flex-col justify-between relative transition-all duration-300 hover:-translate-y-1 hover:border-[#1491C2]">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#245DA9] text-white text-[11px] font-bold uppercase tracking-wider shadow-sm">
              Most Popular Choice
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-[#245DA9]/15 text-[#245DA9]">
                  Enhanced Exposure
                </span>
                <span className="text-xs font-semibold text-slate-500">Tier 2</span>
              </div>

              <h3 className="font-serif text-3xl font-bold text-[#031F51] mb-1">
                PREMIUM
              </h3>

              <div className="font-serif italic text-lg font-medium text-[#132CA9] mb-6">
                &ldquo;Stand Out&rdquo;
              </div>

              <div className="py-4 border-y border-slate-200 mb-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-1">
                  Investment
                </span>
                <span className="text-2xl font-bold text-[#031F51]">
                  Rates on Request
                </span>
                <span className="block text-xs text-slate-500 mt-1">
                  Includes prime stall placement
                </span>
              </div>

              <div className="space-y-3.5 mb-8">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                  Included Benefits:
                </span>
                <div className="flex items-start gap-3 text-sm text-[#031F51] font-semibold">
                  <div className="w-5 h-5 rounded-full bg-[#245DA9] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>Corner or front stall allocation for superior footfall</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-[#031F51] font-semibold">
                  <div className="w-5 h-5 rounded-full bg-[#245DA9] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>Student performance or talent showcase slot on stage</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-[#031F51] font-semibold">
                  <div className="w-5 h-5 rounded-full bg-[#245DA9] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>Dedicated institutional feature across official social media</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-slate-600 font-medium">
                  <div className="w-5 h-5 rounded-full bg-slate-200 text-[#031F51] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[2]" />
                  </div>
                  <span>All Basic benefits (guide listing, name board, parent list)</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => onSelectPackage('Premium')}
              className="w-full py-3.5 px-6 rounded-xl font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-[#245DA9] to-[#132CA9] text-white hover:brightness-110 active:scale-95 shadow-md transition-all flex items-center justify-center gap-2"
            >
              <span>Enquire About Premium</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* PACKAGE 3: PLATINUM (Deep Indigo/Navy with Cyan Accents - Visually Prominent) */}
          <div className="bg-gradient-to-b from-[#121481] to-[#031F51] text-white border-2 border-[#1491C2] rounded-3xl p-8 shadow-cyan-glow flex flex-col justify-between relative transition-all duration-300 hover:-translate-y-1 lg:scale-105 lg:-my-2">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#031F51] border border-[#1491C2] text-[#1491C2] text-[11px] font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-md">
              <Crown className="w-3.5 h-3.5" />
              <span>Flagship Partnership</span>
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-[#1491C2]/20 text-[#1491C2] border border-[#1491C2]/40">
                  Maximum Authority
                </span>
                <span className="text-xs font-semibold text-slate-400">Tier 3</span>
              </div>

              <h3 className="font-serif text-3xl font-bold text-white mb-1 flex items-center gap-2">
                <span>PLATINUM</span>
                <Crown className="w-5 h-5 text-[#1491C2]" />
              </h3>

              <div className="font-serif italic text-lg font-normal bg-gradient-to-r from-white via-cyan-100 to-[#1491C2] bg-clip-text text-transparent mb-6">
                &ldquo;Lead the Stage&rdquo;
              </div>

              <div className="py-4 border-y border-white/10 mb-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-1">
                  Investment
                </span>
                <span className="text-2xl font-bold text-[#1491C2]">
                  Rates on Request
                </span>
                <span className="block text-xs text-slate-300 mt-1">
                  Exclusive leadership & broadcast integration
                </span>
              </div>

              <div className="space-y-3.5 mb-8">
                <span className="text-xs font-bold uppercase tracking-wider text-[#1491C2] block">
                  Included Benefits:
                </span>
                <div className="flex items-start gap-3 text-sm text-white font-semibold">
                  <div className="w-5 h-5 rounded-full bg-[#1491C2] text-[#031F51] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>Large prime exhibition stall in high-visibility zone</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-white font-semibold">
                  <div className="w-5 h-5 rounded-full bg-[#1491C2] text-[#031F51] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>Seat on an expert panel (subject to organizer arrangement)</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-white font-semibold">
                  <div className="w-5 h-5 rounded-full bg-[#1491C2] text-[#031F51] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>Prominent institutional logo on the main stage backdrop</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-white font-semibold">
                  <div className="w-5 h-5 rounded-full bg-[#1491C2] text-[#031F51] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>Promotional mention by official media partners</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-slate-300 font-medium">
                  <div className="w-5 h-5 rounded-full bg-[#121481] text-[#1491C2] border border-[#1491C2]/40 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[2]" />
                  </div>
                  <span>All Premium benefits included</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => onSelectPackage('Platinum')}
              className="w-full py-4 px-6 rounded-xl font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-[#1491C2] via-[#245DA9] to-[#132CA9] text-white hover:brightness-110 active:scale-95 shadow-cyan-glow transition-all flex items-center justify-center gap-2"
            >
              <span>Enquire About Platinum</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Custom Guidance Option */}
        <div className="text-center pt-2">
          <button
            onClick={() => onSelectPackage('Need Guidance')}
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-[#1491C2] transition-colors"
          >
            <HelpCircle className="w-4 h-4 text-[#1491C2]" />
            <span>Not sure which package fits your institution? Request custom guidance →</span>
          </button>
        </div>
      </div>
    </section>
  );
};
