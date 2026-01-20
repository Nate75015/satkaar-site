"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface SecuritySectionProps {
  title: React.ReactNode | string;
  description: string | React.ReactNode;
  securityFeatures: {
    id: string;
    icon: string;
    title: string;
    width: number;
    height: number;
  }[];
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0, 0, 0.2, 1] as const },
  },
};

export function SecuritySection(props: SecuritySectionProps) {
  const { title, description, securityFeatures } = props;
  return (
    <section className="py-16 lg:py-24" id="securite">
      <div className="container-oso">
        <motion.div
          className="flex flex-col items-center gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Header */}
          <motion.div 
            className="flex flex-col items-center gap-8 max-w-[572px] text-center"
            variants={itemVariants}
          >
            <h2 className="font-heading font-semibold text-[39px] text-gris-70 leading-tight">
              {title}
            </h2>
            <p className="text-base text-gris-70">
              {description}
            </p>
          </motion.div>

          {/* Security Features Grid */}
          <motion.div 
            className="flex flex-wrap justify-center gap-16 lg:gap-[110px] mt-8"
            variants={containerVariants}
          >
            {securityFeatures.map((feature) => (
              <motion.div
                key={feature.id}
                className="flex flex-col items-center gap-4 w-[120px] lg:w-auto"
                variants={itemVariants}
              >
                <div className="relative w-[60px] h-[60px] flex items-center justify-center">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={feature.width}
                    height={feature.height}
                    className="object-contain"
                    unoptimized
                  />
                </div>
                <p className="font-heading font-semibold text-lg text-gris-70 text-center whitespace-pre-wrap">
                  {feature.title}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
