import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fonctionnalités",
  description: "Découvrez toutes les fonctionnalités d'O.S.O : scan intelligent, tri automatique, coffre-fort numérique, rappels et plus encore.",
};

export default function FonctionnalitesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
