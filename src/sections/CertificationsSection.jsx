import SectionHeading from '../components/SectionHeading';
import CertificationCard from '../components/CertificationCard';
import EmptyState from '../components/EmptyState';
import { certificationsData } from '../data/portfolio';

export default function CertificationsSection() {
  const hasCerts = certificationsData.items && certificationsData.items.length > 0;

  return (
    <section id="certifications" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Certifications & Milestones"
          title={certificationsData.heading}
          highlightWord="stops"
          description={certificationsData.supportingText}
        />

        {hasCerts ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificationsData.items.map((cert, index) => (
              <CertificationCard key={cert.id || index} cert={cert} index={index} />
            ))}
          </div>
        ) : (
          <EmptyState
            badge={certificationsData.emptyState.badge}
            title={certificationsData.emptyState.title}
            description={certificationsData.emptyState.description}
            categories={certificationsData.emptyState.upcomingCategories}
          />
        )}
      </div>
    </section>
  );
}

