import { createContext, useContext, useEffect, type ReactNode } from 'react';
import { SITE } from '../content/site';

// Gestion du <head> sans dépendance : au prérendu, la page écrit ses balises
// dans un collecteur ; dans le navigateur, elles sont mises à jour à chaque
// changement de page.

export type HeadData = {
  title: string;
  description: string;
  path: string;
  image?: string;
  jsonLd?: object[];
  noindex?: boolean;
};

type Collector = { data?: HeadData };

const HeadContext = createContext<Collector | null>(null);

export function HeadProvider({ collector, children }: { collector?: Collector; children: ReactNode }) {
  return <HeadContext.Provider value={collector ?? null}>{children}</HeadContext.Provider>;
}

export const absoluteUrl = (path: string) => SITE.url + (path === '/' ? '/' : path);

function baseGraph() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': `${SITE.url}/#veronique`,
        name: 'Véronique Carrié',
        jobTitle: 'Instructrice certifiée MBSR, MBCT et MBCAS, formatrice en éducation à la santé',
        description:
          "Formée en psychologie clinique (Master 1), spécialisée en neuropsychologie du vieillissement. Intervient auprès des structures et des particuliers dans l'Hérault et l'Aveyron.",
        knowsAbout: [
          'Avancée en âge',
          'Prévention du vieillissement cérébral',
          'Compétences psychosociales',
          'Qualité de vie au travail',
          'Soutien aux aidants',
          'Pleine conscience (MBSR, MBCT, MBCAS)',
          'Éducation à la santé',
        ],
        hasCredential: [
          { '@type': 'EducationalOccupationalCredential', credentialCategory: 'degree', name: 'Master 1 de psychologie clinique, spécialisation neuropsychologie du vieillissement' },
          { '@type': 'EducationalOccupationalCredential', credentialCategory: 'certificate', name: 'Instructrice certifiée MBSR, MBCT et MBCAS' },
          { '@type': 'EducationalOccupationalCredential', credentialCategory: 'certificate', name: 'Formatrice en éducation à la santé' },
        ],
        worksFor: { '@id': `${SITE.url}/#esenciel` },
        sameAs: [SITE.linkedin],
        image: `${SITE.url}/images/veronique.webp`,
      },
      {
        '@type': 'ProfessionalService',
        '@id': `${SITE.url}/#esenciel`,
        name: 'EsenCiel',
        slogan: SITE.tagline,
        description:
          "Conférences, ateliers et cycles de prévention pour piloter son cerveau face aux changements de la vie, spécialisés dans l'avancée en âge : seniors, aidants et professionnels qui les accompagnent.",
        url: SITE.url,
        logo: `${SITE.url}/icon-512.png`,
        image: `${SITE.url}${SITE.ogImage}`,
        telephone: '+33625137250',
        email: SITE.email,
        founder: { '@id': `${SITE.url}/#veronique` },
        areaServed: [
          { '@type': 'AdministrativeArea', name: 'Hérault' },
          { '@type': 'AdministrativeArea', name: 'Aveyron' },
        ],
        priceRange: '€€',
      },
    ],
  };
}

export function headToHtml(d: HeadData): string {
  const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
  const url = absoluteUrl(d.path);
  const image = SITE.url + (d.image ?? SITE.ogImage);
  const ld = [baseGraph(), ...(d.jsonLd ?? [])]
    .map((o) => `<script type="application/ld+json">${JSON.stringify(o).replace(/</g, '\\u003c')}</script>`)
    .join('\n    ');
  return [
    `<title>${esc(d.title)}</title>`,
    `<meta name="description" content="${esc(d.description)}" />`,
    d.noindex ? '<meta name="robots" content="noindex" />' : `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:locale" content="fr_FR" />`,
    `<meta property="og:site_name" content="EsenCiel, Véronique Carrié" />`,
    `<meta property="og:title" content="${esc(d.title)}" />`,
    `<meta property="og:description" content="${esc(d.description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${image}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    ld,
  ].join('\n    ');
}

function setMeta(selector: string, attr: string, key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

export function Seo(props: HeadData) {
  const collector = useContext(HeadContext);
  if (collector) collector.data = props;

  const { title, description, path, noindex, jsonLd } = props;
  useEffect(() => {
    document.title = title;
    setMeta('meta[name="description"]', 'name', 'description', description);
    setMeta('meta[property="og:title"]', 'property', 'og:title', title);
    setMeta('meta[property="og:description"]', 'property', 'og:description', description);
    setMeta('meta[property="og:url"]', 'property', 'og:url', absoluteUrl(path));
    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!noindex) {
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.rel = 'canonical';
        document.head.appendChild(canonical);
      }
      canonical.href = absoluteUrl(path);
    } else {
      canonical?.remove();
    }
    // Les données structurées propres à la page sont remplacées à chaque navigation.
    document.head.querySelectorAll('script[type="application/ld+json"]').forEach((s, i) => {
      if (i > 0) s.remove();
    });
    (jsonLd ?? []).forEach((o) => {
      const s = document.createElement('script');
      s.type = 'application/ld+json';
      s.textContent = JSON.stringify(o);
      document.head.appendChild(s);
    });
  }, [title, description, path, noindex, jsonLd]);

  return null;
}

export const breadcrumbLd = (items: { name: string; path: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((it, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: it.name,
    item: absoluteUrl(it.path),
  })),
});

export const faqLd = (faq: { q: string; a: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
});

export const serviceLd = (o: { name: string; description: string; path: string; audience?: string; price?: string }) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: o.name,
  description: o.description,
  url: absoluteUrl(o.path),
  provider: { '@id': `${SITE.url}/#esenciel` },
  areaServed: ['Hérault', 'Aveyron'],
  ...(o.audience ? { audience: { '@type': 'Audience', audienceType: o.audience } } : {}),
  ...(o.price ? { offers: { '@type': 'Offer', priceCurrency: 'EUR', description: o.price } } : {}),
});
