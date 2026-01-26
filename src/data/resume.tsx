import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "JABO Jean Marie",
  initials: "JJ",
  url: "https://jabojeanmarie.dev",
  location: "Kigali, Rwanda",
  locationLink: "https://www.google.com/maps/place/kigali",
  description:
    "Product Designer & Frontend Developer. I design clear, accessible interfaces and ship them on the web.",
  summary:
    "Product designer and frontend developer with 3+ years of experience. I design dashboards and websites that prioritize clarity, accessibility, and usability, and I also contribute to implementation using React/Next.js and TypeScript.",
  avatarUrl: "/me.png",
  skills: [
    "Figma",
    "Adobe Photoshop",
    "Adobe Illustrator",
    "React",
    "Next.js",
    "TypeScript",
    "Redux",
    "TailwindCSS",
    "Sass",
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
      start: "Jun 2024",
      end: "Dec 2025",
      description:
        "Working as a frontend developer at TuzaPay Limited, a dynamic and innovative financial technology company. Designing and implementing web dashboards using Figma, React, Next.js, TailwindCSS, Redux, and TypeScript.",
    },
    {
      company: "Trendsaf",
      href: "#",
      badges: [],
      location: "Kigali, Rwanda",
      title: "Full Stack Developer",
      logoUrl: "/trendsafrica_logo.jpeg",
      start: "Aug 2024",
      end: "Nov 2024",
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
      start: "Feb 2024",
      end: "Jul 2024",
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
      start: "Dec 2023",
      end: "Feb 2024",
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
      start: "Dec 2022",
      end: "Apr 2023",
    },
  ],
  projects: [
    {
      title: "Base Food",
      href: "https://www.figma.com/design/amHHLR6CAUK5RDULm7FFFs/baseFood?t=T3FaQFEgFeEVa5Qd-1",
      dates: "UI/UX Dashboard Design",
      active: true,
      description:
        "Data aggregation and analytics platform for agriculture. Designed an analytics dashboard for visualizing agricultural data with a focus on clarity, insight discovery, and usability. Built structured layouts, charts, and scalable components in Figma to support stakeholder decision-making.",
      technologies: [
        "Figma",
        "Dashboard UI",
        "Data Visualization",
        "Information Architecture",
        "Component Design",
      ],
      links: [
        {
          type: "Figma",
          href: "https://www.figma.com/design/amHHLR6CAUK5RDULm7FFFs/baseFood?t=T3FaQFEgFeEVa5Qd-1",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/basefood.png",
      video: "",
    },
    {
      title: "Bridging Afrika",
      href: "https://www.figma.com/design/raiJCWjOuEcvRWNk1mwHa8/Bridging-Afrika?node-id=0-1&t=PCuhzCyArDPLEFz8-1",
      dates: "UI/UX Website Design",
      active: true,
      description:
        "Designed a responsive and accessible website for Bridging Afrika, a social enterprise committed to advancing disability inclusion through sustainable assistive technologies. Applied accessibility principles and delivered a design aligned with the organization’s mission, branding, and social impact goals.",
      technologies: [
        "Figma",
        "Responsive Design",
        "Accessibility",
        "UI Design",
        "UX Design",
      ],
      links: [
        {
          type: "Figma",
          href: "https://www.figma.com/design/raiJCWjOuEcvRWNk1mwHa8/Bridging-Afrika?node-id=0-1&t=PCuhzCyArDPLEFz8-1",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Website",
          href: "https://bridgingafrika.org/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/bridging_africa.png",
      video: "",
    },
    {
      title: "Eagles E-commerce Platform",
      href: "https://www.figma.com/design/niVmjORnW5Ke5Dsf8WQiYl/Eagles?node-id=0-1&p=f&t=nNiCKku4kWT9b7yW-0",
      dates: "UI/UX Flows + Frontend Contribution",
      active: true,
      description:
        "Multi-seller e-commerce platform. Designed UI flows for product browsing, seller management, and checkout experiences—optimizing usability for both sellers managing inventory and customers purchasing products. Contributed to frontend implementation using React and TypeScript.",
      technologies: [
        "Figma",
        "User Flows",
        "E-commerce UX",
        "React",
        "TypeScript",
      ],
      links: [
        {
          type: "Figma",
          href: "https://www.figma.com/design/niVmjORnW5Ke5Dsf8WQiYl/Eagles?node-id=0-1&p=f&t=nNiCKku4kWT9b7yW-0",
          icon: <Icons.globe className="size-3" />,
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
        {
          type: "Figma",
          href: "https://www.figma.com/design/1E274TlP49mOBszyJa5b6q/Klab-rebrand?node-id=0-1&p=f&t=t1DI2qkerfj5GtVq-0",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/klab_rwanda.png",
      video: "",
    },
  ],
} as const;
