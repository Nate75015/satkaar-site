"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, scaleIn } from "../shared/animation-variants";

interface UserType {
  name: string;
  image: string;
}

interface UserTypesSectionProps {
  userTypes: UserType[];
}

export function UserTypesSection({ userTypes }: UserTypesSectionProps) {
  return (
    <section className="py-16 md:py-24 bg-white">
      <motion.div
        className="max-w-[1280px] mx-auto px-4 md:px-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.h2
          className="text-[31px] md:text-[39px] font-heading font-semibold text-center text-black mb-12 md:mb-16"
          variants={fadeInUp}
        >
          Les mêmes fonctionnalités,
          <br />
          adaptées à chaque usage.
        </motion.h2>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-8 md:gap-[60px]"
          variants={staggerContainer}
        >
          {userTypes.map((type, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col items-center gap-4 w-[140px] md:w-[180px]"
              variants={scaleIn}
            >
              <div className="w-[140px] h-[140px] md:w-[180px] md:h-[180px] rounded-full overflow-hidden relative bg-gray-100">
                <Image
                  src={type.image}
                  alt={type.name}
                  fill
                  sizes="(max-width: 768px) 140px, 180px"
                  className="object-cover"
                />
              </div>
              <p className="text-base md:text-lg font-heading font-semibold text-gris-60 text-center">
                {type.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
