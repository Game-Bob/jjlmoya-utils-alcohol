import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import type { CocktailBalancerUI, CocktailBalancerLocaleContent } from '../index';

const slug = 'koktajl-zbilansowany';
const title = 'Cocktail Balancer: Prawo Kwaśności';
const description = 'Oblicz doskonałą równowagę między słodkością a kwaśnością dla swoich koktajli. Opanuj złoty stosunek miksologii.';

const ui: CocktailBalancerUI = {
  title: 'Cocktail Balancer',
  presetsBtn: 'Przepisy',
  saveBtn: 'Zapisz',
  resetBtn: 'Resetuj',
  emptyStateTitle: 'Twoja Ława Pracy jest Pusta',
  emptyStateDescription: 'Dodaj składniki, aby przeanalizować równowagę koktajla w czasie rzeczywistym.',
  addBtn: 'Dodaj Składnik',
  addMoreBtn: 'Dodaj Kolejny Składnik',
  flavorProfileTitle: 'Profil Smakowy',
  volLabel: 'Objętość',
  sugarLabel: 'Cukier',
  colorLabel: 'Kolor',
  sourLawTitle: 'Prawo Kwaśności',
  acidDryLabel: 'Kwas (Suchość)',
  balanceLabel: 'Równowaga',
  sweetLabel: 'Słodki',
  aiSuggestionTitle: 'Sugestia AI',
  addIngredientTitle: 'Dodaj Składnik',
  searchPlaceholder: 'Szukaj rumu, limetki, syropu...',
  presetsTitle: 'Przepisy i Ustawienia Wstępne',
  savedSectionTitle: 'Moje Zapisane',
  classicsSectionTitle: 'Klasyki',
  confirmDeleteTitle: 'Usunąć wszystko?',
  confirmDeleteText: 'Spowoduje to usunięcie wszystkich składników z twojej ławy pracy. Ta akcja nie może być wycofana.',
  cancelBtn: 'Anuluj',
  deleteBtn: 'Usuń',
  verdictSpiritSeco: 'Spirytus / Suche',
  verdictSoloDulce: 'Tylko Słodkie (Old Fashioned)',
  verdictMuyAcido: 'Zbyt Kwaśne / Bardzo Suche',
  verdictAcido: 'Kwaśne / Tarte',
  verdictEquilibrado: 'Zbilansowane (Kwaśne)',
  verdictDulce: 'Słodkie / Komercyjne',
  verdictEmpalagoso: 'Zbyt Słodkie',
  fixAddBitters: 'Brakuje Goryczki',
  fixAddSugar: 'Zbyt Kwaśne',
  fixAddAcid: 'Zbyt Słodkie'
};

const faqTitle = 'Często Zadawane Pytania';
const bibliographyTitle = 'Bibliografia i Źródła';

const faq: CocktailBalancerLocaleContent['faq'] = [
  {
    question: "Czym jest 'Prawo Kwaśności'?",
    answer: "Jest to złoty stosunek miksologii, który równoważy trzy elementy: silną bazę (spirytus), kwaśność (owoce cytrusowe) i słodycz (syropy). Klasyczny przepis zwykle stosuje stosunek 2:1:1 (Mocne:Kwaśne:Słodkie), chociaż zmienia się to w zależności od mocy i gęstości.",
  },
  {
    question: "Jak rozcieńczenie wpływa na równowagę koktajlu?",
    answer: "Lód nie tylko chłodzi; dodaje wody (rozcieńczenie), która otwiera aromaty spirytusu i łagodzi szczyty kwaśności i słodyczy. Zbilansowany koktajl w shakerze może stać się niezrównoważony, jeśli zbyt długo będzie stać z lodem w szklance.",
  },
  {
    question: "Dlaczego moje domowe koktajle nie smakują jak te w barze?",
    answer: "Zwykle jest to spowodowane brakiem równowagi między cukrem a pH owoców cytrusowych. Cytryny różnią się kwaśnością w zależności od sezonu. Nasz kalkulator pomaga ci dostosować dokładną ilość syropu w zależności od używanej objętości soku.",
  },
  {
    question: "Czym są stopnie Brix i dlaczego są ważne w koktajlach?",
    answer: "Brix to skala mierząca ilość rozpuszczonego cukru w cieczy. Prosty syrop (1:1) wynosi około 50 °Brix; bogaty syrop (2:1) przekracza 66 °Brix. Im wyższy Brix, tym więcej ciała i słodyczy wnosi na jednostkę objętości. Wiedza ta pozwala ci zamieniać syropy w przepisie bez zaburzenia równowagi.",
  },
];

const howTo: CocktailBalancerLocaleContent['howTo'] = [
  {
    name: "Wybierz alkoholową bazę",
    text: "Wybierz główny spirytus (Gin, Rum, Whiskey) z naszej bazy danych, aby znać jego ciało i wkład alkoholu.",
  },
  {
    name: "Wpisz środek kwaśny",
    text: "Dodaj objętość soku z cytryny, limetki lub grapefruita. Kalkulator przeanalizuje wpływ pH na mieszaninę.",
  },
  {
    name: "Dostosuj słodki komponent",
    text: "Wpisz rodzaj syropu (prosty, 2:1, agawa) i obserwuj, jak wskaźnik równowagi zmienia się w czasie rzeczywistym.",
  },
  {
    name: "Doskonałe podanie",
    text: "Przejrzyj ostateczny werdykt narzędzia: stosunek kwaśności, szacunkową ABV po rozcieńczeniu i sugestie korekcji. Podaj ze świeżym lodem i dostosuj cytrynę lub syrop do smaku.",
  },
];

const bibliography: CocktailBalancerLocaleContent['bibliography'] = [
  {
    name: "Liquid Intelligence: The Art and Science of the Perfect Cocktail",
    url: "https://www.indigo.ca/en-ca/liquid-intelligence-the-art-and-science-of-the-perfect-cocktail/9780393089035.html",
  },
  {
    name: "Cocktails: The Science of Shaking",
    url: "https://cookingissues.com/2009/07/22/cocktails-the-science-of-shaking/",
  },
  {
    name: "Cocktail Balance - Difford's Guide",
    url: "https://www.diffordsguide.com/encyclopedia/1066/cocktails/cocktail-balance",
  },
];

const seo: CocktailBalancerLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Inżynieria Molekularna i Równowaga Cieczy',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'Witamy w cyfrowym laboratorium, gdzie intuicja spotyka się z matematyką. To narzędzie to nie zwykła książka receptur; to <strong>zaawansowany symulator fizyczno-chemiczny</strong> zaprojektowany do zdekonstruowania i analizy struktury molekularnej twoich koktajli w czasie rzeczywistym. Każda kropla cytrusów, każda miara spirytusu, każdy gram syropu oddziałuje zgodnie z niezmiennymi prawami chemii, które określają, czy twój napój będzie arcydziełem czy rozczarowującym niepowodzeniem.'
  },
  {
    type: 'stats',
    items: [
      { label: 'Limeta', value: '~6% Kwas', icon: 'mdi:fruit-citrus' },
      { label: 'Cytryna', value: '~6% Kwas', icon: 'mdi:fruit-citrus' },
      { label: 'Grapefruit', value: '~1-2% Kwas', icon: 'mdi:fruit-citrus' }
    ],
    columns: 3
  },
  {
    type: 'card',
    title: 'Nauka Kwaśności',
    icon: 'mdi:fruit-citrus',
    html: 'Kwaśność to nie tylko smak; to strukturalny kręgosłup każdego zbilansowanego koktajlu. Bez odpowiedniej kwaśności napój staje się płaski, jednowymiarowy i zapomniany. Nasz algorytm rozróżnia kwaśność titracyjną limy perskiej od cytryny Eureka, biorąc pod uwagę sezonowe wahania pH cytrusów, które mogą przesunąć twoją recepturę o cały punkt równowagi na podniebieniu.'
  },
  {
    type: 'card',
    title: 'Kontrola Brix (Słodycz)',
    icon: 'mdi:spoon-sugar',
    html: 'Ciało i tekstura twojego koktajlu zależy całkowicie od rozpuszczonego cukru. Syrop prosty (1:1) zachowuje się bardzo inaczej niż syrop bogaty (2:1), miód lub syrop agawowy. Każdy słodzik ma inny stopień Brix i lepkość, które wpływają na sposób otulania napoju językiem. Nasz kalkulator oblicza dokładne gramy rozpuszczonego cukru, aby przewidzieć ostateczne uczucie w ustach i percepcję słodyczy.'
  },
  {
    type: 'card',
    title: 'Termodynamika i Rozcieńczenie',
    icon: 'mdi:water-percent',
    html: 'Wstrząsany koktajl rozcieńcza się 25-40% w zależności od temperatury lodu, techniki wstrząsania i czasu trwania. Dodanie tej wody to nie wada; to niezbędny składnik, który otwiera zapachy i łagodzi krawędź alkoholu. Nasz kalkulator szacuje ostateczną ABV po rozcieńczeniu, dzięki czemu możesz projektować napoje z dokładnie zamierzoną mocą i równowagą smakową.'
  },
  {
    type: 'title',
    text: 'Poza Podstawowym Stosunkiem',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'Wielu barmańskich uczy się klasycznej reguły 2:1:1 (2 części spirytusu, 1 część kwaśnego, 1 część słodkiego) i traktuje ją jako uniwersalną prawdę. Jednak <strong>chemia jest znacznie bardziej zniuansowana</strong>. Cytryna z Sycylii zawiera inną kwaśność niż limeta z Meksyku. Triple sec taki jak Cointreau zachowuje się radykalnie inaczej niż Blue Curaçao. Ten sam przepis może smakować doskonale zbilansowany jeden tydzień i brutalne kwaśnie następny, po prostu ze względu na sezonowe wahania owoców.'
  },
  {
    type: 'paragraph',
    html: 'Ten balancer przebija się przez te naiwne bariery. Wpisując swoje konkretne składniki, konsultujesz żywą bazę danych, która dynamicznie dostosowuje wektory kwaśności i słodyczy, aby zaoferować precyzyjną mapę sensoryczną twojej kreacji. Przestań zgadywać i zacznij projektować swoje koktajle z tą samą dokładnością naukową, którą barmańscy ze światowych établissements używają w każdej usłudze.'
  },
  {
    type: 'summary',
    title: 'Dla kogo jest to narzędzie?',
    items: [
      'Profesjonalni barmańscy: Standaryzuj przepisy i twórz menu sygnature z powtarzalną spójnością.',
      'Entuzjaści domowi: Przestań zgadywać i zacznij rozumieć, dlaczego twoje koktajle się udają lub nie.',
      'Twórcy napojów: Szybko prototypuj nowe koncepcje smakowe przed drogimiami biegami produkcyjnymi.'
    ]
  },
  {
    type: 'diagnostic',
    title: 'Złota Strefa',
    icon: 'mdi:star',
    variant: 'success',
    badge: 'Cel',
    html: 'To jest ostateczny cel: kontrolowane pH, w którym cukier neutralizuje agresję kwasu bez maskowania olejków eterycznych i związków aromatycznych spirytusu bazowego. Ta precyzyjna równowaga to miejsce, gdzie żyją nieśmiertelne klasyki — Daiquiri, Margarita, Sidecar — napoje, które przetrwały dziesięciolecia, ponieważ podporządkowują się podstawowym prawom chemii smaku.'
  },
  {
    type: 'tip',
    title: 'Porada Eksperta: Zawsze Używaj Świeżych Owoców Cytrusowych',
    html: 'Zawsze wyciskaj cytrusy w ostatniej chwili. Sok z cytryny i limetki szybko się utlenia, tracąc żywą kwaśność w ciągu 20-30 minut od wyciskania. Koktajl wykonany ze świeżego soku zawsze będzie miał jasność i żywość na podniebieniu, której żaden butelkowany produkt nie może powielić. Używaj owoców w temperaturze pokojowej, aby zmaksymalizować wydajność soku.'
  }
];

const schemas: CocktailBalancerLocaleContent['schemas'] = [
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

export const content: CocktailBalancerLocaleContent = {
  slug,
  title,
  description,
  ui,
  seo,
  faqTitle,
  faq,
  bibliographyTitle,
  bibliography,
  howTo,
  schemas,
};
