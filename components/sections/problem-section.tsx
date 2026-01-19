"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Figma assets
const paperworkImage = "https://www.figma.com/api/mcp/asset/901b292a-f7e0-468f-91d2-3f39b0eaf696";
const timeLostImage = "https://www.figma.com/api/mcp/asset/e43e1e24-a6fb-48ca-9703-807a1678529a";
const stressImage = "https://www.figma.com/api/mcp/asset/4e48bdf8-8fd6-4447-bd49-62ef37492fd2";

const problems = [
  {
    title: "Trop de paperasse",
    image: paperworkImage,
    description: "Factures, contrats, assurances, relevés bancaires… Les documents s'accumulent et vous ne savez plus où donner de la tête.",
  },
  {
    title: "Trop de temps perdu",
    image: timeLostImage,
    description: "Chercher un document, le scanner, l'envoyer au bon destinataire. Chaque tâche administrative vous prend des heures précieuses.",
  },
  {
    title: "Trop de stress",
    image: stressImage,
    description: "Ai-je bien classé ce contrat ? Ai-je oublié une échéance ? La charge mentale de la paperasse ne s'arrête jamais.",
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

export function ProblemSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container-oso">
        <motion.div 
          className="flex flex-col items-center gap-16 max-w-[998px] mx-auto"
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
            <h2 className="font-heading font-semibold text-[39px] text-gris-70 leading-tight">
              La paperasse vous pourrit la vie.
              <br />
              Et vous n&apos;êtes pas seul(e).
            </h2>
            <p className="text-lg text-gris-70 max-w-[762px]">
              Factures égarées, contrats introuvables, échéances oubliées… La gestion administrative,
              c&apos;est le cauchemar du quotidien. Et ça ne s&apos;arrange jamais tout seul.
            </p>
          </motion.div>

          {/* Problem Cards */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-[91px]"
            variants={containerVariants}
          >
            {problems.map((problem) => (
              <motion.div
                key={problem.title}
                className="flex flex-col items-center gap-4 w-full max-w-[272px] mx-auto"
                variants={itemVariants}
              >
                <h4 className="font-heading font-bold text-[25px] text-black text-center">
                  {problem.title}
                </h4>
                <div className="relative w-[200px] h-[200px] rounded-oso-l overflow-hidden">
                  <Image
                    src={problem.image}
                    alt={problem.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-base text-gris-60 text-center leading-relaxed">
                  {problem.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div 
            className="flex flex-col items-center gap-1 text-center"
            variants={itemVariants}
          >
            <p className="text-lg text-gris-70">
              <span className="font-bold">Le chiffre qui fait mal :</span>{" "}
              73% des Français déclarent que l&apos;administratif est source d&apos;anxiété au quotidien.
            </p>
            <p className="text-lg text-gris-70">
              Mais si tout pouvait être plus{" "}
              <span className="font-bold">automatisé, sécurisé et simple</span> ?
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
