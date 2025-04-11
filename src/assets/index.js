import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  gearXpert,
  project2,
  project3,
  mysql,
  express,
  aws,
  mui,
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs
} from '../assets';
// Основные иконки
export { default as logo } from './logo.png';
export { default as backend } from './backend.png';
export { default as creator } from './creator.png';
export { default as mobile } from './mobile.png';
export { default as web } from './web.png';
export { default as github } from './github.png';
export { default as menu } from './menu.svg';
export { default as close } from './close.svg';

// Технологии - заменяем на существующие аналоги
export { default as css } from './backend.png'; // Используем backend.png вместо css.png
export { default as git } from './github.png';
export { default as html } from './backend.png';
export { default as javascript } from './backend.png';
export { default as mongodb } from './backend.png';
export { default as nodejs } from './backend.png';
export { default as reactjs } from './backend.png';
export { default as redux } from './backend.png';
export { default as tailwind } from './backend.png';
export { default as threejs } from './backend.png';
export { default as gsap } from './backend.png';
export { default as framer } from './backend.png';
export { default as figma } from './backend.png';
export { default as mysql } from './backend.png';
export { default as express } from './backend.png';
export { default as aws } from './backend.png';
export { default as mui } from './backend.png';

// Проекты
export { default as gearXpert } from './backend.png'; // Временная замена
export { default as project2 } from './backend.png';
export { default as project3 } from './backend.png';
export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Projects", 
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Pentester",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Ethical Hacker",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "GSAP",
    icon: gsap,
  },
  {
    name: "Framer Motion",
    icon: framer,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Git",
    icon: git,
  }
];

const projects = [
  {
    name: "My Project",
    description: "This is my first project",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      }
    ],
    image: project2,
    source_code_link: "https://github.com/",
  }
];

export { services, technologies, projects };