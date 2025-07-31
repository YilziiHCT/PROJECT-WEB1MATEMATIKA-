/**
 * Data konten untuk website matematika
 * Berisi materi, soal, dan informasi tim
 */

// Data materi algoritma untuk kelas 10
export const algorithmMaterials = [
  {
    id: 1,
    title: "Pengertian Algoritma",
    content: `
      Algoritma adalah urutan langkah-langkah logis dan sistematis untuk menyelesaikan suatu masalah.
      Dalam matematika, algoritma membantu kita menyelesaikan perhitungan dengan cara yang terstruktur.
      
      Contoh sederhana: Algoritma mencari nilai terbesar dari 3 bilangan
      1. Masukkan tiga bilangan (a, b, c)
      2. Bandingkan a dengan b
      3. Ambil yang lebih besar, sebut X
      4. Bandingkan X dengan c
      5. Ambil yang lebih besar sebagai hasil akhir
    `,
    examples: ["Algoritma Euclidean untuk FPB", "Algoritma sorting", "Algoritma pencarian"]
  },
  {
    id: 2,
    title: "Jenis-jenis Algoritma",
    content: `
      1. Algoritma Sekuensial: Langkah-langkah berurutan
      2. Algoritma Percabangan: Menggunakan kondisi if-else
      3. Algoritma Perulangan: Menggunakan loop/pengulangan
      4. Algoritma Rekursif: Memanggil dirinya sendiri
    `,
    examples: ["Menghitung faktorial", "Deret Fibonacci", "Pencarian biner"]
  }
];

// Data soal pilihan ganda untuk kuiz
export const quizQuestions = [
  {
    id: 1,
    question: "Apa yang dimaksud dengan algoritma?",
    options: [
      "Sebuah program komputer",
      "Urutan langkah logis untuk menyelesaikan masalah",
      "Bahasa pemrograman",
      "Perangkat keras komputer"
    ],
    correctAnswer: 1,
    explanation: "Algoritma adalah urutan langkah-langkah logis dan sistematis untuk menyelesaikan suatu masalah."
  },
  {
    id: 2,
    question: "Manakah yang bukan merupakan ciri algoritma yang baik?",
    options: [
      "Jelas dan tidak ambigu",
      "Memiliki input dan output",
      "Kompleks dan sulit dipahami",
      "Efektif dan efisien"
    ],
    correctAnswer: 2,
    explanation: "Algoritma yang baik harus sederhana, jelas, dan mudah dipahami, bukan kompleks."
  },
  {
    id: 3,
    question: "Hasil dari 5! (5 faktorial) adalah:",
    options: ["25", "120", "100", "50"],
    correctAnswer: 1,
    explanation: "5! = 5 × 4 × 3 × 2 × 1 = 120"
  }
];

// Data contoh soal dengan pembahasan
export const practiceProblems = [
  {
    id: 1,
    level: "mudah",
    title: "Menentukan Bilangan Genap atau Ganjil",
    problem: "Buatlah algoritma untuk menentukan apakah suatu bilangan genap atau ganjil!",
    solution: `
      Algoritma:
      1. Masukkan bilangan n
      2. Hitung sisa bagi n dengan 2
      3. Jika sisa = 0, maka bilangan genap
      4. Jika sisa = 1, maka bilangan ganjil
      
      Pseudocode:
      INPUT n
      IF n MOD 2 = 0 THEN
          OUTPUT "Genap"
      ELSE
          OUTPUT "Ganjil"
      END IF
    `,
    category: "Algoritma Dasar"
  },
  {
    id: 2,
    level: "sedang",
    title: "Mencari Nilai Maksimum dari Array",
    problem: "Buatlah algoritma untuk mencari nilai terbesar dari sekumpulan bilangan!",
    solution: `
      Algoritma:
      1. Inisialisasi max dengan nilai pertama array
      2. Untuk setiap elemen dalam array:
         - Jika elemen > max, update max
      3. Return max
      
      Pseudocode:
      max = array[0]
      FOR i = 1 TO length(array)-1
          IF array[i] > max THEN
              max = array[i]
          END IF
      END FOR
      OUTPUT max
    `,
    category: "Algoritma Pencarian"
  }
];

// Data anggota tim
export const teamMembers = [
  {
    id: 1,
    name: "Deren Arrafi Saputra",
    role: "Presenter 1",
    department: "DKV (Desain Komunikasi Visual)",
    image: "images/derren.jpg",
    description: "Bertanggung jawab dalam presentasi materi dan komunikasi visual"
  },
  {
    id: 2, 
    name: "Rifarel Rizqienda Putra",
    role: "Presenter 2",
    department: "DKV (Desain Komunikasi Visual)",
    image: "/images/farel.jpg",
    description: "Mendukung presentasi dan desain konten visual"
  },
  {
    id: 3,
    name: "Alif Amrullah Febrian Afgani", 
    role: "Full Stack Web Developer",
    department: "RPL (Rekayasa Perangkat Lunak)",
    image: "/images/alif.jpg",
    description: "Mengembangkan website dan implementasi fitur-fitur teknis"
  },
  {
    id: 4,
    name: "Muammar Rafael Gasela",
    role: "Website Designer Expert", 
    department: "RPL (Rekayasa Perangkat Lunak)",
    image: "/images/rafael.jpg",
    description: "Mendesain antarmuka dan pengalaman pengguna website"
  }
];

// Data fakta menarik matematika
export const mathFacts = [
  "Angka 0 ditemukan oleh matematikawan India sekitar abad ke-5",
  "Pi (π) memiliki digit tak terhingga tanpa pola yang berulang",
  "Fibonacci sequence dapat ditemukan di alam, seperti pada bunga matahari",
  "Matematika adalah bahasa universal yang dipahami di seluruh dunia"
];

// Data math jokes
export const mathJokes = [
  {
    question: "Mengapa 6 takut pada 7?",
    answer: "Karena 7, 8 (ate), 9!"
  },
  {
    question: "Apa yang dikatakan nol kepada delapan?",
    answer: "Ikat pinggang yang bagus!"
  }
];