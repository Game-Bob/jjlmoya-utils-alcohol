import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import type { PartyKegUI, PartyKegLocaleContent } from '../index';

const slug = 'parti-birrasi-hesaplayicisi';
const title = 'Parti Bira Hesaplayıcısı: Düğünler ve Doğum Günleri için Kişi Başına Miktar';
const description = 'Konuk sayısı, süre ve sıcaklığa dayalı olarak ne kadar bira ve buz gerektiğini hesaplamak için ücretsiz araç. Düğünler, doğum günleri ve açık hava etkinlikleri için mükemmel.';

const ui: PartyKegUI = {
  calcStockTitle: 'Stok Hesaplayıcısı',
  beerIceSub: 'Etkinlikler için Bira ve Buz',
  guestsLabel: 'Konuklar',
  durationLabel: 'Süre',
  hoursUnit: 'Saat',
  intensityLabel: 'Yoğunluk',
  chillLabel: 'Sakin',
  standardLabel: 'Standart',
  partyLabel: 'Parti',
  tempLabel: 'Sıcaklık',
  estimatedVolLabel: 'Tahmini Hacim',
  kegsLabel: 'Fıçı',
  iceRequiredLabel: 'Gerekli Buz',
  bagsLabel: 'Torba',
  visualizationTitle: 'Stok Görselleştirmesi',
  optimalMsg: 'Optimal Koşullar',
  highMeltMsg: 'Yüksek Erime Algılandı',
  highEfficiencyMsg: 'Soğuk / Yüksek Verimlilik'
};

const faqTitle = 'Sıkça Sorulan Sorular';
const bibliographyTitle = 'Bibliyografi ve Kaynaklar';

const faq: PartyKegLocaleContent['faq'] = [
  {
    question: '4 saatlik bir etkinlikte bir kişi kaç bira içer?',
    answer: 'Ortalama olarak 4 saatlik bir etkinlik için kişi başına 5 bira hesaplayın. Bu, ilk saat 2 içecek ve kalan her saat 1 içecek varsayılmaktadır.',
  },
  {
    question: '100 bira için ne kadar buz gereklidir?',
    answer: 'Normal koşullar altında yaklaşık 15-20 kilo buz gerekecektir (7-10 torba). Pratik kural, normal koşullar altında içecek litresi başına 0.75 kg buzdur. Yazda veya 25 derecenin üzerinde dışarıda, bunu 1 kg litre başına yükseltin: ortam ısısı erimesini hızlandırır ve beklenenden çok daha hızlı tükenirsiniz.',
  },
  {
    question: 'Standart fıçı ile parti fıçısı arasındaki fark nedir?',
    answer: 'Standart ticari fıçı 50 litre tutar ve yaklaşık 200 porsiyon verir (her biri 250ml). Parti fıçısı (mini fıçı) tipik olarak 5 litre tutar, yaklaşık 20 porsiyon. Bu boyutları bilmek hesaplayıcının litre çıkışını satın alınacak konteyner sayısına çevirmenize yardımcı olur.',
  },
  {
    question: 'Biraları zaten soğuksa neden bu kadar buz gereklidir?',
    answer: 'Çünkü soğutma ve bakım iki ayrı işlemdir. Bir kutuyu 25 dereceden 4 dereceye getirmek buzun füzyon gizli ısısını tüketir: yaklaşık 334 kJ/kg. Soğuk olduktan sonra, buz ortam ısısını dengelemek için çalışmaya devam eder. 35 dereceli yazlık bir günde, ısı transfer bir soğutucu içine saatte başına içecek litresi başına 1kg buz eritebilir. Partiden önce içeceklerinizi önceden soğutmak, toplam buz tüketiminizi yarıya keser.',
  },
];

const howTo: PartyKegLocaleContent['howTo'] = [
  {
    name: 'Konuk sayısını tahmin edin',
    text: 'Kaç kişinin katılacağını tanımlayın. Hesaplayıcımız miktarları istatistiksel tüketim ortalamalarına dayalı olarak ayarlar.',
  },
  {
    name: 'Süre ve yoğunluğu tanımlayın',
    text: 'Etkinliğin kaç saat süreceğini ve partinin akışını (sakin, standart veya yoğun) gösterin.',
  },
  {
    name: 'Ortam sıcaklığına ayarlayın',
    text: 'Dış sıcaklık buz hesaplaması için anahtardır. Sıcak olduğu kadar, erime hızını telafi etmek için daha yüksek bir değer gerekir.',
  },
];

const bibliography: PartyKegLocaleContent['bibliography'] = [
  {
    name: 'Etkinlik Planlama: Alkol ve Bar Hesaplamaları - Spruce Eats',
    url: 'https://www.thespruceeats.com/stock-your-bar-for-a-party-760394',
  },
  {
    name: 'Buz Eritme Termodinamiği - Mühendislik Araç Kutusu',
    url: 'https://www.engineeringtoolbox.com/saturated-ice-steam-d_970.html',
  },
];

const seo: PartyKegLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Partim için Ne Kadar Bira ve Buz Gerekir?',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'Herhangi bir etkinliği düzenlerken bir milyon dolarlık soru: En çok ne kadar alkol satın almalıyım? Yetersiz kalmak felakettir, ancak fazla satın almak gereksiz bir harcamadır. Bu araç size ihtiyacınız olan tam alkol miktarını ve en önemlisi ne kadar buz torbaları gerektiğini hesaplamanıza yardımcı olur. Profesyonel catering ve etkinlik plancıları istatistiksel tüketim modellerini kullanırlar ve şimdi siz de bundan ücretsiz yararlanabilirsiniz.'
  },
  {
    type: 'title',
    text: 'Kişi Başına Tüketim Formülü',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'İhtiyacınız olan alkolu tahmin etmek için profesyonel catering işletmeleri "Saatlik Tüketim Hızına" dayalı bir formül kullanırlar. Tam bir bilim değildir, ancak istatistikler gösteriyor ki standart bir partide, kişi başına saatte yaklaşık 1.5 birim tüketilir. Ortam sıcaklığı, gıda mevcudiyeti ve etkinliğin sosyal enerjisi gibi faktörler bu taban sayıyı kaydırır.'
  },
  {
    type: 'stats',
    items: [
      { label: 'Sakin Tüketim', value: '1 içecek/saat', icon: 'mdi:tea-outline' },
      { label: 'Standart Parti', value: '1.5 içecek/saat', icon: 'mdi:glass-mug-variant' },
      { label: 'Düğün / Festival', value: '2.5+ içecek/saat', icon: 'mdi:fire' }
    ],
    columns: 3
  },
  {
    type: 'diagnostic',
    title: "Buzun Fiziği",
    icon: 'mdi:snowflake-thermometer',
    variant: 'warning',
    badge: 'Termodinamik',
    html: "Buz hesaplamak çoğu ev sahibinin başarısız olduğu yer. Buz iki işlev görmektedir: Soğutma (birayı 25°C den 4°C ye getirmek) ve Bakım (ortam ısısına karşı koymak). 30°C üzerindeki sıcaklıklarda erime hızı iki katına çıkar. Doğrudan güneş altında dolu buz torbaları 20 dakikadan kısa sürede kaybolabilir, partinin doruğuna ulaşmadan önce içecekleriniz ılınır."
  },
  {
    type: 'tip',
    title: 'Buz Tasarrufu İçin Profesyonel İpucu',
    html: "Buz eklemeden önce fıçıları ve kutuları gölgede tutun. Güneşte içecekler sıcaksa ilk buz torbanızın ilk yüzde 50 si yalnızca gizli ısı alışverişi yaparak 10 dakikada kaybolur. Önceden soğutulmuş içeceklerle başlayarak gerçekten satın almanız gereken buz miktarını çarpıcı bir şekilde azaltın."
  },
  {
    type: 'title',
    text: 'Lojistik için Referans Verileri',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'Standart 50 litre fıçı yaklaşık 200 porsiyon verir. Tipik buz torbaları 2 kg ağırlığındadır. Bu rakamları bilmek, etkinliğiniz için gerekli taşımacılığı ve depolamayı son anında sürprizler olmadan planlamanıza yardımcı olur. Taşımadaki buz erimesini hesaba katın, yazda 30 dakikalık bir sürüş partinin başlamasından önce tüm torbaları tüketebilir.'
  },
  {
    type: 'summary',
    title: 'Bu Araç Kime Yöneliktir?',
    items: [
      'Özel Parti Ev Sahipleri: Sonraki kutlamada ihtiyacınız olanı tam olarak satın almak için tahminle bitmek.',
      'Etkinlik Plancıları: Müşterileri teklif etmek ve bar lojistiğini profesyonelce planlamak için doğru tüketim modellerini kullanın.',
      'Mekan Yöneticileri: Farklı konuk sayılarıyla yinelenen etkinlikler arasında stok hesaplamalarını standartlaştırın.'
    ]
  },
  {
    type: 'paragraph',
    html: "Sıklıkla gözden kaçırılan bir değişken, konuk düşüş hızıdır. Çoğu partide konukların yüzde 10 ila 15 i erken ayrılır ve yüzde 10 u hiç içmeyebilir. Hesaplayıcı muhafazakâr bir tampon uygular, böylece hiçbir zaman kısa kalmazsınız, aynı zamanda da muazzam bir fazlalığı yok. Bu ayarlamaları anlamak tahmini belirli kalabalığınız ve bağlamınız için ince ayarlamanıza yardımcı olur. Satın alırken her zaman yuvarla, açılmış fıçıları geri vermek genellikle mümkün değildir. Küçük bir fazlalık her zaman partinin ortasında kuru kalmaktan daha iyi."
  }
];

const schemas: PartyKegLocaleContent['schemas'] = [
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

export const content: PartyKegLocaleContent = {
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
