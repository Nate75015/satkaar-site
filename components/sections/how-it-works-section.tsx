"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Scan, FolderTree, Share2 } from "lucide-react";

const steps = [
  {
    id: "scan",
    icon: Scan,
    title: "Scan",
    subtitle: "Une photo. C'est fait.",
    description: "Factures, reçus, contrats :",
    highlight: "O.S.O scanne en 3 secondes",
    descriptionEnd: ", corrige automatiquement et livre un document net, prêt à l'usage.",
    bgColor: "bg-white",
    iconBgColor: "bg-vert-400",
  },
  {
    id: "tri",
    icon: FolderTree,
    title: "Tri",
    subtitle: "Tout se classe tout seul.",
    description: "OSO comprend vos documents, extrait l'essentiel et les range automatiquement.",
    highlight: "Vous validez en un tap",
    descriptionEnd: ".",
    bgColor: "bg-jaune-10",
    iconBgColor: "bg-jaune-40",
  },
  {
    id: "partage",
    icon: Share2,
    title: "Partage",
    subtitle: "Envoyez. Au bon moment.",
    description: "Le bon document, au bon format, au bon destinataire. Mail, SMS ou cloud —",
    highlight: "en un seul tap.",
    descriptionEnd: "",
    bgColor: "bg-bleu-light-100",
    iconBgColor: "bg-bleu-light-300",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0, 0, 0.2, 1] as const },
  },
};

export function HowItWorksSection() {
  return (
    <section className="py-8 lg:py-12 px-4 lg:px-8">
      <div className="bg-vert-100 rounded-oso-m py-12 lg:py-16">
        <div className="container-oso">
          <motion.div
            className="flex flex-col items-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            {/* Header */}
            <motion.div 
              className="flex flex-col items-center gap-6 text-center"
              variants={itemVariants}
            >
              <h2 className="font-heading font-semibold text-[39px] text-gris-70">
                Comment ça marche?
              </h2>
              <p className="text-base text-black">
                Trois étapes. Zéro prise de tête.
              </p>
            </motion.div>

            {/* Steps Grid */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full"
              variants={containerVariants}
            >
              {steps.map((step) => {
                const IconComponent = step.icon;
                return (
                  <motion.div
                    key={step.id}
                    className={`${step.bgColor} rounded-oso-s p-4`}
                    variants={itemVariants}
                  >
                    <div className="flex flex-col gap-4">
                      {/* Icon and Title */}
                      <div className="flex items-center gap-2">
                        <div className={`${step.iconBgColor} w-[46px] h-[46px] rounded-oso-s flex items-center justify-center`}>
                          <IconComponent className="w-6 h-6 text-gris-70" />
                        </div>
                        <span className="font-bold text-base text-gris-70">
                          {step.title}
                        </span>
                      </div>

                      {/* Subtitle */}
                      <h6 className="font-heading font-semibold text-lg text-gris-60">
                        {step.subtitle}
                      </h6>

                      {/* Description */}
                      <p className="text-base text-gris-60">
                        {step.description}{" "}
                        <strong>{step.highlight}</strong>
                        {step.descriptionEnd}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Bottom text */}
            <motion.p 
              className="text-lg text-gris-70 text-center max-w-[998px]"
              variants={itemVariants}
            >
              <strong>Et voilà. Votre administratif est gérée.</strong>
              <br />
              Vos documents sont organisés, suivis et prêts quand vous en avez besoin.
            </motion.p>

            {/* CTA Button */}
            <motion.div variants={itemVariants}>
              <Button>
                Commencer maintenant — C&apos;est gratuit
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
