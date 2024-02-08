import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import mercadoPagoClone from "@/public/mercado-pago-clone.png";
import festbnbProject from "@/public/festbnb-project.png";
import controlClientesWithJava from "@/public/controlClientes-java.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Developer",
    location: "ScaleMote (actualmente: Bigger)",
    description:
      "Desarrollador de software, con tecnologías JavaScript, entre otras: ReactJS, TypeScript, NestJS, MySQL, TypeORM, Jest, Cypress, Supertest, AWS, Tailwind CSS, Docker.",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
  {
    title: "Frontend Developer",
    location: "No Country",
    description:
      "Emulaciones laborales que consisten en desarrollo de software en equipo, con fines de aprendizaje poniendo en práctica habilidades técnicas y blandas.",
    icon: React.createElement(FaReact),
    date: "2023 - Actualidad",
  },
  {
    title: "Técnico superior en programación",
    location: "Teclab, Instituto Técnico Superior",
    description:
      "Estoy por comenzar a cursar el segundo año de la carrera, con todas las materias del primer año aprobadas.",
    icon: React.createElement(LuGraduationCap),
    date: "2023 - Actualidad",
  }
] as const;

export const projectsData = [
  {
    title: "Clon de Mercado Pago",
    description:
      "Proyecto desarrollado en equipo que busca imitar las funcionalidades y la apariencia de la plataforma de pago en línea de Mercado Pago.",
    tags: ["Figma", "TypeScript", "React", "Next.js", "MongoDB", "Nest.js", "Tailwind CSS", "Zustand"],
    imageUrl: mercadoPagoClone,
  },
  {
    title: "FestBnB",
    description:
      "Es una aplicación con la interfaz parecida a la de AirBnB, con la diferencia que se usa para arriendos de salones de festejos en Argentina.",
    tags: ["React", "TypeScript", "Next.js", "Node", "MongoDB", "Microservicios", "Docker"],
    imageUrl: festbnbProject,
  },
  {
    title: "Control de Clientes",
    description:
      "Aplicación web con arquitectura multicapas: presentación (Thymeleaf / Patrón MVC), negocio (Spring DI / AOP) y datos (Hibernate / MySQL)",
    tags: ["Java", "Bootstrap", "Spring Boot", "Spring Security", "MySQL", "Thymeleaf", "Lombok"],
    imageUrl: controlClientesWithJava,
  },
] as const;

export const skillsData = [
  "Figma",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node",
  "Express",
  "Nest.js",
  "Git",
  "Sass",
  "Tailwind CSS",
  "MySQL",
  "MongoDB",
  "TypeORM",
  "Docker",
  "Strapi CMS",
  "Jest",
  "Cypress",
  "Supertest",
  "Java",
  "Spring Boot",
  "Hibernate",
] as const;
