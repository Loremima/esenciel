import { Heart, Brain, Sparkles, Award, Users, BookOpen, Presentation } from 'lucide-react';

export const individualServices = [
    {
        id: 'sante-qualite-vie',
        icon: Heart,
        title: 'Santé et qualité de vie',
        description: 'Cet accompagnement est conçu pour vous aider à devenir acteur de votre santé et à adopter des habitudes de vie favorables à votre bien-être.',
        duration: '1h30-2h (1ère séance) / 1h (suivantes)',
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
        detailPage: '/sante-qualite-vie-details'
    },
    {
        id: 'pleine-conscience-presence',
        icon: Brain,
        title: 'Pleine conscience et présence attentive',
        description: 'Cet accompagnement vous invite à ralentir, à vous poser et à respirer pour cultiver une présence plus profonde et authentique avec vous-même.',
        duration: '45min-1h',
        price: 'Sur devis',
        sessionType: 'Individuel',
        modalities: ['Présentiel', 'Distanciel'],
        features: [
            'Développer une écoute plus attentive à soi-même',
            'Se reconnecter à l\'instant présent et à ses besoins profonds',
            'Libérer l\'espace mental et émotionnel',
            'Cultiver l\'autonomie et améliorer sa qualité de vie',
            'Faire des choix de vie plus éclairés et alignés'
        ],
        detailPage: '/pleine-conscience'
    }
];

export const groupServices = [
    {
        id: 'jeu-du-tao',
        icon: Sparkles,
        title: 'Jeux du Tao santé et mieux-être',
        description: 'Une expérience interactive et immersive destinée à des petits groupes de 4 personnes maximum. En 4/5 heures, chaque participant explore quatre mondes symboliques (terre, eau, feu, air) pour clarifier ses objectifs de bien-être et d\'équilibre de vie.',
        duration: '4-5h par session',
        price: '50€ par participant',
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
        detailPage: '/jeu-du-tao'
    }
];

export const collectivePrograms = [
    {
        id: 'mbsr',
        icon: Award,
        title: 'MBSR pour apprendre à gérer le stress',
        description: 'Offrez-vous l\'opportunité de mieux gérer votre stress et vos émotions avec ce programme en 8 semaines. Idéal pour celles et ceux qui cherchent à retrouver le calme et la sérénité dans leur quotidien.',
        duration: '8 semaines',
        sessionDuration: '2h30 par séance',
        price: '330€',
        sessionType: 'Groupe (5-10 pers.)',
        detailPage: '/programmes-mbsr'
    },
    {
        id: 'mbct',
        icon: Brain,
        title: 'MBCT pour prévenir la dépression',
        description: "Issu de la combinaison de la pleine conscience et des outils de la thérapie cognitive, ce protocole est particulièrement adapté à celles et ceux ayant traversé des épisodes de dépression ou d'anxiété.",
        duration: '8 semaines',
        sessionDuration: '2h-2h30 par séance',
        price: '330€',
        sessionType: 'Groupe (5-10 pers.)',
        detailPage: '/programmes-mbct'
    },
    {
        id: 'mbcas',
        icon: Users,
        title: 'MBCAS pour bien vivre son avancée en âge',
        description: "Ce programme s'adresse aux seniors ou à toute personne s'intéressant à l'avancée en âge.Il propose une progression plus douce sur plusieurs mois qui intègre des pratiques centrées sur le corps, les émotions et les pensées.",
        duration: '8 mois (15 séances)',
        sessionDuration: '2h (princ.) + 1h30 (inter.)',
        price: '380€',
        sessionType: 'Groupe (5-10 pers.)',
        detailPage: '/programme-mbcas'
    }
];

export const otherFormats = [
    {
        id: 'ateliers-education',
        icon: BookOpen,
        title: 'Ateliers en éducation à la santé',
        description: 'Ateliers personnalisés pour les structures, adaptés à vos besoins et à votre public. Chaque séance est conçue pour être interactive et pratique.',
        duration: 'Sur commande',
        price: 'Sur devis',
        sessionType: 'Groupe/Structure',
        modalities: ['Entreprises', 'Associations'],
        highlight: true,
        detailPage: '/ateliers-education-sante'
    },
    {
        id: 'conferences',
        icon: Presentation,
        title: 'Conférences & événements publics',
        description: 'Conférences sur mesure pour les structures, destinées à sensibiliser et informer votre public sur le stress, la pleine conscience, la santé cognitive, etc.',
        duration: 'Sur commande',
        price: 'Sur devis',
        sessionType: 'Groupe/Structure',
        modalities: ['Conférences', 'Tables rondes', 'Événements'],
        highlight: false, // Moins mis en avant que les ateliers
        detailPage: '/conferences-evenements'
    }
];
