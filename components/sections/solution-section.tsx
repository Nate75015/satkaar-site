"use client";

import { useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { cn } from "@/lib/utils";

// Figma phone mockup assets
import phoneMockup1 from "@/public/images/mockups/solution-mockup-1.png";
import phoneMockup2 from "@/public/images/mockups/solution-mockup-2.png";
import phoneMockup3 from "@/public/images/mockups/solution-mockup-3.png";

const slides = [
  {
    title: "Scan de carte d'identité",
    image: phoneMockup1,
    alt: "ID Card Scan",
  },
  {
    title: "Document PDF",
    image: phoneMockup2,
    alt: "PDF Document",
  },
  {
    title: "Partage de documents",
    image: phoneMockup3,
    alt: "Document Sharing",
  },
];

const OSOCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    containScroll: false,
    dragFree: false,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="w-full lg:flex-1">
      {/* Carousel Container with rose background */}
      <div className="relative">
        {/* Background shape - responsive height */}
        <div
          className="absolute inset-x-0 bg-rose-900 rounded-oso-m shadow-2xl"
          style={{
            height: "clamp(400px, 60vw, 600px)",
            top: "50%",
            transform: "translateY(-40%)",
          }}
        />

        {/* Embla Carousel - contained overflow on mobile */}
        <div className="overflow-hidden py-8 md:py-12 lg:py-16" ref={emblaRef}>
          <div className="flex touch-pan-y">
            {slides.map((slide, index) => {
              const isSelected = index === selectedIndex;
              return (
                <div
                  key={index}
                  className={cn(
                    "flex-none transition-all duration-300 ease-out px-2 md:px-4",
                    // Responsive widths
                    "w-[70%] sm:w-[50%] md:w-[45%] lg:w-[40%]"
                  )}
                >
                  <div
                    className={cn(
                      "relative transition-all duration-300 ease-out",
                      isSelected
                        ? "opacity-100 scale-100"
                        : "opacity-50 scale-90"
                    )}
                  >
                    <Image
                      src={slide.image}
                      alt={slide.alt}
                      className="w-full h-auto object-contain"
                      sizes="(max-width: 640px) 70vw, (max-width: 768px) 50vw, (max-width: 1024px) 45vw, 40vw"
                      priority={index === 0}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="relative flex justify-center gap-2 -mt-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={cn(
                "h-3 rounded-full transition-all duration-300",
                index === selectedIndex
                  ? "bg-white w-8"
                  : "bg-white/50 hover:bg-white/70 w-3"
              )}
              onClick={() => emblaApi?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export function SolutionSection() {
  return (
    <section className="py-12 md:py-16 lg:py-24 bg-white overflow-hidden">
      <div className="container-oso">
        <motion.div
          className="flex flex-col items-center gap-6 md:gap-8 lg:gap-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Title */}
          <motion.h2
            className="font-heading font-semibold text-[24px] sm:text-[28px] md:text-[35px] lg:text-[39px] text-gris-70 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Avec O.S.O, tout change.
          </motion.h2>

          {/* Main Content Container */}
          <div className="w-full flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-12">
            {/* Left Side - Text Content (Static, not accordions) */}
            <motion.div
              className="w-full lg:w-auto lg:shrink-0 lg:max-w-[335px] flex flex-col gap-4 md:gap-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {/* Section 1 */}
              <div className="flex flex-col gap-3 md:gap-4">
                <p className="font-heading text-[18px] sm:text-[20px] md:text-[24px] text-gris-60 leading-normal">
                  <span className="font-normal">Tout est </span>
                  <span className="font-semibold text-[#d9325e]">clair</span>
                  <span className="font-normal">.</span>
                </p>
                <div className="font-body text-[13px] sm:text-[14px] md:text-[16px] text-gris-60 leading-normal">
                  <p className="mb-2">
                    Vos documents sont organisés automatiquement. Plus besoin de
                    réfléchir à où ranger quoi.
                  </p>
                  <p className="m-0">
                    Vous savez toujours où sont vos documents. Et surtout, vous
                    les retrouvez en 3 secondes.
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="w-full max-w-[305px] h-px bg-gris-40" />

              {/* Section 2 */}
              <div className="flex flex-col gap-3 md:gap-4">
                <p className="font-heading text-[18px] sm:text-[20px] md:text-[24px] text-gris-60 leading-normal">
                  <span className="font-normal">Tout est </span>
                  <span className="font-semibold text-rose-300">simple</span>
                  <span className="font-normal">.</span>
                </p>
                <div className="font-body text-[13px] sm:text-[14px] md:text-[16px] text-gris-60 leading-normal">
                  <p className="mb-2">
                    Avec O.S.O : Un tap pour scanner. L'IA fait le reste.
                    Validation en un clic.
                  </p>
                  <p className="m-0">
                    Conçu pour ceux qui n'ont pas de temps à perdre.
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="w-full max-w-[305px] h-px bg-gris-40" />

              {/* Section 3 */}
              <div className="flex flex-col gap-3 md:gap-4">
                <p className="font-heading text-[18px] sm:text-[20px] md:text-[24px] text-gris-60 leading-normal">
                  <span className="font-normal">Et surtout : </span>
                  <span className="font-semibold text-rose-300">
                    On S'en Occupe
                  </span>
                  <span className="font-normal">.</span>
                </p>
                <div className="font-body text-[13px] sm:text-[14px] md:text-[16px] text-gris-60 leading-normal">
                  <p className="mb-2">
                    Avec O.S.O : Elsa détecte les échéances, vous rappelle ce
                    qui compte, vous guide étape par étape.
                  </p>
                  <p className="m-0">
                    Vous gardez le contrôle. Mais vous n'êtes plus seul(e) à
                    gérer.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Carousel */}
            <motion.div
              className="w-full lg:flex-1"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <OSOCarousel />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
