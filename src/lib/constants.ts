export const BRAND = 'JDesign'
export const EMAIL = 'jdwebdesign64@hotmail.com'
export const PHONE = '07 82 75 59 24'
export const PHONE_HREF = 'tel:+33782755924'
export const EMAIL_HREF = `mailto:${EMAIL}`

export const MARQUEE_ITEMS = [
  'Création de sites',
  'À l\'écoute de vos attentes',
  'Un projet bâti ensemble',
  'Vous ne vous occupez de rien',
  'Sites modernes et sécurisés',
]

export const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Tarifs', href: '#tarifs' },
  { label: 'Contact', href: '#contact' },
]

export const SERVICES = [
  {
    icon: '◈',
    title: 'Premiere étape : analyse',
    description:
      'Comprendre vos besoins, vos objectifs et votre public cible pour créer une solution sur mesure.',
    tags: ['écoute', 'photos', 'étude du projet'],
  },
  {
    icon: '⬡',
    title: 'Développement Web',
    description:
      "J'applique vos attentes, fais une maquette pour mettre en place la suite de la premiere étape.",
    tags: ['codage du site en local', 'maquette', 'présentation du prototype'],
  },
  {
    icon: '◎',
    title: 'Identité de Marque',
    description:
      "Identité visuelle cohérente qui parle avant même qu'on lise un mot.",
    tags: ['Logo', 'véritable cohérence entre votre boutique et votre identité', 'présentation complete du site'],
  },
]

export const STATS = [
  { value: 14, suffix: '', label: 'Jours max pour livrer le site' },
  { value: 100, suffix: '%', label: 'Personnalisable' },
  { value: 12, suffix: ' H', label: 'Temps de réponse' },
]

export const PROJECTS = [
  {
    title: 'Maison Éclat',
    category: 'E-commerce · Design + Dev',
    description: 'Refonte complète pour une marque de luxe. +340% de conversions.',
    bg: '#1A1A22',
    accent: '#E8D5B0',
  },
  {
    title: 'Studio Forma',
    category: 'Identité de marque',
    description: "Branding complet pour un studio d'architecture.",
    bg: '#12180F',
    accent: '#C5F135',
  },
  {
    title: 'Pulse App',
    category: 'Produit SaaS · UI/UX',
    description: 'Dashboard analytics repensé pour 12 000 utilisateurs actifs.',
    bg: '#0F1520',
    accent: '#5B8EFF',
  },
]

export const COMMITMENTS = [
  {
    icon: '◉',
    badge: 'Tout inclus',
    title: 'Accompagnement complet',
    description:
      "De l'idée à la mise en ligne, à vos côtés à chaque étape. Stratégie, design, développement, référencement.",
  },
  {
    icon: '◈',
    badge: 'Chaque jour',
    title: 'Suivi journalier',
    description:
      "Chaque jour ouvré, vous recevez un point d'avancement. Vous savez exactement où en est votre projet.",
  },
  {
    icon: '◎',
    badge: 'Réponse < 12h',
    title: 'À votre écoute',
    description:
      'Vos retours sont intégrés sous 12h. Communication directe, humaine, réactive.',
  },
]

export const TRUST_BADGES = [
  'Réponse garantie en moins de 12 heures',
  "Point quotidien sur l'avancement",
  'Modifications illimitées pendant le projet',
]

export const PLANS = [
  {
    id: 'vitrine',
    name: 'Économique',
    recommended: false,
    creation: 500,
    monthly: 90,
    annualMonthly: 72,
    delivery: '14 jours',
    features: [
      'Site vitrine',
      'Design sur-mesure ensemble',
      'SEO de base',
      'Nom de domaine',
      'Hébergement',
      'Mises à jour de contenu',
      'Débrief mensuel',
    ],
  },
  {
    id: 'pro',
    name: 'Pro',
    recommended: true,
    creation: 800,
    monthly: 130,
    annualMonthly: 104,
    delivery: '14 jours',
    features: [
      'Inclut tous les services du plan Économique',
      'Référencement (SEO) premium',
      'Stratégie de contenu',
      'Chatbot IA personnalisé',
      'Animations du site',
      "Création d'un logo",
      'Mises à jour illimitées',
      'Support 7j/7',
      'Dashboard que vous contrôlez',
      'Choix entre deux maquettes',
    ],
  },
]

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Découverte',
    description: 'Entretien physique, prises de notes sur vos attentes.',
  },
  {
    step: '02',
    title: 'Conception',
    description: "Maquettes et prototypes. Vous voyez le résultat avant la moindre ligne de code.",
  },
  {
    step: '03',
    title: 'Production',
    description: "Je vous montre le résultat. Aucune surprise en fin de projet.",
  },
  {
    step: '04',
    title: 'Livraison',
    description: "Mise en ligne, formation et support post-lancement inclus. Vous repartez avec les clés.",
  },
]

export const TESTIMONIALS = [
  {
    name: 'Laetitia L.',
    role: 'Laetitia Hypnothérapeute',
    quote:
      "Encadrement complet, a su être à mon écoute pour valoriser mon activité.",
    rating: 5,
  },
  {
    name: 'Lucas B.',
    role: '',
    quote:
      "Livré en avance, sans un seul bug. Rare. L'interface est devenue notre meilleur argument de vente.",
    rating: 5,
  },
  {
    name: 'Camille V.',
    role: '',
    quote:
      "L'identité qu'on a créée ensemble parle mieux de nous que n'importe quel discours commercial.",
    rating: 5,
  },
]

export const CHATBOT_SYSTEM_PROMPT = `Tu es l'assistant virtuel de JDesign, studio freelance de design et développement web.
Réponds toujours en français, de manière professionnelle mais chaleureuse.
Sois concis (3-4 phrases max par réponse).

Informations JDesign :
- Email : jdwebdesign64@hotmail.com
- Téléphone : 07 82 75 59 24
- Services : Design UI/UX, Développement web (Next.js), Identité de marque
- Plan Économique : 500€ création (14 jours max) puis 90€/mois sans engagement
- Plan Pro : 800€ création (14 jours max) puis 130€/mois sans engagement
- Les deux plans incluent : hébergement + domaine 1ère année, modifications illimitées, suivi quotidien
- Réponse garantie en moins de 12h
- Devis gratuit, sans engagement

Pour toute demande de devis ou question précise : rediriger vers jdwebdesign64@hotmail.com ou 07 82 75 59 24.
Ne jamais inventer d'informations. Si tu ne sais pas, redirige vers le contact.`
