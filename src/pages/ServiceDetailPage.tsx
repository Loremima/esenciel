import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight, Clock, Users, Euro, CheckCircle, Phone, Calendar } from 'lucide-react';
import { individualServices, groupServices, collectivePrograms, otherFormats } from './servicesData';

const services = [...individualServices, ...groupServices, ...collectivePrograms, ...otherFormats];

const ServiceDetailPage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const currentService = services.find(s => s.slug === slug);

    if (!currentService) {
        return <div>Service non trouvé</div>;
    }

    return (
        <div className="service-detail-page">
            <section className="service-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <h1>{currentService.title}</h1>
                            <p>{currentService.description}</p>

                            <div className="practical-info">
                                <h4>Informations pratiques</h4>
                                <PracticalInfoCard
                                    duration={currentService.duration}
                                    format={Array.isArray(currentService.modalities) ? currentService.modalities.join(', ') : currentService.modalities}
                                    pricingNote={currentService.price}
                                >
                                    <div className="cta-buttons">
                                        <a 
                                            href="https://esenciel.setmore.com" 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="btn btn-primary"
                                        >
                                            Prendre rendez-vous
                                            <ArrowRight size={16} />
                                        </a>
                                        <a href="tel:+33625137250" className="btn btn-outline">
                                            <Phone size={16} />
                                            Appeler
                                        </a>
                                    </div>
                                </PracticalInfoCard>
                            </div>

                            {/* Autres services */}
                            <div className="related-services">
                                <h4>Autres services</h4>
                                <div className="related-links">
                                    {services.filter(s => s.slug !== slug).map(s => (
                                        <Link key={s.slug} to={`/accompagnement/${s.slug}`} className="related-link">
                                            {s.title}
                                        </Link>
                                    ))}
                                    <Link to="/programmes-gestion-stress-prevention-rechute" className="related-link">
                                        Programmes de pleine conscience
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <aside className="sidebar">
                            <PracticalInfoCard
                                variant="primary"
                                duration={currentService.duration}
                                format={Array.isArray(currentService.modalities) ? currentService.modalities.join(', ') : currentService.modalities}
                                pricingNote={currentService.price}
                            >
                                    <div className="cta-buttons">
                                        <a 
                                            href="https://esenciel.setmore.com" 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="btn btn-primary"
                                        >
                                            Prendre rendez-vous
                                            <ArrowRight size={16} />
                                        </a>
                                        <a href="tel:+33625137250" className="btn btn-outline">
                                            <Phone size={16} />
                                            Appeler
                                        </a>
                                    </div>
                            </PracticalInfoCard>

                            {/* Autres services */}
                            <div className="related-services">
                                <h4>Autres services</h4>
                                <div className="related-links">
                                    {services.filter(s => s.slug !== slug).map(s => (
                                        <Link key={s.slug} to={`/accompagnement/${s.slug}`} className="related-link">
                                            {s.title}
                                        </Link>
                                    ))}
                                    <Link to="/programmes-gestion-stress-prevention-rechute" className="related-link">
                                        Programmes de pleine conscience
                                    </Link>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServiceDetailPage;
