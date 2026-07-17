import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { JelloShotLabUI, JelloShotLabLocaleContent } from '../entry';

const slug = 'kalkulator-jello-shots';
const title = 'Kalkulator Jello Shots: Doskonały kalkulator proporcji alkoholu i żelatyny';
const description = 'Oblicz dokładnie, ile alkoholu i żelatyny użyć do jello shotów, które naprawdę tężeją. Unikaj wodnistych lub gumowatych porażek dzięki proporcjom opartym na nauce dla każdej mocy alkoholu.';

const ui: JelloShotLabUI = {
  title: 'Kalkulator Jello Shots',
  description: 'Uzyskaj idealne proporcje żelatyny, wody i alkoholu, aby Twoje shoty tężały za każdym razem.',
  liquorBaseLabel: 'Rodzaj alkoholu',
  liquorAbvLabel: 'Moc alkoholu (%)',
  gelatinLabel: 'Rodzaj żelatyny',
  diluentLabel: 'Baza wodna',
  calculateBtn: 'Oblicz',
  modePrecision: 'Tryb precyzyjny',
  modeIntensity: 'Moc shota',
  modeIntensityLight: 'Lekki (Łatwy)',
  modeIntensityBalanced: 'Standard',
  modeIntensityLimit: 'Maksimum (Mocny)',
  partyPlannerTitle: 'Planer imprezy',
  partyPlannerGuestLabel: 'Goście',
  partyPlannerShotsPerGuest: 'Shoty na osobę',
  multiLayerTitle: 'Wielowarstwowy',
  howToTitle: 'Jak je zrobić',
  proTipsTitle: 'Porady eksperta',
  resultsTitle: 'Twój przepis',
  totalVolumeLabel: 'Łączna objętość',
  boilingWaterLabel: 'Gorąca woda',
  alcoholVolumeLabel: 'Alkohol',
  packetsNeededLabel: 'Saszetki żelatyny',
  chillingTimeLabel: 'Czas chłodzenia',
  unitMm: 'ml',
  unitOz: 'oz',
  unitGrams: 'g',
  unitPackets: 'saszetki',
  modeParty: 'Tryb imprezowy',
  modeRecipe: 'Tryb przepisu',
};

const faqTitle = 'Często zadawane pytania';

const faq: JelloShotLabLocaleContent['faq'] = [
  {
    question: 'Dlaczego wysokoprocentowy alkohol uniemożliwia tężenie jello shotów?',
    answer: 'Etanol zakłóca wiązania wodorowe utrzymujące potrójną helisę struktury białkowej żelatyny. Gdy spirytus stanowi ok. 35% całkowitej objętości, matryca białkowa nie może utworzyć stabilnej sieci i shot pozostaje ciekły. Im wyższy ABV alkoholu, tym mniej można go dodać przed osiągnięciem tego limitu.',
  },
  {
    question: 'Jaki jest maksymalny stosunek alkoholu, zanim jello shoty przestają tężeć?',
    answer: 'Bezpieczna górna granica to ok. 30-35% całkowitej objętości płynu jako czysty spirytus (przy 40% ABV). Przy 96% alkoholu neutralnym limit spada do ok. 15-18% całkowitej objętości. Nasz kalkulator uwzględnia ABV alkoholu, dzięki czemu nigdy nie przekroczysz progu tężenia.',
  },
  {
    question: 'Czy ma znaczenie, jaki alkohol użyję - wódkę, rum czy tequilę?',
    answer: 'Liczy się ABV, a nie rodzaj alkoholu. Wódka 40% i rum 40% zachowują się identycznie w matrycy żelatyny. Alkohole z wyższą zawartością cukru (jak niektóre rumy czy likiery) mogą nieznacznie poprawić teksturę, gdyż cukier konkuruje z etanolem o wiązania wodorowe w sieci żelatyny.',
  },
  {
    question: 'Jak długo jello shoty są trwałe w lodówce?',
    answer: 'Prawidłowo przygotowane jello shoty wytrzymują 3-5 dni w lodówce przykryte folią spożywczą. Wysoka zawartość alkoholu działa jako naturalny konserwant. Nie zostawiaj ich w temperaturze pokojowej dłużej niż 2 godziny, gdyż żelatyna mięknie i mogą namnażać się bakterie.',
  },
  {
    question: 'Czy mogę sprawić, by moje jello shoty były twardsze lub miększe?',
    answer: 'Tak. Użyj więcej żelatyny (lub pół saszetki więcej) dla twardszych shotów, które czysto wyślizgują się z kubków. Użyj nieco mniej dla miękkiej, trzęsącej się tekstury. Nigdy nie zastępuj żelatyny agar-agarem, jeśli chcesz tekstury rozpuszczającej się w ustach - agar twardnieje bardziej i topi się w wyższej temperaturze.',
  },
  {
    question: 'Czy mogę zamrozić jello shoty, aby przyspieszyć chłodzenie?',
    answer: 'Nie. Zamrożenie niszczy sieć żelatyny, powodując wodnistą, ziarnistą teksturę po rozmrożeniu. Zawsze chłodź co najmniej 4 godziny. Na imprezy przygotuj je poprzedniego wieczoru - 8+ godzin daje najlepszą teksturę.',
  },
];

const howTo: JelloShotLabLocaleContent['howTo'] = [
  { name: 'Wybierz swój alkohol', text: 'Wpisz ABV swojego alkoholu i wybierz pożądaną moc shota. Kalkulator pokaże Ci maksymalną ilość alkoholu, którą Twoja żelatyna może pomieścić.' },
  { name: 'Przygotuj żelatynę', text: 'Wlej obliczoną ilość wrzącej wody do miski. Dodaj proszek żelatynowy i mieszaj energicznie przez 2 minuty do całkowitego rozpuszczenia. Jeszcze nie dodawaj alkoholu.' },
  { name: 'Dodaj alkohol', text: 'Pozostaw mieszaninę żelatynową do ostygnięcia przez 5-10 minut, aż będzie ciepła, ale nie gorąca (poniżej 50 °C). Dodaj swój alkohol i mieszaj delikatnie, aby uniknąć pęcherzyków.' },
  { name: 'Wlej i schłodź', text: 'Wlej do plastikowych kubeczków, foremek silikonowych lub małych kieliszków do shotów. Chłodź co najmniej 4 godziny - przez noc jest idealne. Nie zamrażaj.' },
];


const seo: JelloShotLabLocaleContent['seo'] = [
  { type: 'title', text: 'Chemia stojąca za doskonałym jello shotem', level: 2 },
  {
    type: 'paragraph',
    html: 'Jello shot to nie tylko aromatyzowana żelatyna z alkoholem - to <strong>delikatna zawiesina koloidalna</strong>, w której polimery białkowe, woda i etanol konkurują o wiązania wodorowe. Zły stosunek i masz kałużę słodkiej cieczy lub gumowy krążek, który odbija się od stołu. Właściwy stosunek daje idealnie trzęsący się shot, który wyślizguje się z kubka jednym czystym ruchem.',
  },
  {
    type: 'stats',
    items: [
      { label: 'Lekki (Łatwy)', value: '~30% alkoholu', icon: 'mdi:emoticon-happy-outline' },
      { label: 'Standard', value: '~45% alkoholu', icon: 'mdi:flask-outline' },
      { label: 'Maksimum', value: '~55% alkoholu', icon: 'mdi:fire' },
    ],
    columns: 3,
  },
  {
    type: 'card',
    title: 'Czym jest siła Bloom?',
    icon: 'mdi:molecule',
    html: 'Bloom mierzy siłę żelowania żelatyny, zazwyczaj od 50 do 300 Bloom. Żelatyna listewkowa z supermarketu to zwykle 150-200 Bloom. Wyższy Bloom oznacza twardszy żel przy tej samej ilości proszku, co oznacza, że wytrzymuje nieco więcej alkoholu przed utratą zdolności tężenia. Standardowe saszetki żelatyny w proszku (7 g) są skalibrowane na ok. 240 ml płynu.',
  },
  {
    type: 'card',
    title: 'Limit etanolu',
    icon: 'mdi:alert-circle-outline',
    html: 'Etanol konkuruje z wodą o miejsca wiązań wodorowych na łańcuchach aminokwasowych kolagenu. Gdy etanol zajmie zbyt wiele tych miejsc, białko nie może złożyć się w stabilną potrójną helisę dającą żelatynie strukturę. Praktyczny limit to mniej więcej <strong>1 część 40% alkoholu na 1 część wody</strong> - powyżej tego Twój shot nie stężeje bez względu na czas oczekiwania.',
  },
  {
    type: 'tip',
    title: 'Nigdy nie dodawaj alkoholu do wrzącej żelatyny',
    html: 'Alkohol szybko paruje powyżej 78 °C. Zawsze odczekaj, aż rozpuszczona żelatyna ostygnie poniżej 50 °C przed dodaniem alkoholu. Ten jeden krok odpowiada za więcej nieudanych jello shotów niż jakikolwiek inny błąd.',
  },
  { type: 'title', text: 'Rozwiązywanie typowych problemów', level: 2 },
  {
    type: 'proscons',
    title: 'Objawy i rozwiązania',
    items: [
      { pro: 'Shot jest ciekły po 4 godzinach → Za dużo alkoholu lub przekroczony stosunek. Zmniejsz objętość alkoholu.', con: 'Shot nie smakuje alkoholem → Alkohol dodano do zbyt gorącej cieczy. Najpierw ją ostudź.' },
      { pro: 'Shot jest zbyt gumowaty → Za dużo żelatyny. Następnym razem zmniejsz o pół saszetki.', con: 'Shot jest mętny → Pęcherzyki uwięzione podczas mieszania. Mieszaj delikatnie i odczekaj przed wlewaniem.' },
      { pro: 'Shot ma ziarnistą teksturę → Żelatyna nie w pełni rozpuszczona. Dłużej mieszaj w gorącej wodzie.', con: 'Shot nie twardnieje po 8 godzinach → Przekroczono limit etanolu. Użyj mniej alkoholu lub o niższej zawartości ABV.' },
    ],
  },
  {
    type: 'summary',
    title: 'Dla kogo jest to narzędzie?',
    items: [
      'Organizatorzy imprez: Oblicz dokładnie, ile saszetek i ile alkoholu potrzebujesz przed zakupem.',
      'Barmani: Skaluj do dużej produkcji z konsekwentnymi wynikami za każdym razem.',
      'Domowi kucharze: Unikaj najczęstszych błędów - ciekłych shotów, gumowatej tekstury lub zerowego smaku alkoholu.',
    ],
  },
];

const schemas: JelloShotLabLocaleContent['schemas'] = [
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
  } as WithContext<FAQPage>,
  {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: title,
    description,
    step: howTo.map((step, i) => ({ '@type': 'HowToStep', position: i + 1, name: step.name, text: step.text })),
  } as WithContext<HowTo>,
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: title,
    description,
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  } as WithContext<SoftwareApplication>,
];

export const content: JelloShotLabLocaleContent = { slug, title, description, ui, seo, faqTitle, faq, bibliography, howTo, schemas };
