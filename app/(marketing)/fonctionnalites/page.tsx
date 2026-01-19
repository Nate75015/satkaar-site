import { Metadata } from "next";
import { Section } from "@/components/layout/section";

export const metadata: Metadata = {
  title: "Fonctionnalités",
  description: "Découvrez toutes les fonctionnalités d'O.S.O : scan intelligent, tri automatique, coffre-fort numérique, rappels et plus encore.",
};

export default function FonctionnalitesPage() {
  return (
    <>
      <Section className="bg-jaune-10">
        <div className="flex flex-col items-center gap-8 text-center">
          <h1 className="text-gris-70">Fonctionnalités</h1>
          <p className="text-lg text-gris-60 max-w-[800px]">
            Découvrez toutes les fonctionnalités qui font d&apos;O.S.O votre assistant administratif intelligent.
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
