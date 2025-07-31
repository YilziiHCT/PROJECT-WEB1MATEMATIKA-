# Website Matematika SMK TI Pelita Nusantara Kediri

Website pembelajaran matematika kelas 10 dengan fokus pada algoritma, dilengkapi dengan AI Assistant dan berbagai fitur interaktif.

## 🎯 Fitur Utama

- **Materi Algoritma Lengkap**: Penjelasan konsep algoritma dengan visualisasi
- **AI Assistant**: Integrasi Gemini 2.5 Flash untuk bantuan pembelajaran
- **Kalkulator Canggih**: Dengan fitur grafik dan visualisasi
- **Kuiz Interaktif**: 15 soal dengan timer dan sertifikat digital
- **Contoh Soal**: Bank soal dengan pembahasan lengkap
- **Dark/Light Mode**: Toggle tema yang responsif
- **Responsif**: Optimal untuk desktop, tablet, dan mobile

## 🛠️ Teknologi

- **Frontend**: React.js 18 dengan TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animasi**: Framer Motion
- **Routing**: React Router
- **AI**: Google Generative AI (Gemini)
- **Charts**: Recharts
- **Icons**: Lucide React
- **Notifications**: React Hot Toast

## 👥 Tim Pengembang

- **Deren Arrafi Saputra** - Presenter 1 (DKV)
- **Rifarel Rizqienda Putra** - Presenter 2 (DKV)
- **Alif Amrullah Febrian Afgani** - Web Developer (RPL)
- **Muammar Rafael Gasela** - Website Designer (RPL)

## 🚀 Instalasi dan Pengembangan

### Prasyarat
- Node.js (versi 16 atau lebih baru)
- npm atau yarn

### Langkah Instalasi

1. **Clone repository**
   ```bash
   git clone [repository-url]
   cd mathematics-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Konfigurasi AI Assistant**
   - Buka file `src/config/ai.js`
   - Ganti `"YOUR_API_KEY"` dengan API key Gemini yang valid
   - Dapatkan API key dari [Google AI Studio](https://makersuite.google.com/)

4. **Jalankan development server**
   ```bash
   npm run dev
   ```

5. **Buka browser**
   ```
   http://localhost:5173
   ```

### Build untuk Production

```bash
npm run build
```

File hasil build akan berada di folder `dist/`.

## 📁 Struktur Folder

```
src/
├── components/          # Komponen reusable
│   ├── layout/         # Header, Footer
│   ├── ui/            # Card, Button, dll
│   └── ai/            # AI Assistant
├── pages/              # Halaman utama
├── contexts/           # React Context (Theme)
├── data/              # Data statis (soal, materi)
├── config/            # Konfigurasi (AI)
└── styles/            # CSS tambahan
```

## 🎨 Desain System

### Warna
- **Primary**: Blue (#3B82F6) to Cyan (#06B6D4)
- **Dark**: Slate 900 (#0F172A)
- **Accent**: Various gradients

### Typography
- **Font**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700, 800, 900

### Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔧 Konfigurasi

### AI Assistant
Untuk mengaktifkan AI Assistant:

1. Dapatkan API key dari Google AI Studio
2. Edit `src/config/ai.js`:
   ```javascript
   const genAI = new GoogleGenerativeAI("YOUR_ACTUAL_API_KEY");
   ```

### Environment Variables
Buat file `.env` untuk konfigurasi:
```
VITE_GEMINI_API_KEY=your_api_key_here
```

## 📱 Fitur PWA

Website ini mendukung Progressive Web App (PWA):
- Dapat diinstall di device
- Bekerja offline (cache statis)
- Responsive design

## 🧪 Testing

```bash
# Run tests
npm run test

# Run tests dengan coverage
npm run test:coverage
```

## 📦 Deployment

### Netlify (Recommended)
1. Connect repository ke Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy otomatis dari git push

### Vercel
1. Import project ke Vercel
2. Configure build settings
3. Deploy

### Manual Deployment
1. `npm run build`
2. Upload folder `dist/` ke web server
3. Configure web server untuk SPA routing

## 🐛 Troubleshooting

### AI Assistant tidak bekerja
- Pastikan API key Gemini valid
- Check console browser untuk error
- Verify network connection

### Build errors
- Hapus `node_modules` dan `package-lock.json`
- Jalankan `npm install` ulang
- Check Node.js version compatibility

### Styling issues
- Pastikan Tailwind CSS ter-compile dengan benar
- Check responsive breakpoints
- Verify dark mode implementation

## 📝 Contributing

1. Fork repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Create Pull Request

## 📄 License

Copyright © 2024 SMK TI Pelita Nusantara Kediri. All rights reserved.

## 📞 Kontak

- **Email**: info@smktipelitanusantara.sch.id
- **Telepon**: (0354) 123-4567
- **Alamat**: Jl. Raya Kediri No. 123, Kediri, Jawa Timur 64100

---

Dibuat dengan ❤️ oleh siswa SMK TI Pelita Nusantara Kediri