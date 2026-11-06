import { motion } from 'framer-motion';
import { Calendar, Building2, Sparkles, CheckCircle2 } from 'lucide-react';

export default function TimelineItem({ item, index, isLast }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative pl-8 sm:pl-10 pb-12 group"
    >
      {/* Vertical Timeline Guide Line */}
      {!isLast && (
        <div className="absolute left-[15px] sm:left-[19px] top-6 bottom-0 w-[2px] bg-gradient-to-b from-blue-500 via-blue-200 to-slate-200" />
      )}

      {/* Timeline Node Icon / Dot */}
      <div className="absolute left-0 sm:left-1 top-0 w-8 h-8 rounded-full bg-white border-2 border-blue-600 shadow-sm flex items-center justify-center text-blue-600 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
        <Sparkles className="w-3.5 h-3.5" />
      </div>

      {/* Main Timeline Card */}
      <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-blue-300 transition-all">
        {/* Top meta tags */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold border border-blue-100">
            <Calendar className="w-3.5 h-3.5 text-blue-600" />
            <span>{item.period}</span>
          </div>

          {item.badge && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold border border-emerald-200/80">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>{item.badge}</span>
            </span>
          )}
        </div>

        {/* Role & Institution */}
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-1.5">
          {item.role}
        </h3>

        <div className="flex items-center gap-2 text-slate-600 text-sm font-medium mb-4">
          <Building2 className="w-4 h-4 text-blue-600 shrink-0" />
          <span>{item.institution}</span>
        </div>

        {/* Description */}
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-5">
          {item.description}
        </p>

        {/* Milestones / Active areas */}
        {item.milestones && item.milestones.length > 0 && (
          <div className="pt-4 border-t border-slate-100">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2.5">
              Current Focus & Milestones
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-700">
              {item.milestones.map((milestone, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>{milestone}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </motion.div>
  );
}

