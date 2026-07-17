import { bibliography } from '../bibliography';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import type { CocktailBalancerUI, CocktailBalancerLocaleContent } from '../index';

const slug = 'cocktail-balancer';
const title = 'Cocktail Balancer: The Sour Law';
const description = 'Calculate the perfect balance between sweet and sour for your cocktails. Master the golden ratio of mixology.';

const ui: CocktailBalancerUI = {
  title: 'Cocktail Balancer',
  presetsBtn: 'Recipes',
  saveBtn: 'Save',
  resetBtn: 'Reset',
  emptyStateTitle: 'Your Workbench is Empty',
  emptyStateDescription: 'Add ingredients to analyze your cocktail balance in real-time.',
  addBtn: 'Add Ingredient',
  addMoreBtn: 'Add Another Ingredient',
  flavorProfileTitle: 'Flavor Profile',
  volLabel: 'Volume',
  sugarLabel: 'Sugar',
  colorLabel: 'Color',
  sourLawTitle: 'Sour Law',
  acidDryLabel: 'Acid (Dry)',
  balanceLabel: 'Balance',
  sweetLabel: 'Sweet',
  aiSuggestionTitle: 'AI Suggestion',
  addIngredientTitle: 'Add Ingredient',
  searchPlaceholder: 'Search rum, lime, syrup...',
  presetsTitle: 'Recipes & Presets',
  savedSectionTitle: 'My Saved',
  classicsSectionTitle: 'Classics',
  confirmDeleteTitle: 'Delete everything?',
  confirmDeleteText: 'This will remove all ingredients from your workbench. This action cannot be undone.',
  cancelBtn: 'Cancel',
  deleteBtn: 'Delete',
  verdictSpiritSeco: 'Spirituous / Dry',
  verdictSoloDulce: 'Sweet Only (Old Fashioned)',
  verdictMuyAcido: 'Too Acidic / Bone Dry',
  verdictAcido: 'Acidic / Tart',
  verdictEquilibrado: 'Balanced (Sour)',
  verdictDulce: 'Sweet / Commercial',
  verdictEmpalagoso: 'Cloying',
  fixAddBitters: 'Missing Bitterness',
  fixAddSugar: 'Too Acidic',
  fixAddAcid: 'Too Sweet'
};

const faqTitle = 'Frequently Asked Questions';

const faq: CocktailBalancerLocaleContent['faq'] = [
  {
    question: "What is the 'Sour Law'?",
    answer: "It is the golden ratio of mixology that balances three elements: the strong base (spirit), the sour (citrus), and the sweet (syrups). A classic recipe usually follows the 2:1:1 ratio (Strong:Sour:Sweet), although this varies depending on strength and density.",
  },
  {
    question: "How does dilution affect cocktail balance?",
    answer: "Ice doesn't just cool; it adds water (dilution) which opens up the spirit's aromas and softens the peaks of acidity and sweetness. A balanced cocktail in the shaker can become unbalanced if left too long with ice in the glass.",
  },
  {
    question: "Why don't my home cocktails taste like those in a bar?",
    answer: "It's usually due to the lack of balance between sugar and the pH of the citrus. Lemons vary in acidity by season. Our calculator helps you adjust the exact amount of syrup based on the volume of juice used.",
  },
  {
    question: "What are Brix degrees and why do they matter in cocktails?",
    answer: "Brix is a scale that measures the amount of dissolved sugar in a liquid. A simple syrup (1:1) sits around 50 °Brix; a Rich Syrup (2:1) exceeds 66 °Brix. The higher the Brix, the more body and sweetness it contributes per unit of volume. Knowing this lets you swap syrups in a recipe without breaking the balance.",
  },
];

const howTo: CocktailBalancerLocaleContent['howTo'] = [
  {
    name: "Select the alcoholic base",
    text: "Choose the main spirit (Gin, Rum, Whiskey) from our database to know its body and alcohol contribution.",
  },
  {
    name: "Enter the acidic agent",
    text: "Add the volume of lemon, lime, or grapefruit juice. The calculator will analyze the pH impact on the mix.",
  },
  {
    name: "Adjust the sweet component",
    text: "Enter the type of syrup (simple, 2:1, agave) and watch the balance indicator move in real-time.",
  },
  {
    name: "Perfect serving",
    text: "Review the tool's final verdict: the Sour ratio, the estimated post-dilution ABV, and the correction suggestions. Serve with fresh ice and fine-tune the citrus or syrup to taste.",
  },
];


const seo: CocktailBalancerLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Molecular Engineering & Liquid Balance',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'Welcome to the digital laboratory where intuition meets mathematics. This tool is not a simple recipe book; it is an <strong>advanced physical-chemical simulator</strong> designed to deconstruct and analyze the molecular structure of your cocktails in real-time. Every drop of citrus, every measure of spirit, every gram of syrup interacts according to immutable chemical laws that determine whether your drink will be a masterpiece or a disappointing failure.'
  },
  {
    type: 'stats',
    items: [
      { label: 'Lime', value: '~6% Acid', icon: 'mdi:fruit-citrus' },
      { label: 'Lemon', value: '~6% Acid', icon: 'mdi:fruit-citrus' },
      { label: 'Grapefruit', value: '~1-2% Acid', icon: 'mdi:fruit-citrus' }
    ],
    columns: 3
  },
  {
    type: 'card',
    title: 'The Science of Acid',
    icon: 'mdi:fruit-citrus',
    html: 'Acidity is not just a flavor; it is the structural backbone of any balanced cocktail. Without the correct acidity, a drink becomes flat, one-dimensional, and forgettable. Our algorithm distinguishes the titratable acidity of a Persian lime versus a Eureka lemon, accounting for seasonal variations in citrus pH that can shift your recipe by an entire balance point on the palate.'
  },
  {
    type: 'card',
    title: 'Brix Control (Sweetness)',
    icon: 'mdi:spoon-sugar',
    html: 'The body and texture of your cocktail depends entirely on dissolved sugar. A Simple Syrup (1:1) behaves very differently from a Rich Syrup (2:1), honey, or agave nectar. Each sweetener has a different Brix degree and viscosity that affects how the drink coats the tongue. Our calculator computes the exact grams of dissolved sugar to predict final mouthfeel and sweetness perception.'
  },
  {
    type: 'card',
    title: 'Thermodynamics and Dilution',
    icon: 'mdi:water-percent',
    html: 'A shaken cocktail dilutes by 25-40% depending on the ice temperature, shaking technique, and duration. This water addition is not a flaw; it is an essential ingredient that opens aromas and softens the alcohol edge. Our calculator estimates the Final ABV after dilution, so you can engineer drinks with precisely the intended strength and flavour balance.'
  },
  {
    type: 'title',
    text: 'Beyond the Basic Ratio',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'Many bartenders learn the classic 2:1:1 rule (2 parts spirit, 1 part sour, 1 part sweet) and treat it as universal truth. However, <strong>chemistry is far more nuanced</strong>. A lemon from Sicily contains different acidity than a lime from Mexico. A triple sec like Cointreau behaves radically differently from a blue Curaçao. The same recipe can taste perfectly balanced one week and brutally acidic the next, simply due to seasonal fruit variation.'
  },
  {
    type: 'paragraph',
    html: 'This balancer breaks through those simplistic barriers. By entering your specific ingredients, you consult a living database that dynamically adjusts acidity and sweetness vectors to offer a precise sensory map of your creation. Stop guessing and start engineering your cocktails with the same scientific rigour that bartenders at world-class establishments use every single service.'
  },
  {
    type: 'summary',
    title: 'Who is this tool for?',
    items: [
      'Professional Bartenders: Standardize recipes and create signature menus with reproducible consistency.',
      'Home Enthusiasts: Stop guessing and start understanding why your cocktails succeed or fail.',
      'Beverage Developers: Rapidly prototype new flavour concepts before expensive production runs.'
    ]
  },
  {
    type: 'diagnostic',
    title: 'The Golden Zone',
    icon: 'mdi:star',
    variant: 'success',
    badge: 'Goal',
    html: 'This is the ultimate objective: a controlled pH where sugar neutralizes the aggression of acid without masking the essential oils and aromatic compounds of the base spirit. This precise balance is where immortal classics live - the Daiquiri, the Margarita, the Sidecar - drinks that have survived decades because they obey the fundamental laws of flavour chemistry.'
  },
  {
    type: 'tip',
    title: 'Expert Tip: Always Use Fresh Citrus',
    html: 'Always squeeze citrus at the last moment. Lemon and lime juice oxidizes quickly, losing live acidity within 20-30 minutes of juicing. A cocktail made with truly fresh juice will always have a brightness and vibrancy on the palate that no bottled product can replicate. Use fruit at room temperature to maximize juice yield.'
  }
];

const schemas: CocktailBalancerLocaleContent['schemas'] = [
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  } as WithContext<FAQPage>,
  {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: title,
    description: description,
    step: howTo.map((step, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: step.name,
      text: step.text,
    })),
  } as WithContext<HowTo>,
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
  bibliography,
  howTo,
  schemas,
};
