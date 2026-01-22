"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, scaleIn } from "../shared/animation-variants";

interface ControlSectionProps {
  features: string[];
  mockupImage: string;
}

export function ControlSection({ features, mockupImage }: ControlSectionProps) {
  return (
    <motion.section
      className="py-16 md:py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
    >
      <div className="max-w-[1227px] mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-[103px]">
          {/* Visual - Left side */}
          <motion.div className="relative shrink-0 order-2 lg:order-1" variants={scaleIn}>
            <div className="relative">
              <div className="w-[400px] md:w-[525px] h-[350px] md:h-[400px] rounded-3xl opacity-15 bg-bleu-50" />
              <div className="absolute top-0 left-0 w-full h-full flex items-start justify-center overflow-clip">
                <svg
                  className="absolute w-[300px] md:w-[422px] h-[300px] md:h-[422px]"
                  viewBox="0 0 422 422"
                  fill="none"
                >
                  <circle cx="211" cy="211" r="211" fill="#81B7FD" opacity="0.1" />
                  <circle cx="211" cy="211" r="194" fill="#81B7FD" opacity="0.2" />
                  <circle cx="211" cy="211" r="174" fill="#81B7FD" opacity="0.3" />
                </svg>
                <div className="relative z-5 w-[200px] md:w-[280px] h-[400px] md:h-[560px]">
                  <Image
                    src={mockupImage}
                    alt="Contrôle utilisateur"
                    fill
                    sizes="(max-width: 768px) 200px, 280px"
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content - Right side */}
          <motion.div className="flex-1 max-w-[599px] order-1 lg:order-2" variants={fadeInUp}>
            <h2 className="font-heading font-semibold text-[31px] md:text-[39px] text-gris-70 mb-8 leading-tight">
              Vous gardez la main, en permanence
            </h2>

            <div className="space-y-6">
              <h3 className="font-heading font-medium text-xl md:text-[25px] text-gris-70">
                Fonctionnalités
              </h3>

              <div className="space-y-4">
                {features.map((feature, idx) => (
                  <motion.div key={idx} className="flex items-center gap-3" variants={fadeInUp}>
                    <div className="w-[30px] h-[30px] rounded-3xl bg-gris-20 shrink-0" />
                    <p className="font-body text-base text-gris-70">{feature}</p>
                  </motion.div>
                ))}
              </div>

              <p className="font-body text-base text-gris-60 mt-6">
                Chaque action est traçable, réversible et sous votre contrôle.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
