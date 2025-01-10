import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "JABO Jean Marie",
  initials: "JJ",
  url: "https://jabojeanmarie.dev",
  location: "Kigali, Rwanda",
  locationLink: "https://www.google.com/maps/place/kigali",
  description:
    "Software Developer & Product Designer. I love building things and helping people learn technology.",
  summary:
    "Software developer and product designer with 2+ years of experience. Strong ownership mindset, proficient in software development technologies, passionate in visual design, excellent communication and collaboration skills, and a passion for learning and adapting to new technologies.",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Express",
    "MongoDB",
    "PostgreSQL",
    "Redux",
    "TailwindCSS",
    "Sass",
    "Figma",
    "Docker",
    "AWS Lambda",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "jabojeanmarie5@gmail.com",
    tel: "+250780693425",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Heisjabo",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/jabojeanmarie",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/heisjabo",
        icon: Icons.x,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Tuza Pay",
      href: "https://tuzapay.com",
      badges: [],
      location: "Kigali, Rwanda",
      title: "Frontend Developer",
      logoUrl: "/tuzapay_logo.jpeg",
      start: "June 2024",
      end: "Present",
      description:
        "Working as a frontend developer at TuzaPay Limited, a dynamic and innovative financial technology company. Developing and maintaining web dashboards using React, Next.js, TailwindCSS, Redux, and TypeScript.",
    },
    {
      company: "Trendsaf",
      href: "#",
      badges: [],
      location: "Kigali, Rwanda",
      title: "Full Stack Developer",
      logoUrl: "/trendsafrica_logo.jpeg",
      start: "August 2024",
      end: "November 2024",
      description:
        "Worked as a full stack developer implementing features and maintaining web applications using React, Node.js, and PostgreSQL.",
    },
    {
      company: "Andela",
      href: "https://andela.com",
      badges: [],
      location: "Kigali, Rwanda",
      title: "Software Engineer Apprentice",
      logoUrl: "/andela_logo.jpeg",
      start: "February 2024",
      end: "July 2024",
      description:
        "Participated in Andela Technical Leadership Program (ATLP), a career accelerator program empowering Rwandan nationals to become world-class engineers. Developed strong technical and professional skills through hands-on projects and mentorship.",
    },
    {
      company: "KLab Rwanda",
      href: "https://klab.rw",
      badges: [],
      location: "Kigali, Rwanda",
      title: "Learning Facilitator",
      logoUrl: "/icon.svg",
      start: "December 2023",
      end: "February 2024",
      description:
        "Served as a Learning Facilitator and Full Stack Developer. Guided and mentored high school graduates, conducted coding workshops, and assisted in the development and deployment of full stack applications.",
    },
  ],
  education: [
    {
      school: "University of Rwanda CST",
      href: "https://ur.ac.rw",
      degree: "Bachelor of Creative Design",
      logoUrl: "/uni_of_rwanda_logo.jpeg",
      start: "2021",
      end: "2025",
    },
    {
      school: "freeCodeCamp",
      href: "https://www.freecodecamp.org",
      degree: "JavaScript Algorithms and Data Structures",
      logoUrl: "/free_code_camp_logo.jpeg",
      start: "2021",
      end: "2022",
    },
    {
      school: "KLab Rwanda",
      href: "https://klab.rw",
      degree: "Software Development",
      logoUrl: "/icon.svg",
      start: "December 2022",
      end: "April 2023",
    },
  ],
  projects: [
    {
      title: "Bridging Afrika",
      href: "https://www.bridgingafrika.org/",
      dates: "Jan 2024 - Mar 2024",
      active: true,
      description:
        "Developed a modern, responsive website for Bridging Afrika, a social enterprise empowering African communities through technology, education, and economic opportunities.",
      technologies: [
        "Reactjs",
        "Javascript",
        "MongoDB",
        "Nodejs",
        "Express",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.bridgingafrika.org/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/bridging_africa.png",
      video: "",
    },
    {
      title: "Eagles E-commerce",
      href: "https://eagles-ec-fe-staging.vercel.app/",
      dates: "April 2024 - July 2024",
      active: true,
      description:
        "Built a full-stack e-commerce platform during Andela's Technical Leadership Program. Features include product management, shopping cart, user authentication, and order processing.",
      technologies: [
        "React.js",
        "TypeScript",
        "Node.js",
        "PostgreSQL",
        "Sequelize",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://eagles-ec-fe-staging.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Heisjabo/eagles-ec-fe",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/eagles_ec.png",
      video: "",
    },
    {
      title: "KLab Rwanda",
      href: "https://klab-site.netlify.app/",
      dates: "Feb 2023 - April 2023",
      active: true,
      description:
        "Developed a dynamic website for KLab Rwanda, a leading tech innovation hub in Kigali. The platform showcases their various tech training programs, community initiatives, and serves as a central hub for tech talent development in Rwanda.",
      technologies: [
        "React.js",
        "Javascript",
        "Node.js",
        "MongoDB",
        "Express",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://klab-site.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/klab_rwanda.png",
      video: "",
    },
  ],
} as const;
