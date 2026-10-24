import React from 'react';
import { X, ShieldCheck, FileText } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, type, onClose }) => {
  if (!isOpen || !type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative bg-[#031F51] border-2 border-[#1491C2]/60 rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 shadow-cyan-glow z-10 text-slate-200">
        <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#121481] border border-[#245DA9]/50 flex items-center justify-center">
              {type === 'privacy' ? (
                <ShieldCheck className="w-5 h-5 text-[#1491C2]" />
              ) : (
                <FileText className="w-5 h-5 text-[#1491C2]" />
              )}
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold text-white">
                {type === 'privacy' ? 'Privacy Policy' : 'Terms of Participation'}
              </h3>
              <p className="text-xs text-slate-400">
                PARVA 2027 · Bengaluru North Educational Expo
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {type === 'privacy' ? (
          <div className="space-y-4 text-xs sm:text-sm font-light leading-relaxed text-slate-300">
            <p>
              <strong className="text-white font-medium">1. Information Collection:</strong>{' '}
              PARVA 2027 and its organiser, Bhadri&rsquo;s Academy, collect contact information
              submitted through the exhibitor enquiry form solely for event coordination,
              stall allotment, invoice transmission, and event updates.
            </p>
            <p>
              <strong className="text-white font-medium">2. Data Sharing & Lead Lists:</strong>{' '}
              Eligible exhibitors are granted access to registered visitor details strictly in
              accordance with applicable privacy guidelines, explicit parent opt-in consent,
              and educational advisory purposes for the 2027–28 academic admissions season.
            </p>
            <p>
              <strong className="text-white font-medium">3. Data Security:</strong> All submitted
              institutional and personal contact details are stored in encrypted environments
              with strict Row Level Security. We never sell or transfer contact information to
              unrelated third-party marketers.
            </p>
            <p>
              <strong className="text-white font-medium">4. Contact:</strong> For inquiries
              regarding data handling, please contact{' '}
              <a
                href="mailto:bhadrisacademy.expo2026@gmail.com"
                className="text-[#1491C2] underline"
              >
                bhadrisacademy.expo2026@gmail.com
              </a>.
            </p>
          </div>
        ) : (
          <div className="space-y-4 text-xs sm:text-sm font-light leading-relaxed text-slate-300">
            <p>
              <strong className="text-white font-medium">1. Exhibitor Eligibility:</strong>{' '}
              Participation as an exhibitor is strictly restricted to recognized Schools and
              PU Colleges. Coaching centres, tuition classes, robotics companies, and ed-tech
              entities are not eligible to book exhibition stalls.
            </p>
            <p>
              <strong className="text-white font-medium">2. Stall Allotment:</strong> Stalls will
              be allotted on 20 December 2026 according to confirmed package categories and
              submission chronology. Prime/corner placements are prioritized for Platinum and
              Premium partners.
            </p>
            <p>
              <strong className="text-white font-medium">3. Setup & Timings:</strong> Stall setup
              commences on 8 January 2027 at MEI Layout Ground. Expo gates are open to the public
              from 11:00 AM to 8:00 PM on 9 & 10 January 2027.
            </p>
            <p>
              <strong className="text-white font-medium">4. Program Highlights:</strong> Activities,
              competitions, and guest roundtables are subject to the official operational schedule
              finalized during the Exhibitor Briefing on 2 January 2027.
            </p>
          </div>
        )}

        <div className="mt-8 pt-4 border-t border-white/10 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-lg bg-[#121481] hover:bg-[#245DA9] text-white text-xs font-semibold transition-colors border border-[#245DA9]/50"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
