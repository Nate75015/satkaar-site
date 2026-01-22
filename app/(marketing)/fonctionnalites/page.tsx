"use client";

import Image from "next/image";
import {
  FonctionnalitesHeroSection,
  FeaturesSection,
  UserTypesSection,
  FeatureCardProps,
} from "@/components/sections/fonctionnalites";
import { NewsletterSection } from "@/components/sections/newsletter-section";

// Phone mockup images
const scanMockup = "/images/mockups/solution-mockup-1.png";
const classementMockup = "/images/mockups/solution-mockup-2.png";
const organisationMockup = "/images/mockups/solution-mockup-3.png";
const partageMockup = "/images/mockups/solution-mockup-4.png";
const rappelsMockup = "/images/mockups/solution-mockup-1.png";

// Icons
const scanIcon = "/images/icons/scanner-bold-icon.svg";
const classementIcon = "/images/icons/sort-bold-icon-grey.svg";
const organisationIcon = "/images/icons/order-bold-icon.svg";
const partageIcon = "/images/icons/users-bold-icon-red.svg";
const rappelsIcon = "/images/icons/bell-bold-icon.svg";

// Illustrations
const scanIllustration = "/images/illustrations/illustration-hand-scan.svg";
const classementIllustration = "/images/illustrations/illustration-smart-order.svg";
const organisationIllustration = "/images/illustrations/illustration-organise-clean.svg";
const partageIllustration = "/images/illustrations/illustration-share.svg";
const rappelsIllustration = "/images/illustrations/illustration-share.svg";

// User type images
const userTypes = [
  { name: "Indépendants", image: "/images/independent-worker.jpg" },
  { name: "Freelances", image: "/images/freelance-worker.jpg" },
  { name: "Etudiants", image: "/images/student-worker.jpg" },
  { name: "Seniors", image: "/images/veteran-worker.jpg" },
  { name: "Famille", image: "/images/happy-family.jpg" },
];

const features: FeatureCardProps[] = [
  {
    number: "01",
    title: "Scan & Import",
    description: {
      title: "Scannez ou importez vos documents en quelques secondes",
      subtitle: "Importer un document ne devrait jamais être compliqué.",
    },
    details: [
      "Scan depuis le téléphone",
      "Import depuis les fichiers ou le cloud",
      "Formats simples et courants",
    ],
    visualTitle: "Scan rapide",
    visualSubtitle: "Identification via OCR",
    icon: scanIcon,
    illustration: scanIllustration,
    image: scanMockup,
    imagePosition: "right",
    bgColor: "#81B7FD",
    accentColor: "#045DD0",
    iconBgColor: "#d5e7fe",
  },
  {
    number: "02",
    title: "Classement intelligent",
    description: {
      title: "O.S.O classe vos documents pour vous",
      subtitle: "Classer est chronophage et source d'erreurs.",
    },
    details: [
      "O.S.O analyse le document, propose un nom et un dossier.",
      "Vous validez, c'est terminé.",
    ],
    visualTitle: "Classement automatique",
    visualSubtitle: "Proposition intelligente",
    icon: classementIcon,
    illustration: classementIllustration,
    image: classementMockup,
    imagePosition: "left",
    bgColor: "#C0E7F8",
    accentColor: "#33B0E7",
    iconBgColor: "#eaf7fc",
  },
  {
    number: "03",
    title: "Organisation claire & recherche simple",
    description: {
      title: "Retrouvez n'importe quel document, instantanément",
      subtitle: "On perd souvent du temps à chercher un document qu'on possède déjà.",
    },
    details: [
      "Organisation claire",
      "Documents bien identifiés",
      "Accès rapide depuis le mobile",
    ],
    visualTitle: "Documents bien rangés",
    visualSubtitle: "Organisation claire",
    icon: organisationIcon,
    illustration: organisationIllustration,
    image: organisationMockup,
    imagePosition: "right",
    bgColor: "#96E2D5",
    accentColor: "#34BFA6",
    iconBgColor: "#cbf1ea",
  },
  {
    number: "04",
    title: "Partage maîtrisé",
    description: {
      title: "Partagez le bon document, sans erreur",
      subtitle: "Envoyer un document au mauvais format ou à la mauvaise personne est risqué.",
    },
    details: ["Partage simple", "Documents bien nommés", "Contrôle total"],
    visualTitle: "Partage sécurisé",
    visualSubtitle: "Le bon document, au bon moment",
    icon: partageIcon,
    illustration: partageIllustration,
    image: partageMockup,
    imagePosition: "left",
    bgColor: "#F6CCD7",
    accentColor: "#D9325E",
    iconBgColor: "#f6ccd7",
  },
  {
    number: "05",
    title: "Rappels & échéances",
    description: {
      title: "Ne ratez plus jamais une échéance importante",
      subtitle: "Dates limites, renouvellements, démarches oubliées.",
    },
    details: ["O.S.O repère les échéances et vous rappelle au bon moment."],
    visualTitle: "Rappels intelligents",
    visualSubtitle: "Échéances sous contrôle",
    icon: rappelsIcon,
    illustration: rappelsIllustration,
    image: rappelsMockup,
    imagePosition: "right",
    bgColor: "#81B7FD",
    accentColor: "#045DD0",
    iconBgColor: "#d5e7fe",
  },
];

export default function FonctionnalitesPage() {
  return (
    <div className="relative overflow-clip">
      {/* Decorative vector image */}
      <Image
        src="/images/illustrations/illustration-vector-2.svg"
        alt="Decorative vector"
        width={576}
        height={576}
        className="absolute top-[1029px] -right-[180px] w-[576px] h-[576px] object-fill"
      />

      <FonctionnalitesHeroSection />
      <FeaturesSection features={features} />
      <UserTypesSection userTypes={userTypes} />
      <NewsletterSection withBackground={true} />

      <Image
        src="/images/illustrations/illustration-vector-1.svg"
        alt="Decorative vector"
        width={790}
        height={700}
        className="absolute top-[3020px] -left-[290px] w-[790px] h-[700px] object-fill"
      />
    </div>
  );
}
