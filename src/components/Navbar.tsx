import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, ChevronRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      // Background toggle on scroll
      if (window.scrollY > 25) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Active section detection (Scrollspy)
      const sections = ['home', 'about', 'schedule', 'benefits', 'packages', 'faqs', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About PARVA', href: '#about', id: 'about' },
    { name: 'Event Schedule', href: '#schedule', id: 'schedule' },
    { name: 'Exhibitor Benefits', href: '#benefits', id: 'benefits' },
    { name: 'Packages', href: '#packages', id: 'packages' },
    { name: 'FAQs', href: '#faqs', id: 'faqs' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const target = document.getElementById(targetId);
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#101A35]/95 backdrop-blur-md shadow-lg border-b border-[#D6AD55]/25 py-3.5'
            : 'bg-gradient-to-b from-[#101A35]/95 via-[#101A35]/70 to-transparent py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo & Brand Wordmark */}
            <a
              href="#home"
              onClick={(e) => handleLinkClick(e, '#home')}
              className="flex items-center gap-3 group focus:outline-none shrink-0"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white border-2 border-[#D6AD55]/60 flex items-center justify-center shadow-[0_0_15px_rgba(214,173,85,0.25)] group-hover:border-[#D6AD55] group-hover:shadow-[0_0_25px_rgba(214,173,85,0.45)] transition-all p-1 overflow-hidden">
                <img
                  src="/logo.png"
                  alt="PARVA Logo Shield"
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-serif text-xl sm:text-2xl font-bold tracking-wider text-white group-hover:text-[#D6AD55] transition-colors">
                    PARVA
                  </span>
                  <span className="text-[10px] sm:text-xs px-2 py-0.5 rounded-full font-bold bg-[#182547] text-[#D6AD55] border border-[#D6AD55]/40 tracking-wider">
                    2027
                  </span>
                </div>
                <span className="text-[10px] sm:text-[11px] font-medium tracking-wider uppercase text-slate-300 truncate max-w-[190px] sm:max-w-none">
                  Bengaluru North Educational Expo
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links (with Scrollspy Active Highlights in Prestige Gold) */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`text-xs xl:text-sm font-medium tracking-wide relative group py-1.5 transition-colors duration-200 ${
                      isActive
                        ? 'text-[#D6AD55] font-semibold'
                        : 'text-slate-200 hover:text-[#D6AD55]'
                    }`}
                  >
                    {link.name}
                    <span
                      className={`absolute bottom-0 left-0 h-[2px] bg-[#D6AD55] transition-all duration-300 ${
                        isActive ? 'w-full shadow-[0_0_8px_#D6AD55]' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </a>
                );
              })}
            </nav>

            {/* Mobile Hamburger Toggle Button (lg:hidden) */}
            <div className="lg:hidden flex items-center">
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg text-slate-200 hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
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
        </div>
      </header>

      {/* Mobile Drawer Menu (z-[60] to strictly float above fixed header) */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity animate-fadeIn"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Drawer Panel */}
          <div className="fixed top-0 right-0 bottom-0 w-full max-w-xs bg-[#101A35] border-l-2 border-[#D6AD55]/40 p-6 flex flex-col justify-between shadow-2xl z-[70] overflow-y-auto">
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-5 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-white border border-[#D6AD55] flex items-center justify-center p-1 shadow-sm">
                    <img
                      src="/logo.png"
                      alt="PARVA Logo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <span className="font-serif text-lg font-bold text-white tracking-wide block">
                      PARVA 2027
                    </span>
                    <span className="block text-[10px] text-slate-400">
                      Bengaluru North Expo
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="py-6 flex flex-col space-y-1">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className={`flex items-center justify-between px-3 py-3 rounded-xl text-sm font-medium transition-all ${
                        isActive
                          ? 'bg-[#182547] text-[#D6AD55] border-l-4 border-[#D6AD55] font-semibold'
                          : 'text-slate-200 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronRight className={`w-4 h-4 ${isActive ? 'text-[#D6AD55]' : 'text-slate-500'}`} />
                    </a>
                  );
                })}
              </nav>
            </div>

            {/* Drawer Bottom Details */}
            <div className="pt-6 border-t border-white/10 space-y-3">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <Calendar className="w-4 h-4 text-[#D6AD55]" />
                <span>9–10 January 2027 · Venue: To Be Updated</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
