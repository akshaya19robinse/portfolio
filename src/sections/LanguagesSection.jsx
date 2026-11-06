import SectionHeading from '../components/SectionHeading';
import LanguageCard from '../components/LanguageCard';
import { languagesData } from '../data/portfolio';

export default function LanguagesSection() {
  return (
    <section className="py-16 md:py-24 bg-slate-50/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Communication"
          title={languagesData.heading}
          highlightWord="Languages"
          description={languagesData.supportingText}
        />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {languagesData.items.map((language, index) => (
            <LanguageCard key={language.name} language={language} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

