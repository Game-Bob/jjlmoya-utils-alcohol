import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import type { AlcoholClearanceUI, AlcoholClearanceLocaleContent } from '../index';

const slug = 'kalkulator-pembersihan-alkohol';
const title = 'Kalkulator Mabuk & BAC: Prediksi Pemulihan';
const description = 'Hitung Konten Alkohol dalam Darah (BAC) dan waktu untuk mencapai 0.0 menggunakan rumus Widmark. Rencanakan hidrasi sebelum tidur dan ketahui kapan Anda akan pulih sepenuhnya.';

const ui: AlcoholClearanceUI = {
  biologicalSexLabel: 'Jenis Kelamin Biologis',
  weightLabel: 'Berat Badan',
  kgUnit: 'kg',
  addDrinkLabel: 'Tambah Minuman',
  beerLabel: 'Bir',
  wineLabel: 'Wine',
  spiritLabel: 'Minuman Campuran',
  shotLabel: 'Shot',
  accumulatedLabel: 'Minuman yang Dikonsumsi',
  emptyListLabel: 'Daftar Anda kosong',
  emptySubLabel: 'Pilih minuman untuk menghitung.',
  estimatedBacLabel: 'BAC Estimasi',
  bacUnit: 'BAC',
  timeToZeroLabel: 'untuk mencapai 0.0',
  waterAdviceLabel: 'Air (Sebelum tidur)',
  pillAdviceLabel: 'Suplemen',
  noneAdvice: 'Tidak diperlukan',
  hydrationAdvice: 'Prioritas: Hidrasi',
  electrolytesAdvice: 'Elektrolit + Vit. B',
  disclaimerText: 'Kalkulator ini adalah estimasi teoritis. Metabolisme dan makanan dapat mempengaruhi hasil. Jangan minum dan berkendara.',
  drinkUnit: 'minuman',
  drinksUnit: 'minuman'
};

const faqTitle = 'Pertanyaan yang Sering Diajukan';
const bibliographyTitle = 'Bibliografi & Sumber';

const faq: AlcoholClearanceLocaleContent['faq'] = [
  {
    question: "Apa itu Unit Minuman Standar dan berapa banyak dalam setiap minuman?",
    answer: "Satu Unit Minuman Standar mengandung sekitar 10 gram alkohol murni (definisi UK/EU; 14g di AS). Satu bir biasa (330ml pada 5%) mengandung ~1,3 unit, segelas wine (150ml pada 12%) ~1,4 unit, dan satu shot (40ml pada 40%) ~1,3 unit. Mengetahui unit dalam apa yang Anda minum sangat penting untuk menafsirkan hasil kalkulator dengan benar.",
  },
  {
    question: "Mengapa jenis kelamin biologis mempengaruhi perhitungan BAC?",
    answer: "Jenis kelamin biologis mempengaruhi faktor Widmark 'r', yang mewakili total air tubuh sebagai fraksi berat badan. Pria rata-rata memiliki r=0,68 karena mereka memiliki proporsi air tubuh yang lebih banyak. Wanita rata-rata r=0,55 karena persentase lemak tubuh yang lebih tinggi, yang menahan lebih sedikit alkohol. Ini berarti bahwa untuk minuman dan berat badan yang sama, wanita akan mencapai BAC yang lebih tinggi.",
  },
  {
    question: "Bisakah kopi, air, atau olahraga mempercepat eliminasi alkohol?",
    answer: "Tidak. Hati mengeliminasi alkohol dengan laju konstan sekitar 0,15 g/L per jam (kinetika orde nol). Kopi dapat menutupi kelelahan, air membantu dehidrasi, dan olahraga meningkatkan kesejahteraan umum — tetapi tidak satupun dari mereka mengurangi BAC aktual Anda. Hanya waktu yang mengeliminasi alkohol dari darah.",
  },
  {
    question: "Apakah makan setelah minum membantu menurunkan BAC?",
    answer: "Makan setelah minum tidak mengurangi alkohol yang sudah ada di aliran darah Anda. Tempat makanan membuat perbedaan besar adalah sebelum atau selama minum: makanan di perut — terutama protein dan lemak — memperlambat penyerapan gastrik dan dapat mengurangi BAC puncak Anda hingga 50%. Setelah alkohol diserap, hanya metabolisme hepatik yang dapat mengeliminasinya.",
  },
  {
    question: "Berapa lama waktu untuk mencapai BAC 0,0?",
    answer: "Tergantung pada BAC awal Anda. Bagi BAC estimasi Anda (dalam g/L) dengan 0,15 untuk mendapatkan jam perkiraan. Misalnya, BAC 1,5 g/L membutuhkan sekitar 10 jam. Hati tidak pernah berhenti: ia memproses alkohol bahkan saat Anda tidur. Tetapi perhatikan — alkohol masih bisa ada dalam darah Anda bahkan ketika Anda merasa sepenuhnya pulih.",
  },
  {
    question: "Apakah kalkulator ini 100% andal untuk menentukan apakah harus berkendara?",
    answer: "Tidak. Alat ini adalah estimasi teoritis berdasarkan rumus Widmark. Faktor-faktor seperti asupan makanan, obat-obatan, kelelahan, varian enzim ADH genetik, dan stres dapat menggeser BAC aktual Anda sebesar 20–30% di kedua arah. Jangan pernah gunakan kalkulator ini untuk menentukan apakah harus berkendara. Jika Anda telah minum, jangan berkendara — itulah satu-satunya aturan tanpa toleransi kesalahan.",
  },
];

const bibliography: AlcoholClearanceLocaleContent['bibliography'] = [
  {
    name: "Perhitungan alkohol dan ketidakpastiannya - PMC",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4361698/",
  },
  {
    name: "Metabolisme Alkohol: Bagaimana tubuh memproses alkohol - NIH",
    url: "https://www.niaaa.nih.gov/publications/alcohol-metabolism",
  },
];

const howTo: AlcoholClearanceLocaleContent['howTo'] = [
  {
    name: "Atur profil Anda",
    text: "Pilih jenis kelamin biologis Anda (mempengaruhi persentase air tubuh) dan berat badan Anda saat ini.",
  },
  {
    name: "Tambahkan minuman yang dikonsumsi",
    text: "Klik pada ikon minuman yang telah Anda konsumsi. Mereka akan terkumpul di daftar di bawah.",
  },
  {
    name: "Periksa waktu keamanan",
    text: "Amati BAC yang diestimasi dan, yang paling penting, waktu yang diperlukan hati untuk memproses semua etanol yang dicerna.",
  },
];

const seo: AlcoholClearanceLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Metabolisme Alkohol: Sains dan Eliminasi',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'Memahami bagaimana tubuh kita memproses etanol sangat penting untuk keselamatan dan untuk mengurangi mabuk. <strong>Kalkulator eliminasi alkohol</strong> kami menggunakan <strong>Rumus Widmark</strong> yang diakui untuk memberikan Anda peta jelas tentang keadaan metabolik Anda. Alkohol tidak dieliminasi dengan berkeringat, minum air, atau berolahraga — hanya waktu dan metabolisme hepatik yang dapat mengurangi konsentrasi alkohol dalam darah Anda.'
  },
  {
    type: 'diagnostic',
    title: 'Farmakokinetika BAC',
    icon: 'mdi:gender-male-female',
    variant: 'info',
    badge: 'Biokimia',
    html: 'Alkohol terdistribusi melalui air tubuh. Faktor-faktor seperti berat badan dan koefisien Widmark r (0,68 pada pria / 0,55 pada wanita) menentukan pengenceran etanol awal dalam aliran darah. Ini mengapa dua orang dengan berat badan sama dapat memiliki pembacaan BAC yang sangat berbeda setelah mengonsumsi minuman yang sama.'
  },
  {
    type: 'title',
    text: 'Oksidasi Hepatik dan Enzim',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'Hati menguraikan 95% alkohol melalui Alkohol Dehidrogenase (ADH). Proses ini terjadi dengan laju konstan (kinetika orde nol), yang berarti tidak dapat dipercepat dengan olahraga atau kopi. 5% sisanya dieliminasi melalui napas, urin, dan keringat — yang merupakan dasar untuk pengujian napas dalam penegakan lalu lintas.'
  },
  {
    type: 'stats',
    items: [
      { label: 'Laju Eliminasi', value: '0,15 g/L·j', icon: 'mdi:clock-fast' },
      { label: 'Penyerapan Gastrik', value: '20% Etanol', icon: 'mdi:stomach' },
      { label: 'Hidrasi yang Disarankan', value: '1:1 Air/Minuman', icon: 'mdi:water' }
    ],
    columns: 3
  },
  {
    type: 'proscons',
    title: 'Mitos vs Realitas',
    items: [
      { pro: 'Air dan elektrolit sebelum tidur mengurangi keparahan mabuk dengan mengatasi diuresis.', con: '' },
      { pro: '', con: 'Mandi air dingin: Mereka tidak mempengaruhi konsentrasi alkohol dalam darah sama sekali.' },
      { pro: '', con: 'Kopi: Menutupi kantuk tetapi tidak memulihkan refleks yang hilang atau fungsi kognitif.' }
    ]
  },
  {
    type: 'card',
    title: 'Apa Penyebab Mabuk?',
    icon: 'mdi:alert-decagram',
    html: 'Dikenal secara ilmiah sebagai veisalgia, mabuk disebabkan oleh dehidrasi sistemik (penindasan vasopresin oleh etanol), akumulasi asetaldehid (metabolit beracun), dan respons kekebalan inflamasi sitokin. Rebound glutamat otak setelah penindasan alkohol juga berkontribusi pada kecemasan dan sensitivitas terhadap cahaya dan suara keesokan paginya.'
  },
  {
    type: 'tip',
    title: 'Keselamatan Pertama: Ketahui Batas Anda',
    html: 'BAC 0,05% secara terukur mengganggu penilaian, pelacakan, dan waktu reaksi. Kebanyakan negara menetapkan batas berkendara hukum antara 0,05% dan 0,08%. Namun, sensitivitas individu bervariasi secara signifikan — usia, obat-obatan, kelelahan, dan varian enzim ADH genetik semuanya mengubah bagaimana alkohol mempengaruhi Anda secara pribadi. Jika ragu, jangan berkendara.'
  },
  {
    type: 'title',
    text: 'Peran Makanan dan Laju Penyerapan',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'Makan sebelum atau selama minum secara dramatis mengubah kinetika penyerapan alkohol. Makanan di perut — terutama protein dan lemak — memperlambat pengosongan gastrik, mengurangi laju puncak di mana etanol memasuki aliran darah. Seseorang yang minum dengan perut kosong dapat mencapai BAC puncak 50% lebih tinggi daripada orang yang sama yang makan makanan lengkap sebelum minum jumlah yang sama. Ini adalah salah satu variabel paling kuat yang tidak dapat sepenuhnya ditangkap oleh rumus Widmark, itulah sebabnya kalkulator kami menyertakan penafian tentang estimasi teoritis.'
  },
  {
    type: 'paragraph',
    html: 'Jenis minuman beralkohol juga penting di luar hanya ABV dan volume. Mixer berkarbonasi (air tonik, wine bersoda) mempercepat pengosongan gastrik dan mendorong alkohol ke aliran darah lebih cepat. Minuman dengan ABV sangat tinggi (>25%) dapat sementara menghambat motilitas lambung, memperlambat penyerapan. Minuman manis dapat menutupi efek alkohol yang dirasakan, membuat orang minum lebih cepat dari yang mereka sadari. Nuansa ini mengapa BAC dunia nyata dapat menyimpang dari prediksi model sebesar 20-30% di kedua arah.'
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
    applicationCategory: 'HealthApplication',
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
