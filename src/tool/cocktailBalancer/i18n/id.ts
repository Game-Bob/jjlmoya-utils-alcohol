import { bibliography } from '../bibliography';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import type { CocktailBalancerUI, CocktailBalancerLocaleContent } from '../index';

const slug = 'koktail-seimbang';
const title = 'Cocktail Balancer: Hukum Asam';
const description = 'Hitung keseimbangan sempurna antara manis dan asam untuk koktail Anda. Kuasai rasio emas mixologi.';

const ui: CocktailBalancerUI = {
  title: 'Cocktail Balancer',
  presetsBtn: 'Resep',
  saveBtn: 'Simpan',
  resetBtn: 'Setel Ulang',
  emptyStateTitle: 'Meja Kerja Anda Kosong',
  emptyStateDescription: 'Tambahkan bahan untuk menganalisis keseimbangan koktail Anda secara real-time.',
  addBtn: 'Tambah Bahan',
  addMoreBtn: 'Tambah Bahan Lagi',
  flavorProfileTitle: 'Profil Rasa',
  volLabel: 'Volume',
  sugarLabel: 'Gula',
  colorLabel: 'Warna',
  sourLawTitle: 'Hukum Asam',
  acidDryLabel: 'Asam (Kering)',
  balanceLabel: 'Keseimbangan',
  sweetLabel: 'Manis',
  aiSuggestionTitle: 'Saran AI',
  addIngredientTitle: 'Tambah Bahan',
  searchPlaceholder: 'Cari rum, jeruk nipis, sirup...',
  presetsTitle: 'Resep & Preset',
  savedSectionTitle: 'Tersimpan Saya',
  classicsSectionTitle: 'Klasik',
  confirmDeleteTitle: 'Hapus semuanya?',
  confirmDeleteText: 'Ini akan menghapus semua bahan dari meja kerja Anda. Tindakan ini tidak dapat dibatalkan.',
  cancelBtn: 'Batal',
  deleteBtn: 'Hapus',
  verdictSpiritSeco: 'Beralkohol / Kering',
  verdictSoloDulce: 'Hanya Manis (Old Fashioned)',
  verdictMuyAcido: 'Terlalu Asam / Sangat Kering',
  verdictAcido: 'Asam / Tart',
  verdictEquilibrado: 'Seimbang (Asam)',
  verdictDulce: 'Manis / Komersial',
  verdictEmpalagoso: 'Terlalu Manis',
  fixAddBitters: 'Rasa Pahit Kurang',
  fixAddSugar: 'Terlalu Asam',
  fixAddAcid: 'Terlalu Manis'
};

const faqTitle = 'Pertanyaan yang Sering Diajukan';

const faq: CocktailBalancerLocaleContent['faq'] = [
  {
    question: "Apa itu 'Hukum Asam'?",
    answer: "Ini adalah rasio emas mixologi yang menyeimbangkan tiga elemen: basis kuat (alkohol), asam (jeruk), dan manis (sirup). Resep klasik biasanya mengikuti rasio 2:1:1 (Kuat:Asam:Manis), meskipun ini bervariasi tergantung kekuatan dan kepadatan.",
  },
  {
    question: "Bagaimana pengenceran memengaruhi keseimbangan koktail?",
    answer: "Es tidak hanya mendinginkan; ia menambahkan air (pengenceran) yang membuka aroma dari alkohol dan melembutkan puncak asam dan manis. Koktail yang seimbang di shaker dapat menjadi tidak seimbang jika dibiarkan terlalu lama dengan es di gelas.",
  },
  {
    question: "Mengapa koktail buatan saya tidak terasa seperti yang di bar?",
    answer: "Biasanya karena kurangnya keseimbangan antara gula dan pH dari jeruk. Lemon bervariasi dalam asam tergantung musim. Kalkulator kami membantu Anda menyesuaikan jumlah pasti sirup berdasarkan volume jus yang digunakan.",
  },
  {
    question: "Apa itu derajat Brix dan mengapa penting untuk koktail?",
    answer: "Brix adalah skala yang mengukur jumlah gula terlarut dalam cairan. Sirup sederhana (1:1) berada sekitar 50 °Brix; Sirup Kaya (2:1) melebihi 66 °Brix. Semakin tinggi Brix, semakin banyak badan dan manis yang disumbangkannya per unit volume. Mengetahui ini memungkinkan Anda menukar sirup dalam resep tanpa merusak keseimbangan.",
  },
];

const howTo: CocktailBalancerLocaleContent['howTo'] = [
  {
    name: "Pilih basis alkohol",
    text: "Pilih alkohol utama (Gin, Rum, Whiskey) dari basis data kami untuk mengetahui badan dan kontribusi alkoholnya.",
  },
  {
    name: "Masukkan agen asam",
    text: "Tambahkan volume jus lemon, jeruk nipis, atau grapefruit. Kalkulator akan menganalisis dampak pH pada campuran.",
  },
  {
    name: "Sesuaikan komponen manis",
    text: "Masukkan jenis sirup (sederhana, 2:1, agave) dan tonton indikator keseimbangan bergerak secara real-time.",
  },
  {
    name: "Penyajian sempurna",
    text: "Tinjau putusan akhir alat: rasio asam, ABV perkiraan setelah pengenceran, dan saran koreksi. Sajikan dengan es segar dan sesuaikan jeruk atau sirup sesuai selera.",
  },
];


const seo: CocktailBalancerLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Teknik Molekuler & Keseimbangan Cairan',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'Selamat datang di laboratorium digital di mana intuisi bertemu matematika. Alat ini bukan sekadar buku resep sederhana; ini adalah <strong>simulator fisiko-kimia canggih</strong> yang dirancang untuk mengurai dan menganalisis struktur molekuler koktail Anda secara real-time. Setiap tetes jeruk, setiap ukuran alkohol, setiap gram sirup berinteraksi menurut hukum kimia yang tidak dapat diubah yang menentukan apakah minuman Anda akan menjadi mahakarya atau kegagalan yang mengecewakan.'
  },
  {
    type: 'stats',
    items: [
      { label: 'Jeruk Nipis', value: '~6% Asam', icon: 'mdi:fruit-citrus' },
      { label: 'Lemon', value: '~6% Asam', icon: 'mdi:fruit-citrus' },
      { label: 'Grapefruit', value: '~1-2% Asam', icon: 'mdi:fruit-citrus' }
    ],
    columns: 3
  },
  {
    type: 'card',
    title: 'Ilmu Pengetahuan Asam',
    icon: 'mdi:fruit-citrus',
    html: 'Asam bukan hanya rasa; ini adalah tulang punggung struktural dari setiap koktail yang seimbang. Tanpa asam yang tepat, minuman menjadi datar, satu dimensi, dan mudah dilupakan. Algoritma kami membedakan asam titrat dari jeruk nipis Persia versus lemon Eureka, memperhitungkan variasi pH jeruk musiman yang dapat menggeser resep Anda satu titik keseimbangan penuh di langit-langit mulut.'
  },
  {
    type: 'card',
    title: 'Kontrol Brix (Manis)',
    icon: 'mdi:spoon-sugar',
    html: 'Badan dan tekstur koktail Anda sepenuhnya tergantung pada gula terlarut. Sirup Sederhana (1:1) berperilaku sangat berbeda dari Sirup Kaya (2:1), madu, atau nektar agave. Setiap pemanis memiliki derajat Brix dan viskositas yang berbeda yang memengaruhi cara minuman melapisi lidah. Kalkulator kami menghitung gram persis gula terlarut untuk memprediksi tekstur mulut akhir dan persepsi manis.'
  },
  {
    type: 'card',
    title: 'Termodinamika dan Pengenceran',
    icon: 'mdi:water-percent',
    html: 'Koktail yang dikocok encer 25-40% tergantung pada suhu es, teknik pengocok, dan durasi. Penambahan air ini bukan cacat; itu adalah bahan penting yang membuka aroma dan melunakkan tepi alkohol. Kalkulator kami memperkirakan ABV Akhir setelah pengenceran, sehingga Anda dapat mendesain minuman dengan kekuatan dan keseimbangan rasa yang tepat.'
  },
  {
    type: 'title',
    text: 'Melampaui Rasio Dasar',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'Banyak bartender mempelajari aturan klasik 2:1:1 (2 bagian alkohol, 1 bagian asam, 1 bagian manis) dan memperlakukannya sebagai kebenaran universal. Namun, <strong>kimia jauh lebih bernuansa</strong>. Lemon dari Sisilia mengandung asam berbeda dari jeruk nipis dari Meksiko. Triple sec seperti Cointreau berperilaku secara radikal berbeda dari Curaçao biru. Resep yang sama dapat terasa sempurna seimbang satu minggu dan brutal asam berikutnya, hanya karena variasi buah musiman.'
  },
  {
    type: 'paragraph',
    html: 'Penyeimbang ini melampaui hambatan sederhana itu. Dengan memasukkan bahan spesifik Anda, Anda berkonsultasi dengan database hidup yang secara dinamis menyesuaikan vektor asam dan manis untuk menawarkan peta indrawi yang tepat dari kreasi Anda. Berhenti menebak dan mulai merekayasa koktail Anda dengan ketelitian ilmiah yang sama yang digunakan bartender di tempat-tempat kelas dunia setiap layanan.'
  },
  {
    type: 'summary',
    title: 'Untuk siapa alat ini?',
    items: [
      'Bartender Profesional: Standardisasi resep dan buat menu tanda tangan dengan konsistensi yang dapat direproduksi.',
      'Penggemar Rumah: Berhenti menebak dan mulai memahami mengapa koktail Anda berhasil atau gagal.',
      'Pengembang Minuman: Prototipe dengan cepat konsep rasa baru sebelum jalankan produksi yang mahal.'
    ]
  },
  {
    type: 'diagnostic',
    title: 'Zona Emas',
    icon: 'mdi:star',
    variant: 'success',
    badge: 'Tujuan',
    html: 'Ini adalah tujuan akhir: pH yang terkontrol di mana gula menetralkan agresi asam tanpa menutupi minyak esensial dan senyawa aromatik dari alkohol dasar. Keseimbangan yang tepat ini adalah tempat di mana klasik abadi tinggal — Daiquiri, Margarita, Sidecar — minuman yang telah bertahan beberapa dekade karena mematuhi hukum fundamental kimia rasa.'
  },
  {
    type: 'tip',
    title: 'Tips Ahli: Selalu Gunakan Jeruk Segar',
    html: 'Selalu peras jeruk pada saat terakhir. Jus lemon dan jeruk nipis teroksidasi dengan cepat, kehilangan asam hidup dalam 20-30 menit setelah diperas. Koktail yang dibuat dengan jus yang benar-benar segar akan selalu memiliki kecerahan dan vitalitas di langit-langit mulut yang tidak dapat direplikasi produk botol apa pun. Gunakan buah pada suhu kamar untuk memaksimalkan hasil jus.'
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
