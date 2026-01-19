import { Metadata } from "next";
import { Section } from "@/components/layout/section";

export const metadata: Metadata = {
  title: "Comment ça marche?",
  description: "Découvrez comment O.S.O simplifie votre gestion documentaire en 3 étapes simples : Scan, Tri, Partage.",
};

export default function CommentCaMarchePage() {
  return (
    <>
      <Section className="bg-vert-100">
        <div className="flex flex-col items-center gap-8 text-center">
          <h1 className="text-gris-70">Comment ça marche?</h1>
          <p className="text-lg text-gris-60 max-w-[800px]">
            Découvrez comment O.S.O simplifie votre gestion documentaire en 3 étapes simples.
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
