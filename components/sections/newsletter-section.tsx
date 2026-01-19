"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronDown, Square } from "lucide-react";

// Figma phone mockup asset
const phoneMockup = "https://www.figma.com/api/mcp/asset/991f759f-c8fd-4b90-802d-fff4389662d8";

export function NewsletterSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    profile: "",
    wantsToBeTester: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container-oso">
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-[150px]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Phone Mockup */}
          <motion.div
            className="relative w-[305px] h-[660px] rounded-[37px] overflow-hidden hidden lg:block"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Image
              src={phoneMockup}
              alt="O.S.O App"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Form */}
          <motion.div
            className="rounded-oso-s p-6 w-full max-w-[548px] bg-gris-10"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="flex flex-col items-center gap-6">
              <h2 className="font-heading font-semibold text-[39px] text-gris-70 text-center leading-tight">
                Dites adieu au cauchemar administratif en avant-première
              </h2>

              <div className="flex flex-col gap-4 w-full">
                <Input
                  type="text"
                  placeholder="Nom et prénom"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                
                <Input
                  type="email"
                  placeholder="Adresse e-mail"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
                
                <Input
                  type="tel"
                  placeholder="Numéro de téléphone (facultatif)"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
                
                <div className="relative">
                  <select
                    className="flex h-[53px] w-full rounded-oso-s border border-gris-20 bg-white px-4 py-[15px] text-base font-body text-gris-40 appearance-none cursor-pointer transition-colors focus:outline-none focus:ring-2 focus:ring-bleu-200 focus:border-bleu-200"
                    value={formData.profile}
                    onChange={(e) => setFormData({ ...formData, profile: e.target.value })}
                  >
                    <option value="">Profil utilisateur</option>
                    <option value="independant">Indépendant</option>
                    <option value="freelance">Freelance</option>
                    <option value="particulier">Particulier</option>
                    <option value="senior">Senior</option>
                    <option value="etudiant">Étudiant</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gris-40 pointer-events-none" />
                </div>

                <label className="flex items-start gap-2 cursor-pointer">
                  <button
                    type="button"
                    className="mt-0.5 flex-shrink-0"
                    onClick={() => setFormData({ ...formData, wantsToBeTester: !formData.wantsToBeTester })}
                  >
                    {formData.wantsToBeTester ? (
                      <div className="w-6 h-6 rounded bg-bleu-200 flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                    ) : (
                      <Square className="w-6 h-6 text-gris-20" />
                    )}
                  </button>
                  <span className="text-base text-black">
                    Je souhaite devenir testeur et être informé en priorité du lancement.
                  </span>
                </label>
              </div>

              <a 
                href="/confidentialite" 
                className="text-rose-200 text-base underline hover:text-rose-300 transition-colors"
              >
                Politique de confidentialité
              </a>

              <Button type="submit" className="w-full max-w-[349px]">
                Rejoindre maintenant
              </Button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
