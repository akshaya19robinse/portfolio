/**
 * Smooth scrolling helper functions with offset compensation for sticky headers
 */

export const scrollToSection = (sectionId) => {
  const cleanId = sectionId.replace('#', '');
  const element = document.getElementById(cleanId);
  
  if (element) {
    const navbarOffset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - navbarOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

