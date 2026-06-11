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
  { label: 'Projets', href: '#projets' },
  { label: 'Tarifs', href: '#tarifs' },
  { label: 'Contact', href: '#contact' },
]

export const SERVICES = [
  {
    icon: '◈',
    title: 'Design UI/UX',
    description:
      'Interfaces élégantes et intuitives qui convertissent les visiteurs. Chaque pixel est une décision.',
    tags: ['Figma', 'Prototypage', 'UX Research'],
  },
  {
    icon: '⬡',
    title: 'Développement Web',
    description:
      'Code propre, rapide, scalable. Sites vitrine, apps web, e-commerce.',
    tags: ['React', 'Next.js', 'TypeScript'],
  },
  {
    icon: '◎',
    title: 'Identité de Marque',
    description:
      "Identité visuelle cohérente qui parle avant même qu'on lise un mot.",
    tags: ['Logo', 'Charte graphique', 'Motion'],
  },
]

export const STATS = [
  { value: 5, suffix: '', label: 'Projets livrés' },
  { value: 100, suffix: '%', label: 'Clients satisfaits' },
  { value: 12, suffix: ' mois', label: "D'expérience" },
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
    badge: 'Réponse < 24h',
    title: 'À votre écoute',
    description:
      'Vos retours sont intégrés sous 24h. Communication directe, humaine, réactive.',
  },
]

export const TRUST_BADGES = [
  'Réponse garantie en moins de 24 heures',
  "Point quotidien sur l'avancement",
  'Modifications illimitées pendant le projet',
]

export const PLANS = [
  {
    id: 'vitrine',
    name: 'Vitrine',
    recommended: false,
    creation: 250,
    monthly: 100,
    annualMonthly: 80,
    delivery: '15 jours',
    features: [
      "Site jusqu'à 5 pages",
      'Design sur-mesure responsive',
      'SEO de base',
      'Formulaire de contact',
      'Hébergement',
      'Mises à jour de contenu',
      'Support prioritaire',
      'Rapport mensuel',
    ],
  },
  {
    id: 'pro',
    name: 'Pro',
    recommended: true,
    creation: 350,
    monthly: 175,
    annualMonthly: 140,
    delivery: '7 jours',
    features: [
      "Site jusqu'à 8 pages",
      'Design premium',
      'SEO avancé',
      'Chatbot IA personnalisé',
      'Formulaires & animations',
      'Hébergement',
      'Mises à jour illimitées',
      'Support 7j/7',
      'Analytics dashboard',
    ],
  },
]

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Découverte',
    description:
      "Appel 30 min pour comprendre vos objectifs, votre audience et ce qui vous différencie.",
  },
  {
    step: '02',
    title: 'Conception',
    description:
      "Maquettes et prototypes. Vous voyez le résultat avant la moindre ligne de code.",
  },
  {
    step: '03',
    title: 'Production',
    description:
      "Développement itératif avec check-ins réguliers. Aucune surprise en fin de projet.",
  },
  {
    step: '04',
    title: 'Livraison',
    description:
      "Mise en ligne, formation et support post-lancement inclus. Vous repartez avec les clés.",
  },
]

export const TESTIMONIALS = [
  {
    name: 'Sophie M.',
    role: 'CEO, Maison Éclat',
    quote:
      "Une vision claire dès le premier appel. Le résultat final a dépassé mes attentes — et nos ventes avec.",
    rating: 5,
  },
  {
    name: 'Lucas B.',
    role: 'Fondateur, Pulse',
    quote:
      "Livré en avance, sans un seul bug. Rare. L'interface est devenue notre meilleur argument de vente.",
    rating: 5,
  },
  {
    name: 'Camille V.',
    role: 'Directrice, Studio Forma',
    quote:
      "L'identité qu'on a créée ensemble parle mieux de nous que n'importe quel discours commercial.",
    rating: 5,
  },
]

export const CHATBOT_SYSTEM_PROMPT = `Tu es l'assistant virtuel de JDesign, l'agence freelance de Jean-Denis Cuenin.
Réponds toujours en français, de manière professionnelle mais chaleureuse.
Sois concis (3-4 phrases max).

Informations JDesign :
- Email : jdwebdesign64@hotmail.com
- Téléphone : 07 82 75 59 24
- Services : Design UI/UX, Développement web, Identité de marque
- Offre Vitrine : 250€ création (15 jours) puis 100€/mois sans engagement
- Offre Pro : 350€ création (7 jours) + chatbot IA puis 175€/mois sans engagement
- Accompagnement : suivi journalier, réponse < 24h, modifs illimitées
- Hébergement + domaine inclus 1ère année

Pour toute demande de devis : rediriger vers jdwebdesign64@hotmail.com ou 07 82 75 59 24.`
