import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import type { FortifiedWineBuilderUI, FortifiedWineBuilderLocaleContent } from '../index';

const slug = 'fortifiye-sarap-hesaplayici';
const title = 'Fortifiye Şarap & Vermut Oluşturucu: Pearson Karesi Hesaplayıcı';
const description = 'Hedef alkol oranına ulaşmak için şarabınıza ne kadar ispirto eklemeniz gerektiğini tam olarak hesaplayın. Pearson Karesi yöntemiyle mükemmel vermut, porto ve sherry yapın.';

const ui: FortifiedWineBuilderUI = {
  intentionTitle: 'Ne yapıyorsunuz?',
  intentionVermouth: 'Vermut',
  intentionPort: 'Porto',
  intentionSherry: 'Sherry',
  intentionCustom: 'Özel',
  modeALabel: 'Elimdeki şaraptan',
  modeBLabel: 'Hedef son hacim',
  wineSection: 'Baz Şarap',
  wineVolumeLabel: 'Şarap hacmi (L)',
  wineAbvLabel: 'Şarap alkol oranı (%)',
  spiritSection: 'Fortifikasyon İspirti',
  spiritAbvLabel: 'İspirto alkol oranı (%)',
  brandyPreset: 'Brendi (38°)',
  neutralPreset: 'Nötr (96°)',
  aguardientePreset: 'Aguardiente (42°)',
  targetAbvLabel: 'Hedef alkol oranı (%)',
  targetVolumeLabel: 'Hedef toplam hacim (L)',
  resultsTitle: 'Tarifiniz',
  addLabel: 'Ekle',
  finalVolumeLabel: 'Son hacim',
  bottlesSection: 'Gereken şişeler',
  copyBtn: 'Tarifi Kopyala',
  copiedBtn: 'Kopyalandı!',
  pearsonTitle: 'Pearson Karesi',
  wineCornerLabel: 'Şarap',
  spiritCornerLabel: 'İspirto',
  emptyState: 'Pearson Karesini görmek için değerlerinizi girin',
  errorAbv: 'İspirito alkol oranı hedef orandan yüksek, hedef oran da şarap alkol oranından yüksek olmalıdır.',
  errorMode: 'Hesaplamak için geçerli bir hacim girin.',
};

const faqTitle = 'Sıkça Sorulan Sorular';
const bibliographyTitle = 'Kaynakça';

const faq: FortifiedWineBuilderLocaleContent['faq'] = [
  {
    question: 'Pearson Karesi yöntemi nedir?',
    answer: 'Pearson Karesi, şarap yapımında harmanlama oranlarını hesaplamak için kullanılan basit bir grafik yöntemdir. Hedef alkol oranı karenin ortasına, şarap alkol oranı sol üst köşeye, ispirto alkol oranı ise sol alt köşeye yerleştirilir. Çapraz farklılıklar, her sıvının gerekli orantılı miktarlarını verir.',
  },
  {
    question: 'Vermutun tipik alkol oranı nedir?',
    answer: 'Geleneksel vermutun alkol oranı %15 ile %18 arasındadır. Kuru (Fransız tarzı) vermut genellikle alt aralıkta (%15–16) yer alırken, tatlı (İtalyan tarzı) vermut çoğunlukla %16–18 civarındadır. Rosé vermut ise ikisi arasında yer alır.',
  },
  {
    question: 'Vermut için hangi baz şarabı kullanmalıyım?',
    answer: 'Geleneksel olarak %10–12 alkollü nötr, kuru bir beyaz şarap en iyi sonucu verir. Şarap temel yapıyı oluşturur, ancak bitkisel malzemeler ve otlarla aromalandırılacağından pahalı bir şaraba gerek yoktur — temiz ve asitli bir baz idealdir.',
  },
  {
    question: 'Brendi yerine nötr alkol kullanabilir miyim?',
    answer: 'Evet. Nötr alkol (%96) maksimum kontrol ve daha temiz bir lezzet profili sağlar. Brendi kendi karakterini (meşe, kuru meyve, vanilya) katar; bu da stile bağlı olarak istenebilir ya da istenilmeyebilir. Porto geleneksel olarak üzüm brendisi kullanırken bazı vermutlar nötr alkol kullanır.',
  },
  {
    question: 'Fortifikasyon şarabı nasıl korur?',
    answer: 'Şarabın alkol oranı yaklaşık %15–16\'yı geçtiğinde maya fermantasyonu engellenir — mayalar yüksek alkollü ortamlarda yaşayamaz. Bu nedenle fortifiye şarapların normal şaraplara kıyasla çok daha uzun raf ömrü vardır. Alkol hem maya hem de bakteri bozulmasına karşı doğal bir koruyucu olarak işlev görür.',
  },
];

const howTo: FortifiedWineBuilderLocaleContent['howTo'] = [
  { name: 'Stili seçin', text: 'Önerilen hedef alkol oranı aralığını otomatik doldurmak için Vermut, Porto, Sherry veya Özel\'i seçin.' },
  { name: 'Şarap verilerini girin', text: 'Baz şarabınızın hacmini (veya Mod B\'de hedef son hacmi) ve mevcut alkol oranını girin.' },
  { name: 'İspirti ayarlayın', text: 'Bir ispirto ön ayarı seçin veya özel bir alkol oranı girin. Pearson Karesi gerçek zamanlı olarak güncellenir.' },
  { name: 'Tarifinizi okuyun', text: 'Hesaplayıcı, eklenecek ispirtonun tam mililitre miktarını ve son hacmi gösterir.' },
];

const bibliography: FortifiedWineBuilderLocaleContent['bibliography'] = [
  { name: 'Jackisch, P. — Modern Şarap Yapımı (Cornell University Press)', url: 'https://www.cornellpress.cornell.edu/book/9780801493355/modern-winemaking/' },
  { name: 'Goode, J. — Şarap Bilimi (University of California Press)', url: 'https://www.ucpress.edu/book/9780520276895/the-science-of-wine' },
  { name: 'Pearson Karesi — University of California ANR', url: 'https://ucanr.edu/sites/wineserver/files/24612.pdf' },
];

const seo: FortifiedWineBuilderLocaleContent['seo'] = [
  { type: 'title', text: 'Pearson Karesi: Kadim Matematik, Mükemmel Şarap', level: 2 },
  { type: 'paragraph', html: '<strong>Pearson Karesi</strong>, şarap matematiğinin en eski ve en zarif araçlarından biridir. 19. yüzyılda geliştirilen bu yöntem, profesyonel ya da amatör her şarap üreticisinin yalnızca çıkarma işlemiyle harmanlama oranlarını hesaplamasını sağlar. Aracımız bu görsel yöntemi dijitalleştirerek gerçek zamanlı geri bildirim ekler; böylece hesaplama için daha az, üretim için daha fazla zaman harcarsınız.' },
  { type: 'stats', items: [{ label: 'Vermut', value: '%15–18', icon: 'mdi:glass-cocktail' }, { label: 'Porto', value: '%18–20', icon: 'mdi:bottle-wine' }, { label: 'Sherry', value: '%15–17', icon: 'mdi:cup-water' }], columns: 3 },
  { type: 'card', title: 'Neden %18\'de fortifiye edilir?', icon: 'mdi:shield-check', html: 'Yaklaşık %15\'in üzerinde, <em>Saccharomyces cerevisiae</em> — birincil şarap mayası — inhibe olmaya başlar. %18\'e ulaşıldığında fermantasyon tamamen durur. Porto\'nun artık şeker içermesinin nedeni budur: ispirto fermantasyonun ortasında eklenerek tüm şeker tüketilmeden maya öldürülür.' },
  { type: 'tip', title: 'Pro İpucu: 20 °C\'de Ölçün', html: 'Alkolün yoğunluğu sıcaklıkla değişir. Resmi alkol ölçümleri 20 °C\'de kalibre edilmiştir. İspiritiniz veya şarabınız önemli ölçüde daha sıcak veya daha soğuksa bir düzeltme faktörü uygulayın: 20 °C\'nin altında her derece için yaklaşık +0,04 % ve üzerinde her derece için −0,04 %.' },
  { type: 'title', text: 'Zanaatkâr Vermut Rönesansı', level: 2 },
  { type: 'paragraph', html: 'Güney Avrupa bir zanaatkâr vermut rönesansı yaşıyor. Barselona, Valensiya ve San Sebastián, <em>la hora del vermut\'u</em> kültürel bir kurum olarak yeniden benimsedi; İspanya, İtalya ve Fransa\'daki küçük üreticiler olağanüstü ifadeler şişeliyor. Bu durum, hırslarına uygun teknik araçlar isteyen yeni nesil ev üreticilerini ortaya çıkardı.' },
  { type: 'summary', title: 'Bu araç kime yönelik?', items: ['Ev şarap üreticileri: Hasatınızı tahmin yerine hassasiyetle fortifiye edin.', 'Zanaatkâr vermut üreticileri: Tam partilere ölçeklendirmeden önce yeni alkol hedeflerini prototiplandırın.', 'Spirits eğitimcileri: Pearson Karesi yöntemini atölyelerde görsel olarak gösterin.'] },
];

const schemas: FortifiedWineBuilderLocaleContent['schemas'] = [
  { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) } as WithContext<FAQPage>,
  { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((step, i) => ({ '@type': 'HowToStep', position: i + 1, name: step.name, text: step.text })) } as WithContext<HowTo>,
  { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'UtilityApplication', operatingSystem: 'Web', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' } } as WithContext<SoftwareApplication>,
];

export const content: FortifiedWineBuilderLocaleContent = { slug, title, description, ui, seo, faqTitle, faq, bibliographyTitle, bibliography, howTo, schemas };
