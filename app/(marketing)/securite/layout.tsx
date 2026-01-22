import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sécurité",
  description: "Découvrez comment O.S.O protège vos documents administratifs avec un niveau de sécurité élevé, tout en vous laissant la maîtrise totale de vos données.",
};

export default function SecuriteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
