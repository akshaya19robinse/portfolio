import { motion } from 'framer-motion';

export default function SectionHeading({
  label,
  title,
  highlightWord = '',
  description,
  centered = false,
  className = ''
}) {
  // Function to split and highlight the chosen word in blue if provided
  const renderTitle = () => {
    if (!highlightWord || !title.includes(highlightWord)) {
      return title;
    }
    const parts = title.split(highlightWord);
    return (
      <>
        {parts[0]}
        <span className="text-blue-600 relative inline-block">
          {highlightWord}
          <span className="absolute bottom-1 left-0 w-full h-[6px] bg-blue-100 -z-10 rounded-sm"></span>
        </span>
        {parts[1]}
      </>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`mb-12 md:mb-16 ${centered ? 'text-center mx-auto max-w-2xl' : 'max-w-2xl'} ${className}`}
    >
      {label && (
        <div className={`inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-blue-50 border border-blue-100/80 text-blue-700 text-xs font-semibold uppercase tracking-wider ${centered ? 'mx-auto' : ''}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></span>
          <span>{label}</span>
        </div>
      )}

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.15] mb-4">
        {renderTitle()}
      </h2>

      {description && (
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}

