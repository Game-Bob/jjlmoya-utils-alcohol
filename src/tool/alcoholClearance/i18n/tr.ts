import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import type { AlcoholClearanceUI, AlcoholClearanceLocaleContent } from '../index';

const slug = 'alkol-temizleme-hesaplayicisi';
const title = 'Baş Dönmesi ve BAC Hesaplayıcısı: İyileşme Tahmincisi';
const description = 'Widmark formülünü kullanarak Kan Alkol İçeriğini (BAC) hesapla ve 0.0 a ulaşmak için gereken zamanı öğren. Uyku öncesi rehidrasyon planla ve tam iyileşmenin ne zaman olacağını bil.';

const ui: AlcoholClearanceUI = {
  biologicalSexLabel: 'Biyolojik Cinsiyet',
  weightLabel: 'Vücut Ağırlığı',
  kgUnit: 'kg',
  addDrinkLabel: 'İçecek Ekle',
  beerLabel: 'Bira',
  wineLabel: 'Şarap',
  spiritLabel: 'Karışık İçki',
  shotLabel: 'Fincan',
  accumulatedLabel: 'Tüketilen İçecekler',
  emptyListLabel: 'Listeniz boş',
  emptySubLabel: 'Hesaplamak için içecekler seçin.',
  estimatedBacLabel: 'Tahmini BAC',
  bacUnit: 'BAC',
  timeToZeroLabel: '0.0 a ulaşmak için',
  waterAdviceLabel: 'Su (Uyku öncesi)',
  pillAdviceLabel: 'Ek Yiyecekler',
  noneAdvice: 'Gerekli değil',
  hydrationAdvice: 'Öncelik: Rehidrasyon',
  electrolytesAdvice: 'Elektrolitler + Vit. B',
  disclaimerText: 'Bu hesaplayıcı teorik bir tahmindir. Metabolizma ve yiyecek sonucu değiştirebilir. İçip arabaya binme.',
  drinkUnit: 'içecek',
  drinksUnit: 'içecekler'
};

const faqTitle: string = 'Sıkça Sorulan Sorular';
const bibliographyTitle: string = 'Bibliyografi ve Kaynaklar';

const faq: AlcoholClearanceLocaleContent['faq'] = [
  {
    question: 'Standart İçecek Birimi nedir ve her içecekte ne kadar vardır?',
    answer: 'Standart İçecek Birimi yaklaşık 10 gram saf alkol içerir (İngiltere/AB tanımı; ABD\'de 14g). Normal bir bira (330ml %5) yaklaşık 1,3 birim içerir, bir kadeh şarap (150ml %12) yaklaşık 1,4 birim ve bir fincan (40ml %40) yaklaşık 1,3 birim. Neleri içtiğinizin birimlerini bilmek hesaplayıcının sonuçlarını doğru yorumlamak için önemlidir.',
  },
  {
    question: 'Biyolojik cinsiyet neden BAC hesaplamalarını etkiler?',
    answer: 'Biyolojik cinsiyet, ağırlığın bir fraksiyonu olarak toplam vücut suyunu temsil eden Widmark faktörü "r" yi etkiler. Erkeklerin ortalama r değeri 0.68 dir çünkü orantılı olarak daha fazla vücut suyuna sahiptirler. Kadınların ortalama r değeri 0.55 tir çünkü daha yüksek yüzde vücut yağına sahiptirler, bu da daha az alkol tutar. Bu, aynı içecek ve vücut ağırlığı için kadınların daha yüksek BAC a ulaşacağı anlamına gelir.',
  },
  {
    question: 'Kahve, su veya egzersiz alkol eliminasyonunu hızlandırabilir mi?',
    answer: 'Hayır. Karaciğer alkolu sabit bir oranda yaklaşık 0.15 g/L saatte elimine eder (sıfır dereceli kinetik). Kahve yorgunluğu maskeleyebilir, su dehidrasyona yardımcı olur ve egzersiz genel iyilik sağlar, ancak hiçbiri gerçek BAC\'ınızı azaltmaz. Sadece zaman alkolu kandan elimine eder.',
  },
  {
    question: 'İçtikten sonra yemek yemek BAC ı düşürmeye yardımcı olur mu?',
    answer: 'İçtikten sonra yemek, zaten kan akışınızda olan alkolu azaltmaz. Yiyecek büyük fark yarattığı yer, içmeden önce veya sırasıdır: midenin içindeki yiyecek, özellikle proteinler ve yağlar, gastrik emilimi yavaşlatır ve zirve BAC\'ınızı yüzde 50 e kadar azaltabilir. Alkol emilendikten sonra, sadece hepatik metabolizma onu elimine edebilir.',
  },
  {
    question: '0.0 BAC a ulaşmak ne kadar sürer?',
    answer: 'Başlangıç BAC\'ınıza bağlıdır. Tahmini BAC\'ınızı (g/L cinsinden) 0.15 e bölerek yaklaşık saatleri alın. Örneğin, 1.5 g/L BAC yaklaşık 10 saat alır. Karaciğer hiç durmaz: uyurken bile alkol işler. Ancak dikkat edin, hissettikten sonra bile alkol kan akışınızda bulunabilir tamamen iyileşmiş olduğunuzu.'
  },
  {
    question: 'Bu hesaplayıcı araç veya olaylarından sorumluluktusu için yüzde 100 güvenilir midir?',
    answer: 'Hayır. Bu araç Widmark formülüne dayalı teorik bir tahmindir. Yiyecek alımı, ilaçlar, yorgunluk, genetik ADH enzim varyantları ve stres gibi faktörler gerçek BAC\'ınızı her iki yönde yüzde 20-30 oranında kaydırebilir. Araba kullanıp kullanamazsınız karar vermek için bu hesaplayıcıyı asla kullanmayın. İçtiyseniz, araba kullanmayın, bu sıfır hata payı ile tek kuraldır.',
  },
];

const bibliography: AlcoholClearanceLocaleContent['bibliography'] = [
  {
    name: 'Alkol hesaplamaları ve belirsizliği - PMC',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4361698/',
  },
  {
    name: 'Alkol Metabolizması: Vücudun alkoli nasıl işler - NIH',
    url: 'https://www.niaaa.nih.gov/publications/alcohol-metabolism',
  },
];

const howTo: AlcoholClearanceLocaleContent['howTo'] = [
  {
    name: 'Profilinizi kurun',
    text: 'Biyolojik cinsiyetinizi (vücut su yüzdesini etkiler) ve mevcut ağırlığınızı seçin.',
  },
  {
    name: 'Tüketilen içecekleri ekleyin',
    text: 'İçecek türü ve sayısını girin. Hesaplayıcı tüketilen saf alkol tahmin etmek için standart birimi kullanır.',
  },
  {
    name: 'Sonuçları yorumlayın',
    text: 'Tahmini BAC ve 0.0 a ulaşmak için gereken zamanı okuyun. Unutmayın: kahve ve egzersiz eliminasyonu hızlandırmaz.',
  },
];

const seo: AlcoholClearanceLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'BAC ve Alkol Eliminasyonunun Ardında Bilim',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'Vücut alkolu sabit bir hızda metabolize eder: saatte yaklaşık 0.15 gram litre başına. Bu işleme sıfır dereceli kinetik denir, deneyiminiz ne kadar fazla olursa olsun, ne kadar supplement alsanız da, ne kadar kahve içseniz de önemli değil. Sadece zaman ve karaciğer alkolu kandan elimine eder. Bu hesaplayıcı Widmark formülünü kullanır, bu adli laboratuar ve toksikolojinin altın standardıdır.'
  },
  {
    type: 'title',
    text: 'Biyolojik Cinsiyet Alkol Metabolizmasında Sayılır',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'Erkekler ve kadınlar arasındaki BAC farkı bir mitos değildir: bu biyolojidir. Kadınlar daha yüksek bir vücut yağı yüzdesine ve daha düşük bir vücut su yüzdesine sahiptir, bu da alkol daha küçük bir hacme dağıldığı ve daha yüksek konsantrasyonlara ulaştığı anlamına gelir. Ek olarak, kadınlar genellikle midemde daha düşük alkol dehidrogenaz enzim aktivitesine sahiptirler, bu da daha hızlı emilime yol açar.'
  },
  {
    type: 'title',
    text: 'Dünya Çapında Standart İçecek Birimleri',
    level: 2
  },
  {
    type: 'stats',
    items: [
      { label: 'Bira (5%)', value: '1,3 birim', icon: 'mdi:beer' },
      { label: 'Şarap (12%)', value: '1,4 birim', icon: 'mdi:glass-cocktail' },
      { label: 'Likör (40%)', value: '1,3 birim', icon: 'mdi:bottle-wine' }
    ],
    columns: 3
  },
  {
    type: 'card',
    title: 'BAC i Azaltmayan Nedir',
    icon: 'mdi:close-circle',
    html: "Kahve yorgunluğu maskeleyebilir ancak BAC\'ı azaltmaz. Egzersiz iyilik hissini artırır ancak eliminasyonu hızlandırmaz. Su içtikten sonra dehidrasyona yardımcı olur ancak kandaki alkol metabolik işlemleme kadar kalır. Yemek alkol emildikten sonra yardımcı değildir. İşe yarayan tek şey zamandır."
  },
  {
    type: 'tip',
    title: 'İpucu: içmeden ÖNCE yemek önemlidir',
    html: 'İçtikten sonra yemeğin aksine, içmeden önce veya sırasında yemek aslında zirve BAC \'nizi yüzde 50 e kadar azaltır. Anahtar midenin içindeki yiyecektir, gastrik emilimi yavaşlatır. Yağ ve proteine zengin yiyecekler en etkilidir. Yani evet, içmeden önce yiyin, ancak akşam yemeğine yapılan BAC\'ı yükseltilmek için güvenmeyin.'
  }
];

const schemas: AlcoholClearanceLocaleContent['schemas'] = [
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

export const content: AlcoholClearanceLocaleContent = {
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
