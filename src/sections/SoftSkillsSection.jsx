import SectionHeading from '../components/SectionHeading';
import SoftSkillCard from '../components/SoftSkillCard';
import { softSkillsData } from '../data/portfolio';

export default function SoftSkillsSection() {
  return (
    <section className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Interpersonal & Mindset"
          title={softSkillsData.heading}
          highlightWord="technical"
          description={softSkillsData.supportingText}
        />

        {/* 10 Soft Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
          {softSkillsData.skills.map((skill, index) => (
            <SoftSkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

