"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AppStoreBadges } from "@/components/common/app-store-badges";
import { NewsletterSection } from "@/components/sections/newsletter-section";
import { cn } from "@/lib/utils";

// Figma assets
const independantImg = "https://www.figma.com/api/mcp/asset/6778b1cd-9c82-403f-9f2d-e6d954d07cd8";
const freelanceImg = "https://www.figma.com/api/mcp/asset/94424e5e-bd10-4780-8e06-f43dd0a6ac01";
const etudiantsImg = "https://www.figma.com/api/mcp/asset/09047e2e-ea33-4356-9db0-af74e0343fbd";
const seniorsImg = "https://www.figma.com/api/mcp/asset/b6b2839b-230c-4ed3-8602-78f32e8a98fa";
const famillesImg = "https://www.figma.com/api/mcp/asset/715767b0-f4ce-4373-80f4-9e6060743df3";
const scanIcon = "https://www.figma.com/api/mcp/asset/ef05c34e-bb6d-4f48-8dc9-a8982516fffb";
const triIcon = "https://www.figma.com/api/mcp/asset/d3e7430d-ffda-4764-9753-3c88cdd96af7";
const partageIcon = "https://www.figma.com/api/mcp/asset/3d8f9342-6269-478a-abbf-438066ac0292";
const rappelsIcon = "https://www.figma.com/api/mcp/asset/536df6d6-9ef2-4a40-abcf-87295720c6c2";

interface ProfileTab {
  id: string;
  label: string;
  badge: string;
  badgeColor: string;
  title: string;
  description: string;
  features: { title: string; description: string }[];
  benefits: string[];
  image: string;
  ctaText: string;
  ctaVariant: "default" | "outline" | "rose";
}

const profileTabs: ProfileTab[] = [
  {
    id: "independant",
    label: "Indépendant",
    badge: "MICRO-ENTREPRENEURS",
    badgeColor: "bg-[#d5e7fe]",
    title: "Pour les micro-entrepreneurs qui veulent rester concentrés sur leur activité",
    description: "Factures, déclarations, contrats, justificatifs… La gestion administrative prend trop de place dans votre quotidien.",
    features: [
      { title: "Factures & justificatifs", description: "Centralisez toutes vos factures clients et fournisseurs." },
      { title: "Dossiers administratifs", description: "Gardez vos documents prêts en cas de contrôle ou de demande officielle." },
      { title: "Rappels importants", description: "Ne ratez plus aucune échéance administrative." },
    ],
    benefits: ["Classement automatique", "Documents accessibles partout", "Zéro stress administratif"],
    image: independantImg,
    ctaText: "Télécharger l'app",
    ctaVariant: "default",
  },
  {
    id: "freelances",
    label: "Freelances & consultants",
    badge: "FREELANCES & CONSULTANTS",
    badgeColor: "bg-rose-10",
    title: "Pour les freelances et consultants qui jonglent entre plusieurs clients",
    description: "Chaque client a ses documents, ses contrats, ses délais. Sans organisation claire, tout se mélange.",
    features: [
      { title: "Contrats & devis", description: "Tous vos documents clients, bien séparés." },
      { title: "Preuves & livrables", description: "Accédez rapidement aux fichiers demandés." },
      { title: "Partage rapide", description: "Envoyez un document en trois clics." },
    ],
    benefits: ["Gain de temps", "Image professionnelle", "Organisation fluide"],
    image: freelanceImg,
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
      { title: "Partage sécurisé", description: "Envoyez le bon document au bon interlocuteur." },
    ],
    benefits: ["Organisation centralisée", "Gain de temps", "Moins de charge mentale"],
    image: famillesImg,
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
      { title: "Documents personnels", description: "Carte d'identité, assurance, santé, logement." },
      { title: "Classement automatique", description: "Pas besoin de comprendre la technologie." },
      { title: "Rappels utiles", description: "Renouvellements, actualisation, échéances importantes." },
    ],
    benefits: ["Interface claire", "Accompagnement pas à pas", "Sérénité au quotidien"],
    image: seniorsImg,
    ctaText: "Découvrir une solution simple",
    ctaVariant: "outline",
  },
  {
    id: "etudiants",
    label: "Étudiants",
    badge: "ÉTUDIANTS",
    badgeColor: "bg-vert-100",
    title: "L'essentiel de vos documents étudiants, sans prise de tête.",
    description: "Inscription, logement, bourse, stage, assurance… Les documents s'accumulent vite, souvent à des moments déjà stressants.",
    features: [
      { title: "Dossiers scolaires & administratifs", description: "Certificats de scolarité, inscriptions, relevés, conventions de stage." },
      { title: "Logement & vie étudiante", description: "Bail, assurance habitation, justificatifs demandés par les propriétaires ou les résidences." },
      { title: "Démarches urgentes", description: "Retrouvez et envoyez rapidement un document quand une administration le demande." },
    ],
    benefits: ["Tous les documents étudiants au même endroit", "Accès facile depuis le téléphone", "Moins de stress pendant les périodes clés (rentrée, examens, stages)"],
    image: etudiantsImg,
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
  const [activeTab, setActiveTab] = useState("independant");
  const activeProfile = profileTabs.find((tab) => tab.id === activeTab) || profileTabs[0];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#d5e7fe] py-24">
        <div className="container-oso">
          <div className="flex flex-col items-center gap-6 text-center max-w-[945px] mx-auto">
            <h1 className="font-heading font-bold text-[36px] md:text-[48px] text-gris-70 leading-tight">
              Une app pensée pour celles et ceux qui n'ont plus le temps (ni l'énergie) de gérer des papiers.
            </h1>
            <p className="font-heading font-medium text-[20px] md:text-[25px] text-black text-center">
              Que vous soyez indépendant, senior ou simplement débordé par l'administratif,
              <br />
              O.S.O s'adapte à votre réalité.
            </p>
            <Button size="lg">Télécharger l'app</Button>
          </div>
        </div>
      </section>

      {/* Profile Tabs Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-oso">
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 bg-gris-10 border border-gris-20 rounded-[16px] p-2">
            {profileTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "px-4 py-2 rounded-[16px] font-body text-lg transition-all flex items-center gap-2",
                  activeTab === tab.id
                    ? "bg-bleu-200 text-white font-bold"
                    : "text-gris-60 hover:bg-gris-20"
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Profile Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProfile.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white border border-gris-20 rounded-[16px] p-6"
            >
              <div className={cn(
                "flex flex-col lg:flex-row gap-12",
                activeProfile.id === "freelances" || activeProfile.id === "seniors" ? "lg:flex-row-reverse" : ""
              )}>
                {/* Content */}
                <div className="flex-1 flex flex-col gap-6">
                  <span className={cn("inline-block px-3 py-2 rounded-lg font-body font-medium text-sm text-gris-70 w-fit", activeProfile.badgeColor)}>
                    {activeProfile.badge}
                  </span>
                  
                  <div className="flex flex-col gap-2">
                    <h2 className="font-heading font-semibold text-[18px] text-gris-70">
                      {activeProfile.title}
                    </h2>
                    <p className="font-body text-base text-gris-70">
                      {activeProfile.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {activeProfile.features.map((feature, index) => (
                      <div key={index} className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                          <Check className={cn(
                            "w-5 h-5",
                            activeProfile.id === "independant" ? "text-bleu-200" :
                            activeProfile.id === "freelances" || activeProfile.id === "seniors" ? "text-rose-300" :
                            "text-vert-400"
                          )} />
                          <h4 className="font-body font-semibold text-base text-black">
                            {feature.title}
                          </h4>
                        </div>
                        <p className="font-body text-base text-gris-70 ml-7">
                          {feature.description}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Benefits */}
                  <div className="flex flex-col gap-4 mt-4">
                    <h4 className="font-heading font-semibold text-[18px] text-black">
                      Ce que vous offre O.S.O
                    </h4>
                    <div className="flex flex-col gap-4">
                      {activeProfile.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="w-[30px] h-[30px] rounded-full bg-gris-20" />
                          <p className="font-body text-base text-gris-70">{benefit}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Image & CTA */}
                <div className="flex flex-col items-center gap-6 lg:w-[503px] shrink-0">
                  <div className="relative w-full h-[300px] md:h-[451px] rounded-[16px] overflow-hidden">
                    <Image
                      src={activeProfile.image}
                      alt={activeProfile.label}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                  <Button
                    variant={activeProfile.ctaVariant === "rose" ? "default" : activeProfile.ctaVariant}
                    className={cn(
                      activeProfile.ctaVariant === "rose" && "bg-rose-300 hover:bg-rose-300/90"
                    )}
                  >
                    {activeProfile.ctaText}
                  </Button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-oso">
          <div className="flex flex-col items-center gap-8">
            <div className="flex flex-col items-center gap-8 text-center max-w-[532px]">
              <h2 className="font-heading font-semibold text-[32px] md:text-[39px] text-black">
                Un seul outil. Tous vos documents.
              </h2>
              <p className="font-body text-base text-black">
                Quel que soit votre profil, O.S.O s'adapte à vous.
              </p>
            </div>

            <p className="font-heading font-medium text-[20px] md:text-[25px] text-gris-70 text-center">
              Scan → Tri → Partage → Rappels intelligents
            </p>

            {/* Process Icons */}
            <div className="flex flex-wrap justify-center gap-8 md:gap-4 w-full max-w-[1103px]">
              {processSteps.map((step, index) => (
                <div key={index} className="flex flex-col items-center gap-6">
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
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <NewsletterSection />
    </>
  );
}
