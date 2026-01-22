"use client";

import Image from "next/image";
import {
  SecuriteHeroSection,
  SecurityIconsBar,
  QuoteSection,
  ProtectionSection,
  ControlSection,
  ConnectorsSection,
  DataOwnershipSection,
  SecuriteCTASection,
} from "@/components/sections/securite";

// Phone mockup images - reusing existing mockups
const protectionMockup = "/images/mockups/solution-mockup-2.png";
const controlMockup = "/images/mockups/solution-mockup-3.png";
const connectorsMockup = "/images/mockups/solution-mockup-4.png";
const ctaMockup1 = "/images/mockups/solution-mockup-1.png";
const ctaMockup2 = "/images/mockups/solution-mockup-2.png";

// Security icons
const securityIcons = [
  {
    label: "Données chiffrées",
    icon: "/images/icons/encryption-icon.svg",
  },
  {
    label: "Contrôle utilisateur permanent",
    icon: "/images/icons/security-icon.svg",
  },
  {
    label: "IA encadrée, jamais intrusive",
    icon: "/images/icons/view-icon.svg",
  },
];

// Protection section subsections
const protectionSubsections = [
  {
    title: "Chiffrement",
    titleColor: "#1A9ED8",
    description:
      "Tous les documents importés dans O.S.O sont chiffrés.\nCela signifie qu'ils sont rendus illisibles sans autorisation, même en cas d'accès non autorisé.",
    tags: [
      { label: "Chiffrement des données", bgColor: "#EAF7FC", textColor: "#116990" },
      { label: "Protection renforcée", bgColor: "#EAF7FC", textColor: "#116990" },
    ],
  },
  {
    title: "Cloisonnement",
    titleColor: "#2DA791",
    description:
      "Vos données sont isolées.\nElles ne sont jamais mélangées avec celles d'autres utilisateurs.",
    tags: [
      { label: "Données isolées", bgColor: "#CBF1EA", textColor: "#207768" },
      { label: "Accès individuel", bgColor: "#CBF1EA", textColor: "#207768" },
    ],
  },
  {
    title: "Stockage sécurisé",
    titleColor: "#E36586",
    description:
      "Les fichiers sont stockés sur des infrastructures sécurisées respectant les standards internationaux de protection des données.",
    tags: [
      { label: "Hébergement sécurisé", bgColor: "#F6CCD7", textColor: "#A91F44" },
      { label: "Standards internationaux", bgColor: "#F6CCD7", textColor: "#A91F44" },
    ],
  },
];

// Control section features
const controlFeatures = [
  "Autoriser ou refuser l'accès à un document.",
  "Partager un fichier de manière temporaire.",
  "Révoquer un accès à tout moment.",
  "Visualiser l'historique des actions",
];

// Connectors section features
const connectorFeatures = [
  "Connexion avec votre consentement explicite.",
  "Accès limité au strict nécessaire.",
  "Aucune conservation de vos identifiants.",
  "Déconnexion possible à tout moment.",
];

// Data ownership items
const dataOwnershipItems = [
  {
    label: "Conformité RGPD",
    icon: "/images/icons/shield-check-icon.svg",
  },
  {
    label: "Données sécurisées",
    icon: "/images/icons/shield-lock-icon.svg",
  },
  {
    label: "Export simple\ndes données",
    icon: "/images/icons/upload-icon.svg",
  },
  {
    label: "Suppression définitive\nsur demande",
    icon: "/images/icons/verified-icon.svg",
  },
];

export default function SecuritePage() {
  return (
    <div className="relative overflow-clip">
      {/* Decorative vector image */}
      <Image
        src="/images/illustrations/illustration-vector-2.svg"
        alt=""
        width={576}
        height={576}
        className="absolute top-[1029px] -right-[180px] w-[576px] h-[576px] object-fill pointer-events-none"
        aria-hidden="true"
      />

      <SecuriteHeroSection />
      <SecurityIconsBar icons={securityIcons} />
      <QuoteSection />
      <ProtectionSection subsections={protectionSubsections} mockupImage={protectionMockup} />
      <ControlSection features={controlFeatures} mockupImage={controlMockup} />
      <ConnectorsSection features={connectorFeatures} mockupImage={connectorsMockup} />
      <DataOwnershipSection items={dataOwnershipItems} />
      <SecuriteCTASection mockup1={ctaMockup1} mockup2={ctaMockup2} />

      {/* Decorative vector image */}
      <Image
        src="/images/illustrations/illustration-vector-3.svg"
        alt=""
        width={790}
        height={700}
        className="absolute top-[3530px] -left-[100px] w-[810px] h-[790px] object-fill pointer-events-none"
        aria-hidden="true"
      />
    </div>
  );
}
