"use client";

import { FeatureCard, FeatureCardProps } from "./feature-card";

interface FeaturesSectionProps {
  features: FeatureCardProps[];
}

export function FeaturesSection({ features }: FeaturesSectionProps) {
  return (
    <section className="py-16 md:py-24">
      <div className="space-y-[100px] md:space-y-[150px]">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </section>
  );
}
