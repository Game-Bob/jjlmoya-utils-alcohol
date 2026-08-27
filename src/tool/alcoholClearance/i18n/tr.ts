import { bibliography } from '../bibliography';
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
    text: 'Alkol Metabolizması: Bilim ve Eliminasyon',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'Vücudumuzun etanolü nasıl işlediğini anlamak güvenlik ve akşamdan kalmalığı hafifletmek için esastır. <strong>Alkol eliminasyon hesaplayıcımız</strong> metabolik durumunuzun net bir haritasını sunmak için tanınmış <strong>Widmark Formülünü</strong> kullanır.'
  },
  {
    type: 'diagnostic',
    title: 'BAC nın Farmakokinetiği',
    icon: 'mdi:gender-male-female',
    variant: 'info',
    badge: 'Biyokimya',
    html: 'Alkol vücut suyuna dağılır. Ağırlık ve r katsayısı (erkeklerde 0.68 / kadınlarda 0.55) etanolün kandaki ilk seyreltmesini belirler.'
  },
  {
    type: 'title',
    text: 'Karaciğer Oksidasyonu ve Enzimler',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'Karaciğer alkolün %95 ini Alkol Dehidrogenaz (ADH) aracılığıyla yıkar. Bu süreç sabit bir hızda gerçekleşir (sıfırıncı derece kinetik).'
  },
  {
    type: 'stats',
    items: [
      { label: 'Eliminasyon Hızı', value: '0.15 g/L·h', icon: 'mdi:clock-fast' },
      { label: 'Mide Emilimi', value: '20% Etanol', icon: 'mdi:stomach' },
      { label: 'Önerilen Hidrasyon', value: '1:1 Su/İçecek', icon: 'mdi:water' }
    ],
    columns: 3
  },
  {
    type: 'proscons',
    title: 'Efsaneler ve Gerçekler',
    items: [
      { pro: 'Uykudan önce su ve elektrolitler akşamdan kalma şiddetini azaltır.', con: '' },
      { pro: '', con: 'Soğuk duşlar: Kandaki alkol konsantrasyonunu hiç etkilemez.' },
      { pro: '', con: 'Kahve: Uykusuzluğu maskeler ancak kaybolan refleksleri geri kazandırmaz.' }
    ]
  },
  {
    type: 'card',
    title: 'Akşamdan Kalmaya Ne Sebep Olur?',
    icon: 'mdi:alert-decagram',
    html: 'Bilimsel olarak veisalgia olarak bilinen akşamdan kalmalık, sistemik dehidrasyon, asetaldehit birikimi ve sitokin bağışıklık yanıtından kaynaklanır.'
  },
  {
    type: 'tip',
    title: 'Önce Güvenlik: Sınırınızı Bilin',
    html: '%0.05 lik bir BAC, muhakeme yeteneğini ve tepki süresini ölçülebilir şekilde bozar. Şüphe duyduğunuzda araba kullanmayın.'
  },
  {
    type: 'title',
    text: 'Yiyeceğin Rolü ve Emilim Hızı',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'İçmeden önce veya sırasında yemek yemek emilim kinetiğini önemli ölçüde değiştirir. Midedeki yiyecek mide boşalmasını yavaşlatır, etanolün kana geçiş hızını ve zirve değerini etkiler. Bu nedenle aynı miktar farklı zamanlarda ve farklı kişilerde aynı sonucu vermez. Hesaplamayı güvenli bir kararın tek temeli olarak kullanmayın. Su içmek kendinizi daha iyi hissettirebilir, ancak alkolün kandan yok olmasını hızlandırmaz. Vücudun alkolü parçalaması için esas olarak zaman gerekir.'
  },
  {
    type: 'paragraph',
    html: 'Alkolün türü de sadece ABV ve hacmin ötesinde önem taşır. Gazlı içecekler mide boşalmasını hızlandırır. Vücut ağırlığı, biyolojik farklılıklar, ilaçlar, uyku ve sağlık durumu da sonucu değiştirebilir. Bu sayfadaki değerler eğitim ve farkındalık içindir; güvenli seçenek içtiyseniz araç kullanmamak, alternatif ulaşım ayarlamak ve gerektiğinde destek istemektir. Yasal sınırlar ve ölçüm koşulları bölgeye göre değişebilir. Şüphe varsa araç kullanmayın ve güvenilir bir ulaşım seçeneği bulun. Ölçüm cihazları da doğru kullanılmalı ve üretici talimatlarına göre saklanmalıdır.'
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
  bibliography,
  howTo,
  schemas,
};
