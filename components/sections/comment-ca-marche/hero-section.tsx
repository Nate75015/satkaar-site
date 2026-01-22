"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../shared/animation-variants";

export function CommentCaMarcheHeroSection() {
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
          <h1 className="font-heading font-bold text-[36px] md:text-[48px] text-gris-70">
            Gérer ses documents n'a jamais été aussi simple.
          </h1>
          <div className="flex flex-col gap-6 max-w-[576px]">
            <p className="font-heading font-medium text-[20px] md:text-[25px] text-black">
              Avec O.S.O, vos papiers se rangent presque tout seuls.
              <br />
              Vous scannez, vous validez, c'est fait.
            </p>
            <p className="font-body text-base text-black">
              O.S.O a été conçu pour celles et ceux qui veulent en finir avec la paperasse,
              <br />
              sans apprendre un nouvel outil compliqué.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
