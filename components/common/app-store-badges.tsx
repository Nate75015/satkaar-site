"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/constants";
import { buttonVariants } from "@/components/ui/button";

interface AppStoreBadgesProps {
  className?: string;
  size?: "sm" | "default" | "lg";
}

export function AppStoreBadges({ className, size = "default" }: AppStoreBadgesProps) {
  const iconSizes = {
    sm: 18,
    default: 24,
    lg: 28,
  };

  const iconSize = iconSizes[size];
  const buttonSize = size === "lg" ? "lg" : size === "sm" ? "sm" : "default";

  return (
    <div className={cn("flex items-center gap-4", className)}>
      <Link
        href={siteConfig.links.appStore}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          buttonVariants({ variant: "outline", size: buttonSize }),
          "gap-2 bg-black text-white border-black hover:bg-black hover:opacity-85"
        )}
      >
        <Image
          src="/images/icons/apple-icon.svg"
          alt=""
          width={iconSize}
          height={iconSize}
        />
        <span>
        <span className="text-xs font-normal" >Télécharger sur</span><br />
        <span>L'App Store</span>
       </span>
      </Link>
      <Link
        href={siteConfig.links.playStore}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          buttonVariants({ variant: "outline", size: buttonSize }),
          "gap-2 bg-black text-white border-black hover:bg-black hover:opacity-85"
        )}
      >
        <Image
          src="/images/icons/google-play-store-icon.svg"
          alt=""
          width={iconSize}
          height={iconSize}
        />
       <span>
        <span className="text-xs font-normal" >Disponible sur</span><br />
        <span>Play Store</span>
       </span>
      </Link>
    </div>
  );
}
