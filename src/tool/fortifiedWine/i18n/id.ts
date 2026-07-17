import { bibliography } from '../bibliography';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import type { FortifiedWineBuilderUI, FortifiedWineBuilderLocaleContent } from '../index';

const slug = 'pembuat-wine-fortifikasi';
const title = 'Pembuat Wine Fortifikasi & Vermouth: Kalkulator Metode Pearson Square';
const description = 'Hitung tepat berapa banyak spirit yang perlu ditambahkan ke wine Anda untuk mencapai kadar alkohol target. Buat vermouth, port, dan sherry sempurna dengan metode Pearson Square.';

const ui: FortifiedWineBuilderUI = {
  intentionTitle: 'Apa yang sedang Anda buat?',
  intentionVermouth: 'Vermouth',
  intentionPort: 'Port',
  intentionSherry: 'Sherry',
  intentionCustom: 'Kustom',
  modeALabel: 'Dari wine yang saya punya',
  modeBLabel: 'Target volume akhir',
  wineSection: 'Wine Dasar',
  wineVolumeLabel: 'Volume wine (L)',
  wineAbvLabel: 'Kadar alkohol wine (%)',
  spiritSection: 'Spirit Fortifikasi',
  spiritAbvLabel: 'Kadar alkohol spirit (%)',
  brandyPreset: 'Brandy (38°)',
  neutralPreset: 'Netral (96°)',
  aguardientePreset: 'Aguardiente (42°)',
  targetAbvLabel: 'Target kadar alkohol (%)',
  targetVolumeLabel: 'Target total volume (L)',
  resultsTitle: 'Resep Anda',
  addLabel: 'Tambahkan',
  finalVolumeLabel: 'Volume akhir',
  bottlesSection: 'Botol yang dibutuhkan',
  copyBtn: 'Salin Resep',
  copiedBtn: 'Tersalin!',
  pearsonTitle: 'Pearson Square',
  wineCornerLabel: 'Wine',
  spiritCornerLabel: 'Spirit',
  emptyState: 'Masukkan nilai Anda untuk melihat Pearson Square',
  errorAbv: 'Kadar alkohol spirit harus lebih tinggi dari target, dan target harus lebih tinggi dari kadar alkohol wine.',
  errorMode: 'Masukkan volume yang valid untuk menghitung.',
};

const faqTitle = 'Pertanyaan yang Sering Diajukan';

const faq: FortifiedWineBuilderLocaleContent['faq'] = [
  {
    question: 'Apa itu metode Pearson Square?',
    answer: 'Pearson Square adalah metode grafis sederhana yang digunakan dalam pembuatan wine untuk menghitung rasio pencampuran. Anda menempatkan target kadar alkohol di tengah kotak, kadar alkohol wine di sudut kiri atas, dan kadar alkohol spirit di sudut kiri bawah. Selisih diagonal memberikan bagian proporsional dari setiap cairan yang dibutuhkan.',
  },
  {
    question: 'Berapa kadar alkohol tipikal untuk vermouth?',
    answer: 'Vermouth tradisional memiliki kadar alkohol antara 15% hingga 18%. Vermouth kering (gaya Perancis) biasanya berada di kisaran bawah (15-16%), sementara vermouth manis (gaya Italia) sering mencapai 16-18%. Vermouth rosé berada di antara keduanya.',
  },
  {
    question: 'Wine dasar apa yang harus saya gunakan untuk vermouth?',
    answer: 'Secara tradisional, wine putih kering dan netral dengan kadar alkohol 10-12% paling cocok digunakan. Wine memberikan tulang punggung, tetapi karena akan diberi aroma dengan rempah dan bahan botanikal, Anda tidak perlu wine mahal - dasar yang bersih dan asam adalah yang ideal.',
  },
  {
    question: 'Bisakah saya menggunakan alkohol netral sebagai pengganti brandy?',
    answer: 'Ya. Alkohol netral (96% vol.) memberikan kontrol maksimal dan profil rasa yang lebih bersih. Brandy menambahkan karakternya sendiri (kayu ek, buah kering, vanila) yang bisa diinginkan atau tidak tergantung pada gayanya. Port secara tradisional menggunakan brandy anggur, sementara beberapa vermouth menggunakan spirit netral.',
  },
  {
    question: 'Bagaimana fortifikasi mengawetkan wine?',
    answer: 'Ketika kadar alkohol wine melebihi sekitar 15-16%, fermentasi oleh ragi terhambat - ragi tidak dapat bertahan di lingkungan beralkohol tinggi. Inilah mengapa wine fortifikasi memiliki umur simpan yang jauh lebih panjang daripada wine biasa. Alkohol bertindak sebagai pengawet alami terhadap pembusukan oleh ragi maupun bakteri.',
  },
];

const howTo: FortifiedWineBuilderLocaleContent['howTo'] = [
  { name: 'Pilih gaya', text: 'Pilih Vermouth, Port, Sherry, atau Kustom untuk mengisi otomatis rentang target kadar alkohol yang direkomendasikan.' },
  { name: 'Masukkan data wine', text: 'Masukkan volume wine dasar Anda (atau target volume akhir di Mode B) dan kadar alkohol saat ini.' },
  { name: 'Atur spirit', text: 'Pilih preset spirit atau masukkan kadar alkohol kustom. Pearson Square diperbarui secara real-time.' },
  { name: 'Baca resep Anda', text: 'Kalkulator menampilkan tepat berapa mililiter spirit yang harus ditambahkan dan volume akhirnya.' },
];


const seo: FortifiedWineBuilderLocaleContent['seo'] = [
  { type: 'title', text: 'Pearson Square: Matematika Kuno, Wine Sempurna', level: 2 },
  { type: 'paragraph', html: '<strong>Pearson Square</strong> adalah salah satu alat paling tua dan elegan dalam matematika pembuatan wine. Dikembangkan pada abad ke-19, alat ini memungkinkan siapa pun - profesional atau amatir - untuk menghitung rasio pencampuran hanya dengan pengurangan. Alat kami mendigitalkan metode visual ini dan menambahkan umpan balik real-time, sehingga Anda menghabiskan lebih sedikit waktu untuk menghitung dan lebih banyak waktu untuk berkreasi.' },
  { type: 'stats', items: [{ label: 'Vermouth', value: '15-18% vol.', icon: 'mdi:glass-cocktail' }, { label: 'Port', value: '18-20% vol.', icon: 'mdi:bottle-wine' }, { label: 'Sherry', value: '15-17% vol.', icon: 'mdi:cup-water' }], columns: 3 },
  { type: 'card', title: 'Mengapa fortifikasi pada 18%?', icon: 'mdi:shield-check', html: 'Di atas sekitar 15% vol., <em>Saccharomyces cerevisiae</em> - ragi wine utama - mulai terhambat. Saat mencapai 18%, fermentasi sepenuhnya terhenti. Inilah mengapa wine Port mempertahankan gula sisa: spirit ditambahkan di tengah fermentasi, membunuh ragi sebelum semua gula dikonsumsi.' },
  { type: 'tip', title: 'Tips Pro: Ukur pada 20°C', html: 'Kerapatan alkohol berubah seiring suhu. Pengukuran kadar alkohol resmi dikalibrasi pada 20°C. Jika spirit atau wine Anda jauh lebih hangat atau dingin, terapkan faktor koreksi: sekitar +0,04% vol. per °C di bawah 20°C, dan −0,04% per °C di atasnya.' },
  { type: 'title', text: 'Renaisans Vermouth Artisanal', level: 2 },
  { type: 'paragraph', html: 'Eropa selatan sedang mengalami renaisans vermouth artisanal. Barcelona, Valencia, dan San Sebastián telah merebut kembali <em>la hora del vermut</em> sebagai institusi budaya, dan produsen kecil di Spanyol, Italia, dan Prancis membotolkan ekspresi yang luar biasa. Hal ini menciptakan generasi baru produsen rumahan yang menginginkan alat teknis sesuai dengan ambisi mereka.' },
  { type: 'summary', title: 'Untuk siapa alat ini?', items: ['Pembuat wine rumahan: Fortifikasi panen Anda dengan presisi, bukan tebakan.', 'Produsen vermouth artisanal: Buat prototipe target kadar alkohol baru sebelum diskalakan ke batch penuh.', 'Pendidik spirits: Demonstrasikan metode Pearson Square secara visual dalam workshop.'] },
];

const schemas: FortifiedWineBuilderLocaleContent['schemas'] = [
  { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) } as WithContext<FAQPage>,
  { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((step, i) => ({ '@type': 'HowToStep', position: i + 1, name: step.name, text: step.text })) } as WithContext<HowTo>,
  { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'UtilityApplication', operatingSystem: 'Web', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' } } as WithContext<SoftwareApplication>,
];

export const content: FortifiedWineBuilderLocaleContent = { slug, title, description, ui, seo, faqTitle, faq, bibliography, howTo, schemas };
