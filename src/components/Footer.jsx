import { ArrowUp, Mail, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../assets/icons/BrandIcons';
import { personalData, navLinks } from '../data/portfolio';
import { scrollToTop, scrollToSection } from '../utils/scroll';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 border-t border-slate-200/80 pt-16 pb-12 mt-20 relative overflow-hidden">
      {/* Decorative background grid */}
      <div className="absolute inset-0 bg-grid-slate opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-200">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white font-bold flex items-center justify-center text-lg shadow-sm">
                {personalData.brandMark}
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg leading-tight">
                  {personalData.name}
                </h3>
                <p className="text-xs text-slate-500 font-medium">
                  {personalData.role}
                </p>
              </div>
            </div>

            <p className="text-slate-600 text-sm max-w-sm leading-relaxed">
              First-year B.Tech CSE student at Amal Jyothi College of Engineering, Kanjirappally (KTU). Exploring the foundations of software, computing, and creative digital solutions.
            </p>

            <div className="pt-2">
              <a
                href={`mailto:${personalData.email}`}
                className="inline-flex items-center gap-2 text-xs font-semibold text-blue-600 hover:text-blue-700 bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-100 transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{personalData.email}</span>
              </a>
            </div>

            {/* Social links conditionally rendered ONLY if present */}
            {(personalData.social.linkedin || personalData.social.github) && (
              <div className="flex items-center gap-2 pt-2">
                {personalData.social.linkedin && (
                  <a
                    href={personalData.social.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-blue-600 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                )}
                {personalData.social.github && (
                  <a
                    href={personalData.social.github}
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-blue-600 transition-colors"
                    aria-label="GitHub"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-left text-xs text-slate-600 hover:text-blue-600 transition-colors py-1"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Academic Badge & Back-to-top */}
          <div className="md:col-span-3 flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
                Academic Affiliation
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                <strong>Amal Jyothi College of Engineering</strong><br />
                APJ Abdul Kalam Technological University<br />
                Admission 2026 • Expected 2030
              </p>
            </div>

            <div className="pt-6">
              <button
                onClick={scrollToTop}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:text-blue-600 hover:border-blue-300 shadow-2xs transition-all group"
              >
                <span>Back to top</span>
                <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p className="flex items-center gap-1.5">
            <span>Designed and built with curiosity.</span>
            <span className="text-blue-500">✦</span>
          </p>

          <p>
            © {currentYear} {personalData.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
