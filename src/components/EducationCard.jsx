import { motion } from 'framer-motion';
import { GraduationCap, Landmark, Calendar, MapPin, CheckCircle, Award } from 'lucide-react';

export default function EducationCard({ education }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55 }}
      className="relative bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-10 lg:p-12 overflow-hidden group hover:shadow-xl hover:border-blue-300 transition-all"
    >
      {/* Decorative background accents */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-blue-100/50 via-sky-50/30 to-transparent rounded-bl-full pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-50/60 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-semibold">
            <GraduationCap className="w-4 h-4 text-blue-600" />
            <span>Undergraduate Degree</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>{education.academicStatus}</span>
          </div>
        </div>

        {/* Degree & Department Header */}
        <div className="mb-6">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight mb-2">
            {education.degree} in {education.specialization}
          </h3>
          <p className="text-slate-500 text-sm sm:text-base font-medium flex items-center gap-2">
            <span>Specialization in Software & Computational Systems</span>
          </p>
        </div>

        {/* Institution Grid Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 rounded-2xl bg-slate-50/70 border border-slate-200/80 mb-8">
          <div className="space-y-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
                <Landmark className="w-3.5 h-3.5 text-blue-600" />
                <span>Institution</span>
              </div>
              <p className="text-base font-bold text-slate-900">
                {education.institution}
              </p>
            </div>

            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
                <Award className="w-3.5 h-3.5 text-blue-600" />
                <span>University Affiliation</span>
              </div>
              <p className="text-sm font-semibold text-slate-800">
                {education.university}
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
                <Calendar className="w-3.5 h-3.5 text-blue-600" />
                <span>Academic Timeline</span>
              </div>
              <p className="text-base font-bold text-blue-700 font-mono">
                {education.timeline}
              </p>
              <p className="text-xs text-slate-500 mt-0.5">
                Admission: {education.admissionYear} • Expected: {education.expectedGraduation}
              </p>
            </div>

            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
                <MapPin className="w-3.5 h-3.5 text-blue-600" />
                <span>Campus Location</span>
              </div>
              <p className="text-sm font-semibold text-slate-800">
                {education.location}
              </p>
            </div>
          </div>
        </div>

        {/* Core Academic Focus Points */}
        <div>
          <h4 className="text-xs uppercase font-semibold tracking-wider text-slate-500 mb-3">
            Academic Scope & Learning Environment
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {education.features.map((feature, i) => (
              <div
                key={i}
                className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-slate-200/70 shadow-2xs"
              >
                <CheckCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-700 leading-snug">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

