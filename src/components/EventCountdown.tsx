import React, { useState, useEffect } from 'react';
import { Clock, CheckCircle2, Radio } from 'lucide-react';

export const EventCountdown: React.FC = () => {
  // Target: 9 January 2027 at 11:00 AM IST (UTC+05:30)
  const eventStart = new Date('2027-01-09T11:00:00+05:30').getTime();
  // End: 10 January 2027 at 8:00 PM IST (UTC+05:30)
  const eventEnd = new Date('2027-01-10T20:00:00+05:30').getTime();

  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    status: 'upcoming' | 'live' | 'completed';
  }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    status: 'upcoming',
  });

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date().getTime();

      if (now >= eventEnd) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          status: 'completed',
        });
        return;
      }

      if (now >= eventStart && now < eventEnd) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          status: 'live',
        });
        return;
      }

      const diff = eventStart - now;

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
        status: 'upcoming',
      });
    };

    calculateTime();
    const timer = setInterval(calculateTime, 1000);
    return () => clearInterval(timer);
  }, [eventStart, eventEnd]);

  return (
    <div className="relative z-20 -mt-8 sm:-mt-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-[#101A35] border border-[#D6AD55]/40 rounded-2xl p-6 sm:p-8 shadow-2xl backdrop-blur-md relative overflow-hidden">
        {/* Subtle decorative gold corner glow */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#D6AD55]/10 rounded-full blur-2xl pointer-events-none" />

        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pb-6 border-b border-white/10 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#182547] border border-[#D6AD55]/40 flex items-center justify-center">
              <Clock className="w-5 h-5 text-[#D6AD55]" />
            </div>
            <div>
              <h2 className="font-serif text-lg sm:text-xl font-bold tracking-wide text-white uppercase">
                The Countdown to PARVA 2027
              </h2>
              <p className="text-xs text-slate-400">
                Target: 9 January 2027 · 11:00 AM IST · MEI Layout Ground
              </p>
            </div>
          </div>
        </div>

        {/* Display depending on status */}
        {timeLeft.status === 'upcoming' && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 pt-6">
            {/* Days */}
            <div className="bg-[#182547] border border-[#D6AD55]/30 rounded-xl p-4 text-center group hover:border-[#D6AD55] transition-all">
              <div className="font-serif text-4xl sm:text-5xl font-bold text-[#D6AD55] tracking-tight">
                {String(timeLeft.days).padStart(2, '0')}
              </div>
              <div className="text-xs uppercase font-medium tracking-widest text-slate-400 mt-1">
                Days
              </div>
            </div>

            {/* Hours */}
            <div className="bg-[#182547] border border-[#D6AD55]/30 rounded-xl p-4 text-center group hover:border-[#D6AD55] transition-all">
              <div className="font-serif text-4xl sm:text-5xl font-bold text-[#D6AD55] tracking-tight">
                {String(timeLeft.hours).padStart(2, '0')}
              </div>
              <div className="text-xs uppercase font-medium tracking-widest text-slate-400 mt-1">
                Hours
              </div>
            </div>

            {/* Minutes */}
            <div className="bg-[#182547] border border-[#D6AD55]/30 rounded-xl p-4 text-center group hover:border-[#D6AD55] transition-all">
              <div className="font-serif text-4xl sm:text-5xl font-bold text-[#D6AD55] tracking-tight">
                {String(timeLeft.minutes).padStart(2, '0')}
              </div>
              <div className="text-xs uppercase font-medium tracking-widest text-slate-400 mt-1">
                Minutes
              </div>
            </div>

            {/* Seconds */}
            <div className="bg-[#182547] border border-[#D6AD55]/30 rounded-xl p-4 text-center group hover:border-[#D6AD55] transition-all">
              <div className="font-serif text-4xl sm:text-5xl font-bold text-[#D6AD55] tracking-tight">
                {String(timeLeft.seconds).padStart(2, '0')}
              </div>
              <div className="text-xs uppercase font-medium tracking-widest text-slate-400 mt-1">
                Seconds
              </div>
            </div>
          </div>
        )}

        {timeLeft.status === 'live' && (
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-xl bg-gradient-to-r from-[#182547] to-[#101A35] border border-[#D6AD55]">
            <div className="flex items-center gap-3">
              <Radio className="w-8 h-8 text-[#D6AD55] animate-pulse" />
              <div>
                <h3 className="font-serif text-xl font-bold text-white">
                  PARVA 2027 IS LIVE NOW!
                </h3>
                <p className="text-sm text-slate-300">
                  Join us at MEI Layout Ground, Bagalagunte. Expo timings: 11:00 AM – 8:00 PM.
                </p>
              </div>
            </div>
            <a
              href="#location"
              className="px-5 py-2.5 rounded-lg bg-[#D6AD55] text-[#101A35] font-semibold text-xs uppercase tracking-wider hover:brightness-110 transition-all shrink-0"
            >
              Get Venue Directions
            </a>
          </div>
        )}

        {timeLeft.status === 'completed' && (
          <div className="pt-6 flex items-center justify-center gap-3 p-6 rounded-xl bg-[#182547] border border-white/20 text-center">
            <CheckCircle2 className="w-6 h-6 text-[#D6AD55]" />
            <div>
              <h3 className="font-serif text-lg font-bold text-white">
                PARVA 2027 Has Concluded
              </h3>
              <p className="text-xs text-slate-300">
                Thank you to all participating schools, PU colleges, families, and partners for making this edition a landmark success!
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
