import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { JelloShotLabUI, JelloShotLabLocaleContent } from '../entry';

const slug = 'laboratoire-jello-shots';
const title = 'Laboratoire Jello Shots: Le calculateur parfait du ratio alcool et gélatine';
const description = 'Calculez exactement la quantité d\'alcool et de gélatine nécessaire pour des jello shots qui prennent vraiment. Évitez les ratés liquides ou caoutchouteux grâce à des ratios scientifiques pour toute teneur en alcool.';

const ui: JelloShotLabUI = {
  title: 'Laboratoire Jello Shots',
  description: 'Obtenez le ratio parfait de gélatine, d\'eau et d\'alcool pour que vos shots prennent à chaque fois.',
  liquorBaseLabel: 'Type de spiritueux',
  liquorAbvLabel: 'Degré d\'alcool (%)',
  gelatinLabel: 'Type de gélatine',
  diluentLabel: 'Base d\'eau',
  calculateBtn: 'Calculer',
  modePrecision: 'Mode précision',
  modeIntensity: 'Force du shot',
  modeIntensityLight: 'Léger (Facile)',
  modeIntensityBalanced: 'Standard',
  modeIntensityLimit: 'Maximum (Fort)',
  partyPlannerTitle: 'Planificateur de fête',
  partyPlannerGuestLabel: 'Invités',
  partyPlannerShotsPerGuest: 'Shots par personne',
  multiLayerTitle: 'Multi-couches',
  howToTitle: 'Comment les préparer',
  proTipsTitle: 'Conseils de pro',
  resultsTitle: 'Votre recette',
  totalVolumeLabel: 'Volume total',
  boilingWaterLabel: 'Eau chaude',
  alcoholVolumeLabel: 'Spiritueux',
  packetsNeededLabel: 'Sachets de gélatine',
  chillingTimeLabel: 'Temps de réfrigération',
  unitMm: 'ml',
  unitOz: 'oz',
  unitGrams: 'g',
  unitPackets: 'sachets',
  modeParty: 'Mode fête',
  modeRecipe: 'Mode recette',
};

const faqTitle = 'Questions fréquemment posées';

const faq: JelloShotLabLocaleContent['faq'] = [
  {
    question: 'Pourquoi l\'alcool fort empêche-t-il les jello shots de prendre ?',
    answer: 'L\'éthanol perturbe les liaisons hydrogène qui maintiennent la structure protéique en triple hélice de la gélatine. Lorsque le spiritueux représente environ 35 % du volume total, la matrice protéique ne peut plus former un réseau stable et le shot reste liquide. Plus le degré d\'alcool est élevé, moins on peut en ajouter avant d\'atteindre cette limite.',
  },
  {
    question: 'Quel est le ratio d\'alcool maximum avant que les jello shots ne prennent plus ?',
    answer: 'La limite supérieure sûre est d\'environ 30 à 35 % du volume total de liquide en spiritueux pur (à 40 % d\'alcool). Avec un alcool neutre à 96 %, cette limite descend à environ 15 à 18 % du volume total. Notre calculateur tient compte du degré d\'alcool du spiritueux pour que vous ne dépassiez jamais le seuil de prise.',
  },
  {
    question: 'Le type de spiritueux utilisé - vodka, rhum ou tequila - a-t-il de l\'importance ?',
    answer: 'Ce qui compte, c\'est le degré d\'alcool, pas le type de spiritueux. La vodka à 40 % et le rhum à 40 % se comportent de manière identique dans la matrice de gélatine. Cependant, les spiritueux à teneur en sucre plus élevée (comme certains rhums ou liqueurs) peuvent légèrement améliorer la texture, car le sucre entre en compétition avec l\'éthanol pour les liaisons hydrogène du réseau de gélatine.',
  },
  {
    question: 'Combien de temps les jello shots se conservent-ils au réfrigérateur ?',
    answer: 'Les jello shots bien préparés se conservent 3 à 5 jours au réfrigérateur, couverts de film plastique. La teneur élevée en alcool agit comme conservateur naturel. Évitez de les laisser à température ambiante plus de 2 heures, car la gélatine ramollit et les bactéries peuvent se multiplier.',
  },
  {
    question: 'Puis-je rendre mes jello shots plus fermes ou plus mous ?',
    answer: 'Oui. Utilisez plus de gélatine (ou un demi-sachet supplémentaire) pour des shots plus fermes qui sortent proprement des verres. Utilisez-en légèrement moins pour une texture plus molle et tremblotante. Ne substituez jamais la gélatine par de l\'agar-agar si vous souhaitez une texture fondante en bouche - l\'agar prend plus fermement et fond à une température plus élevée.',
  },
  {
    question: 'Puis-je congeler les jello shots pour accélérer le refroidissement ?',
    answer: 'Non. La congélation brise le réseau de gélatine, ce qui donne une texture aqueuse et granuleuse après décongélation. Réfrigérez toujours pendant au moins 4 heures. Pour les fêtes, préparez-les la veille - 8 heures ou plus donnent la meilleure texture.',
  },
];

const howTo: JelloShotLabLocaleContent['howTo'] = [
  { name: 'Choisissez votre spiritueux', text: 'Entrez le degré d\'alcool de votre spiritueux et choisissez la force de shot souhaitée. Le calculateur vous indiquera la quantité maximale de spiritueux que votre gélatine peut absorber.' },
  { name: 'Préparez la gélatine', text: 'Versez la quantité calculée d\'eau bouillante dans un bol. Ajoutez la poudre de gélatine et remuez vigoureusement pendant 2 minutes jusqu\'à dissolution complète. N\'ajoutez pas encore d\'alcool.' },
  { name: 'Ajoutez le spiritueux', text: 'Laissez le mélange de gélatine refroidir pendant 5 à 10 minutes jusqu\'à ce qu\'il soit chaud mais pas brûlant (en dessous de 50 °C). Ajoutez votre spiritueux et remuez doucement pour éviter de créer des bulles.' },
  { name: 'Versez et réfrigérez', text: 'Versez dans des verres en plastique, des moules en silicone ou de petits verres à shot. Réfrigérez pendant au moins 4 heures - une nuit entière est idéale. Ne congelez pas.' },
];


const seo: JelloShotLabLocaleContent['seo'] = [
  { type: 'title', text: 'La chimie derrière un jello shot parfait', level: 2 },
  {
    type: 'paragraph',
    html: 'Un jello shot n\'est pas simplement de la gélatine aromatisée avec de l\'alcool ajouté - c\'est une <strong>suspension colloïdale délicate</strong> où des polymères protéiques, de l\'eau et de l\'éthanol se disputent les liaisons hydrogène. Mauvais ratio et vous obtenez une flaque de liquide sucré ou un disque caoutchouteux qui rebondit sur la table. Bon ratio et vous avez un shot parfaitement tremblotant qui glisse hors du verre en un seul mouvement net.',
  },
  {
    type: 'stats',
    items: [
      { label: 'Léger (Facile)', value: '~30 % spiritueux', icon: 'mdi:emoticon-happy-outline' },
      { label: 'Standard', value: '~45 % spiritueux', icon: 'mdi:flask-outline' },
      { label: 'Maximum', value: '~55 % spiritueux', icon: 'mdi:fire' },
    ],
    columns: 3,
  },
  {
    type: 'card',
    title: 'Qu\'est-ce que la force Bloom ?',
    icon: 'mdi:molecule',
    html: 'Le Bloom mesure la force de gélification d\'une gélatine, allant généralement de 50 à 300 Bloom. La gélatine en feuilles vendue en supermarché est généralement de 150 à 200 Bloom. Un Bloom plus élevé signifie un gel plus ferme avec la même quantité de poudre, ce qui lui permet de tolérer légèrement plus d\'alcool avant de ne plus prendre. Les sachets standard de gélatine en poudre (7 g) sont calibrés pour environ 240 ml de liquide.',
  },
  {
    type: 'card',
    title: 'La limite de l\'éthanol',
    icon: 'mdi:alert-circle-outline',
    html: 'L\'éthanol entre en compétition avec l\'eau pour les sites de liaisons hydrogène sur les chaînes d\'acides aminés du collagène. Lorsque l\'éthanol occupe trop de ces sites, la protéine ne peut plus former la triple hélice stable qui donne à la gélatine sa structure. La limite pratique est d\'environ <strong>1 part de spiritueux à 40 % pour 1 part d\'eau</strong> - au-delà, votre shot ne prendra pas, peu importe le temps d\'attente.',
  },
  {
    type: 'tip',
    title: 'N\'ajoutez jamais d\'alcool à la gélatine bouillante',
    html: 'L\'alcool s\'évapore rapidement au-dessus de 78 °C. Laissez toujours votre gélatine dissoute refroidir à moins de 50 °C avant d\'incorporer le spiritueux. Cette seule étape est responsable de plus d\'échecs de jello shots que toute autre erreur.',
  },
  { type: 'title', text: 'Résoudre les problèmes courants', level: 2 },
  {
    type: 'proscons',
    title: 'Symptômes et solutions',
    items: [
      { pro: 'Shot liquide après 4 heures → Trop d\'alcool ou ratio dépassé. Réduire le volume de spiritueux.', con: 'Shot sans goût d\'alcool → Le spiritueux a été ajouté à un liquide encore trop chaud. Laisser refroidir.' },
      { pro: 'Shot trop caoutchouteux → Trop de gélatine. Réduire d\'un demi-sachet la prochaine fois.', con: 'Shot trouble → Bulles emprisonnées lors du mélange. Remuer doucement et laisser reposer avant de verser.' },
      { pro: 'Shot de texture granuleuse → Gélatine non complètement dissoute. Remuer plus longtemps dans l\'eau chaude.', con: 'Shot ne prend pas après 8 heures → Limite d\'éthanol dépassée. Utiliser moins de spiritueux ou un degré plus faible.' },
    ],
  },
  {
    type: 'summary',
    title: 'À qui s\'adresse cet outil ?',
    items: [
      'Organisateurs de fêtes: Calculez exactement le nombre de sachets et la quantité de spiritueux avant d\'acheter.',
      'Barmen: Passez à la production en grande quantité avec des résultats constants à chaque fois.',
      'Cuisiniers amateurs: Évitez les erreurs les plus courantes - shots liquides, texture caoutchouteuse ou zéro saveur d\'alcool.',
    ],
  },
];

const schemas: JelloShotLabLocaleContent['schemas'] = [
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
  } as WithContext<FAQPage>,
  {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: title,
    description,
    step: howTo.map((step, i) => ({ '@type': 'HowToStep', position: i + 1, name: step.name, text: step.text })),
  } as WithContext<HowTo>,
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: title,
    description,
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  } as WithContext<SoftwareApplication>,
];

export const content: JelloShotLabLocaleContent = { slug, title, description, ui, seo, faqTitle, faq, bibliography, howTo, schemas };
