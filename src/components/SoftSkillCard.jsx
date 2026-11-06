import { motion } from 'framer-motion';
import {
  MessageSquare,
  Users,
  Lightbulb,
  Shuffle,
  Clock,
  Zap,
  Sparkles,
  Compass,
  HeartHandshake,
  Flame
} from 'lucide-react';

const iconMap = {
  Communication: MessageSquare,
  Teamwork: Users,
  'Problem Solving': Lightbulb,
  Adaptability: Shuffle,
  'Time Management': Clock,
  'Quick Learning': Zap,
  Creativity: Sparkles,
  Leadership: Compass,
  Collaboration: HeartHandshake,
  'Self Motivation': Flame
};

export default function SoftSkillCard({ skill, index }) {
  const IconComponent = iconMap[skill.name] || Sparkles;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -3, transition: { duration: 0.2 } }}
      className="group bg-white rounded-xl p-5 border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-blue-300 transition-all flex flex-col justify-between"
    >
      <div>
        <div className="flex items-center justify-between mb-3">
          <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center transition-colors duration-200">
            <IconComponent className="w-4 h-4" />
          </div>
          <span className="text-[10px] uppercase font-semibold tracking-wider text-slate-500 bg-slate-50 px-2 py-0.5 rounded border border-slate-200/60">
            {skill.category}
          </span>
        </div>

        <h3 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors text-base mb-1.5">
          {skill.name}
        </h3>
        <p className="text-slate-600 text-xs leading-relaxed">
          {skill.description}
        </p>
      </div>

      <div className="mt-4 pt-2.5 border-t border-slate-100 flex items-center gap-1.5 text-[11px] text-blue-600 font-medium">
        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 group-hover:scale-125 transition-transform" />
        <span>Core Trait</span>
      </div>
    </motion.div>
  );
}

