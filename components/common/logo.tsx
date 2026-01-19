"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "default" | "white";
  className?: string;
}

export function Logo({ variant = "default", className }: LogoProps) {
  const textColor = variant === "white" ? "text-white" : "text-gris-70";
  const dotColor = variant === "white" ? "text-white" : "text-rose-300";

  return (
    <Link href="/" className={cn("flex items-center", className)}>
      <span className={cn("font-heading text-3xl font-bold tracking-tight", textColor)}>
        O
        <span className={dotColor}>.</span>
        S
        <span className={dotColor}>.</span>
        O
      </span>
    </Link>
  );
}
