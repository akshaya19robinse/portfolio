import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, FileText } from 'lucide-react';
import { scrollToSection } from '../utils/scroll';
import { personalData } from '../data/portfolio';

export default function MobileMenu({ isOpen, onClose, navLinks, activeSection }) {
  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleLinkClick = (href) => {
    onClose();
    setTimeout(() => {
      scrollToSection(href);
    }, 150);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40 lg:hidden"
            aria-hidden="true"
          />

          {/* Slide-out Menu Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 260 }}
            className="fixed top-0 right-0 bottom-0 w-[82%] max-w-sm bg-white shadow-2xl z-50 flex flex-col justify-between p-6 lg:hidden border-l border-slate-200"
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-lg shadow-sm">
                    AR
                  </div>
                  <div>
                    <span className="block font-bold text-slate-900 leading-tight">Akshaya Robinse</span>
                    <span className="block text-xs text-slate-500">B.Tech CSE Student</span>
                  </div>
                </div>

                <button
                  onClick={onClose}
                  className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-700 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="mt-6 flex flex-col gap-1.5" aria-label="Mobile Navigation">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href.replace('#', '');
                  return (
                    <button
                      key={link.name}
                      onClick={() => handleLinkClick(link.href)}
                      className={`w-full text-left px-4 py-3 rounded-xl font-medium text-base transition-all flex items-center justify-between ${
                        isActive
                          ? 'bg-blue-50 text-blue-700 font-semibold'
                          : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-blue-600' : 'bg-transparent'}`} />
                        {link.name}
                      </span>
                      {isActive && <ArrowRight className="w-4 h-4 text-blue-600" />}
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-slate-100 flex flex-col gap-3">
              <a
                href={personalData.resume.fileUrl}
                download={personalData.resume.downloadName}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-blue-200 bg-blue-50/70 text-blue-700 font-medium text-sm hover:bg-blue-100/80 transition-colors"
              >
                <FileText className="w-4 h-4" />
                <span>Resume (PDF)</span>
              </a>

              <button
                onClick={() => handleLinkClick('#contact')}
                className="w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm shadow-sm transition-colors text-center"
              >
                Get In Touch
              </button>

              <p className="text-center text-xs text-slate-500 mt-2">
                Amal Jyothi College of Engineering • KTU
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

