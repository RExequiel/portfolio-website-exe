"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>Sobre mí</SectionHeading>
      <p className="mb-3">
        Tengo 25 años, me gusta el deporte, escuchar musica y el ambiente en
        familia.
      </p>
      <p>
        Profesionalmente, me gusta estar constantemente aprendiendo, enseñando y
        cooperando mutuamente con los demas.
      </p>
      <p>
        Me encanta el trabajo en equipo, la cooperación, el respeto, la
        inclusión, la comunicación y la empatía.
      </p>
    </motion.section>
  );
}
