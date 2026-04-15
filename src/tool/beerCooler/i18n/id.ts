import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import type { BeerCoolerUI, BeerCoolerLocaleContent } from '../index';

const slug = 'pendingin-bir';
const title = 'Kalkulator Pendingin Bir dengan Hukum Newton';
const description = 'Hitung dengan termodinamika nyata — Hukum Pendinginan Newton — berapa lama tepat bir Anda memerlukan untuk mencapai suhu penyajian yang sempurna di lemari es atau freezer.';

const ui: BeerCoolerUI = {
  step1Title: 'Apa yang Anda dinginkan?',
  canLabel: 'Kaleng',
  aluminumLabel: 'Aluminium',
  bottleLabel: 'Botol',
  glassLabel: 'Gelas',
  step2Title: 'Di mana Anda meletakkannya?',
  fridgeLabel: 'Lemari Es',
  freezerLabel: 'Freezer',
  step3Title: 'Sesuaikan Suhu',
  initialTempLabel: 'Suhu Awal',
  targetTempLabel: 'Target Dingin',
  glacialLabel: 'Glasial',
  perfectLabel: 'Sempurna',
  bodegaLabel: 'Bodega',
  readyTitle: 'Siap',
  readyDescription: 'Pilih wadah dan lokasi untuk menghitung.',
  estimatedTimeLabel: 'Waktu Estimasi',
  methodLabel: 'Metode',
  containerLabel: 'Wadah',
  alreadyColdLabel: 'Sudah dingin!',
  neverColdLabel: 'Tidak pernah dingin'
};

const faqTitle = 'Pertanyaan yang Sering Diajukan';
const bibliographyTitle = 'Bibliografi & Sumber';

const faq: BeerCoolerLocaleContent['faq'] = [
  {
    question: 'Bagaimana alat ini menghitung waktu pendinginan?',
    answer: 'Ini menerapkan Hukum Pendinginan Newton: T(t) = T_env + (T₀ - T_env) × e^(-kt). Konstanta k bervariasi berdasarkan material wadah dan medium pendingin. Kaleng aluminium di lemari es memiliki k yang sangat berbeda dengan botol gelas di freezer. Nilai yang digunakan di sini dikalibrasi terhadap eksperimen dunia nyata untuk setiap kombinasi.',
  },
  {
    question: 'Apakah trik handuk kertas basah dengan garam benar-benar berhasil?',
    answer: 'Ya, dan cukup terlihat. Membungkus wadah dengan handuk kertas lembab berisi garam mempercepat pendinginan karena dua alasan: penguapan air mengeluarkan panas tambahan (pendinginan evaporatif), dan garam menurunkan titik beku air, menjaga kontak lembab tetap aktif lebih lama. Anda bisa mendapatkan penurunan 2–4°C ekstra dalam beberapa menit pertama dibandingkan dengan menempatkan kaleng kering di freezer.',
  },
  {
    question: 'Berapa suhu penyajian ideal untuk gaya bir yang berbeda?',
    answer: 'Itu tergantung pada gayanya. Lager dan Pilsner disajikan terbaik antara 3°C dan 7°C. IPA dan Pale Ale bersinar pada 7°C hingga 10°C. Stout, Porter, dan ale kompleks harus disajikan lebih hangat, antara 12°C dan 14°C, sehingga senyawa aromatik mereka — kopi, cokelat, kacang — dapat mengekspresikan diri sepenuhnya.',
  },
  {
    question: 'Dapatkah bir saya meledak jika saya meninggalkannya di freezer?',
    answer: 'Ya. Alkohol dan gula terlarut menurunkan titik beku bir di bawah air murni: lager standar 5% membeku sekitar -3°C. Saat air mengkristal, volume meningkat dan CO2 terlarut meningkatkan tekanan internal hingga wadah terberi. Lebih dari 60 menit di freezer — terutama botol gelas — adalah zona bahaya nyata. Gunakan kalkulator ini untuk menghindarinya.',
  },
  {
    question: 'Apakah bir "terbakar" jika didinginkan terlalu cepat?',
    answer: 'Tidak. Mitos "heat shock" yang merusak bir adalah salah. Apa yang benar-benar dapat mempengaruhinya adalah pembekuan dan pencairan berulang — yang memecah protein dan mengkeruhkan cairan — atau paparan cahaya UV langsung. Pendinginan cepat di freezer atau air es tidak merusak rasa.',
  },
];

const howTo: BeerCoolerLocaleContent['howTo'] = [
  {
    name: 'Pilih wadah',
    text: 'Pilih antara kaleng aluminium atau botol gelas. Material drastis mempengaruhi kecepatan perpindahan panas.',
  },
  {
    name: 'Pilih metode pendinginan',
    text: 'Tunjukkan apakah Anda menggunakan lemari es konvensional (4°C) atau freezer (-18°C) untuk proses ultra-cepat.',
  },
  {
    name: 'Sesuaikan suhu',
    text: 'Tentukan suhu minuman saat ini (suhu ruangan) dan suhu target dingin yang Anda inginkan.',
  },
];

const bibliography: BeerCoolerLocaleContent['bibliography'] = [
  {
    name: 'Hukum Pendinginan Newton - Wikipedia',
    url: 'https://en.wikipedia.org/wiki/Newton%27s_law_of_cooling',
  },
  {
    name: 'Kimia Lanjut Bir dan Pembuatan - American Chemical Society',
    url: 'https://www.acs.org/acs-webinars/library/advanced-chemistry-of-beer-and-brewing.html',
  },
];

const seo: BeerCoolerLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Sains Dingin dan Termodinamika',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'Mengapa kaleng mendingin sebelum botol? Apakah itu sihir? Tidak, itu <strong>Hukum Pendinginan Newton</strong> dalam aksi. Alat ini secara matematis menghitung momen persis ketika minuman Anda mencapai kesempurnaan termodinamik. Setiap material, setiap lingkungan, setiap suhu awal memberi makan ke dalam persamaan diferensial yang sama yang digunakan fisikawan dan insinyur untuk memodelkan perpindahan panas dalam sistem industri.'
  },
  {
    type: 'diagnostic',
    title: 'Formula Utama',
    icon: 'mdi:function-variant',
    variant: 'info',
    badge: 'Fisika',
    html: 'T(t) = T_env + (T_0 - T_env) * e^(-kt). Persamaan diferensial ini menjelaskan bagaimana suhu objek berubah secara proporsional dengan perbedaan antara suhunya dan lingkungan. Konstanta k tergantung pada material dan geometri wadah, itulah mengapa kaleng mendingin lebih cepat dari botol dengan volume yang sama.'
  },
  {
    type: 'title',
    text: 'Perang Material: Aluminium vs. Gelas',
    level: 2
  },
  {
    type: 'paragraph',
    html: '<strong>Aluminium</strong> memiliki konduktivitas termal ~205 W/(m·K), sementara <strong>gelas</strong> hampir mencapai 0,8 W/(m·K). Logam mentransfer dingin dengan sangat cepat, menjadikannya wadah ideal untuk keadaan darurat. Namun, gelas memberikan isolasi yang lebih baik setelah dingin, mempertahankan suhu ideal lebih lama selama konsumsi. Kompromi ini adalah mengapa budaya bir berbeda telah mengembangkan preferensi untuk setiap material.'
  },
  {
    type: 'stats',
    items: [
      { label: 'Pilsner & Lager', value: '3°C - 7°C', icon: 'mdi:snowflake' },
      { label: 'IPA & Pale Ale', value: '7°C - 10°C', icon: 'mdi:hops' },
      { label: 'Stout & Porter', value: '12°C - 14°C', icon: 'mdi:beer' }
    ],
    columns: 3
  },
  {
    type: 'card',
    title: 'Zona Bahaya Freezer',
    icon: 'mdi:snowflake-alert',
    html: 'Karena alkohol dan gula terlarut, bir membeku di bawah 0°C — lager standar 5% membeku sekitar -3°C. Saat air mengkristal, volume meningkat, sementara tekanan CO2 meningkat secara bersamaan. Hasilnya adalah wadah yang dapat pecah dengan keras. Jangan pernah biarkan bir di freezer lebih dari 45 menit tanpa menetapkan timer.'
  },
  {
    type: 'proscons',
    title: 'Trik Pendinginan Darurat',
    items: [
      { pro: 'Trik Handuk Basah: Bungkus kaleng dengan handuk kertas basah, lalu bekukan — penguapan mempercepat pendinginan.', con: '' },
      { pro: 'Garam Arktik: Isi ember dengan air, es, dan 2 sendok makan garam untuk mencapai garam -5°C.', con: '' },
      { pro: 'Metode Putar: Putar botol dalam air es untuk memaksa konveksi dan memperpendek waktu pendinginan.', con: '' },
      { pro: '', con: 'Jangan letakkan kaleng langsung di rak freezer tanpa timer — kaleng yang pecah berbahaya dan berbahaya.' }
    ]
  },
  {
    type: 'tip',
    title: 'Tip Pro: Prapandingin Gelas',
    html: 'Gelas tempat Anda menuangkan bir memiliki massa termal yang signifikan. Gelas hangat dapat meningkatkan suhu bir yang sempurna dingin sebesar 2-3°C secara instan saat kontak. Letakkan gelas penyajian Anda di freezer selama 5 menit sebelum menuangkan, atau bilas dengan air dingin. Langkah sederhana ini memperpanjang jendela di mana bir Anda terasa persis seperti yang dimaksudkan.'
  },
  {
    type: 'title',
    text: 'Memahami Konstanta Pendinginan',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'Konstanta pendinginan k dalam persamaan Newton bukan nilai universal yang tetap — ini adalah properti empiris dari setiap wadah spesifik dan medium. Kaleng aluminium tipis dalam air es memiliki k yang sangat berbeda dari botol gelas tebal dalam udara lemari es yang diam. Kalkulator kami menggunakan nilai terukur yang dikalibrasi terhadap eksperimen dunia nyata untuk setiap jenis wadah, memberi Anda prediksi akurat dalam beberapa menit untuk skenario pendinginan rumah tangga yang khas.'
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
