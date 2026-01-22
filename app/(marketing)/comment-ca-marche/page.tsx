import { Metadata } from "next";
import {
  CommentCaMarcheHeroSection,
  StepCardsSection,
  CommentCaMarcheCTASection,
} from "@/components/sections/comment-ca-marche";
import { SecuritySection, TargetAudienceSection } from "@/components/sections";
import ProcessIconsStep from "@/components/sections/process-icons-step";

// Figma assets
import scanIcon from "@/public/images/icons/scanner-bold-icon.svg";
import triIcon from "@/public/images/icons/sort-bold-icon.svg";
import partageIcon from "@/public/images/icons/users-bold-icon.svg";
const arrowIcon = "https://www.figma.com/api/mcp/asset/5d605a0a-811b-4c51-8af5-c3b5b1e34836";
const phoneMockup1 = "https://www.figma.com/api/mcp/asset/d9d6e3ba-efb4-41d9-a8cd-72be50946c7f";
const phoneMockup2 = "https://www.figma.com/api/mcp/asset/e6bc5e10-0bbc-419b-af97-6a9247832bca";

// Features icons
import shieldLockIcon from "@/public/images/icons/shield-lock-icon.svg";
import controlIcon from "@/public/images/icons/settings-icon.svg";
import rgpdIcon from "@/public/images/icons/shield-check-icon.svg";
import verifiedIcon from "@/public/images/icons/verified-icon.svg";

export const metadata: Metadata = {
  title: "Comment ça marche?",
  description:
    "Découvrez comment O.S.O simplifie votre gestion documentaire en 3 étapes simples : Scan, Tri, Partage.",
};

const processSteps = [
  { icon: scanIcon, label: "Scanner/Importer" },
  { icon: triIcon, label: "Tri automatique" },
  { icon: partageIcon, label: "Partager" },
];

const stepCards = [
  {
    title: "Scannez / importez vos documents.",
    description: [
      "Prenez simplement une photo de vos documents, ou importez-les depuis votre téléphone ou votre cloud.",
      "Factures, contrats, assurances, documents administratifs… Tous vos fichiers entrent dans O.S.O en quelques secondes.",
    ],
    bgColor: "bg-jaune-10",
  },
  {
    title: "O.S.O organise. Vous validez.",
    description: [
      "Dès qu'un document est importé, nous l'analysons, proposons un nom et un dossier adapté.",
      "Vous voyez les documents un par un, clairement présentés. Un simple geste suffit pour valider ou ajuster.",
    ],
    bgColor: "bg-bleu-light-100",
  },
  {
    title: "Partagez le bon document, au bon moment.",
    description: [
      "Quand vous avez besoin d'un document, il est déjà prêt, bien rangé et facile à retrouver.",
      "Envoyer un document à un comptable, une administration ou un proche devient simple, rapide et sécurisé.",
    ],
    bgColor: "bg-jaune-10",
  },
];

const securityFeatures = [
  {
    id: "secure",
    icon: shieldLockIcon,
    title: "Données sécurisées",
    width: 60,
    height: 60,
  },
  {
    id: "control",
    icon: controlIcon,
    title: "Accès protégé",
    width: 50,
    height: 60,
  },
  {
    id: "rgpd",
    icon: rgpdIcon,
    title: "Conformité RGPD",
    width: 54,
    height: 60,
  },
  {
    id: "transparent",
    icon: verifiedIcon,
    title: "Transparence et engagement",
    width: 60,
    height: 60,
  },
];

export default function CommentCaMarchePage() {
  return (
    <>
      {/* Hero Section */}
      <CommentCaMarcheHeroSection />

      {/* Process Flow Section */}
      <ProcessIconsStep
        processSteps={processSteps}
        arrowIcon={arrowIcon}
        title="Une logique claire. Zéro effort inutile."
        description="Pas besoin de réfléchir, ni de savoir où classer quoi. O.S.O suit toujours la même logique :"
        subtitle="Et à chaque étape, vous gardez le contrôle."
        flow="Scan → Tri → Partage"
      />

      {/* Step Cards Section */}
      <StepCardsSection
        stepCards={stepCards}
        subtitle="Et à chaque étape, vous gardez le contrôle."
      />

      {/* Security Section */}
      <SecuritySection
        securityFeatures={securityFeatures}
        title={
          <span>
            Vos documents vous <br /> appartiennent. Toujours.
          </span>
        }
        description="La gestion de documents demande de la confiance. C'est pourquoi O.S.O a été conçu pour respecter votre contrôle et votre vie privée."
      />

      {/* Target Audience Section - Reuse from home */}
      <TargetAudienceSection />

      {/* CTA Section */}
      <CommentCaMarcheCTASection
        title="Prêt(e) à simplifier votre vie ?"
        description="Rejoignez des milliers d'utilisateurs qui ont repris le contrôle de leur administratif."
        mockup1={phoneMockup1}
        mockup2={phoneMockup2}
      />
    </>
  );
}
