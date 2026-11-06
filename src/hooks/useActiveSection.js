import { useState, useEffect } from 'react';

/**
 * Custom hook to monitor which section is currently active in the viewport
 * @param {Array<string>} sectionIds - Array of section element IDs (e.g. ['home', 'about', ...])
 * @param {number} offset - Pixel offset from top of viewport
 * @returns {string} activeSectionId
 */
export function useActiveSection(sectionIds, offset = 140) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] || 'home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionIds, offset]);

  return activeSection;
}

