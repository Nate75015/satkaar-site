"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../shared/animation-variants";

export function SecuriteHeroSection() {
  return (
    <section className="bg-bleu-50 pt-12 pb-24">
      <motion.div
        className="max-w-[945px] mx-auto px-4 flex flex-col items-center gap-6 text-center"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.h1
          className="text-[39px] md:text-[48px] font-heading font-bold text-gris-70 leading-tight"
          variants={fadeInUp}
        >
          La sécurité avant tout, Le contrôle toujours.
        </motion.h1>
        <motion.div className="flex flex-col items-center gap-0" variants={fadeInUp}>
          <p className="text-xl md:text-[25px] font-heading font-medium text-black max-w-[576px]">
            O.S.O protège vos documents administratifs avec un niveau de sécurité élevé,
          </p>
          <p className="text-xl md:text-[25px] font-heading font-medium text-black">
            tout en vous laissant la maîtrise totale de vos données.
          </p>
        </motion.div>
        <motion.button
          className="bg-bleu-200 text-white px-6 py-4 rounded-2xl text-base font-semibold hover:bg-bleu-300 transition-colors mt-6"
          variants={fadeInUp}
        >
          Télécharger l'app
        </motion.button>
      </motion.div>
    </section>
  );
}
