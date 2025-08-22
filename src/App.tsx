
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import AccompagnementsIndividuelsPage from './pages/AccompagnementsIndividuelsPage';
import AccompagnementsGroupePage from './pages/AccompagnementsGroupePage';
import ProgrammesMBSRPage from './pages/ProgrammesMBSRPage';
import AutresFormatsPage from './pages/AutresFormatsPage';
import ProgramsPage from './pages/ProgramsPage';
import SanteQualiteVieDetailsPage from './pages/SanteQualiteVieDetailsPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import InfosPratiquesPage from './pages/InfosPratiquesPage';
import ScrollToTop from './components/ScrollToTop';
import './styles/globals.css';

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/qui-suis-je" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/accompagnements-individuels" element={<AccompagnementsIndividuelsPage />} />
            <Route path="/accompagnements-groupe" element={<AccompagnementsGroupePage />} />
            <Route path="/programmes-mbsr" element={<ProgrammesMBSRPage />} />
            <Route path="/interventions-entreprises" element={<AutresFormatsPage />} />
            <Route path="/sante-qualite-vie" element={<ServiceDetailPage service="sante" />} />
            <Route path="/sante-qualite-vie-details" element={<SanteQualiteVieDetailsPage />} />
            <Route path="/pleine-conscience" element={<ServiceDetailPage service="mindfulness" />} />
            <Route path="/jeu-du-tao" element={<ServiceDetailPage service="tao" />} />
            <Route path="/programmes-mbsr-mbct" element={<ProgramsPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/infos-pratiques" element={<InfosPratiquesPage />} />
            <Route path="/contact-reservation" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;