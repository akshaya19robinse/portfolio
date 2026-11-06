import { motion } from 'framer-motion';
import {
  Laptop,
  Brain,
  Layout,
  Compass,
  Smartphone,
  Palette,
  Cloud,
  Sparkles
} from 'lucide-react';

const iconMap = {
  Laptop,
  Brain,
  Layout,
  Compass,
  Smartphone,
  Palette,
  Cloud,
  Sparkles
};

export default function InterestCard({ interest, index }) {
  const IconComponent = iconMap[interest.icon] || Sparkles;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="group relative bg-white rounded-2xl p-6 border border-slate-200/90 shadow-2xs hover:shadow-lg hover:border-blue-300 transition-all flex flex-col justify-between overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-50 to-transparent rounded-bl-full -z-0 opacity-60 group-hover:scale-110 transition-transform" />

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-2xs">
            <IconComponent className="w-5 h-5" />
          </div>
          <span className="text-[11px] font-semibold tracking-wide text-blue-700 bg-blue-50/80 px-2.5 py-1 rounded-full border border-blue-100/80">
            {interest.tag}
          </span>
        </div>

        <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
          {interest.title}
        </h3>
        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
          {interest.description}
        </p>
      </div>

      <div className="relative z-10 mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
        <span className="font-mono text-[11px] text-slate-500">Curiosity Area</span>
        <span className="text-blue-600 font-medium group-hover:translate-x-1 transition-transform">→</span>
      </div>
    </motion.div>
  );
}

