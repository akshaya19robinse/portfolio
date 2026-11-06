import { useState, useEffect } from 'react';
import { Menu, FileText, ArrowUpRight } from 'lucide-react';
import { personalData, navLinks } from '../data/portfolio';
import { scrollToSection, scrollToTop } from '../utils/scroll';
import MobileMenu from './MobileMenu';

export default function Navbar({ activeSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-md shadow-xs border-b border-slate-200/80 py-3.5'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo / Brandmark */}
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-3 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-lg p-1"
              aria-label="Akshaya Robinse - Back to top"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white font-bold flex items-center justify-center text-lg tracking-tight shadow-sm transition-transform group-hover:scale-105 duration-200">
                {personalData.brandMark}
              </div>
              <div className="hidden sm:block">
                <span className="block font-bold text-slate-900 tracking-tight text-base leading-none group-hover:text-blue-600 transition-colors">
                  {personalData.name}
                </span>
                <span className="block text-xs text-slate-500 font-medium mt-1 leading-none">
                  B.Tech CSE • Amal Jyothi
                </span>
              </div>
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-1 bg-slate-100/70 p-1.5 rounded-full border border-slate-200/70 shadow-xs" aria-label="Main Navigation">
              {navLinks.map((link) => {
                const sectionId = link.href.replace('#', '');
                const isActive = activeSection === sectionId;
                return (
                  <button
                    key={link.name}
                    onClick={() => scrollToSection(link.href)}
                    className={`relative px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 ${
                      isActive
                        ? 'text-white shadow-xs'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-white/80'
                    }`}
                  >
                    {isActive && (
                      <span className="absolute inset-0 rounded-full bg-blue-600 -z-10 transition-all shadow-sm" />
                    )}
                    {link.name}
                  </button>
                );
              })}
            </nav>

            {/* Tablet Navigation Links (Sub-set of main) */}
            <nav className="hidden lg:flex xl:hidden items-center gap-1 bg-slate-100/70 p-1.5 rounded-full border border-slate-200/70" aria-label="Tablet Navigation">
              {navLinks.slice(0, 5).map((link) => {
                const sectionId = link.href.replace('#', '');
                const isActive = activeSection === sectionId;
                return (
                  <button
                    key={link.name}
                    onClick={() => scrollToSection(link.href)}
                    className={`relative px-3 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 ${
                      isActive
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-white/80'
                    }`}
                  >
                    {link.name}
                  </button>
                );
              })}
            </nav>

            {/* Right Action / CTA */}
            <div className="flex items-center gap-2 sm:gap-3">
              <a
                href={personalData.resume.fileUrl}
                download={personalData.resume.downloadName}
                className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200/90 shadow-2xs hover:border-blue-300 transition-all"
                title="Download Resume (PDF)"
              >
                <FileText className="w-3.5 h-3.5 text-blue-600" />
                <span>Resume</span>
              </a>

              <button
                onClick={() => scrollToSection('#contact')}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition-all hover:shadow hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Get In Touch</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>

              {/* Mobile menu trigger */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                aria-label="Open mobile menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Component */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navLinks={navLinks}
        activeSection={activeSection}
      />
    </>
  );
}

