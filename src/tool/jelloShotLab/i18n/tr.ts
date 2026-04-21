import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { JelloShotLabUI, JelloShotLabLocaleContent } from '../entry';

const slug = 'jello-shot-hesaplayici';
const title = 'Jello Shot Hesaplayıcı: Mükemmel Alkol ve Jelatin Oranı Hesaplayıcısı';
const description = 'Gerçekten donacak jello shotlar için tam olarak ne kadar içki ve jelatin kullanacağınızı hesaplayın. Her alkol gücü için bilimsel oranlara dayalı sulu veya lastik kıvamlı başarısızlıkları önleyin.';

const ui: JelloShotLabUI = {
  title: 'Jello Shot Hesaplayıcı',
  description: 'Shotlarınızın her seferinde donması için jelatin, su ve alkol\'ün mükemmel oranını alın.',
  liquorBaseLabel: 'İçki Türü',
  liquorAbvLabel: 'İçki Gücü (%)',
  gelatinLabel: 'Jelatin Türü',
  diluentLabel: 'Su Tabanı',
  calculateBtn: 'Hesapla',
  modePrecision: 'Hassas Mod',
  modeIntensity: 'Shot Gücü',
  modeIntensityLight: 'Hafif (Kolay)',
  modeIntensityBalanced: 'Standart',
  modeIntensityLimit: 'Maksimum (Güçlü)',
  partyPlannerTitle: 'Parti Planlayıcı',
  partyPlannerGuestLabel: 'Misafirler',
  partyPlannerShotsPerGuest: 'Kişi başı shot',
  multiLayerTitle: 'Çok Katmanlı',
  howToTitle: 'Nasıl yapılır',
  proTipsTitle: 'Uzman İpuçları',
  resultsTitle: 'Tarifiniz',
  totalVolumeLabel: 'Toplam Hacim',
  boilingWaterLabel: 'Sıcak Su',
  alcoholVolumeLabel: 'İçki',
  packetsNeededLabel: 'Jelatin Paketleri',
  chillingTimeLabel: 'Soğutma Süresi',
  unitMm: 'ml',
  unitOz: 'oz',
  unitGrams: 'g',
  unitPackets: 'paket',
  modeParty: 'Parti Modu',
  modeRecipe: 'Tarif Modu',
};

const faqTitle = 'Sıkça Sorulan Sorular';

const faq: JelloShotLabLocaleContent['faq'] = [
  {
    question: 'Yüksek alkollü içki neden jello shotların donmasını engeller?',
    answer: 'Etanol, jelatinin üçlü sarmal protein yapısını bir arada tutan hidrojen bağlarını bozar. İçki toplam hacmin yaklaşık %35\'ini geçtiğinde protein matrisi stabil bir ağ oluşturamaz ve shot sıvı kalır. İçkinin ABV\'si ne kadar yüksekse, bu sınıra ulaşmadan önce o kadar az hacim ekleyebilirsiniz.',
  },
  {
    question: 'Jello shotların donmayı bırakmasından önce maksimum alkol oranı nedir?',
    answer: 'Güvenli üst sınır, toplam sıvı hacminin yaklaşık %30–35\'inin saf içki (40% ABV\'de) olmasıdır. 96\'lık nötr alkolle bu limit toplam hacmin yaklaşık %15–18\'ine düşer. Hesaplayıcımız içkinin ABV\'sini hesaba katarak donma eşiğini asla aşmamanızı sağlar.',
  },
  {
    question: 'Hangi içkiyi kullandığım önemli mi — votka, rom veya tekila?',
    answer: 'Önemli olan ABV\'dir, içki türü değil. 40\'lık votka ve 40\'lık rom jelatin matrisinde özdeş davranır. Ancak daha yüksek şeker içerikli içkiler (bazı romlar veya likörler gibi) jelatin ağındaki hidrojen bağları için etanolle rekabet eden şeker sayesinde dokuyu hafifçe iyileştirebilir.',
  },
  {
    question: 'Jello shotlar buzdolabında ne kadar dayanır?',
    answer: 'Düzgün yapılmış jello shotlar, plastik streç filmle örtülü şekilde buzdolabında 3–5 gün dayanır. Yüksek alkol içeriği doğal bir koruyucu olarak işlev görür. Jelatin yumuşayacağı ve bakteriler çoğalabileceği için oda sıcaklığında 2 saatten fazla bırakmaktan kaçının.',
  },
  {
    question: 'Jello shotlarımı daha sert veya daha yumuşak yapabilir miyim?',
    answer: 'Evet. Bardaklardan temizce çıkan daha sert shotlar için daha fazla jelatin (veya yarım paket fazladan) kullanın. Daha yumuşak, titrek bir doku için biraz daha az kullanın. Ağızda eriyen bir doku istiyorsanız jelatini asla agar-agar ile değiştirmeyin — agar daha sert donar ve daha yüksek sıcaklıkta erir.',
  },
  {
    question: 'Soğutmayı hızlandırmak için jello shotları dondurabilir miyim?',
    answer: 'Hayır. Dondurma jelatin ağını bozarak çözüldüğünde sulu, granüllü bir dokuya yol açar. Her zaman en az 4 saat buzdolabında bekletin. Partiler için önceki akşam yapın — 8 saat ve üzeri en iyi dokuyu verir.',
  },
];

const howTo: JelloShotLabLocaleContent['howTo'] = [
  { name: 'İçkinizi seçin', text: 'İçkinizin ABV\'sini girin ve istediğiniz shot gücünü seçin. Hesaplayıcı, jelatininizin tutabileceği maksimum içki miktarını gösterecektir.' },
  { name: 'Jelatini karıştırın', text: 'Hesaplanan miktarda kaynar suyu bir kaba dökün. Jelatin tozunu ekleyin ve tamamen erinceye kadar 2 dakika boyunca kuvvetlice karıştırın. Henüz alkol eklemeyin.' },
  { name: 'İçkiyi ekleyin', text: 'Jelatin karışımının 5–10 dakika ılınmasını bekleyin; sıcak ama yanmaz olmalı (50 °C\'nin altında). İçkinizi ekleyin ve hava kabarcığı oluşturmamak için nazikçe karıştırın.' },
  { name: 'Dökün ve soğutun', text: 'Plastik bardaklara, silikon kalıplara veya küçük shot bardaklarına dökün. En az 4 saat buzdolabında bekletin — bir gece ideal. Dondurmayın.' },
];


const seo: JelloShotLabLocaleContent['seo'] = [
  { type: 'title', text: 'Mükemmel Bir Jello Shotun Arkasındaki Kimya', level: 2 },
  {
    type: 'paragraph',
    html: 'Jello shot, sadece içine alkol dökülen aromalı jelatin değildir — protein polimerleri, su ve etanolün hidrojen bağları için rekabet ettiği <strong>narin bir kolloidal süspansiyondur</strong>. Oranı yanlış yaparsanız tatlı sıvı birikintisi veya masadan zıplayan lastik bir disk elde edersiniz. Doğru yaparsanız, bardaktan tek temiz bir hareketle çıkan mükemmel titreyici bir shot elde edersiniz.',
  },
  {
    type: 'stats',
    items: [
      { label: 'Hafif (Kolay)', value: '~%30 içki', icon: 'mdi:emoticon-happy-outline' },
      { label: 'Standart', value: '~%45 içki', icon: 'mdi:flask-outline' },
      { label: 'Maksimum', value: '~%55 içki', icon: 'mdi:fire' },
    ],
    columns: 3,
  },
  {
    type: 'card',
    title: 'Bloom Gücü Nedir?',
    icon: 'mdi:molecule',
    html: 'Bloom, jelatinin jelleşme gücünü ölçer ve genellikle 50 ila 300 Bloom arasında değişir. Marketteki yaprak jelatin genellikle 150–200 Bloom\'dur. Daha yüksek Bloom, aynı miktarda toz ile daha sert bir jel anlamına gelir; bu da donmadan önce biraz daha fazla alkol tolere edebileceği anlamına gelir. Standart jelatin tozu paketleri (7 g), yaklaşık 240 ml sıvı için kalibre edilmiştir.',
  },
  {
    type: 'card',
    title: 'Etanol Sınırı',
    icon: 'mdi:alert-circle-outline',
    html: 'Etanol, kolajenin amino asit zincirlerindeki hidrojen bağlanma siteleri için su ile rekabet eder. Etanol çok fazla site kapladığında protein, jelatine yapısını veren kararlı üçlü sarmala katlanamaz. Pratik sınır yaklaşık olarak <strong>1 kısım 40\'lık içki ile 1 kısım su</strong>dur — bunun ötesinde ne kadar beklerseniz bekleyin shotunuz donmaz.',
  },
  {
    type: 'tip',
    title: 'Kaynayan jelatine asla alkol eklemeyin',
    html: 'Alkol, 78 °C\'nin üzerinde hızla buharlaşır. Eritilmiş jelatini içki eklemeden önce her zaman 50 °C\'nin altına soğumasına izin verin. Bu tek adım, diğer herhangi bir hatadan daha fazla jello shot başarısızlığından sorumludur.',
  },
  { type: 'title', text: 'Yaygın Hataları Giderme', level: 2 },
  {
    type: 'proscons',
    title: 'Belirtiler ve Çözümler',
    items: [
      { pro: '4 saat sonra shot sıvı → Çok fazla alkol veya oran aşıldı. İçki hacmini azaltın.', con: 'Shot alkol tadı vermiyor → İçki çok sıcak sıvıya eklendi. Önce soğumasını bekleyin.' },
      { pro: 'Shot çok lastik kıvamlı → Çok fazla jelatin. Bir dahaki seferinde yarım paket azaltın.', con: 'Shot bulanık → Karıştırma sırasında hava kabarcıkları oluştu. Nazikçe karıştırın ve dökmeden önce dinlendirin.' },
      { pro: 'Shot granüllü dokuya sahip → Jelatin tam olarak erimedi. Sıcak suda daha uzun süre karıştırın.', con: 'Shot 8 saat sonra katılaşmıyor → Etanol sınırı aşıldı. Daha az içki veya daha düşük ABV kullanın.' },
    ],
  },
  {
    type: 'summary',
    title: 'Bu araç kimin için?',
    items: [
      'Parti organizatörleri: Satın almadan önce kaç paket ve ne kadar içkiye ihtiyacınız olduğunu tam olarak hesaplayın.',
      'Barmenler: Her seferinde tutarlı sonuçlarla büyük parti üretimine ölçeklendirin.',
      'Ev aşçıları: En yaygın hatalardan kaçının — sıvı shotlar, lastik doku veya sıfır alkol tadı.',
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
