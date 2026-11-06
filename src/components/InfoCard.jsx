import { motion } from 'framer-motion';
import { GraduationCap, Code2, Sparkles } from 'lucide-react';

const iconMap = {
  studying: GraduationCap,
  focus: Code2,
  mindset: Sparkles,
};

export default function InfoCard({ card, index }) {
  const IconComponent = iconMap[card.id] || Sparkles;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="group relative bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-xs hover:shadow-md hover:border-blue-200 transition-all flex flex-col justify-between"
    >
      {/* Top row: Number & Icon */}
      <div>
        <div className="flex items-center justify-between mb-5">
          <span className="font-mono text-xs font-semibold text-blue-600 tracking-wider bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">
            {card.number}
          </span>
          <div className="w-11 h-11 rounded-xl bg-blue-50 group-hover:bg-blue-600 text-blue-600 group-hover:text-white flex items-center justify-center transition-all duration-300">
            <IconComponent className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
          </div>
        </div>

        {/* Content */}
        <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-1">
          {card.title}
        </p>
        <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-3">
          {card.subtitle}
        </h3>
        <p className="text-slate-600 text-sm leading-relaxed">
          {card.description}
        </p>
      </div>

      {/* Subtle bottom decorative accent */}
      <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
        <span className="inline-flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
          Akshaya Robinse
        </span>
        <span className="font-mono text-[11px] text-slate-500">AJCE • KTU</span>
      </div>
    </motion.div>
  );
}

