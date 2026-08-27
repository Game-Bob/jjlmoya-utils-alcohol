import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { AbvDilutionCalculatorUI } from '../ui';

const slug = 'kalkulator-rozcieczania-alkoholu-i-proof';
const title = 'Kalkulator rozcieńczania alkoholu i proof';
const description = 'Oblicz, ile wody dodać do mocnego alkoholu, aby uzyskać niższą moc docelową. Kalkulator pokazuje objętość końcową, czysty alkohol i proporcję wody.';
const ui: AbvDilutionCalculatorUI = {
  unitLabel: 'Jednostki objętości', metricUnit: 'Metryczne ml', imperialUnit: 'Imperial fl oz', strengthLabel: 'Jednostki mocy', abvUnit: 'Procent alkoholu', proofUnit: 'Proof amerykański', presetLabel: 'Szybkie scenariusze', spiritPresetLabel: 'Alkohol 750 ml', liqueurPresetLabel: 'Likier 700 ml', cocktailPresetLabel: 'Partia 500 ml', startingStrengthLabel: 'Moc początkowa', startingVolumeLabel: 'Objętość początkowa', targetStrengthLabel: 'Moc docelowa', waterToAddLabel: 'Woda do dodania', finalVolumeLabel: 'Objętość końcowa', pureAlcoholLabel: 'Czysty alkohol', ratioLabel: 'Proporcja wody', startingProofLabel: 'Proof początkowy', targetProofLabel: 'Proof docelowy', readyMessage: 'Cel jest niższy. Odmierz wodę i dodawaj ją stopniowo.', invalidMessage: 'Moc docelowa musi być niższa od początkowej, aby można było rozcieńczać.', largeAdditionMessage: 'Ta partia wymaga co najmniej tyle wody, ile alkoholu. Mieszaj etapami i sprawdź ponownie.', bottleLabel: 'Butelka z podziałką pokazująca obliczoną objętość końcową', waterLayerLabel: 'Warstwa wody w końcowej mieszance', estimateNotice: 'To tylko szacunek planistyczny. Alkohol i woda mogą zmniejszyć objętość po połączeniu, dlatego sprawdź moc końcową odpowiednim przyrządem.', sourceLabel: 'Źródła wzoru', calculateAction: 'Dane rozcieńczania', resetAction: 'Wyzeruj wartości', volumeHint: 'Wybierz posiadaną objętość przed dodaniem wody.', strengthHint: 'Proof jest podawany w systemie amerykańskim: 80 proof odpowiada 40 procentom alkoholu.',
};
const faq = [
  { question: 'Jak obliczyć ilość wody potrzebną do rozcieńczenia alkoholu?', answer: 'Pomnóż objętość początkową przez moc początkową, aby otrzymać objętość czystego alkoholu. Podziel ją przez moc docelową zapisaną jako ułamek dziesiętny, aby uzyskać teoretyczną objętość końcową. Odejmij objętość początkową, a otrzymasz ilość wody.' },
  { question: 'Czym różnią się ABV i proof?', answer: 'ABV to procent czystego alkoholu w objętości napoju. W amerykańskim systemie proof jest dwukrotnością ABV, więc 80 proof oznacza 40 procent ABV. Przełącznik proof zmienia tylko sposób wyświetlania, a nie rzeczywistą moc.' },
  { question: 'Czy kalkulator uwzględnia kurczenie alkoholu i wody?', answer: 'Nie. Wynik jest szacunkiem opartym na zachowaniu ilości czystego alkoholu. Etanol i woda po zmieszaniu mogą zajmować nieco mniejszą objętość, a temperatura także wpływa na pomiar. Potraktuj wynik jako plan partii i sprawdź go odpowiednim alkoholomierzem.' },
  { question: 'Czy mogę użyć tego kalkulatora do legalnej produkcji alkoholu?', answer: 'Narzędzie wykonuje tylko działania matematyczne i nie sprawdza receptury, etykiet, akcyzy, zezwoleń ani lokalnych przepisów. Przestrzegaj wymagań obowiązujących w miejscu produkcji i sprzedaży oraz używaj czystego sprzętu.' },
];
const howTo = [
  { name: 'Wybierz jednostki objętości', text: 'Wybierz mililitry metryczne albo imperialne uncje płynne. Objętość fizyczna pozostaje taka sama po zmianie jednostki.' },
  { name: 'Wprowadź partię początkową', text: 'Ustaw początkową moc i objętość alkoholu przed rozcieńczeniem.' },
  { name: 'Ustaw moc docelową', text: 'Wprowadź niższą moc końcowej mieszanki. Cele, które nie oznaczają rozcieńczenia, zostaną oznaczone.' },
  { name: 'Dodawaj wodę etapami', text: 'Odczytaj objętość wody i końcową objętość, mieszaj stopniowo i sprawdź moc odpowiednim sprzętem.' },
];
const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'UtilitiesApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }, inLanguage: 'pl' };
export const content: ToolLocaleContent<AbvDilutionCalculatorUI> = { slug, title, description, ui, faqTitle: 'Pytania o rozcieńczanie', bibliographyTitle: 'Źródła wzoru', faq, howTo, schemas: [faqSchema, howToSchema, appSchema], bibliography, seo: [
  { type: 'title', text: 'Jak działa rozcieńczanie alkoholu', level: 2 },
  { type: 'paragraph', html: 'Rozcieńczanie obniża stężenie alkoholu przez dodanie wody, przy zachowaniu w przybliżeniu tej samej ilości czystego alkoholu. Ten <strong>kalkulator rozcieńczania alkoholu</strong> zamienia moc i objętość początkową na praktyczną ilość wody oraz teoretyczną objętość końcową. Działa lokalnie w przeglądarce i nie wysyła danych partii.' },
  { type: 'table', headers: ['Wartość', 'Wzór', 'Znaczenie'], rows: [['Czysty alkohol', 'objętość początkowa x moc początkowa', 'Alkohol przeniesiony do mieszanki'], ['Objętość końcowa', 'czysty alkohol / moc docelowa', 'Teoretyczna suma po rozcieńczeniu'], ['Woda', 'objętość końcowa minus początkowa', 'Planowana ilość wody']] },
  { type: 'title', text: 'Przeliczanie ABV i proof', level: 2 },
  { type: 'paragraph', html: 'Alkohol objętościowo określa, jaki procent płynu stanowi czysty alkohol. W systemie amerykańskim proof jest dwukrotnością ABV, więc 40 procent ABV równa się 80 proof. Użyj przełącznika, gdy etykieta podaje proof, pamiętając, że konwencje mogą różnić się między krajami i okresami.' },
  { type: 'stats', columns: 3, items: [{ value: '80 proof', label: '40 procent ABV' }, { value: '1:1', label: 'Proporcja wody w scenariuszu domyślnym' }, { value: '100% lokalnie', label: 'Brak wysłanych danych partii' }] },
  { type: 'title', text: 'Dlaczego wynik jest szacunkiem', level: 2 },
  { type: 'paragraph', html: 'Obliczenie zachowuje objętość czystego alkoholu, lecz prawdziwe mieszaniny nie są idealnie addytywne. Alkohol i woda kurczą się podczas łączenia, a temperatura zmienia gęstość i zmierzoną objętość. Dodawaj wodę powoli, poczekaj na temperaturę pomiaru i sprawdź moc odpowiednim sprzętem.' },
  { type: 'tip', title: 'Mieszaj stopniowo i sprawdzaj', html: 'Użyj czystej, odmierzonej wody oraz naczynia wystarczająco dużego na teoretyczną objętość końcową. Kalkulator nie zna temperatury, cukru, aromatów ani lokalnych zasad pomiaru. Ilość wody traktuj jako plan początkowy, a nie certyfikat końcowej mocy.' },
  { type: 'title', text: 'Powtarzalny proces rozcieńczania', level: 2 },
  { type: 'list', items: ['Zapisz moc z etykiety i rzeczywistą objętość partii.', 'Wybierz moc docelową niższą od początkowej.', 'Oblicz czysty alkohol, objętość końcową i wodę.', 'Dodaj większość wody, wymieszaj i uzupełniaj resztę małymi porcjami.', 'Sprawdź mieszankę po osiągnięciu temperatury pomiaru.'] },
  { type: 'diagnostic', variant: 'warning', title: 'Obliczenie nie jest zgodą na produkcję', html: 'Ta strona nie weryfikuje składników, higieny, etykiet, podatków, zezwoleń ani sprzedaży. Nie używaj wyniku jako powodu do pomijania zasad dotyczących napoju lub miejsca produkcji.' },
] };
