import type { WithContext, SoftwareApplication } from 'schema-dts';
import type { CocktailBalancerUI, CocktailBalancerLocaleContent } from '../index';

const slug = 'equilibre-cocktail';
const title = 'Équilibreur de Cocktails - La Loi du Sour';
const description = 'Calculez l\'équilibre parfait entre le sucré et l\'acide pour vos cocktails. Maîtrisez le nombre d\'or de la mixologie.';

const ui: CocktailBalancerUI = {
  title: 'Cocktail Balancer',
  presetsBtn: 'Recettes',
  saveBtn: 'Sauvegarder',
  resetBtn: 'Reset',
  emptyStateTitle: 'Votre Plan de Travail est Vide',
  emptyStateDescription: 'Ajoutez des ingrédients pour analyser l\'équilibre de votre cocktail en temps réel.',
  addBtn: 'Ajouter Ingrédient',
  addMoreBtn: 'Ajouter un Autre Ingrédient',
  flavorProfileTitle: 'Profil de Saveur',
  volLabel: 'Volume',
  sugarLabel: 'Sucre',
  colorLabel: 'Couleur',
  sourLawTitle: 'Loi du Sour',
  acidDryLabel: 'Acide (Dry)',
  balanceLabel: 'Équilibre',
  sweetLabel: 'Sucré (Sweet)',
  aiSuggestionTitle: 'Suggestion de l\'IA',
  addIngredientTitle: 'Ajouter Ingrédient',
  searchPlaceholder: 'Chercher rhum, citron, sirop...',
  presetsTitle: 'Recettes & Presets',
  savedSectionTitle: 'Mes Sauvegardes',
  classicsSectionTitle: 'Classiques',
  confirmDeleteTitle: 'Tout effacer ?',
  confirmDeleteText: 'Cette action supprimera tous les ingrédients de votre plan de travail. Elle est irréversible.',
  cancelBtn: 'Annuler',
  deleteBtn: 'Effacer',
  verdictSpiritSeco: 'Spiritueux / Sec',
  verdictSoloDulce: 'Seulement Sucré (Old Fashioned)',
  verdictMuyAcido: 'Trop Acide / Bone Dry',
  verdictAcido: 'Acide / Tart',
  verdictEquilibrado: 'Équilibré (Sour)',
  verdictDulce: 'Sucré / Commercial',
  verdictEmpalagoso: 'Écoeurant',
  fixAddBitters: 'Manque d\'Amertume',
  fixAddSugar: 'Trop Acide',
  fixAddAcid: 'Trop Sucré'
};

const faqTitle = 'Foire Aux Questions';
const bibliographyTitle = 'Bibliographie & Sources';

const faq: CocktailBalancerLocaleContent['faq'] = [
  {
    question: "Qu'est-ce que la 'Loi du Sour' ?",
    answer: "C'est le nombre d'or de la mixologie qui équilibre trois éléments : la base forte (spiritueux), l'acide (agrumes) et le sucré (sirops). Une recette classique suit généralement le ratio 2:1:1 (Fort:Acide:Sucré), bien que cela varie selon la force et la densité.",
  },
  {
    question: "Comment la dilution affecte-t-elle l'équilibre du cocktail ?",
    answer: "La glace ne fait pas que refroidir ; elle ajoute de l'eau (dilution) qui ouvre les arômes du spiritueux et adoucit les pics d'acidité et de douceur. Un cocktail équilibré dans le shaker peut se déséquilibrer s'il reste trop longtemps avec de la glace dans le verre.",
  },
  {
    question: "Pourquoi mes cocktails maison n'ont-ils pas le même goût qu'au bar ?",
    answer: "C'est généralement dû au manque d'équilibre entre le sucre et le pH de l'agrume. Les citrons varient en acidité selon la saison. Notre calculateur vous aide à ajuster la quantité exacte de sirop en fonction du volume de jus utilisé.",
  },
];

const howTo: CocktailBalancerLocaleContent['howTo'] = [
  {
    name: "Sélectionner la base alcoolisée",
    text: "Choisissez le spiritueux principal (Gin, Rhum, Whisky) dans notre base de données pour connaître son apport en corps et en alcool.",
  },
  {
    name: "Entrer l'agent acide",
    text: "Ajoutez le volume de jus de citron, citron vert ou pamplemousse. Le calculateur analysera l'impact du pH sur le mélange.",
  },
  {
    name: "Ajuster le composant sucré",
    text: "Entrez le type de sirop (simple, 2:1, agave) et observez l'indicateur d'équilibre bouger en temps réel.",
  },
];

const bibliography: CocktailBalancerLocaleContent['bibliography'] = [
  {
    name: "Liquid Intelligence: The Art and Science of the Perfect Cocktail",
    url: "http://www.cookingissues.com/index.html%3Fp=4587.html",
  },
  {
    name: "The Bar Book: Elements of Cocktail Technique - Jeffrey Morgenthaler",
    url: "https://jeffreymorgenthaler.com/the-bar-book/",
  },
  {
    name: "Cocktail Balance - Difford's Guide",
    url: "https://www.diffordsguide.com/encyclopedia/1066/cocktails/cocktail-balance",
  },
];

const seo: CocktailBalancerLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Ingénierie Moléculaire & Équilibre Liquide',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'Bienvenue dans le laboratoire numérique où l\'intuition rencontre les mathématiques. Cet outil n\'est pas un simple livre de recettes ; c\'est un <strong>simulateur physico-chimique avancé</strong> conçu pour déconstruire et analyser la structure moléculaire de vos cocktails en temps réel. Chaque goutte de citrus, chaque mesure de spiritueux, chaque gramme de sirop interagit selon des lois chimiques immuables qui déterminent si votre boisson sera un chef-d\'œuvre ou un échec décevant.'
  },
  {
    type: 'stats',
    items: [
      { label: 'Citron Vert', value: '~6% Acide', icon: 'mdi:fruit-citrus' },
      { label: 'Citron', value: '~6% Acide', icon: 'mdi:fruit-citrus' },
      { label: 'Pamplemousse', value: '~1-2% Acide', icon: 'mdi:fruit-citrus' }
    ],
    columns: 3
  },
  {
    type: 'card',
    title: 'La Science de l\'Acide',
    icon: 'mdi:fruit-citrus',
    html: 'L\'acidité n\'est pas seulement une saveur ; c\'est la colonne vertébrale structurelle de tout cocktail équilibré. Sans la bonne acidité, une boisson devient plate, unidimensionnelle et oubliable. Notre algorithme distingue l\'acidité titrable d\'un citron vert persan par rapport à un citron Eureka, tenant compte des variations saisonnières du pH des agrumes qui peuvent décaler votre recette d\'un point entier d\'équilibre sur le palais.'
  },
  {
    type: 'card',
    title: 'Contrôle du Brix (Douceur)',
    icon: 'mdi:spoon-sugar',
    html: 'Le corps et la texture de votre cocktail dépendent entièrement du sucre dissous. Un Sirop Simple (1:1) se comporte très différemment d\'un Riche Sirop (2:1), du miel ou du nectar d\'agave. Chaque édulcorant a un degré Brix et une viscosité différents qui affectent la façon dont la boisson enrobe la langue. Notre calculateur calcule les grammes exacts de sucre dissous pour prédire la sensation en bouche finale.'
  },
  {
    type: 'card',
    title: 'Thermodynamique et Dilution',
    icon: 'mdi:water-percent',
    html: 'Un cocktail agité se dilue de 25 à 40 % selon la température de la glace, la technique et la durée. Cet ajout d\'eau n\'est pas un défaut ; c\'est un ingrédient essentiel qui ouvre les arômes et adoucit la sensation alcoolisée. Notre calculateur estime l\'ABV Final après dilution, permettant de concevoir des boissons avec la force et l\'équilibre voulus.'
  },
  {
    type: 'title',
    text: 'Au-delà du Ratio de Base',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'De nombreux bartenders apprennent la règle classique 2:1:1 (2 parts de spiritueux, 1 acide, 1 sucré) et la traitent comme une vérité universelle. Cependant, <strong>la chimie est bien plus nuancée</strong>. Un citron de Sicile contient une acidité différente d\'un citron vert du Mexique. Un triple sec comme le Cointreau se comporte radicalement différemment d\'un Curaçao bleu. La même recette peut être parfaitement équilibrée une semaine et brutalement acide la suivante, simplement en raison des variations saisonnières des fruits.'
  },
  {
    type: 'paragraph',
    html: 'Cet équilibreur brise ces barrières simplistes. En entrant vos ingrédients spécifiques, vous consultez une base de données vivante qui ajuste dynamiquement les vecteurs d\'acidité et de douceur pour offrir une carte sensorielle précise de votre création. Arrêtez de deviner et commencez à élaborer vos cocktails avec la même rigueur scientifique que les bartenders des établissements de classe mondiale.'
  },
  {
    type: 'summary',
    title: 'À qui s\'adresse cet outil ?',
    items: [
      'Bartenders Professionnels : Standardisez les recettes et créez des menus signature avec une cohérence reproductible.',
      'Amateurs à la Maison : Arrêtez de deviner et comprenez pourquoi vos cocktails réussissent ou échouent.',
      'Développeurs de Boissons : Prototypez rapidement de nouveaux concepts de saveurs avant les productions coûteuses.'
    ]
  },
  {
    type: 'diagnostic',
    title: 'La Zone Dorée',
    icon: 'mdi:star',
    variant: 'success',
    badge: 'Objectif',
    html: 'C\'est l\'objectif ultime : un pH contrôlé où le sucre neutralise l\'agression de l\'acide sans masquer les huiles essentielles et les composés aromatiques du spiritueux de base. C\'est là que vivent les classiques immortels — le Daiquiri, la Margarita, le Sidecar — des boissons qui ont survécu des décennies parce qu\'elles obéissent aux lois fondamentales de la chimie des saveurs.'
  },
  {
    type: 'tip',
    title: 'Conseil Expert : Toujours Utiliser des Agrumes Frais',
    html: 'Pressez toujours les agrumes au dernier moment. Le jus de citron et de citron vert s\'oxyde rapidement, perdant son acidité vive en 20 à 30 minutes après l\'extraction. Un cocktail réalisé avec un jus vraiment frais aura toujours une brillance et une vivacité en bouche qu\'aucun produit en bouteille ne peut reproduire.'
  }
];

const schemas: CocktailBalancerLocaleContent['schemas'] = [
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

export const content: CocktailBalancerLocaleContent = {
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
