import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, Phone, Sparkles } from 'lucide-react';

interface NavbarProps {
  onBookClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
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
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#101A35]/95 backdrop-blur-md shadow-lg border-b border-[#D6AD55]/20 py-3.5'
            : 'bg-gradient-to-b from-[#0A1022]/90 via-[#0A1022]/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo / Wordmark */}
            <a
              href="#home"
              onClick={(e) => handleLinkClick(e, '#home')}
              className="flex items-center gap-3 group focus:outline-none"
            >
              <div className="w-10 h-10 rounded-lg bg-white/95 border border-[#D6AD55]/40 flex items-center justify-center shadow-sm group-hover:border-[#D6AD55] transition-colors p-1 overflow-hidden">
                <img src="/logo.png" alt="PARVA Logo" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-serif text-2xl font-bold tracking-wider text-white">
                    PARVA
                  </span>
                  <span className="text-xs px-1.5 py-0.5 rounded font-semibold bg-[#D6AD55]/15 text-[#D6AD55] border border-[#D6AD55]/30">
                    2027
                  </span>
                </div>
                <span className="text-[11px] font-medium tracking-wider uppercase text-slate-300">
                  Bengaluru North Educational Expo
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-sm font-medium text-slate-200 hover:text-[#D6AD55] transition-colors tracking-wide relative group py-1"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#D6AD55] transition-all duration-200 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Right CTAs */}
            <div className="hidden sm:flex items-center gap-4">
              <a
                href="tel:9632645625"
                className="hidden xl:flex items-center gap-2 text-xs font-medium text-slate-300 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#D6AD55]" />
                <span>+91 96326 45625</span>
              </a>

              <button
                onClick={onBookClick}
                className="relative inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#101A35] bg-gradient-to-r from-[#F3DF9A] via-[#D6AD55] to-[#B88E38] rounded-md shadow-md hover:shadow-gold-glow hover:brightness-105 active:scale-95 transition-all duration-200 font-sans"
              >
                <Sparkles className="w-3.5 h-3.5 mr-1.5 text-[#101A35]" />
                Book Your Stall
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-200 hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-[#D6AD55]" />
              ) : (
                <Menu className="w-6 h-6 text-slate-200" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Drawer Content */}
          <div className="fixed top-0 right-0 bottom-0 w-full max-w-xs bg-[#101A35] border-l border-[#D6AD55]/30 p-6 flex flex-col justify-between shadow-2xl z-50">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded bg-white/95 border border-[#D6AD55] flex items-center justify-center p-0.5 overflow-hidden">
                    <img src="/logo.png" alt="PARVA Logo" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <span className="font-serif text-lg font-bold text-white tracking-wide">
                      PARVA 2027
                    </span>
                    <span className="block text-[10px] text-slate-300">
                      Bengaluru North Educational Expo
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1 rounded text-slate-400 hover:text-white"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="py-6 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-base font-medium text-slate-200 hover:text-[#D6AD55] transition-colors py-1.5 border-b border-white/5"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <Calendar className="w-4 h-4 text-[#D6AD55]" />
                <span>9–10 January 2027 · MEI Layout</span>
              </div>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onBookClick();
                }}
                className="w-full py-3 text-xs font-semibold uppercase tracking-wider text-[#101A35] bg-gradient-to-r from-[#F3DF9A] via-[#D6AD55] to-[#B88E38] rounded-md shadow-md text-center active:scale-95 transition-all"
              >
                Book Your Stall
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
