import { Button, Section } from '../components/ui';
import { Seo } from '../lib/head';

export default function NotFoundPage() {
  return (
    <>
      <Seo title="Page introuvable | EsenCiel" description="Cette page n’existe pas ou a été déplacée." path="/404" noindex />
      <Section>
        <div className="mx-auto max-w-2xl py-10 text-center">
          <p className="eyebrow">Erreur 404</p>
          <h1 className="h-display mt-4">Cette page s’est perdue en chemin</h1>
          <p className="lead mt-6">Elle a peut-être changé d’adresse avec la nouvelle version du site.</p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Button to="/" arrow>Retour à l’accueil</Button>
            <Button to="/structures" variant="secondary">Structures & financeurs</Button>
            <Button to="/particuliers" variant="secondary">Particuliers</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
