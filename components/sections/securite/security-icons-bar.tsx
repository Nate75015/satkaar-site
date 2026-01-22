"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { staggerContainer, scaleIn } from "../shared/animation-variants";

interface SecurityIcon {
  label: string;
  icon: string;
}

interface SecurityIconsBarProps {
  icons: SecurityIcon[];
}

export function SecurityIconsBar({ icons }: SecurityIconsBarProps) {
  return (
    <motion.section
      className="py-12 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={staggerContainer}
    >
      <div className="max-w-[1270px] mx-auto px-4">
        <motion.div
          className="flex flex-wrap justify-center gap-16 md:gap-[110px]"
          variants={staggerContainer}
        >
          {icons.map((item, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col items-center gap-4 w-[180px] md:w-[207px]"
              variants={scaleIn}
            >
              <div className="w-[60px] h-[60px] flex items-center justify-center text-4xl">
                <Image
                  src={item.icon}
                  alt={item.label}
                  width={60}
                  height={60}
                  className="object-contain"
                />
              </div>
              <p className="font-heading font-semibold text-lg text-gris-60 text-center">
                {item.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
