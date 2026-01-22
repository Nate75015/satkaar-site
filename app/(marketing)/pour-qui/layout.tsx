import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pour qui?",
  description:
    "O.S.O s'adapte à votre réalité : indépendants, freelances, familles, seniors et étudiants.",
};

export default function PourQuiLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
