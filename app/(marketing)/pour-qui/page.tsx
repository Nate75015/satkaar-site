import { Metadata } from "next";
import { Section } from "@/components/layout/section";

export const metadata: Metadata = {
  title: "Pour qui?",
  description: "O.S.O s'adresse à tous ceux qui veulent simplifier leur vie administrative : indépendants, freelances, particuliers, seniors et étudiants.",
};

export default function PourQuiPage() {
  return (
    <>
      <Section className="bg-gris-10">
        <div className="flex flex-col items-center gap-8 text-center">
          <h1 className="text-gris-70">Pour qui?</h1>
          <p className="text-lg text-gris-60 max-w-[800px]">
            O.S.O s&apos;adresse à tous ceux qui veulent simplifier leur vie administrative.
          </p>
        </div>
      </Section>

      {/* This page will be fully implemented in Phase 2 */}
      <Section>
        <div className="flex flex-col items-center gap-8 min-h-[400px] justify-center">
          <p className="text-gris-40 text-center">
            Page en cours de développement...
          </p>
        </div>
      </Section>
    </>
  );
}
