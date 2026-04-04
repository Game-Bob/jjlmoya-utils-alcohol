import type { WithContext, SoftwareApplication } from 'schema-dts';
import type { PartyKegUI, PartyKegLocaleContent } from '../index';

const slug = 'calculateur-fete-fût';
const title = 'Calculateur de Bière pour Fêtes : Quantité par Personne, Mariage ou Anniversaire';
const description = 'Outil gratuit pour calculer la quantité de bière et de glace selon les invités, la durée et la température. Idéal pour les mariages, anniversaires et événements en plein air.';

const ui: PartyKegUI = {
  calcStockTitle: 'Calculateur de Stock',
  beerIceSub: 'Bière et Glace pour Événements',
  guestsLabel: 'Invités',
  durationLabel: 'Durée',
  hoursUnit: 'Heures',
  intensityLabel: 'Intensité',
  chillLabel: 'Chill',
  standardLabel: 'Standard',
  partyLabel: 'Party',
  tempLabel: 'Température',
  estimatedVolLabel: 'Volume Estimé',
  kegsLabel: 'Fûts',
  iceRequiredLabel: 'Glace Requise',
  bagsLabel: 'Sacs',
  visualizationTitle: 'Visualisation du Stock',
  optimalMsg: 'Conditions Optimales',
  highMeltMsg: 'Fonte Élevée Détectée',
  highEfficiencyMsg: 'Environnement Froid'
};

const faqTitle = 'Foire Aux Questions';
const bibliographyTitle = 'Bibliographie & Sources';

const faq: PartyKegLocaleContent['faq'] = [
  {
    question: "Combien de bières une personne boit-elle en 4 heures ?",
    answer: "En moyenne, on compte 1 à 1,5 bière par heure par personne pour une fête standard. Pour un événement plus intense comme un Beer Pong, cela peut monter à 2 ou plus.",
  },
  {
    question: "Combien de glace faut-il pour 100 bières ?",
    answer: "Il vous faudra environ 15 à 20 kilos de glace (7 à 10 sacs). La règle pratique est de 0,75 kg de glace par litre de boisson dans des conditions normales. En été ou en extérieur à plus de 25°C, montez à 1 kg par litre : la chaleur ambiante accélère la fonte et vous manquerez de glace bien plus tôt que prévu.",
  },
  {
    question: "Quelle est la différence entre un fût standard et un mini-fût ?",
    answer: "Un fût commercial standard contient 50 litres, soit environ 200 portions de 250ml. Un mini-fût de fête contient généralement 5 litres — environ 20 portions. Connaître ces volumes vous aide à convertir la sortie en litres du calculateur en nombre de contenants à acheter.",
  },
  {
    question: "Pourquoi ai-je besoin d'autant de glace si les bières sont déjà froides ?",
    answer: "Parce que refroidir et maintenir sont deux processus distincts. Amener une canette de 25°C à 4°C consomme la chaleur latente de fusion de la glace : environ 334 kJ/kg. Une fois froide, la glace continue de travailler pour compenser la chaleur ambiante. Par une journée d'été à 35°C, les transferts thermiques peuvent faire fondre 1 kg de glace par litre de boisson toutes les 2 à 3 heures. C'est pourquoi pré-refroidir les boissons avant la fête réduit la consommation de glace de moitié.",
  },
];

const howTo: PartyKegLocaleContent['howTo'] = [
  {
    name: "Saisir le nombre d'invités",
    text: "Entrez le nombre total de personnes attendues pour l'événement.",
  },
  {
    name: "Définir la durée et l'intensité",
    text: "Indiquez combien de temps durera la fête et quel est le 'vibe' (tranquille, standard ou fête intense).",
  },
  {
    name: "Ajuster la température ambiante",
    text: "La température extérieure influence directement la quantité de glace nécessaire pour garder les fûts au frais.",
  },
];

const bibliography: PartyKegLocaleContent['bibliography'] = [
  {
    name: "Event Planning: Alcohol & Bar Calculations - Spruce Eats",
    url: "https://www.thespruceeats.com/stock-your-bar-for-a-party-760394",
  },
  {
    name: "Thermodynamics of Ice Melting - Engineering Toolbox",
    url: "https://www.engineeringtoolbox.com/saturated-ice-steam-d_970.html",
  },
];

const seo: PartyKegLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Combien de Bière et de Glace pour ma Fête ?',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'Planifier un événement demande de la précision. Trop peu de bière et la fête s\'arrête avant l\'heure ; trop peu de glace et les boissons deviennent tièdes et imbuvables. Notre calculateur utilise des modèles de consommation basés sur des données réelles pour vous donner une estimation fiable, que vous organisiez une soirée intime ou un festival en plein air.'
  },
  {
    type: 'title',
    text: 'La Formule de Consommation par Personne',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'Pour estimer l\'alcool nécessaire, les traiteurs professionnels utilisent une formule basée sur le "Taux de Consommation Horaire". Ce n\'est pas une science exacte, mais les statistiques montrent qu\'à une fête standard, on consomme environ 1,5 unité par heure par personne. La chaleur ambiante, la disponibilité de nourriture et l\'ambiance générale influencent ce chiffre de base.'
  },
  {
    type: 'stats',
    items: [
      { label: 'Consommation Chill', value: '1 boisson/heure', icon: 'mdi:tea-outline' },
      { label: 'Fête Standard', value: '1,5 boisson/heure', icon: 'mdi:glass-mug-variant' },
      { label: 'Mariage / Festival', value: '2,5+ boissons/heure', icon: 'mdi:fire' }
    ],
    columns: 3
  },
  {
    type: 'diagnostic',
    title: 'La Physique de la Glace',
    icon: 'mdi:snowflake-thermometer',
    variant: 'warning',
    badge: 'Thermodynamique',
    html: 'Calculer la glace est l\'erreur la plus courante des organisateurs de fêtes. La glace remplit deux fonctions : Refroidir (amener la bière de 25°C à 4°C) et Maintenir (lutter contre la chaleur ambiante). À des températures supérieures à 30°C, la vitesse de fonte double. Un sac de glace complet en plein soleil peut disparaître en moins de 20 minutes.'
  },
  {
    type: 'tip',
    title: 'Conseil Professionnel pour Économiser la Glace',
    html: 'Gardez les fûts et les canettes à l\'ombre avant d\'ajouter de la glace. Si les boissons sont chaudes au soleil, les 50% de votre premier sac de glace disparaîtront en 10 minutes uniquement en échangeant la chaleur latente. Commencez avec des boissons pré-refroidies pour réduire drastiquement la quantité de glace nécessaire.'
  },
  {
    type: 'title',
    text: 'Données de Référence pour la Logistique',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'Un fût standard de 50L donne environ 200 portions. Un sac de glace typique pèse 2kg. En connaissant ces chiffres, vous pouvez planifier le transport et le stockage nécessaires à votre événement sans mauvaises surprises de dernière minute. Comptez également la fonte pendant le transport — un trajet de 30 minutes en été peut vous coûter un sac entier avant même le début de la fête.'
  },
  {
    type: 'summary',
    title: 'À qui s\'adresse cet outil ?',
    items: [
      'Hôtes de fêtes privées : Achetez exactement ce dont vous avez besoin pour votre prochaine célébration.',
      'Organisateurs d\'événements : Utilisez des modèles de consommation précis pour planifier la logistique du bar.',
      'Gérants de lieux : Standardisez les calculs de stock pour des événements récurrents avec des nombres d\'invités variables.'
    ]
  },
  {
    type: 'paragraph',
    html: 'Une variable souvent négligée est le <strong>taux d\'abandon des invités</strong>. Dans la plupart des fêtes, 10 à 15 % des invités partent tôt et 10 % peuvent ne pas boire du tout. Le calculateur applique une marge de sécurité conservatrice pour que vous ne soyez jamais à court, sans pour autant vous retrouver avec un surplus énorme. Comprendre ces ajustements vous aide à affiner l\'estimation pour votre groupe et contexte spécifiques.'
  }
];

const schemas: PartyKegLocaleContent['schemas'] = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: title,
    description: description,
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  } as WithContext<SoftwareApplication>,
];

export const content: PartyKegLocaleContent = {
  slug,
  title,
  description,
  ui,
  seo,
  faqTitle,
  faq,
  bibliographyTitle,
  bibliography,
  howTo,
  schemas,
};
