# Akshaya Robinse — Personal Developer Portfolio

A creative, modern, and fully responsive personal portfolio website for **Akshaya Robinse**, a first-year B.Tech Computer Science and Engineering student at **Amal Jyothi College of Engineering, Kanjirappally** (affiliated with APJ Abdul Kalam Technological University - KTU).

Built with **React**, **Vite**, **Tailwind CSS**, and **Framer Motion**.

---

## 🚀 Getting Started

### 1. Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- `npm` (comes with Node.js)

### 2. Installation
Clone or navigate to the project directory and install dependencies:
```bash
npm install
```

### 3. Development Server
Start the local Vite development server with Hot Module Replacement (HMR):
```bash
npm run dev
```
Open your browser at `http://localhost:5173/` (or the URL displayed in the terminal).

### 4. Production Build & Preview
To create an optimized production build:
```bash
npm run build
```
To test the production build locally:
```bash
npm run preview
```

---

## 🎨 Visual Design System

- **Palette**: Clean white backdrop with vivid blue accents
  - Primary Blue: `#2563EB`
  - Secondary Blue: `#3B82F6`
  - Dark Blue: `#1D4ED8`
  - Soft Blue: `#DBEAFE`
  - Surface White: `#FFFFFF`
  - Subtle Gray: `#F8FAFC`
  - Text Main: `#0F172A`
  - Text Muted: `#64748B`
  - Borders: `#E2E8F0`
- **Typography**:
  - Headings: **Space Grotesk**
  - Body Text: **Inter**
- **Architecture**:
  - Bento grids for Technical Skills & Soft Skills
  - Architectural dot/grid backgrounds
  - Floating tech indicators with gentle Framer Motion animations
  - Responsive navigation with active section indicator & mobile drawer
  - Accessible contrast ratios and `prefers-reduced-motion` compliance

---

## 📁 Project Architecture

```
portfolio/
├── public/
│   ├── favicon.svg              # Custom AR. monogram SVG favicon
│   ├── resume.pdf               # Downloadable academic resume
│   └── images/
│       └── avatar-placeholder.svg # Modern tech avatar placeholder
├── src/
│   ├── assets/
│   │   ├── icons/
│   │   │   └── BrandIcons.jsx   # SVG icons for GitHub, LinkedIn
│   │   └── images/
│   ├── components/
│   │   ├── Navbar.jsx           # Sticky nav with blur & active section pill
│   │   ├── MobileMenu.jsx       # Smooth slide-out mobile drawer
│   │   ├── SectionHeading.jsx   # Editorial heading with badge & blue accent
│   │   ├── InfoCard.jsx         # About section cards (01, 02, 03)
│   │   ├── SkillCard.jsx        # Bento card for C, C++, Python, HTML
│   │   ├── SoftSkillCard.jsx    # Card for 10 soft skills
│   │   ├── InterestCard.jsx     # Card for 8 areas of curiosity
│   │   ├── ProjectCard.jsx      # Reusable project card
│   │   ├── EmptyState.jsx       # Intentional "Coming Soon" card
│   │   ├── TimelineItem.jsx     # Learning journey timeline entry
│   │   ├── EducationCard.jsx    # Editorial education timeline card
│   │   ├── CertificationCard.jsx# Reusable certification card
│   │   ├── HobbyCard.jsx        # Music, Drawing, Reading cards
│   │   ├── LanguageCard.jsx     # English, Malayalam, Hindi cards
│   │   ├── ContactForm.jsx      # Validated message form with confetti & mailto
│   │   ├── Footer.jsx           # Minimal footer with dynamic year & back-to-top
│   │   └── ScrollProgress.jsx   # Top progress bar
│   ├── sections/
│   │   ├── HeroSection.jsx
│   │   ├── AboutSection.jsx
│   │   ├── EducationSection.jsx
│   │   ├── SkillsSection.jsx
│   │   ├── SoftSkillsSection.jsx
│   │   ├── InterestsSection.jsx
│   │   ├── ProjectsSection.jsx
│   │   ├── ExperienceSection.jsx
│   │   ├── HobbiesSection.jsx
│   │   ├── LanguagesSection.jsx
│   │   ├── CertificationsSection.jsx
│   │   └── ContactSection.jsx
│   ├── data/
│   │   └── portfolio.js         # Single source of truth for all content
│   ├── hooks/
│   │   └── useActiveSection.js  # Viewport scroll position tracker
│   ├── utils/
│   │   └── scroll.js            # Smooth scroll helper with header offset
│   ├── App.jsx                  # Main page assembler
│   ├── index.css                # Tailwind CSS v4 setup & theme definitions
│   └── main.jsx
├── index.html                   # SEO metadata, Google Fonts, Open Graph
├── package.json
└── vite.config.js
```

---

## ⚙️ How to Customize

### 1. Updating Personal Information & Data
All website copy, skills, college details, interests, and links are in:
👉 [`src/data/portfolio.js`](file:///d:/Share/portfolio/src/data/portfolio.js)

### 2. Adding Real Projects
When you build new projects, open `src/data/portfolio.js` and add an object to `projectsData.items`:
```javascript
{
  id: "my-first-c-project",
  name: "CLI Student Management System",
  description: "A console-based application written in C utilizing structures and pointers.",
  screenshot: "/images/projects/project1.png",
  technologies: ["C", "Algorithms"],
  githubUrl: "https://github.com/...",
  liveUrl: null,
  featured: true,
}
```
The Projects section will automatically switch from the elegant empty state to an interactive grid of project cards!

### 3. Adding Your Photograph
To replace the avatar placeholder with your real photo:
1. Place your photo at `public/images/avatar.jpg` (or `.png`).
2. Open [`src/sections/HeroSection.jsx`](file:///d:/Share/portfolio/src/sections/HeroSection.jsx) and change `/images/avatar-placeholder.svg` to `/images/avatar.jpg`.

### 4. Updating Resume (PDF)
A genuine academic resume is included at [`public/resume.pdf`](file:///d:/Share/portfolio/public/resume.pdf). Whenever you want to update it, replace that file with your new PDF while keeping the filename `resume.pdf`.

### 5. Connecting LinkedIn & GitHub
In `src/data/portfolio.js`, update the `social` object:
```javascript
social: {
  linkedin: "https://linkedin.com/in/your-profile",
  github: "https://github.com/your-username",
}
```
The social links in the footer will automatically appear once valid URLs are supplied.
