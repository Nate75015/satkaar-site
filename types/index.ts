import { type LucideIcon } from "lucide-react";

/**
 * Navigation link type
 */
export interface NavLink {
  label: string;
  href: string;
  icon?: LucideIcon;
}

/**
 * Footer link section type
 */
export interface FooterLinkSection {
  title: string;
  links: NavLink[];
}

/**
 * Target profile type
 */
export interface TargetProfile {
  id: string;
  label: string;
  shortLabel: string;
  description?: string;
  image?: string;
  features?: string[];
}

/**
 * Process step type
 */
export interface ProcessStep {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  color: "vert" | "jaune" | "bleu-light" | "rose" | "bleu";
  icon?: LucideIcon;
}

/**
 * Feature card type
 */
export interface FeatureCard {
  id: string;
  title: string;
  description: string;
  icon?: LucideIcon;
  image?: string;
}

/**
 * Testimonial type
 */
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar?: string;
}

/**
 * FAQ item type
 */
export interface FAQItem {
  question: string;
  answer: string;
}
