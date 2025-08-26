import React from 'react';
import { Link } from 'react-router-dom';
import { CalendarDays } from 'lucide-react';
import { otherFormats } from './servicesData';
import ServiceCard from '../components/ServiceCard';
import VideoCTA from '../components/VideoCTA';

const EntreprisesCollectivitesPage: React.FC = () => {
    return (
        <div className="services-page">
            <section className="hero-services">
                <video autoPlay muted loop playsInline className="hero-video">
                    <source src="/background.mp4" type="video/mp4" />
                </video>
                <div className="hero-overlay" aria-hidden="true"></div>
                <div className="hero-content">
                    <h1>Entreprises & collectivités</h1>
                </div>
            </section>

            <section id="autres" className="section services-section">
                <div className="container">
                    <div className="section-header">
                        <h1>Offres pour entreprises & collectivités</h1>
                        <p>Ateliers éducation à la santé et conférences pour entreprises et collectivités</p>
                    </div>
                    <div className="services-grid">
                        {otherFormats.map(service => (
                            <ServiceCard key={service.id} service={service} isHighlight={service.highlight} />
                        ))}
                    </div>
                </div>
            </section>

            <VideoCTA
                title="Prêt(e) à transformer votre quotidien ?"
                subtitle="Contactez-moi pour discuter de vos besoins et concevoir des interventions sur mesure."
                buttonText="Demander un devis"
                buttonLink="/contact-reservation"
            />
        </div>
    );
};

export default EntreprisesCollectivitesPage;
