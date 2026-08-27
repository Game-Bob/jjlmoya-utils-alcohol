import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { AbvDilutionCalculatorUI } from '../ui';

const slug = 'kalkulator-pengenceran-alkohol-dan-proof';
const title = 'Kalkulator Pengenceran Alkohol dan Proof';
const description = 'Hitung jumlah air untuk menurunkan kadar alkohol minuman suling. Kalkulator ini menampilkan volume akhir, alkohol murni, dan rasio pengenceran.';
const ui: AbvDilutionCalculatorUI = {
  unitLabel: 'Satuan volume', metricUnit: 'Metrik ml', imperialUnit: 'Imperial fl oz', strengthLabel: 'Satuan kadar', abvUnit: 'Persen alkohol', proofUnit: 'Proof AS', presetLabel: 'Skenario cepat', spiritPresetLabel: 'Spirit 750 ml', liqueurPresetLabel: 'Likur 700 ml', cocktailPresetLabel: 'Batch 500 ml', startingStrengthLabel: 'Kadar awal', startingVolumeLabel: 'Volume awal', targetStrengthLabel: 'Kadar target', waterToAddLabel: 'Air yang ditambahkan', finalVolumeLabel: 'Volume akhir', pureAlcoholLabel: 'Alkohol murni', ratioLabel: 'Rasio air', startingProofLabel: 'Proof awal', targetProofLabel: 'Proof target', readyMessage: 'Target lebih rendah. Ukur air lalu campurkan secara bertahap.', invalidMessage: 'Target harus lebih rendah daripada kadar awal untuk pengenceran.', largeAdditionMessage: 'Batch ini memerlukan air setidaknya sebanyak spirit. Campurkan dalam tahap dan periksa lagi.', bottleLabel: 'Botol berskala yang menunjukkan volume akhir hasil hitung', waterLayerLabel: 'Lapisan air pada campuran akhir', estimateNotice: 'Hanya perkiraan perencanaan. Alkohol dan air dapat menyusut saat dicampur, jadi periksa kadar akhir dengan alat ukur yang sesuai.', sourceLabel: 'Sumber rumus', calculateAction: 'Input pengenceran', resetAction: 'Atur ulang nilai', volumeHint: 'Pilih volume yang tersedia sebelum menambahkan air.', strengthHint: 'Proof ditampilkan sebagai proof AS: 80 proof sama dengan 40 persen alkohol.',
};
const faq = [
  { question: 'Bagaimana menghitung air untuk mengencerkan alkohol?', answer: 'Kalikan volume awal dengan kadar awal untuk mendapatkan volume alkohol murni. Bagi volume tersebut dengan kadar target dalam bentuk desimal untuk mendapatkan volume akhir teoretis. Kurangi volume awal dari volume akhir untuk menemukan jumlah air.' },
  { question: 'Apa perbedaan ABV dan proof?', answer: 'ABV adalah persentase alkohol murni berdasarkan volume. Dalam sistem proof Amerika Serikat, proof adalah dua kali ABV, sehingga 80 proof sama dengan 40 persen ABV. Pengalih proof hanya mengubah tampilan, bukan kekuatan alkohol sebenarnya.' },
  { question: 'Apakah kalkulator memperhitungkan penyusutan alkohol dan air?', answer: 'Tidak. Hasilnya adalah perkiraan berdasarkan kekekalan alkohol murni. Etanol dan air dapat menempati volume gabungan yang sedikit lebih kecil setelah dicampur, sementara suhu juga mengubah volume. Gunakan hasil ini sebagai rencana batch dan verifikasi dengan hidrometer atau metode lain.' },
  { question: 'Bisakah kalkulator ini digunakan untuk membuat produk alkohol legal?', answer: 'Alat ini hanya melakukan perhitungan dan tidak memeriksa resep, label, cukai, izin, atau peraturan setempat. Ikuti persyaratan di tempat produksi dan penjualan, serta gunakan peralatan bersih dan praktik pengukuran yang aman.' },
];
const howTo = [
  { name: 'Pilih satuan volume', text: 'Pilih mililiter metrik atau ons cairan imperial. Volume fisik tetap sama saat satuan diganti.' },
  { name: 'Masukkan batch awal', text: 'Atur kadar awal dan volume spirit yang tersedia sebelum pengenceran.' },
  { name: 'Atur kadar target', text: 'Masukkan kadar yang lebih rendah untuk campuran akhir. Target yang bukan pengenceran akan ditandai.' },
  { name: 'Tambahkan air bertahap', text: 'Baca volume air dan volume akhir, campur perlahan, lalu verifikasi kadar akhir dengan alat yang sesuai.' },
];
const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'UtilitiesApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }, inLanguage: 'id' };
export const content: ToolLocaleContent<AbvDilutionCalculatorUI> = { slug, title, description, ui, faqTitle: 'Pertanyaan tentang pengenceran', bibliographyTitle: 'Sumber rumus', faq, howTo, schemas: [faqSchema, howToSchema, appSchema], bibliography, seo: [
  { type: 'title', text: 'Cara kerja pengenceran alkohol', level: 2 },
  { type: 'paragraph', html: 'Pengenceran mengurangi konsentrasi alkohol dengan menambahkan air, sementara jumlah alkohol murni dipertahankan kurang lebih sama. <strong>Kalkulator pengenceran alkohol</strong> ini mengubah kadar dan volume awal menjadi jumlah air praktis serta volume akhir teoretis. Semua perhitungan berjalan lokal di browser tanpa mengunggah data batch.' },
  { type: 'table', headers: ['Nilai', 'Rumus', 'Makna'], rows: [['Alkohol murni', 'volume awal x kadar awal', 'Alkohol yang dibawa ke campuran'], ['Volume akhir', 'alkohol murni / kadar target', 'Total teoretis setelah pengenceran'], ['Air', 'volume akhir minus volume awal', 'Jumlah air untuk perencanaan']] },
  { type: 'title', text: 'Konversi ABV dan proof', level: 2 },
  { type: 'paragraph', html: 'Alkohol berdasarkan volume menyatakan bagian alkohol murni dalam cairan. Pada sistem Amerika Serikat, proof adalah dua kali ABV, sehingga 40 persen ABV sama dengan 80 proof. Gunakan pengalih proof sesuai label botol, tetapi perhatikan bahwa sistem proof dapat berbeda menurut negara dan sejarah.' },
  { type: 'stats', columns: 3, items: [{ value: '80 proof', label: '40 persen ABV' }, { value: '1:1', label: 'Rasio air pada skenario awal' }, { value: '100% lokal', label: 'Tidak ada data batch dikirim' }] },
  { type: 'title', text: 'Mengapa hasilnya adalah perkiraan', level: 2 },
  { type: 'paragraph', html: 'Perhitungan mempertahankan volume alkohol murni, tetapi campuran nyata tidak sepenuhnya bersifat aditif. Alkohol dan air dapat menyusut ketika bergabung, dan suhu mengubah kepadatan serta volume yang terukur. Tambahkan air perlahan, tunggu hingga suhu pengukuran tercapai, lalu periksa kadar dengan alat yang cocok.' },
  { type: 'tip', title: 'Campur perlahan dan verifikasi', html: 'Gunakan air bersih yang diukur dan wadah yang cukup besar untuk volume akhir teoretis. Kalkulator tidak mengetahui suhu, gula, perasa, atau aturan pengukuran setempat. Perlakukan jumlah air sebagai rencana awal, bukan sertifikat kadar akhir.' },
  { type: 'title', text: 'Alur pengenceran yang dapat diulang', level: 2 },
  { type: 'list', items: ['Catat kadar awal pada label dan volume batch sebenarnya.', 'Pilih kadar target yang lebih rendah daripada kadar awal.', 'Hitung alkohol murni, volume akhir, dan air.', 'Tambahkan sebagian besar air, aduk, lalu tambahkan sisanya sedikit demi sedikit.', 'Verifikasi campuran setelah mencapai suhu pengukuran.'] },
  { type: 'diagnostic', variant: 'warning', title: 'Perhitungan bukan izin produksi', html: 'Halaman ini tidak memvalidasi bahan, sanitasi, label, pajak, izin, atau penjualan legal. Jangan gunakan hasil kalkulator untuk melewati aturan yang berlaku bagi minuman atau lokasi Anda.' },
] };
