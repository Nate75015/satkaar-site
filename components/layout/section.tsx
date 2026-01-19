"use client";

import { forwardRef } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionProps extends HTMLMotionProps<"section"> {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  withContainer?: boolean;
  id?: string;
}

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0, 0, 0.2, 1] as const, // easeOut bezier curve
    },
  },
};

export const Section = forwardRef<HTMLElement, SectionProps>(
  (
    {
      children,
      className,
      containerClassName,
      withContainer = true,
      id,
      ...props
    },
    ref
  ) => {
    return (
      <motion.section
        ref={ref}
        id={id}
        className={cn("section-oso", className)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        {...props}
      >
        {withContainer ? (
          <div className={cn("container-oso", containerClassName)}>
            {children}
          </div>
        ) : (
          children
        )}
      </motion.section>
    );
  }
);

Section.displayName = "Section";
