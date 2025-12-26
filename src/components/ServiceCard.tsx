import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CalendarDays } from 'lucide-react';
import GlassButton from './GlassButton';

interface ServiceCardProps {
    service: {
        id: string;
        icon: any;
        title: string;
        description: string;
        duration?: string;
        sessionDuration?: string;
        price?: string;
        sessionType?: string;
        modalities?: string[];
        features?: string[];
        detailPage?: string;
        bookingLink?: string;
    };
    isHighlight?: boolean;
    variant?: 'on-video' | 'on-nude';
}

const ServiceCard: React.FC<ServiceCardProps> = ({
    service,
    _isHighlight = false,
    variant = 'on-nude'
}) => {
    const IconComponent = service.icon;
    const isVideo = variant === 'on-video';
    const primaryDark = '#1F2937';

    // Helper pour le bouton de réservation
    const renderBookingButton = () => {
        const buttonText = "Réserver";
        const linkTo = service.bookingLink || "/contact-reservation";
        const isExternal = linkTo.startsWith('http');

        if (isVideo) {
            return (
                <GlassButton to={linkTo} compact className="flex-1">
                    {buttonText}
                </GlassButton>
            );
        }

        if (isExternal) {
            return (
                <a 
                    href={linkTo} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={btnPrimaryStyle}
                >
                    {buttonText}
                    <CalendarDays size={16} />
                </a>
            );
        }

        return (
            <Link to={linkTo} style={btnPrimaryStyle}>
                {buttonText}
                <CalendarDays size={16} />
            </Link>
        );
    };

    // Styles inline
    const cardStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        // On retire height: '100%' pour éviter l'étirement moche
        // On laisse le contenu définir la hauteur
        width: '100%',
        borderRadius: '2.5rem',
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        backgroundColor: isVideo ? 'rgba(255,255,255,0.1)' : 'white',
        backdropFilter: isVideo ? 'blur(12px)' : 'none',
        border: isVideo ? '1px solid rgba(255,255,255,0.2)' : '1px solid rgba(0,0,0,0.05)',
        boxShadow: isVideo ? '0 8px 32px rgba(0,0,0,0.15)' : '0 10px 40px rgba(0,0,0,0.06)',
    };

    const contentStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        textAlign: 'left',
        padding: '2.5rem',
        // Pas de height: 100% ici non plus
    };

    const headerStyle: React.CSSProperties = {
        display: 'flex',
        alignItems: 'center',
        gap: '1.25rem',
        marginBottom: '1.5rem',
        width: '100%',
    };

    const iconStyle: React.CSSProperties = {
        width: '3.5rem',
        height: '3.5rem',
        borderRadius: '1.25rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        backgroundColor: isVideo ? 'rgba(255,255,255,0.1)' : '#f5f5f4',
    };

    const titleStyle: React.CSSProperties = {
        fontSize: '1.5rem',
        fontWeight: 700,
        lineHeight: 1.2,
        margin: 0,
        color: isVideo ? '#fffcea' : primaryDark,
    };

    const descStyle: React.CSSProperties = {
        display: 'block',
        width: '100%',
        fontSize: '0.95rem',
        lineHeight: 1.7,
        marginBottom: '2rem',
        minHeight: '4.5rem', // Pour aligner un peu les cartes
        color: isVideo ? 'rgba(255,252,234,0.85)' : '#57534e',
    };

    const buttonsContainerStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'row',
        gap: '0.75rem',
        width: '100%',
        marginTop: 'auto',
    };

    const btnBaseStyle: React.CSSProperties = {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem',
        flex: 1,
        padding: '0.875rem 1rem',
        borderRadius: '1rem',
        fontSize: '0.875rem',
        fontWeight: 600,
        textDecoration: 'none',
        transition: 'all 0.3s ease',
    };

    const btnSecondaryStyle: React.CSSProperties = {
        ...btnBaseStyle,
        backgroundColor: isVideo ? 'rgba(255,255,255,0.08)' : '#f5f5f4',
        border: isVideo ? '1px solid rgba(255,255,255,0.15)' : '1px solid #e7e5e4',
        color: isVideo ? '#fffcea' : primaryDark,
    };

    const btnPrimaryStyle: React.CSSProperties = {
        ...btnBaseStyle,
        backgroundColor: isVideo ? '#fffcea' : primaryDark,
        color: isVideo ? primaryDark : 'white',
        boxShadow: '0 4px 14px rgba(0,0,0,0.15)',
    };

    return (
        <div style={cardStyle}>
            <div style={contentStyle}>
                {/* Header: Icône + Titre */}
                <div style={headerStyle}>
                    <div style={iconStyle}>
                        <IconComponent
                            size={28}
                            strokeWidth={1.5}
                            style={{ color: isVideo ? '#fffcea' : primaryDark }}
                        />
                    </div>
                    <h3 style={titleStyle}>
                        {service.title}
                    </h3>
                </div>

                {/* Description */}
                <p style={descStyle}>
                    {service.description}
                </p>

                {/* Boutons côte à côte */}
                <div style={buttonsContainerStyle}>
                    {service.detailPage && (
                        isVideo ? (
                            <GlassButton to={service.detailPage} icon={ArrowRight} compact className="flex-1">
                                Détails
                            </GlassButton>
                        ) : (
                            <Link to={service.detailPage} style={btnSecondaryStyle}>
                                Détails
                                <ArrowRight size={16} />
                            </Link>
                        )
                    )}
                    {renderBookingButton()}
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
