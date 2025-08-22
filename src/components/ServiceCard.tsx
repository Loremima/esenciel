import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Users, Euro, CheckCircle, CalendarDays } from 'lucide-react';

const ServiceCard = ({ service, isHighlight = false }: { service: any, isHighlight?: boolean }) => {
    const IconComponent = service.icon;

    return (
        <div className={`card service-card ${isHighlight ? 'highlight' : ''}`}>
            <div className="service-header">
                <div className="service-icon">
                    <IconComponent size={32} />
                </div>
                <div>
                    <h3>{service.title}</h3>
                    {service.subtitle && <p className="service-subtitle">{service.subtitle}</p>}
                </div>
            </div>

            <p className="service-description">{service.description}</p>

            {service.features && (
                <ul className="service-features">
                    {service.features.map((feature: string, index: number) => (
                        <li key={index}>
                            <CheckCircle size={16} />
                            {feature}
                        </li>
                    ))}
                </ul>
            )}

            {service.includes && (
                <ul className="service-features">
                    {service.includes.map((item: string, index: number) => (
                        <li key={index}>
                            <CheckCircle size={16} />
                            {item}
                        </li>
                    ))}
                </ul>
            )}

            <div className="service-info">
                {service.duration && (
                    <div className="info-item">
                        <Clock size={16} />
                        <span>{service.duration}</span>
                    </div>
                )}
                {service.sessionDuration && (
                    <div className="info-item">
                        <Clock size={16} />
                        <span>{service.sessionDuration}</span>
                    </div>
                )}
                {service.groupSize && (
                    <div className="info-item">
                        <Users size={16} />
                        <span>{service.groupSize}</span>
                    </div>
                )}
                <div className="info-item">
                    <Euro size={16} />
                    <span>{service.price}</span>
                </div>
            </div>

            {service.modalities && (
                <div className="service-modalities">
                    {service.modalities.map((modality: string, index: number) => (
                        <span key={index} className="modality-tag">{modality}</span>
                    ))}
                </div>
            )}

            <div className="service-actions">
                {service.detailPage && (
                    <Link to={service.detailPage} className="btn btn-outline">
                        En savoir plus
                        <ArrowRight size={16} />
                    </Link>
                )}
                <Link to="/contact-reservation" className="btn btn-primary">
                    Réserver
                    <CalendarDays size={16} />
                </Link>
            </div>
        </div>
    );
};

export default ServiceCard;
