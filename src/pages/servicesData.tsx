import { Heart, Brain, Sparkles, Award, Users, BookOpen, Presentation } from 'lucide-react';

export const individualServices = [
    {
        id: 'sante-qualite-vie',
        icon: Heart,
        title: 'Santé et Qualité de Vie',
        subtitle: 'Devenez acteur de votre santé et de votre qualité de vie au quotidien grâce à un accompagnement personnalisé.',
        description: 'Cet accompagnement est conçu pour vous aider à devenir acteur de votre santé et à adopter des habitudes de vie favorables à votre bien-être.',
        duration: '1h30 à 2h (première séance) / 1h (séances suivantes)',
        price: '90€ (première séance) / 60€ (séances suivantes)',
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
        title: 'Pleine conscience et présence',
        subtitle: 'Découvrez le héros qui sommeille en vous.',
        description: 'Cet accompagnement vous invite à ralentir, à vous poser et à respirer pour cultiver une présence plus profonde et authentique avec vous-même.',
        duration: '1h',
        price: 'Sur devis',
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
        title: 'Le Jeu du Tao Santé et Mieux-Être',
        subtitle: 'Devenez le héros de votre propre légende',
        description: 'Une expérience interactive et immersive destinée à des petits groupes de 4 personnes maximum. En 4/5 heures, chaque participant explore quatre mondes symboliques (terre, eau, feu, air) pour clarifier ses objectifs de bien-être et d\'équilibre de vie.',
        duration: '4/5 heures',
        price: '70€ par participant',
        modalities: ['Groupe de 4 personnes maximum', 'Minimum 3 participants'],
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
        title: 'Gestion du stress - MBSR',
        description: 'Programme pour apprendre à gérer le stress par la pleine conscience.',
        duration: '8 semaines',
        sessionDuration: '2h30 par séance',
        groupSize: '5 à 10 personnes',
        price: '330€',
        includes: [
            '8 séances de groupe',
            'Supports audio pour la pratique',
            'Manuel du participant'
        ],
        detailPage: '/programmes-mbsr'
    },
    {
        id: 'mbct',
        icon: Brain,
        title: 'Prévention des rechutes dépressives - MBCT',
        description: 'Programme combinant pleine conscience et thérapie cognitive pour prévenir les rechutes dépressives.',
        duration: '8 mois',
        sessionDuration: '2h par séance',
        groupSize: '5 à 10 personnes',
        price: '400€',
        includes: [
            '15 séances de groupe',
            'Exercices de thérapie cognitive',
            'Pratiques de pleine conscience',
            'Suivi personnalisé'
        ],
        detailPage: '/programmes-mbsr-mbct'
    },
    {
        id: 'mbcas',
        icon: Users,
        title: 'Accompagnement seniors - MBCAS',
        description: 'Programme adapté aux seniors pour bien vivre son avancé en age.',
        duration: '6 semaines',
        sessionDuration: '1h30 par séance',
        groupSize: '4 à 8 personnes',
        price: '330€',
        includes: [
            '6 séances adaptées',
            'Pratiques douces',
            'Accompagnement bienveillant',
            'Soutien de groupe'
        ],
        detailPage: '/programmes-mbsr-mbct'
    }
];

export const otherFormats = [
    {
        id: 'ateliers-education',
        icon: BookOpen,
        title: 'Ateliers en éducation à la santé',
        description: 'Ateliers thématiques pour apprendre à prendre soin de sa santé au quotidien.',
        duration: '2h à 3h',
        price: 'Sur devis selon le format',
        modalities: ['Entreprises', 'Associations', 'Particuliers'],
        highlight: true,
        detailPage: '/interventions-entreprises'
    },
    {
        id: 'conferences',
        icon: Presentation,
        title: 'Conférences & événements publics',
        description: 'Interventions sur la pleine conscience, la santé et le bien-être.',
        duration: '1h à 2h',
        price: 'Sur devis',
        modalities: ['Conférences', 'Tables rondes', 'Événements'],
        highlight: true,
        detailPage: '/interventions-entreprises'
    }
];
