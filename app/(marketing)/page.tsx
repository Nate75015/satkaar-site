import {
  HeroSection,
  ProblemSection,
  SolutionSection,
  HowItWorksSection,
  TargetAudienceSection,
  SecuritySection,
  NewsletterSection,
} from "@/components/sections";

export default function HomePage() {
  return (
    <div className="w-full">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection />
      <TargetAudienceSection />
      <SecuritySection />
      <NewsletterSection />
    </div>
  );
}
