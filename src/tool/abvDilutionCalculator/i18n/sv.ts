import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { AbvDilutionCalculatorUI } from '../ui';

const slug = 'kalkylator-utspadning-alkohol-och-proof';
const title = 'Kalkylator för alkoholutspädning och proof';
const description = 'Räkna ut hur mycket vatten som behövs för att sänka alkoholhalten i en spritdryck. Kalkylatorn visar slutvolym, ren alkohol och spädningsförhållande.';
const ui: AbvDilutionCalculatorUI = {
  unitLabel: 'Volymenheter', metricUnit: 'Metriska ml', imperialUnit: 'Imperial fl oz', strengthLabel: 'Styrkeenheter', abvUnit: 'Alkoholprocent', proofUnit: 'Amerikansk proof', presetLabel: 'Snabba scenarier', spiritPresetLabel: '750 ml sprit', liqueurPresetLabel: '700 ml likör', cocktailPresetLabel: '500 ml sats', startingStrengthLabel: 'Startstyrka', startingVolumeLabel: 'Startvolym', targetStrengthLabel: 'Målstyrka', waterToAddLabel: 'Vatten att tillsätta', finalVolumeLabel: 'Slutvolym', pureAlcoholLabel: 'Ren alkohol', ratioLabel: 'Vattenförhållande', startingProofLabel: 'Start proof', targetProofLabel: 'Mål proof', readyMessage: 'Målet är lägre. Mät upp vattnet och blanda stegvis.', invalidMessage: 'Målet måste vara lägre än startstyrkan för att vara en utspädning.', largeAdditionMessage: 'Den här satsen behöver minst lika mycket vatten som sprit. Blanda i steg och kontrollera igen.', bottleLabel: 'Graderad flaska som visar beräknad slutvolym', waterLayerLabel: 'Vattenskikt i den färdiga blandningen', estimateNotice: 'Detta är endast en planeringsuppskattning. Alkohol och vatten kan krympa när de blandas, så kontrollera slutstyrkan med lämplig utrustning.', sourceLabel: 'Formelkällor', calculateAction: 'Spädningsvärden', resetAction: 'Återställ värden', volumeHint: 'Välj volymen du har innan du tillsätter vatten.', strengthHint: 'Proof visas enligt amerikansk standard: 80 proof motsvarar 40 procent alkohol.',
};
const faq = [
  { question: 'Hur räknar jag ut vatten för att späda alkohol?', answer: 'Multiplicera startvolymen med startstyrkan för att få volymen ren alkohol. Dela den volymen med målstyrkan som decimaltal för att få teoretisk slutvolym. Dra bort startvolymen för att hitta mängden vatten.' },
  { question: 'Vad är skillnaden mellan ABV och proof?', answer: 'ABV är andelen ren alkohol i volym. I det amerikanska proofsystemet är proof dubbelt så högt som ABV, så 80 proof motsvarar 40 procent ABV. Omkopplaren ändrar bara visningen, inte den verkliga alkoholstyrkan.' },
  { question: 'Tar kalkylatorn hänsyn till att alkohol och vatten krymper?', answer: 'Nej. Resultatet är en uppskattning baserad på att ren alkohol bevaras. Etanol och vatten kan tillsammans ta lite mindre plats efter blandning, och temperaturen påverkar också volymen. Använd resultatet som en plan och kontrollera med en lämplig alkoholmätare.' },
  { question: 'Kan kalkylatorn användas för en laglig alkoholprodukt?', answer: 'Verktyget gör bara matematiska beräkningar och kontrollerar inte recept, märkning, punktskatt, tillstånd eller lokala regler. Följ kraven där drycken tillverkas och säljs och använd ren utrustning.' },
];
const howTo = [
  { name: 'Välj volymenheter', text: 'Välj metriska milliliter eller imperial fluid ounces. Den fysiska volymen är oförändrad när du byter enhet.' },
  { name: 'Ange startsatsen', text: 'Ställ in startstyrka och spritvolym före utspädning.' },
  { name: 'Ange målstyrkan', text: 'Skriv in en lägre styrka för den färdiga blandningen. Mål som inte är utspädningar markeras.' },
  { name: 'Tillsätt vatten stegvis', text: 'Läs av vatten och slutvolym, blanda gradvis och kontrollera styrkan med lämplig utrustning.' },
];
const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'UtilitiesApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }, inLanguage: 'sv' };
export const content: ToolLocaleContent<AbvDilutionCalculatorUI> = { slug, title, description, ui, faqTitle: 'Frågor om utspädning', bibliographyTitle: 'Formelkällor', faq, howTo, schemas: [faqSchema, howToSchema, appSchema], bibliography, seo: [
  { type: 'title', text: 'Så fungerar alkoholutspädning', level: 2 },
  { type: 'paragraph', html: 'Utspädning minskar alkoholkoncentrationen genom att vatten tillsätts, medan mängden ren alkohol ungefär bevaras. Den här <strong>kalkylatorn för alkoholutspädning</strong> omvandlar startstyrka och volym till en praktisk vattenmängd och teoretisk slutvolym. Den körs lokalt i webbläsaren utan uppladdade satsdata.' },
  { type: 'table', headers: ['Värde', 'Formel', 'Betydelse'], rows: [['Ren alkohol', 'startvolym x startstyrka', 'Alkohol som följer med i blandningen'], ['Slutvolym', 'ren alkohol / målstyrka', 'Teoretisk total efter spädning'], ['Vatten', 'slutvolym minus startvolym', 'Vattenmängd att planera']] },
  { type: 'title', text: 'Omvandling mellan ABV och proof', level: 2 },
  { type: 'paragraph', html: 'Alkoholprocent anger hur stor del av vätskan som är ren alkohol. I det amerikanska systemet är proof dubbelt så högt som ABV, vilket gör 40 procent ABV till 80 proof. Använd styrkeomkopplaren när en etikett visar proof, men tänk på att system kan skilja sig mellan länder och historiska perioder.' },
  { type: 'stats', columns: 3, items: [{ value: '80 proof', label: '40 procent ABV' }, { value: '1:1', label: 'Vattenförhållande i standardsituationen' }, { value: '100% lokalt', label: 'Ingen satsdata uppladdad' }] },
  { type: 'title', text: 'Varför resultatet är en uppskattning', level: 2 },
  { type: 'paragraph', html: 'Beräkningen bevarar volymen ren alkohol, men verkliga blandningar är inte helt additiva. Alkohol och vatten krymper när de blandas, och temperaturen ändrar densitet och uppmätt volym. Tillsätt vatten långsamt, vänta tills blandningen når mättemperatur och kontrollera styrkan med lämplig utrustning.' },
  { type: 'tip', title: 'Blanda stegvis och kontrollera', html: 'Använd rent, uppmätt vatten och ett kärl som rymmer den teoretiska slutvolymen. Kalkylatorn känner inte till temperatur, socker, smaksättning eller lokala mätregler. Se vattenmängden som en startplan, inte som ett intyg på slutlig styrka.' },
  { type: 'title', text: 'En upprepningsbar spädningsrutin', level: 2 },
  { type: 'list', items: ['Anteckna etikettens startstyrka och satsens faktiska volym.', 'Välj en målstyrka som är lägre än startstyrkan.', 'Beräkna ren alkohol, slutvolym och vatten.', 'Tillsätt det mesta av vattnet, blanda och tillsätt resten i små steg.', 'Kontrollera den färdiga blandningen vid mättemperaturen.'] },
  { type: 'diagnostic', variant: 'warning', title: 'Matematik är inget produktionstillstånd', html: 'Sidan validerar inte ingredienser, hygien, märkning, skatt, tillstånd eller försäljning. Använd aldrig ett kalkylresultat för att hoppa över regler som gäller din dryck eller plats.' },
] };
