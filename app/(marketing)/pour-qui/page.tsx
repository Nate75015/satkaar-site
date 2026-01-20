"use client";

import { JSX, useState, useRef, useEffect, useCallback } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AppStoreBadges } from "@/components/common/app-store-badges";
import { NewsletterSection } from "@/components/sections/newsletter-section";
import { cn } from "@/lib/utils";
import { FamilyIcon, FreelanceIcon, IndependentIcon, SeniorsIcon, StudentIcon } from "@/public/images/icons/icons";

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
import ProcessIconsStep from "@/components/sections/process-icons-step";
import doubleCheckGreenIcon from "@/public/images/icons/double-check-green.svg";
import doubleCheckRedIcon from "@/public/images/icons/double-check-red.svg";
import doubleCheckBlueIcon from "@/public/images/icons/double-check-blue.svg";
const arrowIcon = "https://www.figma.com/api/mcp/asset/5d605a0a-811b-4c51-8af5-c3b5b1e34836";

interface ProfileTab {
  id: string;
  label: string;
  badge: string;
  badgeColor: string;
  title: string;
  description: string;
  features: { title: string; description: string }[];
  benefits: string[];
  image: StaticImageData;
  icon: typeof IndependentIcon;
  doubleCheckIcon: typeof doubleCheckGreenIcon;
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
    description: "Chaque client a ses documents, ses contrats, ses délais. Sans organisation claire, tout se mélange.",
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
      { title: "Partage sécurisé", description: "Envoyez le bon document au bon interlocuteur." },
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
      { title: "Documents personnels", description: "Carte d'identité, assurance, santé, logement." },
      { title: "Classement automatique", description: "Pas besoin de comprendre la technologie." },
      { title: "Rappels utiles", description: "Renouvellements, actualisation, échéances importantes." },
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
    description: "Inscription, logement, bourse, stage, assurance… Les documents s'accumulent vite, souvent à des moments déjà stressants.",
    features: [
      { title: "Dossiers scolaires & administratifs", description: "Certificats de scolarité, inscriptions, relevés, conventions de stage." },
      { title: "Logement & vie étudiante", description: "Bail, assurance habitation, justificatifs demandés par les propriétaires ou les résidences." },
      { title: "Démarches urgentes", description: "Retrouvez et envoyez rapidement un document quand une administration le demande." },
    ],
    benefits: ["Tous les documents étudiants au même endroit", "Accès facile depuis le téléphone", "Moins de stress pendant les périodes clés (rentrée, examens, stages)"],
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
  const [activeTab, setActiveTab] = useState("independant");
  const activeProfile = profileTabs.find((tab) => tab.id === activeTab) || profileTabs[0];
  
  // Refs for scrollable tabs
  const tabsContainerRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<Map<string, HTMLButtonElement>>(new Map());
  
  // Drag scroll state
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Scroll to center the active tab
  const scrollToTab = useCallback((tabId: string) => {
    const container = tabsContainerRef.current;
    const tabElement = tabRefs.current.get(tabId);
    
    if (container && tabElement) {
      const containerRect = container.getBoundingClientRect();
      const tabRect = tabElement.getBoundingClientRect();
      
      // Calculate the scroll position to center the tab
      const tabCenter = tabRect.left + tabRect.width / 2;
      const containerCenter = containerRect.left + containerRect.width / 2;
      const scrollOffset = tabCenter - containerCenter;
      
      container.scrollBy({
        left: scrollOffset,
        behavior: "smooth",
      });
    }
  }, []);

  // Handle tab click
  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    scrollToTab(tabId);
  };

  // Drag to scroll handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    const container = tabsContainerRef.current;
    if (!container) return;
    
    setIsDragging(true);
    setStartX(e.pageX - container.offsetLeft);
    setScrollLeft(container.scrollLeft);
    container.style.cursor = "grabbing";
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    
    const container = tabsContainerRef.current;
    if (!container) return;
    
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 1.5; // Scroll speed multiplier
    container.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (tabsContainerRef.current) {
      tabsContainerRef.current.style.cursor = "grab";
    }
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      if (tabsContainerRef.current) {
        tabsContainerRef.current.style.cursor = "grab";
      }
    }
  };

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
          <div
            ref={tabsContainerRef}
            className={cn(
              "flex overflow-x-auto gap-4 mb-12 bg-gris-10 border border-gris-20 rounded-oso-s p-2 scrollbar-hide cursor-grab select-none",
              isDragging && "cursor-grabbing"
            )}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
          >
            {profileTabs.map((tab) => (
              <button
                key={tab.id}
                ref={(el) => {
                  if (el) tabRefs.current.set(tab.id, el);
                }}
                onClick={() => !isDragging && handleTabClick(tab.id)}
                className={cn(
                  "px-4 py-2 rounded-oso-s font-body text-lg transition-all flex items-center gap-2 shrink-0 whitespace-nowrap",
                  activeTab === tab.id
                    ? "bg-bleu-200 text-white font-bold"
                    : "text-gris-60 hover:bg-gris-20"
                )}
              >
                <tab.icon color={activeTab === tab.id ? "white" : "#474747"} />
                <span className="text-base">{tab.label}</span>
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
                          <Image src={activeProfile.doubleCheckIcon} alt="Double Check" width={24} height={24} />
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
      <ProcessIconsStep processSteps={processSteps} arrowIcon={arrowIcon} title="Un seul outil. Tous vos documents." description="Quel que soit votre profil, O.S.O s'adapte à vous." subtitle="Scan → Tri → Partage → Rappels intelligents" flow="Scan → Tri → Partage → Rappels intelligents" />

      {/* Newsletter Section */}
      <NewsletterSection bgColor="bg-bleu-50" />
    </>
  );
}
