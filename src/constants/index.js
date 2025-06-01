import {
  backend,
  flutter,
  react,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  ontrend,
  videoEditor,
  carrent,
  jobit,
  tripguide,
  threejs,
  metaLab,
  supabase,
  firebase,
  android,
  playStore,
  appStore,
  ios,
  infraredz,
  weatherWatch,
  medica,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Flutter Developer",
    icon: flutter,
  },
  {
    title: "Web Developer",
    icon: react,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Video Editor",
    icon: videoEditor,
  },
];

const technologies = [
  {
    name: "Flutter",
    icon: flutter,
  },
  {
    name: "firebase",
    icon: firebase,
  },
  {
    name: "Supabase",
    icon: supabase,
  },
  {
    name: "ios",
    icon: ios,
  },
  {
    name: "Android",
    icon: android,
  },
  {
    name: "Play Store",
    icon: playStore,
  },
  {
    name: "App Store",
    icon: appStore,
  },
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "Css",
    icon: css,
  },
  {
    name: "React Js",
    icon: reactjs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "java script",
    icon: javascript,
  },
];

const experiences = [
  {
    title: "Flutter Developer",
    company_name: "ONtrend",
    icon: ontrend,
    iconBg: "#383E56",
    date: "July 2024 – Present",
    points: [
      "One of the core Flutter developers building ONtrend's eCommerce and business applications.",
      "Integrated payment gateways, Firebase, and Supabase for real-time data handling and authentication.",
      "Used GetX for efficient state management, routing, and enhancing app performance.",
      "Independently developed Rider and Vendor apps using Flutter to streamline delivery and business operations",
    ],
  },
  {
    title: "Flutter Developer Intern",
    company_name: "First Logic Meta Lab",
    icon: metaLab,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - Jul 2024",
    points: [
      "Developed cross-platform mobile apps using Flutter, focusing on clean UI and smooth user experience",
      "Used Riverpod for efficient state management and implemented dynamic app features.",
      "Integrated Cloud Firestore to manage real-time data and backend services.",
      "Collaborated with the development team to debug issues, optimize performance, and deliver quality app updates.",
    ],
  },

];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Infraredz",
    description:
      "The Infraredz website is a static site showcasing Polaraid's infrared technology services and products, providing visitors with detailed information and serving as the company’s professional online presence.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: infraredz,
    source_code_link: "https://infra-redz.github.io/infraredz/",
  },
  {
    name: "Weather Watch",
    description:
      "Weather Watch provides real-time weather updates with a beautiful UI, using Flutter and Riverpod. Search any location to view forecasts, temperature, sunrise/sunset times, and live weather conditions.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: weatherWatch,
    source_code_link: "https://github.com/Arshadbekk/weather_watch",
  },
  {
    name: "Medica",
    description:
      "Medica is a Flutter-Firebase doctor booking app that lets users search doctors, view profiles, and book appointments easily, offering a smooth and efficient demo experience.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
   ,
    ],
    image: medica,
    source_code_link: "https://github.com/Arshadbekk/medica",
  },
];

export { services, technologies, experiences, testimonials, projects };
