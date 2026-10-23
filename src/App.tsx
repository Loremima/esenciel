import { Component, useEffect, type ReactNode } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MusicPlayer from './components/MusicPlayer';
import { Button } from './components/ui';
import HomePage from './pages/HomePage';
import StructuresPage from './pages/StructuresPage';
import OffreStructurePage from './pages/OffreStructurePage';
import ConferencesPage from './pages/ConferencesPage';
import ParticuliersPage from './pages/ParticuliersPage';
import OffreParticulierPage from './pages/OffreParticulierPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import { CgvPage, ConfidentialitePage, MentionsLegalesPage } from './pages/LegalPages';
import NotFoundPage from './pages/NotFoundPage';
import { conferences, particuliers, programmes } from './content/offres';

function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView();
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
    }
  }, [pathname, hash]);
  return null;
}

class ErrorBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    if (!this.state.failed) return this.props.children;
    return (
      <section className="container-site py-24">
        <h1 className="h-section">Cette page n’a pas pu s’afficher.</h1>
        <p className="lead mt-4">Rechargez la page, ou revenez à l’accueil.</p>
        <div className="mt-8">
          <Button href="/">Retour à l’accueil</Button>
        </div>
      </section>
    );
  }
}

export default function App() {
  return (
    <>
      <ScrollManager />
      <Header />
      <main id="contenu">
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/structures" element={<StructuresPage />} />
            {programmes.map((o) => (
              <Route key={o.path} path={o.path} element={<OffreStructurePage offre={o} />} />
            ))}
            <Route path="/conferences" element={<ConferencesPage />} />
            {conferences.map((o) => (
              <Route key={o.path} path={o.path} element={<OffreStructurePage offre={o} />} />
            ))}
            <Route path="/particuliers" element={<ParticuliersPage />} />
            {particuliers.map((o) => (
              <Route key={o.path} path={o.path} element={<OffreParticulierPage offre={o} />} />
            ))}
            <Route path="/qui-suis-je" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/mentions-legales" element={<MentionsLegalesPage />} />
            <Route path="/confidentialite" element={<ConfidentialitePage />} />
            <Route path="/cgv" element={<CgvPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </ErrorBoundary>
      </main>
      <Footer />
      <MusicPlayer />
    </>
  );
}
