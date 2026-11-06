import SectionHeading from '../components/SectionHeading';
import TimelineItem from '../components/TimelineItem';
import { experienceData } from '../data/portfolio';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 md:py-28 bg-slate-50/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Learning Timeline"
          title={experienceData.heading}
          highlightWord="journey"
          description={experienceData.supportingText}
        />

        <div className="max-w-3xl mx-auto">
          {experienceData.timeline.map((item, index) => (
            <TimelineItem
              key={item.id}
              item={item}
              index={index}
              isLast={index === experienceData.timeline.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

