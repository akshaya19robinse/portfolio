import SectionHeading from '../components/SectionHeading';
import InterestCard from '../components/InterestCard';
import { areasOfInterestData } from '../data/portfolio';

export default function InterestsSection() {
  return (
    <section className="py-20 md:py-28 bg-slate-50/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Passions & Interests"
          title={areasOfInterestData.heading}
          highlightWord="curiosity"
          description={areasOfInterestData.supportingText}
        />

        {/* 8 Areas of Interest Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {areasOfInterestData.interests.map((interest, index) => (
            <InterestCard key={interest.id} interest={interest} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

