import { useActiveSection } from './hooks/useActiveSection';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Sections
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import EducationSection from './sections/EducationSection';
import SkillsSection from './sections/SkillsSection';
import SoftSkillsSection from './sections/SoftSkillsSection';
import InterestsSection from './sections/InterestsSection';
import ProjectsSection from './sections/ProjectsSection';
import ExperienceSection from './sections/ExperienceSection';
import HobbiesSection from './sections/HobbiesSection';
import LanguagesSection from './sections/LanguagesSection';
import CertificationsSection from './sections/CertificationsSection';
import ContactSection from './sections/ContactSection';

export default function App() {
  const sectionIds = [
    'home',
    'about',
    'education',
    'skills',
    'projects',
    'experience',
    'certifications',
    'contact'
  ];

  const activeSection = useActiveSection(sectionIds, 150);

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-900 flex flex-col font-sans">
      {/* Scroll Progress Bar at the top */}
      <ScrollProgress />

      {/* Sticky Header Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Area */}
      <main className="flex-1 w-full">
        {/* Section 2: Hero */}
        <HeroSection />

        {/* Section 3: About Me */}
        <AboutSection />

        {/* Section 4: Education */}
        <EducationSection />

        {/* Section 5: Technical Skills */}
        <SkillsSection />

        {/* Section 6: Soft Skills */}
        <SoftSkillsSection />

        {/* Section 7: Areas of Interest */}
        <InterestsSection />

        {/* Section 8: Projects */}
        <ProjectsSection />

        {/* Section 9: Experience & Learning Journey */}
        <ExperienceSection />

        {/* Section 10: Hobbies & Personal Interests */}
        <HobbiesSection />

        {/* Section 11: Languages */}
        <LanguagesSection />

        {/* Section 12: Certifications & Achievements */}
        <CertificationsSection />

        {/* Section 13: Contact */}
        <ContactSection />
      </main>

      {/* Section 14: Footer */}
      <Footer />
    </div>
  );
}
