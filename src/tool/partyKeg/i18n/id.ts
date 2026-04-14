import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import type { PartyKegUI, PartyKegLocaleContent } from '../index';

const slug = 'kalkulator-bier-es-pesta';
const title = 'Kalkulator Bir Pesta: Jumlah Per Orang untuk Pernikahan & Ulang Tahun';
const description = 'Alat gratis untuk menghitung berapa banyak bir dan es yang Anda butuhkan berdasarkan tamu, durasi, dan suhu. Sempurna untuk pernikahan, ulang tahun, dan acara outdoor.';

const ui: PartyKegUI = {
  calcStockTitle: 'Kalkulator Stok',
  beerIceSub: 'Bir & Es untuk Acara',
  guestsLabel: 'Tamu',
  durationLabel: 'Durasi',
  hoursUnit: 'Jam',
  intensityLabel: 'Intensitas',
  chillLabel: 'Santai',
  standardLabel: 'Standar',
  partyLabel: 'Pesta',
  tempLabel: 'Suhu',
  estimatedVolLabel: 'Volume Perkiraan',
  kegsLabel: 'Tong',
  iceRequiredLabel: 'Es Dibutuhkan',
  bagsLabel: 'Kantong',
  visualizationTitle: 'Visualisasi Stok',
  optimalMsg: 'Kondisi Optimal',
  highMeltMsg: 'Pencairan Tinggi Terdeteksi',
  highEfficiencyMsg: 'Dingin / Efisiensi Tinggi'
};

const faqTitle = 'Pertanyaan yang Sering Diajukan';
const bibliographyTitle = 'Bibliografi & Sumber';

const faq: PartyKegLocaleContent['faq'] = [
  {
    question: "Berapa banyak bir yang diminum satu orang dalam 4 jam?",
    answer: "Rata-rata, hitung 5 bir per orang untuk acara 4 jam. Ini mengasumsikan 2 minuman di jam pertama dan 1 untuk setiap jam yang tersisa.",
  },
  {
    question: "Berapa banyak es yang saya butuhkan untuk 100 bir?",
    answer: "Anda memerlukan sekitar 15–20 kilogram es (7–10 kantong). Aturan praktis adalah 0,75 kg es per liter minuman dalam kondisi normal. Di musim panas atau di luar ruangan di atas 25°C, naikkan menjadi 1 kg per liter: panas lingkungan mempercepat pencairan dan Anda akan kehabisan es jauh lebih cepat dari yang diharapkan.",
  },
  {
    question: "Apa perbedaan antara tong standar dan tong pesta?",
    answer: "Tong komersial standar menampung 50 liter, yang menghasilkan sekitar 200 porsi (250 ml masing-masing). Tong pesta (mini-tong) biasanya menampung 5 liter — sekitar 20 porsi. Mengetahui ukuran ini membantu Anda menerjemahkan output liter kalkulator ke dalam jumlah wadah yang harus dibeli.",
  },
  {
    question: "Mengapa saya membutuhkan begitu banyak es jika birnya sudah dingin?",
    answer: "Karena mendinginkan dan mempertahankan adalah dua proses yang terpisah. Membawa kaleng dari 25°C ke 4°C mengkonsumsi panas laten es: sekitar 334 kJ/kg. Setelah dingin, es terus bekerja untuk mengimbangi panas lingkungan. Di hari musim panas pada 35°C, transfer panas ke dalam pendingin dapat mencairkan 1 kg es per liter minuman setiap 2–3 jam. Itulah mengapa mendinginkan minuman Anda sebelum pesta mengurangi konsumsi es total hingga setengahnya.",
  },
];

const howTo: PartyKegLocaleContent['howTo'] = [
  {
    name: "Perkirakan jumlah tamu",
    text: "Tentukan berapa banyak orang yang akan hadir. Kalkulator kami menyesuaikan jumlah berdasarkan rata-rata konsumsi statistik.",
  },
  {
    name: "Tentukan durasi dan intensitas",
    text: "Tunjukkan berapa jam acara akan berlangsung dan 'aliran' pesta (santai, standar, atau intens).",
  },
  {
    name: "Sesuaikan dengan suhu lingkungan",
    text: "Suhu luar ruangan sangat penting untuk perhitungan es. Semakin panas, semakin tinggi laju pencairan yang harus kami kompensasi.",
  },
];

const bibliography: PartyKegLocaleContent['bibliography'] = [
  {
    name: "Event Planning: Alcohol & Bar Calculations - Spruce Eats",
    url: "https://www.thespruceeats.com/stock-your-bar-for-a-party-760394",
  },
  {
    name: "Thermodynamics of Ice Melting - Engineering Toolbox",
    url: "https://www.engineeringtoolbox.com/saturated-ice-steam-d_970.html",
  },
];

const seo: PartyKegLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Berapa Banyak Bir dan Es yang Saya Butuhkan untuk Pesta Saya?',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'Pertanyaan sejuta dolar saat mengorganisir acara apa pun: <strong>Berapa liter bir yang harus saya beli?</strong> Kekurangan adalah bencana, tetapi membeli berlebihan adalah pengeluaran yang tidak perlu. Alat ini membantu Anda menghitung jumlah alkohol yang tepat dan, yang paling penting, <strong>berapa banyak kantong es</strong> yang Anda butuhkan untuk menjaganya tetap dingin. Para katering profesional dan perencana acara menggunakan model konsumsi statistik — dan sekarang Anda juga bisa, gratis.'
  },
  {
    type: 'title',
    text: 'Formula Konsumsi Per Orang',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'Untuk memperkirakan alkohol yang dibutuhkan, katering profesional menggunakan formula berdasarkan "Tingkat Konsumsi Setiap Jam". Ini bukan ilmu pasti, tetapi statistik menunjukkan bahwa pada pesta standar, sekitar 1,5 unit dikonsumsi per jam per orang. Faktor-faktor seperti suhu lingkungan, ketersediaan makanan, dan energi sosial acara semuanya mengubah angka dasar ini.'
  },
  {
    type: 'stats',
    items: [
      { label: 'Konsumsi Santai', value: '1 minuman/jam', icon: 'mdi:tea-outline' },
      { label: 'Pesta Standar', value: '1,5 minuman/jam', icon: 'mdi:glass-mug-variant' },
      { label: 'Pernikahan / Festival', value: '2,5+ minuman/jam', icon: 'mdi:fire' }
    ],
    columns: 3
  },
  {
    type: 'diagnostic',
    title: 'Fisika Es',
    icon: 'mdi:snowflake-thermometer',
    variant: 'warning',
    badge: 'Termodinamika',
    html: 'Menghitung es adalah tempat sebagian besar tuan rumah gagal. Es melayani dua fungsi: Pendinginan (membawa bir dari 25°C ke 4°C) dan Pemeliharaan (melawan panas lingkungan). Pada suhu di atas 30°C, laju pencairan berlipat ganda. Satu kantong es penuh di bawah sinar matahari langsung dapat hilang dalam waktu kurang dari 20 menit, membuat minuman Anda hangat sebelum pesta mencapai puncaknya.'
  },
  {
    type: 'tip',
    title: 'Tip Profesional untuk Menghemat Es',
    html: 'Simpan tong dan kaleng di tempat yang teduh sebelum menambahkan es. Jika minuman hangat di bawah sinar matahari, 50% dari kantong es pertama Anda akan hilang dalam 10 menit hanya dengan bertukar panas laten. Mulai dengan minuman yang sudah didinginkan sebelumnya untuk secara dramatis mengurangi berapa banyak es yang benar-benar perlu Anda beli.'
  },
  {
    type: 'title',
    text: 'Data Referensi untuk Logistik',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'Tong 50L standar menghasilkan sekitar 200 porsi. Kantong es yang khas beratnya 2 kg. Mengetahui angka-angka ini, Anda dapat merencanakan transportasi dan penyimpanan yang diperlukan untuk acara Anda tanpa kejutan menit terakhir. Pertimbangkan pencairan es selama transportasi — perjalanan 30 menit di musim panas dapat menghabiskan satu kantong penuh sebelum pesta dimulai.'
  },
  {
    type: 'summary',
    title: 'Alat ini untuk siapa?',
    items: [
      'Tuan Rumah Pesta Pribadi: Berhenti menebak dan percaya diri membeli persis apa yang Anda butuhkan untuk perayaan berikutnya.',
      'Perencana Acara: Gunakan model konsumsi yang akurat untuk mengutip klien dan merencanakan logistik bar secara profesional.',
      'Manajer Tempat: Standardisasi perhitungan stok di seluruh acara berulang dengan jumlah tamu yang berbeda.'
    ]
  },
  {
    type: 'paragraph',
    html: 'Satu variabel yang sering diabaikan adalah <strong>tingkat dropout tamu</strong>. Di sebagian besar pesta, 10–15% tamu pergi lebih awal dan 10% mungkin tidak minum sama sekali. Kalkulator menerapkan penyangga konservatif sehingga Anda tidak pernah kekurangan, tetapi juga tidak dibiarkan dengan surplus yang sangat besar. Memahami penyesuaian ini membantu Anda menyempurnakan perkiraan untuk kerumunan dan konteks spesifik Anda. Selalu bulatkan saat membeli, karena mengembalikan tong yang sudah dibuka umumnya tidak memungkinkan. Surplus kecil selalu lebih baik daripada kehabisan minuman di tengah-tengah pesta.'
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
