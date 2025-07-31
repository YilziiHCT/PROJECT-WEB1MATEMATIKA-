/**
 * Konfigurasi untuk integrasi AI Gemini 2.5 Flash
 * File ini berisi setup untuk koneksi ke Google Generative AI
 */
import { GoogleGenerativeAI } from "@google/generative-ai";

// Inisialisasi Gemini AI dengan API key
// Ganti "YOUR_API_KEY" dengan API key Gemini yang sebenarnya
const genAI = new GoogleGenerativeAI("YOUR_API_KEY");

// Konfigurasi model dan parameter
const model = genAI.getGenerativeModel({ 
  model: "gemini-2.0-flash-exp",
  generationConfig: {
    temperature: 0.7,
    topK: 40,
    topP: 0.95,
    maxOutputTokens: 1024,
  }
});

// Sistem prompt untuk matematika kelas 10
const MATH_SYSTEM_PROMPT = `
Anda adalah asisten AI untuk pembelajaran matematika kelas 10 SMK dengan fokus pada algoritma. 
Tugas Anda:
1. Menjelaskan konsep matematika dengan bahasa yang mudah dipahami
2. Memberikan contoh konkret dan langkah-langkah penyelesaian
3. Fokus pada materi algoritma, aljabar, geometri, dan statistika dasar
4. Gunakan bahasa Indonesia yang baik dan benar
5. Berikan penjelasan yang sesuai dengan kurikulum SMK

Selalu berikan jawaban yang:
- Jelas dan terstruktur
- Disertai contoh jika memungkinkan
- Sesuai dengan level pemahaman siswa kelas 10
- Mendorong pemahaman konsep, bukan hanya hafalan
`;

export { model, MATH_SYSTEM_PROMPT };