import type { FAQPage, HowTo, SoftwareApplication, WithContext } from "schema-dts";
import type { ToolLocaleContent } from "../../../types";
import { bibliography } from "../bibliography";
import type { AbvDilutionCalculatorUI } from "../ui";

const slug = "alcoholverdunning-en-proof-calculator";
const title = "Calculator voor alcoholverdunning en proof";
const description = "Bereken hoeveel water je moet toevoegen om een sterke drank naar een lager alcoholpercentage te brengen. Zie het eindvolume, pure alcohol en de verdunningsverhouding.";
const ui: AbvDilutionCalculatorUI = {
  unitLabel: "Volume-eenheden", metricUnit: "Metrisch ml", imperialUnit: "Imperial fl oz", strengthLabel: "Sterkte-eenheden", abvUnit: "Alcoholpercentage", proofUnit: "Amerikaanse proof", presetLabel: "Snelle scenario's", spiritPresetLabel: "750 ml sterke drank", liqueurPresetLabel: "700 ml likeur", cocktailPresetLabel: "Batch van 500 ml", startingStrengthLabel: "Beginsterkte", startingVolumeLabel: "Beginvolume", targetStrengthLabel: "Doelsterkte", waterToAddLabel: "Toe te voegen water", finalVolumeLabel: "Eindvolume", pureAlcoholLabel: "Pure alcohol", ratioLabel: "Waterverhouding", startingProofLabel: "Begin proof", targetProofLabel: "Doel proof", readyMessage: "Je doel ligt lager. Meet het water af en meng het geleidelijk.", invalidMessage: "Het doel moet lager zijn dan de beginsterkte om te kunnen verdunnen.", largeAdditionMessage: "Deze batch heeft minstens evenveel water als sterke drank nodig. Meng in stappen en controleer opnieuw.", bottleLabel: "Maatfles met het berekende eindvolume", waterLayerLabel: "Waterlaag in de uiteindelijke mix", estimateNotice: "Alleen een planningsschatting. Alcohol en water kunnen krimpen bij het mengen; controleer de eindsterkte met geschikte meetapparatuur.", sourceLabel: "Bronnen van de formule", calculateAction: "Verdunningsinvoer", resetAction: "Waarden herstellen", volumeHint: "Kies het volume dat je hebt voordat je water toevoegt.", strengthHint: "Proof wordt als Amerikaanse proof getoond: 80 proof is 40 procent alcohol.",
};
const faq = [
  { question: "Hoe bereken ik het water voor het verdunnen van alcohol?", answer: "Vermenigvuldig eerst het beginvolume met de beginsterkte om het volume pure alcohol te vinden. Deel dit volume door de doelsterkte als decimaal voor het theoretische eindvolume. Trek het beginvolume af om de hoeveelheid water te vinden." },
  { question: "Wat is het verschil tussen ABV en proof?", answer: "ABV is het percentage pure alcohol per volume. In het Amerikaanse proof-systeem is proof twee keer de ABV, dus 80 proof is 40 procent ABV. De proof-schakelaar verandert alleen de weergave, niet de werkelijke sterkte." },
  { question: "Houdt de calculator rekening met krimp van alcohol en water?", answer: "Nee. Het resultaat is een schatting op basis van behoud van pure alcohol. Ethanol en water kunnen na het mengen samen iets minder volume innemen en temperatuur verandert het volume. Gebruik dit als batchplan en controleer met een geschikte alcoholmeter." },
  { question: "Kan ik deze calculator gebruiken voor een legaal alcoholproduct?", answer: "Deze tool doet alleen rekenwerk en controleert geen recept, etikettering, accijns, vergunningen of lokale regels. Volg de vereisten voor productie en verkoop op jouw locatie en werk met schone apparatuur." },
];
const howTo = [
  { name: "Kies volume-eenheden", text: "Selecteer metrische milliliters of imperial fluid ounces. Het fysieke volume blijft gelijk wanneer je wisselt." },
  { name: "Voer de beginbatch in", text: "Stel de beginsterkte en het volume sterke drank vóór verdunning in." },
  { name: "Stel de doelsterkte in", text: "Voer een lagere sterkte voor de eindmix in. Doelen die geen verdunning zijn worden gemarkeerd." },
  { name: "Voeg water in stappen toe", text: "Lees water en eindvolume af, meng rustig en controleer de eindsterkte met geschikte apparatuur." },
];
const faqSchema: WithContext<FAQPage> = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faq.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { "@context": "https://schema.org", "@type": "HowTo", name: title, description, step: howTo.map((step, index) => ({ "@type": "HowToStep", position: index + 1, name: step.name, text: step.text })) };
const appSchema: WithContext<SoftwareApplication> = { "@context": "https://schema.org", "@type": "SoftwareApplication", name: title, description, applicationCategory: "UtilitiesApplication", operatingSystem: "All", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" }, inLanguage: "nl" };
export const content: ToolLocaleContent<AbvDilutionCalculatorUI> = { slug, title, description, ui, faqTitle: "Vragen over verdunning", bibliographyTitle: "Bronnen van de formule", faq, howTo, schemas: [faqSchema, howToSchema, appSchema], bibliography, seo: [
  { type: "title", text: "Zo werkt alcoholverdunning", level: 2 },
  { type: "paragraph", html: "Verdunnen verlaagt de alcoholconcentratie door water toe te voegen terwijl de hoeveelheid pure alcohol ongeveer gelijk blijft. Deze <strong>calculator voor alcoholverdunning</strong> vertaalt een beginsterkte en volume naar praktisch toe te voegen water en een theoretisch eindvolume. Hij werkt lokaal in de browser zonder batchgegevens te uploaden." },
  { type: "table", headers: ["Waarde", "Formule", "Betekenis"], rows: [["Pure alcohol", "beginvolume x beginsterkte", "Alcohol die in de mix meegaat"], ["Eindvolume", "pure alcohol / doelsterkte", "Theoretisch totaal na verdunning"], ["Water", "eindvolume min beginvolume", "Te plannen hoeveelheid water"]] },
  { type: "title", text: "ABV en proof omrekenen", level: 2 },
  { type: "paragraph", html: "Alcohol by volume geeft aan welk deel van de vloeistof pure alcohol is. In het Amerikaanse systeem is proof tweemaal de ABV, waardoor 40 procent ABV gelijk is aan 80 proof. Gebruik de zichtbare schakelaar bij een etiket met proof, maar houd rekening met verschillen tussen landen en historische conventies." },
  { type: "stats", columns: 3, items: [{ value: "80 proof", label: "40 procent ABV" }, { value: "1:1", label: "Waterverhouding in het standaardscenario" }, { value: "100% lokaal", label: "Geen batchgegevens verzonden" }] },
  { type: "title", text: "Waarom het resultaat een schatting is", level: 2 },
  { type: "paragraph", html: "De berekening behoudt het volume pure alcohol, maar echte mengsels zijn niet perfect optelbaar. Alcohol en water krimpen bij het mengen en temperatuur verandert de dichtheid en het gemeten volume. Voeg water langzaam toe, wacht tot de meettemperatuur is bereikt en controleer de sterkte met geschikte apparatuur." },
  { type: "tip", title: "Meng rustig en controleer", html: "Gebruik schoon, afgemeten water en een vat dat groot genoeg is voor het theoretische eindvolume. De calculator kent je temperatuur, suiker, smaakstoffen en lokale meetregels niet. Zie de hoeveelheid water daarom als een startplan, niet als een certificaat van de eindsterkte." },
  { type: "title", text: "Een herhaalbare verdunningswerkwijze", level: 2 },
  { type: "list", items: ["Noteer de gelabelde beginsterkte en het werkelijke batchvolume.", "Kies een doelsterkte onder de beginsterkte.", "Bereken pure alcohol, eindvolume en water.", "Voeg het meeste water toe, meng en voeg de rest in kleine stappen toe.", "Controleer de eindmix bij de temperatuur waarop je meet."] },
  { type: "diagnostic", variant: "warning", title: "Rekenwerk is geen productiegoedkeuring", html: "Deze pagina controleert geen ingrediënten, hygiëne, etiketten, belasting, vergunning of verkoop. Gebruik een rekenresultaat nooit om regels voor jouw drank of locatie over te slaan." },
] };
