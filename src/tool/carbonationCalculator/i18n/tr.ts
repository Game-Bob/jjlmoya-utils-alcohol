import { bibliography } from '../bibliography';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import type { CarbonationUI, CarbonationLocaleContent } from '../index';

const slug = 'bira-karbonasyon-hesaplayicisi';
const title = 'Bira Karbonasyon ve Aşılaması Hesaplayıcısı';
const description = 'Ev yapımı biranızı şişelemek için gereken Dekstroz, Beyaz Şeker veya DME (Kurutulmuş Malt Özütü) gram miktarını hesaplayın. Hacim, fermantasyon sıcaklığı ve stili girerek mükemmel aşılamayı sağlayın.';

const ui: CarbonationUI = {
  parametersTitle: 'Parametreler',
  metricBtn: 'Metrik',
  imperialBtn: 'İmparatorluk',
  volumeLabel: 'Bira Hacmi',
  maxTempLabel: 'Maksimum Sıcaklık',
  litersUnit: 'Litre',
  celsiusUnit: '°C',
  gallonsUnit: 'Galon',
  fahrenheitUnit: '°F',
  desiredCo2Label: 'İstenen Karbonasyon',
  volUnit: 'CO2 Vol',
  resultsTitle: 'Aşılama Sonuçları',
  tableSugarLabel: 'Beyaz Şeker',
  cornSugarLabel: 'Mısır Şekeri (Dekstroz)',
  dmeLabel: 'Kurutulmuş Malt Özütü (DME)',
  safetyTitle: 'PATLAMA TEHLİKESİ!',
  lowCarbonation: 'DÜŞÜK KARBONASYON',
  optimalCarbonation: 'OPTİMAL KARBONASYON',
  highEffervescence: 'YÜKSEK KÖPÜKLÜLÜK',
  bubblingVisualizationLabel: 'Yaklaşık kabarcık görselleştirmesi'
};

const faqTitle = 'Sıkça Sorulan Sorular';

const faq: CarbonationLocaleContent['faq'] = [
  {
    question: "Karbonasyon için sıcaklık neden önemlidir?",
    answer: "Biranızdaki kalan CO2, fermantasyondan sonra ulaşılan en yüksek sıcaklığa bağlıdır: soğuk sıvı, sıcak sıvıdan daha fazla çözünmüş gaz tutar. Gerçekten daha düşük bir sıcaklık girerseniz, hesaplayıcı gerçekte var olandan daha fazla kalan CO2 olduğunu varsayar ve gerekli olandan daha az şeker önerir. Çok yüksek girerseniz ters olur - ihtiyacından daha fazla şeker ekler ve şişe patlaması tehlike bölgesine girer, burada aşırı basınç şişelerin kırılmasına veya kapakların şiddetli bir şekilde uçmasına neden olur.",
  },
  {
    question: "Aşılama için en iyi şeker nedir?",
    answer: "Dekstroz (mısır şekeri) nötr olduğu ve hızlı çözündüğü için tercih edilir. Beyaz şeker iyi çalışır ancak ağırlığının yaklaşık %10 daha azını gerektirir.",
  },
  {
    question: "Çok fazla aşılama şekeri eklersem ne olur?",
    answer: "Aşırı aşılama, şişe içinde aşırı CO2 basıncı oluşturur. Standart cam şişeler yaklaşık 3,5-4,0 CO2 hacminde başarısız olur. Bu noktanın ötesinde şişe patlamış olabilir veya kapak şiddetli bir şekilde uçabilir. Bu nedenle kesinlik önemlidir - hatta litre başına 5 gram fazla bile bir partiyiyı tehlike bölgesine itebilir.",
  },
  {
    question: "Şişelendikten sonra bira ne kadar sürede karbonas oluyor?",
    answer: "Oda sıcaklığında (18-22°C) 2 ila 3 hafta, mayaların eklenen şekeri tamamen fermente etmesi ve CO2'nin sıvıya entegre olması için tipik aralıktır. Süreç tamamlanmadan şişeyi açmak her zaman yanıltıcı bir sonuç verir: bira yetersiz karbonas gibi görünür, ancak karbonas hala gelişmektedir. DME ile, fermente edilebilir şekerlerin karmaşıklığı nedeniyle süreç biraz daha yavaş olabilir.",
  },
];

const howTo: CarbonationLocaleContent['howTo'] = [
  {
    name: "Gerçek hacmi ölçün",
    text: "Fermantasyon tamamlandıktan sonra şişelemeye hazır olduğunuz bira litresini (veya galonunu) belirtin.",
  },
  {
    name: "Fermantasyon sıcaklığını tanımlayın",
    text: "Biranın aktif fermantasyon sırasında veya sonrasında ulaştığı en yüksek sıcaklığı girin.",
  },
  {
    name: "Stil veya CO2 hacmini seçin",
    text: "İstenen karbonasyon seviyesini seçin. Stiller 1,5 (Stouts) ile 4,5 (Buğday Bireleri) arasında değişir.",
  },
];


const seo: CarbonationLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Karbonasyon ve Aşılama Için Nihai Kılavuz',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'Aşılama sanatında ustalaşın ve ev yapımı biranızı düz bir deney dari profesyonel bir köpüklü deneyime dönüştürün. Aşılama, şişedeki kalan mayaların ikincil fermantasyon sırasında doğal CO2 üretmesini sağlamak için kesin bir şeker miktarı eklemeyi içerir. Çok az şeker düz bira verir; çok fazla şişeleri kırabilen tehlikeli basınç oluşturur. İkisinin arasındaki fark sadece birkaç gramdır - bu nedenle bu hesaplayıcı vardır.'
  },
  {
    type: 'proscons',
    title: 'Kritik Başarı Faktörleri',
    items: [
      { pro: 'Sıcaklık: Kalan CO2, fermantasyon sonrası sıcaklık tepesine bağlıdır.', con: '' },
      { pro: 'Kesinlik: Litre başına 5 gram fazla, mükemmel karbonasyon ile bir geyser arasındaki fark olabilir.', con: '' },
      { pro: '', con: 'Oksidasyon: Aşılama şekeri karıştırmak için aktarırken sıvının sıçramasını önleyin.' }
    ]
  },
  {
    type: 'title',
    text: 'Bira Stiline Göre CO2 Hacimleri',
    level: 2
  },
  {
    type: 'stats',
    items: [
      { label: 'British Stouts', value: '1,5 - 2,0 Vol', icon: 'mdi:beer' },
      { label: 'IPAs & Ales', value: '2,2 - 2,6 Vol', icon: 'mdi:hops' },
      { label: 'German Wheat', value: '3,3 - 4,5 Vol', icon: 'mdi:barley' }
    ],
    columns: 3
  },
  {
    type: 'card',
    title: 'Hangi Şekeri Seçmelisiniz?',
    icon: 'mdi:corn',
    html: '<strong>Dekstroz</strong> nötr ve profesyonel - endüstri standardı. <strong>Beyaz Şeker</strong> ekonomik ve etkilidir (dekstrozdan %10 daha az ağırlık kullanın). <strong>DME (Kurutulmuş Malt Özütü)</strong> saflık seçeceğidir, ancak marka ve malt bileşimine göre fermente edilebilirliği değiştiği için doğru bir şekilde tahmin etmek daha zordur.'
  },
  {
    type: 'diagnostic',
    title: 'Güvenlik Uyarısı',
    icon: 'mdi:alert-decagram',
    variant: 'error',
    badge: 'Tehlike',
    html: 'Standart cam şişeler 3,5-4,0 CO2 hacminde başarısız olur. İnce camdaki Belçika tarzı veya buğday bireleri karbonasyona çalışmayın. Her zaman gazlı içecekler için derecelendirilmiş şişeler kullanın ve önceki kullanımdan mikroskopik yapısal hasar olabilecek geri dönüştürülmüş ticari şişeleri asla yeniden kullanmayın.'
  },
  {
    type: 'tip',
    title: 'Pro İpucu: Şekeri Doğru Şekilde Çözün',
    html: 'Aşılama şekeri çözeltisini (20L partisi başına yaklaşık 250ml su içinde çözünmüş şeker) biraya eklemeden önce her zaman 10 dakika kaynatın. Kaynama solüsyonu sterilize eder ve şekerin tamamen çözünmüş olduğundan ve tüm partiye eşit şekilde dağıtıldığından emin olur, şişeler arasında eşit olmayan karbonasyona neden olan sıcak noktaları önler.'
  },
  {
    type: 'summary',
    title: 'Bu Araç Kim İçin?',
    items: [
      'Ev Yapımı Bira Üreticileri: Herhangi bir partisi boyutu, stil ve fermantasyon sıcaklığı için kesin aşılama şekeri hesaplaması alın.',
      'Zanaat Birası Meraklıları: Ticari birelerin neden farklı karbonasyon seviyeleri olduğunun arkasındaki bilimi anlayın.',
      'Profesyonel Bira Üreticileri: Büyük ticari partileri şişelemeden önce el hesaplamalarını çapraz kontrol edin.'
    ]
  },
  {
    type: 'title',
    text: 'Karbonasyon Bilimi: Henry\'s Yasası',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'Özünde, karbonasyon <strong>Henry\'s Yasası</strong> tarafından yönetilir: bir sıvıda çözünmüş gaz miktarı, o gazın sıvının üzerindeki kısmi basıncıyla orantılıdır. Bir şişeyi aşılayıp mühürlerseniz, maya şekeri tüketir ve kapalı bir ortamda CO2 üretir. Basınç arttıkça gaz tekrar çözeltiye zorlanır. Bu dengenin ulaşıldığı sıcaklık, son karbonasyon seviyesini belirler - bu nedenle fermantasyon sıcaklığı bu hesaplayıcıda en kritik değişkendir.'
  },
  {
    type: 'paragraph',
    html: 'Aşılamadan önceki biranızdaki kalan CO2 sıfır değildir. Her bira fermantasyon sürecinden çözünmüş CO2 içerir ve tutulan miktar biranın ulaştığı en yüksek sıcaklığa bağlıdır. 22°C\'de fermente edilen bira, 16°C\'de fermente edilen biradan önemli ölçüde daha az kalan CO2 içerir, ancak her ikisi de şu anda soğutulmuştur. Bu kalıntıyı hesaba katmamak sistematik aşırı aşılamaya yol açar - başlangıç ev yapımı bira üreticileri arasında en yaygın hatalardan biridir.'
  }
];

const schemas: CarbonationLocaleContent['schemas'] = [
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

export const content: CarbonationLocaleContent = {
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
