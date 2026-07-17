import { bibliography } from '../bibliography';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import type { FortifiedWineBuilderUI, FortifiedWineBuilderLocaleContent } from '../index';

const slug = 'berikad-vin-kalkylator';
const title = 'Berikad Vin & Vermouth Byggare: Pearson Kvadrat Kalkylator';
const description = 'Beräkna exakt hur mycket sprit du behöver tillsätta till ditt vin för att nå önskad alkoholhalt. Skapa perfekt vermouth, portvin och sherry med Pearson Kvadrat-metoden.';

const ui: FortifiedWineBuilderUI = {
  intentionTitle: 'Vad skapar du?',
  intentionVermouth: 'Vermouth',
  intentionPort: 'Portvin',
  intentionSherry: 'Sherry',
  intentionCustom: 'Anpassad',
  modeALabel: 'Från vin jag har',
  modeBLabel: 'Mål för slutvolym',
  wineSection: 'Basvin',
  wineVolumeLabel: 'Vinvolym (L)',
  wineAbvLabel: 'Vinets alkoholhalt (%)',
  spiritSection: 'Berikningssprit',
  spiritAbvLabel: 'Spritens alkoholhalt (%)',
  brandyPreset: 'Brandy (38°)',
  neutralPreset: 'Neutral (96°)',
  aguardientePreset: 'Aguardiente (42°)',
  targetAbvLabel: 'Målalkoholhalt (%)',
  targetVolumeLabel: 'Mål totalvolym (L)',
  resultsTitle: 'Ditt Recept',
  addLabel: 'Tillsätt',
  finalVolumeLabel: 'Slutvolym',
  bottlesSection: 'Flaskor som behövs',
  copyBtn: 'Kopiera Recept',
  copiedBtn: 'Kopierat!',
  pearsonTitle: 'Pearson Kvadrat',
  wineCornerLabel: 'Vin',
  spiritCornerLabel: 'Sprit',
  emptyState: 'Ange dina värden för att se Pearson Kvadraten',
  errorAbv: 'Spritens alkoholhalt måste vara högre än målhalten, och målet måste vara högre än vinets alkoholhalt.',
  errorMode: 'Ange en giltig volym för att beräkna.',
};

const faqTitle = 'Vanliga Frågor';

const faq: FortifiedWineBuilderLocaleContent['faq'] = [
  {
    question: 'Vad är Pearson Kvadrat-metoden?',
    answer: 'Pearson Kvadraten är en enkel grafisk metod som används inom vinframställning för att beräkna blandningsförhållanden. Målalkoholhalten placeras i mitten av kvadraten, vinets alkoholhalt uppe till vänster och spritens alkoholhalt nere till vänster. De diagonala skillnaderna ger de proportionella delarna av varje vätska som behövs.',
  },
  {
    question: 'Vilken är den typiska alkoholhalten för vermouth?',
    answer: 'Traditionell vermouth har en alkoholhalt på 15 % till 18 %. Torr vermouth (franskstil) ligger vanligtvis i den lägre änden (15-16 %), medan söt vermouth (italienskstil) ofta är 16-18 %. Rosé-vermouth befinner sig däremellan.',
  },
  {
    question: 'Vilket basvin bör jag använda till vermouth?',
    answer: 'Traditionellt fungerar ett neutralt, torrt vitt vin med 10-12 % alkohol bäst. Vinet ger ryggraden, men eftersom det kommer att aromatiseras med örter och botanicals behöver du inget dyrt vin - en ren, syrarik bas är idealisk.',
  },
  {
    question: 'Kan jag använda neutral alkohol istället för brandy?',
    answer: 'Ja. Neutral alkohol (96 % vol.) ger maximal kontroll och en renare smakprofil. Brandy tillför sin egen karaktär (ek, torkad frukt, vanilj), vilket kan vara önskvärt eller oönskat beroende på stilen. Portvin använder traditionellt druvbrandy, medan vissa vermouths använder neutral sprit.',
  },
  {
    question: 'Hur bevarar berikningsprocessen vinet?',
    answer: 'När vinets alkoholhalt överstiger ungefär 15-16 % hämmas jästens fermentering - jästen kan inte överleva i miljöer med hög alkoholhalt. Det är därför berikade viner har mycket längre hållbarhet än vanligt vin. Alkoholen fungerar som ett naturligt konserveringsmedel mot både jäst- och bakterieförstöring.',
  },
];

const howTo: FortifiedWineBuilderLocaleContent['howTo'] = [
  { name: 'Välj stil', text: 'Välj Vermouth, Portvin, Sherry eller Anpassad för att automatiskt fylla i det rekommenderade målintervallet för alkoholhalt.' },
  { name: 'Ange vindata', text: 'Ange volymen på ditt basvin (eller målvolymen i läge B) och dess nuvarande alkoholhalt.' },
  { name: 'Ställ in sprit', text: 'Välj ett spritpreset eller ange en anpassad alkoholhalt. Pearson Kvadraten uppdateras i realtid.' },
  { name: 'Läs ditt recept', text: 'Kalkylatorn visar exakt hur många milliliter sprit som ska tillsättas och slutvolymen.' },
];


const seo: FortifiedWineBuilderLocaleContent['seo'] = [
  { type: 'title', text: 'Pearson Kvadraten: Antik matematik, perfekt vin', level: 2 },
  { type: 'paragraph', html: '<strong>Pearson Kvadraten</strong> är ett av de äldsta och mest eleganta verktygen inom vinmakarens matematik. Utvecklad på 1800-talet låter den vilken vinmakare som helst - professionell eller amatör - beräkna blandningsförhållanden med ingenting mer än subtraktion. Vårt verktyg digitaliserar denna visuella metod och lägger till realtidsfeedback, så att du spenderar mindre tid på beräkningar och mer tid på att skapa.' },
  { type: 'stats', items: [{ label: 'Vermouth', value: '15-18 % vol.', icon: 'mdi:glass-cocktail' }, { label: 'Portvin', value: '18-20 % vol.', icon: 'mdi:bottle-wine' }, { label: 'Sherry', value: '15-17 % vol.', icon: 'mdi:cup-water' }], columns: 3 },
  { type: 'card', title: 'Varför berika till 18 %?', icon: 'mdi:shield-check', html: 'Ovanför ungefär 15 % vol. hämmas <em>Saccharomyces cerevisiae</em> - den primära vinjästen. Vid 18 % är jäsningen fullständigt stoppad. Det är därför portvin behåller restsöta: spriten tillsätts mitt under jäsningen och dödar jästen innan allt socker har förbrukats.' },
  { type: 'tip', title: 'Proffstips: Mät vid 20 °C', html: 'Alkoholens densitet förändras med temperaturen. Officiella alkoholmätningar är kalibrerade vid 20 °C. Om din sprit eller vin är avsevärt varmare eller kallare, tillämpa en korrektionsfaktor: ungefär +0,04 % vol. per °C under 20 °C och −0,04 % per °C över.' },
  { type: 'title', text: 'Hantverksvermouth-renässansen', level: 2 },
  { type: 'paragraph', html: 'Södra Europa upplever en hantverksvermouth-renässans. Barcelona, Valencia och San Sebastián har återtagit <em>la hora del vermut</em> som en kulturell institution, och små producenter i Spanien, Italien och Frankrike buteljerar remarkabla uttryck. Detta har skapat en ny generation hemmaproducenter som vill ha tekniska verktyg som matchar deras ambitioner.' },
  { type: 'summary', title: 'Vem är det här verktyget för?', items: ['Hemmavinmakare: Berika din skörd med precision istället för gissningar.', 'Hantverksvermouthproducenter: Prototypa nya alkoholmål innan du skalar upp till fulla batcher.', 'Spritutbildare: Demonstrera Pearson Kvadrat-metoden visuellt i workshops.'] },
];

const schemas: FortifiedWineBuilderLocaleContent['schemas'] = [
  { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) } as WithContext<FAQPage>,
  { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((step, i) => ({ '@type': 'HowToStep', position: i + 1, name: step.name, text: step.text })) } as WithContext<HowTo>,
  { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'UtilityApplication', operatingSystem: 'Web', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' } } as WithContext<SoftwareApplication>,
];

export const content: FortifiedWineBuilderLocaleContent = { slug, title, description, ui, seo, faqTitle, faq, bibliography, howTo, schemas };
