import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { AbvDilutionCalculatorUI } from '../ui';

const slug = 'alkohol-verduennung-und-proof-rechner';
const title = 'Rechner für Alkoholverdünnung und Proof';
const description = 'Berechne, wie viel Wasser du für eine niedrigere Zielstärke zu Spirituosen geben musst. Der Rechner zeigt Endvolumen, reinen Alkohol und Verdünnungsverhältnis.';

const ui: AbvDilutionCalculatorUI = {
  unitLabel: 'Volumeneinheiten', metricUnit: 'Metrisch ml', imperialUnit: 'Imperial fl oz', strengthLabel: 'Stärkeeinheiten', abvUnit: 'Volumenprozent', proofUnit: 'US Proof', presetLabel: 'Schnelle Szenarien', spiritPresetLabel: '750 ml Spirituose', liqueurPresetLabel: '700 ml Likör', cocktailPresetLabel: '500 ml Ansatz', startingStrengthLabel: 'Ausgangsstärke', startingVolumeLabel: 'Ausgangsvolumen', targetStrengthLabel: 'Zielstärke', waterToAddLabel: 'Zuzusetzendes Wasser', finalVolumeLabel: 'Endvolumen', pureAlcoholLabel: 'Reiner Alkohol', ratioLabel: 'Wasserverhältnis', startingProofLabel: 'Ausgangs Proof', targetProofLabel: 'Ziel Proof', readyMessage: 'Dein Ziel liegt niedriger. Miss das Wasser ab und mische es schrittweise ein.', invalidMessage: 'Die Zielstärke muss für eine Verdünnung niedriger als die Ausgangsstärke sein.', largeAdditionMessage: 'Dieser Ansatz braucht mindestens so viel Wasser wie Spirituose. Mische in Etappen und prüfe erneut.', bottleLabel: 'Graduierte Flasche mit berechnetem Endvolumen', waterLayerLabel: 'Wasserschicht in der fertigen Mischung', estimateNotice: 'Nur eine Planungsschätzung. Alkohol und Wasser können sich beim Mischen zusammenziehen. Prüfe die fertige Stärke mit geeigneter Messtechnik.', sourceLabel: 'Quellen der Formel', calculateAction: 'Verdünnungswerte', resetAction: 'Werte zurücksetzen', volumeHint: 'Wähle vor dem Wasser die vorhandene Menge.', strengthHint: 'Proof wird als US Proof angezeigt: 80 Proof entsprechen 40 Prozent Volumenalkohol.',
};

const faq = [
  { question: 'Wie berechne ich das Wasser zum Verdünnen von Alkohol?', answer: 'Multipliziere zuerst das Ausgangsvolumen mit dem Ausgangsalkoholgehalt, um das Volumen reinen Alkohols zu erhalten. Teile dieses Volumen durch die Zielstärke als Dezimalzahl und erhalte das theoretische Endvolumen. Ziehe das Ausgangsvolumen ab, um die Wassermenge zu berechnen.' },
  { question: 'Was ist der Unterschied zwischen Volumenprozent und Proof?', answer: 'Volumenprozent geben den Anteil reinen Alkohols am Flüssigkeitsvolumen an. Im US Proof System ist Proof das Doppelte der Volumenprozent: 80 Proof entsprechen 40 Prozent. Der Umschalter ändert nur die Anzeige, nicht die physische Stärke.' },
  { question: 'Berücksichtigt der Rechner die Kontraktion von Alkohol und Wasser?', answer: 'Nein. Das Ergebnis ist eine Schätzung aus der Erhaltung reinen Alkohols. Ethanol und Wasser können nach dem Mischen etwas weniger Gesamtvolumen einnehmen, und die Temperatur verändert das Volumen. Nutze das Ergebnis als Ansatzplan und prüfe mit einem geeigneten Aräometer.' },
  { question: 'Kann ich damit ein legales alkoholisches Produkt herstellen?', answer: 'Das Werkzeug berechnet nur Zahlen und prüft weder Rezeptur, Kennzeichnung, Verbrauchsteuer, Lizenz noch örtliche Vorschriften. Befolge die Regeln am Ort der Herstellung und des Verkaufs und arbeite mit sauberer Ausrüstung.' },
];

const howTo = [
  { name: 'Volumeneinheit wählen', text: 'Wähle metrische Milliliter oder imperiale Flüssigunzen. Die physische Menge bleibt beim Wechsel gleich.' },
  { name: 'Ausgangsansatz eingeben', text: 'Stelle die Ausgangsstärke und das Spirituosenvolumen vor der Verdünnung ein.' },
  { name: 'Zielstärke festlegen', text: 'Gib eine niedrigere Stärke für die fertige Mischung ein. Nicht verdünnende Ziele werden markiert.' },
  { name: 'Wasser schrittweise zugeben', text: 'Lies Wasser- und Endvolumen ab, mische langsam und prüfe die fertige Stärke mit geeigneter Ausrüstung.' },
];

const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'UtilitiesApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }, inLanguage: 'de' };

export const content: ToolLocaleContent<AbvDilutionCalculatorUI> = { slug, title, description, ui, faqTitle: 'Fragen zur Verdünnung', bibliographyTitle: 'Quellen der Formel', faq, howTo, schemas: [faqSchema, howToSchema, appSchema], bibliography, seo: [
  { type: 'title', text: 'So funktioniert die Alkoholverdünnung', level: 2 },
  { type: 'paragraph', html: 'Beim Verdünnen wird Wasser zugegeben, damit die Alkoholkonzentration sinkt, während die Menge reinen Alkohols ungefähr erhalten bleibt. Dieser <strong>Rechner für Alkoholverdünnung</strong> verbindet Ausgangsstärke und Volumen mit einer praktischen Wassermenge und einem theoretischen Endvolumen. Er läuft lokal im Browser, ohne Chargendaten hochzuladen.' },
  { type: 'table', headers: ['Wert', 'Formel', 'Bedeutung'], rows: [['Reiner Alkohol', 'Ausgangsvolumen x Ausgangsstärke', 'Alkohol in der Mischung'], ['Endvolumen', 'Reiner Alkohol / Zielstärke', 'Theoretische Gesamtmenge'], ['Wasser', 'Endvolumen minus Ausgangsvolumen', 'Planmenge für Wasser']] },
  { type: 'title', text: 'Volumenprozent und Proof umrechnen', level: 2 },
  { type: 'paragraph', html: 'Volumenprozent beschreiben den Anteil reinen Alkohols an der Flüssigkeit. Beim US System ist Proof doppelt so hoch wie die Volumenprozent, also entsprechen 40 Prozent 80 Proof. Nutze den Umschalter bei Etiketten mit Proof, beachte aber, dass Länder und historische Systeme abweichen können.' },
  { type: 'stats', columns: 3, items: [{ value: '80 Proof', label: '40 Prozent Volumenalkohol' }, { value: '1:1', label: 'Wasserverhältnis im Standardszenario' }, { value: '100% lokal', label: 'Keine Chargendaten hochgeladen' }] },
  { type: 'title', text: 'Warum das Ergebnis eine Schätzung ist', level: 2 },
  { type: 'paragraph', html: 'Die Rechnung erhält das Volumen reinen Alkohols, aber reale Mischungen sind nicht vollständig additiv. Alkohol und Wasser ziehen sich beim Verbinden zusammen, außerdem verändern Temperatur und Dichte die Messung. Gib Wasser langsam zu, lass die Mischung die Zieltemperatur erreichen und prüfe die Stärke mit passender Ausrüstung.' },
  { type: 'tip', title: 'Langsam mischen und prüfen', html: 'Verwende sauberes, abgemessenes Wasser und ein Gefäß, das groß genug für das theoretische Endvolumen ist. Temperatur, Zucker, Aromen und örtliche Messregeln sind dem Rechner unbekannt. Die Wassermenge ist deshalb ein Startplan und kein Zertifikat für den Endalkoholgehalt.' },
  { type: 'title', text: 'Ein wiederholbarer Verdünnungsablauf', level: 2 },
  { type: 'list', items: ['Notiere Ausgangsstärke und tatsächliches Volumen.', 'Wähle eine Zielstärke unterhalb der Ausgangsstärke.', 'Berechne reinen Alkohol, Endvolumen und Wasser.', 'Mische den Großteil, prüfe und ergänze den Rest in kleinen Schritten.', 'Prüfe die fertige Mischung bei der vorgesehenen Messtemperatur.'] },
  { type: 'diagnostic', variant: 'warning', title: 'Rechnung ist keine Produktionsfreigabe', html: 'Diese Seite prüft keine Zutaten, Hygiene, Kennzeichnung, Steuer, Lizenz oder Verkaufserlaubnis. Überspringe niemals die Regeln und Kontrollen, die für dein Getränk und deinen Standort gelten.' },
] };
