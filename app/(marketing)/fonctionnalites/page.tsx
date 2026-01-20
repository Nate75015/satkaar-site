"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { NewsletterSection } from "@/components/sections/newsletter-section";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" as const }
  }
};

// SVG Check icon path
const checkIconPath = "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z";

// Phone mockup images
const scanMockup = "/images/mockups/solution-mockup-1.png";
const classementMockup = "/images/mockups/solution-mockup-2.png";
const organisationMockup = "/images/mockups/solution-mockup-3.png";
const partageMockup = "/images/mockups/hero-mockup.png";
const rappelsMockup = "/images/mockups/newletter-mockup.png";

// User type images - using available images from public/images
const userTypeImages = {
  independants: "/images/independent-worker.jpg",
  freelances: "/images/freelance-worker.jpg",
  etudiants: "/images/student-worker.jpg",
  seniors: "/images/veteran-worker.jpg",
  famille: "/images/happy-family.jpg",
};

function HeroSection() {
  return (
    <section className="bg-[#d5e7fe] pt-12 pb-24">
      <motion.div 
        className="max-w-[945px] mx-auto px-4 flex flex-col items-center gap-6 text-center"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.h1 
          className="text-[39px] md:text-[48px] font-heading font-bold text-[#242424] leading-tight"
          variants={fadeInUp}
        >
          Tout ce qu'il faut pour gérer ses documents.
          <br />
          Rien de superflu.
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl font-heading font-medium text-black max-w-[576px]"
          variants={fadeInUp}
        >
          O.S.O combine simplicité, intelligence et sécurité pour vous faire gagner du temps au quotidien.
        </motion.p>
        <motion.button 
          className="bg-[#2e87fb] text-white px-6 py-4 rounded-2xl text-base font-semibold hover:bg-[#2573d9] transition-colors mt-6"
          variants={fadeInUp}
        >
          Télécharger l'app
        </motion.button>
      </motion.div>
    </section>
  );
}

interface FeatureCardProps {
  number: string;
  title: string;
  description: {
    title: string;
    subtitle: string;
  };
  details: string[];
  image: string;
  imagePosition?: 'left' | 'right';
  bgColor: string;
  accentColor: string;
  iconBgColor: string;
}

function FeatureCard({ 
  number, 
  title, 
  description, 
  details, 
  image, 
  imagePosition = 'right', 
  bgColor, 
  accentColor,
  iconBgColor
}: FeatureCardProps) {
  const content = (
    <motion.div 
      className="flex-1 max-w-[599px]"
      variants={fadeInUp}
    >
      <div className="flex items-center gap-4 mb-11">
        <div 
          className="w-20 h-20 rounded-lg flex items-center justify-center"
          style={{ backgroundColor: iconBgColor }}
        >
          {/* Icon placeholder - can be replaced with actual icons */}
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
            <path d={checkIconPath} fill={accentColor} />
          </svg>
        </div>
        <div>
          <p 
            className="text-2xl font-heading font-medium"
            style={{ color: accentColor }}
          >
            /{number}
          </p>
          <h2 
            className="text-[31px] md:text-[39px] font-heading font-semibold leading-tight"
            style={{ color: accentColor }}
          >
            {title}
          </h2>
        </div>
      </div>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-xl md:text-2xl font-heading font-bold text-[#242424] mb-3">
            {description.title}
          </h3>
          <p className="text-base text-[#474747]">
            {description.subtitle}
          </p>
        </div>
        
        <div className="space-y-4">
          {details.map((detail: string, idx: number) => (
            <motion.div 
              key={idx} 
              className="flex items-start gap-2"
              variants={fadeInUp}
            >
              <svg className="w-6 h-6 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24">
                <path d={checkIconPath} fill={accentColor} />
              </svg>
              <p className="text-base text-gris-80">{detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );

  const visual = (
    <motion.div 
      className="relative shrink-0"
      variants={scaleIn}
    >
      <div className="relative">
        {/* Background shape */}
        <div 
          className="w-[400px] md:w-[525px] h-[350px] md:h-[400px] rounded-3xl opacity-15"
          style={{ backgroundColor: bgColor }}
        />
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          {/* Circle backgrounds */}
          <svg className="absolute w-[300px] md:w-[422px] h-[300px] md:h-[422px]" viewBox="0 0 422 422" fill="none">
            <circle cx="211" cy="211" r="211" fill={bgColor} opacity="0.1" />
            <circle cx="211" cy="211" r="194" fill={bgColor} opacity="0.2" />
            <circle cx="211" cy="211" r="174" fill={bgColor} opacity="0.3" />
          </svg>
          {/* Phone mockup */}
          <div className="relative z-10 w-[200px] md:w-[280px] h-[400px] md:h-[560px]">
            <Image
              src={image}
              alt={title}
              fill
              sizes="(max-width: 768px) 200px, 280px"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <motion.div 
      className="flex flex-col lg:flex-row items-center gap-10 lg:gap-[103px] w-full max-w-[1227px] mx-auto px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
    >
      {imagePosition === 'left' ? (
        <>
          {visual}
          {content}
        </>
      ) : (
        <>
          {content}
          {visual}
        </>
      )}
    </motion.div>
  );
}

function FeaturesSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="space-y-[100px] md:space-y-[150px]">
        {/* Feature 1: Scan & Import */}
        <FeatureCard
          number="01"
          title="Scan & Import"
          description={{
            title: "Scannez ou importez vos documents en quelques secondes",
            subtitle: "Importer un document ne devrait jamais être compliqué."
          }}
          details={[
            "Scan depuis le téléphone",
            "Import depuis les fichiers ou le cloud",
            "Formats simples et courants"
          ]}
          image={scanMockup}
          imagePosition="right"
          bgColor="#81B7FD"
          accentColor="#045DD0"
          iconBgColor="#d5e7fe"
        />

        {/* Feature 2: Classement intelligent */}
        <FeatureCard
          number="02"
          title="Classement intelligent"
          description={{
            title: "O.S.O classe vos documents pour vous",
            subtitle: "Classer est chronophage et source d'erreurs."
          }}
          details={[
            "O.S.O analyse le document, propose un nom et un dossier.",
            "Vous validez, c'est terminé."
          ]}
          image={classementMockup}
          imagePosition="left"
          bgColor="#C0E7F8"
          accentColor="#33B0E7"
          iconBgColor="#eaf7fc"
        />

        {/* Feature 3: Organisation claire */}
        <FeatureCard
          number="03"
          title="Organisation claire & recherche simple"
          description={{
            title: "Retrouvez n'importe quel document, instantanément",
            subtitle: "On perd souvent du temps à chercher un document qu'on possède déjà."
          }}
          details={[
            "Organisation claire",
            "Documents bien identifiés",
            "Accès rapide depuis le mobile"
          ]}
          image={organisationMockup}
          imagePosition="right"
          bgColor="#96E2D5"
          accentColor="#34BFA6"
          iconBgColor="#cbf1ea"
        />

        {/* Feature 4: Partage maîtrisé */}
        <FeatureCard
          number="04"
          title="Partage maîtrisé"
          description={{
            title: "Partagez le bon document, sans erreur",
            subtitle: "Envoyer un document au mauvais format ou à la mauvaise personne est risqué."
          }}
          details={[
            "Partage simple",
            "Documents bien nommés",
            "Contrôle total"
          ]}
          image={partageMockup}
          imagePosition="left"
          bgColor="#F6CCD7"
          accentColor="#D9325E"
          iconBgColor="#f6ccd7"
        />

        {/* Feature 5: Rappels & échéances */}
        <FeatureCard
          number="05"
          title="Rappels & échéances"
          description={{
            title: "Ne ratez plus jamais une échéance importante",
            subtitle: "Dates limites, renouvellements, démarches oubliées."
          }}
          details={[
            "O.S.O repère les échéances et vous rappelle au bon moment."
          ]}
          image={rappelsMockup}
          imagePosition="right"
          bgColor="#81B7FD"
          accentColor="#045DD0"
          iconBgColor="#d5e7fe"
        />
      </div>
    </section>
  );
}

function UserTypesSection() {
  const userTypes = [
    { name: "Indépendants", image: userTypeImages.independants },
    { name: "Freelances", image: userTypeImages.freelances },
    { name: "Etudiants", image: userTypeImages.etudiants },
    { name: "Seniors", image: userTypeImages.seniors },
    { name: "Famille", image: userTypeImages.famille }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <motion.div 
        className="max-w-[1280px] mx-auto px-4 md:px-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.h2 
          className="text-[31px] md:text-[39px] font-heading font-semibold text-center text-black mb-12 md:mb-16"
          variants={fadeInUp}
        >
          Les mêmes fonctionnalités,
          <br />
          adaptées à chaque usage.
        </motion.h2>
        
        <motion.div 
          className="flex flex-wrap items-center justify-center gap-8 md:gap-[60px]"
          variants={staggerContainer}
        >
          {userTypes.map((type, idx) => (
            <motion.div 
              key={idx} 
              className="flex flex-col items-center gap-4 w-[140px] md:w-[180px]"
              variants={scaleIn}
            >
              <div className="w-[140px] h-[140px] md:w-[180px] md:h-[180px] rounded-full overflow-hidden relative bg-gray-100">
                <Image 
                  src={type.image} 
                  alt={type.name} 
                  fill
                  sizes="(max-width: 768px) 140px, 180px"
                  className="object-cover"
                />
              </div>
              <p className="text-base md:text-lg font-heading font-semibold text-gris-60 text-center">
                {type.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default function FonctionnalitesPage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <UserTypesSection />
      <NewsletterSection />
    </>
  );
}
