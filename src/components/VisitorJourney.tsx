import React from 'react';
import { QrCode, Ticket, Store, Mic2, Gift, Route, Check } from 'lucide-react';

export const VisitorJourney: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Register',
      detail: 'Visitors register online in advance or scan the QR code at the entrance gate.',
      icon: QrCode,
    },
    {
      step: '02',
      title: 'Get Expo Passport',
      detail: 'Receive a physical stamp card and comprehensive exhibition venue map.',
      icon: Ticket,
    },
    {
      step: '03',
      title: 'Visit Stalls',
      detail: 'Explore participating institutions, interact with counselors, and collect stamps.',
      icon: Store,
    },
    {
      step: '04',
      title: 'Join Expert Panel',
      detail: 'Attend educational discussions, learn from experts, and ask questions.',
      icon: Mic2,
    },
    {
      step: '05',
      title: 'Daily Lucky Draw',
      detail: 'Complete your stamp passport and enter the grand daily lucky draw at 7:30 PM.',
      icon: Gift,
    },
  ];

  return (
    <section className="py-24 bg-[#031F51]/85 relative backdrop-blur-[1px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121481] border border-[#1491C2]/40 text-[#1491C2] text-xs font-semibold tracking-wider uppercase mb-4">
            <Route className="w-3.5 h-3.5" />
            <span>Interactive Passport System</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
            Every Visit{' '}
            <span className="bg-gradient-to-r from-white via-cyan-100 to-[#1491C2] bg-clip-text text-transparent font-normal">Counts.</span>
          </h2>

          <p className="text-base text-slate-300 font-light max-w-2xl mx-auto">
            Our structured &ldquo;Expo Passport&rdquo; mechanism ensures families do not merely
            browse the entrance—they are guided systematically across all exhibition stalls.
          </p>
        </div>

        {/* 5-Step Flow */}
        <div className="relative">
          {/* Connecting line on desktop */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-[2px] bg-gradient-to-r from-[#1491C2]/10 via-[#1491C2]/50 to-[#1491C2]/10 -translate-y-12 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {steps.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#121481]/90 border border-[#245DA9]/40 hover:border-[#1491C2] rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-cyan-glow group flex flex-col justify-between text-center relative"
                >
                  <div>
                    {/* Step Badge */}
                    <div className="w-14 h-14 rounded-2xl bg-[#031F51] border-2 border-[#1491C2]/40 group-hover:border-[#1491C2] flex items-center justify-center mx-auto mb-5 shadow-sm group-hover:scale-105 transition-all">
                      <Icon className="w-7 h-7 text-[#1491C2]" />
                    </div>

                    <div className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold text-[#1491C2] bg-[#031F51] border border-[#1491C2]/30 mb-2">
                      STEP {item.step}
                    </div>

                    <h3 className="font-serif text-lg font-bold text-white mb-2">
                      {item.title}
                    </h3>

                    <p className="text-xs text-slate-300 font-light leading-relaxed">
                      {item.detail}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-center gap-1.5 text-[11px] text-[#1491C2]">
                    <Check className="w-3.5 h-3.5" />
                    <span>Engaged Footfall</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Supporting Message Callout */}
        <div className="mt-12 bg-gradient-to-r from-[#121481] via-[#031F51] to-[#121481] border border-[#245DA9]/50 rounded-2xl p-6 sm:p-8 text-center max-w-4xl mx-auto shadow-md">
          <p className="font-serif italic text-base sm:text-lg text-slate-200 mb-2">
            &ldquo;The visitor engagement programme is designed to encourage families to explore
            participating institutions and spend more time discovering educational opportunities.&rdquo;
          </p>
          <p className="text-xs text-slate-400 font-light">
            Every visiting parent receives incentives to meet multiple school counselors, ensuring higher stall discovery rates.
          </p>
        </div>
      </div>
    </section>
  );
};
