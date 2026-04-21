import { bibliography } from '../bibliography';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import type { FortifiedWineBuilderUI, FortifiedWineBuilderLocaleContent } from '../index';

const slug = 'kalkulator-wina-fortyfikowanego';
const title = 'Kalkulator Wina Fortyfikowanego i Wermutu: Metoda Kwadratu Pearsona';
const description = 'Oblicz dokładnie, ile alkoholu dodać do swojego wina, aby osiągnąć docelową zawartość alkoholu. Twórz doskonały wermut, porto i sherry metodą Kwadratu Pearsona.';

const ui: FortifiedWineBuilderUI = {
  intentionTitle: 'Co tworzysz?',
  intentionVermouth: 'Wermut',
  intentionPort: 'Porto',
  intentionSherry: 'Sherry',
  intentionCustom: 'Niestandardowe',
  modeALabel: 'Z posiadanego wina',
  modeBLabel: 'Docelowa objętość końcowa',
  wineSection: 'Wino Bazowe',
  wineVolumeLabel: 'Objętość wina (L)',
  wineAbvLabel: 'Zawartość alkoholu w winie (%)',
  spiritSection: 'Alkohol Fortyfikujący',
  spiritAbvLabel: 'Zawartość alkoholu w destylaci (%)',
  brandyPreset: 'Brandy (38°)',
  neutralPreset: 'Neutralny (96°)',
  aguardientePreset: 'Aguardiente (42°)',
  targetAbvLabel: 'Docelowa zawartość alkoholu (%)',
  targetVolumeLabel: 'Docelowa całkowita objętość (L)',
  resultsTitle: 'Twój Przepis',
  addLabel: 'Dodaj',
  finalVolumeLabel: 'Objętość końcowa',
  bottlesSection: 'Potrzebne butelki',
  copyBtn: 'Kopiuj Przepis',
  copiedBtn: 'Skopiowano!',
  pearsonTitle: 'Kwadrat Pearsona',
  wineCornerLabel: 'Wino',
  spiritCornerLabel: 'Destylatka',
  emptyState: 'Wprowadź wartości, aby zobaczyć Kwadrat Pearsona',
  errorAbv: 'Zawartość alkoholu w destylacie musi być wyższa niż wartość docelowa, a wartość docelowa musi być wyższa niż zawartość alkoholu w winie.',
  errorMode: 'Wprowadź prawidłową objętość, aby obliczyć.',
};

const faqTitle = 'Często Zadawane Pytania';

const faq: FortifiedWineBuilderLocaleContent['faq'] = [
  {
    question: 'Czym jest metoda Kwadratu Pearsona?',
    answer: 'Kwadrat Pearsona to prosta metoda graficzna stosowana w winiarstwie do obliczania proporcji mieszania. Docelową zawartość alkoholu umieszcza się w centrum kwadratu, zawartość alkoholu w winie w lewym górnym rogu, a zawartość alkoholu w destylacie w lewym dolnym rogu. Różnice po przekątnej podają proporcjonalne ilości każdego płynu.',
  },
  {
    question: 'Jaka jest typowa zawartość alkoholu w wermucie?',
    answer: 'Tradycyjny wermut ma zawartość alkoholu od 15 % do 18 %. Wytrawny wermut (styl francuski) zazwyczaj mieści się w dolnym zakresie (15–16 %), natomiast słodki wermut (styl włoski) często osiąga 16–18 %. Wermut różowy plasuje się pomiędzy nimi.',
  },
  {
    question: 'Jakiego wina bazowego powinienem użyć do wermutu?',
    answer: 'Tradycyjnie najlepiej sprawdza się neutralne, wytrawne białe wino o zawartości alkoholu 10–12 %. Wino stanowi podstawę, ale ponieważ zostanie zaramatyzowane ziołami i botanicals, nie potrzebujesz drogiego wina — idealna jest czysta, kwaśna baza.',
  },
  {
    question: 'Czy mogę użyć neutralnego alkoholu zamiast brandy?',
    answer: 'Tak. Neutralny alkohol (96 % obj.) daje maksymalną kontrolę i czystszy profil smakowy. Brandy wnosi własny charakter (dąb, suszone owoce, wanilia), który może być pożądany lub niepożądany w zależności od stylu. Porto tradycyjnie używa winogronowego brandy, podczas gdy niektóre wermuty używają neutralnego alkoholu.',
  },
  {
    question: 'Jak fortyfikacja konserwuje wino?',
    answer: 'Gdy zawartość alkoholu w winie przekracza około 15–16 %, fermentacja przez drożdże zostaje zahamowana — drożdże nie przeżywają w środowiskach o wysokiej zawartości alkoholu. Dlatego wina fortyfikowane mają znacznie dłuższy okres przydatności do spożycia niż zwykłe wino. Alkohol działa jako naturalny środek konserwujący zarówno przeciwko drożdżom, jak i bakteriom.',
  },
];

const howTo: FortifiedWineBuilderLocaleContent['howTo'] = [
  { name: 'Wybierz styl', text: 'Wybierz Wermut, Porto, Sherry lub Niestandardowe, aby automatycznie wypełnić zalecaną docelową zawartość alkoholu.' },
  { name: 'Wprowadź dane wina', text: 'Podaj objętość wina bazowego (lub docelową objętość końcową w trybie B) i jego aktualną zawartość alkoholu.' },
  { name: 'Ustaw destylatę', text: 'Wybierz preset destylaty lub wprowadź niestandardową zawartość alkoholu. Kwadrat Pearsona aktualizuje się w czasie rzeczywistym.' },
  { name: 'Odczytaj przepis', text: 'Kalkulator pokazuje dokładnie, ile mililitrów destylaty dodać i jaka będzie objętość końcowa.' },
];


const seo: FortifiedWineBuilderLocaleContent['seo'] = [
  { type: 'title', text: 'Kwadrat Pearsona: Starożytna matematyka, doskonałe wino', level: 2 },
  { type: 'paragraph', html: '<strong>Kwadrat Pearsona</strong> to jedno z najstarszych i najbardziej eleganckich narzędzi matematyki winiarskiej. Opracowany w XIX wieku, pozwala każdemu winiarowi — profesjonalnemu lub amatorowi — obliczać proporcje mieszania za pomocą samego odejmowania. Nasze narzędzie digitalizuje tę wizualną metodę i dodaje informacje zwrotne w czasie rzeczywistym, dzięki czemu spędzasz mniej czasu na obliczeniach, a więcej na tworzeniu.' },
  { type: 'stats', items: [{ label: 'Wermut', value: '15–18 % obj.', icon: 'mdi:glass-cocktail' }, { label: 'Porto', value: '18–20 % obj.', icon: 'mdi:bottle-wine' }, { label: 'Sherry', value: '15–17 % obj.', icon: 'mdi:cup-water' }], columns: 3 },
  { type: 'card', title: 'Dlaczego fortyfikować do 18 %?', icon: 'mdi:shield-check', html: 'Powyżej około 15 % obj. <em>Saccharomyces cerevisiae</em> — główne drożdże winne — zostaje zahamowane. Przy 18 % fermentacja jest całkowicie zatrzymana. Dlatego porto zachowuje cukier resztkowy: alkohol jest dodawany w trakcie fermentacji, zabijając drożdże zanim cały cukier zostanie zużyty.' },
  { type: 'tip', title: 'Wskazówka Pro: Mierz przy 20 °C', html: 'Gęstość alkoholu zmienia się z temperaturą. Oficjalne pomiary zawartości alkoholu są skalibrowane przy 20 °C. Jeśli Twoja destylata lub wino jest znacznie cieplejsze lub chłodniejsze, zastosuj współczynnik korekcyjny: około +0,04 % obj. na °C poniżej 20 °C i −0,04 % na °C powyżej.' },
  { type: 'title', text: 'Renesans Rzemieślniczego Wermutu', level: 2 },
  { type: 'paragraph', html: 'Południowa Europa przeżywa renesans rzemieślniczego wermutu. Barcelona, Walencja i San Sebastián odzyskały <em>la hora del vermut</em> jako instytucję kulturalną, a małe wytwórnie w Hiszpanii, Włoszech i Francji butelkują niezwykłe wyroby. Stworzyło to nowe pokolenie domowych producentów, którzy chcą narzędzi technicznych odpowiadających ich ambicjom.' },
  { type: 'summary', title: 'Dla kogo jest to narzędzie?', items: ['Domowi winiarze: Fortyfikuj swoje zbiory z precyzją zamiast zgadywać.', 'Rzemieślnicy wermutowi: Prototypuj nowe docelowe zawartości alkoholu przed skalowaniem do pełnych partii.', 'Nauczyciele o napojach spirytusowych: Demonstruj metodę Kwadratu Pearsona wizualnie na warsztatach.'] },
];

const schemas: FortifiedWineBuilderLocaleContent['schemas'] = [
  { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) } as WithContext<FAQPage>,
  { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((step, i) => ({ '@type': 'HowToStep', position: i + 1, name: step.name, text: step.text })) } as WithContext<HowTo>,
  { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'UtilityApplication', operatingSystem: 'Web', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' } } as WithContext<SoftwareApplication>,
];

export const content: FortifiedWineBuilderLocaleContent = { slug, title, description, ui, seo, faqTitle, faq, bibliography, howTo, schemas };
