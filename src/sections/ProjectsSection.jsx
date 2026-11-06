import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import EmptyState from '../components/EmptyState';
import { projectsData } from '../data/portfolio';

export default function ProjectsSection() {
  const hasProjects = projectsData.items && projectsData.items.length > 0;

  return (
    <section id="projects" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Portfolio Works"
          title={projectsData.heading}
          highlightWord="building"
          description={projectsData.supportingText}
        />

        {hasProjects ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.items.map((project, index) => (
              <ProjectCard key={project.id || index} project={project} index={index} />
            ))}
          </div>
        ) : (
          <EmptyState
            badge={projectsData.emptyState.badge}
            title={projectsData.emptyState.title}
            description={projectsData.emptyState.description}
            actionLabel={projectsData.emptyState.actionLabel}
            targetSection={projectsData.emptyState.targetSection}
          />
        )}
      </div>
    </section>
  );
}

