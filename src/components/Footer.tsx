import React from 'react';
import { MapPin, Phone, Mail, Calendar, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy, onOpenTerms }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About PARVA', href: '#about' },
    { name: 'Event Schedule', href: '#schedule' },
    { name: 'Exhibitor Benefits', href: '#benefits' },
    { name: 'Packages', href: '#packages' },
    { name: 'FAQs', href: '#faqs' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0A1022] border-t border-[#D6AD55]/30 pt-16 pb-12 text-slate-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1: Brand & Tagline */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-white/95 border border-[#D6AD55] flex items-center justify-center p-1 overflow-hidden">
                <img src="/logo.png" alt="PARVA Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <span className="font-serif text-2xl font-bold text-white tracking-wider">
                  PARVA 2027
                </span>
                <span className="block text-[11px] uppercase tracking-wider text-[#D6AD55]">
                  2nd Edition
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 font-medium tracking-wider uppercase">
              Bengaluru North Educational Expo
            </p>

            <p className="font-serif italic text-sm text-slate-300">
              &ldquo;Where Bengaluru North Chooses Its Schools&rdquo;
            </p>

            <div className="pt-2 text-xs text-slate-400">
              Organised by <strong className="text-white font-medium">Bhadri&rsquo;s Academy</strong>.
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#D6AD55] mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-slate-300 hover:text-[#D6AD55] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#D6AD55] mb-4">
              Contact Organiser
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#D6AD55] shrink-0 mt-0.5" />
                <div className="flex flex-col space-y-1 font-mono text-xs">
                  <a href="tel:9632645625" className="hover:text-white transition-colors">
                    +91 96326 45625
                  </a>
                  <a href="tel:7019656192" className="hover:text-white transition-colors">
                    +91 70196 56192
                  </a>
                  <a href="tel:6366920921" className="hover:text-white transition-colors">
                    +91 63669 20921
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5 pt-2">
                <Mail className="w-4 h-4 text-[#D6AD55] shrink-0 mt-0.5" />
                <a
                  href="mailto:bhadrisacademy.expo2026@gmail.com"
                  className="font-mono text-xs text-slate-300 hover:text-[#D6AD55] transition-colors break-all"
                >
                  bhadrisacademy.expo2026@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Event Coordinates */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#D6AD55] mb-4">
              Event Details
            </h4>
            <div className="space-y-3 text-sm font-light">
              <div className="flex items-start gap-2.5">
                <Calendar className="w-4 h-4 text-[#D6AD55] shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-medium block">9–10 January 2027</span>
                  <span className="text-xs text-slate-400">11:00 AM – 8:00 PM Both Days</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D6AD55] shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-medium block">MEI Layout Ground</span>
                  <span className="text-xs text-slate-400">Bagalagunte, Bengaluru North</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="#booking"
                  className="inline-flex items-center gap-1.5 text-xs text-[#D6AD55] font-semibold hover:underline"
                >
                  <span>Early-Bird Booking Info →</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © 2027 PARVA Educational Expo. Organised by Bhadri&rsquo;s Academy. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={onOpenPrivacy}
              className="hover:text-[#D6AD55] transition-colors"
            >
              Privacy Policy
            </button>
            <button
              onClick={onOpenTerms}
              className="hover:text-[#D6AD55] transition-colors"
            >
              Terms of Participation
            </button>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-[#182547] text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
