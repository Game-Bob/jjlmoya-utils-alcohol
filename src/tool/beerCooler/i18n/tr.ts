import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import type { BeerCoolerUI, BeerCoolerLocaleContent } from '../index';

const slug = 'bira-sogutucusu';
const title = 'Newton\'un Soğuma Yasası ile Bira Soğutma Hesaplayıcısı';
const description = 'Gerçek termodinamik ile hesaplayın — Newton\'un Soğuma Yasası — bira\'nızın buzdolabında veya dondurucuda mükemmel servis sıcaklığına ulaşması için gereken zamanı tam olarak bilin.';

const ui: BeerCoolerUI = {
  step1Title: 'Ne soğutuyorsunuz?',
  canLabel: 'Kutu',
  aluminumLabel: 'Alüminyum',
  bottleLabel: 'Şişe',
  glassLabel: 'Cam',
  step2Title: 'Nereye koyuyorsunuz?',
  fridgeLabel: 'Buzdolabı',
  freezerLabel: 'Dondurucu',
  step3Title: 'Sıcaklıkları Hassas Ayarla',
  initialTempLabel: 'Başlangıç Sıcaklığı',
  targetTempLabel: 'Hedef Soğukluk',
  glacialLabel: 'Buzlu',
  perfectLabel: 'Mükemmel',
  bodegaLabel: 'Bodega',
  readyTitle: 'Hazır',
  readyDescription: 'Hesaplamak için konteyner ve konumu seçin.',
  estimatedTimeLabel: 'Tahmini zaman',
  methodLabel: 'Yöntem',
  containerLabel: 'Konteyner',
  alreadyColdLabel: 'Zaten soğuk!',
  neverColdLabel: 'Asla soğuk olmaz'
};

const faqTitle = 'Sıkça Sorulan Sorular';
const bibliographyTitle = 'Bibliyografi & Kaynaklar';

const faq: BeerCoolerLocaleContent['faq'] = [
  {
    question: 'Bu araç soğutma süresini nasıl hesaplar?',
    answer: 'Newton\'un Soğuma Yasasını uygular: T(t) = T_env + (T₀ - T_env) × e^(-kt). Sabit k, konteynerin malzemesine ve soğutma ortamına bağlı olarak değişir. Buzdolabındaki alüminyum kutu, dondurucudaki cam şişeden tamamen farklı bir k değerine sahiptir. Burada kullanılan değerler, her kombinasyon için gerçek deneylerle kalibre edilmiştir.',
  },
  {
    question: 'Islak kağıt havlu ve tuz numarası gerçekten işe yarar mı?',
    answer: 'Evet, oldukça belirgin şekilde. Konteyneri tuzlu ıslak kağıt havluya sarıp soğutmak iki nedenden dolayı soğutmayı hızlandırır: su buharlaşması ek ısıyı uzaklaştırır (buharlaştırma ile soğutma), ve tuz suyun donma noktasını düşürerek ıslak teması daha uzun süre aktif tutar. Dondurucuya kuru bir kutu koymakla karşılaştırıldığında, ilk birkaç dakika içinde ek 2–4°C düşüş elde edebilirsiniz.',
  },
  {
    question: 'Farklı bira stilleri için ideal servis sıcaklığı nedir?',
    answer: 'Bu stile bağlıdır. Lagerler ve Pilsnerler en iyi 3°C ile 7°C arasında servis edilir. IPA\'lar ve Pale Aleler 7°C ila 10°C\'de parlak görünür. Stautlar, Portterler ve karmaşık aleler daha sıcak, 12°C ila 14°C arasında servis edilmelidir, böylece kahve, çikolata ve ceviz gibi aromat bileşikleri kendilerini tam olarak ifade edebilir.',
  },
  {
    question: 'Bira\'mı dondurucuda bırakırsam patlayabilir mi?',
    answer: 'Evet. Alkol ve çözülmüş şekerler, bira\'nın donma noktasını saf suyun altına düşürür: standart % 5 lager yaklaşık -3°C\'de donar. Su kristalleşirken hacim artar ve çözülmüş CO2 konteyneri alıp gittiği noktaya kadar iç basıncı artırır. Dondurucuda 60 dakikadan fazla — özellikle cam şişeler — gerçek bir tehlike bölgesidir. Bunu önlemek için bu hesaplayıcıyı kullanın.',
  },
  {
    question: 'Bira çok hızlı soğutulursa "yanabilir" mi?',
    answer: 'Hayır. Bira\'yı mahveden "ısı şokuğu" mitolojisi yanlıştır. Gerçekten etkileyen şey, tekrarlanan dondurma ve çözünmedir — bu proteinleri parçalar ve sıvıyı bulanıklaştırır — veya doğrudan UV ışığına maruz kalır. Dondurucuda veya buzlu suda hızlı soğutma lezzeti zarar vermez.',
  },
];

const howTo: BeerCoolerLocaleContent['howTo'] = [
  {
    name: 'Konteyneri seçin',
    text: 'Alüminyum kutu ya da cam şişe arasında seçim yapın. Malzeme, ısı transfer hızını çarpıcı şekilde etkiler.',
  },
  {
    name: 'Soğutma yöntemini seçin',
    text: 'Ultra hızlı bir işlem için geleneksel bir buzdolabı (4°C) mi yoksa dondurucu (-18°C) mu kullandığınızı belirtin.',
  },
  {
    name: 'Sıcaklıkları ayarlayın',
    text: 'İçeceğin mevcut sıcaklığını (oda sıcaklığı) ve istediğiniz hedef soğukluk sıcaklığını tanımlayın.',
  },
];

const bibliography: BeerCoolerLocaleContent['bibliography'] = [
  {
    name: 'Newton\'un Soğuma Yasası - Wikipedia',
    url: 'https://en.wikipedia.org/wiki/Newton%27s_law_of_cooling',
  },
  {
    name: 'Bira ve Bira Yapımının Gelişmiş Kimyası - American Chemical Society',
    url: 'https://www.acs.org/acs-webinars/library/advanced-chemistry-of-beer-and-brewing.html',
  },
];

const seo: BeerCoolerLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Soğuğun ve Termodinamiğin Bilimi',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'Neden kutu şişeden önce soğur? Bu sihir mi? Hayır, bu <strong>Newton\'un Soğuma Yasası</strong> harekete geçmiş demektir. Bu araç, içeceğinizin termodinamik mükemmelliğe ulaştığı tam anı matematiksel olarak hesaplar. Her malzeme, her ortam, her başlangıç sıcaklığı, fizyikçilerin ve mühendislerin endüstriyel sistemlerde ısı transferini modellemek için kullandığı aynı diferansiyel denklemi besler.'
  },
  {
    type: 'diagnostic',
    title: 'Ana Formül',
    icon: 'mdi:function-variant',
    variant: 'info',
    badge: 'Fizik',
    html: 'T(t) = T_env + (T_0 - T_env) * e^(-kt). Bu diferansiyel denklem, bir nesnenin sıcaklığının, sıcaklığı ile çevre sıcaklığı arasındaki farka nasıl orantılı olarak değiştiğini açıklar. Sabit k, konteynerin malzemesine ve geometrisine bağlıdır, bu nedenle bir kutu, aynı hacme sahip bir şişeden daha hızlı soğur.'
  },
  {
    type: 'title',
    text: 'Malzeme Savaşı: Alüminyum vs. Cam',
    level: 2
  },
  {
    type: 'paragraph',
    html: '<strong>Alüminyum</strong> ~205 W/(m·K) ısı iletkenliğine sahipken, <strong>cam</strong> neredeyse 0,8 W/(m·K)\'ye ulaşır. Metal soğuğu şiddetle hızlı transfer ederek, acil durumlar için ideal konteyner haline gelir. Ancak, cam, soğuduktan sonra daha iyi yalıtım sağlayarak, tüketim sırasında ideal sıcaklığı daha uzun süre korur. Bu uzlaşma, farklı bira kültürlerinin her malzeme için farklı tercihleri geliştirmesinin nedenini açıklar.'
  },
  {
    type: 'stats',
    items: [
      { label: 'Pilsner & Lager', value: '3°C - 7°C', icon: 'mdi:snowflake' },
      { label: 'IPA & Pale Ale', value: '7°C - 10°C', icon: 'mdi:hops' },
      { label: 'Staut & Porter', value: '12°C - 14°C', icon: 'mdi:beer' }
    ],
    columns: 3
  },
  {
    type: 'card',
    title: 'Dondurucu Tehlike Bölgesi',
    icon: 'mdi:snowflake-alert',
    html: 'Alkol ve çözülmüş şekerler nedeniyle bira 0°C altında donar — standart % 5 lager yaklaşık -3°C\'de donar. Su kristalleşirken hacim artar ve CO2 basıncı aynı anda yükselir. Sonuç, şiddetle patlamış olabilecek bir konteynedir. Bira\'yı dondurucuda 45 dakikadan fazla bırakmayın, kütüphaneden haber ver.'
  },
  {
    type: 'proscons',
    title: 'Acil Soğutma İpuçları',
    items: [
      { pro: 'Islak Havlu Numarası: Kutuyu ıslak kağıt havluya sarıp dondurma — buharlaşma soğutmayı hızlandırır.', con: '' },
      { pro: 'Arktik Tuzlu Su: -5°C tuzlu su elde etmek için bir kovaya su, buz ve 2 yemek kaşığı tuz doldurun.', con: '' },
      { pro: 'Döndürme Yöntemi: Şişeyi buzlu suda döndürerek konveksiyonu zorla ve soğutma süresini kısa tutun.', con: '' },
      { pro: '', con: 'Zamanlayıcı olmadan bir kutuyu dondurucu rafına doğrudan koymayın — patlamış kutular dağınık ve tehlikeli.' }
    ]
  },
  {
    type: 'tip',
    title: 'Pro İpucu: Camı Önceden Soğutun',
    html: 'Bira döktüğünüz cam, kayda değer bir ısıl kütleye sahiptir. Sıcak bir cam, mükemmel soğuk bira\'nın sıcaklığını temas sırasında 2-3°C artırabilir. Dökülmeden 5 dakika önce servis bardağını dondurucu\'ya koyun veya soğuk su ile durulayın. Bu basit adım, bira\'nızın tam olarak tasarlanan şekilde tadına varış penceresini uzatır.'
  },
  {
    type: 'title',
    text: 'Soğutma Sabitini Anlamak',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'Newton denklemindeki soğutma sabiti k, sabit bir evrensel değer değildir — her özel konteynerin ve ortamın ampirik bir özelliğidir. Buzlu suda ince alüminyum kutu, sakin buzdolabı havasında kalın cam şişeden tamamen farklı bir k\'ye sahiptir. Hesap makinemiz, her konteyner türü için gerçek deneylerle kalibre edilen ölçülen değerleri kullanarak, tipik ev soğutma senaryoları için birkaç dakika içinde doğru tahminler sunmaktadır.'
  }
];

const schemas: BeerCoolerLocaleContent['schemas'] = [
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

export const content: BeerCoolerLocaleContent = {
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
