import { motion } from 'framer-motion';
import { Sparkles, Code2, ArrowRight } from 'lucide-react';
import { scrollToSection } from '../utils/scroll';

export default function EmptyState({
  badge = 'Coming Soon',
  title,
  description,
  actionLabel,
  targetSection,
  categories = []
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative max-w-3xl mx-auto rounded-3xl bg-gradient-to-b from-blue-50/40 via-white to-slate-50/60 p-8 sm:p-12 border border-blue-100/80 shadow-xs text-center overflow-hidden"
    >
      {/* Decorative background grid and shapes */}
      <div className="absolute inset-0 bg-grid-slate opacity-40 pointer-events-none" />
      <div className="absolute -top-12 -right-12 w-48 h-48 bg-blue-100/40 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-indigo-100/40 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center">
        {/* Animated Badge Icon */}
        <div className="w-16 h-16 rounded-2xl bg-white border border-blue-200/80 shadow-md flex items-center justify-center text-blue-600 mb-6 relative group">
          <Code2 className="w-8 h-8 group-hover:scale-110 transition-transform" />
          <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-blue-600 flex items-center justify-center text-white">
            <Sparkles className="w-2.5 h-2.5" />
          </span>
        </div>

        {/* Status Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/70 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-4">
          <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping"></span>
          <span>{badge}</span>
        </div>

        {/* Title */}
        <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight max-w-xl mb-4">
          {title}
        </h3>

        {/* Description */}
        <p className="text-slate-600 text-base leading-relaxed max-w-lg mb-8">
          {description}
        </p>

        {/* Optional Categories / Tags display (e.g. for certifications) */}
        {categories.length > 0 && (
          <div className="w-full max-w-md grid grid-cols-2 sm:grid-cols-4 gap-2 mb-8">
            {categories.map((cat, i) => (
              <div
                key={i}
                className="bg-white/80 backdrop-blur-xs rounded-xl p-3 border border-slate-200/80 text-center"
              >
                <p className="text-xs font-semibold text-slate-800">{cat.name}</p>
                <p className="text-[10px] text-slate-500 mt-0.5">In Progress</p>
              </div>
            ))}
          </div>
        )}

        {/* Action Button */}
        {actionLabel && targetSection && (
          <button
            onClick={() => scrollToSection(targetSection)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-sm hover:shadow transition-all group"
          >
            <span>{actionLabel}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        )}
      </div>
    </motion.div>
  );
}

