export interface NavLink {
  label: string;
  href: string;
}

export interface Project {
  title: string;
  subtitle: string;
  type: "Front-End" | "Full-Stack" | "Back-End" | "Mobile";
  institution: string;
  year: string;
  description: string;
  highlights: string[];
  stack: string[];
  image?: string;
  github?: string;
  demo?: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  description?: string;
}

export interface Certification {
  title: string;
  provider: string;
  year: string;
  image?: string;
}

export interface TechCategory {
  category: string;
  items: string[];
}

export interface ContactInfo {
  phone: string;
  email: string;
  location: string;
  linkedin: string;
  github: string;
  website: string;
}

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
  { label: "Techstack", href: "#techstack" },
  { label: "Contact", href: "#contact" },
];

export const personalInfo = {
  name: "Zayd Kassimi",
  initials: "ZK",
  title: "Full-Stack Software Engineer",
  subtitle: "Digital Development & Information Systems",
  tagline:
    "Passionate about building high-performance web and mobile applications, from concept to deployment.",
  about: [
    "I'm Zayd Kassimi, a Web full-stack developer based in Morocco. I specialize in creating seamless and innovative web solutions, leveraging my skills in both front-end and back-end development to build dynamic and user-centric applications.",
    "As a Web full-stack developer, I specialize in crafting innovative web solutions that bring ideas to life. With a focus on both efficiency and creativity, I leverage my coding skills to develop dynamic, user-centric applications and websites. My expertise encompasses the full development lifecycle, from conceptualization to deployment, ensuring high-quality and impactful results.",
    "During my Web full-stack development, I honed skills in HTML5, CSS3, Sass (SCSS), JavaScript (ES6+), TypeScript, React.js, Next.js, Vue.js, Angular, Redux, Context API, Tailwind CSS, Bootstrap, Material UI, Responsive Design, Web Accessibility (WCAG), Progressive Web Apps (PWA), PHP, Laravel, Node.js, Express.js, Python, Django, Flask, Java, Spring Boot, REST API Development, GraphQL, Authentication & Authorization, JWT, OAuth 2.0, MVC Architecture, MySQL, PostgreSQL, MongoDB, SQLite, Redis, Database Design, Database Optimization, Git, GitHub, GitLab, Docker, Linux, API Testing, WordPress, Scrum, Object-Oriented Programming (OOP), Web Security. These skills have enabled me to create seamless end-to-end and interactive user experiences.",
  ],
  languages: [
    { name: "Arabic", level: "Fluent" },
    { name: "French", level: "Fluent" },
    { name: "English", level: "Intermediate" },
  ],
};

export const projects: Project[] = [
  {
    title: "Localize",
    subtitle: "Dynamic web platform",
    type: "Full-Stack",
    institution: "",
    year: "2024",
    description:
      "A dynamic web platform enabling clients to showcase offerings, post ads, and engage users through a commenting and rating system.",
    highlights: [],
    stack: ["React.js", "Laravel", "Laravel Auth"],
    image: "/img/localize.png",
  },
  {
    title: "Portfolio",
    subtitle: "Full-stack portfolio with admin dashboard",
    type: "Full-Stack",
    institution: "",
    year: "2025",
    description:
      "A dynamic, full-stack portfolio with an admin dashboard, crafted with Next.js, React.js, Aceternity UI, and a blend of modern technologies for ultimate customization and performance.",
    highlights: [],
    stack: ["Next.js", "Tailwind CSS", "Prisma"],
    image: "/img/portfolio.png",
  },
  {
    title: "Jewelry Store",
    subtitle: "Online jewelry store",
    type: "Front-End",
    institution: "",
    year: "2024",
    description:
      "A sleek online jewelry store built with HTML, CSS, and JavaScript, featuring product sorting, a dynamic shopping cart, and an admin dashboard for tracking buyer information and sales analytics.",
    highlights: [],
    stack: ["JavaScript", "HTML", "CSS"],
    image: "/img/jewelrystore.png",
  },
  {
    title: "Food Del",
    subtitle: "Food delivery platform",
    type: "Front-End",
    institution: "OFPPT",
    year: "2024",
    description:
      "A modern React-based food delivery platform with interactive menu browsing, shopping cart functionality, and user authentication.",
    highlights: [],
    stack: ["React.js", "React Router DOM", "Vite"],
    image: "/img/fooddel.png",
  },
  {
    title: "School Management",
    subtitle: "School management system",
    type: "Full-Stack",
    institution: "EMSI",
    year: "2025",
    description:
      "A comprehensive Flask-based school management system with role-based access control, student grade tracking, and advanced analytics dashboard.",
    highlights: [],
    stack: ["Python", "Flask", "SQLite"],
    image: "/img/schoolmanagement.png",
  },
  {
    title: "Stock Management",
    subtitle: "Inventory tracking system",
    type: "Full-Stack",
    institution: "",
    year: "2025",
    description:
      "A comprehensive stock management system for tracking inventory, sales, and supplier relationships.",
    highlights: [],
    stack: ["Django", "Python", "SQLite"],
    image: "/img/stockmanagement.png",
  },
  {
    title: "UEFA Champions League Tracker",
    subtitle: "Real-time league tracker",
    type: "Full-Stack",
    institution: "",
    year: "2025",
    description:
      "A real-time UEFA Champions League tracker built with Next.js 14, TypeScript & Framer Motion.",
    highlights: [],
    stack: ["Next.js 14", "TypeScript", "Tailwind CSS"],
    image: "/img/championsleague.png",
  },
  {
    title: "Real Madrid Store App",
    subtitle: "Android shopping app",
    type: "Mobile",
    institution: "",
    year: "2025",
    description:
      "Full-featured Android shopping app for Real Madrid fans with AI chatbot, store locator, and premium Jetpack Compose UI.",
    highlights: [],
    stack: ["Kotlin", "Jetpack Compose", "Android"],
    image: "/img/rmaapp.png",
  },
  {
    title: "Hsabi",
    subtitle: "Stock management SaaS",
    type: "Full-Stack",
    institution: "",
    year: "2025",
    description:
      "Modern Stock Management SaaS for small to medium businesses — built with React, Node.js, Express, Prisma & PostgreSQL.",
    highlights: [],
    stack: ["React", "Vite", "Tailwind CSS"],
    image: "/img/hsabi.png",
  },
  {
    title: "DrawCalc",
    subtitle: "AI-powered math tool",
    type: "Full-Stack",
    institution: "",
    year: "2025",
    description:
      "Draw math expressions with your mouse and get instant AI-powered results.",
    highlights: [],
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/img/drawcalc.png",
  },
];

export const education: Education[] = [
  {
    degree: "Computer Engineering and Networks",
    institution: "EMSI",
    period: "Since 2024",
    description: "Specialized engineering program in information systems and software development.",
  },
  {
    degree: "Digital Development with Full Stack Web Option",
    institution: "OFPPT",
    period: "2022 — 2024",
    description: "Technician training specializing in full stack web development.",
  },
  {
    degree: "Scientific Baccalaureate (Physics)",
    institution: "Hassan Bno Tabit High School",
    period: "2021 — 2022",
  },
];

export const certifications: Certification[] = [
  {
    title: "Software Engineering: Software Design and Project Management",
    provider: "Coursera | University of Alberta",
    year: "2025",
    image: "/img/SoftwareEngineeringSoftwareDesignandProjectManagement.png",
  },
  {
    title: "Interactivity with JavaScript",
    provider: "Coursera | University of Michigan",
    year: "2025",
    image: "/img/Interactivity with JavaScript.png",
  },
  {
    title: "The Unix Workbench",
    provider: "Coursera | Johns Hopkins University",
    year: "2025",
    image: "/img/The Unix Workbench.png",
  },
  {
    title: "Object-Oriented Programming (in C++)",
    provider: "Coursera | EPFL",
    year: "2025",
    image: "/img/Introduction à la programmation orientée objet (en C++).png",
  },
  {
    title: "Python Essentials",
    provider: "CISCO",
    year: "2024",
    image: "/img/Python Essential.jpg",
  },
  {
    title: "Using Python to Access Web Data",
    provider: "Coursera | University of Michigan",
    year: "2025",
    image: "/img/Using Python to Access Web Data.png",
  },
];

export const techstack: TechCategory[] = [
  {
    category: "Front-End",
    items: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Next.js", "Angular", "Bootstrap", "WordPress"],
  },
  {
    category: "Back-End",
    items: ["PHP", "Laravel", "Symfony", "Java", "C++", "C#", "Python", "Django", ".NET", "Node.js", "Firebase"],
  },
  {
    category: "Mobile",
    items: ["React Native", "Flutter", "Kotlin"],
  },
  {
    category: "Databases",
    items: ["MySQL", "SQLite", "Firestore", "MongoDB", "Oracle"],
  },
  {
    category: "Dev Tools",
    items: ["VS Code", "XAMPP", "MongoDB Compass", "StarUML"],
  },
  {
    category: "UI/UX",
    items: ["Figma"],
  },
  {
    category: "Version Control",
    items: ["Git", "GitHub", "GitLab"],
  },
];

export const contactInfo: ContactInfo = {
  phone: "+212 693-176-901",
  email: "zaydkassiimi@gmail.com",
  location: "Casablanca, Morocco",
  linkedin: "https://linkedin.com/in/zayd-kassimi",
  github: "https://github.com/zaydkassimi",
  website: "https://zaydkassimi.me",
};
