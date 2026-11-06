import { motion } from 'framer-motion';
import { Terminal, Cpu, FileCode2, Globe } from 'lucide-react';

const icons = {
  Terminal,
  Cpu,
  FileCode: FileCode2,
  Globe
};

export default function SkillCard({ skill, index }) {
  const IconComponent = icons[skill.icon] || Terminal;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="group relative bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-xs hover:shadow-lg hover:border-blue-300 transition-all flex flex-col justify-between overflow-hidden"
    >
      {/* Background soft glow on hover */}
      <div className="absolute -right-8 -top-8 w-28 h-28 bg-blue-100/50 rounded-full blur-2xl group-hover:bg-blue-200/70 transition-all pointer-events-none" />

      <div>
        {/* Header: Icon & Category Tag */}
        <div className="flex items-center justify-between mb-5">
          <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-2xs">
            <IconComponent className="w-6 h-6" />
          </div>
          <span className="px-2.5 py-1 text-[11px] font-semibold text-slate-600 bg-slate-100/80 rounded-full border border-slate-200">
            {skill.category}
          </span>
        </div>

        {/* Title */}
        <div className="flex items-baseline gap-2 mb-2">
          <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
            {skill.name}
          </h3>
          <span className="text-xs font-mono text-blue-600/70 font-medium">language</span>
        </div>

        {/* Description */}
        <p className="text-slate-600 text-sm leading-relaxed mb-6">
          {skill.description}
        </p>
      </div>

      {/* Focus Topics / Pills */}
      <div>
        <p className="text-[11px] uppercase tracking-wider font-semibold text-slate-500 mb-2">
          Focus Areas
        </p>
        <div className="flex flex-wrap gap-1.5">
          {skill.focus.map((item, idx) => (
            <span
              key={idx}
              className="text-xs px-2.5 py-1 rounded-md bg-slate-50 text-slate-700 border border-slate-200/80 group-hover:border-blue-200 group-hover:bg-blue-50/50 transition-colors"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

