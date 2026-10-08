import { Agency, SurveyResponse } from '../types/survey';
import { ALL_INDONESIAN_APPLICANT_NAMES, INDONESIAN_APPLICANT_PROFILES } from './indonesianApplicantProfiles';

export const DEFAULT_AGENCIES: Agency[] = [
  { id: 'inst-1', name: 'Kejaksaan Negeri', category: 'Pelayanan Publik', active: true, order: 1 },
  { id: 'inst-2', name: 'Taspen', category: 'Pelayanan Publik', active: true, order: 2 },
  { id: 'inst-3', name: 'Dinas Perdagangan, Koperasi Dan Usaha Mikro', category: 'Pelayanan Publik', active: true, order: 3 },
  { id: 'inst-4', name: 'Dinas Perindustrian', category: 'Pelayanan Publik', active: true, order: 4 },
  { id: 'inst-5', name: 'Dinas Sosial', category: 'Pelayanan Publik', active: true, order: 5 },
  { id: 'inst-6', name: 'Kantor Pelayanan Pajak Pratama', category: 'Pelayanan Publik', active: true, order: 6 },
  { id: 'inst-7', name: 'Polres', category: 'Pelayanan Publik', active: true, order: 7 },
  { id: 'inst-8', name: 'Samsat', category: 'Pelayanan Publik', active: true, order: 8 },
  { id: 'inst-9', name: 'Bank Jatim', category: 'Pelayanan Publik', active: true, order: 9 },
  { id: 'inst-10', name: 'Bank Bri', category: 'Pelayanan Publik', active: true, order: 10 },
  { id: 'inst-11', name: 'Bank Perkreditan Rakyat', category: 'Pelayanan Publik', active: true, order: 11 },
  { id: 'inst-12', name: 'Perusahaan Daerah Air Minum', category: 'Pelayanan Publik', active: true, order: 12 },
  { id: 'inst-13', name: 'Perusahaan Listrik Negara', category: 'Pelayanan Publik', active: true, order: 13 },
  { id: 'inst-14', name: 'Kementerian Agraria Dan Tata Ruang Atau Badan Pertanahan Nasional', category: 'Pelayanan Publik', active: true, order: 14 },
  { id: 'inst-15', name: 'Kementerian Agama Republik Indonesia', category: 'Pelayanan Publik', active: true, order: 15 },
  { id: 'inst-16', name: 'Badan Penyelenggara Jaminan Sosial Ketenagakerjaan', category: 'Pelayanan Publik', active: true, order: 16 },
  { id: 'inst-17', name: 'Badan Penyelenggara Jaminan Sosial Kesehatan', category: 'Pelayanan Publik', active: true, order: 17 },
  { id: 'inst-18', name: 'Dinas Kebudayaan Dan Pariwisata', category: 'Pelayanan Publik', active: true, order: 18 },
  { id: 'inst-19', name: 'Dinas Lingkungan Hidup', category: 'Pelayanan Publik', active: true, order: 19 },
  { id: 'inst-20', name: 'Dinas Pekerjaan Umum Bina Marga', category: 'Pelayanan Publik', active: true, order: 20 },
  { id: 'inst-21', name: 'Dinas Perumahan, Kawasan Permukiman Dan Cipta Karya', category: 'Pelayanan Publik', active: true, order: 21 },
  { id: 'inst-22', name: 'Badan Pendapatan Daerah', category: 'Pelayanan Publik', active: true, order: 22 },
  { id: 'inst-23', name: 'Dinas Pendidikan Dan Kebudayaan', category: 'Pelayanan Publik', active: true, order: 23 },
  { id: 'inst-24', name: 'Pengadilan Negeri', category: 'Pelayanan Publik', active: true, order: 24 },
  { id: 'inst-25', name: 'Dinas Pekerjaan Umum Sumber Daya Air', category: 'Pelayanan Publik', active: true, order: 25 },
  { id: 'inst-26', name: 'Dinas Perhubungan', category: 'Pelayanan Publik', active: true, order: 26 },
  { id: 'inst-27', name: 'Dinas Peternakan Dan Perikanan', category: 'Pelayanan Publik', active: true, order: 27 },
  { id: 'inst-28', name: 'Pengadilan Agama', category: 'Pelayanan Publik', active: true, order: 28 },
  { id: 'inst-29', name: 'Dinas Kesehatan', category: 'Pelayanan Publik', active: true, order: 29 },
  { id: 'inst-30', name: 'Dewan Kerajinan Nasional Daerah', category: 'Pelayanan Publik', active: true, order: 30 },
  { id: 'inst-31', name: 'Dinas Kependudukan Dan Pencatatan Sipil', category: 'Pelayanan Publik', active: true, order: 31 },
  { id: 'inst-32', name: 'Dinas Penanaman Modal Dan Pelayanan Terpadu Satu Pintu', category: 'Pelayanan Publik', active: true, order: 32 }
];

export const QUICK_SUGGESTIONS = [
  '+ Inovasi pelayanan di loket sangat terasa, proses serba cepat dan ramah.',
  '+ Petugas sangat ramah, sopan, dan sigap membantu asistensi pengisian.',
  '+ Proses pelayanan di MPP Bojonegoro sangat cepat dan tepat waktu.',
  '+ Gedung dan ruang tunggu sangat nyaman, bersih, sejuk dan ber-AC.',
  '+ Informasi persyaratan dan alur layanan terpadu sangat jelas dan transparan.',
  '+ Mohon waktu antrean verifikasi di loket tetap dipertahankan kecepatannya saat jam padat.',
  '+ Layanan luar biasa mempermudah pengurusan perizinan dan dokumen pemohon!',
  '+ Ruang laktasi, pojok baca, dan fasilitas disabilitas sangat representatif.',
  '+ Loket terpadu sangat menghemat waktu, tidak perlu keliling kantor dinas.',
  '+ Sangat puas dengan transparansi biaya tanpa ada pungli sepeser pun.',
  '+ Petugas memberikan penjelasan dengan sabar dan komunikatif.',
  '+ Sistem antrean digital tertib dan teratur memudahkan pemohon.',
  '+ Fasilitas parkir luas dan petugas keamanan sangat membantu.',
  '+ Integrasi loket lintas instansi sangat efektif dan efisien.',
  '+ Pelayanan publik prima yang patut dicontoh dan terus dipertahankan.',
  '+ Prosedur sangat ringkas, berkas selesai lebih awal dari estimasi waktu.'
];

export const SAMPLE_NAMES = ALL_INDONESIAN_APPLICANT_NAMES;

export function generateSeedSurveys(): SurveyResponse[] {
  const currentYear = 2026;
  const currentMonth = 9; // October (0-indexed)
  
  // 84 Data Pemohon Komprehensif Se-Indonesia (17 Halaman, 5 Data per Halaman)
  // Mencakup seluruh 32 instansi pelayanan publik dan profil responden se-Indonesia
  const totalCount = 84;
  const suggestionsList = QUICK_SUGGESTIONS.map(s => s.replace(/^\+\s*/, ''));

  return Array.from({ length: totalCount }, (_, idx) => {
    const profile = INDONESIAN_APPLICANT_PROFILES[idx % INDONESIAN_APPLICANT_PROFILES.length];
    const agency = DEFAULT_AGENCIES[idx % DEFAULT_AGENCIES.length];
    const day = (idx < 34) ? 1 : 2; // Tanggal 1 (34 pemohon) dan Tanggal 2 (50 pemohon)
    const hour = 8 + Math.floor((idx % 18) / 2); // Rentang jam pelayanan 08:00 s.d 16:00
    const min = (idx * 7) % 60;
    const isAnon = idx === 6; // 1 data anonim sampel

    // Variasi rating realistis (sebagian besar 5 dan 4, sedikit 3)
    let rating = 5;
    if (idx % 7 === 1 || idx % 7 === 4) rating = 4;
    else if (idx === 19 || idx === 53) rating = 3;

    const feedback = suggestionsList[idx % suggestionsList.length];

    const pad = (n: number) => String(n).padStart(2, '0');
    const dayStr = pad(day);
    const monthStr = pad(currentMonth + 1);
    const hourStr = pad(hour);
    const minStr = pad(min);
    const localIso = `${currentYear}-${monthStr}-${dayStr}T${hourStr}:${minStr}:00`;
    const localDateStr = `${currentYear}-${monthStr}-${dayStr}`;
    const date = new Date(currentYear, currentMonth, day, hour, min);

    return {
      id: `seed-survey-${idx + 1}`,
      agencyId: agency.id,
      agencyName: agency.name,
      rating,
      aspectSpeed: rating,
      aspectFriendliness: rating,
      aspectClarity: rating,
      aspectFacility: rating,
      unsurPersyaratan: rating,
      unsurProsedur: rating,
      unsurWaktu: rating,
      unsurBiaya: rating,
      unsurProduk: rating,
      unsurKompetensi: rating,
      unsurPerilaku: rating,
      unsurPengaduan: rating,
      unsurKesopanan: rating,
      feedback,
      isAnonymous: isAnon,
      respondentName: isAnon ? 'Anonim (Pemohon)' : profile.name,
      gender: (isAnon ? 'Tidak Ingin Memberitahu' : profile.gender) as SurveyResponse['gender'],
      ageGroup: (isAnon ? 'Tidak Ingin Memberitahu' : profile.age) as SurveyResponse['ageGroup'],
      education: (isAnon ? 'Tidak Ingin Memberitahu' : profile.edu) as SurveyResponse['education'],
      createdAt: localIso,
      timestamp: date.getTime(),
      surveyDate: localDateStr
    };
  });
}
