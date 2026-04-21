import { bibliography } from '../bibliography';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import type { FortifiedWineBuilderUI, FortifiedWineBuilderLocaleContent } from '../index';

const slug = 'constructeur-vin-fortifie';
const title = 'Constructeur de Vin Fortifié & Vermouth : Calculateur Carré de Pearson';
const description = 'Calculez exactement quelle quantité d\'alcool ajouter à votre vin pour atteindre le degré alcoolique cible. Élaborez le vermouth, le porto et le xérès parfaits grâce à la méthode du carré de Pearson.';

const ui: FortifiedWineBuilderUI = {
  intentionTitle: 'Que créez-vous ?',
  intentionVermouth: 'Vermouth',
  intentionPort: 'Porto',
  intentionSherry: 'Xérès',
  intentionCustom: 'Personnalisé',
  modeALabel: 'À partir du vin que j\'ai',
  modeBLabel: 'Volume final cible',
  wineSection: 'Vin de base',
  wineVolumeLabel: 'Volume de vin (L)',
  wineAbvLabel: 'TAV du vin (%)',
  spiritSection: 'Alcool de fortification',
  spiritAbvLabel: 'TAV de l\'alcool (%)',
  brandyPreset: 'Brandy (38°)',
  neutralPreset: 'Neutre (96°)',
  aguardientePreset: 'Aguardiente (42°)',
  targetAbvLabel: 'TAV cible (%)',
  targetVolumeLabel: 'Volume total cible (L)',
  resultsTitle: 'Votre Recette',
  addLabel: 'Ajouter',
  finalVolumeLabel: 'Volume final',
  bottlesSection: 'Bouteilles nécessaires',
  copyBtn: 'Copier la recette',
  copiedBtn: 'Copié !',
  pearsonTitle: 'Carré de Pearson',
  wineCornerLabel: 'Vin',
  spiritCornerLabel: 'Alcool',
  emptyState: 'Entrez vos valeurs pour voir le carré de Pearson',
  errorAbv: 'Le TAV de l\'alcool doit être supérieur au TAV cible, et le TAV cible doit être supérieur au TAV du vin.',
  errorMode: 'Entrez un volume valide pour effectuer le calcul.',
};

const faqTitle = 'Foire Aux Questions';

const faq: FortifiedWineBuilderLocaleContent['faq'] = [
  {
    question: 'Qu\'est-ce que la méthode du carré de Pearson ?',
    answer: 'Le carré de Pearson est une méthode graphique simple utilisée en vinification pour calculer les ratios de mélange. On place le TAV cible au centre du carré, le TAV du vin en haut à gauche et le TAV de l\'alcool en bas à gauche. Les différences diagonales donnent les parts proportionnelles de chaque liquide nécessaires.',
  },
  {
    question: 'Quel est le TAV typique du vermouth ?',
    answer: 'Le vermouth traditionnel a un TAV compris entre 15 % et 18 %. Le vermouth sec (style français) se situe généralement dans la partie basse (15–16 %), tandis que le vermouth doux (style italien) atteint souvent 16–18 %. Le vermouth rosé se trouve entre les deux.',
  },
  {
    question: 'Quel vin de base utiliser pour le vermouth ?',
    answer: 'Traditionnellement, un vin blanc sec et neutre entre 10 et 12 % TAV convient le mieux. Le vin constitue la base, mais comme il sera aromatisé avec des herbes et des botaniques, il n\'est pas nécessaire d\'utiliser un vin coûteux — une base propre et acide est idéale.',
  },
  {
    question: 'Puis-je utiliser de l\'alcool neutre à la place du brandy ?',
    answer: 'Oui. L\'alcool neutre (96 % vol.) offre un contrôle maximal et un profil de saveur plus pur. Le brandy apporte son propre caractère (chêne, fruits secs, vanille), ce qui peut être souhaitable ou indésirable selon le style. Le porto utilise traditionnellement du brandy de raisin, tandis que certains vermouths utilisent de l\'alcool neutre.',
  },
  {
    question: 'Comment la fortification conserve-t-elle le vin ?',
    answer: 'Lorsque le TAV du vin dépasse environ 15–16 %, la fermentation par les levures est inhibée — les levures ne peuvent pas survivre dans des environnements à haute teneur en alcool. C\'est pourquoi les vins fortifiés ont une durée de conservation bien plus longue que les vins ordinaires. L\'alcool agit comme conservateur naturel contre la détérioration par les levures et les bactéries.',
  },
];

const howTo: FortifiedWineBuilderLocaleContent['howTo'] = [
  { name: 'Choisir le style', text: 'Sélectionnez Vermouth, Porto, Xérès ou Personnalisé pour préremplir automatiquement la plage de TAV cible recommandée.' },
  { name: 'Saisir les données du vin', text: 'Indiquez le volume de votre vin de base (ou le volume final cible en mode B) et son TAV actuel.' },
  { name: 'Définir l\'alcool', text: 'Choisissez un préréglage d\'alcool ou saisissez un TAV personnalisé. Le carré de Pearson se met à jour en temps réel.' },
  { name: 'Lire votre recette', text: 'Le calculateur indique exactement combien de millilitres d\'alcool ajouter et le volume final.' },
];


const seo: FortifiedWineBuilderLocaleContent['seo'] = [
  { type: 'title', text: 'Le Carré de Pearson : Mathématiques ancestrales, vin parfait', level: 2 },
  { type: 'paragraph', html: 'Le <strong>carré de Pearson</strong> est l\'un des outils les plus anciens et les plus élégants des mathématiques vinicoles. Développé au XIXe siècle, il permet à tout vigneron — professionnel ou amateur — de calculer des ratios de mélange avec rien de plus que des soustractions. Notre outil numérise cette méthode visuelle et ajoute un retour en temps réel, pour que vous passiez moins de temps à calculer et plus de temps à élaborer.' },
  { type: 'stats', items: [{ label: 'Vermouth', value: '15–18 % vol.', icon: 'mdi:glass-cocktail' }, { label: 'Porto', value: '18–20 % vol.', icon: 'mdi:bottle-wine' }, { label: 'Xérès', value: '15–17 % vol.', icon: 'mdi:cup-water' }], columns: 3 },
  { type: 'card', title: 'Pourquoi fortifier à 18 % ?', icon: 'mdi:shield-check', html: 'Au-delà d\'environ 15 % vol., <em>Saccharomyces cerevisiae</em> — la principale levure du vin — est inhibée. À 18 %, la fermentation est complètement arrêtée. C\'est pourquoi le porto conserve son sucre résiduel : l\'alcool est ajouté en cours de fermentation, tuant la levure avant que tout le sucre soit consommé.' },
  { type: 'tip', title: 'Conseil de pro : Mesurer à 20 °C', html: 'La densité de l\'alcool varie avec la température. Les mesures officielles de TAV sont calibrées à 20 °C. Si votre alcool ou votre vin est significativement plus chaud ou plus froid, appliquez un facteur de correction : environ +0,04 % vol. par °C en dessous de 20 °C et −0,04 % par °C au-dessus.' },
  { type: 'title', text: 'La Renaissance du Vermouth Artisanal', level: 2 },
  { type: 'paragraph', html: 'L\'Europe du Sud connaît une renaissance du vermouth artisanal. Barcelone, Valence et Saint-Sébastien ont reconquis <em>la hora del vermut</em> comme institution culturelle, et de petits producteurs en Espagne, en Italie et en France mettent en bouteille des expressions remarquables. Cela a créé une nouvelle génération de producteurs maison qui souhaitent des outils techniques à la hauteur de leurs ambitions.' },
  { type: 'summary', title: 'À qui s\'adresse cet outil ?', items: ['Vignerons amateurs : Fortifiez votre récolte avec précision plutôt qu\'au hasard.', 'Producteurs de vermouth artisanal : Prototypez de nouveaux TAV cibles avant de passer à de grandes quantités.', 'Éducateurs en spiritueux : Démontrez visuellement la méthode du carré de Pearson en atelier.'] },
];

const schemas: FortifiedWineBuilderLocaleContent['schemas'] = [
  { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) } as WithContext<FAQPage>,
  { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((step, i) => ({ '@type': 'HowToStep', position: i + 1, name: step.name, text: step.text })) } as WithContext<HowTo>,
  { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'UtilityApplication', operatingSystem: 'Web', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' } } as WithContext<SoftwareApplication>,
];

export const content: FortifiedWineBuilderLocaleContent = { slug, title, description, ui, seo, faqTitle, faq, bibliography, howTo, schemas };
