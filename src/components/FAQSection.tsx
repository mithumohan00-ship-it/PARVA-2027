import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FAQItem } from '../types';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: 'What is PARVA?',
      answer:
        "PARVA is the second edition of the Bengaluru North Educational Expo, organised by Bhadri's Academy.",
    },
    {
      question: 'When is PARVA 2027?',
      answer:
        '9 and 10 January 2027, from 11:00 AM to 8:00 PM on both days.',
    },
    {
      question: 'Where will the event take place?',
      answer:
        'Bengaluru North (Venue to be updated shortly).',
    },
    {
      question: 'Who can book an exhibitor stall?',
      answer:
        'Schools and PU colleges are eligible to participate. Coaching centres, tuition classes, robotics companies, and ed-tech companies are not eligible.',
    },
    {
      question: 'What are the exhibitor package prices?',
      answer:
        'Package rates are available on request. Contact the organising team for current pricing and availability.',
    },
    {
      question: 'What is included in the Basic package?',
      answer:
        'A standard stall with name board, event guide listing, and parent lead list.',
    },
    {
      question: 'What additional benefits does Premium offer?',
      answer:
        'A corner or front stall, a student performance slot, a social media feature, and all Basic benefits.',
    },
    {
      question: 'What additional benefits does Platinum offer?',
      answer:
        'A large prime stall, an expert panel seat, a logo on the stage backdrop, a media partner mention, and all Premium benefits.',
    },
    {
      question: 'How can I book a stall?',
      answer:
        'Submit the stall enquiry form or contact the organising team using the details provided on the website.',
    },
    {
      question: 'Is an early-bird discount available?',
      answer:
        'An early-bird discount is offered for bookings confirmed by 15 November 2026, according to the event presentation.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-24 bg-[#101A35]/85 relative backdrop-blur-[1px]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
            Everything You Need to{' '}
            <span className="text-gold-gradient font-normal">Know.</span>
          </h2>

          <p className="text-base text-slate-300 font-light max-w-xl mx-auto">
            Clear answers to common questions regarding participation, dates, stall packages, and visitor entry.
          </p>
        </div>

        {/* Interactive Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-[#182547] border border-white/10 hover:border-[#D6AD55]/50 rounded-2xl overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full py-5 px-6 sm:px-8 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-base sm:text-lg font-bold text-white group-hover:text-[#D6AD55] transition-colors">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      isOpen
                        ? 'bg-[#D6AD55] text-[#101A35]'
                        : 'bg-[#101A35] text-slate-300'
                    }`}
                  >
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 stroke-[2.5]" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-8 pb-6 text-sm sm:text-base text-slate-300 font-light leading-relaxed border-t border-white/5 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
