"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../shared/animation-variants";

interface StepCard {
  title: string;
  description: string[];
  bgColor: string;
}

interface StepCardsSectionProps {
  stepCards: StepCard[];
  subtitle?: string;
}

export function StepCardsSection({ stepCards, subtitle }: StepCardsSectionProps) {
  return (
    <section className="py-16 md:py-24 bg-white">
      <motion.div
        className="container-oso"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        {subtitle && (
          <motion.p
            className="font-body text-base text-black text-center mb-20"
            variants={fadeInUp}
          >
            {subtitle}
          </motion.p>
        )}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
          variants={staggerContainer}
        >
          {stepCards.map((card, index) => (
            <motion.div
              key={index}
              className={`${card.bgColor} rounded-[16px] p-6 flex flex-col gap-6`}
              variants={fadeInUp}
            >
              <h3 className="font-heading font-medium text-[20px] md:text-[25px] text-gris-70">
                {card.title}
              </h3>
              <div className="flex flex-col gap-2">
                {card.description.map((text, i) => (
                  <p key={i} className="font-body text-base text-gris-70">
                    {text}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
