import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { AbvDilutionCalculatorUI } from '../ui';

const slug = 'alkol-seyreltme-ve-proof-hesaplayici';
const title = 'Alkol seyreltme ve proof hesaplayıcı';
const description = 'Bir içkinin alkol derecesini düşürmek için ne kadar su eklemeniz gerektiğini hesaplayın. Son hacmi, saf alkolü ve seyreltme oranını görün.';
const ui: AbvDilutionCalculatorUI = {
  unitLabel: 'Hacim birimleri', metricUnit: 'Metrik ml', imperialUnit: 'Imperial fl oz', strengthLabel: 'Derece birimleri', abvUnit: 'Alkol yüzdesi', proofUnit: 'ABD proof', presetLabel: 'Hızlı senaryolar', spiritPresetLabel: '750 ml distile içki', liqueurPresetLabel: '700 ml likör', cocktailPresetLabel: '500 ml karışım', startingStrengthLabel: 'Başlangıç derecesi', startingVolumeLabel: 'Başlangıç hacmi', targetStrengthLabel: 'Hedef derece', waterToAddLabel: 'Eklenecek su', finalVolumeLabel: 'Son hacim', pureAlcoholLabel: 'Saf alkol', ratioLabel: 'Su oranı', startingProofLabel: 'Başlangıç proof', targetProofLabel: 'Hedef proof', readyMessage: 'Hedef daha düşük. Suyu ölçün ve yavaşça karıştırın.', invalidMessage: 'Seyreltme için hedef derece başlangıç derecesinden düşük olmalıdır.', largeAdditionMessage: 'Bu karışım en az içki kadar su gerektiriyor. Aşamalı karıştırın ve yeniden kontrol edin.', bottleLabel: 'Hesaplanan son hacmi gösteren dereceli şişe', waterLayerLabel: 'Son karışımdaki su katmanı', estimateNotice: 'Yalnızca planlama tahminidir. Alkol ve su karışırken büzüşebilir; son derece uygun ölçüm ekipmanıyla doğrulayın.', sourceLabel: 'Formül kaynakları', calculateAction: 'Seyreltme girdileri', resetAction: 'Değerleri sıfırla', volumeHint: 'Su eklemeden önce elinizdeki hacmi seçin.', strengthHint: 'Proof ABD sisteminde gösterilir: 80 proof, yüzde 40 alkole eşittir.',
};
const faq = [
  { question: 'Alkolü seyreltmek için gereken su nasıl hesaplanır?', answer: 'Saf alkol hacmini bulmak için başlangıç hacmini başlangıç derecesiyle çarpın. Teorik son hacmi bulmak için bu değeri ondalık biçimdeki hedef dereceye bölün. Eklenecek suyu bulmak için başlangıç hacmini son hacimden çıkarın.' },
  { question: 'ABV ile proof arasındaki fark nedir?', answer: 'ABV, hacimdeki saf alkol yüzdesidir. ABD proof sisteminde proof, ABV değerinin iki katıdır; yani 80 proof yüzde 40 ABV demektir. Proof anahtarı gerçek alkol gücünü değil, yalnızca gösterimi değiştirir.' },
  { question: 'Hesaplayıcı alkol ve suyun büzüşmesini hesaba katar mı?', answer: 'Hayır. Sonuç saf alkolün korunduğu varsayımına dayanan bir tahmindir. Etanol ve su karışınca toplam hacim biraz azalabilir; sıcaklık da hacmi değiştirir. Sonucu karışım planı olarak kullanın ve uygun bir alkolmetreyle doğrulayın.' },
  { question: 'Bu hesaplayıcı yasal bir alkollü ürün üretmek için kullanılabilir mi?', answer: 'Araç yalnızca matematik yapar; tarif, etiket, özel tüketim vergisi, ruhsat veya yerel kuralları denetlemez. Üretim ve satış yerinizdeki şartlara uyun, temiz ekipman ve güvenli ölçüm uygulamaları kullanın.' },
];
const howTo = [
  { name: 'Hacim birimlerini seçin', text: 'Metrik mililitre veya imperial sıvı ons seçin. Birimi değiştirdiğinizde fiziksel hacim aynı kalır.' },
  { name: 'Başlangıç karışımını girin', text: 'Seyreltmeden önce başlangıç derecesini ve elinizdeki içki hacmini ayarlayın.' },
  { name: 'Hedef dereceyi belirleyin', text: 'Son karışım için daha düşük bir derece girin. Seyreltme olmayan hedefler işaretlenir.' },
  { name: 'Suyu aşamalı ekleyin', text: 'Su ve son hacmi okuyun, yavaşça karıştırın ve uygun ekipmanla son dereceyi kontrol edin.' },
];
const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'UtilitiesApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }, inLanguage: 'tr' };
export const content: ToolLocaleContent<AbvDilutionCalculatorUI> = { slug, title, description, ui, faqTitle: 'Seyreltme hakkında sorular', bibliographyTitle: 'Formül kaynakları', faq, howTo, schemas: [faqSchema, howToSchema, appSchema], bibliography, seo: [
  { type: 'title', text: 'Alkol seyreltme nasıl çalışır', level: 2 },
  { type: 'paragraph', html: 'Seyreltme, saf alkol miktarını yaklaşık olarak korurken su ekleyerek alkol yoğunluğunu azaltır. Bu <strong>alkol seyreltme hesaplayıcı</strong>, başlangıç derecesi ve hacmini pratik su miktarına ve teorik son hacme dönüştürür. Tarifi veya parti verisini yüklemeden tarayıcıda yerel olarak çalışır.' },
  { type: 'table', headers: ['Değer', 'Formül', 'Anlamı'], rows: [['Saf alkol', 'başlangıç hacmi x başlangıç derecesi', 'Karışıma taşınan alkol'], ['Son hacim', 'saf alkol / hedef derece', 'Seyreltme sonrası teorik toplam'], ['Su', 'son hacim eksi başlangıç hacmi', 'Planlanacak su miktarı']] },
  { type: 'title', text: 'ABV ve proof dönüşümü', level: 2 },
  { type: 'paragraph', html: 'Hacmen alkol değeri, sıvının ne kadarının saf alkol olduğunu gösterir. ABD sisteminde proof, ABV değerinin iki katıdır; yüzde 40 ABV, 80 proof demektir. Etikette proof yazıyorsa anahtarı kullanın, ancak ülkelerin ve tarihsel sistemlerin farklı olabileceğini unutmayın.' },
  { type: 'stats', columns: 3, items: [{ value: '80 proof', label: 'Yüzde 40 ABV' }, { value: '1:1', label: 'Varsayılan senaryodaki su oranı' }, { value: '100% yerel', label: 'Parti verisi gönderilmez' }] },
  { type: 'title', text: 'Sonuç neden tahmindir', level: 2 },
  { type: 'paragraph', html: 'Hesap saf alkol hacmini korur, ancak gerçek karışımlar tam olarak toplamsal değildir. Alkol ve su birleşirken büzüşür; sıcaklık da yoğunluğu ve ölçülen hacmi değiştirir. Suyu yavaşça ekleyin, karışımın ölçüm sıcaklığına gelmesini bekleyin ve dereceyi uygun ekipmanla doğrulayın.' },
  { type: 'tip', title: 'Yavaşça karıştırın ve doğrulayın', html: 'Temiz, ölçülmüş su ve teorik son hacmi alabilecek büyüklükte bir kap kullanın. Hesaplayıcı sıcaklığı, şekeri, aromaları veya yerel ölçüm kurallarını bilemez. Su miktarını başlangıç planı olarak görün, son derece belgesi olarak değil.' },
  { type: 'title', text: 'Tekrarlanabilir seyreltme süreci', level: 2 },
  { type: 'list', items: ['Etiketteki başlangıç derecesini ve gerçek parti hacmini kaydedin.', 'Başlangıçtan düşük bir hedef derece seçin.', 'Saf alkolü, son hacmi ve suyu hesaplayın.', 'Suyun çoğunu ekleyin, karıştırın ve kalanı küçük adımlarla tamamlayın.', 'Son karışımı ölçüm sıcaklığına geldiğinde kontrol edin.'] },
  { type: 'diagnostic', variant: 'warning', title: 'Matematik üretim izni değildir', html: 'Bu sayfa malzemeleri, hijyeni, etiketi, vergiyi, ruhsatı veya satışı doğrulamaz. İçeceğiniz ya da konumunuz için geçerli kuralları hesap sonucu uğruna atlamayın.' },
] };
