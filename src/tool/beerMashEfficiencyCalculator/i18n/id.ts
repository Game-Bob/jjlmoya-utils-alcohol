import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { BeerMashEfficiencyCalculatorUI } from '../ui';

const slug = 'kalkulator-efisiensi-mash-bir';
const title = 'Kalkulator Efisiensi Mash Bir';
const description = 'Hitung persentase efisiensi mash, ekstraksi gula, dan spesifik gravitasi yang diharapkan untuk pembuatan bir rumah tangga.';

const ui: BeerMashEfficiencyCalculatorUI = {
  unitMetric: 'Metrik',
  stagePreboil: 'Wort Sebelum Dididihkan',
  stagePostboil: 'Wort Setelah Dididihkan',
  unitImperial: 'Imperial',
  labels: {
    grainWeight: 'Total Berat Malt',
    grainType: 'Potensi Malt',
    customPotential: 'Potensi Kustom (SG)',
    wortVolume: 'Volume Wort',
    measuredSg: 'SG Terukur',
    unitSystem: 'Sistem Satuan',
    sampleTemp: 'Suhu Sampel',
    calibTemp: 'Suhu Kalibrasi',
    stageLabel: 'Tahap Pembuatan',
    presets: 'Potensi Umum',
  },
  units: {
    weightKg: 'kg',
    weightLb: 'lb',
    volumeL: 'L',
    volumeGal: 'gal',
    sg: 'SG',
    brix: 'Brix',
    percent: '%',
    tempC: '°C',
    tempF: '°F',
  },
  grainPresets: {
    pilsner: 'Malt Pilsner (1.037 / 37 PPG)',
    pale_ale: 'Malt Pale Ale (1.038 / 38 PPG)',
    vienna: 'Malt Vienna (1.036 / 36 PPG)',
    munich: 'Malt Munich (1.035 / 35 PPG)',
    wheat: 'Malt Gandum (1.038 / 38 PPG)',
    caramel_30: 'Karamel 30L (1.034 / 34 PPG)',
    caramel_60: 'Karamel 60L (1.034 / 34 PPG)',
    chocolate: 'Malt Coklat (1.034 / 34 PPG)',
    custom: 'Potensi Kustom...',
  },
  results: {
    efficiencyTitle: 'Efisiensi Mash',
    efficiencyBadge: 'Status Kalkulasi',
    correctedGravity: 'SG Terkoreksi Suhu',
    measuredGravity: 'Gravitasi Terukur',
    expectedGravity75: 'SG pada Efisiensi 75%',
    expectedGravity80: 'SG pada Efisiensi 80%',
    expectedGravity85: 'SG pada Efisiensi 85%',
    potentialPoints: 'Total Poin Potensial',
    extractedPoints: 'Poin Ekstraksi Terukur',
    wortBrix: 'Estimasi Brix',
  },
  statusMessages: {
    excellent: 'Ekstraksi Sangat Baik (82%+)',
    good: 'Efisiensi Baik (74% - 81%)',
    average: 'Efisiensi Rata-rata (65% - 73%)',
    poor: 'Ekstraksi Rendah (< 65%)',
  },
  kettleVisual: {
    mashTunTitle: 'Ekstraksi di Ketel Mash',
    wortLevel: 'Tingkat Wort',
    sugarExtraction: 'Ekstraksi Gula',
  },
};

const faq = [
  {
    question: 'Apa itu efisiensi mash dalam pembuatan bir?',
    answer: 'Efisiensi mash adalah persentase potensi gula yang berhasil diekstraksi dari malt ke dalam wort sebelum dididihkan.',
  },
  {
    question: 'Berapa persen efisiensi mash yang baik?',
    answer: 'Untuk pembuat bir rumah tangga, efisiensi mash antara 70% hingga 80% tergolong sangat baik.',
  },
  {
    question: 'Bagaimana cara menghitung efisiensi mash?',
    answer: 'Hitung perbandingan total poin gravitasi wort yang terkumpul dengan potensi teoritis maksimum dari malt.',
  },
  {
    question: 'Bagaimana cara meningkatkan efisiensi yang rendah?',
    answer: 'Atur kehalusan gilingan malt, jaga pH mash di rentang 5.2 - 5.6, serta lakukan sparging secara merata.',
  },
  {
    question: 'Apa perbedaan efisiensi mash dan efisiensi sistem?',
    answer: 'Efisiensi mash hanya mengukur ekstraksi di ketel mash; efisiensi sistem mencakup kehilangan wort di ketel didih dan fermentor.',
  },
  {
    question: 'Bagaimana rasio air dan malt mempengaruhi hasil?',
    answer: 'Mash yang lebih encer (3.5 hingga 4.0 L per kg) meningkatkan mobilitas enzim dan mempermudah pembilasan gula.',
  }
];

const howTo = [
  {
    name: 'Pilih sistem satuan',
    text: 'Pilih satuan metrik atau imperial.',
  },
  {
    name: 'Masukkan berat dan potensi malt',
    text: 'Pilih jenis malt atau masukkan nilai potensi kustom.',
  },
  {
    name: 'Masukkan volume wort dan gravitasi terukur',
    text: 'Isi volume wort sebelum dididihkan dan hasil bacaan hidrometer.',
  },
  {
    name: 'Tinjau efisiensi dan target gravitasi',
    text: 'Bandingkan nilai gravitasi Anda dengan target 75%, 80%, dan 85%.',
  },
  {
    name: 'Sesuaikan resep untuk pembuatan berikutnya',
    text: 'Gunakan efisiensi dasar ini untuk menghitung kebutuhan malt secara akurat.',
  }
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howTo.map((step, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
    name: step.name,
    text: step.text,
  })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'id',
};

export const content: ToolLocaleContent<Record<string, any>> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Pertanyaan umum tentang efisiensi mash',
  bibliographyTitle: 'Referensi dan rumus',
  faq,
  howTo,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    {
      type: 'title',
      text: 'Memahami efisiensi mash bir',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Efisiensi mash mengukur seberapa efisien pati malt dikonversi menjadi gula yang dapat difermentasi dan dikumpulkan dalam wort. Ini adalah dasar formulasi resep yang akurat.',
    },
    {
      type: 'table',
      headers: ['Parameter', 'Rumus', 'Keterangan'],
      rows: [
        ['Poin Potensial', 'Berat x PPG', 'Teoritis maksimum'],
        ['Poin Diekstrak', 'Volume x Poin SG', 'Poin nyata dalam wort'],
        ['Efisiensi Mash', '(Diekstrak / Potensial) x 100', 'Persentase ekstraksi nyata'],
        ['Brix Wort', '-668.82 + 11.536 x SG x 100...', 'Setara refraktometer']
      ],
    },
    {
      type: 'title',
      text: 'Faktor utama yang mempengaruhi ekstraksi',
      level: 2,
    },
    {
      type: 'list',
      items: [
        'Kehalusan Gilingan: Gilingan lebih halus meningkatkan luas permukaan namun dapat menyumbat filtrasi.',
        'Suhu dan pH: Aktivitas enzim optimal antara 64°C - 68°C dengan pH 5.2 - 5.6.',
        'Teknik Sparging: Aliran kontinu atau bertahap mempengaruhi pencucian gula.',
        'Rasio Air-Malt: Mash yang lebih encer mendukung mobilitas enzim.',
        'Kedalaman Lapisan: Antara 30 cm dan 45 cm mengoptimalkan dinamika cairan.'
      ],
    },
    {
      type: 'tip',
      title: 'Gunakan 75% sebagai patokan awal resep',
      html: 'Saat merancang resep baru, menggunakan asumsi efisiensi 75% memberikan dasar kalkulasi yang aman.',
    },
    {
      type: 'title',
      text: 'Penyesuaian resep berdasarkan pengukuran',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Jika gravitasi terukur sebelum pendidihan lebih rendah dari target, Anda dapat memperpanjang waktu mendidih untuk memekatkan wort atau menambahkan ekstrak malt.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Efisiensi mash vs Efisiensi total peralatan',
      html: 'Jangan menyamakan ekstraksi di ketel mash dengan efisiensi total seluruh peralatan brewing Anda.',
    },
  ],
};
