import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { PageHero, Section } from '../components/ui';
import { LEGAL, SITE } from '../content/site';
import { Seo, breadcrumbLd } from '../lib/head';

function Todo({ value, hint }: { value: string; hint: string }) {
  return value ? <>{value}</> : <mark className="rounded bg-gold-light/50 px-1.5 text-ink">à compléter : {hint}</mark>;
}

function LegalLayout({ title, path, description, children }: { title: string; path: string; description: string; children: ReactNode }) {
  const crumbs = [
    { name: 'Accueil', path: '/' },
    { name: title, path },
  ];
  return (
    <>
      <Seo title={`${title} | EsenCiel`} description={description} path={path} jsonLd={[breadcrumbLd(crumbs)]} />
      <PageHero crumbs={crumbs} title={title} lead={`Dernière mise à jour : ${LEGAL.updated}`} />
      <Section tone="white" className="!pt-10">
        <div className="mx-auto max-w-3xl space-y-10 text-ink-soft [&_a]:underline [&_a]:decoration-gold [&_a]:underline-offset-4 [&_h2]:mb-3 [&_h2]:font-heading [&_h2]:text-2xl [&_h2]:text-ink [&_li]:ml-5 [&_li]:list-disc [&_p+p]:mt-3 [&_ul]:mt-3 [&_ul]:space-y-1.5">
          {children}
        </div>
      </Section>
    </>
  );
}

export function MentionsLegalesPage() {
  return (
    <LegalLayout title="Mentions légales" path="/mentions-legales" description="Mentions légales du site esenciel.net, édité par Véronique Carrié (EsenCiel).">
      <section>
        <h2>Éditrice du site</h2>
        <p>
          {SITE.owner}, {LEGAL.status}, sous le nom commercial EsenCiel.
          <br />
          SIRET : <Todo value={LEGAL.siret} hint="numéro SIRET" />
          <br />
          Adresse : <Todo value={LEGAL.address} hint="adresse de l’entreprise (une adresse de domiciliation convient)" />
          <br />
          Téléphone : <a href={SITE.phoneHref}>{SITE.phone}</a> · E-mail : <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          <br />
          {LEGAL.vat}.
        </p>
        <p>Directrice de la publication : {SITE.owner}.</p>
      </section>
      <section>
        <h2>Hébergement</h2>
        <p>
          {LEGAL.host.name}, {LEGAL.host.address}. <a href={LEGAL.host.url} target="_blank" rel="noopener noreferrer">{LEGAL.host.url.replace('https://', '')}</a>
        </p>
      </section>
      <section>
        <h2>Activité</h2>
        <p>
          EsenCiel propose des actions de prévention et d’éducation à la santé : conférences, ateliers, cycles de pleine conscience et accompagnements individuels. Ces interventions ne constituent ni des consultations médicales ou psychologiques, ni une psychothérapie, et ne remplacent pas un suivi par un professionnel de santé.
        </p>
      </section>
      <section>
        <h2>Propriété intellectuelle</h2>
        <p>
          Les textes, le logo et la mise en page de ce site appartiennent à {SITE.owner}. Toute reproduction sans autorisation écrite est interdite. Les noms de programmes cités (MBSR, MBCT, MBCAS, Neo Silver, Jeu du Tao) appartiennent à leurs auteurs respectifs.
        </p>
      </section>
      <section>
        <h2>Données personnelles</h2>
        <p>
          Le traitement des informations transmises par le formulaire de contact est décrit dans la <Link to="/confidentialite">politique de confidentialité</Link>. Le site n’utilise aucun cookie de mesure d’audience ni de publicité.
        </p>
      </section>
    </LegalLayout>
  );
}

export function ConfidentialitePage() {
  return (
    <LegalLayout title="Politique de confidentialité" path="/confidentialite" description="Comment EsenCiel traite les données personnelles transmises par le formulaire de contact et la réservation en ligne.">
      <section>
        <h2>Responsable du traitement</h2>
        <p>{SITE.owner} (EsenCiel), joignable à <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.</p>
      </section>
      <section>
        <h2>Données collectées et finalité</h2>
        <p>Le formulaire de contact recueille votre nom, votre e-mail, votre téléphone si vous le donnez, votre structure le cas échéant et votre message. Ces données servent uniquement à répondre à votre demande et, si vous le souhaitez, à préparer un devis ou une inscription.</p>
        <p>Merci de ne pas indiquer d’informations détaillées sur votre santé dans le formulaire.</p>
      </section>
      <section>
        <h2>Base légale</h2>
        <p>Le traitement repose sur votre consentement, donné en cochant la case du formulaire, et sur les mesures précontractuelles prises à votre demande (devis, inscription).</p>
      </section>
      <section>
        <h2>Durée de conservation</h2>
        <p>Les messages sont conservés trois ans après notre dernier échange, puis supprimés. Les documents liés à une prestation (devis, factures) sont conservés pendant la durée imposée par la loi.</p>
      </section>
      <section>
        <h2>Destinataires et sous-traitants</h2>
        <ul>
          <li>{SITE.owner}, seule destinataire de vos messages.</li>
          <li>{LEGAL.host.name} héberge le site et reçoit les messages du formulaire. Ses serveurs peuvent être situés hors de l’Union européenne ; les transferts sont encadrés par les clauses contractuelles types de la Commission européenne.</li>
          <li>Setmore, service de réservation en ligne, si vous réservez une séance depuis le site. Sa propre politique de confidentialité s’applique alors.</li>
        </ul>
        <p>Vos données ne sont ni vendues ni utilisées à des fins publicitaires.</p>
      </section>
      <section>
        <h2>Cookies</h2>
        <p>Le site n’utilise aucun cookie de mesure d’audience, de publicité ou de réseau social. Les polices de caractères sont hébergées sur le site lui-même. La musique d’ambiance n’est téléchargée que si vous la lancez.</p>
      </section>
      <section>
        <h2>Vos droits</h2>
        <p>
          Vous pouvez demander l’accès, la rectification, l’effacement ou la limitation de vos données, et retirer votre consentement à tout moment, en écrivant à <a href={`mailto:${SITE.email}`}>{SITE.email}</a>. Si vous estimez que vos droits ne sont pas respectés, vous pouvez saisir la CNIL (<a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">cnil.fr</a>).
        </p>
      </section>
    </LegalLayout>
  );
}

export function CgvPage() {
  return (
    <LegalLayout title="Conditions générales de vente" path="/cgv" description="Conditions générales de vente des prestations EsenCiel : séances individuelles, cycles, conférences et ateliers pour les structures.">
      <section>
        <h2>Objet</h2>
        <p>
          Les présentes conditions s’appliquent aux prestations proposées par {SITE.owner} sous le nom EsenCiel : séances individuelles, cycles en groupe, ateliers, conférences et interventions pour les structures. Ces prestations relèvent de la prévention et de l’éducation à la santé ; elles ne constituent pas des soins.
        </p>
      </section>
      <section>
        <h2>Prix</h2>
        <p>
          Les tarifs des prestations pour les particuliers sont indiqués sur le site, en euros. {LEGAL.vat}. Les interventions pour les structures font l’objet d’un devis préalable, qui précise le contenu, le nombre de séances, le prix et les frais de déplacement.
        </p>
      </section>
      <section>
        <h2>Particuliers : réservation et paiement</h2>
        <ul>
          <li>Les séances et les pré-inscriptions aux cycles se réservent en ligne (Setmore), par téléphone ou par e-mail.</li>
          <li>L’inscription à un cycle est confirmée lorsque le groupe est constitué ; le règlement est demandé avant la première séance et peut être échelonné sur demande.</li>
          <li>Les séances individuelles se règlent à la fin de chaque séance.</li>
        </ul>
      </section>
      <section>
        <h2>Particuliers : annulation et rétractation</h2>
        <ul>
          <li>Une séance individuelle peut être annulée ou reportée sans frais jusqu’à 48 heures avant. Passé ce délai, elle est due, sauf cas de force majeure.</li>
          <li>Pour une réservation faite à distance, vous disposez d’un délai de rétractation de 14 jours. Si vous demandez que la prestation commence avant la fin de ce délai, les séances déjà suivies restent dues.</li>
          <li>Une séance de cycle manquée n’est pas remboursée, mais les supports vous sont transmis.</li>
          <li>Si un cycle est annulé faute de participants, les sommes versées sont intégralement remboursées.</li>
        </ul>
      </section>
      <section>
        <h2>Structures</h2>
        <ul>
          <li>La commande est ferme à la signature du devis ou de la convention d’intervention.</li>
          <li>La facture est émise à l’issue de l’intervention, ou à chaque étape pour un cycle, et se règle à 30 jours.</li>
          <li>En cas d’annulation par la structure moins de 15 jours avant la date prévue, 50 % du montant de la séance concernée est dû, sauf report convenu ensemble.</li>
          <li>La structure fournit la salle, le matériel convenu (vidéoprojecteur) et la mobilisation du public.</li>
        </ul>
      </section>
      <section>
        <h2>Responsabilité</h2>
        <p>
          Les pratiques proposées sont progressives et adaptées à chacun. Chaque participant reste responsable de sa santé et signale toute contre-indication. Les cycles ne remplacent pas un traitement ou un suivi médical en cours.
        </p>
      </section>
      <section>
        <h2>Médiation et litiges</h2>
        <p>
          En cas de désaccord, contactez d’abord {SITE.owner} pour trouver une solution amiable. Pour les particuliers, le recours gratuit à un médiateur de la consommation est possible : <Todo value={LEGAL.mediator} hint="nom et site du médiateur de la consommation" />. Les présentes conditions sont soumises au droit français.
        </p>
      </section>
    </LegalLayout>
  );
}
