"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../shared/animation-variants";

export function FonctionnalitesHeroSection() {
  return (
    <section className="bg-[#d5e7fe] pt-12 pb-24">
      <motion.div
        className="max-w-[945px] mx-auto px-4 flex flex-col items-center gap-6 text-center"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.h1
          className="text-[39px] md:text-[48px] font-heading font-bold text-[#242424] leading-tight"
          variants={fadeInUp}
        >
          Tout ce qu'il faut pour gérer ses documents.
          <br />
          Rien de superflu.
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl font-heading font-medium text-black max-w-[576px]"
          variants={fadeInUp}
        >
          O.S.O combine simplicité, intelligence et sécurité pour vous faire gagner du temps au
          quotidien.
        </motion.p>
        <motion.button
          className="bg-[#2e87fb] text-white px-6 py-4 rounded-2xl text-base font-semibold hover:bg-[#2573d9] transition-colors mt-6"
          variants={fadeInUp}
        >
          Télécharger l'app
        </motion.button>
      </motion.div>
    </section>
  );
}
