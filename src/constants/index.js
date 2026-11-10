import projects1 from '../assets/projects1.webp';
import projects2 from '../assets/projects2.webp';
import projects3 from '../assets/projects3.webp';
import projects4 from '../assets/projects4.webp';
import projects5 from '../assets/projects5.webp';
import projects6 from '../assets/projects6.webp';

export const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#work', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export const HERO_CONTENT = {
  greeting: 'Welcome to my portfolio',
  headline:
    'Front-End & Full-Stack Software Engineer | Enterprise Server Diagnostics',
  location: 'San Jose, CA · U.S. Citizen',
  introduction:
    'I’m Mohammad Abbasi, a front-end & full-stack software engineer with 8+ years building responsive, component-driven web applications.',
  description:
    'I build with React, JavaScript and Node.js for healthcare, life sciences and small-business clients, and now diagnose enterprise AI and cloud servers at Quanta.',
  resumeLinkText: 'Download Resume',
  resumeLink: '/Mohammad AbbasiResume.pdf',
};

export const PROJECTS = [
  {
    name: 'Coeus',
    description: 'Take a quiz and discover your wild side!',
    image: projects1,
    link: 'https://github.com/nbruggeman92/get-wetto',
  },
  {
    name: 'SoccerSphere HQ',
    description:
      'This project is a Soccer Information application that provides current clubs in 5 main europe contries league information.',
    image: projects2,
    link: 'https://github.com/Moe1362/soccer-info',
  },
  {
    name: 'Groove',
    description:
      'Welcome to Groov! A user-friendly tool designed to streamline the creation of playlists.',
    image: projects3,
    link: 'https://github.com/GaviDev8/music-idea',
  },
  {
    name: 'Game Hub',
    description: 'This project is about all console games categories.',
    image: projects4,
    link: 'https://github.com/Moe1362/game-clone',
  },
  {
    name: 'Movie-Guide',
    description:
      'This App provides functionality for a movie search application using the OMDB API.',
    image: projects5,
    link: 'https://github.com/Moe1362/movie-guide',
  },
];

export const ABOUT_CONTENT = {
  paragraphs: [
    'I am a front-end and full-stack engineer with 8+ years of experience building responsive, component-driven web applications in React, JavaScript and Node.js for healthcare, life sciences and small-business clients. I ship reusable UI libraries and design systems backed by RESTful APIs, PostgreSQL and AWS, and I have cut page load times by up to 30%.',
    'Today I diagnose about 10 enterprise AI and cloud servers a day for Microsoft and NVIDIA programs at Quanta, which adds hands-on root-cause analysis, testing and documentation discipline to how I build software. My toolkit includes React, Vite, Tailwind CSS, SCSS, Node.js, Express, GraphQL, PostgreSQL, MongoDB and AWS (EC2, Lambda).',
  ],
};

export const SKILLS = [
  {
    category: 'Front-End',
    items: [
      'JavaScript (ES6+)',
      'HTML5',
      'CSS3',
      'SCSS',
      'Tailwind CSS',
      'Bootstrap',
      'jQuery',
      'Responsive & mobile-first design',
      'Cross-browser compatibility',
    ],
  },
  {
    category: 'Frameworks & Architecture',
    items: [
      'React (Hooks, Context API)',
      'Vite',
      'Component-driven development',
      'Reusable UI libraries',
      'Design systems',
    ],
  },
  {
    category: 'Back-End & APIs',
    items: ['Node.js', 'Express', 'Java', 'Python', 'RESTful services', 'GraphQL', 'MERN stack'],
  },
  {
    category: 'Databases',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Sequelize', 'Mongoose'],
  },
  {
    category: 'Cloud & DevOps',
    items: ['AWS (EC2, Lambda)', 'CI/CD pipelines'],
  },
  {
    category: 'Performance & Quality',
    items: ['Code splitting', 'Lazy loading', 'Asset optimization', 'Chrome DevTools profiling'],
  },
  {
    category: 'Workflow',
    items: ['Git', 'GitHub', 'Agile/Scrum', 'Requirements gathering', 'Stakeholder communication'],
  },
  {
    category: 'Systems & Hardware',
    items: [
      'Server diagnostics',
      'Root-cause analysis',
      'System testing & validation',
      'Technical documentation',
    ],
  },
];

export const EDUCATION = [
  {
    yearRange: '2024',
    title: 'Full-Stack Web Development Certificate',
    school: 'UC Berkeley Extension (Coding Boot Camp)',
    location: 'Berkeley, CA',
  },
  {
    yearRange: '2012 — 2015',
    title: 'Computer Science Coursework',
    school: 'University of Saskatchewan',
    location: 'Saskatoon, Canada',
  },
];

export const EXPERIENCES = [
  {
    yearRange: 'Mar 2026 — Present',
    title: 'Technical Diagnostics Specialist at Quanta Manufacturing',
    location: 'Fremont, CA',
    description: [
      'Diagnose and repair about 10 enterprise AI and cloud servers per day for Microsoft and NVIDIA data center programs in a high-volume production environment.',
      'Isolate faults across CPU, memory, GPU, storage, power and networking components, and perform root-cause analysis that feeds back to engineering to improve product reliability.',
      'Run system testing, validation and quality checks to confirm each unit meets customer standards before release.',
      'Maintain detailed technical documentation of diagnostics, repairs and test results for engineering and QA teams, and recommend process improvements that reduce defect rates.',
    ],
  },
  {
    yearRange: 'Jan 2025 — Feb 2026',
    title: 'Freelance Full-Stack Web Developer',
    location: 'Remote',
    description: [
      'Built and deployed full-stack web applications for small-business and organizational clients, with responsive front ends in React, Vite and Tailwind CSS.',
      'Developed the RESTful APIs and database layers behind each site, connecting UI components to live data and business logic.',
      'Hosted client applications on AWS, running servers on EC2 and serverless functions on Lambda.',
      'Designed a reusable component library and design system, so new pages were assembled from shared modules instead of rebuilt.',
      'Cut page load time by up to 30% through code splitting, lazy loading and asset optimization.',
      'Gathered requirements directly from clients and turned them into technical specifications and delivery plans.',
    ],
  },
  {
    yearRange: 'Apr 2021 — Dec 2024',
    title: 'Front-End Developer at Cancer Care Institute',
    location: 'San Jose, CA',
    description: [
      'Designed and built scalable, reusable React components for patient- and staff-facing applications.',
      'Improved application load times by 20% through performance profiling and optimization.',
      'Implemented responsive, mobile-first interfaces with Bootstrap that worked consistently across devices and browsers.',
      'Diagnosed and resolved production front-end issues with Chrome DevTools, keeping deployed sites stable.',
      'Worked with designers, back-end developers and clinical stakeholders to deliver UI features on schedule.',
    ],
  },
  {
    yearRange: 'Jun 2018 — Mar 2021',
    title: 'Front-End Developer at BaseHealth',
    location: 'Sunnyvale, CA',
    description: [
      'Developed responsive web applications in React and Tailwind CSS, integrated with RESTful back-end services.',
      'Reduced CSS maintenance time by 30% by moving to a library of reusable, component-driven UI modules.',
      'Improved application performance by 25% through code optimization.',
      'Implemented React Hooks and the Context API for predictable, maintainable state management.',
    ],
  },
  {
    yearRange: 'May 2017 — May 2018',
    title: 'Full-Stack Developer at Clear Lab Inc.',
    location: 'Menlo Park, CA',
    description: [
      'Built data-driven web applications with HTML, CSS, JavaScript and Python, and enhanced back-end data processing workflows supporting lab operations.',
      'Developed Java-based RESTful services and integrated them with the JavaScript front end.',
      'Deployed applications to AWS through automated CI/CD pipelines that ran builds and checks on each merge.',
      'Delivered features on schedule in an Agile team, using Git for version control and code review.',
    ],
  },
];

export const CONTACT_CONTENT = {
  headline: "LET'S WORK ON SOMETHING GREAT",
  description:
    "I'm excited to collaborate on projects that push boundaries and create meaningful impact. Let's build something innovative and exceptional together.",
  email: 'moe.abbasi136262@gmail.com',
  phone: '(408) 429-4147',
  location: 'San Jose, CA · U.S. Citizen',
  socialLinks: [
    {
      platform: 'Twitter',
      url: 'https://x.com/mohammad_a55922',
      ariaLabel: 'Follow me on Twitter',
      icon: 'RiTwitterXFill',
    },
    {
      platform: 'GitHub',
      url: 'https://github.com/Moe1362',
      ariaLabel: 'View my GitHub profile',
      icon: 'RiGithubFill',
    },
    {
      platform: 'LinkedIn',
      url: 'https://www.linkedin.com/in/moeabbasi1983/',
      ariaLabel: 'Connect with me on LinkedIn',
      icon: 'RiLinkedinFill',
    },
  ],
  footerText: `© ${new Date().getFullYear()} Mohammad Abbasi. All rights reserved.`,
};
