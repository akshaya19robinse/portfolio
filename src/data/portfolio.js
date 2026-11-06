/**
 * Portfolio Data Configuration for Akshaya Robinse
 * All personal details, academic history, skills, and links are managed here.
 * Components read from this centralized configuration for zero-code updates.
 */

export const personalData = {
  name: "Akshaya Robinse",
  brandMark: "AR.",
  role: "Student | Aspiring Software Developer",
  badge: "First-Year B.Tech CSE",
  tagline: "Curious mind. Creative thinker. Future software developer.",
  introGreeting: "HELLO WORLD! I'M AKSHAYA",
  location: "India",
  experience: "Fresher",
  email: "akshayarobinse@gmail.com",
  
  // Academic Affiliation
  institution: "Amal Jyothi College of Engineering, Kanjirappally",
  university: "APJ Abdul Kalam Technological University (KTU)",
  degree: "Bachelor of Technology (B.Tech)",
  department: "Computer Science and Engineering",
  academicYear: "First Year",
  admissionYear: "2026",
  expectedGraduation: "2030",
  academicStatus: "Currently Pursuing",
  
  // Resume configuration
  resume: {
    available: true,
    fileUrl: "/resume.pdf",
    downloadName: "Akshaya_Robinse_Resume.pdf",
    label: "Download Resume",
  },

  // Social profiles (LinkedIn & GitHub intentionally null until verified URLs are provided)
  social: {
    linkedin: null, // "https://linkedin.com/in/..." when provided
    github: null,   // "https://github.com/..." when provided
  },

  // Hero supporting description
  heroBio: "I'm Akshaya Robinse, a Computer Science Engineering student at Amal Jyothi College of Engineering, passionate about software, programming, and exploring the world of technology."
};

export const aboutData = {
  heading: "A little about me.",
  subheading: "Curiosity-driven engineering student exploring technology from the inside out.",
  paragraphs: [
    "I am Akshaya Robinse, a first-year B.Tech Computer Science and Engineering student passionate about software, technology, and exploring the endless possibilities of the tech world.",
    "I enjoy learning new concepts, experimenting with technologies, and developing my programming skills. I am always curious about how technology works and how creative ideas can turn into meaningful solutions.",
    "As I begin my journey in computer science, I look forward to exploring different areas of technology, improving my skills, and building projects that help me grow as a developer."
  ],
  cards: [
    {
      id: "studying",
      number: "01",
      title: "Currently Studying",
      subtitle: "B.Tech Computer Science & Engineering",
      description: "Amal Jyothi College of Engineering (KTU). Immersed in foundational computing, algorithms, and engineering fundamentals.",
      accent: "blue"
    },
    {
      id: "focus",
      number: "02",
      title: "Learning Focus",
      subtitle: "Programming & Software Development",
      description: "Writing structured logic in C, C++, Python, and building interactive web experiences with HTML and modern web standards.",
      accent: "cyan"
    },
    {
      id: "mindset",
      number: "03",
      title: "Personal Mindset",
      subtitle: "Curious, Creative & Always Learning",
      description: "Approaching every coding problem as a canvas for creativity, continuous experimentation, and persistent discovery.",
      accent: "indigo"
    }
  ]
};

export const educationData = {
  heading: "My academic journey.",
  subheading: "Laying the foundations of computer science and computational thinking.",
  institution: "Amal Jyothi College of Engineering, Kanjirappally",
  institutionShort: "Amal Jyothi",
  university: "APJ Abdul Kalam Technological University (KTU)",
  degree: "Bachelor of Technology",
  degreeAbbr: "B.Tech",
  specialization: "Computer Science and Engineering",
  academicStatus: "First Year — Currently Pursuing",
  admissionYear: "2026",
  expectedGraduation: "2030",
  timeline: "2026 – 2030",
  location: "Kanjirappally, Kerala, India",
  features: [
    "Department of Computer Science and Engineering",
    "Focus on algorithmic thinking and clean code design",
    "Active participation in campus workshops & peer coding groups",
    "Comprehensive KTU curriculum in core computer science"
  ]
};

export const technicalSkillsData = {
  heading: "Technologies I'm exploring.",
  supportingText: "Building my technical foundation, one concept at a time.",
  skills: [
    {
      id: "c",
      name: "C",
      category: "Systems & Fundamentals",
      description: "Exploring programming fundamentals and structured programming.",
      focus: ["Pointers & Memory", "Control Structures", "Modular Functions", "Algorithms"],
      icon: "Terminal",
      accentColor: "#2563EB",
      bgLight: "bg-blue-50/70",
      borderLight: "border-blue-100"
    },
    {
      id: "cpp",
      name: "C++",
      category: "Object-Oriented Programming",
      description: "Learning object-oriented programming and problem-solving.",
      focus: ["Classes & Objects", "Inheritance & Polymorphism", "Standard Template Library", "Logic Building"],
      icon: "Cpu",
      accentColor: "#1D4ED8",
      bgLight: "bg-indigo-50/70",
      borderLight: "border-indigo-100"
    },
    {
      id: "python",
      name: "Python",
      category: "Versatile & Automation",
      description: "Exploring programming concepts and practical applications.",
      focus: ["Data Structures", "Clean Syntax", "Automation Scripts", "Algorithmic Problem Solving"],
      icon: "FileCode",
      accentColor: "#3B82F6",
      bgLight: "bg-sky-50/70",
      borderLight: "border-sky-100"
    },
    {
      id: "html",
      name: "HTML",
      category: "Semantic Web Structure",
      description: "Learning to structure and build web pages.",
      focus: ["Semantic Tags", "Web Accessibility", "Document Structure", "Modern HTML5 APIs"],
      icon: "Globe",
      accentColor: "#0284C7",
      bgLight: "bg-cyan-50/70",
      borderLight: "border-cyan-100"
    }
  ]
};

export const softSkillsData = {
  heading: "More than just technical skills.",
  supportingText: "Growing as a developer also means growing as a person.",
  skills: [
    { name: "Communication", category: "Interpersonal", description: "Articulating ideas clearly and listening actively in technical and team discussions." },
    { name: "Teamwork", category: "Collaboration", description: "Contributing positively to group objectives, code reviews, and shared goals." },
    { name: "Problem Solving", category: "Cognitive", description: "Breaking complex challenges down into logical, manageable components." },
    { name: "Adaptability", category: "Mindset", description: "Embracing new tools, feedback, and shifting requirements with agility." },
    { name: "Time Management", category: "Productivity", description: "Balancing academic coursework, coding practice, and personal creative pursuits." },
    { name: "Quick Learning", category: "Growth", description: "Rapidly absorbing new conceptual frameworks, syntax, and developer tools." },
    { name: "Creativity", category: "Innovation", description: "Designing imaginative, unconventional ways to approach everyday technical problems." },
    { name: "Leadership", category: "Influence", description: "Taking initiative, guiding peers constructively, and stepping up when needed." },
    { name: "Collaboration", category: "Teamwork", description: "Partnering seamlessly with fellow students to brainstorm and build together." },
    { name: "Self Motivation", category: "Drive", description: "Maintaining internal discipline and intrinsic passion to code and improve daily." }
  ]
};

export const areasOfInterestData = {
  heading: "What sparks my curiosity.",
  supportingText: "The world of technology is vast, and I'm excited to explore it.",
  interests: [
    {
      id: "software-dev",
      title: "Software Development",
      description: "Architecting reliable, maintainable software systems that solve real problems.",
      icon: "Laptop",
      tag: "Engineering"
    },
    {
      id: "ai",
      title: "Artificial Intelligence",
      description: "Studying intelligent algorithms, reasoning systems, and cognitive computing.",
      icon: "Brain",
      tag: "Intelligence"
    },
    {
      id: "web-dev",
      title: "Web Development",
      description: "Crafting modern, accessible, and fast web experiences across all screen sizes.",
      icon: "Layout",
      tag: "Frontend & Fullstack"
    },
    {
      id: "tech-exploration",
      title: "Technology Exploration",
      description: "Investigating emerging developer toolchains, open protocols, and innovations.",
      icon: "Compass",
      tag: "Discovery"
    },
    {
      id: "app-dev",
      title: "App Development",
      description: "Exploring mobile interfaces and responsive cross-platform architectures.",
      icon: "Smartphone",
      tag: "Mobile"
    },
    {
      id: "ui-ux",
      title: "UI/UX Design",
      description: "Blending visual harmony, typography, and intuitive user psychology into interfaces.",
      icon: "Palette",
      tag: "Design"
    },
    {
      id: "cloud",
      title: "Cloud Computing",
      description: "Understanding distributed storage, cloud services, and scalable server infrastructure.",
      icon: "Cloud",
      tag: "Infrastructure"
    },
    {
      id: "ml",
      title: "Machine Learning",
      description: "Investigating how models discern patterns from data to automate decision-making.",
      icon: "Sparkles",
      tag: "Data Science"
    }
  ]
};

/**
 * Projects data:
 * Ready for future additions. When projects are built, simply append them to the `items` array.
 */
export const projectsData = {
  heading: "Things I'm building.",
  supportingText: "Every idea is an opportunity to learn something new.",
  emptyState: {
    badge: "Under Active Development",
    title: "Every developer starts somewhere. Exciting projects are coming soon!",
    description: "I am currently laying strong foundations in C, C++, Python, and web fundamentals. As I build project repositories, mini-apps, and experiments, they will be documented right here with full code and live demos.",
    actionLabel: "Follow My Journey",
    targetSection: "contact"
  },
  // Reusable schema for future projects
  items: [
    // Template for future addition:
    // {
    //   id: "example-project",
    //   name: "Project Title",
    //   description: "Concise summary of what the project does and the problem it solves.",
    //   screenshot: "/images/projects/project1.png",
    //   technologies: ["C++", "Python", "HTML"],
    //   githubUrl: "https://github.com/...",
    //   liveUrl: "https://...",
    //   featured: true,
    // }
  ]
};

export const experienceData = {
  heading: "My journey so far.",
  supportingText: "Every great engineer begins with curiosity and a willingness to learn.",
  timeline: [
    {
      id: "btech-cse",
      period: "2026 — Present",
      role: "First-Year B.Tech CSE Student",
      institution: "Amal Jyothi College of Engineering, Kanjirappally",
      university: "APJ Abdul Kalam Technological University (KTU)",
      badge: "Just getting started.",
      description: "Beginning my journey in Computer Science and Engineering, developing programming fundamentals and exploring different areas of technology.",
      milestones: [
        "Mastering structured programming logic and syntax in C",
        "Exploring object-oriented principles with C++",
        "Practicing algorithmic problem solving and writing clean functions",
        "Learning semantic web markup and modern frontend building blocks"
      ],
      current: true
    }
  ]
};

export const hobbiesData = {
  heading: "Beyond the screen.",
  supportingText: "A little glimpse into the things I enjoy outside technology.",
  items: [
    {
      id: "music",
      title: "Listening to music",
      shortTitle: "Music",
      description: "Music brings rhythm and creative clarity to long coding and study sessions. It sparks focus and keeps thoughts flowing.",
      visualType: "audio",
      icon: "Headphones",
      quote: "Rhythm, harmony, and creative focus."
    },
    {
      id: "drawing",
      title: "Drawing",
      shortTitle: "Drawing",
      description: "Translating thoughts and observations onto paper. Cultivates spatial awareness, aesthetics, and fine attention to detail.",
      visualType: "art",
      icon: "PenTool",
      quote: "Imagination captured line by line."
    },
    {
      id: "reading",
      title: "Reading",
      shortTitle: "Reading",
      description: "Exploring books, perspectives, and compelling ideas that cultivate critical thinking, curiosity, and empathy.",
      visualType: "books",
      icon: "BookOpen",
      quote: "Expanding horizons one page at a time."
    }
  ]
};

export const languagesData = {
  heading: "Languages I speak.",
  supportingText: "Connecting with diverse communities and thoughts.",
  items: [
    { name: "English", code: "EN", script: "English", native: "English", note: "Academic & Professional" },
    { name: "Malayalam", code: "ML", script: "മലയാളം", native: "മലയാളം", note: "Native Language" },
    { name: "Hindi", code: "HI", script: "हिन्दी", native: "हिन्दी", note: "National Language" }
  ]
};

/**
 * Certifications and Achievements:
 * Ready for additions as courses, workshops, hackathons, and events are completed.
 */
export const certificationsData = {
  heading: "Learning never stops.",
  supportingText: "Every step in learning counts. Certifications and achievements will appear here as my journey continues.",
  emptyState: {
    badge: "Milestones in Progress",
    title: "Learning never stops.",
    description: "Every step in learning counts. Certifications and achievements will appear here as my journey continues.",
    upcomingCategories: [
      { name: "Technical Workshops", icon: "Wrench" },
      { name: "Hackathons & Contests", icon: "Trophy" },
      { name: "Certification Courses", icon: "Award" },
      { name: "College Tech Events", icon: "Calendar" }
    ]
  },
  items: [
    // Reusable template for future certifications:
    // {
    //   id: "cert-1",
    //   name: "Certification Name",
    //   issuer: "Issuing Organization",
    //   issueDate: "2026",
    //   credentialUrl: "https://...",
    //   certificateImage: "/images/certifications/sample.png",
    //   category: "Course"
    // }
  ]
};

export const contactData = {
  heading: "Let's connect and create something meaningful.",
  supportingText: "I'm always excited to meet new people, exchange ideas, learn from others, and explore opportunities in technology.",
  email: "akshayarobinse@gmail.com",
  location: "India",
  locationDetails: "Kerala, India",
  responseWindow: "Usually responds within 24 hours",
  availabilityBadge: "Open to learning, collaboration & conversations"
};

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

