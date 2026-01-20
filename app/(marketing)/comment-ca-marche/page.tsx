import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AppStoreBadges } from "@/components/common/app-store-badges";
import { TargetAudienceSection } from "@/components/sections/target-audience-section";

export const metadata: Metadata = {
  title: "Comment ça marche?",
  description: "Découvrez comment O.S.O simplifie votre gestion documentaire en 3 étapes simples : Scan, Tri, Partage.",
};

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
import { SecuritySection } from "@/components/sections";
import ProcessIconsStep from "@/components/sections/process-icons-step";

const processSteps = [
  {
    icon: scanIcon,
    label: "Scanner/Importer",
  },
  {
    icon: triIcon,
    label: "Tri automatique",
  },
  {
    icon: partageIcon,
    label: "Partager",
  },
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
      <section className="bg-[#d5e7fe] py-24">
        <div className="container-oso">
          <div className="flex flex-col items-center gap-6 text-center max-w-[945px] mx-auto">
            <h1 className="font-heading font-bold text-[36px] md:text-[48px] text-gris-70">
              Gérer ses documents n'a jamais été aussi simple.
            </h1>
            <div className="flex flex-col gap-6 max-w-[576px]">
              <p className="font-heading font-medium text-[20px] md:text-[25px] text-black">
                Avec O.S.O, vos papiers se rangent presque tout seuls.
                <br />
                Vous scannez, vous validez, c'est fait.
              </p>
              <p className="font-body text-base text-black">
                O.S.O a été conçu pour celles et ceux qui veulent en finir avec la paperasse,
                <br />
                sans apprendre un nouvel outil compliqué.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Flow Section */}
      <ProcessIconsStep processSteps={processSteps} arrowIcon={arrowIcon} title="Une logique claire. Zéro effort inutile." description="Pas besoin de réfléchir, ni de savoir où classer quoi. O.S.O suit toujours la même logique :" subtitle="Et à chaque étape, vous gardez le contrôle." flow="Scan → Tri → Partage" />

      {/* Step Cards Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-oso">
          <p className="font-body text-base text-black text-center mb-20">
            Et à chaque étape, vous gardez le contrôle.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {stepCards.map((card, index) => (
              <div
                key={index}
                className={`${card.bgColor} rounded-[16px] p-6 flex flex-col gap-6`}
              >
                <h3 className="font-heading font-medium text-[20px] md:text-[25px] text-gris-70">
                  {card.title}
                </h3>
                <div className="flex flex-col gap-2">
                  {card.description.map((text, i) => (
                    <p key={i} className="font-body text-base text-gris-70">
                      {text}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <SecuritySection securityFeatures={securityFeatures} title={<span>Vos documents vous <br /> appartiennent. Toujours.</span>} description="La gestion de documents demande de la confiance. C'est pourquoi O.S.O a été conçu pour respecter votre contrôle et votre vie privée." />

      {/* Target Audience Section - Reuse from home */}
      <TargetAudienceSection />

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-oso">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-32">
            {/* Phone Mockups */}
            <div className="relative flex items-end gap-10">
              <div className="relative w-[200px] md:w-[305px] h-[420px] md:h-[635px]">
                <Image
                  src={phoneMockup1}
                  alt="O.S.O App"
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
              <div className="relative w-[170px] md:w-[257px] h-[367px] md:h-[556px] -ml-8">
                <Image
                  src={phoneMockup2}
                  alt="O.S.O App"
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
            </div>

            {/* CTA Content */}
            <div className="flex flex-col gap-8 max-w-[414px]">
              <div className="flex flex-col gap-8">
                <h2 className="font-heading font-semibold text-[32px] md:text-[39px] text-gris-70">
                  Prêt(e) à simplifier votre vie ?
                </h2>
                <p className="font-body text-base text-black">
                  Rejoignez des milliers d'utilisateurs qui ont repris le contrôle de leur administratif.
                </p>
              </div>
              <AppStoreBadges />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
