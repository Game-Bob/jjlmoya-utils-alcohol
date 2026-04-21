import { bibliography } from '../bibliography';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import type { CocktailBalancerUI, CocktailBalancerLocaleContent } from '../index';

const slug = 'kokteyl-dengeleyici';
const title = 'Cocktail Balancer: Asitlik Kanunu';
const description = 'Koktailleriniz için tatlı ve asit arasındaki mükemmel dengeyi hesaplayın. Miksoloji\'nin altın oranını keşfedin.';

const ui: CocktailBalancerUI = {
  title: 'Cocktail Balancer',
  presetsBtn: 'Tarifler',
  saveBtn: 'Kaydet',
  resetBtn: 'Sıfırla',
  emptyStateTitle: 'Çalışma Tezgahınız Boş',
  emptyStateDescription: 'Koktail dengenizi gerçek zamanlı olarak analiz etmek için malzeme ekleyin.',
  addBtn: 'Malzeme Ekle',
  addMoreBtn: 'Başka Malzeme Ekle',
  flavorProfileTitle: 'Tat Profili',
  volLabel: 'Hacim',
  sugarLabel: 'Şeker',
  colorLabel: 'Renk',
  sourLawTitle: 'Asitlik Kanunu',
  acidDryLabel: 'Asit (Kuru)',
  balanceLabel: 'Denge',
  sweetLabel: 'Tatlı',
  aiSuggestionTitle: 'YZ Önerisi',
  addIngredientTitle: 'Malzeme Ekle',
  searchPlaceholder: 'Rom, limon, şurup ara...',
  presetsTitle: 'Tarifler & Ön Ayarlar',
  savedSectionTitle: 'Kaydedilen',
  classicsSectionTitle: 'Klasikler',
  confirmDeleteTitle: 'Hepsini sil?',
  confirmDeleteText: 'Bu, tüm malzemeleri çalışma tezgahınızdan kaldıracaktır. Bu işlem geri alınamaz.',
  cancelBtn: 'İptal',
  deleteBtn: 'Sil',
  verdictSpiritSeco: 'İçkili / Kuru',
  verdictSoloDulce: 'Sadece Tatlı (Old Fashioned)',
  verdictMuyAcido: 'Çok Asitli / Kemik Kuru',
  verdictAcido: 'Asitli / Tatlı',
  verdictEquilibrado: 'Dengeli (Asitli)',
  verdictDulce: 'Tatlı / Ticari',
  verdictEmpalagoso: 'Çok Tatlı',
  fixAddBitters: 'Acı Eksik',
  fixAddSugar: 'Çok Asitli',
  fixAddAcid: 'Çok Tatlı'
};

const faqTitle = 'Sıkça Sorulan Sorular';

const faq: CocktailBalancerLocaleContent['faq'] = [
  {
    question: "'Asitlik Kanunu' nedir?",
    answer: "Üç öğeyi dengelemek için miksölojinin altın oranıdır: güçlü taban (spirt), asitlik (sitruslar) ve tatllık (şuruplar). Klasik bir tarif genellikle 2:1:1 oranını (Güçlü:Asitli:Tatlı) takip eder, ancak bu güç ve yoğunluğa bağlı olarak değişir.",
  },
  {
    question: "Seyreltme koktail dengesini nasıl etkiler?",
    answer: "Buz sadece soğutmakla kalmaz; spiritin aromatlarını açan ve asitlik ile tatllık doruklarını yumuşatan su (seyreltme) ekler. Shakerlerde dengeli bir koktail bardakta çok uzun süre buz kalırsa dengesiz hale gelebilir.",
  },
  {
    question: "Evde yaptığım koktaillerim barda olanlar gibi neden tatmıyor?",
    answer: "Genellikle şeker ve sitrusların pH değeri arasında denge eksikliğinden kaynaklanır. Limonlar mevsime bağlı olarak asitlikte değişir. Hesaplayıcımız, kullanılan suyun hacmine göre tamamen şurup miktarını ayarlamanıza yardımcı olur.",
  },
  {
    question: "Brix dereceleri nedir ve koktaillerde neden önemlidir?",
    answer: "Brix, bir sıvıdaki çözünmüş şeker miktarını ölçen bir ölçektir. Basit şurup (1:1) yaklaşık 50 °Brix'tedir; zengin şurup (2:1) 66 °Brix'i aşar. Brix ne kadar yüksekse, birim hacim başına o kadar çok gövde ve tatllık sağlar. Bunu bilmek, dengeyi bozmadan tariflerde şurupları değiştirmenizi sağlar.",
  },
];

const howTo: CocktailBalancerLocaleContent['howTo'] = [
  {
    name: "Alkollü tabanı seçin",
    text: "Ana spiriti (Cin, Rom, Viski) veri tabanımızdan seçerek gövde ve alkol katkısını bilin.",
  },
  {
    name: "Asitlik ajanını girin",
    text: "Limon, limonata veya grapefruit suyu hacmini ekleyin. Hesaplayıcı, karışımdaki pH etkisini analiz edecektir.",
  },
  {
    name: "Tatlı bileşeni ayarlayın",
    text: "Şurup türünü (basit, 2:1, agave) girin ve denge göstergesi gerçek zamanlı olarak hareket ederken izleyin.",
  },
  {
    name: "Mükemmel servis",
    text: "Aracının nihai kararını gözden geçirin: asitlik oranı, seyreltme sonrası tahmini ABV ve düzeltme önerileri. Taze buz ile servis yapın ve sitruslar veya şurupu tadınıza göre ayarlayın.",
  },
];


const seo: CocktailBalancerLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Moleküler Mühendislik ve Sıvı Dengesi',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'Sezgi matematiğin karşılaştığı dijital laboratuvara hoş geldiniz. Bu araç basit bir tarif kitabı değil; koktaillerinizin moleküler yapısını gerçek zamanlı olarak ayrıştırmak ve analiz etmek için tasarlanmış <strong>ileri düzey fiziko-kimyasal bir simülatördür</strong>. Sitrusların her damlası, spiritinin her ölçümü, şurupun her gramı, içeceğinizin bir başyapı mı yoksa hayal kırıklığı verici bir başarısızlık mı olacağını belirleyen değişmez kimya yasalarına göre etkileşime girer.'
  },
  {
    type: 'stats',
    items: [
      { label: 'Limonata', value: '~6% Asit', icon: 'mdi:fruit-citrus' },
      { label: 'Limon', value: '~6% Asit', icon: 'mdi:fruit-citrus' },
      { label: 'Greyfurt', value: '~1-2% Asit', icon: 'mdi:fruit-citrus' }
    ],
    columns: 3
  },
  {
    type: 'card',
    title: 'Asitliğin Bilimi',
    icon: 'mdi:fruit-citrus',
    html: 'Asitlik sadece bir tat değil; dengeli bir koktailin yapısal omurgasıdır. Doğru asitlik olmadan, bir içecek düz, tek boyutlu ve unutulur hale gelir. Algoritmamız, tat alma yüzeyinde reçetelerinizi tüm bir denge noktası kadar kaydırabilen mevsimsel sitrus pH varyasyonlarını hesaba katarak, Pers limesi ile Eureka limonunun titre edilebilir asitliğini ayırt eder.'
  },
  {
    type: 'card',
    title: 'Brix Kontrolü (Tatllık)',
    icon: 'mdi:spoon-sugar',
    html: 'Koktailinizin gövdesi ve dokusu tamamen çözünmüş şekere bağlıdır. Basit şurup (1:1), zengin şurup (2:1), bal veya agave nektarından çok farklı davranır. Her tatlandırıcı, içeceğin dili nasıl kapladığını etkileyen farklı bir Brix derecesine ve viskoziteye sahiptir. Hesaplayıcımız, son ağız hissini ve tatllık algısını tahmin etmek için çözünen şekerin kesin gramlarını hesaplar.'
  },
  {
    type: 'card',
    title: 'Termodinamik ve Seyreltme',
    icon: 'mdi:water-percent',
    html: 'Çalkalanan bir koktail, buz sıcaklığı, çalkalama tekniği ve süresi bağlı olarak %25-40 seyreltilir. Bu su eklenmesi bir kusur değildir; aromatları açan ve alkolün kenarını yumuşatan temel bir bileşendir. Hesaplayıcımız, seyreltme sonrası son ABV\'yi tahmin eder, böylece tam olarak amaçlanan güç ve tat dengesine sahip içecekler tasarlayabilirsiniz.'
  },
  {
    type: 'title',
    text: 'Temel Oranın Ötesinde',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'Birçok barista klasik 2:1:1 kuralını (2 kısım spirt, 1 kısım asitli, 1 kısım tatlı) öğrenir ve bunu evrensel gerçek olarak ele alır. Ancak <strong>kimya çok daha nüanslıdır</strong>. Sicilya\'dan bir limon Meksika\'dan bir limondan farklı asitlik içerir. Cointreau gibi bir triple sec, mavi Curaçao\'dan köklü olarak farklı davranır. Aynı tarif bir hafta mükemmel dengeli ve sonraki hafta, sadece mevsimsel meyve değişimi nedeniyle insanlık dışı asitli olabilir.'
  },
  {
    type: 'paragraph',
    html: 'Bu dengeleyici bu naif engelleri kırıyor. Belirli malzemeleri girerek, asitlik ve tatllık vektörlerini dinamik olarak ayarlayarak kreasyonunuzun kesin bir duyusal haritasını sunacak yaşayan bir veri tabanına başvurursunuz. Tahminde bulunmayı bırakın ve koktaillerinizi dünya sınıfı mekanlarındaki barıştaların her serviste kullandıkları bilimsel titizlikle tasarlamaya başlayın.'
  },
  {
    type: 'summary',
    title: 'Bu araç kimin için?',
    items: [
      'Profesyonel Barista: Tarifler standartlaştırın ve tekrarlanabilir tutarlılıkla imza menüleri oluşturun.',
      'Ev Meraklıları: Tahminde bulunmayı bırakın ve koktaillerinizin başarılı veya başarısız olmasının nedenini anlamaya başlayın.',
      'İçecek Geliştirici: Pahalı üretim çalışmalarından önce yeni tat kavramlarını hızlı bir şekilde prototipte çıkartın.'
    ]
  },
  {
    type: 'diagnostic',
    title: 'Altın Bölge',
    icon: 'mdi:star',
    variant: 'success',
    badge: 'Hedef',
    html: 'Bu nihai hedef: şekerin asitliğin saldırganlığını nötrleştirdiği kontrollü bir pH, taban spiritinin temel yağlarını ve aromatik bileşikleri maskelemeden. Bu kesin denge - Daiquiri, Margarita, Sidecar - tat kimyasının temel yasalarına uyduğu için on yıllara dayanmış içecekler yaşadığı yerdir.'
  },
  {
    type: 'tip',
    title: 'Uzman İpucu: Her Zaman Taze Sitrus Kullanın',
    html: 'Her zaman sitrusu son anda sıkın. Limon ve limonata suyu hızla oksidize olur, sıkıldıktan 20-30 dakika içinde canlı asitliği kaybeder. Gerçekten taze suyla yapılan bir koktail, her zaman tat alma yüzeyinde hiçbir şişeleştirilmiş ürünün çoğalttığı parlaklık ve canlılığa sahip olacaktır. Suyun verimini en üst düzeye çıkarmak için oda sıcaklığındaki meyveni kullanın.'
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
  bibliography,
  howTo,
  schemas,
};
