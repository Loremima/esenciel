import React from 'react';
import { Clock, Users } from 'lucide-react';

interface PracticalInfoCardProps {
    duration?: React.ReactNode;
    format?: React.ReactNode;
    location?: React.ReactNode;
    priceFirst?: string;
    priceFirstDetails?: React.ReactNode;
    priceNext?: string;
    priceNextDetails?: React.ReactNode;
    pricingNote?: string;
    tarifs?: {
        label: string;
        amount: string;
        details: string;
    }[];
    children?: React.ReactNode; // For custom content
    variant?: 'primary' | 'light';
    isSticky?: boolean;
}

const PracticalInfoCard: React.FC<PracticalInfoCardProps> = ({
    duration,
    format,
    location,
    priceFirst,
    priceFirstDetails,
    priceNext,
    priceNextDetails,
    pricingNote,
    tarifs,
    children,
    variant = 'light',
    isSticky = false,
}) => {
    const hasOldPricing = priceFirst && priceNext;
    const hasNewPricing = tarifs && tarifs.length > 0;

    const cardClasses = `info-card-enhanced ${variant} ${isSticky ? 'sticky' : ''}`;


    return (
        <div className={cardClasses}>
            <h2>Informations pratiques</h2>

            <div className="format-info-section">
                {duration && (
                    <div className="format-detail">
                        <Clock size={20} />
                        <div>
                            <strong>Durée :</strong> {duration}
                        </div>
                    </div>
                )}
                {format && (
                    <div className="format-detail">
                        <Users size={20} />
                        <div>
                            <strong>Format :</strong> {format}
                        </div>
                    </div>
                )}
                {location && (
                    <div className="format-detail">
                        <span>📍</span>
                        <div>
                            <strong>Lieu :</strong> {location}
                        </div>
                    </div>
                )}
            </div>

            {children}

            {(hasOldPricing || hasNewPricing) && (
                <div className="pricing-section-clean">
                    <h3>Tarifs</h3>
                    {hasOldPricing && (
                        <div className="pricing-items">
                            <div className="pricing-item">
                                <div className="price-main">{priceFirst}</div>
                                <div className="price-desc">{priceFirstDetails}</div>
                            </div>
                            <div className="pricing-item">
                                <div className="price-main">{priceNext}</div>
                                <div className="price-desc">{priceNextDetails}</div>
                            </div>
                        </div>
                    )}
                    {hasNewPricing && (
                        <div className="pricing-items" style={{ gridTemplateColumns: `repeat(${tarifs.length}, 1fr)` }}>
                            {tarifs.map((tarif, index) => (
                                <div key={index} className="pricing-item">
                                    <div className="price-main">{tarif.amount}</div>
                                    <div className="price-desc">
                                        {tarif.label}<br /><small>{tarif.details}</small>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                    {pricingNote && <p className="pricing-note">{pricingNote}</p>}
                </div>
            )}
        </div>
    );
};

export default PracticalInfoCard;
