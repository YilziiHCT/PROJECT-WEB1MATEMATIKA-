/**
 * Halaman kontak dengan informasi sekolah
 */
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare } from 'lucide-react';
import Card from '../components/ui/Card';
import toast from 'react-hot-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulasi pengiriman pesan
    toast.success('Pesan berhasil dikirim! Tim kami akan segera merespons.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Alamat Sekolah',
      content: 'Jl. Raya Kediri No. 123, Kediri, Jawa Timur 64100',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Phone,
      title: 'Telepon',
      content: '6281252257925',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'smkti@gmail.com',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Clock,
      title: 'Jam Operasional',
      content: 'Senin - Jumat: 07:00 - 15:00 WIB',
      color: 'from-purple-500 to-indigo-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-cyan-50 dark:from-dark-900 dark:to-dark-800 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center bg-primary-100 dark:bg-primary-900/50 px-4 py-2 rounded-full text-primary-700 dark:text-primary-300 text-sm font-medium mb-6">
            <MessageSquare className="h-4 w-4 mr-2" />
            Hubungi Kami
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-dark-900 dark:text-white mb-4">
            Kontak
          </h1>
          <p className="text-xl text-dark-600 dark:text-dark-300 max-w-3xl mx-auto">
            Punya pertanyaan tentang matematika atau website ini? Jangan ragu untuk menghubungi kami. 
            Tim SMK TI Pelita Nusantara siap membantu!
          </p>
        </motion.div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <Card className="p-6 text-center h-full hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${info.color} flex items-center justify-center`}>
                  <info.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-dark-900 dark:text-white mb-2">
                  {info.title}
                </h3>
                <p className="text-dark-600 dark:text-dark-300 text-sm leading-relaxed">
                  {info.content}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-dark-900 dark:text-white mb-2">
                Kirim Pesan
              </h2>
              <p className="text-dark-600 dark:text-dark-300 mb-6">
                Isi form di bawah ini untuk mengirim pesan kepada kami
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-dark-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-800 text-dark-900 dark:text-white placeholder-dark-500 dark:placeholder-dark-400"
                      placeholder="Masukkan nama lengkap"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-dark-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-800 text-dark-900 dark:text-white placeholder-dark-500 dark:placeholder-dark-400"
                      placeholder="owner@alif.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                    Subjek
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-dark-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-800 text-dark-900 dark:text-white placeholder-dark-500 dark:placeholder-dark-400"
                    placeholder="Judul pesan"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                    Pesan
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-dark-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-800 text-dark-900 dark:text-white placeholder-dark-500 dark:placeholder-dark-400 resize-none"
                    placeholder="Tulis pesan Anda di sini..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary-600 to-cyan-500 hover:from-primary-700 hover:to-cyan-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Kirim Pesan</span>
                </button>
              </form>
            </Card>
          </motion.div>

          {/* School Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="space-y-8"
          >
            {/* School Info */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-dark-900 dark:text-white mb-6">
                SMK TI Pelita Nusantara Kediri
              </h2>
              
              <div className="space-y-4 mb-6">
                <p className="text-dark-600 dark:text-dark-300 leading-relaxed">
                  Sekolah Menengah Kejuruan yang berfokus pada pendidikan Teknologi Informasi, 
                  mempersiapkan siswa dengan keahlian praktis dan teoretis di bidang IT.
                </p>
                
                <div className="bg-primary-50 dark:bg-primary-900/20 p-4 rounded-lg">
                  <h3 className="font-semibold text-primary-700 dark:text-primary-300 mb-2">
                    Program Keahlian:
                  </h3>
                  <ul className="text-sm text-primary-600 dark:text-primary-400 space-y-1">
                    <li>• Rekayasa Perangkat Lunak (RPL)</li>
                    <li>• Desain Komunikasi Visual (DKV)</li>
                    <li>• Teknik Komputer dan Jaringan (TKJ)</li>
                    <li>• Multimedia</li>
                  </ul>
                </div>
              </div>

              <div className="border-t border-dark-200 dark:border-dark-600 pt-6">
                <h3 className="font-semibold text-dark-900 dark:text-white mb-4">
                  Media Sosial
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="https://instagram.com/yilzi_dominan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-lg hover:from-pink-600 hover:to-purple-600 transition-all duration-200 transform hover:scale-105"
                  >
                    <span>Instagram</span>
                  </a>
                </div>
              </div>
            </Card>

            {/* Map Placeholder */}
            <Card className="p-8">
              <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-4">
                Lokasi Sekolah
              </h3>
              
              <div className="bg-dark-100 dark:bg-dark-700 rounded-lg p-8 text-center">
                <MapPin className="h-16 w-16 text-primary-600 dark:text-primary-400 mx-auto mb-4" />
                <p className="text-dark-600 dark:text-dark-300 mb-4">
                  Peta lokasi sekolah akan ditampilkan di sini
                </p>
                <a
                  href="https://maps.google.com/search/SMK+TI+Pelita+Nusantara+Kediri"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                >
                  <MapPin className="h-4 w-4" />
                  <span>Buka di Google Maps</span>
                </a>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;