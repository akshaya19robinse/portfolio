import { motion } from 'framer-motion';
import { ExternalLink, FolderGit2 } from 'lucide-react';
import { GithubIcon } from '../assets/icons/BrandIcons';

export default function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="group bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-xl hover:border-blue-300 transition-all flex flex-col"
    >
      {/* Project Image / Visual */}
      <div className="relative aspect-video w-full bg-slate-100 overflow-hidden border-b border-slate-100">
        {project.screenshot ? (
          <img
            src={project.screenshot}
            alt={`${project.name} screenshot`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-slate-100 text-blue-600">
            <FolderGit2 className="w-10 h-10 mb-2 opacity-80" />
            <span className="text-xs font-mono font-medium text-slate-500">Project Workspace</span>
          </div>
        )}

        {project.featured && (
          <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-blue-600 text-white text-[11px] font-semibold tracking-wide shadow-xs">
            Featured
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Tech Badges */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            {project.technologies?.map((tech, idx) => (
              <span
                key={idx}
                className="text-[11px] font-mono font-medium px-2 py-0.5 rounded bg-slate-100 text-slate-700"
              >
                {tech}
              </span>
            ))}
          </div>

          <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
            {project.name}
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed mb-6">
            {project.description}
          </p>
        </div>

        {/* Links */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-blue-600 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>Code</span>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
