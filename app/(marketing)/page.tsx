import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { AppStoreBadges } from "@/components/common/app-store-badges";

export default function HomePage() {
  return (
    <>
      {/* Hero Section - Placeholder */}
      <Section className="bg-rose-10/50 min-h-[650px] relative overflow-hidden">
        <div className="flex flex-col gap-8 max-w-[627px]">
          <h1 className="text-gris-70">
            La gestion de vos documents, sans stress.
          </h1>
          <p className="text-[31px] font-heading text-gris-70">
            Fini les galères des papiers. O.S.O importe, classe et sécurise
            automatiquement tous vos documents administratifs.
          </p>
          <AppStoreBadges />
        </div>
        
        {/* Decorative elements will be added later */}
        <div className="absolute right-[calc(50%-400px)] top-[178px] w-[474px] h-[458px] bg-rose-300 rounded-[217.5px] -z-10" />
      </Section>

      {/* Problem Section - Placeholder */}
      <Section>
        <div className="flex flex-col items-center gap-16 max-w-[998px] mx-auto">
          <div className="flex flex-col items-center gap-6 text-center">
            <h2 className="text-gris-70">
              La paperasse vous pourrit la vie.
              <br />
              Et vous n&apos;êtes pas seul(e).
            </h2>
            <p className="text-lg text-gris-70 max-w-[762px]">
              Factures égarées, contrats introuvables, échéances oubliées… La gestion administrative,
              c&apos;est le cauchemar du quotidien. Et ça ne s&apos;arrange jamais tout seul.
            </p>
          </div>
          
          {/* Problem cards will be added later */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[91px]">
            <div className="flex flex-col items-center gap-4 w-[272px]">
              <h4 className="text-black text-center">Trop de paperasse</h4>
              <div className="w-[200px] h-[200px] rounded-oso-l bg-gris-20" />
              <p className="text-base text-gris-60 text-center">
                Factures, contrats, assurances, relevés bancaires… Les documents s&apos;accumulent 
                et vous ne savez plus où donner de la tête.
              </p>
            </div>
            <div className="flex flex-col items-center gap-4 w-[272px]">
              <h4 className="text-black text-center">Trop de temps perdu</h4>
              <div className="w-[200px] h-[200px] rounded-oso-l bg-gris-20" />
              <p className="text-base text-gris-60 text-center">
                Chercher un document, le scanner, l&apos;envoyer au bon destinataire. 
                Chaque tâche administrative vous prend des heures précieuses.
              </p>
            </div>
            <div className="flex flex-col items-center gap-4 w-[272px]">
              <h4 className="text-black text-center">Trop de stress</h4>
              <div className="w-[200px] h-[200px] rounded-oso-l bg-gris-20" />
              <p className="text-base text-gris-60 text-center">
                Ai-je bien classé ce contrat ? Ai-je oublié une échéance ? 
                La charge mentale de la paperasse ne s&apos;arrête jamais.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Solution Section - Placeholder */}
      <Section>
        <div className="flex flex-col items-center gap-14">
          <h2 className="text-gris-70 text-center">
            Avec O.S.O, tout change.
          </h2>
          
          {/* Solution content will be added later */}
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="flex flex-col gap-6 max-w-[335px]">
              <div className="flex flex-col gap-4">
                <p className="text-2xl font-heading text-gris-60">
                  Tout est <span className="text-rose-500 font-semibold">clair</span>.
                </p>
                <p className="text-base text-gris-60">
                  Vos documents sont organisés automatiquement. Plus besoin de réfléchir à où ranger quoi.
                  Vous savez toujours où sont vos documents. Et surtout, vous les retrouvez en 3 secondes.
                </p>
              </div>
              
              <div className="h-px bg-gris-40 w-[305px]" />
              
              <div className="flex flex-col gap-4">
                <p className="text-2xl font-heading text-gris-60">
                  Tout est <span className="text-rose-300 font-semibold">simple</span>.
                </p>
                <p className="text-base text-gris-60">
                  Avec O.S.O : Un tap pour scanner. L&apos;IA fait le reste. Validation en un clic.
                  Conçu pour ceux qui n&apos;ont pas de temps à perdre.
                </p>
              </div>
              
              <div className="h-px bg-gris-40 w-[305px]" />
              
              <div className="flex flex-col gap-4">
                <p className="text-2xl font-heading text-gris-60">
                  Et surtout : <span className="text-rose-300 font-semibold">On S&apos;en Occupe</span>.
                </p>
                <p className="text-base text-gris-60">
                  Avec O.S.O : Elsa détecte les échéances, vous rappelle ce qui compte, vous guide étape par étape.
                  Vous gardez le contrôle. Mais vous n&apos;êtes plus seul(e) à gérer.
                </p>
              </div>
            </div>
            
            {/* Phone mockups placeholder */}
            <div className="bg-rose-900 rounded-oso-m p-10 w-full max-w-[847px] h-[600px] flex items-center justify-center">
              <p className="text-white text-center">Phone mockups coming soon</p>
            </div>
          </div>
        </div>
      </Section>

      {/* How It Works Section - Placeholder */}
      <Section className="bg-vert-100 rounded-oso-m mx-4 lg:mx-8">
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-col items-center gap-6 text-center">
            <h2 className="text-gris-70">Comment ça marche?</h2>
            <p className="text-base text-black">
              Trois étapes. Zéro prise de tête.
            </p>
          </div>
          
          {/* Process steps will be added later */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
            <div className="bg-white rounded-oso-s p-4">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-[46px] h-[46px] bg-vert-400 rounded-oso-s" />
                <span className="font-bold text-gris-70">Scan</span>
              </div>
              <h6 className="text-gris-60 font-semibold mb-4">Une photo. C&apos;est fait.</h6>
              <p className="text-base text-gris-60">
                Factures, reçus, contrats : <strong>O.S.O scanne en 3 secondes</strong>, 
                corrige automatiquement et livre un document net, prêt à l&apos;usage.
              </p>
            </div>
            
            <div className="bg-jaune-10 rounded-oso-s p-4">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-[46px] h-[46px] bg-jaune-40 rounded-oso-s" />
                <span className="font-bold text-gris-70">Tri</span>
              </div>
              <h6 className="text-gris-60 font-semibold mb-4">Tout se classe tout seul.</h6>
              <p className="text-base text-gris-60">
                OSO comprend vos documents, extrait l&apos;essentiel et les range automatiquement.
                <br /><strong>Vous validez en un tap</strong>.
              </p>
            </div>
            
            <div className="bg-bleu-light-100 rounded-oso-s p-4">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-[46px] h-[46px] bg-bleu-light-300 rounded-oso-s" />
                <span className="font-bold text-gris-70">Partage</span>
              </div>
              <h6 className="text-gris-60 font-semibold mb-4">Envoyez. Au bon moment.</h6>
              <p className="text-base text-gris-60">
                Le bon document, au bon format, au bon destinataire.
                <br />Mail, SMS ou cloud — <strong>en un seul tap.</strong>
              </p>
            </div>
          </div>
          
          <p className="text-lg text-gris-70 text-center max-w-[998px]">
            <strong>Et voilà. Votre administratif est gérée.</strong>
            <br />
            Vos documents sont organisés, suivis et prêts quand vous en avez besoin.
          </p>
          
          <Button>
            Commencer maintenant — C&apos;est gratuit
          </Button>
        </div>
      </Section>

      {/* CTA Section - Placeholder */}
      <Section className="bg-gris-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-[150px]">
          {/* Phone mockup placeholder */}
          <div className="w-[305px] h-[660px] rounded-[37px] bg-gris-20" />
          
          {/* Form placeholder */}
          <div className="bg-white rounded-oso-s p-6 flex flex-col items-center gap-6 max-w-[548px]">
            <h2 className="text-gris-70 text-center">
              Dites adieu au cauchemar administratif en avant-première
            </h2>
            
            <div className="flex flex-col gap-4 w-full max-w-[500px]">
              <input
                type="text"
                placeholder="Nom et prénom"
                className="h-[53px] px-4 py-[15px] border border-gris-20 rounded-oso-s text-base text-gris-70 placeholder:text-gris-40"
              />
              <input
                type="email"
                placeholder="Adresse e-mail"
                className="h-[53px] px-4 py-[15px] border border-gris-20 rounded-oso-s text-base text-gris-70 placeholder:text-gris-40"
              />
              <input
                type="tel"
                placeholder="Numéro de téléphone (facultatif)"
                className="h-[53px] px-4 py-[15px] border border-gris-20 rounded-oso-s text-base text-gris-70 placeholder:text-gris-40"
              />
              <select className="h-[54px] px-4 py-[15px] border border-gris-20 rounded-oso-s text-base text-gris-40">
                <option>Profil utilisateur</option>
              </select>
              
              <label className="flex items-start gap-2">
                <input type="checkbox" className="mt-1" />
                <span className="text-base text-black">
                  Je souhaite devenir testeur et être informé en priorité du lancement.
                </span>
              </label>
            </div>
            
            <a href="#" className="text-rose-200 text-base underline">
              Politique de confidentialité
            </a>
            
            <Button className="w-[349px]">
              Rejoindre maintenant
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
