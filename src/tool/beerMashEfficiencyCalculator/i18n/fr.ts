import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { BeerMashEfficiencyCalculatorUI } from '../ui';

const slug = 'calculateur-rendement-brassage-biere';
const title = 'Calculateur de rendement de brassage du grain';
const description = 'Calculez le pourcentage d\'efficacité de brassage, l\'extraction des sucres et la densité initiale prévue pour le brassage amateur.';

const ui: BeerMashEfficiencyCalculatorUI = {
  unitMetric: 'Métrique',
  stagePreboil: 'Moût avant ébullition',
  stagePostboil: 'Moût après ébullition',
  unitImperial: 'Impérial',
  labels: {
    grainWeight: 'Poids total du grain',
    grainType: 'Potentiel du malt',
    customPotential: 'Potentiel personnalisé (SG)',
    wortVolume: 'Volume de moût',
    measuredSg: 'Densité mesurée (SG)',
    unitSystem: 'Système d\'unités',
    sampleTemp: 'Température échantillon',
    calibTemp: 'Température étalonnage',
    stageLabel: 'Étape de brassage',
    presets: 'Potentiels courants',
  },
  units: {
    weightKg: 'kg',
    weightLb: 'lb',
    volumeL: 'L',
    volumeGal: 'gal',
    sg: 'SG',
    brix: 'Brix',
    percent: '%',
    tempC: '°C',
    tempF: '°F',
  },
  grainPresets: {
    pilsner: 'Malt Pilsen (1.037 / 37 PPG)',
    pale_ale: 'Malt Pale Ale (1.038 / 38 PPG)',
    vienna: 'Malt Viennois (1.036 / 36 PPG)',
    munich: 'Malt Munich (1.035 / 35 PPG)',
    wheat: 'Malt de blé (1.038 / 38 PPG)',
    caramel_30: 'Caramel 30L (1.034 / 34 PPG)',
    caramel_60: 'Caramel 60L (1.034 / 34 PPG)',
    chocolate: 'Malt chocolat (1.034 / 34 PPG)',
    custom: 'Potentiel personnalisé...',
  },
  results: {
    efficiencyTitle: 'Efficacité de brassage',
    efficiencyBadge: 'Statut calculé',
    correctedGravity: 'SG corrigée en température',
    measuredGravity: 'Densité mesurée',
    expectedGravity75: 'SG à 75%',
    expectedGravity80: 'SG à 80%',
    expectedGravity85: 'SG à 85%',
    potentialPoints: 'Points potentiels totaux',
    extractedPoints: 'Points extraits mesurés',
    wortBrix: 'Brix estimé',
  },
  statusMessages: {
    excellent: 'Excellente extraction (82%+)',
    good: 'Bonne efficacité (74% - 81%)',
    average: 'Efficacité moyenne (65% - 73%)',
    poor: 'Faible extraction (< 65%)',
  },
  kettleVisual: {
    mashTunTitle: 'Extraction en cuve de brassage',
    wortLevel: 'Niveau de moût',
    sugarExtraction: 'Extraction de sucres',
  },
};

const faq = [
  {
    question: 'Qu\'est-ce que l\'efficacité de brassage en brasserie ?',
    answer: 'L\'efficacité de brassage mesure le pourcentage de sucres potentiels extraits des grains de malt dans le moût avant ébullition.',
  },
  {
    question: 'Quel est un bon pourcentage d\'efficacité ?',
    answer: 'Pour le brassage amateur, une efficacité comprise entre 70% et 80% est considérée comme très satisfaisante.',
  },
  {
    question: 'Comment calcule-t-on l\'efficacité de brassage ?',
    answer: 'On compare la quantité totale de points de densité extraits dans le moût au potentiel théorique maximal des grains.',
  },
  {
    question: 'Comment améliorer une efficacité insuffisante ?',
    answer: 'Ajustez la finesse du concassage, maintenez le pH du moût entre 5.2 et 5.6 et effectuez un rinçage régulier du gâteau de drêches.',
  },
  {
    question: 'Quelle différence entre efficacité de brassage et efficacité globale ?',
    answer: 'L\'efficacité de brassage mesure uniquement l\'extraction en cuve. L\'efficacité globale inclut les pertes dans la cuve d\'ébullition et le fermenteur.',
  },
  {
    question: 'Quel est l\'impact du ratio eau-grain ?',
    answer: 'Un moût plus fluide (3.5 à 4.0 L par kg) facilite l\'action enzymatique et le rinçage des sucres.',
  }
];

const howTo = [
  {
    name: 'Choisir le système d\'unités',
    text: 'Sélectionnez le système métrique ou impérial.',
  },
  {
    name: 'Saisir le poids et le potentiel du grain',
    text: 'Choisissez le type de malt ou entrez une valeur personnalisée.',
  },
  {
    name: 'Indiquer le volume de moût et la densité',
    text: 'Entrez le volume récolté avant ébullition et la valeur du densimètre.',
  },
  {
    name: 'Examiner le rendement et les objectifs',
    text: 'Comparez votre densité aux cibles de 75%, 80% et 85%.',
  },
  {
    name: 'Ajuster la recette pour le prochain brassin',
    text: 'Utilisez cette base pour calibrer avec précision vos futurs brassins.',
  }
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howTo.map((step, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
    name: step.name,
    text: step.text,
  })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'fr',
};

export const content: ToolLocaleContent<Record<string, any>> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Questions fréquentes sur le rendement de brassage',
  bibliographyTitle: 'Références et formules',
  faq,
  howTo,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    {
      type: 'title',
      text: 'Comprendre l\'efficacité de brassage',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'L\'efficacité de brassage mesure la capacité à convertir les amidons du grain en sucres fermentescibles et à les récupérer dans le moût. Elle est essentielle pour formuler des recettes fiables.',
    },
    {
      type: 'table',
      headers: ['Paramètre', 'Formule', 'Description'],
      rows: [
        ['Points potentiels', 'Poids x PPG du grain', 'Maximum théorique de points'],
        ['Points extraits', 'Volume x points SG mesurés', 'Points réels dans le moût'],
        ['Efficacité de brassage', '(Points extraits / Potentiel) x 100', 'Pourcentage réel d\'extraction'],
        ['Degrés Brix du moût', '-668.82 + 11.536 x SG x 100...', 'Équivalent réfractomètre']
      ],
    },
    {
      type: 'title',
      text: 'Facteurs influençant l\'extraction',
      level: 2,
    },
    {
      type: 'list',
      items: [
        'Concassage du malt: Un concassage plus fin augmente la surface mais peut obstruer la filtration.',
        'Température et pH: Activité enzymatique optimale entre 64°C et 68°C à pH 5.2 - 5.6.',
        'Technique de rinçage: Le rinçage continu ou par étapes influence l\'extraction des sucres.',
        'Ratio eau-grain: Les moûts plus fluides favorisent la mobilité enzymatique.',
        'Épaisseur du lit de drêches: Entre 30 cm et 45 cm optimise la dynamique des fluides.'
      ],
    },
    {
      type: 'tip',
      title: 'Viser 75% pour calibrer ses recettes',
      html: 'Une base de 75% permet d\'adapter facilement les quantités de grain lors de la création d\'une nouvelle recette.',
    },
    {
      type: 'title',
      text: 'Ajustements en cours de brassage',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Si la densité mesurée avant ébullition est inférieure à la prévision, vous pouvez prolonger le temps d\'ébullition pour concentrer le moût ou ajouter de l\'extrait de malt.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Distinction entre rendement de brassage et rendement de brasserie',
      html: 'Ne confondez pas le rendement de la cuve de matière avec le rendement global de votre installation.',
    },
  ],
};
