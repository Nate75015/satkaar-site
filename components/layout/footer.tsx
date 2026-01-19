"use client";

import Link from "next/link";
import { Logo } from "@/components/common/logo";
import { SocialLinks } from "@/components/common/social-links";
import { siteConfig, footerLinks } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gris-70">
      {/* Main Footer Content */}
      <div className="container-oso py-8">
        <div className="flex flex-col lg:flex-row items-start justify-center gap-12 lg:justify-between">
          {/* Logo & Description */}
          <div className="flex flex-col items-center gap-4 w-full ">
            <Logo variant="white" />
            <p className="text-base text-white text-center lg:text-center leading-relaxed">
              La gestion de documents simplifiée par l&apos;IA
              <br />
              Une solution développée en France 🇫🇷
              <br />
              Pour simplifier l&apos;administratif de tous
            </p>
          </div>

          {/* Products Links */}
          <div className="flex flex-col items-center lg:items-center gap-6 w-full ">
            <h3 className="font-heading font-semibold text-lg text-white">
              Produits
            </h3>
            <ul className="flex flex-col items-center justify-center gap-2.5">
              {footerLinks.produits.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-base text-center text-white underline hover:text-gris-20 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div className="flex flex-col items-center lg:items-center gap-6 w-full">
            <h3 className="font-heading font-semibold text-lg text-white">
              Légal 
            </h3>
            <ul className="flex flex-col items-center justify-center gap-2.5">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-base text-white underline hover:text-gris-20 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-6 h-px bg-gris-40 w-full max-w-[1200px] mx-auto" />

        {/* Contact & Social */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-[78px]">
          <p className="text-base text-white text-center">
            Contact :{" "}
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="underline hover:text-gris-20 transition-colors"
            >
              {siteConfig.contact.email}
            </a>
          </p>
          <p className="text-base text-white text-center">
            Support :{" "}
            <a
              href={`mailto:${siteConfig.contact.support}`}
              className="underline hover:text-gris-20 transition-colors"
            >
              {siteConfig.contact.support}
            </a>
          </p>
          <div className="flex items-center gap-6">
            <span className="text-base text-white">Suivez-nous :</span>
            <SocialLinks />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gris-20 py-4">
        <div className="container-oso">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-base text-gris-80 text-center">
            <p>© {currentYear} O.S.O — Tous droits réservés</p>
            <p>Made with ❤️ in France</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
