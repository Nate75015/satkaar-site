"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { AppStoreBadges } from "@/components/common/app-store-badges";
import { fadeInUp, staggerContainer, scaleIn } from "../shared/animation-variants";

interface SecuriteCTASectionProps {
  mockup1: string;
  mockup2: string;
}

export function SecuriteCTASection({ mockup1, mockup2 }: SecuriteCTASectionProps) {
  return (
    <motion.section
      className="py-16 md:py-24 relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
    >
      <div className="max-w-[1236px] mx-auto px-4 relative">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-[127px]">
          {/* Phone mockups */}
          <motion.div className="flex gap-6 relative z-10" variants={scaleIn}>
            <div className="relative w-[200px] md:w-[305px] h-[400px] md:h-[635px]">
              <Image
                src={mockup1}
                alt="O.S.O App"
                fill
                sizes="(max-width: 768px) 200px, 305px"
                className="object-contain"
              />
            </div>
            <div className="relative w-[170px] md:w-[257px] h-[350px] md:h-[556px] mt-12 md:mt-[79px]">
              <Image
                src={mockup2}
                alt="O.S.O App"
                fill
                sizes="(max-width: 768px) 170px, 257px"
                className="object-contain"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div className="max-w-[414px]" variants={fadeInUp}>
            <h2 className="font-heading font-semibold text-[31px] md:text-[39px] text-gris-70 mb-8 leading-tight">
              Une sécurité qui vous libère l'esprit.
            </h2>
            <p className="font-body text-base text-black mb-10">
              Rejoignez des milliers d'utilisateurs en découvrant O.S.O en toute confiance.
            </p>
            <AppStoreBadges />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
