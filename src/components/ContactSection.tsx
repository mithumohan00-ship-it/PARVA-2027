import React from 'react';
import { Phone, Mail, Send, Sparkles, MessageCircle, Clock } from 'lucide-react';

interface ContactSectionProps {
  onEnquireClick: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onEnquireClick }) => {
  const phoneNumbers = [
    { number: '9632645625', display: '+91 96326 45625', label: 'Primary Desk' },
    { number: '7019656192', display: '+91 70196 56192', label: 'Coordinator Desk' },
    { number: '6366920921', display: '+91 63669 20921', label: 'Exhibitor Support' },
  ];

  const email = 'bhadrisacademy.expo2026@gmail.com';

  return (
    <section id="contact" className="py-24 bg-[#0A1022]/85 relative overflow-hidden backdrop-blur-[1px]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#182547]/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#182547] border border-[#D6AD55]/30 text-[#D6AD55] text-xs font-semibold tracking-wider uppercase mb-4">
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Organising Committee</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
            Let&rsquo;s Make PARVA a{' '}
            <span className="text-gold-gradient font-normal">Success Together.</span>
          </h2>

          <p className="text-base text-slate-300 font-light max-w-2xl mx-auto">
            Interested in exhibiting at PARVA 2027? Contact the organising team to discuss packages,
            stall availability, and participation details.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {/* Direct Phone Assistance */}
          <div className="bg-[#101A35] border border-[#D6AD55]/40 rounded-3xl p-8 flex flex-col justify-between hover:border-[#D6AD55] transition-all shadow-xl">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#182547] border border-[#D6AD55]/40 flex items-center justify-center mb-6">
                <Phone className="w-7 h-7 text-[#D6AD55]" />
              </div>

              <h3 className="font-serif text-xl font-bold text-white mb-2">
                Phone Contacts
              </h3>

              <p className="text-xs text-slate-400 font-light mb-6">
                Speak directly with the PARVA 2027 organizing committee members.
              </p>

              <div className="space-y-3 mb-6">
                {phoneNumbers.map((item, idx) => (
                  <a
                    key={idx}
                    href={`tel:${item.number}`}
                    className="flex items-center justify-between p-3 rounded-xl bg-[#182547] border border-white/5 hover:border-[#D6AD55] text-slate-200 hover:text-white transition-all group"
                  >
                    <div>
                      <span className="text-xs text-slate-400 block">{item.label}</span>
                      <span className="font-mono text-sm font-semibold tracking-wider text-[#D6AD55] group-hover:underline">
                        {item.display}
                      </span>
                    </div>
                    <span className="text-xs px-2 py-1 rounded bg-[#101A35] text-slate-300 group-hover:text-white">
                      Call
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <a
              href="tel:9632645625"
              className="w-full py-3.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-[#F3DF9A] via-[#D6AD55] to-[#B88E38] text-[#101A35] text-center hover:brightness-105 active:scale-95 transition-all shadow-md"
            >
              Call Primary Desk Now
            </a>
          </div>

          {/* Email Support */}
          <div className="bg-[#101A35] border border-[#D6AD55]/40 rounded-3xl p-8 flex flex-col justify-between hover:border-[#D6AD55] transition-all shadow-xl">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#182547] border border-[#D6AD55]/40 flex items-center justify-center mb-6">
                <Mail className="w-7 h-7 text-[#D6AD55]" />
              </div>

              <h3 className="font-serif text-xl font-bold text-white mb-2">
                Official Email
              </h3>

              <p className="text-xs text-slate-400 font-light mb-6">
                Send official communications, proposal requests, and sponsorship queries.
              </p>

              <div className="p-4 rounded-2xl bg-[#182547] border border-white/5 mb-6">
                <span className="text-xs text-slate-400 block mb-1">Organiser Inbox:</span>
                <a
                  href={`mailto:${email}`}
                  className="font-mono text-xs sm:text-sm font-medium text-[#D6AD55] break-all hover:underline"
                >
                  {email}
                </a>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-400 mb-6">
                <Clock className="w-4 h-4 text-[#D6AD55]" />
                <span>Responses typically dispatched within 24 hours</span>
              </div>
            </div>

            <a
              href={`mailto:${email}?subject=PARVA%202027%20Exhibitor%20Enquiry`}
              className="w-full py-3.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider bg-[#182547] border border-[#D6AD55]/50 text-white hover:bg-[#101A35] hover:border-[#D6AD55] text-center active:scale-95 transition-all shadow-md"
            >
              Email the Organiser
            </a>
          </div>

          {/* Quick Booking CTA */}
          <div className="bg-gradient-to-b from-[#182547] to-[#101A35] border-2 border-[#D6AD55] rounded-3xl p-8 flex flex-col justify-between shadow-gold-sm">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#101A35] border border-[#D6AD55] flex items-center justify-center mb-6">
                <Sparkles className="w-7 h-7 text-[#D6AD55]" />
              </div>

              <h3 className="font-serif text-xl font-bold text-white mb-2">
                Instant Stall Booking
              </h3>

              <p className="text-xs text-slate-300 font-light mb-6">
                Lock in your priority stall location before the early-bird deadline of 15 November 2026.
              </p>

              <div className="space-y-2.5 mb-6 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D6AD55]" />
                  <span>Choose Basic, Premium or Platinum</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D6AD55]" />
                  <span>Parent lead lists included</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D6AD55]" />
                  <span>Exclusive to Schools & PU Colleges</span>
                </div>
              </div>
            </div>

            <button
              onClick={onEnquireClick}
              className="w-full py-3.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-[#F3DF9A] via-[#D6AD55] to-[#B88E38] text-[#101A35] text-center hover:brightness-105 active:scale-95 transition-all shadow-md flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Enquire About Stalls</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
