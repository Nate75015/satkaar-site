"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { AppStoreBadges } from "@/components/common/app-store-badges";
import { fadeInUp, staggerContainer, scaleIn } from "../shared/animation-variants";

interface CTASectionProps {
  title: string;
  description: string;
  mockup1: string;
  mockup2: string;
}

export function CommentCaMarcheCTASection({
  title,
  description,
  mockup1,
  mockup2,
}: CTASectionProps) {
  return (
    <section className="py-16 md:py-24 bg-white">
      <motion.div
        className="container-oso"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-32">
          {/* Phone Mockups */}
          <motion.div className="relative flex items-end gap-10" variants={scaleIn}>
            <div className="relative w-[200px] md:w-[305px] h-[420px] md:h-[635px]">
              <Image
                src={mockup1}
                alt="O.S.O App"
                fill
                className="object-contain"
                unoptimized
              />
            </div>
            <div className="relative w-[170px] md:w-[257px] h-[367px] md:h-[556px] -ml-8">
              <Image
                src={mockup2}
                alt="O.S.O App"
                fill
                className="object-contain"
                unoptimized
              />
            </div>
          </motion.div>

          {/* CTA Content */}
          <motion.div className="flex flex-col gap-8 max-w-[414px]" variants={fadeInUp}>
            <div className="flex flex-col gap-8">
              <h2 className="font-heading font-semibold text-[32px] md:text-[39px] text-gris-70">
                {title}
              </h2>
              <p className="font-body text-base text-black">{description}</p>
            </div>
            <AppStoreBadges />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
