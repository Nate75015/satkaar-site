import {
  HeroSection,
  ProblemSection,
  SolutionSection,
  HowItWorksSection,
  TargetAudienceSection,
  SecuritySection,
  NewsletterSection,
} from "@/components/sections";

// Features icons
import shieldLockIcon from "@/public/images/icons/shield-lock-icon.svg";
import controlIcon from "@/public/images/icons/settings-icon.svg";
import rgpdIcon from "@/public/images/icons/shield-check-icon.svg";
import verifiedIcon from "@/public/images/icons/verified-icon.svg";

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
    title: "Contrôle total",
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

export default function HomePage() {
  return (
    <div className="w-full">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection />
      <TargetAudienceSection />
      <SecuritySection securityFeatures={securityFeatures} title="Vos documents, votre vie privée, Votre contrôle." description="La sécurité de vos données n'est pas négociable. On le sait. C'est pour ça qu'on a construit O.S.O avec les standards les plus stricts du marché." />
      <NewsletterSection />
    </div>
  );
}
