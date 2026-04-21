import { bibliography } from '../bibliography';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import type { PartyKegUI, PartyKegLocaleContent } from '../index';

const slug = 'kalkulator-piwa-lodu-imprezy';
const title = 'Kalkulator Piwa na Imprezę: Ilość na Osobę na Wesela i Urodziny';
const description = 'Darmowe narzędzie do obliczenia, ile piwa i lodu potrzebujesz na podstawie liczby gości, czasu trwania i temperatury. Idealne na wesela, urodziny i imprezy na świeżym powietrzu.';

const ui: PartyKegUI = {
  calcStockTitle: 'Kalkulator Zapasów',
  beerIceSub: 'Piwo & Lód do Imprez',
  guestsLabel: 'Goście',
  durationLabel: 'Czas Trwania',
  hoursUnit: 'Godziny',
  intensityLabel: 'Intensywność',
  chillLabel: 'Chill',
  standardLabel: 'Standard',
  partyLabel: 'Party',
  tempLabel: 'Temperatura',
  estimatedVolLabel: 'Szacunkowa Objętość',
  kegsLabel: 'Beczki',
  iceRequiredLabel: 'Potrzebny Lód',
  bagsLabel: 'Opakowania',
  visualizationTitle: 'Wizualizacja Zapasów',
  optimalMsg: 'Warunki Optymalne',
  highMeltMsg: 'Wykryto Wysoką Szybkość Topienia',
  highEfficiencyMsg: 'Zimno / Wysoka Efektywność'
};

const faqTitle = 'Часто Задаваемые Вопросы';

const faq: PartyKegLocaleContent['faq'] = [
  {
    question: "Ile piwa pije jedna osoba w 4 godziny?",
    answer: "Średnio oblicz 5 piw na osobę na imprezę 4-godzinną. Zakłada to 2 napoje w pierwszą godzinę i 1 dla każdej pozostałej godziny.",
  },
  {
    question: "Ile lodu potrzebuję na 100 piw?",
    answer: "Będziesz potrzebować około 15–20 kilogramów lodu (7–10 opakowań). Praktyczną regułą jest 0,75 kg lodu na litr napoju w normalnych warunkach. Latem lub na świeżym powietrzu powyżej 25°C podniesź do 1 kg na litr: ciepło otoczenia przyspiesza topienie i skończy ci się lód znacznie szybciej niż oczekiwano.",
  },
  {
    question: "Jaka jest różnica między zwykłą beczką a beczką imprezową?",
    answer: "Standardowa beczka handlowa zawiera 50 litrów, co daje około 200 porcji (po 250 ml każda). Beczka imprezowa (mini-beczka) zwykle zawiera 5 litrów — około 20 porcji. Znając te rozmiary, możesz przeliczyć wyjście w litrach kalkulatora na liczbę pojemników do zakupienia.",
  },
  {
    question: "Dlaczego potrzebuję tyle lodu, jeśli piwo jest już zimne?",
    answer: "Ponieważ chłodzenie i utrzymanie to dwa oddzielne procesy. Przeniesienie puszki z 25°C do 4°C zużywa utajone ciepło topnienia lodu: około 334 kJ/kg. Gdy już jest zimne, lód nadal pracuje, aby zniweczyć ciepło otoczenia. W letni dzień o temperaturze 35°C przepływ ciepła do chłodziarki może roztopić 1 kg lodu na litr napoju co 2–3 godziny. Dlatego wychłodzenie napojów przed imprezą zmniejsza o połowę całkowite zużycie lodu.",
  },
];

const howTo: PartyKegLocaleContent['howTo'] = [
  {
    name: "Oszacuj liczbę gości",
    text: "Określ, ile osób będzie uczestniczyć. Nasz kalkulator dostosowuje ilości na podstawie statystycznych średnich konsumpcji.",
  },
  {
    name: "Określ czas trwania i intensywność",
    text: "Wskaż, ile godzin będzie trwać impreza i jaki będzie 'rytm' imprezy (chill, standard lub intensywny).",
  },
  {
    name: "Dostosuj się do temperatury otoczenia",
    text: "Temperatura zewnętrzna jest kluczowa dla obliczenia lodu. Im cieplej, tym wyższa szybkość topienia, którą musimy kompensować.",
  },
];


const seo: PartyKegLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Ile Piwa i Lodu Potrzeguję na Moją Imprezę?',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'Pytanie o milion dolarów przy organizowaniu dowolnej imprezy: <strong>Ile litrów piwa powinienem kupić?</strong> Brak to katastrofa, ale zakupienie za dużo to niepotrzebny wydatek. To narzędzie pomaga obliczyć dokładną ilość alkoholu i, co najważniejsze, <strong>ile opakowań lodu</strong> potrzebujesz, aby wszystko było zimne. Profesjonalni caterzy i organizatorzy imprez korzystają z modeli konsumpcji statystycznej — a teraz ty też możesz, za darmo.'
  },
  {
    type: 'title',
    text: 'Wzór Konsumpcji na Osobę',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'Aby oszacować potrzebny alkohol, profesjonalni caterzy wykorzystują formułę opartą na "Szybkości Konsumpcji Godzinowej". To nie jest nauka ścisła, ale statystyki pokazują, że na standardowej imprezie około 1,5 jednostki są konsumowane na godzinę na osobę. Czynniki takie jak temperatura otoczenia, dostępność jedzenia i energia społeczna imprezy zmieniają tę liczbę bazową.'
  },
  {
    type: 'stats',
    items: [
      { label: 'Konsumpcja Chill', value: '1 napój/godzinę', icon: 'mdi:tea-outline' },
      { label: 'Standardowa Impreza', value: '1,5 napojów/godzinę', icon: 'mdi:glass-mug-variant' },
      { label: 'Wesele / Festiwal', value: '2,5+ napojów/godzinę', icon: 'mdi:fire' }
    ],
    columns: 3
  },
  {
    type: 'diagnostic',
    title: 'Fizyka Lodu',
    icon: 'mdi:snowflake-thermometer',
    variant: 'warning',
    badge: 'Termodynamika',
    html: 'Obliczanie lodu to miejsce, gdzie większość gospodarzy się nie sprawdza. Lód pełni dwie funkcje: Chłodzenie (przeniesienie piwa z 25°C do 4°C) i Utrzymanie (walka z ciepłem otoczenia). W temperaturach powyżej 30°C szybkość topienia podwaja się. Całe opakowanie lodu w bezpośrednim słońcu może zniknąć w mniej niż 20 minut, pozostawiając napoje ciepłe przed szczytem imprezy.'
  },
  {
    type: 'tip',
    title: 'Porada Profesjonalna, Aby Zaoszczędzić Lód',
    html: 'Trzymaj beczki i puszki w cieniu przed dodaniem lodu. Jeśli napoje są ciepłe na słońcu, pierwsze 50% twojego opakowania lodu zniknie w 10 minut poprzez wymianę utajonego ciepła. Zacznij od napojów wychłodzonych z wyprzedzeniem, aby dramatycznie zmniejszyć ilość lodu, którą faktycznie musisz kupić.'
  },
  {
    type: 'title',
    text: 'Dane Referencyjne dla Logistyki',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'Standardowa beczka 50L daje około 200 porcji. Typowe opakowanie lodu waży 2 kg. Znając te liczby, możesz zaplanować transport i przechowywanie potrzebne dla twojej imprezy bez ostatecznych niespodzianek. Weź pod uwagę topnienie lodu podczas transportu — 30-minutowa jazda latem może cię kosztować całe opakowanie przed rozpoczęciem imprezy.'
  },
  {
    type: 'summary',
    title: 'Do Kogo Jest to Narzędzie?',
    items: [
      'Gospodarze Prywatnych Imprez: Przestań zgadywać i pewnie kup dokładnie to, czego potrzebujesz na następne obchody.',
      'Organizatorzy Imprez: Użyj dokładnych modeli konsumpcji do wyceny klientów i profesjonalnego planowania logistyki baru.',
      'Kierownicy Pomieszczeń: Standaryzuj obliczenia zapasów na powtarzające się imprezy z różną liczbą gości.'
    ]
  },
  {
    type: 'paragraph',
    html: 'Często pomijaną zmienną jest <strong>wskaźnik rezygnacji gości</strong>. Na większości imprez 10–15% gości wychodzi wcześnie, a 10% może w ogóle nic nie pić. Kalkulator stosuje konserwatywny bufor, abyś nigdy nie był w stanie niedostatecznym, ale też nie miał ogromnej nadwyżki. Zrozumienie tych dostosowań pomoże ci uszczegółowić oszacowanie dla twojej konkretnej grupy i kontekstu. Zawsze zaokrąglaj w górę podczas zakupu, ponieważ zwrot otwartych beczek zwykle nie jest możliwy. Mała nadwyżka jest zawsze lepsza niż zabrakło piwa w środku imprezy.'
  }
];

const schemas: PartyKegLocaleContent['schemas'] = [
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

export const content: PartyKegLocaleContent = {
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
