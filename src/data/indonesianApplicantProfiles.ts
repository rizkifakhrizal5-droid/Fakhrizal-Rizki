import { SurveyResponse } from '../types/survey';

export interface IndonesianApplicantProfile {
  name: string;
  gender: SurveyResponse['gender'];
  age: SurveyResponse['ageGroup'];
  edu: SurveyResponse['education'];
  region: string;
}

/**
 * Data komprehensif profil pemohon pelayanan publik se-Indonesia.
 * Mencakup representasi nama, jenis kelamin, kelompok usia, dan jenjang pendidikan terakhir
 * dari seluruh 38 provinsi dan suku bangsa di Indonesia:
 * Sumatera, Jawa, Sunda, Betawi, Bali, NTB, NTT, Kalimantan, Sulawesi, Maluku, dan Papua.
 */
export const INDONESIAN_APPLICANT_PROFILES: IndonesianApplicantProfile[] = [
  // ==========================================
  // 1. JAWA TIMUR (Bojonegoro, Surabaya, Malang, Madura, dll.)
  // ==========================================
  { name: 'Lilik Indrawati', gender: 'Perempuan', age: '36 - 45 Tahun', edu: 'Sarjana (S1)', region: 'Jawa Timur (Bojonegoro)' },
  { name: 'Budi Santoso', gender: 'Laki-laki', age: '46 - 60 Tahun', edu: 'SMA/SMK Sederajat', region: 'Jawa Timur (Bojonegoro)' },
  { name: 'Ika Yuliana', gender: 'Perempuan', age: '20 - 35 Tahun', edu: 'SMA/SMK Sederajat', region: 'Jawa Timur (Bojonegoro)' },
  { name: 'Lukman Hakim', gender: 'Laki-laki', age: '20 - 35 Tahun', edu: 'Sarjana (S1)', region: 'Jawa Timur (Surabaya)' },
  { name: 'Siti Rahmawati', gender: 'Perempuan', age: '20 - 35 Tahun', edu: 'Sarjana (S1)', region: 'Jawa Timur (Bojonegoro)' },
  { name: 'Tri Wahyuni', gender: 'Perempuan', age: '36 - 45 Tahun', edu: 'SMA/SMK Sederajat', region: 'Jawa Timur (Tuban)' },
  { name: 'Endang Sulastri', gender: 'Perempuan', age: '46 - 60 Tahun', edu: 'SMA/SMK Sederajat', region: 'Jawa Timur (Lamongan)' },
  { name: 'Danang Saputra', gender: 'Laki-laki', age: '20 - 35 Tahun', edu: 'Sarjana (S1)', region: 'Jawa Timur (Bojonegoro)' },
  { name: 'Retno Wulandari', gender: 'Perempuan', age: '36 - 45 Tahun', edu: 'Sarjana (S1)', region: 'Jawa Timur (Malang)' },
  { name: 'Totok Wibisono', gender: 'Laki-laki', age: '46 - 60 Tahun', edu: 'SMA/SMK Sederajat', region: 'Jawa Timur (Bojonegoro)' },
  { name: 'Hendro Siswanto', gender: 'Laki-laki', age: '46 - 60 Tahun', edu: 'Diploma (D1-D4)', region: 'Jawa Timur (Bojonegoro)' },
  { name: 'Bayu Wicaksono', gender: 'Laki-laki', age: '36 - 45 Tahun', edu: 'Sarjana (S1)', region: 'Jawa Timur (Bojonegoro)' },
  { name: 'Supriyanto', gender: 'Laki-laki', age: '46 - 60 Tahun', edu: 'SMP Sederajat', region: 'Jawa Timur (Bojonegoro)' },
  { name: 'Achmad Syaifullah', gender: 'Laki-laki', age: '20 - 35 Tahun', edu: 'Sarjana (S1)', region: 'Jawa Timur (Madura/Bangkalan)' },
  { name: 'Fathur Rozi', gender: 'Laki-laki', age: '36 - 45 Tahun', edu: 'SMA/SMK Sederajat', region: 'Jawa Timur (Madura/Pamekasan)' },
  { name: 'Umi Kulsum', gender: 'Perempuan', age: '46 - 60 Tahun', edu: 'SD Sederajat', region: 'Jawa Timur (Bojonegoro)' },
  { name: 'Nurul Hidayati', gender: 'Perempuan', age: '20 - 35 Tahun', edu: 'Diploma (D1-D4)', region: 'Jawa Timur (Kediri)' },
  { name: 'Dimas Prasetyo', gender: 'Laki-laki', age: '< 20 Tahun', edu: 'SMA/SMK Sederajat', region: 'Jawa Timur (Bojonegoro)' },

  // ==========================================
  // 2. JAWA TENGAH & D.I. YOGYAKARTA
  // ==========================================
  { name: 'Yoga Prasetya', gender: 'Laki-laki', age: '20 - 35 Tahun', edu: 'Diploma (D1-D4)', region: 'Jawa Tengah (Solo)' },
  { name: 'Eko Purwanto', gender: 'Laki-laki', age: '46 - 60 Tahun', edu: 'Sarjana (S1)', region: 'Jawa Tengah (Semarang)' },
  { name: 'Bambang Susilo', gender: 'Laki-laki', age: '46 - 60 Tahun', edu: 'Sarjana (S1)', region: 'D.I. Yogyakarta' },
  { name: 'Agus Setiawan', gender: 'Laki-laki', age: '36 - 45 Tahun', edu: 'Sarjana (S1)', region: 'Jawa Tengah (Magelang)' },
  { name: 'Sri Utami', gender: 'Perempuan', age: '20 - 35 Tahun', edu: 'Sarjana (S1)', region: 'Jawa Tengah (Klaten)' },
  { name: 'Slamet Riyadi', gender: 'Laki-laki', age: '> 60 Tahun', edu: 'SMA/SMK Sederajat', region: 'Jawa Tengah (Solo)' },
  { name: 'Anisa Fitriani', gender: 'Perempuan', age: '20 - 35 Tahun', edu: 'Sarjana (S1)', region: 'D.I. Yogyakarta (Sleman)' },
  { name: 'Raden Mas Bagus Nugroho', gender: 'Laki-laki', age: '36 - 45 Tahun', edu: 'Pascasarjana (S2/S3)', region: 'D.I. Yogyakarta' },
  { name: 'Widodo Martono', gender: 'Laki-laki', age: '46 - 60 Tahun', edu: 'SMA/SMK Sederajat', region: 'Jawa Tengah (Banyumas)' },
  { name: 'Dewi Sekar Sari', gender: 'Perempuan', age: '20 - 35 Tahun', edu: 'Sarjana (S1)', region: 'Jawa Tengah (Kudus)' },

  // ==========================================
  // 3. SUNDA & BANTEN (JAWA BARAT & BANTEN)
  // ==========================================
  { name: 'Asep Saepudin', gender: 'Laki-laki', age: '36 - 45 Tahun', edu: 'Sarjana (S1)', region: 'Jawa Barat (Bandung)' },
  { name: 'Neneng Hasanah', gender: 'Perempuan', age: '20 - 35 Tahun', edu: 'Diploma (D1-D4)', region: 'Jawa Barat (Garut)' },
  { name: 'Cecep Hidayat', gender: 'Laki-laki', age: '46 - 60 Tahun', edu: 'SMA/SMK Sederajat', region: 'Jawa Barat (Tasikmalaya)' },
  { name: 'Ai Ratnasari', gender: 'Perempuan', age: '20 - 35 Tahun', edu: 'Sarjana (S1)', region: 'Jawa Barat (Cianjur)' },
  { name: 'Dadang Suherman', gender: 'Laki-laki', age: '46 - 60 Tahun', edu: 'Sarjana (S1)', region: 'Jawa Barat (Bogor)' },
  { name: 'Eneng Nurhasanah', gender: 'Perempuan', age: '36 - 45 Tahun', edu: 'SMA/SMK Sederajat', region: 'Banten (Serang)' },
  { name: 'Wildan Pratama', gender: 'Laki-laki', age: '20 - 35 Tahun', edu: 'Sarjana (S1)', region: 'Jawa Barat (Cirebon)' },
  { name: 'Siti Rohimah', gender: 'Perempuan', age: '46 - 60 Tahun', edu: 'SD Sederajat', region: 'Jawa Barat (Sukabumi)' },
  { name: 'Tubagus Maulana', gender: 'Laki-laki', age: '36 - 45 Tahun', edu: 'Sarjana (S1)', region: 'Banten (Pandeglang)' },
  { name: 'Ratu Atikah', gender: 'Perempuan', age: '20 - 35 Tahun', edu: 'Diploma (D1-D4)', region: 'Banten (Lebak)' },

  // ==========================================
  // 4. BETAWI & DKI JAKARTA
  // ==========================================
  { name: 'Fadillah Akbar', gender: 'Laki-laki', age: '20 - 35 Tahun', edu: 'Sarjana (S1)', region: 'DKI Jakarta (Betawi)' },
  { name: 'Zaenab Romlah', gender: 'Perempuan', age: '36 - 45 Tahun', edu: 'SMA/SMK Sederajat', region: 'DKI Jakarta (Betawi)' },
  { name: 'Zainuddin Mansyur', gender: 'Laki-laki', age: '46 - 60 Tahun', edu: 'Diploma (D1-D4)', region: 'DKI Jakarta (Betawi)' },
  { name: 'Mulyadi Kurnia', gender: 'Laki-laki', age: '20 - 35 Tahun', edu: 'SMA/SMK Sederajat', region: 'DKI Jakarta (Betawi)' },
  { name: 'Nadia Salsabila', gender: 'Perempuan', age: '< 20 Tahun', edu: 'SMA/SMK Sederajat', region: 'DKI Jakarta' },

  // ==========================================
  // 5. SUMATERA UTARA (Batak Toba, Karo, Mandailing, Melayu, Nias)
  // ==========================================
  { name: 'Poltak Simanjuntak', gender: 'Laki-laki', age: '36 - 45 Tahun', edu: 'Sarjana (S1)', region: 'Sumatera Utara (Batak Toba)' },
  { name: 'Tiurma boru Pasaribu', gender: 'Perempuan', age: '20 - 35 Tahun', edu: 'Sarjana (S1)', region: 'Sumatera Utara (Batak Toba)' },
  { name: 'Hotman Siregar', gender: 'Laki-laki', age: '46 - 60 Tahun', edu: 'Pascasarjana (S2/S3)', region: 'Sumatera Utara (Batak)' },
  { name: 'Nurhalimah Harahap', gender: 'Perempuan', age: '36 - 45 Tahun', edu: 'Sarjana (S1)', region: 'Sumatera Utara (Mandailing)' },
  { name: 'Daniel Tarigan', gender: 'Laki-laki', age: '20 - 35 Tahun', edu: 'Diploma (D1-D4)', region: 'Sumatera Utara (Karo)' },
  { name: 'Binsar Pandiangan', gender: 'Laki-laki', age: '36 - 45 Tahun', edu: 'Sarjana (S1)', region: 'Sumatera Utara (Samosir)' },
  { name: 'Rosalina Ginting', gender: 'Perempuan', age: '20 - 35 Tahun', edu: 'Sarjana (S1)', region: 'Sumatera Utara (Karo)' },
  { name: 'Tengku Muhammad Syawal', gender: 'Laki-laki', age: '36 - 45 Tahun', edu: 'Sarjana (S1)', region: 'Sumatera Utara (Melayu Deli)' },
  { name: 'Yaatulo Zega', gender: 'Laki-laki', age: '20 - 35 Tahun', edu: 'SMA/SMK Sederajat', region: 'Sumatera Utara (Nias)' },
  { name: 'Murniwati Halawa', gender: 'Perempuan', age: '20 - 35 Tahun', edu: 'Diploma (D1-D4)', region: 'Sumatera Utara (Nias)' },

  // ==========================================
  // 6. SUMATERA BARAT (Minangkabau)
  // ==========================================
  { name: 'Fauzi Tanjung', gender: 'Laki-laki', age: '36 - 45 Tahun', edu: 'Sarjana (S1)', region: 'Sumatera Barat (Padang)' },
  { name: 'Fitriani Piliang', gender: 'Perempuan', age: '20 - 35 Tahun', edu: 'Sarjana (S1)', region: 'Sumatera Barat (Bukittinggi)' },
  { name: 'Zulhendri Sutan Marajo', gender: 'Laki-laki', age: '46 - 60 Tahun', edu: 'Pascasarjana (S2/S3)', region: 'Sumatera Barat (Payakumbuh)' },
  { name: 'Deswita Maharani', gender: 'Perempuan', age: '20 - 35 Tahun', edu: 'Diploma (D1-D4)', region: 'Sumatera Barat (Solok)' },
  { name: 'Rahmat Hidayat Guci', gender: 'Laki-laki', age: '20 - 35 Tahun', edu: 'SMA/SMK Sederajat', region: 'Sumatera Barat (Pariaman)' },
  { name: 'Elvi Sukaesih Chaniago', gender: 'Perempuan', age: '36 - 45 Tahun', edu: 'Sarjana (S1)', region: 'Sumatera Barat (Agam)' },

  // ==========================================
  // 7. ACEH
  // ==========================================
  { name: 'Teuku Cut Meurah', gender: 'Laki-laki', age: '36 - 45 Tahun', edu: 'Sarjana (S1)', region: 'Aceh (Banda Aceh)' },
  { name: 'Cut Nyak Safitri', gender: 'Perempuan', age: '20 - 35 Tahun', edu: 'Sarjana (S1)', region: 'Aceh (Pidie)' },
  { name: 'Faisal Iskandar', gender: 'Laki-laki', age: '46 - 60 Tahun', edu: 'Sarjana (S1)', region: 'Aceh (Lhokseumawe)' },
  { name: 'Nurul Asyiqin', gender: 'Perempuan', age: '20 - 35 Tahun', edu: 'Diploma (D1-D4)', region: 'Aceh (Aceh Barat)' },
  { name: 'Munawir Gayo', gender: 'Laki-laki', age: '36 - 45 Tahun', edu: 'Sarjana (S1)', region: 'Aceh (Takengon/Gayo)' },

  // ==========================================
  // 8. RIAU & KEPULAUAN RIAU (Melayu)
  // ==========================================
  { name: 'Raja Syahputra', gender: 'Laki-laki', age: '20 - 35 Tahun', edu: 'Sarjana (S1)', region: 'Riau (Pekanbaru)' },
  { name: 'Wan Nurhaliza', gender: 'Perempuan', age: '20 - 35 Tahun', edu: 'Diploma (D1-D4)', region: 'Kepulauan Riau (Tanjungpinang)' },
  { name: 'Tengku Azhar', gender: 'Laki-laki', age: '46 - 60 Tahun', edu: 'Sarjana (S1)', region: 'Kepulauan Riau (Batam)' },
  { name: 'Megawati Melayu', gender: 'Perempuan', age: '36 - 45 Tahun', edu: 'Sarjana (S1)', region: 'Riau (Siak)' },

  // ==========================================
  // 9. SUMATERA SELATAN, JAMBI, BENGKULU, LAMPUNG, BANGKA BELITUNG
  // ==========================================
  { name: 'Kemas Faisal', gender: 'Laki-laki', age: '36 - 45 Tahun', edu: 'Sarjana (S1)', region: 'Sumatera Selatan (Palembang)' },
  { name: 'Nyimas Farida', gender: 'Perempuan', age: '20 - 35 Tahun', edu: 'Sarjana (S1)', region: 'Sumatera Selatan (Palembang)' },
  { name: 'Ridho Kurniawan', gender: 'Laki-laki', age: '20 - 35 Tahun', edu: 'SMA/SMK Sederajat', region: 'Lampung (Bandar Lampung)' },
  { name: 'Devi Anggraini', gender: 'Perempuan', age: '20 - 35 Tahun', edu: 'Diploma (D1-D4)', region: 'Bengkulu' },
  { name: 'Raden Jambi Alamsyah', gender: 'Laki-laki', age: '36 - 45 Tahun', edu: 'Sarjana (S1)', region: 'Jambi' },
  { name: 'Suhartini Belitung', gender: 'Perempuan', age: '46 - 60 Tahun', edu: 'SMA/SMK Sederajat', region: 'Bangka Belitung (Pangkalpinang)' },

  // ==========================================
  // 10. BALI
  // ==========================================
  { name: 'I Gede Putu Arya', gender: 'Laki-laki', age: '20 - 35 Tahun', edu: 'Sarjana (S1)', region: 'Bali (Denpasar)' },
  { name: 'Ni Luh Putu Anggreni', gender: 'Perempuan', age: '20 - 35 Tahun', edu: 'Sarjana (S1)', region: 'Bali (Badung)' },
  { name: 'I Wayan Sudarta', gender: 'Laki-laki', age: '46 - 60 Tahun', edu: 'SMA/SMK Sederajat', region: 'Bali (Gianyar)' },
  { name: 'Ni Made Suartini', gender: 'Perempuan', age: '36 - 45 Tahun', edu: 'Diploma (D1-D4)', region: 'Bali (Tabanan)' },
  { name: 'I Ketut Sudiarsa', gender: 'Laki-laki', age: '36 - 45 Tahun', edu: 'Sarjana (S1)', region: 'Bali (Singaraja)' },
  { name: 'Ni Kadek Dwi Lestari', gender: 'Perempuan', age: '< 20 Tahun', edu: 'SMA/SMK Sederajat', region: 'Bali (Klungkung)' },
  { name: 'I Nyoman Wiranata', gender: 'Laki-laki', age: '20 - 35 Tahun', edu: 'Sarjana (S1)', region: 'Bali (Karangasem)' },

  // ==========================================
  // 11. NUSA TENGGARA BARAT (Sasak, Samawa, Mbojo)
  // ==========================================
  { name: 'Lalu Muhammad Zohri', gender: 'Laki-laki', age: '20 - 35 Tahun', edu: 'Sarjana (S1)', region: 'NTB (Sasak Lombok)' },
  { name: 'Baiq Nurjanah', gender: 'Perempuan', age: '20 - 35 Tahun', edu: 'Sarjana (S1)', region: 'NTB (Sasak Lombok)' },
  { name: 'Lalu Syamsul Hadi', gender: 'Laki-laki', age: '46 - 60 Tahun', edu: 'Diploma (D1-D4)', region: 'NTB (Lombok Timur)' },
  { name: 'Syarifuddin Mbojo', gender: 'Laki-laki', age: '36 - 45 Tahun', edu: 'SMA/SMK Sederajat', region: 'NTB (Bima)' },
  { name: 'Fatimah Samawa', gender: 'Perempuan', age: '20 - 35 Tahun', edu: 'Sarjana (S1)', region: 'NTB (Sumbawa)' },

  // ==========================================
  // 12. NUSA TENGGARA TIMUR (Flores, Timor, Sumba, Rote, Alor)
  // ==========================================
  { name: 'Fransiskus Xaverius Seda', gender: 'Laki-laki', age: '36 - 45 Tahun', edu: 'Sarjana (S1)', region: 'NTT (Flores/Ende)' },
  { name: 'Maria Goreti da Silva', gender: 'Perempuan', age: '20 - 35 Tahun', edu: 'Diploma (D1-D4)', region: 'NTT (Timor/Kupang)' },
  { name: 'Yohanis Kaka', gender: 'Laki-laki', age: '46 - 60 Tahun', edu: 'SMA/SMK Sederajat', region: 'NTT (Sumba Barat)' },
  { name: 'Kristina Lero', gender: 'Perempuan', age: '20 - 35 Tahun', edu: 'Sarjana (S1)', region: 'NTT (Flores/Maumere)' },
  { name: 'Emanuel Bria', gender: 'Laki-laki', age: '20 - 35 Tahun', edu: 'Sarjana (S1)', region: 'NTT (Belu/Atambua)' },
  { name: 'Cornelis Nalle', gender: 'Laki-laki', age: '46 - 60 Tahun', edu: 'SMA/SMK Sederajat', region: 'NTT (Rote Ndao)' },
  { name: 'Theresia Manggarai', gender: 'Perempuan', age: '36 - 45 Tahun', edu: 'Sarjana (S1)', region: 'NTT (Manggarai)' },

  // ==========================================
  // 13. KALIMANTAN (Dayak, Banjar, Kutai, Melayu)
  // ==========================================
  { name: 'Gusti Muhammad Arsyad', gender: 'Laki-laki', age: '36 - 45 Tahun', edu: 'Sarjana (S1)', region: 'Kalimantan Selatan (Banjar)' },
  { name: 'Norhasanah Banjar', gender: 'Perempuan', age: '20 - 35 Tahun', edu: 'Sarjana (S1)', region: 'Kalimantan Selatan (Banjarmasin)' },
  { name: 'Yohanes Lawing Aken', gender: 'Laki-laki', age: '20 - 35 Tahun', edu: 'Diploma (D1-D4)', region: 'Kalimantan Barat (Dayak)' },
  { name: 'Anastasia Bua Tingang', gender: 'Perempuan', age: '20 - 35 Tahun', edu: 'Sarjana (S1)', region: 'Kalimantan Tengah (Palangka Raya)' },
  { name: 'Darlan Syahrani', gender: 'Laki-laki', age: '46 - 60 Tahun', edu: 'SMA/SMK Sederajat', region: 'Kalimantan Timur (Kutai)' },
  { name: 'Siti Aisyah Barito', gender: 'Perempuan', age: '36 - 45 Tahun', edu: 'Diploma (D1-D4)', region: 'Kalimantan Selatan (Barito)' },
  { name: 'Hendrikus Simpai', gender: 'Laki-laki', age: '36 - 45 Tahun', edu: 'Sarjana (S1)', region: 'Kalimantan Barat (Kapuas Hulu)' },
  { name: 'Nurul Fadillah Tarakan', gender: 'Perempuan', age: '20 - 35 Tahun', edu: 'Sarjana (S1)', region: 'Kalimantan Utara (Tarakan)' },
  { name: 'Bambang Irawan Mahakam', gender: 'Laki-laki', age: '20 - 35 Tahun', edu: 'SMA/SMK Sederajat', region: 'Kalimantan Timur (Samarinda)' },

  // ==========================================
  // 14. SULAWESI SELATAN & BARAT (Bugis, Makassar, Toraja, Mandar)
  // ==========================================
  { name: 'Andi Muh. Baso', gender: 'Laki-laki', age: '36 - 45 Tahun', edu: 'Pascasarjana (S2/S3)', region: 'Sulawesi Selatan (Bugis/Bone)' },
  { name: 'Andi Tenri Abeng', gender: 'Perempuan', age: '20 - 35 Tahun', edu: 'Sarjana (S1)', region: 'Sulawesi Selatan (Bugis/Wajo)' },
  { name: 'Syahrul Daeng Bau', gender: 'Laki-laki', age: '46 - 60 Tahun', edu: 'SMA/SMK Sederajat', region: 'Sulawesi Selatan (Makassar)' },
  { name: 'Hasnawati Daeng Rannu', gender: 'Perempuan', age: '20 - 35 Tahun', edu: 'Diploma (D1-D4)', region: 'Sulawesi Selatan (Gowa)' },
  { name: 'Marthinus Ranteallo', gender: 'Laki-laki', age: '36 - 45 Tahun', edu: 'Sarjana (S1)', region: 'Sulawesi Selatan (Toraja)' },
  { name: 'Nelce Sombolinggi', gender: 'Perempuan', age: '20 - 35 Tahun', edu: 'Sarjana (S1)', region: 'Sulawesi Selatan (Toraja)' },
  { name: 'Muhammad Rusdi Mandar', gender: 'Laki-laki', age: '36 - 45 Tahun', edu: 'Sarjana (S1)', region: 'Sulawesi Barat (Polewali Mandar)' },
  { name: 'Sitti Rahmah Majene', gender: 'Perempuan', age: '20 - 35 Tahun', edu: 'Diploma (D1-D4)', region: 'Sulawesi Barat (Majene)' },

  // ==========================================
  // 15. SULAWESI UTARA & GORONTALO (Minahasa, Bolaang Mongondow, Gorontalo)
  // ==========================================
  { name: 'Christian Toar Wenas', gender: 'Laki-laki', age: '20 - 35 Tahun', edu: 'Sarjana (S1)', region: 'Sulawesi Utara (Minahasa/Manado)' },
  { name: 'Meyke Pangemanan', gender: 'Perempuan', age: '36 - 45 Tahun', edu: 'Sarjana (S1)', region: 'Sulawesi Utara (Minahasa)' },
  { name: 'Stevanus Kaligis', gender: 'Laki-laki', age: '46 - 60 Tahun', edu: 'Sarjana (S1)', region: 'Sulawesi Utara (Tomohon)' },
  { name: 'Grace Sondakh', gender: 'Perempuan', age: '20 - 35 Tahun', edu: 'Diploma (D1-D4)', region: 'Sulawesi Utara (Minahasa)' },
  { name: 'Mohamad Diko Monoarfa', gender: 'Laki-laki', age: '36 - 45 Tahun', edu: 'Sarjana (S1)', region: 'Gorontalo' },
  { name: 'Suhartini Gobel', gender: 'Perempuan', age: '20 - 35 Tahun', edu: 'Sarjana (S1)', region: 'Gorontalo' },

  // ==========================================
  // 16. SULAWESI TENGGARA & TENGAH (Buton, Tolaki, Kaili, Banggai)
  // ==========================================
  { name: 'La Ode Rusdi', gender: 'Laki-laki', age: '36 - 45 Tahun', edu: 'Sarjana (S1)', region: 'Sulawesi Tenggara (Buton/Baubau)' },
  { name: 'Wa Ode Nurma', gender: 'Perempuan', age: '20 - 35 Tahun', edu: 'Sarjana (S1)', region: 'Sulawesi Tenggara (Muna)' },
  { name: 'Ilham Kaili Pratama', gender: 'Laki-laki', age: '20 - 35 Tahun', edu: 'SMA/SMK Sederajat', region: 'Sulawesi Tengah (Palu)' },
  { name: 'Asriani Tolaki', gender: 'Perempuan', age: '36 - 45 Tahun', edu: 'Diploma (D1-D4)', region: 'Sulawesi Tenggara (Kendari)' },
  { name: 'Ahmad Luwuk Banggai', gender: 'Laki-laki', age: '20 - 35 Tahun', edu: 'Sarjana (S1)', region: 'Sulawesi Tengah (Banggai)' },

  // ==========================================
  // 17. MALUKU & MALUKU UTARA (Ambon, Ternate, Tidore, Kei)
  // ==========================================
  { name: 'Dominggus Pattinasarany', gender: 'Laki-laki', age: '36 - 45 Tahun', edu: 'Sarjana (S1)', region: 'Maluku (Ambon)' },
  { name: 'Martha Tetelepta', gender: 'Perempuan', age: '20 - 35 Tahun', edu: 'Sarjana (S1)', region: 'Maluku (Ambon)' },
  { name: 'Johanis Latuconsina', gender: 'Laki-laki', age: '46 - 60 Tahun', edu: 'Sarjana (S1)', region: 'Maluku (Ambon)' },
  { name: 'Helena Sahertian', gender: 'Perempuan', age: '20 - 35 Tahun', edu: 'Diploma (D1-D4)', region: 'Maluku (Saparua)' },
  { name: 'Jafar Sidik Tidore', gender: 'Laki-laki', age: '36 - 45 Tahun', edu: 'SMA/SMK Sederajat', region: 'Maluku Utara (Tidore)' },
  { name: 'Khadijah Ternate', gender: 'Perempuan', age: '20 - 35 Tahun', edu: 'Sarjana (S1)', region: 'Maluku Utara (Ternate)' },
  { name: 'Petrus Renwarin', gender: 'Laki-laki', age: '36 - 45 Tahun', edu: 'Sarjana (S1)', region: 'Maluku (Kei/Tual)' },

  // ==========================================
  // 18. PAPUA SE-TANAH PAPUA (6 Provinsi Papua: Induk, Barat, Barat Daya, Tengah, Pegunungan, Selatan)
  // ==========================================
  { name: 'Markus Wanma', gender: 'Laki-laki', age: '36 - 45 Tahun', edu: 'Sarjana (S1)', region: 'Papua (Biak Numfor)' },
  { name: 'Yuliana Tabuni', gender: 'Perempuan', age: '20 - 35 Tahun', edu: 'Sarjana (S1)', region: 'Papua Pegunungan (Jayawijaya/Wamena)' },
  { name: 'Fransiscus Kambuaya', gender: 'Laki-laki', age: '20 - 35 Tahun', edu: 'Diploma (D1-D4)', region: 'Papua Barat Daya (Sorong)' },
  { name: 'Yohana Rumbewas', gender: 'Perempuan', age: '20 - 35 Tahun', edu: 'Sarjana (S1)', region: 'Papua (Jayapura)' },
  { name: 'Obeth Matuan', gender: 'Laki-laki', age: '46 - 60 Tahun', edu: 'SMA/SMK Sederajat', region: 'Papua Pegunungan (Tolikara)' },
  { name: 'Yakobus Degei', gender: 'Laki-laki', age: '36 - 45 Tahun', edu: 'Sarjana (S1)', region: 'Papua Tengah (Paniai)' },
  { name: 'Naomi Kogoya', gender: 'Perempuan', age: '< 20 Tahun', edu: 'SMA/SMK Sederajat', region: 'Papua Pegunungan (Lanny Jaya)' },
  { name: 'Barnabas Mandacan', gender: 'Laki-laki', age: '46 - 60 Tahun', edu: 'Sarjana (S1)', region: 'Papua Barat (Manokwari)' },
  { name: 'Maria Asmat Gebze', gender: 'Perempuan', age: '20 - 35 Tahun', edu: 'Diploma (D1-D4)', region: 'Papua Selatan (Merauke)' },
  { name: 'Albertus Timika Beanal', gender: 'Laki-laki', age: '36 - 45 Tahun', edu: 'Sarjana (S1)', region: 'Papua Tengah (Mimika/Timika)' },
  { name: 'Ruth Raja Ampat Sauyai', gender: 'Perempuan', age: '20 - 35 Tahun', edu: 'Sarjana (S1)', region: 'Papua Barat Daya (Raja Ampat)' },
  { name: 'Karel Sentani Awi', gender: 'Laki-laki', age: '36 - 45 Tahun', edu: 'SMA/SMK Sederajat', region: 'Papua (Sentani)' }
];

export const ALL_INDONESIAN_APPLICANT_NAMES = INDONESIAN_APPLICANT_PROFILES.map((p) => p.name);
