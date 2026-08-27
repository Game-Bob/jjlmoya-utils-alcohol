import type { FAQPage, HowTo, SoftwareApplication, WithContext } from "schema-dts";
import type { ToolLocaleContent } from "../../../types";
import { bibliography } from "../bibliography";
import type { AbvDilutionCalculatorUI } from "../ui";

const slug = "calcolatore-diluizione-alcol-e-proof";
const title = "Calcolatore di diluizione dell'alcol e proof";
const description = "Calcola quanta acqua aggiungere per ridurre il grado alcolico di un distillato. Il calcolatore mostra volume finale, alcol puro e rapporto di diluizione.";
const ui: AbvDilutionCalculatorUI = {
  unitLabel: "Unità di volume", metricUnit: "Metrico ml", imperialUnit: "Imperiale fl oz", strengthLabel: "Unità di grado", abvUnit: "Percentuale alcolica", proofUnit: "Proof statunitense", presetLabel: "Scenari rapidi", spiritPresetLabel: "Distillato da 750 ml", liqueurPresetLabel: "Liquore da 700 ml", cocktailPresetLabel: "Lotto da 500 ml", startingStrengthLabel: "Grado iniziale", startingVolumeLabel: "Volume iniziale", targetStrengthLabel: "Grado obiettivo", waterToAddLabel: "Acqua da aggiungere", finalVolumeLabel: "Volume finale", pureAlcoholLabel: "Alcol puro", ratioLabel: "Rapporto acqua", startingProofLabel: "Proof iniziale", targetProofLabel: "Proof obiettivo", readyMessage: "Il tuo obiettivo è più basso. Misura l'acqua e miscelala gradualmente.", invalidMessage: "Per una diluizione il grado obiettivo deve essere inferiore a quello iniziale.", largeAdditionMessage: "Questo lotto richiede almeno tanta acqua quanto distillato. Miscela a fasi e controlla di nuovo.", bottleLabel: "Bottiglia graduata con il volume finale calcolato", waterLayerLabel: "Strato d'acqua nella miscela finale", estimateNotice: "Solo una stima di preparazione. Alcol e acqua possono contrarsi quando vengono miscelati; verifica il grado finale con strumenti adatti.", sourceLabel: "Fonti della formula", calculateAction: "Valori di diluizione", resetAction: "Ripristina valori", volumeHint: "Scegli il volume disponibile prima di aggiungere acqua.", strengthHint: "Il proof usa il sistema statunitense: 80 proof corrispondono al 40 percento di alcol.",
};
const faq = [
  { question: "Come si calcola l'acqua necessaria per diluire l'alcol?", answer: "Moltiplica il volume iniziale per il grado iniziale per ottenere il volume di alcol puro. Dividi questo volume per il grado obiettivo espresso come decimale per ottenere il volume finale teorico. Sottrai il volume iniziale per trovare l'acqua da aggiungere." },
  { question: "Qual è la differenza tra ABV e proof?", answer: "L'ABV indica la percentuale di alcol puro in volume. Nel sistema proof statunitense, il proof è il doppio dell'ABV: 80 proof equivalgono al 40 percento. Il selettore cambia la visualizzazione, non la forza alcolica reale." },
  { question: "Il calcolatore considera la contrazione di alcol e acqua?", answer: "No. Il risultato è una stima basata sulla conservazione dell'alcol puro. Etanolo e acqua possono occupare un volume combinato leggermente minore dopo la miscelazione, e anche la temperatura cambia il volume. Usa il risultato come piano e verifica con un alcolometro adatto." },
  { question: "Posso usarlo per produrre legalmente una bevanda alcolica?", answer: "Lo strumento esegue solo calcoli e non controlla ricette, etichette, accise, licenze o norme locali. Rispetta gli obblighi del luogo di produzione e vendita e usa attrezzatura pulita con misurazioni sicure." },
];
const howTo = [
  { name: "Scegli le unità di volume", text: "Seleziona millilitri metrici o once liquide imperiali. Il volume fisico resta uguale cambiando unità." },
  { name: "Inserisci il lotto iniziale", text: "Imposta il grado iniziale e il volume di distillato disponibile prima della diluizione." },
  { name: "Imposta il grado obiettivo", text: "Inserisci un grado più basso per la miscela finale. Gli obiettivi che non sono diluizioni vengono segnalati." },
  { name: "Aggiungi acqua a fasi", text: "Leggi acqua e volume finale, miscela gradualmente e verifica il grado con strumenti adatti." },
];
const faqSchema: WithContext<FAQPage> = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faq.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { "@context": "https://schema.org", "@type": "HowTo", name: title, description, step: howTo.map((step, index) => ({ "@type": "HowToStep", position: index + 1, name: step.name, text: step.text })) };
const appSchema: WithContext<SoftwareApplication> = { "@context": "https://schema.org", "@type": "SoftwareApplication", name: title, description, applicationCategory: "UtilitiesApplication", operatingSystem: "All", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" }, inLanguage: "it" };
export const content: ToolLocaleContent<AbvDilutionCalculatorUI> = { slug, title, description, ui, faqTitle: "Domande sulla diluizione", bibliographyTitle: "Fonti della formula", faq, howTo, schemas: [faqSchema, howToSchema, appSchema], bibliography, seo: [
  { type: "title", text: "Come funziona la diluizione dell'alcol", level: 2 },
  { type: "paragraph", html: "La diluizione riduce la concentrazione alcolica aggiungendo acqua, mantenendo approssimativamente invariata la quantità di alcol puro. Questo <strong>calcolatore di diluizione dell'alcol</strong> trasforma grado e volume iniziali in una quantità pratica di acqua e in un volume finale teorico. Funziona localmente nel browser, senza caricare dati del lotto." },
  { type: "table", headers: ["Valore", "Formula", "Significato"], rows: [["Alcol puro", "volume iniziale x grado iniziale", "Alcol che passa nella miscela"], ["Volume finale", "alcol puro / grado obiettivo", "Totale teorico dopo la diluizione"], ["Acqua", "volume finale meno volume iniziale", "Quantità d'acqua da preparare"]] },
  { type: "title", text: "Conversione tra ABV e proof", level: 2 },
  { type: "paragraph", html: "La percentuale alcolica in volume esprime la parte di alcol puro nel liquido. Nel sistema statunitense il proof è il doppio dell'ABV: il 40 percento corrisponde a 80 proof. Usa il selettore quando l'etichetta indica il proof, ricordando che le convenzioni possono cambiare tra paesi e periodi storici." },
  { type: "stats", columns: 3, items: [{ value: "80 proof", label: "40 percento di alcol" }, { value: "1:1", label: "Rapporto acqua dello scenario predefinito" }, { value: "100% locale", label: "Nessun dato del lotto inviato" }] },
  { type: "title", text: "Perché il risultato è una stima", level: 2 },
  { type: "paragraph", html: "Il calcolo conserva il volume di alcol puro, ma le miscele reali non sono perfettamente additive. Alcol e acqua si contraggono quando si combinano, mentre la temperatura cambia densità e volume misurato. Aggiungi l'acqua lentamente, attendi la temperatura di misura e verifica il grado con strumenti adatti." },
  { type: "tip", title: "Miscela gradualmente e verifica", html: "Usa acqua pulita e misurata in un contenitore abbastanza grande per il volume finale teorico. Il calcolatore non conosce temperatura, zuccheri, aromi o regole locali. Considera il valore dell'acqua un piano iniziale, non un certificato del grado finale." },
  { type: "title", text: "Un flusso di diluizione ripetibile", level: 2 },
  { type: "list", items: ["Annota il grado indicato e il volume reale del lotto.", "Scegli un grado obiettivo più basso di quello iniziale.", "Calcola alcol puro, volume finale e acqua.", "Aggiungi quasi tutta l'acqua, miscela e completa in piccoli passaggi.", "Verifica la miscela alla temperatura prevista per la misurazione."] },
  { type: "diagnostic", variant: "warning", title: "Un calcolo non è un'autorizzazione alla produzione", html: "Questa pagina non convalida ingredienti, igiene, etichette, tasse, licenze o vendita. Non usare un risultato numerico per ignorare le regole applicabili alla tua bevanda o al tuo luogo." },
] };
