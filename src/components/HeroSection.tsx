import React from 'react';
import { Calendar, MapPin, Clock, ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';

interface HeroSectionProps {
  onReserveClick: () => void;
  onExploreClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onReserveClick,
  onExploreClick,
}) => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#0A1022]/60"
    >
      {/* Background Architectural/Campus Image with Dark Navy & Gold Vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=2000&q=80"
          alt="Modern Architectural Educational Campus"
          className="w-full h-full object-cover object-center scale-105 opacity-20 filter brightness-75 contrast-125 transition-transform duration-1000"
        />
        {/* Navy Overlay Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1022] via-[#101A35]/85 to-[#0A1022]/90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(214,173,85,0.18),transparent)]" />
        {/* Architectural subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #D6AD55 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Subtle Animated Gold Ambient Light Beam */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-96 bg-gradient-to-b from-[#D6AD55]/15 via-[#D6AD55]/5 to-transparent blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Early-Bird Announcement Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#182547]/90 border border-[#D6AD55]/40 text-[#D6AD55] text-xs font-semibold tracking-wide uppercase shadow-sm mb-6 animate-pulse">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Early-Bird Booking Deadline: 15 November 2026</span>
        </div>

        {/* Top Label */}
        <div className="flex items-center gap-2 mb-4">
          <div className="h-[1px] w-8 sm:w-12 bg-gradient-to-r from-transparent to-[#D6AD55]" />
          <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#D6AD55] uppercase">
            Bengaluru North Educational Expo · 2nd Edition
          </span>
          <div className="h-[1px] w-8 sm:w-12 bg-gradient-to-l from-transparent to-[#D6AD55]" />
        </div>

        {/* Main Heading */}
        <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-4">
          PARVA <span className="text-gold-gradient font-normal">2027</span>
        </h1>

        {/* Animated Gold Divider Line */}
        <div className="w-24 sm:w-36 h-[2px] bg-gradient-to-r from-transparent via-[#D6AD55] to-transparent my-3 relative">
          <div className="absolute -top-[3px] left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#D6AD55] shadow-gold-sm" />
        </div>

        {/* Supporting Headline */}
        <p className="font-serif italic text-xl sm:text-2xl lg:text-3xl text-slate-200 font-normal tracking-wide max-w-3xl mb-6">
          &ldquo;Where Bengaluru North Chooses Its Schools&rdquo;
        </p>

        {/* Description */}
        <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed mb-10 font-light">
          Meet thousands of admission-seeking families, showcase your institution, build
          meaningful connections with parents, and position your school or PU college at
          the centre of Bengaluru North&rsquo;s admission season.
        </p>

        {/* Three Important Event Details Bar */}
        <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4 mb-10 text-left">
          {/* Detail 1: Dates */}
          <div className="bg-[#101A35]/80 backdrop-blur-sm border border-[#D6AD55]/30 rounded-xl p-4 flex items-center gap-3.5 shadow-sm hover:border-[#D6AD55]/60 transition-colors">
            <div className="w-11 h-11 rounded-lg bg-[#182547] border border-[#D6AD55]/40 flex items-center justify-center shrink-0">
              <Calendar className="w-5 h-5 text-[#D6AD55]" />
            </div>
            <div>
              <span className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                Dates
              </span>
              <span className="text-sm font-bold text-white tracking-wide">
                9–10 January 2027
              </span>
              <span className="block text-xs text-slate-400">Saturday & Sunday</span>
            </div>
          </div>

          {/* Detail 2: Venue */}
          <div className="bg-[#101A35]/80 backdrop-blur-sm border border-[#D6AD55]/30 rounded-xl p-4 flex items-center gap-3.5 shadow-sm hover:border-[#D6AD55]/60 transition-colors">
            <div className="w-11 h-11 rounded-lg bg-[#182547] border border-[#D6AD55]/40 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5 text-[#D6AD55]" />
            </div>
            <div>
              <span className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                Venue
              </span>
              <span className="text-sm font-bold text-white tracking-wide">
                MEI Layout Ground
              </span>
              <span className="block text-xs text-slate-400">Bagalagunte, Bengaluru</span>
            </div>
          </div>

          {/* Detail 3: Timings */}
          <div className="bg-[#101A35]/80 backdrop-blur-sm border border-[#D6AD55]/30 rounded-xl p-4 flex items-center gap-3.5 shadow-sm hover:border-[#D6AD55]/60 transition-colors">
            <div className="w-11 h-11 rounded-lg bg-[#182547] border border-[#D6AD55]/40 flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5 text-[#D6AD55]" />
            </div>
            <div>
              <span className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                Timings
              </span>
              <span className="text-sm font-bold text-white tracking-wide">
                11:00 AM – 8:00 PM
              </span>
              <span className="block text-xs text-slate-400">Both Days</span>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            onClick={onReserveClick}
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-sm font-bold uppercase tracking-wider text-[#101A35] bg-gradient-to-r from-[#F3DF9A] via-[#D6AD55] to-[#B88E38] rounded-lg shadow-gold-glow hover:brightness-105 active:scale-95 transition-all duration-200"
          >
            <span>Reserve Your Stall</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>

          <button
            onClick={onExploreClick}
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-sm font-semibold tracking-wider text-white bg-[#182547]/80 hover:bg-[#182547] border border-white/20 hover:border-[#D6AD55]/50 rounded-lg transition-all duration-200"
          >
            Explore the Expo
          </button>
        </div>

        {/* Credibility & Organizer Subtext */}
        <div className="mt-8 flex items-center gap-2 text-xs text-slate-400">
          <ShieldCheck className="w-4 h-4 text-[#D6AD55]" />
          <span>Organised by Bhadri&rsquo;s Academy · Exclusively for Schools & PU Colleges</span>
        </div>
      </div>
    </section>
  );
};
