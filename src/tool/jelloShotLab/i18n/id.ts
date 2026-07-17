import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { JelloShotLabUI, JelloShotLabLocaleContent } from '../entry';

const slug = 'kalkulator-jello-shot';
const title = 'Kalkulator Jello Shot: Kalkulator Rasio Alkohol dan Gelatin yang Sempurna';
const description = 'Hitung dengan tepat berapa banyak minuman keras dan gelatin yang dibutuhkan untuk jello shot yang benar-benar mengeras. Hindari kegagalan yang encer atau kenyal dengan rasio berbasis sains untuk setiap kekuatan alkohol.';

const ui: JelloShotLabUI = {
  title: 'Kalkulator Jello Shot',
  description: 'Dapatkan rasio gelatin, air, dan alkohol yang sempurna agar shot Anda mengeras setiap saat.',
  liquorBaseLabel: 'Jenis Minuman Keras',
  liquorAbvLabel: 'Kekuatan Alkohol (%)',
  gelatinLabel: 'Jenis Gelatin',
  diluentLabel: 'Basis Air',
  calculateBtn: 'Hitung',
  modePrecision: 'Mode Presisi',
  modeIntensity: 'Kekuatan Shot',
  modeIntensityLight: 'Ringan (Mudah)',
  modeIntensityBalanced: 'Standar',
  modeIntensityLimit: 'Maksimum (Kuat)',
  partyPlannerTitle: 'Perencana Pesta',
  partyPlannerGuestLabel: 'Tamu',
  partyPlannerShotsPerGuest: 'Shot per orang',
  multiLayerTitle: 'Multi-Lapis',
  howToTitle: 'Cara Membuatnya',
  proTipsTitle: 'Tips Pro',
  resultsTitle: 'Resep Anda',
  totalVolumeLabel: 'Total Volume',
  boilingWaterLabel: 'Air Panas',
  alcoholVolumeLabel: 'Minuman Keras',
  packetsNeededLabel: 'Bungkus Gelatin',
  chillingTimeLabel: 'Waktu Pendinginan',
  unitMm: 'ml',
  unitOz: 'oz',
  unitGrams: 'g',
  unitPackets: 'bungkus',
  modeParty: 'Mode Pesta',
  modeRecipe: 'Mode Resep',
};

const faqTitle = 'Pertanyaan yang Sering Diajukan';

const faq: JelloShotLabLocaleContent['faq'] = [
  {
    question: 'Mengapa alkohol berkadar tinggi mencegah jello shot mengeras?',
    answer: 'Etanol mengganggu ikatan hidrogen yang menjaga struktur protein triple helix gelatin. Ketika minuman keras mencapai sekitar 35% dari total volume, matriks protein tidak dapat membentuk jaringan yang stabil dan shot tetap cair. Semakin tinggi ABV minuman keras, semakin sedikit volume yang bisa ditambahkan sebelum mencapai batas ini.',
  },
  {
    question: 'Berapa rasio alkohol maksimum sebelum jello shot berhenti mengeras?',
    answer: 'Batas aman atas adalah sekitar 30-35% dari total volume cairan sebagai minuman keras murni (pada ABV 40%). Dengan alkohol netral 96%, batas itu turun menjadi sekitar 15-18% dari total volume. Kalkulator kami memperhitungkan ABV minuman keras sehingga Anda tidak pernah melampaui ambang pengerasan.',
  },
  {
    question: 'Apakah penting minuman keras apa yang digunakan - vodka, rum, atau tequila?',
    answer: 'Yang penting adalah ABV, bukan jenis minuman keras. Vodka 40% dan rum 40% berperilaku identik dalam matriks gelatin. Namun, minuman keras dengan kandungan gula lebih tinggi (seperti beberapa rum atau likeur) dapat sedikit meningkatkan tekstur karena gula bersaing dengan etanol untuk ikatan hidrogen dalam jaringan gelatin.',
  },
  {
    question: 'Berapa lama jello shot bertahan di kulkas?',
    answer: 'Jello shot yang dibuat dengan benar bertahan 3-5 hari di kulkas dengan ditutup plastik wrap. Kandungan alkohol yang tinggi bertindak sebagai pengawet alami. Hindari membiarkannya pada suhu ruangan lebih dari 2 jam karena gelatin melunak dan bakteri dapat berkembang biak.',
  },
  {
    question: 'Bisakah saya membuat jello shot lebih keras atau lebih lembut?',
    answer: 'Ya. Gunakan lebih banyak gelatin (atau setengah bungkus ekstra) untuk shot yang lebih keras yang keluar dari cangkir dengan bersih. Gunakan sedikit lebih sedikit untuk tekstur yang lebih lembut dan bergoyang. Jangan pernah mengganti gelatin dengan agar-agar jika Anda ingin tekstur yang meleleh di mulut - agar mengeras lebih keras dan meleleh pada suhu yang lebih tinggi.',
  },
  {
    question: 'Bisakah saya membekukan jello shot untuk mempercepat pendinginan?',
    answer: 'Tidak. Pembekuan merusak jaringan gelatin, menghasilkan tekstur berair dan berbulir saat dicairkan. Selalu dinginkan setidaknya 4 jam. Untuk pesta, buat malam sebelumnya - 8 jam atau lebih memberikan tekstur terbaik.',
  },
];

const howTo: JelloShotLabLocaleContent['howTo'] = [
  { name: 'Pilih minuman keras Anda', text: 'Masukkan ABV minuman keras Anda dan pilih kekuatan shot yang diinginkan. Kalkulator akan menunjukkan jumlah maksimum minuman keras yang dapat ditampung gelatin Anda.' },
  { name: 'Campurkan gelatin', text: 'Tuangkan jumlah air mendidih yang telah dihitung ke dalam mangkuk. Tambahkan bubuk gelatin dan aduk dengan kuat selama 2 menit hingga benar-benar larut. Jangan tambahkan alkohol dulu.' },
  { name: 'Tambahkan minuman keras', text: 'Biarkan campuran gelatin mendingin selama 5-10 menit hingga hangat tetapi tidak panas (di bawah 50°C). Tambahkan minuman keras Anda dan aduk perlahan untuk menghindari gelembung.' },
  { name: 'Tuang dan dinginkan', text: 'Tuang ke dalam cangkir plastik, cetakan silikon, atau gelas shot kecil. Dinginkan setidaknya 4 jam - semalaman adalah yang ideal. Jangan dibekukan.' },
];


const seo: JelloShotLabLocaleContent['seo'] = [
  { type: 'title', text: 'Kimia di Balik Jello Shot yang Sempurna', level: 2 },
  {
    type: 'paragraph',
    html: 'Jello shot bukan sekadar gelatin beraroma dengan alkohol di dalamnya - ini adalah <strong>suspensi koloid yang halus</strong> di mana polimer protein, air, dan etanol bersaing untuk ikatan hidrogen. Salah rasio dan Anda berakhir dengan genangan cairan manis atau cakram kenyal yang memantul dari meja. Benar rasionya dan Anda memiliki shot yang bergoyang sempurna yang meluncur keluar dari cangkir dalam satu gerakan bersih.',
  },
  {
    type: 'stats',
    items: [
      { label: 'Ringan (Mudah)', value: '~30% minuman keras', icon: 'mdi:emoticon-happy-outline' },
      { label: 'Standar', value: '~45% minuman keras', icon: 'mdi:flask-outline' },
      { label: 'Maksimum', value: '~55% minuman keras', icon: 'mdi:fire' },
    ],
    columns: 3,
  },
  {
    type: 'card',
    title: 'Apa itu Kekuatan Bloom?',
    icon: 'mdi:molecule',
    html: 'Bloom mengukur kekuatan pembentukan gel suatu gelatin, biasanya berkisar dari 50 hingga 300 Bloom. Gelatin lembaran dari supermarket biasanya 150-200 Bloom. Bloom yang lebih tinggi berarti gel yang lebih keras dengan jumlah bubuk yang sama, yang berarti dapat mentoleransi sedikit lebih banyak alkohol sebelum gagal mengeras. Bungkus gelatin bubuk standar (7 g) dikalibrasi untuk sekitar 240 ml cairan.',
  },
  {
    type: 'card',
    title: 'Batas Etanol',
    icon: 'mdi:alert-circle-outline',
    html: 'Etanol bersaing dengan air untuk situs ikatan hidrogen pada rantai asam amino kolagen. Ketika etanol menempati terlalu banyak situs tersebut, protein tidak dapat terlipat ke dalam triple helix stabil yang memberi gelatin strukturnya. Batas praktisnya adalah sekitar <strong>1 bagian minuman keras 40% berbanding 1 bagian air</strong> - lebih dari itu, shot Anda tidak akan mengeras berapa pun lamanya Anda menunggu.',
  },
  {
    type: 'tip',
    title: 'Jangan pernah menambahkan alkohol ke gelatin mendidih',
    html: 'Alkohol menguap dengan cepat di atas 78°C. Selalu biarkan gelatin yang sudah larut mendingin hingga di bawah 50°C sebelum menambahkan minuman keras. Satu langkah ini bertanggung jawab atas lebih banyak kegagalan jello shot daripada kesalahan lainnya.',
  },
  { type: 'title', text: 'Mengatasi Kegagalan Umum', level: 2 },
  {
    type: 'proscons',
    title: 'Tanda dan Solusi',
    items: [
      { pro: 'Shot masih cair setelah 4 jam → Terlalu banyak alkohol atau rasio terlampaui. Kurangi volume minuman keras.', con: 'Shot tidak berasa alkohol → Minuman keras ditambahkan saat cairan masih terlalu panas. Biarkan dingin dulu.' },
      { pro: 'Shot terlalu kenyal → Terlalu banyak gelatin. Kurangi setengah bungkus pada percobaan berikutnya.', con: 'Shot keruh → Gelembung udara terperangkap saat pengadukan. Aduk perlahan dan biarkan sebelum dituang.' },
      { pro: 'Shot bertekstur berbutir → Gelatin tidak larut sepenuhnya. Aduk lebih lama dalam air panas.', con: 'Shot tidak mengeras setelah 8 jam → Batas etanol terlampaui. Gunakan lebih sedikit minuman keras atau ABV lebih rendah.' },
    ],
  },
  {
    type: 'summary',
    title: 'Untuk siapa alat ini?',
    items: [
      'Penyelenggara pesta: Hitung dengan tepat berapa bungkus dan berapa banyak minuman keras yang dibutuhkan sebelum membeli.',
      'Bartender: Skala hingga produksi batch besar dengan hasil yang konsisten setiap saat.',
      'Koki rumahan: Hindari kegagalan paling umum - shot yang encer, tekstur kenyal, atau nol rasa alkohol.',
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
