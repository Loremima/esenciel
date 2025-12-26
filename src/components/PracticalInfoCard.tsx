import React from 'react';
import { Clock, Users, MapPin } from 'lucide-react';

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

    const bgClass = variant === 'primary' 
        ? 'bg-[#1F2937] text-white' 
        : 'bg-white text-[#1F2937] shadow-xl shadow-stone-200/50 border border-stone-100';

    return (
        <div className={`
            p-10 rounded-[2.5rem] w-full max-w-md
            ${bgClass}
            ${isSticky ? 'lg:sticky lg:top-24' : ''}
        `}>
            <h2 className={`text-2xl font-semibold mb-8 ${variant === 'primary' ? 'text-white' : 'text-[#1F2937]'}`}>
                Infos pratiques
            </h2>

            <div className="space-y-6 mb-10">
                {duration && (
                    <div className="flex items-start gap-4">
                        <div className={`p-2 rounded-xl ${variant === 'primary' ? 'bg-white/10 text-white' : 'bg-stone-50 text-primary'}`}>
                            <Clock size={20} strokeWidth={1.5} />
                        </div>
                        <div>
                            <span className={`block text-[10px] font-bold uppercase tracking-widest mb-1 ${variant === 'primary' ? 'text-white/40' : 'text-stone-400'}`}>Durée</span>
                            <div className="text-sm font-medium">{duration}</div>
                        </div>
                    </div>
                )}
                {format && (
                    <div className="flex items-start gap-4">
                        <div className={`p-2 rounded-xl ${variant === 'primary' ? 'bg-white/10 text-white' : 'bg-stone-50 text-primary'}`}>
                            <Users size={20} strokeWidth={1.5} />
                        </div>
                        <div>
                            <span className={`block text-[10px] font-bold uppercase tracking-widest mb-1 ${variant === 'primary' ? 'text-white/40' : 'text-stone-400'}`}>Format</span>
                            <div className="text-sm font-medium">{format}</div>
                        </div>
                    </div>
                )}
                {location && (
                    <div className="flex items-start gap-4">
                        <div className={`p-2 rounded-xl ${variant === 'primary' ? 'bg-white/10 text-white' : 'bg-stone-50 text-primary'}`}>
                            <MapPin size={20} strokeWidth={1.5} />
                        </div>
                        <div>
                            <span className={`block text-[10px] font-bold uppercase tracking-widest mb-1 ${variant === 'primary' ? 'text-white/40' : 'text-stone-400'}`}>Lieu</span>
                            <div className="text-sm font-medium">{location}</div>
                        </div>
                    </div>
                )}
            </div>

            {children && (
                <div className={`mb-10 pt-10 border-t ${variant === 'primary' ? 'border-white/10' : 'border-stone-100'}`}>
                    {children}
                </div>
            )}

            {(hasOldPricing || hasNewPricing) && (
                <div className={`pt-10 border-t ${variant === 'primary' ? 'border-white/10' : 'border-stone-100'}`}>
                    <h3 className={`text-lg font-semibold mb-6 ${variant === 'primary' ? 'text-white' : 'text-[#1F2937]'}`}>Tarifs</h3>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {hasOldPricing && (
                            <>
                                <div className={`p-6 rounded-2xl ${variant === 'primary' ? 'bg-white/5 border border-white/10' : 'bg-stone-50 border border-stone-100'}`}>
                                    <div className="text-2xl font-bold mb-1">{priceFirst}</div>
                                    <div className={`text-xs ${variant === 'primary' ? 'text-white/60' : 'text-stone-500'}`}>{priceFirstDetails}</div>
                                </div>
                                <div className={`p-6 rounded-2xl ${variant === 'primary' ? 'bg-white/5 border border-white/10' : 'bg-stone-50 border border-stone-100'}`}>
                                    <div className="text-2xl font-bold mb-1">{priceNext}</div>
                                    <div className={`text-xs ${variant === 'primary' ? 'text-white/60' : 'text-stone-500'}`}>{priceNextDetails}</div>
                                </div>
                            </>
                        )}
                        {hasNewPricing && tarifs.map((tarif, index) => (
                            <div key={index} className={`p-6 rounded-2xl ${variant === 'primary' ? 'bg-white/5 border border-white/10' : 'bg-stone-50 border border-stone-100'}`}>
                                <div className="text-2xl font-bold mb-1">{tarif.amount}</div>
                                <div className={`text-xs font-medium mb-1 ${variant === 'primary' ? 'text-white/80' : 'text-stone-700'}`}>{tarif.label}</div>
                                <div className={`text-[10px] ${variant === 'primary' ? 'text-white/40' : 'text-stone-400'}`}>{tarif.details}</div>
                            </div>
                        ))}
                    </div>
                    
                    {pricingNote && (
                        <p className={`mt-6 text-xs italic text-center ${variant === 'primary' ? 'text-white/40' : 'text-stone-400'}`}>
                            {pricingNote}
                        </p>
                    )}
                </div>
            )}
        </div>
    );
};

export default PracticalInfoCard;
