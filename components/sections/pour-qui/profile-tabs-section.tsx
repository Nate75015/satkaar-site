"use client";

import { useState, useRef, useCallback } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { fadeInUp, staggerContainer } from "../shared/animation-variants";

export interface ProfileTab {
  id: string;
  label: string;
  badge: string;
  badgeColor: string;
  title: string;
  description: string;
  features: { title: string; description: string }[];
  benefits: string[];
  image: StaticImageData;
  icon: React.ComponentType<{ color: string }>;
  doubleCheckIcon: StaticImageData | string;
  ctaText: string;
  ctaVariant: "default" | "outline" | "rose";
}

interface ProfileTabsSectionProps {
  profileTabs: ProfileTab[];
}

export function ProfileTabsSection({ profileTabs }: ProfileTabsSectionProps) {
  const [activeTab, setActiveTab] = useState(profileTabs[0]?.id || "");
  const activeProfile = profileTabs.find((tab) => tab.id === activeTab) || profileTabs[0];

  // Refs for scrollable tabs
  const tabsContainerRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<Map<string, HTMLButtonElement>>(new Map());

  // Drag scroll state
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Scroll to center the active tab
  const scrollToTab = useCallback((tabId: string) => {
    const container = tabsContainerRef.current;
    const tabElement = tabRefs.current.get(tabId);

    if (container && tabElement) {
      const containerRect = container.getBoundingClientRect();
      const tabRect = tabElement.getBoundingClientRect();

      // Calculate the scroll position to center the tab
      const tabCenter = tabRect.left + tabRect.width / 2;
      const containerCenter = containerRect.left + containerRect.width / 2;
      const scrollOffset = tabCenter - containerCenter;

      container.scrollBy({
        left: scrollOffset,
        behavior: "smooth",
      });
    }
  }, []);

  // Handle tab click
  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    scrollToTab(tabId);
  };

  // Drag to scroll handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    const container = tabsContainerRef.current;
    if (!container) return;

    setIsDragging(true);
    setStartX(e.pageX - container.offsetLeft);
    setScrollLeft(container.scrollLeft);
    container.style.cursor = "grabbing";
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();

    const container = tabsContainerRef.current;
    if (!container) return;

    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 1.5; // Scroll speed multiplier
    container.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (tabsContainerRef.current) {
      tabsContainerRef.current.style.cursor = "grab";
    }
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      if (tabsContainerRef.current) {
        tabsContainerRef.current.style.cursor = "grab";
      }
    }
  };

  if (!activeProfile) return null;

  const IconComponent = activeProfile.icon;

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-oso">
        {/* Tabs */}
        <div
          ref={tabsContainerRef}
          className={cn(
            "flex overflow-x-auto gap-4 mb-12 bg-gris-10 border border-gris-20 rounded-oso-s p-2 scrollbar-hide cursor-grab select-none",
            isDragging && "cursor-grabbing"
          )}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
        >
          {profileTabs.map((tab) => {
            const TabIcon = tab.icon;
            return (
              <button
                key={tab.id}
                ref={(el) => {
                  if (el) tabRefs.current.set(tab.id, el);
                }}
                onClick={() => !isDragging && handleTabClick(tab.id)}
                className={cn(
                  "px-4 py-2 rounded-oso-s font-body text-lg transition-all flex items-center gap-2 shrink-0 whitespace-nowrap",
                  activeTab === tab.id
                    ? "bg-bleu-200 text-white font-bold"
                    : "text-gris-60 hover:bg-gris-20"
                )}
              >
                <TabIcon color={activeTab === tab.id ? "white" : "#474747"} />
                <span className="text-base">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Profile Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProfile.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white border border-gris-20 rounded-[16px] p-6"
          >
            <div
              className={cn(
                "flex flex-col lg:flex-row gap-12",
                activeProfile.id === "freelances" || activeProfile.id === "seniors"
                  ? "lg:flex-row-reverse"
                  : ""
              )}
            >
              {/* Content */}
              <div className="flex-1 flex flex-col gap-6">
                <span
                  className={cn(
                    "inline-block px-3 py-2 rounded-lg font-body font-medium text-sm text-gris-70 w-fit",
                    activeProfile.badgeColor
                  )}
                >
                  {activeProfile.badge}
                </span>

                <div className="flex flex-col gap-2">
                  <h2 className="font-heading font-semibold text-[18px] text-gris-70">
                    {activeProfile.title}
                  </h2>
                  <p className="font-body text-base text-gris-70">
                    {activeProfile.description}
                  </p>
                </div>

                {/* Features */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {activeProfile.features.map((feature, index) => (
                    <div key={index} className="flex flex-col gap-2">
                      <div className="flex items-center gap-2">
                        <Image
                          src={activeProfile.doubleCheckIcon}
                          alt="Double Check"
                          width={24}
                          height={24}
                        />
                        <h4 className="font-body font-semibold text-base text-black">
                          {feature.title}
                        </h4>
                      </div>
                      <p className="font-body text-base text-gris-70 ml-7">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Benefits */}
                <div className="flex flex-col gap-4 mt-4">
                  <h4 className="font-heading font-semibold text-[18px] text-black">
                    Ce que vous offre O.S.O
                  </h4>
                  <div className="flex flex-col gap-4">
                    {activeProfile.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-[30px] h-[30px] rounded-full bg-gris-20" />
                        <p className="font-body text-base text-gris-70">{benefit}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Image & CTA */}
              <div className="flex flex-col items-center gap-6 lg:w-[503px] shrink-0">
                <div className="relative w-full h-[300px] md:h-[451px] rounded-[16px] overflow-hidden">
                  <Image
                    src={activeProfile.image}
                    alt={activeProfile.label}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <Button
                  variant={
                    activeProfile.ctaVariant === "rose" ? "default" : activeProfile.ctaVariant
                  }
                  className={cn(
                    activeProfile.ctaVariant === "rose" && "bg-rose-300 hover:bg-rose-300/90"
                  )}
                >
                  {activeProfile.ctaText}
                </Button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
