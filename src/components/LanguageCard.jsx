import { motion } from 'framer-motion';
import { Languages } from 'lucide-react';

export default function LanguageCard({ language, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -3, transition: { duration: 0.2 } }}
      className="group bg-white rounded-2xl p-6 border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-blue-300 transition-all flex items-center justify-between"
    >
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center font-bold text-base transition-colors duration-200 shadow-2xs">
          {language.code}
        </div>
        <div>
          <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
            {language.name}
          </h3>
          <p className="text-xs text-slate-500 font-medium">
            {language.note}
          </p>
        </div>
      </div>

      <div className="text-right">
        <span className="text-base sm:text-lg font-semibold text-slate-700 font-sans tracking-wide">
          {language.native}
        </span>
      </div>
    </motion.div>
  );
}

