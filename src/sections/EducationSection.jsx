import SectionHeading from '../components/SectionHeading';
import EducationCard from '../components/EducationCard';
import { educationData } from '../data/portfolio';

export default function EducationSection() {
  return (
    <section id="education" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Academic Foundation"
          title={educationData.heading}
          highlightWord="academic"
          description={educationData.subheading}
        />

        <div className="max-w-4xl mx-auto">
          <EducationCard education={educationData} />
        </div>
      </div>
    </section>
  );
}

