import type { WithContext, SoftwareApplication } from 'schema-dts';
import type { CarbonationUI, CarbonationLocaleContent } from '../index';

const slug = 'calculateur-carbonatation-biere';
const title = 'Calculateur de Carbonatation et Priming';
const description = 'Calculez les grammes exacts de Dextrose, Sucre de Table ou DME (Extrait de Malt Sec) pour embouteiller votre bière artisanale. Entrez le volume, la température de fermentation et le style pour un priming parfait.';

const ui: CarbonationUI = {
  parametersTitle: 'Paramètres',
  metricBtn: 'Métrique',
  imperialBtn: 'Impérial',
  volumeLabel: 'Volume de Bière',
  maxTempLabel: 'Température Maximale',
  litersUnit: 'Litres',
  celsiusUnit: '°C',
  gallonsUnit: 'Gallons',
  fahrenheitUnit: '°F',
  desiredCo2Label: 'Carbonatation Souhaitée',
  volUnit: 'Vol CO2',
  resultsTitle: 'Résultats de Priming',
  tableSugarLabel: 'Sucre de Table',
  cornSugarLabel: 'Dextrose (Maïs)',
  dmeLabel: 'Extrait de Malt Sec (DME)',
  safetyTitle: 'DANGER EXPLOSION !',
  lowCarbonation: 'FAIBLE CARBONATATION',
  optimalCarbonation: 'CARBONATATION OPTIMALE',
  highEffervescence: 'HAUTE EFFERVESCENCE',
  bubblingVisualizationLabel: 'Visualisation approximative des bulles'
};

const faqTitle = 'Foire Aux Questions';
const bibliographyTitle = 'Bibliographie & Sources';

const faq: CarbonationLocaleContent['faq'] = [
  {
    question: "Pourquoi la température influence-t-elle le calcul ?",
    answer: "Le CO2 résiduel dans votre bière dépend de la température maximale atteinte après la fermentation : un liquide froid retient plus de gaz dissous qu'un liquide chaud. Si vous entrez une température inférieure à la réalité, le calculateur suppose plus de CO2 résiduel qu'il n'en existe et vous donne moins de sucre que nécessaire. À l'inverse, une température trop haute vous pousse à ajouter trop de sucre et fait basculer votre lot dans la zone de danger des bombes de bouteilles — des bouteilles qui explosent sous l'excès de pression.",
  },
  {
    question: "Quel sucre est le meilleur pour le priming ?",
    answer: "Le dextrose (sucre de maïs) est préféré car il est neutre et se dissout rapidement. Le sucre de table fonctionne bien mais nécessite environ 10 % de poids en moins.",
  },
  {
    question: "Que se passe-t-il si j'ajoute trop de sucre de priming ?",
    answer: "Un excès de sucre génère une pression de CO2 excessive à l'intérieur de la bouteille. Les bouteilles en verre standard cèdent à environ 3,5-4,0 volumes de CO2. Au-delà, la bouteille peut se rompre violemment ou le bouchon peut sauter. C'est pourquoi la précision est essentielle — même 5 grammes de plus par litre peuvent faire basculer un lot dans la zone de danger.",
  },
  {
    question: "Combien de temps faut-il pour que la bière se carbonate après la mise en bouteille ?",
    answer: "Entre 2 et 3 semaines à température ambiante (18-22°C) est la plage habituelle pour que la levure fermente complètement le sucre ajouté et que le CO2 s'intègre au liquide. Ouvrir une bouteille avant la fin du processus donne toujours un résultat trompeur : la bière semblera peu carbonatée alors que la carbonatation est toujours en cours. Avec le DME, le processus peut être légèrement plus lent en raison de la complexité de ses sucres fermentescibles.",
  },
];

const howTo: CarbonationLocaleContent['howTo'] = [
  {
    name: "Mesurer le volume réel",
    text: "Indiquez combien de litres (ou gallons) de bière vous avez prêts à être embouteillés une fois la fermentation terminée.",
  },
  {
    name: "Définir la température de fermentation",
    text: "Entrez la température la plus élevée atteinte par la bière pendant ou après la fermentation active.",
  },
  {
    name: "Choisir le style ou le volume de CO2",
    text: "Sélectionnez le niveau de carbonatation souhaité. Les styles varient de 1,5 (Stouts) à 4,5 (Wheat Beers).",
  },
];

const bibliography: CarbonationLocaleContent['bibliography'] = [
  {
    name: "How to Brew: Carbonation Tables - John Palmer",
    url: "https://howtobrew.com/section-1/chapter-11/",
  },
  {
    name: "BJCP Style Guidelines: Carbonation Levels",
    url: "https://www.bjcp.org/style/2021/beer/",
  },
];

const seo: CarbonationLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Guide Ultime de Carbonatation et Priming',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'Maîtrisez l\'art du "priming" et transformez votre bière artisanale d\'une expérience plate en une expérience effervescente professionnelle. Le priming consiste à ajouter une quantité précise de sucre pour que la levure résiduelle dans la bouteille génère du CO2 naturel lors d\'une fermentation secondaire. Trop peu de sucre donne une bière plate ; trop en génère une pression dangereuse qui peut briser les bouteilles. La différence tient à quelques grammes — voilà pourquoi ce calculateur existe.'
  },
  {
    type: 'proscons',
    title: 'Facteurs Critiques de Succès',
    items: [
      { pro: 'Température : Le CO2 résiduel dépend du pic thermique post-fermentation.', con: '' },
      { pro: 'Précision : 5 grammes supplémentaires par litre peuvent faire la différence entre une bonne bière et un geyser.', con: '' },
      { pro: '', con: 'Oxydation : Évitez de faire gicler le liquide lors du transfert pour mélanger le sucre de priming.' }
    ]
  },
  {
    type: 'title',
    text: 'Volumes de CO2 par Style de Bière',
    level: 2
  },
  {
    type: 'stats',
    items: [
      { label: 'British Stouts', value: '1,5 - 2,0 Vol', icon: 'mdi:beer' },
      { label: 'IPAs & Ales', value: '2,2 - 2,6 Vol', icon: 'mdi:hops' },
      { label: 'German Wheat', value: '3,3 - 4,5 Vol', icon: 'mdi:barley' }
    ],
    columns: 3
  },
  {
    type: 'card',
    title: 'Quel Sucre Choisir ?',
    icon: 'mdi:corn',
    html: 'Le <strong>Dextrose</strong> est neutre et professionnel — le standard de l\'industrie. Le <strong>Sucre de Table</strong> est économique et efficace (utilisez 10% de moins en poids). Le <strong>DME (Extrait de Malt Sec)</strong> est le choix du puriste mais plus difficile à prédire avec précision car sa fermentabilité varie selon la marque et la composition du malt.'
  },
  {
    type: 'diagnostic',
    title: 'Avertissement de Sécurité',
    icon: 'mdi:alert-decagram',
    variant: 'error',
    badge: 'Danger',
    html: 'Les bouteilles en verre standard cèdent à 3,5-4,0 volumes de CO2. N\'essayez pas de carbonater des styles belges ou de blé dans du verre mince. Utilisez toujours des bouteilles homologuées pour les boissons pétillantes, et n\'utilisez jamais des bouteilles commerciales recyclées qui peuvent présenter des dommages structurels microscopiques.'
  },
  {
    type: 'tip',
    title: 'Conseil Pro : Dissoudre Correctement le Sucre',
    html: 'Faites toujours bouillir votre solution de sucre de priming (sucre dissous dans environ 250ml d\'eau pour 20L de bière) pendant 10 minutes avant de l\'ajouter à la bière. L\'ébullition assainit la solution et garantit une distribution homogène dans tout le lot, évitant les points chauds qui causent une carbonatation inégale entre les bouteilles.'
  },
  {
    type: 'summary',
    title: 'À qui s\'adresse cet outil ?',
    items: [
      'Brasseurs Amateurs : Obtenez le calcul exact de sucre de priming pour toute taille de lot, style et température.',
      'Passionnés de Bière Artisanale : Comprenez la science derrière les différents niveaux de carbonatation des bières commerciales.',
      'Brasseurs Professionnels : Vérifiez les calculs manuels avant d\'embouteiller des lots commerciaux importants.'
    ]
  },
  {
    type: 'title',
    text: 'La Science de la Carbonatation : Loi de Henry',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'Au fond, la carbonatation est régie par la <strong>Loi de Henry</strong> : la quantité de gaz dissous dans un liquide est proportionnelle à la pression partielle de ce gaz au-dessus du liquide. Quand vous primez une bouteille et la scellez, la levure consomme le sucre et produit du CO2 dans un environnement fermé. La pression augmente et le gaz est forcé de se redissoudre dans le liquide. La température à laquelle cet équilibre se produit détermine le niveau de carbonatation final — c\'est pourquoi la température de fermentation est la variable la plus critique dans ce calculateur.'
  },
  {
    type: 'paragraph',
    html: 'Le CO2 résiduel dans votre bière avant le priming n\'est pas nul. Chaque bière retient du CO2 dissous issu de la fermentation, et la quantité retenue dépend de la température maximale atteinte par la bière. Une bière fermentée à 22°C retient beaucoup moins de CO2 résiduel qu\'une fermentée à 16°C, même si elles sont maintenant toutes deux refroidies. Ne pas en tenir compte entraîne une sur-carbonatation systématique — l\'une des erreurs les plus courantes des brasseurs débutants.'
  }
];

const schemas: CarbonationLocaleContent['schemas'] = [
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

export const content: CarbonationLocaleContent = {
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
