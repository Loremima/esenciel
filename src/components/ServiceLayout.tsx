import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Users, MapPin, ArrowRight, Leaf, Euro, Calendar, Check, LucideIcon } from 'lucide-react';
import VideoCTA from './VideoCTA';
import ParallaxSection from './ParallaxSection';
import { useSlowMoVideo } from '../hooks/useSlowMoVideo';

// --- Types pour les props ---
interface BenefitItem {
    icon: LucideIcon;
    title: string;
    description: string;
}

interface ProcessStep {
    number: string;
    title: string;
    description: string;
}

interface ObjectiveItem {
    title: string;
    description: string;
}

interface ServiceLayoutProps {
    hero: {
        title: React.ReactNode; // Pour permettre les <br/> et <span>
        subtitle: string;
        tag: string;
        duration: string;
        format: string;
        location: string;
        mediaSrc: string;
        mediaType: 'video' | 'image';
    };
    benefits: {
        title: string;
        subtitle: string;
        items: BenefitItem[];
    };
    process: {
        title: string;
        subtitle: string;
        steps: ProcessStep[];
    };
    objectives: {
        title: string;
        subtitle: string;
        items: ObjectiveItem[];
    };
    practical: {
        durationDetail: string;
        formatDetail: string;
        locationDetail: string;
        priceMain: string;
        priceSub?: string;
        priceLabelMain: string;
        priceLabelSub?: string;
        description: string;
        features: string[];
    };
    cta: {
        title: string;
        subtitle: string;
        buttonText: string;
        buttonLink?: string; // Optionnel, si absent on garde /contact-reservation
    };
    bookingLink?: string;
    followUpBookingLink?: string;
    learnMoreLink?: string; // Lien "En savoir plus" pour les programmes collectifs
}

const ServiceLayout: React.FC<ServiceLayoutProps> = ({
    hero,
    benefits,
    process,
    objectives,
    practical,
    cta,
    bookingLink,
    followUpBookingLink,
    learnMoreLink
}) => {
    const videoRef = useSlowMoVideo();

    // Helper pour les liens externes vs internes
    const renderButton = (text: string, to: string, className: string, icon?: React.ReactNode) => {
        const isExternal = to.startsWith('http');
        if (isExternal) {
            return (
                <a
                    href={to}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={className}
                >
                    {icon && icon}
                    {text}
                    {!icon && <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />}
                </a>
            );
        }
        return (
            <Link to={to} className={className}>
                {icon && icon}
                {text}
                {!icon && <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />}
            </Link>
        );
    };

    return (
        <div className="service-page-layout">

            {/* ===== SECTION 1 : HERO - FOND BEIGE ===== */}
            <section className="min-h-screen flex items-center pt-32 pb-20 bg-[#fffcea]">
                <div className="container">
                    {/* Ajustement de la grille pour pousser la vidéo plus à droite et donner plus de place au texte */}
                    <div className="grid lg:grid-cols-[2fr,1fr] gap-16 lg:gap-32 items-center">

                        {/* Contenu - Plus large */}
                        <div className="order-2 lg:order-1">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1F2937]/5 text-[#1F2937]/50 text-[10px] font-bold uppercase tracking-[0.2em] mb-8">
                                <Leaf size={12} />
                                {hero.tag}
                            </div>

                            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-[#1F2937] mb-8 leading-[0.95] font-heading tracking-tighter">
                                {hero.title}
                            </h1>

                            <p className="text-xl md:text-2xl text-stone-500/80 mb-12 leading-relaxed max-w-xl font-light">
                                {hero.subtitle}
                            </p>

                            <div className="flex flex-wrap gap-4 mb-12">
                                <div className="flex items-center gap-3 px-6 py-3 bg-white/50 rounded-2xl border border-stone-200/50 shadow-sm">
                                    <Clock size={16} className="text-[#1F2937]" />
                                    <span className="text-[#1F2937] font-semibold text-xs tracking-wide uppercase">{hero.duration}</span>
                                </div>
                                <div className="flex items-center gap-3 px-6 py-3 bg-white/50 rounded-2xl border border-stone-200/50 shadow-sm">
                                    <Users size={16} className="text-[#1F2937]" />
                                    <span className="text-[#1F2937] font-semibold text-xs tracking-wide uppercase">{hero.format}</span>
                                </div>
                                {hero.location && (
                                    <div className="flex items-center gap-3 px-6 py-3 bg-white/50 rounded-2xl border border-stone-200/50 shadow-sm">
                                        <MapPin size={16} className="text-[#1F2937]" />
                                        <span className="text-[#1F2937] font-semibold text-xs tracking-wide uppercase">{hero.location}</span>
                                    </div>
                                )}
                            </div>

                            <div className="flex gap-4 flex-wrap">
                                {learnMoreLink && (
                                    renderButton(
                                        "En savoir plus",
                                        learnMoreLink,
                                        "inline-flex items-center gap-4 px-10 py-5 bg-white/90 text-[#1F2937] rounded-full font-bold hover:bg-white transition-all duration-500 shadow-xl hover:shadow-2xl hover:-translate-y-1 group border border-stone-200"
                                    )
                                )}
                                {renderButton(
                                    "Réserver ma place",
                                    bookingLink || "/contact-reservation",
                                    "inline-flex items-center gap-4 px-10 py-5 bg-[#1F2937] text-[#fffcea] rounded-full font-bold hover:bg-[#111827] transition-all duration-500 shadow-xl hover:shadow-2xl hover:-translate-y-1 group"
                                )}
                            </div>
                        </div>

                        {/* Média (Vidéo ou Image) - Poussé à droite */}
                        <div className="order-1 lg:order-2 flex justify-end">
                            <div className="relative aspect-[2/3] w-full max-w-[380px] rounded-[4rem] overflow-hidden shadow-[0_40px_80px_-15px_rgba(0,0,0,0.2)]">
                                {hero.mediaType === 'video' ? (
                                    <video
                                        ref={videoRef}
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        className="absolute inset-0 w-full h-full object-cover parallax-video pointer-events-none"
                                    >
                                        <source src={hero.mediaSrc} type="video/mp4" />
                                    </video>
                                ) : (
                                    <img
                                        src={hero.mediaSrc}
                                        alt="Illustration"
                                        className="absolute inset-0 w-full h-full object-cover"
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== SECTION 2 : BÉNÉFICES - PARALLAX FRAME ===== */}
            <ParallaxSection
                videoSrc="/background.mp4"
                overlayOpacity={0.2}
                className="min-h-[80vh] py-32"
            >
                <div className="flex flex-col items-center justify-center w-full px-4"> {/* Ajout de justify-center, w-full et px-4 */}
                    <div className="max-w-4xl w-full text-center mb-24"> {/* Ajout de w-full */}
                        <h2 className="text-5xl md:text-6xl font-bold text-[#fffcea] mb-6 font-heading leading-tight" style={{ textShadow: '0 2px 20px rgba(0,0,0,0.5)' }}>
                            {benefits.title}
                        </h2>
                        <div className="w-12 h-px bg-[#fffcea]/50 mx-auto"></div>
                        <p className="text-[#fffcea]/80 mt-6 text-lg font-light max-w-xl mx-auto" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>
                            {benefits.subtitle}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto w-full">
                        {benefits.items.map((benefit, index) => (
                            <div
                                key={index}
                                className="p-10 rounded-[3rem] bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl hover:bg-white/15 transition-all duration-500 group"
                            >
                                {/* Icône et titre sur la même ligne pour compacter */}
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 rounded-2xl bg-[#fffcea]/10 border border-[#fffcea]/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500">
                                        <benefit.icon size={20} strokeWidth={1.5} className="text-[#fffcea]" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-[#fffcea] font-heading leading-tight">{benefit.title}</h3>
                                </div>
                                <p className="text-[#fffcea]/80 leading-relaxed font-light text-sm">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </ParallaxSection>

            {/* ===== SECTION 3 : PARCOURS - FOND BEIGE ===== */}
            <section className="py-32 bg-[#fffcea]">
                <div className="container">
                    <div className="max-w-4xl mx-auto text-center mb-24">
                        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-stone-400 mb-4 block">Méthodologie</span>
                        <h2 className="text-5xl md:text-6xl font-bold text-[#1F2937] mb-6 font-heading">{process.title}</h2>
                        <div className="w-12 h-px bg-stone-300 mx-auto"></div>
                        <p className="text-stone-500 mt-6 text-lg font-light max-w-xl mx-auto">
                            {process.subtitle}
                        </p>
                    </div>

                    <div className="max-w-3xl mx-auto pl-4"> {/* pl-4 pour laisser de la place au cercle qui déborde */}
                        <div className="relative border-l border-stone-300 ml-6 space-y-16 pb-2">
                            {/* ml-6 correspond au rayon du cercle (w-12/2 = 24px = 1.5rem = ml-6) */}
                            {/* La bordure gauche EST la ligne verticale continue */}

                            {process.steps.map((step, index) => {
                                const isLast = index === process.steps.length - 1;

                                return (
                                    <div key={index} className="relative pl-12">
                                        {/* pl-12 : Espace entre la ligne et le texte */}

                                        {/* Le Cercle : Positionné en absolute sur la ligne */}
                                        <div className="absolute -left-6 top-0 w-12 h-12 rounded-full bg-[#1F2937] text-[#fffcea] flex items-center justify-center font-bold text-xs shrink-0 shadow-xl z-10">
                                            {step.number}
                                        </div>

                                        {/* Masque pour couper la ligne APRES le dernier cercle */}
                                        {isLast && (
                                            <div className="absolute -left-[1px] top-6 bottom-0 w-[3px] bg-[#fffcea]"></div>
                                            // top-6 : Commence au milieu du dernier cercle
                                            // bg-[#fffcea] : Couleur du fond de la page pour masquer la ligne
                                        )}

                                        {/* Le Texte */}
                                        <div className="pt-1">
                                            <h4 className="text-2xl font-semibold text-[#1F2937] mb-3 font-heading">{step.title}</h4>
                                            <p className="text-stone-500/80 leading-relaxed font-light text-lg">{step.description}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== SECTION 4 : OBJECTIFS - PARALLAX FRAME ===== */}
            <ParallaxSection
                videoSrc="/background.mp4"
                overlayOpacity={0} // Pas d'overlay sombre pour cette section
                className="min-h-[70vh] py-32"
            >
                <div className="flex flex-col items-center justify-center w-full px-4"> {/* Ajout de justify-center, w-full et px-4 */}
                    <div className="max-w-4xl w-full text-center mb-24"> {/* Ajout de w-full */}
                        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#fffcea] mb-4 block" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
                            Finalité
                        </span>
                        <h2 className="text-5xl md:text-6xl font-bold text-[#fffcea] mb-6 font-heading" style={{ textShadow: '0 2px 20px rgba(0,0,0,0.5)' }}>
                            {objectives.title}
                        </h2>
                        <div className="w-12 h-px bg-[#fffcea]/50 mx-auto"></div>
                        <p className="text-[#fffcea]/80 mt-6 text-lg font-light max-w-xl mx-auto" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>
                            {objectives.subtitle}
                        </p>
                    </div>

                    <div className={`grid sm:grid-cols-2 ${objectives.items.length > 2 ? 'lg:grid-cols-4' : 'lg:grid-cols-2 max-w-3xl'} gap-4 max-w-6xl mx-auto w-full`}>
                        {objectives.items.map((obj, index) => (
                            <div
                                key={index}
                                className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-colors duration-500 flex flex-col justify-center h-full"
                            >
                                {/* Numéro et titre alignés pour compacter */}
                                <div className="flex items-baseline gap-3 mb-3">
                                    <span className="text-[#fffcea]/40 text-xs font-bold tracking-widest shrink-0">0{index + 1}</span>
                                    <h4 className="text-lg font-semibold text-[#fffcea] font-heading leading-tight">{obj.title}</h4>
                                </div>
                                <p className="text-[#fffcea]/70 text-sm leading-relaxed font-light">{obj.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </ParallaxSection>

            {/* ===== SECTION 5 : INFOS PRATIQUES ===== */}
            <section className="py-32 bg-[#fffcea]">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-20 items-center max-w-6xl mx-auto">

                        {/* Carte Infos */}
                        <div className="p-12 rounded-[4rem] bg-stone-100/50 backdrop-blur-xl border border-stone-200/60 shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
                            <h3 className="text-3xl font-bold text-[#1F2937] mb-12 font-heading tracking-tight">L'Essentiel</h3>

                            <div className="space-y-8 mb-12 text-[#1F2937]">
                                <div className="flex items-center gap-6">
                                    <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shrink-0 shadow-sm border border-stone-100">
                                        <Euro size={20} />
                                    </div>
                                    <div>
                                        <div className="text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-1">Tarifs</div>
                                        <div className="font-semibold">
                                            {practical.priceMain}
                                            {practical.priceSub && <span className="font-light text-stone-400 mx-2">/</span>}
                                            {practical.priceSub}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-6">
                                    <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shrink-0 shadow-sm border border-stone-100">
                                        <Clock size={20} />
                                    </div>
                                    <div>
                                        <div className="text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-1">Durée</div>
                                        <div className="font-semibold">{practical.durationDetail}</div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-6">
                                    <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shrink-0 shadow-sm border border-stone-100">
                                        <MapPin size={20} />
                                    </div>
                                    <div>
                                        <div className="text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-1">Lieu</div>
                                        <div className="font-semibold">{practical.locationDetail}</div>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-10 border-t border-stone-200/60 flex gap-4">
                                {bookingLink ? (
                                    <a
                                        href={bookingLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 p-6 rounded-3xl bg-[#1F2937] text-[#fffcea] text-center transition-transform hover:scale-[1.02] active:scale-[0.98]"
                                    >
                                        <div className="text-2xl font-bold mb-1">{practical.priceMain}</div>
                                        <div className="text-[9px] font-bold uppercase tracking-widest opacity-60">{practical.priceLabelMain}</div>
                                    </a>
                                ) : (
                                    <div className="flex-1 p-6 rounded-3xl bg-[#1F2937] text-[#fffcea] text-center">
                                        <div className="text-2xl font-bold mb-1">{practical.priceMain}</div>
                                        <div className="text-[9px] font-bold uppercase tracking-widest opacity-60">{practical.priceLabelMain}</div>
                                    </div>
                                )}

                                {practical.priceSub && (
                                    followUpBookingLink ? (
                                        <a
                                            href={followUpBookingLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 p-6 rounded-3xl bg-white border border-stone-200 text-center text-[#1F2937] transition-transform hover:scale-[1.02] active:scale-[0.98]"
                                        >
                                            <div className="text-2xl font-bold mb-1">{practical.priceSub}</div>
                                            <div className="text-[9px] font-bold uppercase tracking-widest text-stone-400">{practical.priceLabelSub}</div>
                                        </a>
                                    ) : (
                                        <div className="flex-1 p-6 rounded-3xl bg-white border border-stone-200 text-center text-[#1F2937]">
                                            <div className="text-2xl font-bold mb-1">{practical.priceSub}</div>
                                            <div className="text-[9px] font-bold uppercase tracking-widest text-stone-400">{practical.priceLabelSub}</div>
                                        </div>
                                    )
                                )}
                            </div>
                        </div>

                        {/* Texte à droite */}
                        <div>
                            <h2 className="text-5xl md:text-6xl font-bold text-[#1F2937] mb-8 font-heading leading-[1.1] tracking-tighter">
                                Un engagement<br /><span className="italic font-light opacity-40 text-4xl">réciproque</span>
                            </h2>
                            <p className="text-stone-500 text-lg leading-relaxed mb-8 font-light">
                                {practical.description}
                            </p>
                            <ul className="space-y-4 mb-12">
                                {practical.features.map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-stone-600 font-medium">
                                        <Check size={16} className="text-[#1F2937]" />
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            {renderButton(
                                "Prendre rendez-vous",
                                bookingLink || "/contact-reservation",
                                "inline-flex items-center gap-4 px-10 py-5 bg-[#1F2937] text-[#fffcea] rounded-full font-bold hover:bg-[#111827] transition-all duration-500 shadow-xl group",
                                <Calendar size={20} />
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== SECTION 6 : CTA FINAL ===== */}
            <VideoCTA
                title={cta.title}
                subtitle={cta.subtitle}
                buttonText={cta.buttonText}
                buttonLink={cta.buttonLink || bookingLink || "/contact-reservation"}
            />
        </div>
    );
};

export default ServiceLayout;
