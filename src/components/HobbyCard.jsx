import { motion } from 'framer-motion';
import { Headphones, PenTool, BookOpen, Music, Sparkles } from 'lucide-react';

const icons = {
  Headphones,
  PenTool,
  BookOpen
};

export default function HobbyCard({ hobby, index }) {
  const IconComponent = icons[hobby.icon] || Sparkles;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="group bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-2xs hover:shadow-lg hover:border-blue-300 transition-all flex flex-col justify-between overflow-hidden relative"
    >
      {/* Background Graphic Treatment based on hobby type */}
      {hobby.visualType === 'audio' && (
        <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
          <div className="flex items-end gap-1 h-14">
            <span className="w-1.5 h-6 bg-blue-600 rounded-full animate-pulse" />
            <span className="w-1.5 h-12 bg-blue-600 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
            <span className="w-1.5 h-8 bg-blue-600 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
            <span className="w-1.5 h-14 bg-blue-600 rounded-full animate-pulse" style={{ animationDelay: '0.1s' }} />
            <span className="w-1.5 h-5 bg-blue-600 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }} />
          </div>
        </div>
      )}

      {hobby.visualType === 'art' && (
        <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
          <svg className="w-16 h-16 text-blue-600" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4">
            <circle cx="50" cy="50" r="40" strokeDasharray="6 6" />
            <path d="M30 65 Q 50 25, 70 65" />
          </svg>
        </div>
      )}

      {hobby.visualType === 'books' && (
        <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
          <svg className="w-16 h-16 text-blue-600" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4">
            <path d="M20 30 Q 50 20, 50 75 Q 20 65, 20 30 Z" />
            <path d="M80 30 Q 50 20, 50 75 Q 80 65, 80 30 Z" />
          </svg>
        </div>
      )}

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-5">
          <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-2xs">
            <IconComponent className="w-6 h-6" />
          </div>
          <span className="text-[11px] font-semibold tracking-wider uppercase text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
            Interests
          </span>
        </div>

        <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
          {hobby.title}
        </h3>
        <p className="text-slate-600 text-sm leading-relaxed mb-6">
          {hobby.description}
        </p>
      </div>

      <div className="relative z-10 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs italic text-blue-700 font-medium">
        <span>"{hobby.quote}"</span>
      </div>
    </motion.div>
  );
}

