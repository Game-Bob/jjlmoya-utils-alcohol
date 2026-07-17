import { bibliography } from '../bibliography';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import type { AlcoholClearanceUI, AlcoholClearanceLocaleContent } from '../index';

const slug = 'kalkulator-czyszczenia-alkoholu';
const title = 'Kalkulator Kaca i Poziomu Alkoholu we Krwi: Prognoza Regeneracji';
const description = 'Oblicz swój poziom alkoholu we krwi (BAC) i czas do osiągnięcia 0,0 za pomocą formuły Widmarka. Zaplanuj nawodnienie przed snem i dowiedz się, kiedy będziesz w pełni wyzdrowiony.';

const ui: AlcoholClearanceUI = {
  biologicalSexLabel: 'Płeć biologiczna',
  weightLabel: 'Masa ciała',
  kgUnit: 'kg',
  addDrinkLabel: 'Dodaj napój',
  beerLabel: 'Piwo',
  wineLabel: 'Wino',
  spiritLabel: 'Drink mieszany',
  shotLabel: 'Shot',
  accumulatedLabel: 'Spożyte napoje',
  emptyListLabel: 'Twoja lista jest pusta',
  emptySubLabel: 'Wybierz napoje do obliczenia.',
  estimatedBacLabel: 'Szacunkowy BAC',
  bacUnit: 'BAC',
  timeToZeroLabel: 'aż do 0,0',
  waterAdviceLabel: 'Woda (Przed snem)',
  pillAdviceLabel: 'Suplementy',
  noneAdvice: 'Nie potrzeba',
  hydrationAdvice: 'Priorytet: Nawodnienie',
  electrolytesAdvice: 'Elektrolity + Wit. B',
  disclaimerText: 'Ten kalkulator jest oszacowaniem teoretycznym. Metabolizm i pożywienie mogą zmienić wynik. Nie pij i nie prowadź pojazdu.',
  drinkUnit: 'napój',
  drinksUnit: 'napoje'
};

const faqTitle = 'Często Zadawane Pytania';

const faq: AlcoholClearanceLocaleContent['faq'] = [
  {
    question: "Co to jest jednostka standardowego napoju i ile jest w każdym napoju?",
    answer: "Jednostka standardowego napoju zawiera około 10 gramów czystego alkoholu (definicja UK/UE; 14g w USA). Zwykłe piwo (330 ml przy 5%) zawiera ~1,3 jednostki, kieliszek wina (150 ml przy 12%) ~1,4 jednostki, a shot (40 ml przy 40%) ~1,3 jednostki. Znajomość jednostek w tym, co pijesz, jest niezbędna do prawidłowej interpretacji wyników kalkulatora.",
  },
  {
    question: "Dlaczego płeć biologiczna wpływa na obliczenia BAC?",
    answer: "Płeć biologiczna wpływa na współczynnik Widmarka 'r', który reprezentuje całkowitą ilość wody w ciele jako ułamek masy. Mężczyźni osiągają średnio r=0,68, ponieważ mają proporcjonalnie więcej wody w ciele. Kobiety osiągają średnio r=0,55 ze względu na wyższy procent tkanki tłuszczowej, która zatrzymuje mniej alkoholu. Oznacza to, że przy tym samym spożyciu napojów i masie ciała kobiety osiągną wyższy BAC.",
  },
  {
    question: "Czy kawa, woda lub ćwiczenia mogą przyspieszyć eliminację alkoholu?",
    answer: "Nie. Wątroba eliminuje alkohol ze stałą szybkością około 0,15 g/L na godzinę (kinetyka zerowego rzędu). Kawa może maskować zmęczenie, woda pomaga w odwodnieniu, a ćwiczenia poprawiają ogólne samopoczucie - ale nic z tego nie zmniejsza twojego rzeczywistego BAC. Tylko czas eliminuje alkohol z krwi.",
  },
  {
    question: "Czy jedzenie po piciu pomaga obniżyć BAC?",
    answer: "Jedzenie po piciu nie zmniejsza alkoholu już będącego we krwi. Gdzie jedzenie ma ogromne znaczenie, to przed lub podczas picia: jedzenie w żołądku - zwłaszcza białka i tłuszcze - spowalnia wchłanianie z żołądka i może zmniejszyć szczytowy BAC nawet o 50%. Gdy alkohol zostanie wchłonięty, tylko metabolizm wątroby może go wyeliminować.",
  },
  {
    question: "Jak długo trwa osiągnięcie BAC 0,0?",
    answer: "To zależy od twojego początkowego BAC. Podziel swój szacunkowy BAC (w g/L) przez 0,15, aby uzyskać przybliżoną liczbę godzin. Na przykład BAC 1,5 g/L wymaga około 10 godzin. Wątroba nigdy się nie zatrzymuje: przetwarza alkohol nawet podczas snu. Ale bądź świadomy - alkohol może być obecny we krwi nawet wtedy, gdy czujesz się całkowicie wyzdrowiony.",
  },
  {
    question: "Czy ten kalkulator jest 100% niezawodny do podejmowania decyzji o prowadzeniu pojazdu?",
    answer: "Nie. To narzędzie jest oszacowaniem teoretycznym opartym na formule Widmarka. Czynniki takie jak spożycie pokarmu, leki, zmęczenie, warianty genetyczne enzymu ADH i stres mogą zmienić twój rzeczywisty BAC o 20-30% w obydwie strony. Nigdy nie używaj tego kalkulatora do podejmowania decyzji o prowadzeniu. Jeśli piłeś, nie prowadź pojazdu - to jedyna reguła bez marginesu błędu.",
  },
];


const howTo: AlcoholClearanceLocaleContent['howTo'] = [
  {
    name: "Ustaw swój profil",
    text: "Wybierz swoją płeć biologiczną (wpływa na procent wody w ciele) i aktualną masę ciała.",
  },
  {
    name: "Dodaj spożyte napoje",
    text: "Kliknij na ikony napojów, które piłeś. Będą się gromadzić na liście poniżej.",
  },
  {
    name: "Sprawdź bezpieczne czasy",
    text: "Obserwuj szacunkowy BAC i, co najważniejsze, czas, jaki będzie potrzebny wątrobie na przetworzenie całego spożytego etanolu.",
  },
];

const seo: AlcoholClearanceLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Metabolizm alkoholu: Nauka i Eliminacja',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'Zrozumienie, jak nasze ciało przetwarza etanol, jest niezbędne dla bezpieczeństwa i łagodzenia kaca. Nasz <strong>kalkulator eliminacji alkoholu</strong> wykorzystuje uznaną <strong>formułę Widmarka</strong>, aby dać ci jasną mapę twojego stanu metabolicznego. Alkohol nie jest eliminowany przez pocenie się, picie wody ani ćwiczenia - tylko czas i metabolizm wątroby mogą zmniejszyć stężenie alkoholu we krwi.'
  },
  {
    type: 'diagnostic',
    title: 'Farmakokinetyka BAC',
    icon: 'mdi:gender-male-female',
    variant: 'info',
    badge: 'Biochemia',
    html: 'Alkohol rozprowadza się przez wodę w ciele. Czynniki takie jak masa ciała i współczynnik Widmarka r (0,68 u mężczyzn / 0,55 u kobiet) determinują początkowe rozcieńczenie etanolu we krwi. Dlatego dwie osoby o tej samej masie mogą mieć bardzo różne wyniki BAC po spożyciu tych samych napojów.'
  },
  {
    type: 'title',
    text: 'Oksydacja wątrobowa i enzymy',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'Wątroba rozkłada 95% alkoholu za pośrednictwem dehydrogenazy alkoholowej (ADH). Proces ten przebiega ze stałą szybkością (kinetyka zerowego rzędu), co oznacza, że nie można go przyspieszyć ćwiczeniami ani kawą. Pozostałe 5% jest eliminowane przez oddech, mocz i pot - co jest podstawą testowania alkotestem w egzekwowaniu przepisów drogowych.'
  },
  {
    type: 'stats',
    items: [
      { label: 'Tempo eliminacji', value: '0,15 g/L·h', icon: 'mdi:clock-fast' },
      { label: 'Wchłanianie z żołądka', value: '20% Etanolu', icon: 'mdi:stomach' },
      { label: 'Sugerowane nawodnienie', value: '1:1 Woda/Napój', icon: 'mdi:water' }
    ],
    columns: 3
  },
  {
    type: 'proscons',
    title: 'Mity vs Rzeczywistość',
    items: [
      { pro: 'Woda i elektrolity przed snem zmniejszają nasilenie kaca, przeciwdziałając diurezie.', con: '' },
      { pro: '', con: 'Zimne prysznice: Wcale nie wpływają na stężenie alkoholu we krwi.' },
      { pro: '', con: 'Kawa: Maskuje senność, ale nie przywraca utraconego refleksu ani funkcji poznawczych.' }
    ]
  },
  {
    type: 'card',
    title: 'Co powoduje kaca?',
    icon: 'mdi:alert-decagram',
    html: 'Znane naukowo jako veisalgia, kac jest spowodowany systemowym odwodnieniem (hamowanie wazopresyny przez etanol), gromadzeniem się acetaldehydu (toksycznego metabolitu) i cytokinowym zapalnopochodnymi odpowiedziami immunologicznymi. Powrót glutaminianu w mózgu po hamowaniu alkoholem również przyczynia się do niepokoju i wrażliwości na światło i dźwięki rano następnego dnia.'
  },
  {
    type: 'tip',
    title: 'Bezpieczeństwo na pierwszym miejscu: Poznaj swoją granicę',
    html: 'BAC 0,05% mierzywie pogarsza osąd, śledzenie i czas reakcji. Większość krajów ustala limit prawny prowadzenia pojazdu między 0,05% a 0,08%. Jednak indywidualna wrażliwość różni się znacznie - wiek, leki, zmęczenie i warianty genetyczne enzymu ADH wszystkie wpływają na to, jak alkohol cię osobiście wpływa. W razie wątpliwości, nie prowadź pojazdu.'
  },
  {
    type: 'title',
    text: 'Rola Pożywienia i Tempo Wchłaniania',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'Jedzenie przed lub podczas picia dramatycznie zmienia kinetykę wchłaniania alkoholu. Pożywienie w żołądku - zwłaszcza białka i tłuszcze - spowalniają opróżnianie żołądka, zmniejszając szybkość, z jaką etanol dostaje się do krwioobiegu. Osoba pijąca na pusty żołądek może osiągnąć szczytowy BAC o 50% wyższy niż ta sama osoba, która jadła pełny posiłek przed piciem tej samej ilości. Jest to jedna z najpotężniejszych zmiennych, którą formula Widmarka nie może w pełni uchwycić, dlatego nasz kalkulator zawiera zastrzeżenie dotyczące szacowania teoretycznego.'
  },
  {
    type: 'paragraph',
    html: 'Typ napoju alkoholowego ma znaczenie poza samym ABV i objętością. Mieszanki gazowane (woda tonigowa, wino musujące) przyspieszają opróżnianie żołądka i pchnęły alkohol szybciej do krwioobiegu. Napoje z bardzo wysokim ABV (>25%) mogą czasowo hamować motorykę żołądka, spowalniając wchłanianie. Słodkie napoje mogą maskować odczuwany efekt alkoholu, prowadząc ludzi do picia szybciej niż się spodziewają. Te niuanse są przyczyną, dla której BAC w świecie rzeczywistym może odbiegać od przewidywań modelu o 20-30% w obu kierunkach.'
  }
];

const schemas: AlcoholClearanceLocaleContent['schemas'] = [
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
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  } as WithContext<SoftwareApplication>,
];

export const content: AlcoholClearanceLocaleContent = {
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
