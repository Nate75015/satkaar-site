import { Metadata } from "next";
import Image from "next/image";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NewsletterSection } from "@/components/sections/newsletter-section";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Fonctionnalités",
  description: "Découvrez toutes les fonctionnalités d'O.S.O : scan intelligent, tri automatique, coffre-fort numérique, rappels et plus encore.",
};

// Placeholder mockup images (using the mockups we have)
const scanMockup = "/images/mockups/solution-mockup-1.png";
const classementMockup = "/images/mockups/solution-mockup-2.png";
const organisationMockup = "/images/mockups/solution-mockup-3.png";
const partageMockup = "/images/mockups/hero-mockup.png";
const rappelsMockup = "/images/mockups/newletter-mockup.png";

interface Feature {
  id: string;
  number: string;
  title: string;
  highlightColor: string;
  subtitle: string;
  description: string;
  features: string[];
  mockup: string;
  bgColor: string;
  position: "left" | "right";
}

const features: Feature[] = [
  {
    id: "scan",
    number: "01",
    title: "Scan & Import",
    highlightColor: "text-bleu-200",
    subtitle: "Scannez ou importez vos documents en quelques secondes",
    description: "Que ce soit une facture, un contrat ou une ordonnance, O.S.O capture et numérise tout.",
    features: [
      "Scan depuis le téléphone",
      "Import depuis les fichiers ou le cloud",
      "Formats acceptés : PDF, images",
    ],
    mockup: scanMockup,
    bgColor: "bg-bleu-light-100",
    position: "left",
  },
  {
    id: "classement",
    number: "02",
    title: "Classement intelligent",
    highlightColor: "text-vert-400",
    subtitle: "O.S.O classe vos documents pour vous",
    description: "Grâce à une technologie avancée de lecture OCR, O.S.O analyse et trie automatiquement vos documents.",
    features: [
      "Reconnaissance automatique",
      "Classement par catégorie",
    ],
    mockup: classementMockup,
    bgColor: "bg-white",
    position: "right",
  },
  {
    id: "organisation",
    number: "03",
    title: "Organisation claire & recherche simple",
    highlightColor: "text-rose-300",
    subtitle: "Retrouvez n'importe quel document, instantanément",
    description: "Vos documents sont organisés par catégorie, par date ou par type, vous permettant une recherche rapide.",
    features: [
      "Organisation personnalisable",
      "Recherche par mots-clés",
      "Accès rapide aux favoris",
    ],
    mockup: organisationMockup,
    bgColor: "bg-bleu-light-100",
    position: "left",
  },
  {
    id: "partage",
    number: "04",
    title: "Partage maîtrisé",
    highlightColor: "text-jaune-40",
    subtitle: "Partagez le bon document, sans erreur",
    description: "Envoyez un document par e-mail, WhatsApp ou téléchargez-le pour vos démarches en quelques clics.",
    features: [
      "Partage sécurisé",
      "Historique des envois",
      "Accès par lien",
    ],
    mockup: partageMockup,
    bgColor: "bg-white",
    position: "right",
  },
  {
    id: "rappels",
    number: "05",
    title: "Rappels & échéances",
    highlightColor: "text-bleu-200",
    subtitle: "Ne ratez plus jamais vos échéances importantes",
    description: "O.S.O analyse vos documents et détecte automatiquement les dates d'échéance.",
    features: [
      "Notifications intelligentes",
      "Rappels personnalisables",
    ],
    mockup: rappelsMockup,
    bgColor: "bg-bleu-light-100",
    position: "left",
  },
];

const targetProfiles = [
  { label: "Indépendants", icon: "💼" },
  { label: "Freelances", icon: "💻" },
  { label: "Étudiants", icon: "📚" },
  { label: "Seniors", icon: "👴" },
  { label: "Famille", icon: "👨‍👩‍👧‍👦" },
];

export default function FonctionnalitesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#d5e7fe] py-24">
        <div className="container-oso">
          <div className="flex flex-col items-center gap-6 text-center max-w-[800px] mx-auto">
            <h1 className="font-heading font-bold text-[36px] md:text-[48px] text-gris-70">
              Tout ce qu'il faut pour gérer ses documents.
              <br />
              Rien de superflu.
            </h1>
            <p className="font-body text-base text-black">
              O.S.O combine simplicité, intelligence et sécurité
              <br />
              pour vous faire gagner du temps au quotidien.
            </p>
            <Button size="lg">Télécharger l'app</Button>
          </div>
        </div>
      </section>

      {/* Features Sections */}
      {features.map((feature, index) => (
        <section
          key={feature.id}
          className={cn("py-16 md:py-24", feature.bgColor)}
        >
          <div className="container-oso">
            <div className={cn(
              "flex flex-col lg:flex-row items-center gap-12",
              feature.position === "right" && "lg:flex-row-reverse"
            )}>
              {/* Content */}
              <div className="flex-1 flex flex-col gap-6">
                <div className="flex items-center gap-3">
                  <span className={cn("font-heading font-semibold text-[20px]", feature.highlightColor)}>
                    {feature.number}
                  </span>
                  <h2 className={cn("font-heading font-semibold text-[28px] md:text-[35px]", feature.highlightColor)}>
                    {feature.title}
                  </h2>
                </div>
                
                <div className="flex flex-col gap-4">
                  <h3 className="font-heading font-semibold text-[18px] text-gris-70">
                    {feature.subtitle}
                  </h3>
                  <p className="font-body text-base text-gris-70">
                    {feature.description}
                  </p>
                </div>

                <ul className="flex flex-col gap-3 mt-4">
                  {feature.features.map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Check className={cn("w-5 h-5", feature.highlightColor)} />
                      <span className="font-body text-base text-gris-70">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Mockup */}
              <div className={cn(
                "relative w-full max-w-[400px] h-[400px] md:h-[500px] rounded-[24px] overflow-hidden",
                feature.bgColor === "bg-white" ? "bg-gris-10" : "bg-white"
              )}>
                <Image
                  src={feature.mockup}
                  alt={feature.title}
                  fill
                  className="object-contain p-4"
                />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Target Profiles Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-oso">
          <div className="flex flex-col items-center gap-12">
            <div className="flex flex-col items-center gap-4 text-center">
              <h2 className="font-heading font-semibold text-[32px] md:text-[39px] text-black">
                Les mêmes fonctionnalités,
                <br />
                adaptées à chaque usage.
              </h2>
            </div>

            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
              {targetProfiles.map((profile, index) => (
                <div key={index} className="flex flex-col items-center gap-4">
                  <div className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] rounded-full bg-bleu-light-100 flex items-center justify-center text-4xl">
                    {profile.icon}
                  </div>
                  <p className="font-heading font-medium text-[18px] text-gris-60">
                    {profile.label}
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
