"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";
import logo from "@/public/images/icons/logo-icon-black.png";

interface LogoProps {
  variant?: "default" | "white";
  className?: string;
}

export function Logo({ variant = "default", className }: LogoProps) {

  return (
    <Link href="/" className={cn("flex items-center", className)}>
     <Image src={logo} alt="O.S.O" width={148} height={42} />
    </Link>
  );
}
