import SectionHeading from '../components/SectionHeading';
import HobbyCard from '../components/HobbyCard';
import { hobbiesData } from '../data/portfolio';

export default function HobbiesSection() {
  return (
    <section className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Personal Pursuits"
          title={hobbiesData.heading}
          highlightWord="screen"
          description={hobbiesData.supportingText}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {hobbiesData.items.map((hobby, index) => (
            <HobbyCard key={hobby.id} hobby={hobby} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

