import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Users, Euro, CheckCircle, CalendarDays } from 'lucide-react';

const ServiceCard = ({ service, isHighlight = false }: { service: any, isHighlight?: boolean }) => {
    const IconComponent = service.icon;

    // Extract participants info when present
    const isGroup = typeof service.sessionType === 'string' && /groupe/i.test(service.sessionType);
    const participantsRange = (() => {
        if (!service?.sessionType) return '';
        const match = String(service.sessionType).match(/\(([^)]+)\)/); // text inside parentheses
        return match ? match[1] : '';
    })();

    // Separate 'Minimum X participants' from other modalities
    const minParticipants = Array.isArray(service?.modalities)
        ? service.modalities.find((m: string) => /minimum\s*\d+/i.test(m))
        : undefined;
    const cleanModalities = Array.isArray(service?.modalities)
        ? service.modalities.filter((m: string) => !/minimum\s*\d+/i.test(m))
        : [];

    return (
        <div className={`service-card ${isHighlight ? 'highlight' : ''}`}>
            {/* Header avec icône et titre */}
            <div className="service-header">
                <div className="service-icon">
                    <IconComponent size={22} />
                </div>
                <h3 className="service-title">{service.title}</h3>
            </div>

            {/* Meta chips (type / participants) */}
            <div className="meta-chips">
                {service.sessionType && (
                    <span className="chip">
                        <Users size={14} />
                        <span>{String(service.sessionType).replace(/\s*\([^)]*\)/, '').trim()}</span>
                    </span>
                )}
                {isGroup && (
                    <span className="chip neutral">
                        <Users size={14} />
                        <span>
                            {participantsRange || 'Participants'}
                            {minParticipants ? ` · ${minParticipants.replace(/minimum/i, 'min.').trim()}` : ''}
                        </span>
                    </span>
                )}
            </div>

            {/* Description */}
            <p className="service-description">{service.description}</p>

            {/* Informations principales en grid */}
            <div className="service-main-info">
                <div className="info-item-grid">
                    <Clock size={16} />
                    <div>
                        <span className="info-label">Durée</span>
                        <span className="info-value">{service.duration}</span>
                        {service.sessionDuration && (
                            <span className="info-detail">{service.sessionDuration}</span>
                        )}
                    </div>
                </div>
                <div className="info-item-grid">
                    <Euro size={16} />
                    <div>
                        <span className="info-label">Tarif</span>
                        <span className="info-value">{service.price}</span>
                    </div>
                </div>
            </div>

            {/* Features si disponibles */}
            {service.features && service.features.length > 0 && (
                <div className="service-features">
                    <h4>Inclus :</h4>
                    <ul>
                        {service.features.slice(0, 3).map((feature: string, index: number) => (
                            <li key={index}>
                                <CheckCircle size={14} />
                                <span>{feature}</span>
                            </li>
                        ))}
                        {service.features.length > 3 && (
                            <li className="more-features">
                                <span>+ {service.features.length - 3} autres avantages</span>
                            </li>
                        )}
                    </ul>
                </div>
            )}

            {/* Modalités (sans le minimum) */}
            {cleanModalities && cleanModalities.length > 0 && (
                <div className="service-modalities">
                    {cleanModalities.map((modality: string, index: number) => (
                        <span key={index} className="modality-tag">{modality}</span>
                    ))}
                </div>
            )}

            {/* Actions uniformes */}
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

            <style jsx>{`
                .service-card {
                    background: var(--color-white);
                    border-radius: 14px;
                    padding: var(--spacing-6);
                    box-shadow: 0 6px 18px rgba(0,0,0,0.06);
                    border: 1px solid rgba(0,0,0,0.06);
                    transition: border-color 0.2s ease;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    position: relative;
                }

                .service-card * { text-shadow: none !important; }
                .service-card:hover { border-color: var(--color-primary); }
                .service-card.highlight { border: 1.5px solid var(--color-secondary); }
                .service-card.highlight::before { display: none; }

                .service-header { display: flex; align-items: center; gap: var(--spacing-3); margin-bottom: var(--spacing-3); }
                .service-icon { background: transparent; color: var(--color-primary); width: 36px; height: 36px; border-radius: 50%; border: 1px solid var(--color-gray-200); display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
                .service-title { font-size: 1.15rem; font-weight: 650; color: var(--color-primary) !important; margin: 0; line-height: 1.3; }

                .meta-chips { display: flex; flex-wrap: wrap; gap: var(--spacing-2); margin-bottom: var(--spacing-3); }
                .chip { display: inline-flex; align-items: center; gap: 8px; padding: 6px 10px; border-radius: 999px; border: 1px solid var(--color-primary); color: var(--color-primary) !important; font-size: 0.82rem; font-weight: 600; }
                .chip.neutral { border-color: var(--color-gray-300); color: var(--color-gray-700) !important; }

                .service-description { color: var(--color-gray-700) !important; line-height: 1.65; margin-bottom: var(--spacing-4); flex-grow: 1; }

                .service-main-info { background: transparent; border-radius: 12px; padding: 0; margin-bottom: var(--spacing-5); border-top: 1px solid var(--color-gray-200); padding-top: var(--spacing-4); }
                .info-item-grid { display: flex; align-items: flex-start; gap: var(--spacing-3); padding: var(--spacing-3) 0; border-bottom: 1px solid var(--color-gray-100); color: var(--color-primary) !important; }
                .info-item-grid:last-child { border-bottom: none; }
                .info-item-grid > div { flex: 1; }
                .info-label { display: block; font-size: 0.85rem; font-weight: 500; color: var(--color-gray-600) !important; margin-bottom: 2px; }
                .info-value { display: block; font-size: 1rem; font-weight: 650; color: var(--color-primary) !important; }
                .info-detail { display: block; font-size: 0.8rem; color: var(--color-gray-600) !important; margin-top: 2px; }

                .service-features { margin-bottom: var(--spacing-5); }
                .service-features h4 { font-size: 0.85rem; font-weight: 650; color: var(--color-primary) !important; margin: 0 0 var(--spacing-3) 0; text-transform: uppercase; letter-spacing: 0.04em; }
                .service-features ul { list-style: none; padding: 0; margin: 0; }
                .service-features li { display: flex; align-items: flex-start; gap: var(--spacing-2); padding: var(--spacing-1) 0; font-size: 0.92rem; color: var(--color-gray-700) !important; }
                .service-features li svg { color: var(--color-secondary); margin-top: 2px; flex-shrink: 0; }
                .more-features { font-style: italic; color: var(--color-gray-600) !important; font-size: 0.85rem !important; }

                .service-modalities { display: flex; flex-wrap: wrap; gap: var(--spacing-2); margin-bottom: var(--spacing-5); }
                .modality-tag { background: transparent; color: var(--color-primary) !important; padding: 6px 10px; border-radius: 999px; font-size: 0.8rem; font-weight: 600; border: 1px solid var(--color-gray-200); }

                .service-actions { display: flex; gap: var(--spacing-3); margin-top: auto; }
                .btn { flex: 1; display: inline-flex; align-items: center; justify-content: center; gap: var(--spacing-2); padding: 14px 16px; border-radius: 12px; font-weight: 600; font-size: 0.95rem; text-decoration: none; transition: background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease; text-align: center; min-height: 48px; }
                .btn-outline { background: transparent; color: var(--color-primary); border: 1.5px solid var(--color-primary); }
                .btn-outline:hover { background: var(--color-primary); color: white; }

                .btn-primary { background: #fffcea; color: var(--color-primary); border: 1.5px solid var(--color-primary); }
                .btn-primary:hover { background: var(--color-primary); color: white; border-color: var(--color-primary); }

                @media (max-width: 768px) {
                    .service-card { padding: var(--spacing-5); }
                    .service-actions { flex-direction: column; }
                    .service-header { gap: var(--spacing-2); }
                    .service-icon { width: 34px; height: 34px; }
                }
            `}</style>
        </div>
    );
};

export default ServiceCard;