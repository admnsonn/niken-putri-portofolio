import {
  Project,
  Experience,
  SkillCategory,
  Education,
  Testimony,
} from "./types";

export const profileData = {
  name: "Niken Putri Melani, S.Pd.",
  title: "Pendidik Sekolah Dasar (Elementary Educator)",
  subTitle:
    "Lulusan S1 Pendidikan Guru Sekolah Dasar (PGSD) dari Universitas Pendidikan Indonesia (UPI)",
  location: "Sumedang, Jawa Barat",
  phone: "+62 895-7072-30104",
  email: "nikenputri095@gmail.com",
  linkedIn: "https://www.linkedin.com/in/nikenputrym/",
  profileImage: "/src/assets/images/fotoprofil.png",
  bio: "Saya adalah lulusan Sarjana Pendidikan Guru Sekolah Dasar (PGSD) dari Universitas Pendidikan Indonesia yang berdedikasi tinggi dan memiliki semangat mendalam untuk menciptakan pengalaman belajar yang interaktif, kreatif, dan menyenangkan bagi anak-anak. Saya berpengalaman dalam merancang kurikulum kreatif (termasuk implementasi Kurikulum Merdeka), menerapkan metode pengajaran berbasis teknologi edukatif (EdTech), serta membangun relasi positif dan suportif dengan siswa maupun orang tua. Memiliki kemampuan komunikasi yang sabar dan efektif, serta handal dalam manajemen kelas guna mewujudkan ekosistem belajar yang kondusif untuk mencetak generasi muda berkarakter, kreatif, dan berprestasi.",
  tagline:
    "“Membentuk karakter, menghidupkan rasa ingin tahu, dan menginspirasi setiap mimpi di ruang kelas sekolah dasar.”",
};

export const educationList: Education[] = [
  {
    degree: "Sarjana Pendidikan (S.Pd.) dalam Pendidikan Guru Sekolah Dasar",
    institution: "Universitas Pendidikan Indonesia (UPI)",
    period: "September 2020 – Agustus 2024",
    gpa: "3.81 / 4.00 (Pujian / Cum Laude)",
    highlights: [
      "Fokus kurikulum dan kompetensi pada Pedagogi Guru, Psikologi Perkembangan Anak, Desain Alat Peraga Interaktif, Kurikulum Merdeka, dan Evaluasi Hasil Belajar.",
      "Lulus dengan predikat Cum Laude (Dengan Pujian) atas pencapaian akademik konsisten dan kontribusi sosial di bidang pengajaran anak.",
      "Ujian PTESOL (English Language Test) Universitas Pendidikan Indonesia dengan skor: 437.",
    ],
  },
];

export const experienceList: Experience[] = [
  {
    id: "exp-1",
    role: 'Mahasiswa Program "Kampus Mengajar" (Kampus Merdeka Angkatan 6)',
    organization: "Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi RI",
    location: "Sekolah Dasar Penugasan, Jawa Barat",
    period: "Agustus – Desember 2023",
    badgeColor: "bg-education-500",
    highlights: [
      "Membantu meningkatkan kemampuan literasi dasar dan numerasi numerik melalui media pembelajaran interaktif untuk siswa kelas rendah dan tinggi.",
      "Merancang dan mempraktikkan rencana pelaksanaan pembelajaran (RPP) yang inovatif, disesuaikan dengan kurikulum nasional nasional terkini.",
      "Mengintegrasikan perangkat teknologi pendidikan (seperti kuis interaktif digital Chromebook) ke dalam kelas harian demi meningkatkan keterlibatan siswa.",
      "Memfasilitasi berbagai kegiatan ekstrakurikuler serta klub kreativitas anak guna membangun kepercayaan diri, keterampilan sosial, dan kepribadian siswa.",
    ],
  },
];

export const projectList: Project[] = [
  {
    id: "proj-1",
    title: "Pojok Baca Interaktif & Pohon Literasi",
    category: "Literasi & Numerasi",
    shortDescription:
      "Revitalisasi ruang baca kelas menjadi sudut literasi ramah anak dengan pajangan pohon progres membaca.",
    fullDescription:
      "Proyek Pojok Baca Interaktif dirancang khusus untuk mengatasi rendahnya minat baca siswa di sekolah penugasan Kampus Mengajar. Melalui penataan ulang ruang kelas, kami membuat zona membaca yang nyaman berlapis karpet lembut dengan koleksi buku anak yang terklasifikasi berdasarkan warna topik. Selain itu, kami memperkenalkan konsep 'Pohon Literasi' interaktif di mana setiap siswa menempelkan daun kertas bertuliskan judul buku yang telah mereka tuntaskan.",
    problem:
      "Rendahnya motivasi membaca harian murid akibat terbatasnya akses buku menarik dan suasana membaca yang kaku di dalam kelas.",
    solution:
      "Membangun sudut baca estetis ramah anak (Pojok Baca) dilengkapi bantal, dekorasi menarik, serta sistem 'Pohon Literasi' untuk memberikan apresiasi visual pada pencapaian membaca anak.",
    impact:
      "Skor literasi kelas meningkat pesat, frekuensi kunjungan membaca harian naik 75%, dan rata-rata siswa menamatkan 3 buku fiksi/edukatif per bulan selama masa program.",
    tools: [
      "Upcycled Wood",
      "Cat Ramah Anak",
      "Kertas Origami",
      "Manajemen Perpustakaan Kelas",
    ],
    imageUrl: "https://picsum.photos/seed/reading/600/450",
    achievementBadge: "Proyek Terfavorit Kampus Mengajar",
    colorTheme: "from-amber-400 to-warm-accent-500",
  },
  {
    id: "proj-2",
    title: "Fun Math Box (Media Manipulatif Numerasi)",
    category: "Alat Peraga",
    shortDescription:
      "Alat peraga fisik interaktif berbasis material daur ulang untuk memudahkan memahami aritmatika dasar konkret.",
    fullDescription:
      "Fun Math Box adalah kotak alat peraga manipulatif yang dirancang dari karton tebal dan tutup botol bekas bertuliskan angka. Media ini membantu siswa sekolah dasar menerjemahkan konsep matematika abstrak seperti penambahan bergrup, pengurangan, dan tabel perkalian sederhana menjadi aktivitas fisik menggenggam, memindahkan, dan mengelompokkan tutup botol.",
    problem:
      "Siswa kelas 2 dan 3 kesulitan memahami perkalian konsep penjumlahan abstrak berkelompok jika hanya diajarkan dengan angka tertulis di papan.",
    solution:
      "Penciptaan kotak peraga fisik dimana siswa mengoperasikan obyek langsung (tutup botol dan laci berhitung) untuk melakukan kalkulasi perkalian secara visual.",
    impact:
      "Siswa menguasai matematika perkalian dasar 1 hingga 5 secara lancar, nilai post-test numerasi dasar kelas meningkat rata-rata sebesar 35%.",
    tools: [
      "Bahan Daur Ulang",
      "Microsoft Excel (perencanaan skor)",
      "Visual Design",
      "Konkrit Terpimpin",
    ],
    imageUrl: "https://picsum.photos/seed/math/600/450",
    achievementBadge: "Inovasi Pembelajaran Kreatif",
    colorTheme: "from-education-400 to-education-600",
  },
  {
    id: "proj-3",
    title: "Quizizz Adventure: Kuis Pembelajaran Digital",
    category: "Pembelajaran Digital",
    shortDescription:
      "Evaluasi harian interaktif berbasis kuis digital dengan avatar kustom, musik, dan papan peringkat digital.",
    fullDescription:
      "Menerapkan teknologi pendidikan di sekolah melalui integrasi kuis interaktif harian di platform Quizizz dan Google Slides. Sesi permainan trivia edukatif dijalankan menggunakan proyektor kelas atau gawai Chromebook sekolah secara bergantian. Pendekatan gamifikasi ini menyulap tes tertulis yang membosankan menjadi petualangan interaktif.",
    problem:
      "Seringnya siswa merasa bosan dan cemas saat menghadapi tes lembar kerja tradisional sehingga performa evaluasi tidak maksimal.",
    solution:
      "Merubah model evaluasi formatif menjadi kuis digital interaktif berbasis elemen game (strikecount, leaderboard ramah, soundtrack kuis, dan sertifikat bintang digital).",
    impact:
      "Partisipasi kelas melonjak hingga 100%, suasana kelas sangat suportif bersemangat, dan retensi hafalan kuis sejarah/sains meningkat hingga 40%.",
    tools: ["Quizizz", "Canva Pro", "Google Slides", "Chromebook Integrasi"],
    imageUrl: "https://picsum.photos/seed/quiz/600/450",
    achievementBadge: "Integrasi Teknologi Edukatif",
    colorTheme: "from-blue-500 to-indigo-600",
  },
  {
    id: "proj-4",
    title: "Teater Kolaboratif Nusantara & Pohon Karakter s.d. P5",
    category: "Ekstrakurikuler",
    shortDescription:
      "Kegiatan pertunjukan seni drama cerita rakyat guna melatih rasa percaya diri dan menanamkan budi pekerti.",
    fullDescription:
      "Untuk mengisi aktivitas pengembangan bakat minat, proyek ini mengajak siswa kelas 4 & 5 mementaskan mini drama berdasarkan cerita rakyat Indonesia. Proyek ekstrakurikuler ini menekankan pada sinergi kerja tim, olah vokal, keberanian tampil, serta penulisan pesan moral cerita di sebuah 'Daun Kebajikan' yang kemudian dipasang di tiang kelas.",
    problem:
      "Banyak siswa memiliki hambatan berpendapat di depan umum dan kurangnya wadah aktif mengekspresikan hobi seni secara kreatif.",
    solution:
      "Menyusun skenario drama interaktif di mana setiap anak memegang peran baik sebagai pemeran, penata suara, kostum buatan sendiri, maupun narrator.",
    impact:
      "Siswa menunjukkan peningkatan luar biasa dalam rasa percaya diri saat tampil di depan publik, terbinanya sikap saling menghormati rekan antarkelas.",
    tools: [
      "Seni Drama",
      "Creative Writing",
      "Class Management",
      "Bahan Kostum Alami",
    ],
    imageUrl: "https://picsum.photos/seed/drama/600/450",
    achievementBadge: "Pengembangan Karakter Murid",
    colorTheme: "from-rose-400 to-rose-600",
  },
  {
    id: "proj-5",
    title: 'Buku Saku Digital "Cerdas Internet Sejak Dini"',
    category: "Pembelajaran Digital",
    shortDescription:
      "Penyusunan e-book panduan infografis bertema etika digital yang ramah anak sekolah dasar.",
    fullDescription:
      "Sebagai tanggapan terhadap maraknya penggunaan media sosial oleh anak-anak, saya menyusun buku panduan saku digital interaktif yang membahas aman berselancar di internet, menyaring informasi hoaks, waktu layar yang bijak, serta etika berkirim pesan. Buku ini dibagikan via grup WhatsApp orang tua dan dimanfaatkan di sela-sela literasi pagi.",
    problem:
      "Banyak siswa yang terpaku pada ponsel tanpa pembatasan siber yang aman, serta minimnya pengenalan etika digital dasar di keluarga.",
    solution:
      "Pembuatan media edukasi visual dalam bentuk e-book saku PDF/Canva berkualitas tinggi yang mudah dipahami anak-sekolah dasar dan bisa dibaca bersama orang tua di rumah.",
    impact:
      "Diadopsi oleh 3 wali kelas SD sebagai modul bacaan tambahan dan diapresiasi orang tua murid karena membantu memoderasi penggunaan HP anak di rumah.",
    tools: [
      "Canva",
      "Microsoft Word",
      "Google Drive Sharing",
      "Desain Infografis",
    ],
    imageUrl: "https://picsum.photos/seed/digitalbook/600/450",
    achievementBadge: "Modul Literasi Digital Terbaik",
    colorTheme: "from-teal-400 to-education-600",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Kompetensi Pedagogi & Kelas",
    skills: [
      "Class Management (Manajemen Kelas)",
      "Desain Kurikulum Kreatif",
      "Kurikulum Merdeka",
      "Project-Based Learning (PjBL)",
      "Psikologi Anak",
      "Asesmen dan Evaluasi Siswa",
      "Relasi Guru-Siswa-OrangTua",
    ],
    iconName: "GraduationCap",
  },
  {
    title: "Software & EdTech Tools",
    skills: [
      "Microsoft Office (Word, Excel, PowerPoint)",
      "Canva Pro for Education",
      "Quizizz & Wordwall Gamification",
      "Google Workspace (Slides, Docs, Classroom)",
      "Google Drive & Cloud File Management",
      "Junior Office Operator (BNSP Certified)",
    ],
    iconName: "Laptop",
  },
  {
    title: "Bahasa & Sertifikasi",
    skills: [
      "Bahasa Indonesia (Native/Fasih)",
      "English Language (PTESOL Score: 437)",
      "Sertifikasi Nasional BNSP (Junior Office Operator)",
      "Sertifikat Kampus Mengajar Batch 6",
    ],
    iconName: "Languages",
  },
  {
    title: "Sikap Kerja & Soft Skills",
    skills: [
      "Excellent Communication (Komunikasi Efektif)",
      "Sabar, Penyayang Anak, & Empati Tinggi",
      "Kerja Sama Tim & Kolaborasi",
      "Problem Solving (Pemecahan Masalah)",
      "Manajemen Tim",
      "Kreativitas Penyajian Materi",
    ],
    iconName: "Heart",
  },
];

export const testimonialList: Testimony[] = [
  {
    quote:
      "Mbak Niken adalah sosok pendongkrak semangat literasi yang sangat kreatif di kelas kami. Pojok Baca buatannya berhasil mengubah kebiasaan baca anak-anak dari semula malas menjadi rebutan meminjam buku selepas sekolah.",
    author: "Ibu Sulastri, S.Pd.",
    role: "Guru Pamong & Wali Kelas 4 SD",
    relationOrSchool: "Mitra Kampus Mengajar Batch 6",
  },
  {
    quote:
      "Pendekatannya yang hangat dan penggunaan teknologi kuis digital membuat anak saya selalu riang bercerita ketika pulang sekolah. Kak Niken menyajikan hitungan matematika yang biasanya ditakuti, menjadi kuis seru yang sangat dinikmati.",
    author: "Bapak Setiawan",
    role: "Orang Tua Siswa Kelas 3 SD",
    relationOrSchool: "Sumedang",
  },
  {
    quote:
      "Kak Niken mengajarkan kami teater dengan seru sekali, kami tidak takut lagi berbicara di depan panggung dan membuat pohon buah kejujuran bersama.",
    author: "Adit, dkk.",
    role: "Siswa Kelas 4 SD",
    relationOrSchool: "Sekolah Penugasan Merdeka",
  },
];
