"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";
import logoBlack from "@/public/images/icons/logo-icon-black.png";
import logoWhite from "@/public/images/icons/logo-icon.svg";

interface LogoProps {
  variant?: "default" | "white";
  className?: string;
}

export function Logo({ variant = "default", className }: LogoProps) {

  return (
    <Link href="/" className={cn("flex items-center", className)}>
     <Image src={variant === "white" ? logoWhite : logoBlack} alt="O.S.O" width={148} height={42} />
    </Link>
  );
}
