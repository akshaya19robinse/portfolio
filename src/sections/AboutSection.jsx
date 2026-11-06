import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import InfoCard from '../components/InfoCard';
import { aboutData, personalData } from '../data/portfolio';
import { Sparkles, Compass, Lightbulb, Code2 } from 'lucide-react';

export default function AboutSection() {
  const highlights = [
    { label: "Academic Standing", text: "First-Year Computer Science Student" },
    { label: "Core Passion", text: "Curiosity for Software & Systems" },
    { label: "Driving Motive", text: "Turning Creative Ideas into Solutions" },
    { label: "Future Outlook", text: "Exploring Modern Computing Horizons" }
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-slate-50/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          label="About Me"
          title={aboutData.heading}
          highlightWord="about"
          description={aboutData.subheading}
        />

        {/* Editorial Layout: Narrative & Micro-Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-14">
          
          {/* Main Narrative Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-8 space-y-5 text-slate-700 text-base sm:text-lg leading-relaxed bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-2xs"
          >
            {aboutData.paragraphs.map((p, idx) => (
              <p key={idx} className={idx === 0 ? "text-slate-900 font-medium text-lg sm:text-xl leading-relaxed" : ""}>
                {p}
              </p>
            ))}
          </motion.div>

          {/* Quick Snapshot / Editorial Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="lg:col-span-4 flex flex-col justify-between bg-blue-50/50 rounded-3xl p-6 sm:p-7 border border-blue-100"
          >
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-blue-600" />
                <h3 className="font-bold text-slate-900 text-base uppercase tracking-wider">
                  Quick Snapshot
                </h3>
              </div>

              <div className="space-y-3.5">
                {highlights.map((item, idx) => (
                  <div key={idx} className="pb-3 border-b border-blue-100/80 last:border-0 last:pb-0">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                      {item.label}
                    </p>
                    <p className="text-sm font-bold text-slate-800 mt-0.5">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-blue-200/70 text-xs text-blue-800 font-mono">
              Amal Jyothi College of Engineering • KTU
            </div>
          </motion.div>
        </div>

        {/* Three Attractive Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {aboutData.cards.map((card, index) => (
            <InfoCard key={card.id} card={card} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

