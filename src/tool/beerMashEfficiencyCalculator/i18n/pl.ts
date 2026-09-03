import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { BeerMashEfficiencyCalculatorUI } from '../ui';

const slug = 'kalkulator-wydajnosci-zatarcia-piwa';
const title = 'Kalkulator Wydajności Zatarcia Piwa';
const description = 'Oblicz procentową wydajność zatarcia, ekstrakcję cukrów oraz przewidywaną gęstość brzeczki w piwowarstwie domowym.';

const ui: BeerMashEfficiencyCalculatorUI = {
  unitMetric: 'Metryczny',
  stagePreboil: 'Brzeczka przed gotowaniem',
  stagePostboil: 'Brzeczka po gotowaniu',
  unitImperial: 'Imperialny',
  labels: {
    grainWeight: 'Całkowita masa zasypu',
    grainType: 'Wartość potencjału słodu',
    customPotential: 'Własny potencjał słodu (SG)',
    wortVolume: 'Objętość brzeczki przed gotowaniem',
    measuredSg: 'Zmierzony ciężar właściwy (SG)',
    unitSystem: 'System jednostek',
    sampleTemp: 'Temperatura próbki',
    calibTemp: 'Temperatura kalibracji',
    stageLabel: 'Etap warzenia',
    presets: 'Częste potencjały słodów',
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
    pilsner: 'Słód pilzneński (1.037 / 37 PPG)',
    pale_ale: 'Słód Pale Ale (1.038 / 38 PPG)',
    vienna: 'Słód wiedeński (1.036 / 36 PPG)',
    munich: 'Słód monachijski (1.035 / 35 PPG)',
    wheat: 'Słód pszenny (1.038 / 38 PPG)',
    caramel_30: 'Karmel 30L (1.034 / 34 PPG)',
    caramel_60: 'Karmel 60L (1.034 / 34 PPG)',
    chocolate: 'Słód czekoladowy (1.034 / 34 PPG)',
    custom: 'Własny potencjał...',
  },
  results: {
    efficiencyTitle: 'Wydajność zatarcia',
    efficiencyBadge: 'Obliczony status',
    correctedGravity: 'Skorygowana gęstość SG',
    measuredGravity: 'Zmierzony ciężar',
    expectedGravity75: 'SG przy 75% wydajności',
    expectedGravity80: 'SG przy 80% wydajności',
    expectedGravity85: 'SG przy 85% wydajności',
    potentialPoints: 'Punkty potencjalne ogółem',
    extractedPoints: 'Zmierzone punkty ekstrakcji',
    wortBrix: 'Szacowane °Brix',
  },
  statusMessages: {
    excellent: 'Doskonała ekstrakcja (82%+)',
    good: 'Dobra wydajność (74% - 81%)',
    average: 'Średnia wydajność (65% - 73%)',
    poor: 'Niska ekstrakcja (< 65%)',
  },
  kettleVisual: {
    mashTunTitle: 'Ekstrakcja w kadzi zacierno-filtracyjnej',
    wortLevel: 'Poziom brzeczki',
    sugarExtraction: 'Ekstrakcja cukrów',
  },
};

const faq = [
  {
    question: 'Czym jest wydajność zatarcia w piwowarstwie?',
    answer: 'Wydajność zatarcia określa procent potencjalnych cukrów wyekstrahowanych ze słodu do brzeczki przed gotowaniem.',
  },
  {
    question: 'Jaka wydajność zatarcia jest uważana za dobrą?',
    answer: 'W piwowarstwie domowym wydajność w przedziale 70% - 80% uznaje się za bardzo dobry wynik.',
  },
  {
    question: 'Jak oblicza się wydajność zatarcia?',
    answer: 'Wydajność oblicza się poprzez porównanie uzyskanych punktów gęstości w brzeczce z maksymalnym potencjałem zasypu.',
  },
  {
    question: 'Jak poprawić niską wydajność?',
    answer: 'Zadbaj o właściwy stopień śrutowania, optymalne pH zacieru (5.2 - 5.6) oraz równomierne wysładzanie.',
  },
  {
    question: 'Jaka jest różnica między wydajnością zatarcia a wydajnością warzelni?',
    answer: 'Wydajność zatarcia mierzy tylko ekstrakcję w kadzi, podczas gdy wydajność warzelni uwzględnia straty w kotle i fermentorze.',
  },
  {
    question: 'Jak stosunek wody do ziarna wpływa na proces?',
    answer: 'Rzadszy zacier (3.5 do 4.0 L na kg słodu) ułatwia pracę enzymów i wypłukiwanie cukrów.',
  }
];

const howTo = [
  {
    name: 'Wybierz system jednostek',
    text: 'Wybierz system metryczny lub imperialny.',
  },
  {
    name: 'Wprowadź wagę i potencjał słodu',
    text: 'Wybierz słód z listy lub wpisz własny potencjał.',
  },
  {
    name: 'Podaj objętość brzeczki i pomiar SG',
    text: 'Wpisz objętość brzeczki przed gotowaniem i odczyt ze spławika.',
  },
  {
    name: 'Przeanalizuj wydajność i cele',
    text: 'Porównaj swoją gęstość z wartościami docelowymi dla 75%, 80% i 85%.',
  },
  {
    name: 'Dostosuj recepturę na przyszłość',
    text: 'Użyj wyliczonej wydajności do precyzyjnego skalowania kolejnych zasypów.',
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
  inLanguage: 'pl',
};

export const content: ToolLocaleContent<BeerMashEfficiencyCalculatorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Najczęstsze pytania dotyczące wydajności zatarcia',
  bibliographyTitle: 'Odniesienia i formuły',
  faq,
  howTo,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    {
      type: 'title',
      text: 'Zrozumienie wydajności zatarcia piwa',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Wydajność zatarcia mierzy skuteczność przekształcania skrobi słodu w cukry fermentowalne i ich zbierania w brzeczce. Jest kluczowa dla precyzyjnego projektowania receptur.',
    },
    {
      type: 'table',
      headers: ['Parametr', 'Formuła', 'Opis'],
      rows: [
        ['Punkty potencjalne', 'Waga x PPG słodu', 'Teoretyczne maksimum'],
        ['Punkty wyekstrahowane', 'Objętość x punkty SG', 'Rzeczywiste punkty w brzeczce'],
        ['Wydajność zatarcia', '(Wyekstrahowane / Potencjał) x 100', 'Rzeczywisty procent ekstrakcji'],
        ['Stopnie Brix brzeczki', '-668.82 + 11.536 x SG x 100...', 'Odpowiednik refraktometryczny']
      ],
    },
    {
      type: 'title',
      text: 'Kluczowe czynniki wpływające na ekstrakcję',
      level: 2,
    },
    {
      type: 'list',
      items: [
        'Śrutowanie: Drobniejsze śrutowanie zwiększa powierzchnię, lecz może utrudnić filtrację.',
        'Temperatura i pH: Optymalna aktywność enzymów w zakresie 64°C - 68°C przy pH 5.2 - 5.6.',
        'Technika wysładzania: Przepływ ciągły lub stopniowy wpływa na wymywanie cukrów.',
        'Stosunek wody do zasypu: Rzadsze zaciery sprzyjają mobilności enzymów.',
        'Głębokość złoża: Między 30 cm a 45 cm optymalizuje się dynamikę cieczy.'
      ],
    },
    {
      type: 'tip',
      title: 'Używaj 75% jako punktu odniesienia',
      html: 'Projektując nową recepturę, założenie 75% wydajności zatarcia stanowi bezpieczny punkt wyjścia.',
    },
    {
      type: 'title',
      text: 'Korekta procesu na podstawie wyników',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Jeśli zmierzona gęstość przed gotowaniem jest niższa od docelowej, można wydłużyć gotowanie dla zagęszczenia brzeczki lub dodać ekstrakt słodowy.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Wydajność zatarcia a wydajność warzelni',
      html: 'Nie należy mylić wydajności samego zacierania ze sprawnością całego sprzętu piwowarskiego.',
    },
  ],
};
