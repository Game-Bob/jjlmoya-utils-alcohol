import { bibliography } from '../bibliography';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import type { BeerCoolerUI, BeerCoolerLocaleContent } from '../index';

const slug = 'chlodnica-piwa';
const title = 'Kalkulator Chłodzenia Piwa z Prawem Chłodzenia Newtona';
const description = 'Oblicz z prawdziwą termodynamiką — Prawo Chłodzenia Newtona — dokładnie, ile czasu twoje piwo potrzebuje, aby osiągnąć doskonałą temperaturę podawania w lodówce lub zamrażalniku.';

const ui: BeerCoolerUI = {
  step1Title: 'Co chłodzisz?',
  canLabel: 'Puszka',
  aluminumLabel: 'Aluminium',
  bottleLabel: 'Butelka',
  glassLabel: 'Szkło',
  step2Title: 'Gdzie to kładziesz?',
  fridgeLabel: 'Lodówka',
  freezerLabel: 'Zamrażalnik',
  step3Title: 'Precyzyjnie ustaw temperatury',
  initialTempLabel: 'Temperatura początkowa',
  targetTempLabel: 'Cel chłodu',
  glacialLabel: 'Lodowaty',
  perfectLabel: 'Idealnie',
  bodegaLabel: 'Bodega',
  readyTitle: 'Gotowe',
  readyDescription: 'Wybierz pojemnik i lokalizację, aby obliczyć.',
  estimatedTimeLabel: 'Szacunkowy czas',
  methodLabel: 'Metoda',
  containerLabel: 'Pojemnik',
  alreadyColdLabel: 'Już zimno!',
  neverColdLabel: 'Nigdy się nie zmrozi'
};

const faqTitle = 'Częste Pytania';

const faq: BeerCoolerLocaleContent['faq'] = [
  {
    question: 'Jak ten narzędzie oblicza czas chłodzenia?',
    answer: 'Stosuje Prawo Chłodzenia Newtona: T(t) = T_env + (T₀ - T_env) × e^(-kt). Stała k zmienia się w zależności od materiału pojemnika i medium chłodzącego. Puszka aluminiowa w lodówce ma bardzo różne k od butelki szklanych w zamrażalniku. Wartości używane tutaj są kalibrowane na podstawie rzeczywistych eksperymentów dla każdej kombinacji.',
  },
  {
    question: 'Czy sztuczka z mokrym papierem toaletowym i solą rzeczywiście działa?',
    answer: 'Tak, i bardzo zauważalnie. Zawinięcie pojemnika w wilgotny papier toaletowy solą przyspiesza chłodzenie z dwóch powodów: parowanie wody usuwa dodatkowe ciepło (chłodzenie parowania), a sól obniża temperaturę zamarzania wody, utrzymując wilgotny kontakt bardziej aktywnym. Możesz uzyskać dodatkowy spadek o 2–4°C w pierwszych minutach w porównaniu z umieszczeniem suchej puszki w zamrażalniku.',
  },
  {
    question: 'Jaka jest idealna temperatura podawania różnych stylów piwa?',
    answer: 'To zależy od stylu. Lagery i Pilzeny najlepiej podaje się między 3°C a 7°C. IPA i Pale Ale błyszczą w temperaturze 7°C do 10°C. Stouty, Portery i złożone ale powinny być podawane cieplejsze, między 12°C a 14°C, aby ich związki aromatyczne — kawa, czekolada, orzechy — mogły się w pełni wyrażać.',
  },
  {
    question: 'Czy moje piwo może eksplodować, jeśli zostawię je w zamrażalniku?',
    answer: 'Tak. Alkohol i rozpuszczony cukier obniżają temperaturę zamarzania piwa poniżej czystej wody: standardowe piwo niskośódów na 5% zamraża się około -3°C. Gdy woda krystalizuje, objętość rośnie, a rozpuszczone CO2 podnosi ciśnienie wewnętrzne, aż pojemnik ulega awarii. Ponad 60 minut w zamrażalniku — szczególnie butelki szklane — jest prawdziwą strefą zagrożenia. Użyj tego kalkulatora, aby tego uniknąć.',
  },
  {
    question: 'Czy piwo "piecze się", jeśli ochładza się zbyt szybko?',
    answer: 'Nie. Mit "szoku termicznego", który niszczy piwo, jest fałszywy. To, co naprawdę może na niego wpłynąć, to powtarzające się zamrażanie i rozmrażanie — które rozbija białka i mętni ciecz — lub bezpośrednia ekspozycja na światło UV. Szybkie chłodzenie w zamrażalniku lub lodowatej wodzie nie szkodzi smakowi.',
  },
];

const howTo: BeerCoolerLocaleContent['howTo'] = [
  {
    name: 'Wybierz pojemnik',
    text: 'Wybierz między puszkę aluminiową lub butelką szklaną. Materiał drastycznie wpływa na szybkość przenikania ciepła.',
  },
  {
    name: 'Wybierz metodę chłodzenia',
    text: 'Wskaż, czy używasz konwencjonalnej lodówki (4°C) czy zamrażalnika (-18°C) do ultrabystrego procesu.',
  },
  {
    name: 'Dostosuj temperatury',
    text: 'Określ bieżącą temperaturę napoju (temperatura pokojowa) i pożądaną docelową temperaturę chłodu.',
  },
];


const seo: BeerCoolerLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Nauka Zimna i Termodynamika',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'Dlaczego puszka zamraża się szybciej niż butelka? To magia? Nie, to <strong>Prawo Chłodzenia Newtona</strong> w akcji. To narzędzie matematycznie oblicza dokładny moment, w którym twój napój osiąga termodynamiczną doskonałość. Każdy materiał, każde otoczenie, każda temperatura początkowa wchodzi w tę samą równanie różniczkowe, które fizycy i inżynierowie używają do modelowania przenikania ciepła w systemach przemysłowych.'
  },
  {
    type: 'diagnostic',
    title: 'Główny Wzór',
    icon: 'mdi:function-variant',
    variant: 'info',
    badge: 'Fizyka',
    html: 'T(t) = T_env + (T_0 - T_env) * e^(-kt). To równanie różniczkowe opisuje, jak temperatura obiektu zmienia się proporcjonalnie do różnicy między jego temperaturą a temperaturą otoczenia. Stała k zależy od materiału i geometrii pojemnika, dlatego puszka chłodzi się szybciej niż butelka tej samej objętości.'
  },
  {
    type: 'title',
    text: 'Wojna Materiałów: Aluminium vs. Szkło',
    level: 2
  },
  {
    type: 'paragraph',
    html: '<strong>Aluminium</strong> ma przewodność cieplną ~205 W/(m·K), podczas gdy <strong>szkło</strong> ledwo osiąga 0,8 W/(m·K). Metal przesyła zimno gwałtownie szybko, co czyni go idealnym pojemnikiem do sytuacji awarii. Jednak szkło zapewnia lepszą izolację po ochłodzeniu, utrzymując idealną temperaturę przez dłuższy czas podczas spożywania. Ten kompromis wyjaśnia, dlaczego różne kultury piwne rozwinęły różne preferencje dla każdego materiału.'
  },
  {
    type: 'stats',
    items: [
      { label: 'Pilzner & Lager', value: '3°C - 7°C', icon: 'mdi:snowflake' },
      { label: 'IPA & Pale Ale', value: '7°C - 10°C', icon: 'mdi:hops' },
      { label: 'Stout & Porter', value: '12°C - 14°C', icon: 'mdi:beer' }
    ],
    columns: 3
  },
  {
    type: 'card',
    title: 'Strefa Zagrożenia Zamrażalniku',
    icon: 'mdi:snowflake-alert',
    html: 'Ze względu na alkohol i rozpuszczony cukier, piwo zamraża się poniżej 0°C — standardowe piwo na 5% zamraża się około -3°C. Gdy woda krystalizuje, objętość rośnie, a ciśnienie CO2 jednocześnie wzrasta. Rezultatem jest pojemnik, który może eksplodować gwałtownie. Nigdy nie zostawiaj piwa w zamrażalniku na dłużej niż 45 minut bez ustawienia timera.'
  },
  {
    type: 'proscons',
    title: 'Sztuczki Chłodzenia Ratunkowego',
    items: [
      { pro: 'Sztuczka Mokrego Papieru: Zawiń puszkę w mokry papier toaletowy, potem zamroź — parowanie przyspiesza chłodzenie.', con: '' },
      { pro: 'Arktyczna Słonawy: Napełnij wiadro wodą, lodem i 2 łyżkami soli, aby osiągnąć solankę -5°C.', con: '' },
      { pro: 'Metoda Rotacji: Obracaj butelkę w lodowatej wodzie, aby wymusić konwekcję i skrócić czas chłodzenia.', con: '' },
      { pro: '', con: 'Nie umieszczaj puszki bezpośrednio na półce zamrażalnika bez timera — pęknięte puszki są bałaganem i niebezpieczne.' }
    ]
  },
  {
    type: 'tip',
    title: 'Porada Pro: Wstępnie Ochłodź Szklankę',
    html: 'Szklanka, w której nalewasz piwo, ma znaczną pojemność cieplną. Ciepła szklanka może zwiększyć temperaturę doskonale zimnego piwa o 2-3°C natychmiast po kontakcie. Postaw szklankę do serwowania w zamrażalniku na 5 minut przed nalaniem lub przepłucz zimną wodą. Ten prosty krok przedłuża czas, w którym piwo smakuje dokładnie tak, jak zamierzone.'
  },
  {
    type: 'title',
    text: 'Zrozumienie Stałej Chłodzenia',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'Stała chłodzenia k w równaniu Newtona nie jest stałą uniwersalną wartością — to empiryczna właściwość każdego konkretnego pojemnika i medium. Cienka puszka aluminiowa w lodowatej wodzie ma dramatycznie różne k od grubej butelki szklenia w spokojnym powietrzu lodówki. Nasz kalkulator używa zmierzonych wartości skalibrowanych do rzeczywistych eksperymentów dla każdego typu pojemnika, co daje ci przewidywania dokładne w ciągu kilku minut dla typowych domowych scenariuszy chłodzenia.'
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
