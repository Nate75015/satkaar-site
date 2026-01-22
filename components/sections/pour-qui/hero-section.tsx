"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { fadeInUp, staggerContainer } from "../shared/animation-variants";

export function PourQuiHeroSection() {
  return (
    <section className="bg-[#d5e7fe] py-24">
      <motion.div
        className="container-oso"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.div
          className="flex flex-col items-center gap-6 text-center max-w-[945px] mx-auto"
          variants={fadeInUp}
        >
          <h1 className="font-heading font-bold text-[36px] md:text-[48px] text-gris-70 leading-tight">
            Une app pensée pour celles et ceux qui n'ont plus le temps (ni l'énergie) de gérer des papiers.
          </h1>
          <p className="font-heading font-medium text-[20px] md:text-[25px] text-black text-center">
            Que vous soyez indépendant, senior ou simplement débordé par l'administratif,
            <br />
            O.S.O s'adapte à votre réalité.
          </p>
          <Button size="lg">Télécharger l'app</Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
