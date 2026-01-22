"use client";

import {
  PourQuiHeroSection,
  ProfileTabsSection,
  ProfileTab,
} from "@/components/sections/pour-qui";
import ProcessIconsStep from "@/components/sections/process-icons-step";
import { NewsletterSection } from "@/components/sections/newsletter-section";
import {
  FamilyIcon,
  FreelanceIcon,
  IndependentIcon,
  SeniorsIcon,
  StudentIcon,
} from "@/public/images/icons/icons";

// Figma assets
import independantImg from "@/public/images/independent-worker.jpg";
import freelanceImg from "@/public/images/freelance-worker.jpg";
import etudiantsImg from "@/public/images/student-worker.jpg";
import seniorsImg from "@/public/images/veteran-worker.jpg";
import famillesImg from "@/public/images/happy-family.jpg";
import scanIcon from "@/public/images/icons/scanner-bold-icon.svg";
import triIcon from "@/public/images/icons/sort-bold-icon.svg";
import partageIcon from "@/public/images/icons/users-bold-icon.svg";
import rappelsIcon from "@/public/images/icons/bell-bold-icon.svg";
import doubleCheckGreenIcon from "@/public/images/icons/double-check-green.svg";
import doubleCheckRedIcon from "@/public/images/icons/double-check-red.svg";
import doubleCheckBlueIcon from "@/public/images/icons/double-check-blue.svg";
const arrowIcon = "https://www.figma.com/api/mcp/asset/5d605a0a-811b-4c51-8af5-c3b5b1e34836";

const profileTabs: ProfileTab[] = [
  {
    id: "independant",
    label: "Indépendant",
    badge: "MICRO-ENTREPRENEURS",
    badgeColor: "bg-[#d5e7fe]",
    title: "Pour les micro-entrepreneurs qui veulent rester concentrés sur leur activité",
    description:
      "Factures, déclarations, contrats, justificatifs… La gestion administrative prend trop de place dans votre quotidien.",
    features: [
      {
        title: "Factures & justificatifs",
        description: "Centralisez toutes vos factures clients et fournisseurs.",
      },
      {
        title: "Dossiers administratifs",
        description: "Gardez vos documents prêts en cas de contrôle ou de demande officielle.",
      },
      {
        title: "Rappels importants",
        description: "Ne ratez plus aucune échéance administrative.",
      },
    ],
    benefits: ["Classement automatique", "Documents accessibles partout", "Zéro stress administratif"],
    image: independantImg,
    icon: IndependentIcon,
    doubleCheckIcon: doubleCheckBlueIcon,
    ctaText: "Télécharger l'app",
    ctaVariant: "default",
  },
  {
    id: "freelances",
    label: "Freelances & consultants",
    badge: "FREELANCES & CONSULTANTS",
    badgeColor: "bg-rose-10",
    title: "Pour les freelances et consultants qui jonglent entre plusieurs clients",
    description:
      "Chaque client a ses documents, ses contrats, ses délais. Sans organisation claire, tout se mélange.",
    features: [
      { title: "Contrats & devis", description: "Tous vos documents clients, bien séparés." },
      { title: "Preuves & livrables", description: "Accédez rapidement aux fichiers demandés." },
      { title: "Partage rapide", description: "Envoyez un document en trois clics." },
    ],
    benefits: ["Gain de temps", "Image professionnelle", "Organisation fluide"],
    image: freelanceImg,
    icon: FreelanceIcon,
    doubleCheckIcon: doubleCheckRedIcon,
    ctaText: "Simplifier ma gestion documentaire",
    ctaVariant: "rose",
  },
  {
    id: "familles",
    label: "Particuliers & familles",
    badge: "PARTICULIERS & FAMILLES",
    badgeColor: "bg-vert-100",
    title: "Pour ceux qui gèrent des documents pour toute la famille",
    description: "Chaque membre a ses papiers. Tout est dispersé.",
    features: [
      { title: "Dossiers familiaux", description: "Logement, école, santé, assurances, etc..." },
      { title: "Accès rapide", description: "Retrouvez un document quand il faut agir." },
      {
        title: "Partage sécurisé",
        description: "Envoyez le bon document au bon interlocuteur.",
      },
    ],
    benefits: ["Organisation centralisée", "Gain de temps", "Moins de charge mentale"],
    image: famillesImg,
    icon: FamilyIcon,
    doubleCheckIcon: doubleCheckGreenIcon,
    ctaText: "Organiser mes documents",
    ctaVariant: "outline",
  },
  {
    id: "seniors",
    label: "Seniors & aidants",
    badge: "SENIORS",
    badgeColor: "bg-rose-10",
    title: "Pour les seniors qui veulent une solution simple et rassurante",
    description: "Les démarches administratives deviennent complexes et stressantes",
    features: [
      {
        title: "Documents personnels",
        description: "Carte d'identité, assurance, santé, logement.",
      },
      {
        title: "Classement automatique",
        description: "Pas besoin de comprendre la technologie.",
      },
      {
        title: "Rappels utiles",
        description: "Renouvellements, actualisation, échéances importantes.",
      },
    ],
    benefits: ["Interface claire", "Accompagnement pas à pas", "Sérénité au quotidien"],
    image: seniorsImg,
    icon: SeniorsIcon,
    doubleCheckIcon: doubleCheckRedIcon,
    ctaText: "Découvrir une solution simple",
    ctaVariant: "outline",
  },
  {
    id: "etudiants",
    label: "Étudiants",
    badge: "ÉTUDIANTS",
    badgeColor: "bg-vert-100",
    title: "L'essentiel de vos documents étudiants, sans prise de tête.",
    description:
      "Inscription, logement, bourse, stage, assurance… Les documents s'accumulent vite, souvent à des moments déjà stressants.",
    features: [
      {
        title: "Dossiers scolaires & administratifs",
        description: "Certificats de scolarité, inscriptions, relevés, conventions de stage.",
      },
      {
        title: "Logement & vie étudiante",
        description:
          "Bail, assurance habitation, justificatifs demandés par les propriétaires ou les résidences.",
      },
      {
        title: "Démarches urgentes",
        description:
          "Retrouvez et envoyez rapidement un document quand une administration le demande.",
      },
    ],
    benefits: [
      "Tous les documents étudiants au même endroit",
      "Accès facile depuis le téléphone",
      "Moins de stress pendant les périodes clés (rentrée, examens, stages)",
    ],
    image: etudiantsImg,
    icon: StudentIcon,
    doubleCheckIcon: doubleCheckGreenIcon,
    ctaText: "Organiser mes documents étudiants",
    ctaVariant: "outline",
  },
];

const processSteps = [
  { icon: scanIcon, label: "Scanner/Importer" },
  { icon: triIcon, label: "Tri automatique" },
  { icon: partageIcon, label: "Partager" },
  { icon: rappelsIcon, label: "Rappels intelligents" },
];

export default function PourQuiPage() {
  return (
    <>
      {/* Hero Section */}
      <PourQuiHeroSection />

      {/* Profile Tabs Section */}
      <ProfileTabsSection profileTabs={profileTabs} />

      {/* Process Section */}
      <ProcessIconsStep
        processSteps={processSteps}
        arrowIcon={arrowIcon}
        title="Un seul outil. Tous vos documents."
        description="Quel que soit votre profil, O.S.O s'adapte à vous."
        subtitle="Scan → Tri → Partage → Rappels intelligents"
        flow="Scan → Tri → Partage → Rappels intelligents"
      />

      {/* Newsletter Section */}
      <NewsletterSection bgColor="bg-bleu-50" />
    </>
  );
}
