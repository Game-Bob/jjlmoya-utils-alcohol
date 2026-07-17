import { bibliography } from '../bibliography';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import type { CarbonationUI, CarbonationLocaleContent } from '../index';

const slug = 'kalkulator-karbonatacji-piwa';
const title = 'Kalkulator Karbonatacji i Prymowania Piwa';
const description = 'Oblicz dokładne gramy Dekstrozy, cukru trzcinowego lub DME (Suchego Ekstraktu Słodowego) do butelkowania domowej pszenicy. Wpisz objętość, temperaturę fermentacji i styl, aby uzyskać doskonałe prymowanie.';

const ui: CarbonationUI = {
  parametersTitle: 'Parametry',
  metricBtn: 'Metryczny',
  imperialBtn: 'Imperialne',
  volumeLabel: 'Objętość Piwa',
  maxTempLabel: 'Temperatura Maksymalna',
  litersUnit: 'Litry',
  celsiusUnit: '°C',
  gallonsUnit: 'Galony',
  fahrenheitUnit: '°F',
  desiredCo2Label: 'Pożądana Karbonatacja',
  volUnit: 'Vol CO2',
  resultsTitle: 'Wyniki Prymowania',
  tableSugarLabel: 'Cukier Stołowy',
  cornSugarLabel: 'Cukier Kukurydziany (Dekstroza)',
  dmeLabel: 'Suchy Ekstrakt Słodowy (DME)',
  safetyTitle: 'NIEBEZPIECZEŃSTWO WYBUCHU!',
  lowCarbonation: 'NISKA KARBONATACJA',
  optimalCarbonation: 'OPTYMALNA KARBONATACJA',
  highEffervescence: 'WYSOKA MUSUJĄCYCH',
  bubblingVisualizationLabel: 'Przybliżona wizualizacja baniek'
};

const faqTitle = 'Najczęściej Zadawane Pytania';

const faq: CarbonationLocaleContent['faq'] = [
  {
    question: "Dlaczego temperatura jest ważna dla karbonatacji?",
    answer: "Pozostały CO2 w twoim piwie zależy od najwyższej temperatury osiągniętej po fermentacji: zimna ciecz retencjonuje więcej rozpuszczonego gazu niż ciepła ciecz. Jeśli wpiszesz temperaturę niższą niż rzeczywista, kalkulator założy więcej resztkowego CO2 niż tam jest naprawdę i da ci mniej cukru niż potrzeba. Jeśli wpiszesz zbyt wysoko, dzieje się odwrotnie - dodajesz więcej cukru niż trzeba i wpychasz swoją partię w strefę niebezpieczną dla wybuchu butelek, gdzie nadmierne ciśnienie powoduje pęknięcie butelek lub gwałtowne rozszchnięcie się czapek.",
  },
  {
    question: "Jaki cukier jest najlepszy do prymowania?",
    answer: "Dekstroza (cukier kukurydziany) jest preferowana, ponieważ jest neutralna i szybko się rozpuszcza. Cukier stołowy działa dobrze, ale wymaga około 10% mniej wagi.",
  },
  {
    question: "Co się stanie, jeśli dodam zbyt dużo cukru prymacyjnego?",
    answer: "Przeprymowanie generuje nadmierny CO2 w butelce. Standardowe butelki szklane zawodzą przy około 3,5-4,0 objętościach CO2. Poza tym punktem butelka może pęknąć lub czapka może gwałtownie odleć. Dlatego dokładność ma znaczenie - nawet 5 dodatkowych gramów na litr może popchnąć partię w strefę niebezpieczną.",
  },
  {
    question: "Jak długo trwa karbonatacja piwa po butelkowaniu?",
    answer: "Między 2 a 3 tygodniami w temperaturze pokojowej (18-22°C) jest typowym zakresem dla drożdży do całkowitego sfermentowania dodanego cukru i integracji CO2 z płynem. Otwarcie butelki przed zakończeniem procesu zawsze daje mylący wynik: piwo wydaje się niedokarbonatyzowane, chociaż karbonatacja wciąż się rozwija. W przypadku DME proces może być nieco wolniejszy ze względu na złożoność jego fermentiwalnych cukrów.",
  },
];

const howTo: CarbonationLocaleContent['howTo'] = [
  {
    name: "Zmierz rzeczywistą objętość",
    text: "Wpisz, ile litrów (lub galonów) piwa masz gotowych do butelkowania po zakończeniu fermentacji.",
  },
  {
    name: "Zdefiniuj temperaturę fermentacji",
    text: "Wpisz najwyższą temperaturę osiągniętą przez piwo podczas lub po aktywnej fermentacji.",
  },
  {
    name: "Wybierz styl lub objętość CO2",
    text: "Wybierz pożądany poziom karbonatacji. Style wahają się od 1,5 (Stouty) do 4,5 (Piwa Pszeniczne).",
  },
];


const seo: CarbonationLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Ostateczny Przewodnik Karbonatacji i Prymowania',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'Opanuj sztukę prymowania i zmień domowe piwo z płaskiego eksperymentu na profesjonalne, musujące doświadczenie. Prymowanie polega na dodaniu dokładnej ilości cukru, aby pozostały drożdż w butelce wytwarzał naturalny CO2 podczas drugorzędnej fermentacji. Zbyt mało cukru daje płaskie piwo; zbyt dużo powoduje niebezpieczne ciśnienie, które może zniszczyć butelki. Różnica między nimi to zaledwie kilka gramów - dlatego istnieje ten kalkulator.'
  },
  {
    type: 'proscons',
    title: 'Krytyczne Czynniki Sukcesu',
    items: [
      { pro: 'Temperatura: Pozostały CO2 zależy od szczytu temperatury po fermentacji.', con: '' },
      { pro: 'Dokładność: 5 dodatkowych gramów na litr może być różnicą między doskonałą karbonatacją a gejzerem.', con: '' },
      { pro: '', con: 'Utlenianie: Unikaj rozpryskiwania płynu podczas transferu w celu wymieszania cukru prymacyjnego.' }
    ]
  },
  {
    type: 'title',
    text: 'Objętości CO2 według Stylu Piwa',
    level: 2
  },
  {
    type: 'stats',
    items: [
      { label: 'British Stouts', value: '1,5 - 2,0 Vol', icon: 'mdi:beer' },
      { label: 'IPAs & Ales', value: '2,2 - 2,6 Vol', icon: 'mdi:hops' },
      { label: 'German Wheat', value: '3,3 - 4,5 Vol', icon: 'mdi:barley' }
    ],
    columns: 3
  },
  {
    type: 'card',
    title: 'Jaki Cukier Powinieneś Wybrać?',
    icon: 'mdi:corn',
    html: '<strong>Dekstroza</strong> jest neutralna i profesjonalna - standard branżowy. <strong>Cukier Stołowy</strong> jest ekonomiczny i efektywny (użyj 10% mniej wagi niż dekstroza). <strong>DME (Suchy Ekstrakt Słodowy)</strong> to wybór purystów, ale trudniej dokładnie przewidzieć, ponieważ jego fermentiwalność różni się w zależności od marki i składu słodu.'
  },
  {
    type: 'diagnostic',
    title: 'Ostrzeżenie o Bezpieczeństwie',
    icon: 'mdi:alert-decagram',
    variant: 'error',
    badge: 'Niebezpieczeństwo',
    html: 'Standardowe butelki szklane zawodzą przy 3,5-4,0 objętościach CO2. Nie próbuj karbonatyzować stylów belgijskich lub pszenicznych w cienkim szkle. Zawsze używaj butelek przeznaczonych do napojów gazowanych i nigdy nie ponownie nie używaj butelek komercyjnych, które mogą mieć mikroskopijne uszkodzenia strukturalne z poprzedniego użytku.'
  },
  {
    type: 'tip',
    title: 'Wskazówka Pro: Prawidłowo Rozpuść Cukier',
    html: 'Zawsze gotuj roztwór cukru prymacyjnego (cukier rozpuszczony w około 250ml wody na 20L partii) przez 10 minut przed dodaniem go do piwa. Gotowanie sterylizuje roztwór i zapewnia, że cukier jest całkowicie rozpuszczony i równomiernie rozłożony w całej partii, zapobiegając punktom gorącym, które powodują nierówną karbonatację między butelkami.'
  },
  {
    type: 'summary',
    title: 'Do Kogo Jest To Narzędzie?',
    items: [
      'Domowi Browarzy: Uzyskaj dokładne obliczenie cukru prymacyjnego dla dowolnego rozmiaru partii, stylu i temperatury fermentacji.',
      'Entuzjaści Piwa Rzemieślniczego: Zrozum naukę stojącą za tym, dlaczego piwa handlowe mają różne poziomy karbonatacji.',
      'Profesjonalni Browarzy: Skontroluj obliczenia ręczne przed butelkowaniem dużych partii komercyjnych.'
    ]
  },
  {
    type: 'title',
    text: 'Nauka Karbonatacji: Prawo Henry\'ego',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'W istocie karbonatacja jest rządzona przez <strong>Prawo Henry\'ego</strong>: ilość gazu rozpuszczonego w cieczy jest proporcjonalna do ciśnienia cząstkowego tego gazu nad cieczą. Gdy prymiesz butelkę i zamknieszją, drożdże zużywają cukier i wytwarzają CO2 w uszczelnonym środowisku. Gdy ciśnienie rośnie, gaz jest zmuszany z powrotem do roztworu. Temperatura, w której osiągnięte jest to równowagi, określa ostateczny poziom karbonatacji - dlatego temperatura fermentacji jest najważniejszą zmienną w tym kalkulatorze.'
  },
  {
    type: 'paragraph',
    html: 'Pozostały CO2 w twoim piwie przed prymowaniem nie jest równy zeru. Każde piwo zawiera rozpuszczony CO2 z procesu fermentacji, a ilość zatrzymana zależy od najwyższej temperatury osiągniętej przez piwo. Piwo fermentujące się w 22°C zawiera znacznie mniej resztkowego CO2 niż to fermentujące się w 16°C, chociaż oba są teraz schłodzone. Niezapewnienie tego resztkowego prowadzi do systematycznego przeprymowania - jeden z najczęstszych błędów wśród początkujących domowych browarów.'
  }
];

const schemas: CarbonationLocaleContent['schemas'] = [
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

export const content: CarbonationLocaleContent = {
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
