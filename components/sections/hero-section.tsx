"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { AppStoreBadges } from "@/components/common/app-store-badges";

// Figma assets - will be replaced with local assets
import heroPhoneImage from "@/public/images/mockups/hero-mockup.png";

export function HeroSection() {
  return (
    <section className="bg-rose-10/50 overflow-hidden pb-0">
      <div className="relative min-h-[650px] flex w-full items-center justify-between container-oso" >
        <div className="relative">
          <div className="pt-[162px] pb-16">
            <motion.div
              className="flex flex-col gap-8 max-w-fit"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] }}
            >
              <h1 className="text-gris-70 font-heading font-bold text-[48px] leading-tight">
                La gestion de vos documents, <br /> sans stress.
              </h1>

              <p className="font-heading text-[31px] text-gris-70 leading-snug max-w-[522px]">
                Fini les galères des papiers. O.S.O importe, classe et sécurise
                automatiquement tous vos documents administratifs.
              </p>

              <AppStoreBadges />
            </motion.div>
          </div>
        </div>

        {/* Mockup Container */}
        <div className="relative w-[472px] flex flex-col justify-center items-center h-[600px] overflow-visible" >
          {/* Pink decorative circle */}
          <div className="absolute w-[458px] h-[458px] bg-rose-300 rounded-full -bottom-1 hidden lg:block"
            aria-hidden="true" />
          {/* Phone mockup */}
          <motion.div
            className="absolute -bottom-[35px] w-[472px] h-[600px] hidden lg:block"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0, 0, 0.2, 1] }}
          >
            <Image
              src={heroPhoneImage}
              alt="O.S.O App"
              fill
              style={{ right: '0', aspectRatio: '472/574' }}
              className="object-fill"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
