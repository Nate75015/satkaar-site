"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, scaleIn } from "../shared/animation-variants";

// SVG Check icon path
const checkIconPath = "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z";

export interface FeatureCardProps {
  number: string;
  title: string;
  description: {
    title: string;
    subtitle: string;
  };
  details: string[];
  visualTitle: string;
  visualSubtitle: string;
  image: string;
  icon: string;
  illustration: string;
  imagePosition?: "left" | "right";
  bgColor: string;
  accentColor: string;
  iconBgColor: string;
}

export function FeatureCard({
  number,
  title,
  description,
  details,
  image,
  icon,
  illustration,
  visualTitle,
  visualSubtitle,
  imagePosition = "right",
  bgColor,
  accentColor,
  iconBgColor,
}: FeatureCardProps) {
  const content = (
    <motion.div className="flex-1 max-w-[599px]" variants={fadeInUp}>
      <div className="flex items-center gap-4 mb-11">
        <div className="w-20 h-20 rounded-lg flex items-center justify-center">
          {/* Icon placeholder - can be replaced with actual icons */}
          <Image
            src={illustration}
            alt={visualTitle}
            width={80}
            height={80}
            className="object-contain"
          />
        </div>
        <div>
          <p className="text-2xl font-heading font-medium" style={{ color: accentColor }}>
            /{number}
          </p>
          <h2
            className="text-[31px] md:text-[39px] font-heading font-semibold leading-tight"
            style={{ color: accentColor }}
          >
            {title}
          </h2>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="text-xl md:text-2xl font-heading font-bold text-[#242424] mb-3">
            {description.title}
          </h3>
          <p className="text-base text-[#474747]">{description.subtitle}</p>
        </div>

        <div className="space-y-4">
          {details.map((detail: string, idx: number) => (
            <motion.div key={idx} className="flex items-start gap-2" variants={fadeInUp}>
              <svg className="w-6 h-6 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24">
                <path d={checkIconPath} fill={accentColor} />
              </svg>
              <p className="text-base text-gris-80">{detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );

  const visual = (
    <motion.div className="relative shrink-0" variants={scaleIn}>
      <div className="relative">
        <div className="absolute bg-white rounded-oso-xs shadow-card p-1.5 top-6 left-6 flex items-center justify-start gap-3 overflow-clip z-10">
          <Image src={icon} alt={visualTitle} width={40} height={40} className="object-contain" />
          <p className="font-heading font-medium text-2xl text-gris-70">{visualTitle}</p>
        </div>
        {/* Background shape */}
        <div
          className="w-[400px] md:w-[525px] h-[350px] md:h-[400px] rounded-3xl opacity-15"
          style={{ backgroundColor: bgColor }}
        />
        <div className="absolute top-0 left-0 w-full h-full flex items-start justify-center overflow-clip">
          {/* Circle backgrounds */}
          <svg
            className="absolute w-[300px] md:w-[422px] h-[300px] md:h-[422px]"
            viewBox="0 0 422 422"
            fill="none"
          >
            <circle cx="211" cy="211" r="211" fill={bgColor} opacity="0.1" />
            <circle cx="211" cy="211" r="194" fill={bgColor} opacity="0.2" />
            <circle cx="211" cy="211" r="174" fill={bgColor} opacity="0.3" />
          </svg>
          {/* Phone mockup */}
          <div className="relative z-5 w-[200px] md:w-[280px] h-[400px] md:h-[560px]">
            <Image
              src={image}
              alt={title}
              fill
              sizes="(max-width: 768px) 200px, 280px"
              className="object-contain"
            />
          </div>
        </div>
        <div className="absolute bg-white rounded-oso-xs shadow-card p-1.5 bottom-6 right-6 flex items-center justify-center gap-3 overflow-clip z-10">
          <p className="font-heading font-semibold text-lg" style={{ color: accentColor }}>
            {visualSubtitle}
          </p>
        </div>
      </div>
    </motion.div>
  );

  return (
    <motion.div
      className="flex flex-col lg:flex-row items-center gap-10 lg:gap-[103px] w-full max-w-[1227px] mx-auto px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
    >
      {imagePosition === "left" ? (
        <>
          {visual}
          {content}
        </>
      ) : (
        <>
          {content}
          {visual}
        </>
      )}
    </motion.div>
  );
}
