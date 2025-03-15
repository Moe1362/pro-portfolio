import projects1 from "../assets/projects1.webp";
import projects2 from "../assets/projects2.webp";
import projects3 from "../assets/projects3.webp";
import projects4 from "../assets/projects4.webp";
import projects5 from "../assets/projects5.webp";
import projects6 from "../assets/projects6.webp";



export const LINKS = [
  { href: "#work", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const HERO_CONTENT = {
  greeting: "Hey there! 🖐️",
  introduction:
    "I’m Mohammad Abbasi, a creative frontend developer, crafting immersive and intuitive web experiences.",
  description:
    "I’m currently helping businesses bring their visions to life through interactive digital solutions.",
  resumeLinkText: "Download Resume",
  resumeLink: "/resume.pdf",
};

export const PROJECTS = [
  {
    name: "Coeus",
    description: "Take a quiz and discover your wild side!",
    image: projects1,
    link: "https://github.com/nbruggeman92/get-wetto",
  },
  {
    name: "SoccerSphere HQ",
    description: "This project is a Soccer Information application that provides current clubs in 5 main europe contries league information.",
    image: projects2,
    link: "https://github.com/Moe1362/soccer-info",
  },
  {
    name: "Groove",
    description: "Welcome to Groov! A user-friendly tool designed to streamline the creation of playlists.",
    image: projects3,
    link: "https://github.com/GaviDev8/music-idea",
  },
  {
    name: "Game Hub",
    description:
      "This project is about all console games categories.",
    image: projects4,
    link: "https://github.com/Moe1362/game-clone",
  },
  {
    name: "Movie-Guide",
    description: "This App provides functionality for a movie search application using the OMDB API.",
    image: projects5,
    link: "https://github.com/Moe1362/movie-guide",
  },
  
];

export const ABOUT_CONTENT = {
  paragraphs: [
    "I am a dedicated frontend developer with a passion for building modern web applications that are both functional and aesthetically pleasing. Over the years, I have worked on numerous projects ranging from single-page applications to complex multi-tiered systems, always ensuring high performance and seamless user experiences.",
    "I specialize in using technologies like React, Chakra, JavaScript, HTML, SCSS and TailwindCSS to create responsive and scalable interfaces. My focus is on writing clean, maintainable code while collaborating with cross-functional teams to deliver projects that meet both business goals and user needs. I thrive in environments that challenge me to continuously learn and grow.",
  ],
};

export const EXPERIENCES = [
  {
    yearRange: "Apr 2020 — Dec 2023",
    title: "Front End Developer Freelancer",
    location: "Remote",
    description: [
      "Developed front-end features for a soccer app using HTML, CSS, JavaScript, and ReactJS.",
      "Implemented responsive design principles with Bootstrap and media queries for optimal user experience.",
      "Collaborated closely with the design team, utilizing Git for version control to bring creative vision to life.",
      "Optimized website performance and resolved issues efficiently using Chrome DevTools.",
    ],
  },
  {
    yearRange: "Jun 2018 — March 2020",
    title: "Frontend Engineer at BaseHealth.",
    location: "Sunnyvale, CA",
    description: [
      "Built dynamic, responsive, and accessible web applications using React and Tailwind CSS.",
      "Built reusable components and front-end libraries for future use in React applications.",
      "Ensured cross-browser compatibility and responsiveness by thoroughly testing React applications across various devices and browsers.",
      "Implemented state management using React hooks and Context API to manage application state effectively",
      "Integrated Chakra UI components to create a consistent and visually appealing user interface.",
    ],
  },
  {
    yearRange: "May 2017 — May 2018",
    title: "Full-Stack Developer at ClearLab INC",
    location: "Menlo Park, CA",
    description: [
      "Created clean, precise, cross-browser compatible code using HTML, CSS, and JavaScript.",
      "Developed site navigation and backend processes with JavaScript and NodeJS.",
      "Worked in Agile environment with backend engineers and QA to deliver projects on time using Git.",
    ],
  },
];



export const CONTACT_CONTENT = {
  headline: "LET'S WORK ON SOMETHING GREAT",
  description:
    "I'm excited to collaborate on projects that push boundaries and create meaningful impact. Let's build something innovative and exceptional together.",
  email: "moe.abbasi136262@gmail.com",
  socialLinks: [
    {
      platform: "Twitter",
      url: "https://x.com/mohammad_a55922",
      ariaLabel: "Follow me on Twitter",
      icon: "RiTwitterXFill",
    },
    {
      platform: "GitHub",
      url: "https://github.com/Moe1362",
      ariaLabel: "View my GitHub profile",
      icon: "RiGithubFill",
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/moeabbasi1983/",
      ariaLabel: "Connect with me on LinkedIn",
      icon: "RiLinkedinFill",
    },
  ],
  footerText: `© ${new Date().getFullYear()} Mohammad Abbasi. All rights reserved.`,
};
