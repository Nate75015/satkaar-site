"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../shared/animation-variants";

export function QuoteSection() {
  return (
    <motion.section
      className="py-8 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={staggerContainer}
    >
      <div className="max-w-[848px] mx-auto px-4 text-center">
        <motion.h2
          className="font-heading font-semibold text-[25px] md:text-[31px] text-gris-70 mb-6"
          variants={fadeInUp}
        >
          Chez O.S.O, la sécurité commence par le respect de l'utilisateur
        </motion.h2>
        <motion.p className="font-body text-base text-gris-70 mb-4" variants={fadeInUp}>
          O.S.O a été conçu pour des personnes qui vivent l'administratif comme une charge mentale.
          <br />
          Cela implique une règle non négociable :{" "}
          <strong>
            aucune action, aucune analyse, aucune connexion sans votre accord explicite
          </strong>
          .
        </motion.p>
        <motion.p
          className="font-heading font-semibold text-xl md:text-[24px] text-rose-300"
          variants={fadeInUp}
        >
          Vous déléguez l'effort, Pas la responsabilité.
        </motion.p>
      </div>
    </motion.section>
  );
}
