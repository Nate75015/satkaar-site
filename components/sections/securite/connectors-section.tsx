"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, scaleIn } from "../shared/animation-variants";

interface ConnectorsSectionProps {
  features: string[];
  mockupImage: string;
}

export function ConnectorsSection({ features, mockupImage }: ConnectorsSectionProps) {
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
          {/* Content - Left side */}
          <motion.div className="flex-1 max-w-[599px]" variants={fadeInUp}>
            <h2 className="font-heading font-semibold text-[31px] md:text-[39px] text-gris-70 mb-6 leading-tight">
              Connecteurs & services externes
            </h2>

            <div className="space-y-6">
              <h3 className="font-heading font-medium text-xl md:text-[25px] text-bleu-300">
                Des connexions sécurisées et maîtrisées
              </h3>

              <p className="font-body text-base text-gris-50">
                O.S.O se connecte à des services externes (administrations, organismes, plateformes)
                uniquement via des connexions sécurisées et officielles.
              </p>

              <div className="space-y-4">
                {features.map((feature, idx) => (
                  <motion.div key={idx} className="flex items-center gap-3" variants={fadeInUp}>
                    <div className="w-[30px] h-[30px] rounded-3xl bg-gris-20 shrink-0" />
                    <p className="font-body text-base text-gris-70">{feature}</p>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 mt-6">
                <span className="px-3 py-2 rounded-3xl font-body text-base bg-bleu-50 text-[#02377D]">
                  Connexion contrôlée
                </span>
                <span className="px-3 py-2 rounded-3xl font-body text-base bg-bleu-50 text-[#02377D]">
                  Accès temporaire
                </span>
              </div>
            </div>
          </motion.div>

          {/* Visual - Right side */}
          <motion.div className="relative shrink-0" variants={scaleIn}>
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
                    alt="Connecteurs sécurisés"
                    fill
                    sizes="(max-width: 768px) 200px, 280px"
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
