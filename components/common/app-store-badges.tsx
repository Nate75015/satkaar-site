"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/constants";

interface AppStoreBadgesProps {
  className?: string;
  size?: "sm" | "default" | "lg";
}

export function AppStoreBadges({ className, size = "default" }: AppStoreBadgesProps) {
  const sizes = {
    sm: { width: 120, height: 40 },
    default: { width: 152, height: 48 },
    lg: { width: 180, height: 56 },
  };

  const { width, height } = sizes[size];

  return (
    <div className={cn("flex items-center gap-4", className)}>
      <Link
        href={siteConfig.links.appStore}
        target="_blank"
        rel="noopener noreferrer"
        className="transition-transform hover:scale-105"
      >
        <Image
          src="/images/badges/app-store-badge.svg"
          alt="Télécharger sur l'App Store"
          width={width}
          height={height}
          className="h-auto"
        />
      </Link>
      <Link
        href={siteConfig.links.playStore}
        target="_blank"
        rel="noopener noreferrer"
        className="transition-transform hover:scale-105"
      >
        <Image
          src="/images/badges/google-play-badge.svg"
          alt="Disponible sur Google Play"
          width={width + 13}
          height={height}
          className="h-auto rounded-[5px]"
        />
      </Link>
    </div>
  );
}
