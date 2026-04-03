import type { WithContext, SoftwareApplication } from 'schema-dts';
import type { AlcoholClearanceUI, AlcoholClearanceLocaleContent } from '../index';

const slug = 'calculateur-elimination-alcohol';
const title = 'Calculateur d\'Alcooolémie et Métabolisme';
const description = 'Estimez votre taux d\'alcoolémie (BAC) et le temps nécessaire à votre corps pour éliminer l\'alcool selon la formule de Widmark.';

const ui: AlcoholClearanceUI = {
  biologicalSexLabel: 'Sexe Biologique',
  weightLabel: 'Poids Corporel',
  kgUnit: 'kg',
  addDrinkLabel: 'Ajouter une Boisson',
  beerLabel: 'Bière',
  wineLabel: 'Vin',
  spiritLabel: 'Cocktail',
  shotLabel: 'Shot',
  accumulatedLabel: 'Consommation Cumulée',
  emptyListLabel: 'Votre liste est vide',
  emptySubLabel: 'Sélectionnez des boissons pour calculer.',
  estimatedBacLabel: 'Alcoolémie Estimée',
  bacUnit: 'BAC',
  timeToZeroLabel: 'pour être à 0.0',
  waterAdviceLabel: 'Eau (Avant de dormir)',
  pillAdviceLabel: 'Suppléments',
  noneAdvice: 'Pas besoin',
  hydrationAdvice: 'Priorité Hydratation',
  electrolytesAdvice: 'Électrolytes + Vit. B',
  disclaimerText: 'Ce calculateur est une estimation théorique. Le métabolisme et l\'alimentation font varier le résultat. Si vous buvez, ne conduisez pas.',
  drinkUnit: 'boisson',
  drinksUnit: 'boissons'
};

const faqTitle = 'Foire Aux Questions';
const bibliographyTitle = 'Bibliographie & Sources';

const faq: AlcoholClearanceLocaleContent['faq'] = [
  {
    question: "Qu'est-ce que la formule de Widmark ?",
    answer: "C'est le modèle standard de pharmacocinétique qui relie la quantité d'alcool ingérée au poids corporel et à un facteur de distribution selon le sexe biologique.",
  },
  {
    question: "Le café peut-il accélérer l'élimination de l'alcool ?",
    answer: "Non. Le foie élimine l'alcool à un taux constant (environ 0,15 g/L par heure). Le café peut vous réveiller, mais ne réduit pas le taux d'alcool dans le sang.",
  },
  {
    question: "Pourquoi le sexe biologique affecte-t-il le calcul de l'alcoolémie ?",
    answer: "Le sexe biologique influence le facteur de Widmark 'r', qui représente l'eau corporelle totale en fraction du poids. Les hommes ont en moyenne r=0,68 car ils ont proportionnellement plus d'eau corporelle. Les femmes ont en moyenne r=0,55 en raison d'un pourcentage plus élevé de graisses corporelles, qui retiennent moins l'alcool. Ainsi, à boissons et poids égaux, les femmes auront un BAC plus élevé.",
  },
];

const bibliography: AlcoholClearanceLocaleContent['bibliography'] = [
  {
    name: "Widmark's Formula for BAC Calculation - Forensic Science Lab",
    url: "https://www.forensic-science.com/widmark-formula",
  },
  {
    name: "Alcohol Metabolism: How the body processes alcohol - NIH",
    url: "https://www.niaaa.nih.gov/publications/alcohol-metabolism",
  },
];

const howTo: AlcoholClearanceLocaleContent['howTo'] = [
  {
    name: "Configurer votre profil",
    text: "Sélectionnez votre sexe biologique (influence le pourcentage d'eau corporelle) et votre poids actuel.",
  },
  {
    name: "Ajouter les boissons consommées",
    text: "Cliquez sur les icônes des boissons que vous avez prises. Elles s'accumuleront dans la liste ci-dessous.",
  },
  {
    name: "Vérifier les temps de sécurité",
    text: "Observez le BAC estimé et, surtout, le temps que le foie mettra à traiter tout l'éthanol ingéré.",
  },
];

const seo: AlcoholClearanceLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Métabolisme de l\'Alcool : Science et Élimination',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'Comprendre comment notre corps traite l\'éthanol est essentiel pour la sécurité et pour atténuer les gueules de bois. Notre <strong>calculateur d\'élimination d\'alcool</strong> utilise la célèbre <strong>Formule de Widmark</strong> pour vous offrir une carte claire de votre état métabolique. L\'alcool ne s\'élimine pas en transpirant, en buvant de l\'eau ou en faisant de l\'exercice — seuls le temps et le métabolisme hépatique peuvent réduire votre alcoolémie.'
  },
  {
    type: 'diagnostic',
    title: 'La Pharmacocinétique de l\'Alcoolémie',
    icon: 'mdi:gender-male-female',
    variant: 'info',
    badge: 'Biochimie',
    html: 'L\'alcool se distribue dans l\'eau corporelle. Des facteurs comme le poids et le coefficient de Widmark r (0,68 chez les hommes / 0,55 chez les femmes) déterminent la dilution initiale de l\'éthanol dans le sang. C\'est pourquoi deux personnes du même poids peuvent avoir des alcoolémies très différentes après avoir consommé les mêmes boissons.'
  },
  {
    type: 'title',
    text: 'Oxydation Hépatique et Enzymes',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'Le foie dégrade 95 % de l\'alcool via l\'Alcool Déshydrogénase (ADH). Ce processus se déroule à une vitesse constante (cinétique d\'ordre zéro), ce qui signifie qu\'il ne peut pas être accéléré par l\'exercice ou le café. Les 5 % restants sont éliminés par la respiration, l\'urine et la transpiration — c\'est la base des éthylotests utilisés dans le contrôle routier.'
  },
  {
    type: 'stats',
    items: [
      { label: 'Taux d\'Élimination', value: '0,15 g/L·h', icon: 'mdi:clock-fast' },
      { label: 'Absorption Gastrique', value: '20% Éthanol', icon: 'mdi:stomach' },
      { label: 'Hydratation Suggérée', value: '1:1 Eau/Verre', icon: 'mdi:water' }
    ],
    columns: 3
  },
  {
    type: 'proscons',
    title: 'Mythes vs Réalité',
    items: [
      { pro: 'L\'eau et les électrolytes avant de dormir réduisent la sévérité de la gueule de bois.', con: '' },
      { pro: '', con: 'Douches froides : Elles n\'affectent pas du tout le taux d\'alcoolémie.' },
      { pro: '', con: 'Café : Masque la somnolence mais ne restaure pas les réflexes ni les fonctions cognitives.' }
    ]
  },
  {
    type: 'card',
    title: 'Qu\'est-ce qui Cause la Gueule de Bois ?',
    icon: 'mdi:alert-decagram',
    html: 'Connue scientifiquement sous le nom de véisalgie, la gueule de bois est causée par une déshydratation systémique (suppression de la vasopressine par l\'éthanol), l\'accumulation d\'acétaldéhyde (un métabolite toxique) et une réponse inflammatoire immunitaire à cytokines. Le rebond du glutamate cérébral après la suppression par l\'alcool contribue également à l\'anxiété et à la sensibilité à la lumière.'
  },
  {
    type: 'tip',
    title: 'Sécurité Avant Tout : Connaissez Votre Limite',
    html: 'Un BAC de 0,05 % altère mesuralement le jugement, la coordination et le temps de réaction. La plupart des pays fixent la limite légale de conduite entre 0,05 % et 0,08 %. Cependant, la sensibilité individuelle varie considérablement — l\'âge, les médicaments, la fatigue et les variants génétiques de l\'enzyme ADH influencent tous la façon dont l\'alcool vous affecte personnellement. En cas de doute, ne conduisez pas.'
  },
  {
    type: 'paragraph',
    html: 'Manger avant ou pendant la consommation d\'alcool modifie considérablement la cinétique d\'absorption. La nourriture dans l\'estomac — notamment les protéines et les graisses — ralentit la vidange gastrique, réduisant le taux de pic auquel l\'éthanol entre dans le sang. Une personne qui boit à jeun peut atteindre un BAC maximal 50 % plus élevé que la même personne ayant mangé un repas complet avant de boire la même quantité. C\'est l\'une des variables les plus puissantes que la formule de Widmark ne peut pas pleinement capturer, raison pour laquelle notre calculateur inclut une clause de non-responsabilité sur l\'estimation théorique.'
  }
];

const schemas: AlcoholClearanceLocaleContent['schemas'] = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: title,
    description: description,
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  } as WithContext<SoftwareApplication>,
];

export const content: AlcoholClearanceLocaleContent = {
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
