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

// Технологии
export { default as css } from './css.png';
export { default as git } from './git.png';
export { default as html } from './html.png';
export { default as javascript } from './javascript.png';
export { default as mongodb } from './mongodb.png';
export { default as nodejs } from './nodejs.png';
export { default as reactjs } from './reactjs.png';
export { default as redux } from './redux.png';
export { default as tailwind } from './tailwind.png';
export { default as threejs } from './threejs.png';
export { default as gsap } from './gsap.png';
export { default as framer } from './framer.png';
export { default as figma } from './figma.png';
export { default as mysql } from './mysql.png';
export { default as express } from './express.png';
export { default as aws } from './aws.png';
export { default as mui } from './mui.png';

// Проекты
export { default as gearXpert } from './gearXpert.png';
export { default as project2 } from './project2.png';
export { default as project3 } from './project3.png';
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