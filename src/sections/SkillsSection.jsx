import SectionHeading from '../components/SectionHeading';
import SkillCard from '../components/SkillCard';
import { technicalSkillsData } from '../data/portfolio';

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 md:py-28 bg-slate-50/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Technical Skills"
          title={technicalSkillsData.heading}
          highlightWord="exploring"
          description={technicalSkillsData.supportingText}
        />

        {/* Bento Grid: 4 Technical Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {technicalSkillsData.skills.map((skill, index) => (
            <SkillCard key={skill.id} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

