import { Sun, Compass, Map, BadgeCheck, ShieldCheck, Sprout, GraduationCap, Mic2 } from 'lucide-react';

export const individualServices = [
    {
        id: 'sante-qualite-vie',
        icon: Sun,
        title: 'Santé et vitalité',
        description: 'Cet accompagnement est conçu pour vous aider à devenir acteur de votre santé et à adopter des habitudes de vie favorables à votre bien-être.',
        duration: '1h30 (1ère séance) / 1h (suivantes)',
        price: '90€ (1ère séance) / 60€ (suivantes)',
        sessionType: 'Individuel',
        modalities: ['Présentiel', 'Distanciel'],
        features: [
            'Bilan personnalisé pour prendre conscience de vos habitudes de vie',
            'Identifier vos freins à votre épanouissement',
            'Mobiliser vos ressources',
            'Établir un plan d\'action aligné à vos objectifs',
            'Soutenir votre motivation sur le long terme'
        ],
        hasDetailPage: true,
        detailPage: '/sante-qualite-vie-details',
        bookingLink: 'https://esenciel.setmore.com/services/8d6ee6ea-5080-498a-a702-ee207cff6a5d',
        followUpBookingLink: 'https://esenciel.setmore.com/services/39493de5-ca53-4fa8-92ef-39965c82c7bf'
    },
    {
        id: 'pleine-conscience-presence',
        icon: Compass,
        title: 'Pleine conscience et présence attentive',
        description: 'Cet accompagnement vous invite à ralentir, à vous poser et à respirer pour cultiver une présence plus profonde et authentique avec vous-même.',
        duration: '1h30 (1ère séance) / 1h (suivantes)',
        price: '90€ (1ère séance) / 60€ (suivantes)',
        sessionType: 'Individuel',
        modalities: ['Présentiel', 'Distanciel'],
        features: [
            'Développer une écoute plus attentive à soi-même',
            'Se reconnecter à l\'instant présent et à ses besoins profonds',
            'Libérer l\'espace mental et émotionnel',
            'Cultiver l\'autonomie et améliorer sa vitalité',
            'Faire des choix de vie plus éclairés et alignés'
        ],
        detailPage: '/pleine-conscience',
        bookingLink: 'https://esenciel.setmore.com/services/a2313cf9-230a-471b-afe8-72d966932548',
        followUpBookingLink: 'https://esenciel.setmore.com/services/ad635ece-740f-4f0f-a813-c5e91ac76040'
    }
];

export const groupServices = [
    {
        id: 'jeu-du-tao',
        icon: Map,
        title: 'Jeu du Tao santé et mieux-être',
        description: 'Une expérience interactive et immersive pour définir votre propre quête et explorer vos aspirations profondes.',
        duration: '4 à 5 heures',
        price: '70€ par participant',
        sessionType: 'Groupe (3-4 pers.)',
        modalities: ['Minimum 3 participants'],
        features: [
            'L\'animation complète par un instructeur certifié',
            'Le jeu du tao',
            'Le matériel fourni (carnets, supports accessoires)',
            'Un suivi personnalisé après la session (d\'une heure)',
            'Favorise l\'introspection et l\'harmonisation',
            'Encourage l\'intelligence et entraide collective'
        ],
        highlight: true,
        detailPage: '/jeu-du-tao',
        bookingLink: 'https://esenciel.setmore.com/services/ec9be6bb-4ae2-44de-865a-6b57a86d137f'
    }
];

export const collectivePrograms = [
    {
        id: 'gestion-stress',
        icon: BadgeCheck,
        title: 'Gestion du stress par la pleine conscience',
        description: 'Développer une relation plus consciente à son expérience et mieux faire face aux situations stressantes (programme inspiré du MBSR).',
        duration: '8 séances',
        sessionDuration: '2h30 par séance',
        price: '330€',
        sessionType: 'Groupe (5-10 pers.)',
        detailPage: '/gestion-stress',
        bookingLink: 'https://esenciel.setmore.com/services/75422cbc-2646-42db-9eee-97e4628f71e8'
    },
    {
        id: 'prevention-rechute',
        icon: ShieldCheck,
        title: 'Prévention des rechutes dépressives',
        description: 'Réduire le risque de rechute dépressive en changeant la relation aux pensées et états émotionnels.',
        duration: '8 séances',
        sessionDuration: '2h-2h30 par séance',
        price: '330€',
        sessionType: 'Groupe (5-10 pers.)',
        detailPage: '/prevention-rechutes-depressives',
        bookingLink: 'https://esenciel.setmore.com/services/9eefb15d-57de-4f51-91cc-b37949858c23'
    },
    {
        id: 'bien-vieillir',
        icon: Sprout,
        title: 'Bien vivre son avancée en âge',
        description: "Accompagner les enjeux psychologiques, émotionnels et relationnels liés à l'avancée en âge, dans un cadre de prévention et de qualité de vie.",
        duration: '15 séances sur 8 mois',
        sessionDuration: '8 séances de 2h + 7 séances de 1h30',
        price: '420€',
        sessionType: 'Groupe (5-10 pers.)',
        detailPage: '/bien-vivre-son-avancement-age',
        bookingLink: 'https://esenciel.setmore.com/services/7c7d1387-91a3-4127-947d-4632b229d9bc'
    }
];

export const otherFormats = [
    {
        id: 'ateliers-education',
        icon: GraduationCap,
        title: 'Ateliers en éducation à la santé',
        description: 'Ateliers personnalisés pour les structures, adaptés à vos besoins et à votre public. Chaque séance est conçue pour être interactive et pratique.',
        duration: 'Sur commande',
        price: 'Sur devis',
        sessionType: 'Groupe/Structure',
        modalities: ['Entreprises', 'Associations'],
        highlight: true,
        detailPage: '/ateliers-education-sante',
        bookingLink: 'https://esenciel.setmore.com/services/7d7693d8-ace7-4cb8-92fe-f33968dd54ca'
    },
    {
        id: 'conferences',
        icon: Mic2,
        title: 'Conférences & événements publics',
        description: 'Conférences sur mesure pour les structures, destinées à sensibiliser et informer votre public sur le stress, la pleine conscience, la santé cognitive, etc.',
        duration: 'Sur commande',
        price: 'Sur devis',
        sessionType: 'Groupe/Structure',
        modalities: ['Conférences', 'Tables rondes', 'Événements'],
        highlight: false, // Moins mis en avant que les ateliers
        detailPage: '/conferences-evenements',
        bookingLink: 'https://esenciel.setmore.com/services/7d7693d8-ace7-4cb8-92fe-f33968dd54ca'
    }
];
