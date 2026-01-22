"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, scaleIn } from "../shared/animation-variants";

interface SecurityTag {
  label: string;
  bgColor: string;
  textColor: string;
}

interface SecuritySubsection {
  title: string;
  titleColor: string;
  description: string;
  tags: SecurityTag[];
}

interface ProtectionSectionProps {
  subsections: SecuritySubsection[];
  mockupImage: string;
}

export function ProtectionSection({ subsections, mockupImage }: ProtectionSectionProps) {
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
          {/* Content */}
          <motion.div className="flex-1 max-w-[599px]" variants={fadeInUp}>
            <h2 className="font-heading font-semibold text-[31px] md:text-[39px] text-gris-70 mb-8 leading-tight">
              Vos documents sont protégés à chaque étape
            </h2>

            <div className="space-y-8">
              {subsections.map((sub, idx) => (
                <motion.div key={idx} className="space-y-4" variants={fadeInUp}>
                  <h3
                    className="font-heading font-bold text-xl md:text-[25px]"
                    style={{ color: sub.titleColor }}
                  >
                    {sub.title}
                  </h3>
                  <p className="font-body text-base text-gris-50 whitespace-pre-line">
                    {sub.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {sub.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="px-3 py-2 rounded-3xl font-body text-base"
                        style={{ backgroundColor: tag.bgColor, color: tag.textColor }}
                      >
                        {tag.label}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div className="relative shrink-0" variants={scaleIn}>
            <div className="relative">
              <div className="w-[400px] md:w-[525px] h-[350px] md:h-[400px] rounded-3xl opacity-15 bg-vert-100" />
              <div className="absolute top-0 left-0 w-full h-full flex items-start justify-center overflow-clip">
                <svg
                  className="absolute w-[300px] md:w-[422px] h-[300px] md:h-[422px]"
                  viewBox="0 0 422 422"
                  fill="none"
                >
                  <circle cx="211" cy="211" r="211" fill="#96E2D5" opacity="0.1" />
                  <circle cx="211" cy="211" r="194" fill="#96E2D5" opacity="0.2" />
                  <circle cx="211" cy="211" r="174" fill="#96E2D5" opacity="0.3" />
                </svg>
                <div className="relative z-5 w-[200px] md:w-[280px] h-[400px] md:h-[560px]">
                  <Image
                    src={mockupImage}
                    alt="Protection des documents"
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
