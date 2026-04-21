import { bibliography } from '../bibliography';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import type { CarbonationUI, CarbonationLocaleContent } from '../index';

const slug = 'kalkulator-karbonak-bir';
const title = 'Kalkulator Karbonasi & Primer Bir';
const description = 'Hitung gram pasti Dextrose, Gula Meja atau DME (Ekstrak Malt Kering) untuk membotolkan homebrew Anda. Masukkan volume, suhu fermentasi, dan gaya untuk primer sempurna.';

const ui: CarbonationUI = {
  parametersTitle: 'Parameter',
  metricBtn: 'Metrik',
  imperialBtn: 'Imperial',
  volumeLabel: 'Volume Bir',
  maxTempLabel: 'Suhu Maksimal',
  litersUnit: 'Liter',
  celsiusUnit: '°C',
  gallonsUnit: 'Gallon',
  fahrenheitUnit: '°F',
  desiredCo2Label: 'Karbonasi Diinginkan',
  volUnit: 'CO2 Vol',
  resultsTitle: 'Hasil Primer',
  tableSugarLabel: 'Gula Meja',
  cornSugarLabel: 'Gula Jagung (Dextrose)',
  dmeLabel: 'Ekstrak Malt Kering (DME)',
  safetyTitle: 'BAHAYA LEDAKAN!',
  lowCarbonation: 'KARBONASI RENDAH',
  optimalCarbonation: 'KARBONASI OPTIMAL',
  highEffervescence: 'EFERVESCENCE TINGGI',
  bubblingVisualizationLabel: 'Visualisasi gelembung perkiraan'
};

const faqTitle = 'Pertanyaan yang Sering Diajukan';

const faq: CarbonationLocaleContent['faq'] = [
  {
    question: 'Mengapa suhu penting untuk karbonasi?',
    answer: 'CO2 sisa di bir Anda tergantung pada suhu tertinggi yang dicapai setelah fermentasi: cairan dingin memegang lebih banyak gas terlarut daripada cairan hangat. Jika Anda memasukkan suhu lebih rendah dari yang sebenarnya, kalkulator menganggap lebih banyak CO2 sisa daripada yang sebenarnya ada dan memberikan Anda kurang gula daripada yang diperlukan. Masukkan terlalu tinggi dan sebaliknya terjadi — Anda menambahkan lebih banyak gula daripada yang diperlukan dan mendorong batch Anda ke wilayah bom botol, di mana tekanan berlebih menyebabkan botol pecah atau tutup terlepas dengan keras.',
  },
  {
    question: 'Gula mana yang terbaik untuk primer?',
    answer: 'Dextrose (gula jagung) lebih disukai karena netral dan larut dengan cepat. Gula meja berfungsi dengan baik tetapi memerlukan sekitar 10% lebih sedikit berat.',
  },
  {
    question: 'Apa yang terjadi jika saya menambahkan terlalu banyak gula primer?',
    answer: 'Over-priming menghasilkan tekanan CO2 berlebih di dalam botol. Botol gelas standar gagal pada sekitar 3,5-4,0 volume CO2. Melampaui titik ini, botol dapat pecah atau tutup dapat terlepas dengan keras. Itulah mengapa presisi penting — bahkan 5 gram ekstra per liter dapat mendorong batch ke zona bahaya.',
  },
  {
    question: 'Berapa lama bir membutuhkan waktu untuk karbonasi setelah pembotolan?',
    answer: 'Antara 2 dan 3 minggu pada suhu kamar (18-22°C) adalah kisaran tipikal agar ragi sepenuhnya memfermentasi gula yang ditambahkan dan CO2 terintegrasi ke dalam cairan. Membuka botol sebelum proses selesai selalu memberikan hasil yang menyesatkan: bir akan tampak bawah-karbonasi meskipun karbonasi masih berkembang. Dengan DME proses dapat sedikit lebih lambat karena kompleksitas gula fermentasinya.',
  },
];

const howTo: CarbonationLocaleContent['howTo'] = [
  {
    name: 'Ukur volume nyata',
    text: 'Tunjukkan berapa liter (atau galon) bir yang Anda miliki siap untuk pembotolan setelah fermentasi selesai.',
  },
  {
    name: 'Tentukan suhu fermentasi',
    text: 'Masukkan suhu tertinggi yang dicapai bir selama atau setelah fermentasi aktif.',
  },
  {
    name: 'Pilih gaya atau volume CO2',
    text: 'Pilih tingkat karbonasi yang diinginkan. Gaya bervariasi dari 1,5 (Stouts) hingga 4,5 (Gandum Bir).',
  },
];


const seo: CarbonationLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Panduan Lengkap Karbonasi dan Primer',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'Kuasai seni primer dan ubah homebrewmu dari eksperimen datar menjadi pengalaman minuman efervesen profesional. Primer melibatkan penambahan jumlah gula yang tepat sehingga ragi sisa di botol menghasilkan CO2 alami selama fermentasi sekunder. Terlalu sedikit gula menghasilkan bir datar; terlalu banyak menciptakan tekanan berbahaya yang dapat memecahkan botol. Perbedaan antara keduanya adalah beberapa gram — itulah mengapa kalkulator ini ada.'
  },
  {
    type: 'proscons',
    title: 'Faktor Sukses Kritis',
    items: [
      { pro: 'Suhu: CO2 sisa tergantung pada puncak suhu pasca-fermentasi.', con: '' },
      { pro: 'Presisi: 5 gram ekstra per liter dapat menjadi perbedaan antara karbonasi sempurna dan geyser.', con: '' },
      { pro: '', con: 'Oksidasi: Hindari menumpahkan cairan saat mentransfer untuk mencampur gula primer.' }
    ]
  },
  {
    type: 'title',
    text: 'Volume CO2 Menurut Gaya Bir',
    level: 2
  },
  {
    type: 'stats',
    items: [
      { label: 'Stouts Inggris', value: '1,5 - 2,0 Vol', icon: 'mdi:beer' },
      { label: 'IPA & Ales', value: '2,2 - 2,6 Vol', icon: 'mdi:hops' },
      { label: 'Gandum Jerman', value: '3,3 - 4,5 Vol', icon: 'mdi:barley' }
    ],
    columns: 3
  },
  {
    type: 'card',
    title: 'Gula Mana Sebaiknya Anda Pilih?',
    icon: 'mdi:corn',
    html: '<strong>Dextrose</strong> netral dan profesional — standar industri. <strong>Gula Meja</strong> ekonomis dan efektif (gunakan 10% lebih sedikit berat daripada dextrose). <strong>DME (Ekstrak Malt Kering)</strong> adalah pilihan puritan tetapi lebih sulit diprediksi dengan akurat karena fermentabilitas bervariasi menurut merek dan komposisi malt.'
  },
  {
    type: 'diagnostic',
    title: 'Peringatan Keselamatan',
    icon: 'mdi:alert-decagram',
    variant: 'error',
    badge: 'Bahaya',
    html: 'Botol gelas standar gagal pada 3,5-4,0 volume CO2. Jangan mencoba mengkarbonasi bir gaya Belgia atau gandum dalam kaca tipis. Selalu gunakan botol yang dinilai untuk minuman berkarbonasi, dan jangan pernah gunakan botol komersial daur ulang yang mungkin memiliki kerusakan struktural mikroskopis dari penggunaan sebelumnya.'
  },
  {
    type: 'tip',
    title: 'Kiat Pro: Larutkan Gula dengan Benar',
    html: 'Selalu rebus larutan gula primer Anda (gula yang dilarutkan dalam sekitar 250ml air per batch 20L) selama 10 menit sebelum menambahkannya ke bir. Perebusan mensterilkan larutan dan memastikan gula sepenuhnya larut dan merata didistribusikan di seluruh batch, mencegah hot spot yang menyebabkan karbonasi tidak merata antar botol.'
  },
  {
    type: 'summary',
    title: 'Siapa Alat Ini Untuk?',
    items: [
      'Pembuatan Bir Rumah: Dapatkan perhitungan primer yang tepat untuk setiap ukuran batch, gaya, dan suhu fermentasi.',
      'Penggemar Bir Kerajinan: Pahami sains di balik mengapa bir komersial memiliki tingkat karbonasi yang berbeda.',
      'Pembuat Bir Profesional: Periksa silang perhitungan tangan sebelum pembotolan batch komersial besar.'
    ]
  },
  {
    type: 'title',
    text: 'Sains Karbonasi: Hukum Henry',
    level: 2
  },
  {
    type: 'paragraph',
    html: 'Pada intinya, karbonasi diatur oleh <strong>Hukum Henry</strong>: jumlah gas yang terlarut dalam cairan sebanding dengan tekanan parsial gas itu di atas cairan. Ketika Anda primer botol dan menyegelnya, ragi mengkonsumsi gula dan menghasilkan CO2 di lingkungan yang disegel. Seiring tekanan meningkat, gas dipaksa kembali ke dalam larutan. Suhu di mana keseimbangan ini terjadi menentukan tingkat karbonasi akhir — itulah mengapa suhu fermentasi adalah variabel paling kritis dalam kalkulator ini.'
  },
  {
    type: 'paragraph',
    html: 'CO2 sisa di bir Anda sebelum primer bukan nol. Setiap bir memegang CO2 terlarut dari proses fermentasi, dan jumlah yang dipertahankan tergantung pada suhu tertinggi yang dicapai bir. Bir yang difermentasi pada 22°C memegang jauh lebih sedikit CO2 sisa daripada yang difermentasi pada 16°C, bahkan jika keduanya sekarang didinginkan. Gagal untuk memperhitungkan CO2 sisa ini mengarah ke over-karbonasi sistematis — salah satu kesalahan paling umum di antara pemula pembuatan bir rumah.'
  }
];

const schemas: CarbonationLocaleContent['schemas'] = [
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

export const content: CarbonationLocaleContent = {
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
