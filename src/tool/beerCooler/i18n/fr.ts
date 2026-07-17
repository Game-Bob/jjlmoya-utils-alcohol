import { bibliography } from '../bibliography';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import type { BeerCoolerUI, BeerCoolerLocaleContent } from '../index';

const slug = 'refroidisseur-biere';
const title = 'Calculateur de Refroidissement de Bière avec la Loi de Newton';
const description = 'Calculez avec la thermodynamique réelle - la Loi du Refroidissement de Newton - combien de temps votre bière met à atteindre la température de service idéale au frigo ou au congélateur.';

const ui: BeerCoolerUI = {
  step1Title: 'Que voulez-vous refroidir ?',
  canLabel: 'Canette',
  aluminumLabel: 'Aluminium',
  bottleLabel: 'Bouteille',
  glassLabel: 'Verre',
  step2Title: 'Où la mettez-vous ?',
  fridgeLabel: 'Réfrigérateur',
  freezerLabel: 'Congélateur',
  step3Title: 'Ajustez les Températures',
  initialTempLabel: 'Temp. Initiale',
  targetTempLabel: 'Cible Froide',
  glacialLabel: 'Glacial',
  perfectLabel: 'Parfaite',
  bodegaLabel: 'Cave',
  readyTitle: 'Tout prêt',
  readyDescription: 'Sélectionnez le contenant et le lieu pour calculer.',
  estimatedTimeLabel: 'Heure estimée',
  methodLabel: 'Méthode',
  containerLabel: 'Contenant',
  alreadyColdLabel: 'Déjà froide !',
  neverColdLabel: 'Jamais froide'
};

const faqTitle = 'Foire Aux Questions';

const faq: BeerCoolerLocaleContent['faq'] = [
  {
    question: "Comment cet outil calcule-t-il le temps de refroidissement ?",
    answer: "Il applique la Loi du Refroidissement de Newton: T(t) = T_env + (T₀ - T_env) × e^(-kt). La constante k varie selon le matériau du contenant et le milieu de refroidissement. Une canette en aluminium dans un frigo a un k très différent d'une bouteille en verre dans un congélateur. Les valeurs utilisées sont calibrées sur des expériences réelles pour chaque combinaison.",
  },
  {
    question: "L'astuce du papier mouillé avec du sel fonctionne-t-elle vraiment ?",
    answer: "Oui, et de façon notable. Envelopper le contenant dans du papier humide avec du sel accélère le refroidissement pour deux raisons: l'évaporation de l'eau extrait de la chaleur supplémentaire (refroidissement par évaporation) et le sel abaisse le point de congélation de l'eau, prolongeant le contact humide. Vous pouvez gagner 2 à 4°C supplémentaires dans les premières minutes par rapport à une canette sèche au congélateur.",
  },
  {
    question: "Quelle est la température de service idéale selon le style de bière ?",
    answer: "Cela dépend du style. Les Lagers et Pilsners sont meilleures entre 3°C et 7°C. Les IPAs et Pale Ales s'épanouissent entre 7°C et 10°C. Les Stouts, Porters et ales complexes doivent être servis plus chauds, entre 12°C et 14°C, pour que leurs composés aromatiques - café, chocolat, fruits secs - s'expriment pleinement.",
  },
  {
    question: "Ma bière peut-elle exploser si je la laisse au congélateur ?",
    answer: "Oui. L'alcool et les sucres dissous abaissent le point de congélation de la bière: une lager standard à 5% gèle vers -3°C. Lorsque l'eau se cristallise, le volume augmente et la pression interne du CO2 monte jusqu'à ce que le contenant cède. Plus de 60 minutes au congélateur - surtout en bouteille en verre - est une zone de risque réel. Utilisez ce calculateur pour l'éviter.",
  },
  {
    question: "La bière 'brûle'-t-elle si elle est refroidie trop vite ?",
    answer: "Non. Le mythe du 'choc thermique' qui abîme la bière est faux. Ce qui peut réellement l'affecter, c'est la congélation et la décongélation répétées - cela brise les protéines et trouble le liquide - ou l'exposition directe aux UV. Un refroidissement rapide au congélateur ou dans de l'eau glacée n'altère pas le goût.",
  },
];

const howTo: BeerCoolerLocaleContent['howTo'] = [
  {
    name: "Sélectionner le contenant",
    text: "Choisissez entre une canette en aluminium ou une bouteille en verre. Le matériau affecte considérablement la vitesse de transfert de chaleur.",
  },
  {
    name: "Choisir la méthode de refroidissement",
    text: "Indiquez si vous utilisez un réfrigérateur conventionnel (4°C) ou un congélateur (-18°C) pour un processus ultra-rapide.",
  },
  {
    name: "Ajuster les températures",
    text: "Définissez la température actuelle de la boisson (ambiante) et votre température cible froide souhaitée.",
  },
];


const seo: BeerCoolerLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'La Science du Froid et la Thermodynamique',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'Pourquoi cette canette refroidit-elle avant la bouteille ? Est-ce de la magie ? Non, c\'est la <strong>Loi du Refroidissement de Newton</strong> en action. Cet outil calcule mathématiquement le moment exact où votre boisson atteint la perfection thermodynamique. Chaque matériau, chaque environnement, chaque température initiale alimente la même équation différentielle que les physiciens et ingénieurs utilisent pour modéliser les transferts de chaleur dans les systèmes industriels.'
  },
  {
    type: 'diagnostic',
    title: 'La Formule Maîtresse',
    icon: 'mdi:function-variant',
    variant: 'info',
    badge: 'Physique',
    html: 'T(t) = T_env + (T_0 - T_env) * e^(-kt). Cette équation différentielle décrit comment la température d\'un objet change proportionnellement à la différence entre sa température et celle de l\'environnement. La constante k dépend du matériau et de la géométrie du contenant, ce qui explique pourquoi une canette refroidit plus vite qu\'une bouteille de même volume.'
  },
  {
    type: 'title',
    text: 'Guerre des Matériaux: Aluminium vs Verre',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'L\'<strong>aluminium</strong> a une conductivité thermique de ~205 W/(m·K), tandis que le <strong>verre</strong> atteint à peine 0.8 W/(m·K). Le métal transfère le froid violemment vite, ce qui en fait le contenant idéal pour les urgences. Cependant, le verre offre une meilleure isolation une fois froid, maintenant la température idéale plus longtemps pendant la consommation.'
  },
  {
    type: 'stats',
    items: [
      { label: 'Pilsner & Lager', value: '3°C - 7°C', icon: 'mdi:snowflake' },
      { label: 'IPA & Pale Ale', value: '7°C - 10°C', icon: 'mdi:hops' },
      { label: 'Stout & Porter', value: '12°C - 14°C', icon: 'mdi:beer' }
    ],
    columns: 3
  },
  {
    type: 'card',
    title: 'La Zone de Danger du Congélateur',
    icon: 'mdi:snowflake-alert',
    html: 'En raison de l\'alcool et des sucres dissous, la bière gèle en dessous de 0°C - une lager standard à 5% gèle vers -3°C. Lorsque l\'eau se cristallise, elle se dilate tandis que la pression du CO2 augmente simultanément. Le résultat est un contenant qui peut se rompre violemment. Ne laissez jamais une bière au congélateur plus de 45 minutes sans minuterie.'
  },
  {
    type: 'proscons',
    title: 'Astuces de Refroidissement d\'Urgence',
    items: [
      { pro: 'Astuce du Papier Mouillé: Enveloppez la canette dans du papier mouillé, l\'évaporation accélère le refroidissement.', con: '' },
      { pro: 'Saumure Arctique: Remplissez un seau d\'eau, de glace et de 2 cuillères de sel pour atteindre -5°C.', con: '' },
      { pro: 'Méthode Rotation: Faites tourner la bouteille dans l\'eau glacée pour forcer la convection.', con: '' },
      { pro: '', con: 'Ne laissez pas une canette au congélateur sans minuterie - une canette qui explose est dangereuse.' }
    ]
  },
  {
    type: 'tip',
    title: 'Conseil Pro: Prérefroidir le Verre',
    html: 'Le verre dans lequel vous servez la bière possède une masse thermique significative. Un verre chaud peut augmenter la température d\'une bière parfaitement froide de 2 à 3°C instantanément au contact. Placez votre verre de service au congélateur 5 minutes avant de verser, ou rincez-le à l\'eau froide. Cette simple étape prolonge la fenêtre où votre bière a exactement le goût voulu.'
  },
  {
    type: 'title',
    text: 'Comprendre la Constante de Refroidissement',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'La constante de refroidissement k dans l\'équation de Newton n\'est pas une valeur universelle fixe - c\'est une propriété empirique de chaque contenant et milieu spécifique. Une fine canette en aluminium dans de l\'eau glacée a un k radicalement différent d\'une épaisse bouteille en verre dans l\'air immobile d\'un réfrigérateur. Notre calculateur utilise des valeurs mesurées et calibrées sur des expériences réelles pour chaque type de contenant, vous offrant des prédictions précises à quelques minutes près dans des scénarios de refroidissement domestiques typiques.'
  }
];

const schemas: BeerCoolerLocaleContent['schemas'] = [
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

export const content: BeerCoolerLocaleContent = {
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
