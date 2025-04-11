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

export const navLinks = [
  {
    id: "about",
    title: "Обо мне / Men haqimda",
  },
  {
    id: "work",
    title: "Проекты / Loyihalar", 
  },
  {
    id: "contact",
    title: "Контакты / Bog'lanish",
  },
];

const services = [
  {
    title: "Пентестер / Pentester",
    icon: web,
  },
  {
    title: "Frontend разработчик / Frontend dasturchi",
    icon: mobile,
  },
  {
    title: "Backend разработчик / Backend dasturchi",
    icon: backend,
  },
  {
    title: "Этичный хакер / Ethical hacker",
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
    name: "Figma",
    icon: figma,
  },
  {
    name: "Redux",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Material UI",
    icon: mui,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express JS",
    icon: express,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Киберхавфсизлик мутахассиси / Специалист по кибербезопасности",
    iconBg: "#383E56",
    date: "2022 йил - хозиргача / 2022 - настоящее время",
    points: [
      "Веб-иловаларни пентeст қилиш / Проведение пентестов веб-приложений",
      "Хавфсизлик заифликларини таҳлил қилиш / Анализ уязвимостей безопасности",
      "Тестлашни автоматлаштириш учун скриптлар яратиш / Разработка скриптов для автоматизации тестирования",
      "Тизимларни химоя қилиш бўйича маслиҳатлар / Консультации по улучшению защиты систем",
    ],
  },
];

const projects = [
  {
    name: "Мой проект / Mening loyiham",
    description: "Бу меннинг биринчи лойихам / Это мой первый проект",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://github.com/",
  },
  {
    name: "Хавфсизлик воситаси / Инструмент безопасности",
    description: "Хакерлик ҳужумларига қарши восита / Инструмент для защиты от хакерских атак",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "cybersecurity",
        color: "pink-text-gradient",
      },
    ],
    image: gearXpert,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, projects };