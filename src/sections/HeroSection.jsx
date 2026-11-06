import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight, Download, Mail, MapPin, GraduationCap, Sparkles, Terminal } from 'lucide-react';
import { personalData } from '../data/portfolio';
import { scrollToSection } from '../utils/scroll';

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden"
    >
      {/* Background Architectural Patterns */}
      <div className="absolute inset-0 bg-grid-slate opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-80 h-80 bg-sky-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Small Greeting Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100/90 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-6 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span>{personalData.introGreeting}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-bold text-slate-900 tracking-tight leading-[1.08] mb-6">
              Curious mind.{' '}
              <span className="text-blue-600 relative inline-block">
                Creative thinker.
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-blue-200 -z-10" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M0 15 Q 50 0, 100 15" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
              </span>{' '}
              Future software developer.
            </h1>

            {/* Supporting Description */}
            <p className="text-slate-600 text-base sm:text-lg lg:text-xl leading-relaxed mb-8 max-w-2xl">
              {personalData.heroBio}
            </p>

            {/* Micro Details Badges */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-9 text-xs sm:text-sm text-slate-700">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-50 border border-slate-200/80 shadow-2xs">
                <GraduationCap className="w-4 h-4 text-blue-600" />
                <span>Student at Amal Jyothi College of Engineering</span>
              </div>

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-50 border border-slate-200/80 shadow-2xs">
                <MapPin className="w-4 h-4 text-blue-600" />
                <span>Based in {personalData.location}</span>
              </div>

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-blue-50/70 border border-blue-100 text-blue-700 font-medium shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                <span>{personalData.badge}</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <button
                onClick={() => scrollToSection('#about')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold text-sm shadow-sm hover:shadow transition-all group"
              >
                <span>Explore My Journey</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollToSection('#contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-semibold text-sm shadow-2xs hover:border-blue-300 transition-all"
              >
                <Mail className="w-4 h-4 text-slate-500" />
                <span>Get In Touch</span>
              </button>

              <a
                href={personalData.resume.fileUrl}
                download={personalData.resume.downloadName}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 font-semibold text-sm shadow-2xs transition-all group"
                title="Download Resume (PDF)"
              >
                <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform text-blue-600" />
                <span>Download Resume</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Artistic Profile Composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
              
              {/* Decorative Geometric Backdrop Rings */}
              <div className="absolute inset-4 rounded-full border border-blue-100 -z-10 animate-[spin_60s_linear_infinite]" />
              <div className="absolute inset-12 rounded-full border border-dashed border-blue-200/60 -z-10" />

              {/* Main Avatar Container / Card */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-3xl bg-white p-3.5 border border-slate-200/90 shadow-xl overflow-hidden group">
                <img
                  src="/images/avatar-placeholder.svg"
                  alt="Akshaya Robinse - Digital Avatar Placeholder"
                  className="w-full h-full object-cover rounded-2xl group-hover:scale-102 transition-transform duration-300"
                />

                {/* Subtitle pill overlay inside image */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md px-3.5 py-2.5 rounded-xl border border-slate-200/80 shadow-sm flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-slate-900 leading-none">Akshaya Robinse</p>
                    <p className="text-[10px] text-slate-500 font-mono mt-1">First Year B.Tech CSE</p>
                  </div>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                </div>
              </div>

              {/* Floating Technology Badge 1: C */}
              <motion.div
                animate={{ y: [-4, 6, -4] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-3 left-4 sm:-left-4 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl border border-blue-200/80 shadow-md flex items-center gap-2 z-20"
              >
                <div className="w-6 h-6 rounded-md bg-blue-600 text-white font-mono font-bold text-xs flex items-center justify-center">
                  C
                </div>
                <span className="text-xs font-bold text-slate-800">Programming</span>
              </motion.div>

              {/* Floating Technology Badge 2: C++ */}
              <motion.div
                animate={{ y: [6, -5, 6] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute top-1/4 -right-2 sm:-right-6 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl border border-blue-200/80 shadow-md flex items-center gap-2 z-20"
              >
                <div className="w-6 h-6 rounded-md bg-blue-700 text-white font-mono font-bold text-xs flex items-center justify-center">
                  C++
                </div>
                <span className="text-xs font-bold text-slate-800">OOP & Logic</span>
              </motion.div>

              {/* Floating Technology Badge 3: Python */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-4 left-6 sm:left-2 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl border border-blue-200/80 shadow-md flex items-center gap-2 z-20"
              >
                <div className="w-6 h-6 rounded-md bg-sky-500 text-white font-mono font-bold text-xs flex items-center justify-center">
                  Py
                </div>
                <span className="text-xs font-bold text-slate-800">Python</span>
              </motion.div>

              {/* Floating Technology Badge 4: HTML */}
              <motion.div
                animate={{ y: [5, -4, 5] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
                className="absolute bottom-12 -right-4 sm:-right-8 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl border border-blue-200/80 shadow-md flex items-center gap-2 z-20"
              >
                <div className="w-6 h-6 rounded-md bg-orange-500 text-white font-mono font-bold text-xs flex items-center justify-center">
                  &lt;&gt;
                </div>
                <span className="text-xs font-bold text-slate-800">HTML5</span>
              </motion.div>

              {/* Code Snippet Micro Card */}
              <div className="hidden sm:flex absolute -top-8 right-8 bg-slate-900 text-white px-3 py-1.5 rounded-lg text-[11px] font-mono shadow-lg items-center gap-1.5 border border-slate-700">
                <Terminal className="w-3 h-3 text-emerald-400" />
                <span>status: learning</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll-down Indicator */}
        <div className="mt-14 sm:mt-20 flex justify-center">
          <button
            onClick={() => scrollToSection('#about')}
            className="group inline-flex flex-col items-center gap-2 text-xs font-medium text-slate-500 hover:text-blue-600 transition-colors focus:outline-none"
            aria-label="Scroll down to About section"
          >
            <span className="uppercase tracking-widest text-[11px]">Scroll down</span>
            <div className="w-7 h-11 rounded-full border-2 border-slate-300 group-hover:border-blue-600 flex items-start justify-center p-1.5 transition-colors">
              <motion.div
                animate={{ y: [0, 14, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                className="w-1.5 h-2 rounded-full bg-blue-600"
              />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}

