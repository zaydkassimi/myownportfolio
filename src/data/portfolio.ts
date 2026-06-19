export interface NavLink {
  label: string;
  href: string;
}

export interface Project {
  title: string;
  slug: string;
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
  x?: string;
  instagram?: string;
  facebook?: string;
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
    title: "Food Del",
    slug: "food-del",
    subtitle: "Food delivery platform",
    type: "Front-End",
    institution: "OFPPT",
    year: "2024",
    description:
      "Food Del is a comprehensive food delivery web application built with React and modern web technologies. The platform features a responsive design that works seamlessly across all devices, offering users an intuitive interface to browse through diverse food categories including Pizza, Chicken, Tacos, Pasta, Couscous, Tajine, Fish, and Pastilla. Key Features: Interactive menu exploration with category filtering, real-time shopping cart management with quantity controls, user authentication system with login/signup functionality, responsive design optimized for mobile and desktop, modern UI with smooth animations and transitions, complete e-commerce functionality with price calculations, and professional footer with company information and social links. The application demonstrates modern React development practices including Context API for state management, React Router for navigation, and component-based architecture.",
    highlights: ["Food Delivery", "React Application", "E-commerce", "Responsive Design", "Shopping Cart", "User Authentication", "Modern UI/UX", "Frontend Development"],
    stack: ["React.js", "React Router DOM", "Vite", "CSS3", "JavaScript ES6+", "Context API"],
    image: "/img/fooddel.png",
    github: "https://github.com/zaydkassimi/Food-Del",
  },
  {
    title: "Localize",
    slug: "localize",
    subtitle: "Dynamic web platform",
    type: "Full-Stack",
    institution: "",
    year: "2024",
    description:
      "Created a dynamic web platform enabling clients to showcase offerings, post ads, and engage users through a commenting and rating system. Mastering full-stack web development, I specialize in using ReactJS to build dynamic and responsive user interfaces. With my expertise in UI/UX design using Figma, I create attractive and intuitive layouts. Leveraging JSON data management and Git for version control, I ensure efficient project organization and smooth collaboration. Experienced in analyzing project requirements and creating technical specifications, I have successfully delivered projects that meet various client needs. This platform allows clients to showcase their offerings, post ads, and choose from a range of usage options, including a free option. Additionally, I implemented a commenting and rating system to facilitate visitor feedback and encourage engagement with the featured venues.",
    highlights: ["MongoDB", "React Js", "CSS", "Laravel", "Front end", "Full Stack"],
    stack: ["React.js", "Laravel", "Laravel Auth", "MongoDB", "CSS"],
    image: "/img/localize.png",
    github: "https://github.com/ZaYdKASSIMI/Localize",
  },
  {
    title: "Jewelry Store",
    slug: "jewelry-store",
    subtitle: "Online jewelry store",
    type: "Full-Stack",
    institution: "",
    year: "2024",
    description:
      "This project is a fully functional online jewelry store built using HTML, CSS, and JavaScript, offering users the ability to browse and purchase elegant jewelry items such as diamond rings, gold necklaces, pearl earrings, and silver bracelets. The website features intuitive sorting by price, a dynamic shopping cart, and a responsive design for seamless browsing. Additionally, an admin dashboard provides comprehensive insights, including buyer information, top sales, and sales analytics, enabling efficient store management. This project combines a user-friendly interface with powerful backend functionality to deliver a complete e-commerce solution.",
    highlights: ["JavaScript", "HTML", "CSS", "FrontEnd", "BackEnd"],
    stack: ["JavaScript", "HTML", "CSS"],
    image: "/img/jewelrystore.png",
    github: "https://github.com/zaydkassimi/Jewelry-Store",
  },
  {
    title: "School Management",
    slug: "school-management",
    subtitle: "School management system",
    type: "Full-Stack",
    institution: "EMSI",
    year: "2025",
    description:
      "A modern web application built with Python Flask for educational institutions to manage student academic performance. The system features a robust authentication system with admin and student role-based access, comprehensive grade management across multiple modules, attendance tracking, and an advanced analytics dashboard with risk assessment capabilities. Key features include: Admin dashboard for complete student management, student self-registration and personal dashboard, real-time analytics and performance tracking, risk detection algorithms with configurable thresholds, data export functionality (CSV/Excel), responsive design with modern UI/UX, and secure session management with password hashing. The application uses SQLite database with automatic initialization and includes comprehensive testing.",
    highlights: ["School Management", "Education", "Flask", "Python", "Web Application", "Student Portal", "Grade Management", "Analytics Dashboard"],
    stack: ["Python", "Flask", "SQLite", "HTML", "CSS", "JavaScript", "Pandas", "OpenPyXL"],
    image: "/img/schoolmanagement.png",
    github: "https://github.com/zaydkassimi/school-management",
  },
  {
    title: "Stock Management",
    slug: "stock-management",
    subtitle: "Inventory tracking system",
    type: "Full-Stack",
    institution: "",
    year: "2025",
    description:
      "A full-featured stock management application designed to streamline inventory control and business operations. The system provides real-time tracking of product quantities, automated stock level alerts, comprehensive transaction history, and detailed reporting capabilities. Built with Django framework, it includes user authentication, dashboard analytics, supplier management, client tracking, and automated inventory updates. The application helps businesses maintain optimal stock levels, track sales performance, manage supplier relationships, and generate insightful reports for better decision-making.",
    highlights: ["inventory management", "stock tracking", "business management", "dashboard", "reporting", "supplier management", "sales tracking"],
    stack: ["Django", "Python", "SQLite", "Bootstrap", "JavaScript", "HTML", "CSS", "Crispy Forms"],
    image: "/img/stockmanagement.png",
    github: "https://github.com/zaydkassimi/stock-management",
  },
  {
    title: "UEFA Champions League Tracker",
    slug: "champions-league-tracker",
    subtitle: "Real-time league tracker",
    type: "Full-Stack",
    institution: "",
    year: "2026",
    description:
      "Real-time UEFA Champions League tracker — follow every match of the 2025/26 season, check live scores, explore results by stage, and dive into the full history of UCL winners since 1956.",
    highlights: ["UEFA", "ChampionsLeague", "UCL", "Football", "LiveScores", "NextJS", "React", "TypeScript", "TailwindCSS", "FramerMotion"],
    stack: ["Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion", "SWR", "football-data.org API"],
    image: "/img/championsleague.png",
    github: "https://github.com/zaydkassimi/UCL",
    demo: "https://ucl-championsleague.vercel.app/",
  },
  {
    title: "Real Madrid Store App",
    slug: "real-madrid-store-app",
    subtitle: "Android shopping app",
    type: "Mobile",
    institution: "",
    year: "2026",
    description:
      "The Real Madrid Store App is an unofficial, high-quality Android application dedicated to the most successful football club in history. Built with modern Android technologies, it offers fans a complete shopping experience for the 2025/26 season jerseys, training gear, and official merchandise. Key Features: Browse the full Real Madrid 2025/26 collection with beautiful product images, AI Chatbot powered locally by DeepSeek-R1:8b via Ollama (100% offline & free), Camera integration, Store Locator using Google Maps, Near Me feature, Cart, Checkout & Wishlist with persistent sessions, and stunning dark UI in Real Madrid Navy, White & Gold colors.",
    highlights: ["Android App", "Jetpack Compose", "Real Madrid", "AI Chatbot", "Offline AI", "Shopping App", "Store Locator", "Kotlin", "Football"],
    stack: ["Kotlin", "Jetpack Compose", "Android", "MVVM", "Retrofit", "Ollama", "DeepSeek", "Google Maps"],
    image: "/img/rmaapp.png",
    github: "https://github.com/zaydkassimi/RealMadridStore-Application",
  },
  {
    title: "Hsabi",
    slug: "hsabi",
    subtitle: "Stock management SaaS",
    type: "Full-Stack",
    institution: "",
    year: "2026",
    description:
      "Hsabi is a modern, intuitive, and high-performance Stock Management SaaS designed for small to medium businesses. It provides a seamless experience for tracking inventory, managing stock levels, and showcasing products through a public storefront. Key Features: Secure Authentication with JWT, Product Management (CRUD + stock tracking), Stock Movements with detailed history, Low Stock Alerts & Smart Analytics, Public Storefront for sharing product catalog, CSV Export for inventory reports, and Fully Responsive (Desktop + Mobile).",
    highlights: ["Full Stack", "SaaS", "Inventory Management", "Stock Management", "React", "Node.js", "PostgreSQL", "Prisma", "Dashboard", "Business Tool"],
    stack: ["React", "Vite", "Tailwind CSS", "Node.js", "Express", "Prisma", "PostgreSQL", "JWT"],
    image: "/img/hsabi.png",
    github: "https://github.com/zaydkassimi/hsabi",
    demo: "https://hsabi.vercel.app/",
  },
  {
    title: "DrawCalc",
    slug: "drawcalc",
    subtitle: "AI-powered math tool",
    type: "Full-Stack",
    institution: "",
    year: "2026",
    description:
      "DrawCalc is a handwriting calculator that uses Google Gemini AI to recognize math expressions drawn on a canvas with your mouse. No keyboard needed — just draw something like 15 + 5 and get the answer instantly. Built with Next.js 14, TypeScript, and Tailwind CSS with a clean minimal design and dark mode support.",
    highlights: ["AI", "Calculator", "Canvas", "Handwriting", "Next.js", "Google Gemini"],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Google Gemini AI"],
    image: "/img/drawcalc.png",
    github: "https://github.com/zaydkassimi/DrawCalc",
    demo: "https://drawcalc.vercel.app/",
  },
  {
    title: "Portfolio",
    slug: "portfolio",
    subtitle: "Full-stack portfolio with admin dashboard",
    type: "Full-Stack",
    institution: "",
    year: "2026",
    description:
      "My personal portfolio website built with Next.js and Tailwind CSS. Featuring animated backgrounds, browser mockup project cards, GSAP scroll effects, and a VS Code-inspired design. Showcasing my projects, skills, and experience as a full-stack developer. This project demonstrates my expertise in modern web development, from responsive design to interactive animations, creating a unique and engaging user experience that reflects my technical skills and creative vision.",
    highlights: ["Next.js", "Tailwind CSS", "TypeScript", "Framer Motion", "Full Stack"],
    stack: ["Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
    image: "/img/portfolio.png",
    github: "https://github.com/zaydkassimi/myownportfolio",
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
  x: "https://x.com/zaydkassimii",
  instagram: "https://www.instagram.com/zaydkassimii/",
  facebook: "https://www.facebook.com/zaydkassimii",
};
