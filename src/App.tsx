
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import AccompagnementsIndividuelsPage from './pages/AccompagnementsIndividuelsPage';
import AccompagnementsGroupePage from './pages/AccompagnementsGroupePage';
import ProgrammesPleineConsciencePage from './pages/ProgrammesPleineConsciencePage';
import EntreprisesCollectivitesPage from './pages/EntreprisesCollectivitesPage';
import SanteQualiteVieDetailsPage from './pages/SanteQualiteVieDetailsPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import InfosPratiquesPage from './pages/InfosPratiquesPage';
import PleineConscienceDetailsPage from './pages/PleineConscienceDetailsPage';
import JeuDuTaoDetailsPage from './pages/JeuDuTaoDetailsPage';
import ProgrammeMBSRDetailsPage from './pages/ProgrammeMBSRDetailsPage';
import ProgrammeMBCTDetailsPage from './pages/ProgrammeMBCTDetailsPage';
import ProgrammeMBCASDetailsPage from './pages/ProgrammeMBCASDetailsPage';
import AteliersEducationSanteDetailsPage from './pages/AteliersEducationSanteDetailsPage';
import ConferencesEvenementsDetailsPage from './pages/ConferencesEvenementsDetailsPage';
import ScrollToTop from './components/ScrollToTop';
import './styles/globals.css';
import MusicPlayer from './components/MusicPlayer';

function App() {
  return (
    <Router>
      <div className="App">
        <audio id="site-bgm" src="/background_music.mp3" loop preload="auto" />
        {/* Audio maintenant instancié dans HeroSection pour démarrer depuis la home */}
        <ScrollToTop />
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/qui-suis-je" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/accompagnements-individuels" element={<AccompagnementsIndividuelsPage />} />
            <Route path="/accompagnements-groupe" element={<AccompagnementsGroupePage />} />
            <Route path="/programmes-pleine-conscience" element={<ProgrammesPleineConsciencePage />} />
            <Route path="/programmes-mbsr" element={<ProgrammeMBSRDetailsPage />} />
            <Route path="/programmes-mbct" element={<ProgrammeMBCTDetailsPage />} />
            <Route path="/programme-mbcas" element={<ProgrammeMBCASDetailsPage />} />
            <Route path="/sante-qualite-vie" element={<ServiceDetailPage service="sante" />} />
            <Route path="/sante-qualite-vie-details" element={<SanteQualiteVieDetailsPage />} />
            <Route path="/pleine-conscience" element={<PleineConscienceDetailsPage />} />
            <Route path="/jeu-du-tao" element={<JeuDuTaoDetailsPage />} />
            <Route path="/interventions-entreprises" element={<EntreprisesCollectivitesPage />} />
            <Route path="/ateliers-education-sante" element={<AteliersEducationSanteDetailsPage />} />
            <Route path="/conferences-evenements" element={<ConferencesEvenementsDetailsPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/infos-pratiques" element={<InfosPratiquesPage />} />
            <Route path="/contact-reservation" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
        <MusicPlayer />
      </div>
    </Router>
  );
}

export default App;