"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, scaleIn } from "../shared/animation-variants";

interface DataOwnershipItem {
  label: string;
  icon: string;
}

interface DataOwnershipSectionProps {
  items: DataOwnershipItem[];
}

export function DataOwnershipSection({ items }: DataOwnershipSectionProps) {
  return (
    <motion.section
      className="py-16 md:py-24 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
    >
      <div className="max-w-[1270px] mx-auto px-4 text-center">
        <motion.h2
          className="font-heading font-semibold text-[25px] md:text-[31px] text-gris-70 mb-10"
          variants={fadeInUp}
        >
          Vos données vous appartiennent.
        </motion.h2>

        <motion.div
          className="flex flex-wrap justify-center gap-8 md:gap-[110px] mb-10"
          variants={staggerContainer}
        >
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col items-center gap-4 w-[120px] md:w-[144px]"
              variants={scaleIn}
            >
              <div className="w-[54px] h-[60px] flex items-center justify-center text-4xl">
                <Image
                  src={item.icon}
                  alt={item.label}
                  width={54}
                  height={60}
                  className="object-contain"
                />
              </div>
              <p className="font-heading font-semibold text-lg text-gris-60 text-center whitespace-pre-line">
                {item.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.p className="font-body text-base text-gris-70" variants={fadeInUp}>
          O.S.O n'est pas propriétaire de vos données.
          <br />
          Vous l'êtes.
        </motion.p>
      </div>
    </motion.section>
  );
}
