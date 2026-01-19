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
const scanIcon = "https://www.figma.com/api/mcp/asset/51e238b6-8de8-4c18-87a3-03fd85b40c32";
const triIcon = "https://www.figma.com/api/mcp/asset/cb436f90-5763-410c-86dc-2e87b3e76b09";
const partageIcon = "https://www.figma.com/api/mcp/asset/0d8f890a-c58d-4589-ace7-9bf14cf16021";
const arrowIcon = "https://www.figma.com/api/mcp/asset/5d605a0a-811b-4c51-8af5-c3b5b1e34836";
const shieldIcon = "https://www.figma.com/api/mcp/asset/7164c614-2d9c-484c-8250-d59e960b8370";
const settingsIcon = "https://www.figma.com/api/mcp/asset/24d4c3b0-0a0f-44a8-82a0-27a7f79d98e8";
const rgpdIcon = "https://www.figma.com/api/mcp/asset/bc65d416-9959-43af-b69b-621f245102a5";
const verifiedIcon = "https://www.figma.com/api/mcp/asset/2e28cb32-7652-4872-9703-635e593602f3";
const phoneMockup1 = "https://www.figma.com/api/mcp/asset/d9d6e3ba-efb4-41d9-a8cd-72be50946c7f";
const phoneMockup2 = "https://www.figma.com/api/mcp/asset/e6bc5e10-0bbc-419b-af97-6a9247832bca";

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
    icon: shieldIcon,
    label: "Données sécurisées",
  },
  {
    icon: settingsIcon,
    label: "Accès protégé",
  },
  {
    icon: rgpdIcon,
    label: "Conformité RGPD",
  },
  {
    icon: verifiedIcon,
    label: "Aucune validation automatique",
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
      <section className="py-16 md:py-24 bg-white">
        <div className="container-oso">
          <div className="flex flex-col items-center gap-8">
            <h2 className="font-heading font-semibold text-[32px] md:text-[39px] text-black text-center">
              Une logique claire. Zéro effort inutile.
            </h2>
            <p className="font-body text-base text-black text-center">
              Pas besoin de réfléchir, ni de savoir où classer quoi. O.S.O suit toujours la même logique :
            </p>
            
            {/* Flow: Scan → Tri → Partage */}
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 mt-8">
              <p className="font-heading font-medium text-[20px] md:text-[25px] text-gris-70">
                Scan → Tri → Partage
              </p>
            </div>

            {/* Process Icons */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 w-full max-w-[1024px] mt-8">
              {processSteps.map((step, index) => (
                <div key={index} className="flex items-center gap-4 md:gap-8">
                  <div className="flex flex-col items-center gap-6">
                    <div className="w-[120px] h-[120px] md:w-[160px] md:h-[160px] rounded-full bg-bleu-light-100 flex items-center justify-center">
                      <Image
                        src={step.icon}
                        alt={step.label}
                        width={54}
                        height={54}
                        className="w-[40px] h-[40px] md:w-[54px] md:h-[54px]"
                        unoptimized
                      />
                    </div>
                    <p className="font-heading font-medium text-[18px] md:text-[25px] text-gris-60 text-center">
                      {step.label}
                    </p>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block w-[100px] lg:w-[166px]">
                      <Image
                        src={arrowIcon}
                        alt="Arrow"
                        width={167}
                        height={37}
                        className="w-full"
                        unoptimized
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <p className="font-body text-base text-black text-center mt-8">
              Et à chaque étape, vous gardez le contrôle.
            </p>
          </div>
        </div>
      </section>

      {/* Step Cards Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-oso">
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
      <section className="py-16 md:py-24 bg-white">
        <div className="container-oso">
          <div className="flex flex-col items-center gap-8">
            <div className="flex flex-col items-center gap-4 max-w-[548px] text-center">
              <h2 className="font-heading font-semibold text-[32px] md:text-[39px] text-gris-70">
                Vos documents vous appartiennent. Toujours.
              </h2>
              <p className="font-body text-base text-gris-70">
                La gestion de documents demande de la confiance.
                <br />
                C'est pourquoi O.S.O a été conçu pour respecter votre contrôle et votre vie privée.
              </p>
            </div>

            {/* Security Features */}
            <div className="flex flex-wrap justify-center gap-12 md:gap-24 mt-8">
              {securityFeatures.map((feature, index) => (
                <div key={index} className="flex flex-col items-center gap-4 w-[120px] md:w-[144px]">
                  <Image
                    src={feature.icon}
                    alt={feature.label}
                    width={60}
                    height={60}
                    className="w-[50px] h-[50px] md:w-[60px] md:h-[60px]"
                    unoptimized
                  />
                  <p className="font-heading font-semibold text-[16px] md:text-[18px] text-gris-70 text-center">
                    {feature.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

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
