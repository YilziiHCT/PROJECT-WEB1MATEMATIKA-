/**
 * Halaman profil tim pengembang
 */
import React from 'react';
import { motion } from 'framer-motion';
import { Users, Github, Linkedin, Mail } from 'lucide-react';
import Card from '../components/ui/Card';
import { teamMembers } from '../data/mathData';

// Import images directly (alternative approach if using Vite)
// import derrenImage from '../images/derren.jpg';
// import farelImage from '../images/farel.jpg';
// import alifImage from '../images/alif.jpg';
// import rafaelImage from '../images/rafael.jpg';

const Team = () => {
  // Handle image loading errors
  const handleImageError = (e) => {
    e.target.style.display = 'none';
    const fallbackDiv = e.target.parentElement.querySelector('.image-fallback');
    if (fallbackDiv) {
      fallbackDiv.style.display = 'flex';
    }
  };

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
            <Users className="h-4 w-4 mr-2" />
            Meet Our Team
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-dark-900 dark:text-white mb-4">
            Tim Kami
          </h1>
          <p className="text-xl text-dark-600 dark:text-dark-300 max-w-3xl mx-auto">
            Dibangun dengan ❤️ oleh tim siswa SMK TI Pelita Nusantara Kediri yang 
            berdedikasi untuk menciptakan pengalaman pembelajaran matematika yang menyenangkan.
          </p>
        </motion.div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <Card className="p-6 text-center h-full hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                {/* Profile Image */}
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto bg-gradient-to-br from-primary-100 to-cyan-100 dark:from-primary-900 dark:to-cyan-900 rounded-2xl flex items-center justify-center overflow-hidden">
                    {/* Main Image */}
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                      onError={handleImageError}
                    />
                    {/* Fallback if image fails to load */}
                    <div className="image-fallback hidden w-full h-full bg-gradient-to-br from-primary-200 to-cyan-200 dark:from-primary-700 dark:to-cyan-700 items-center justify-center">
                      <Users className="h-16 w-16 text-primary-600 dark:text-primary-400" />
                      <span className="sr-only">Photo of {member.name}</span>
                    </div>
                  </div>
                  
                  {/* Online Status Indicator */}
                  <div className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 border-2 border-white dark:border-dark-800 rounded-full"></div>
                </div>

                {/* Member Info */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-dark-900 dark:text-white">
                    {member.name}
                  </h3>
                  
                  <div className="space-y-2">
                    <div className="inline-block bg-gradient-to-r from-primary-600 to-cyan-500 text-white text-sm font-medium px-3 py-1 rounded-full">
                      {member.role}
                    </div>
                    <div className="text-sm text-dark-600 dark:text-dark-300 font-medium">
                      {member.department}
                    </div>
                  </div>
                  
                  <p className="text-sm text-dark-500 dark:text-dark-400 leading-relaxed">
                    {member.description}
                  </p>
                </div>

                {/* Social Links */}
                <div className="mt-6 flex justify-center space-x-3">
                  <button 
                    className="p-2 bg-dark-100 dark:bg-dark-700 hover:bg-primary-100 dark:hover:bg-primary-900/50 text-dark-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 rounded-lg transition-colors duration-200"
                    aria-label={`${member.name} GitHub`}
                  >
                    <Github className="h-4 w-4" />
                  </button>
                  <button 
                    className="p-2 bg-dark-100 dark:bg-dark-700 hover:bg-primary-100 dark:hover:bg-primary-900/50 text-dark-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 rounded-lg transition-colors duration-200"
                    aria-label={`${member.name} LinkedIn`}
                  >
                    <Linkedin className="h-4 w-4" />
                  </button>
                  <button 
                    className="p-2 bg-dark-100 dark:bg-dark-700 hover:bg-primary-100 dark:hover:bg-primary-900/50 text-dark-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 rounded-lg transition-colors duration-200"
                    aria-label={`${member.name} Email`}
                  >
                    <Mail className="h-4 w-4" />
                  </button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Project Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="p-8 bg-gradient-to-r from-primary-500 to-cyan-500 text-white">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Tentang Proyek Ini</h2>
              <p className="text-lg leading-relaxed mb-6 text-primary-100">
                Website ini dikembangkan sebagai bagian dari pembelajaran praktis di SMK TI Pelita Nusantara Kediri. 
                Menggabungkan kreativitas siswa DKV dalam desain visual dengan keahlian teknis siswa RPL dalam 
                pengembangan web untuk menciptakan platform pembelajaran matematika yang interaktif dan menarik.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="bg-white/10 p-4 rounded-xl">
                  <div className="text-2xl font-bold mb-2">2024</div>
                  <div className="text-sm text-primary-100">Tahun Pengembangan</div>
                </div>
                
                <div className="bg-white/10 p-4 rounded-xl">
                  <div className="text-2xl font-bold mb-2">4</div>
                  <div className="text-sm text-primary-100">Anggota Tim</div>
                </div>
                
                <div className="bg-white/10 p-4 rounded-xl">
                  <div className="text-2xl font-bold mb-2">SMK TI</div>
                  <div className="text-sm text-primary-100">Pelita Nusantara</div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Fun Math Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-dark-900 dark:text-white mb-4">
              Fun Math Corner
            </h2>
            <p className="text-dark-600 dark:text-dark-300">
              Matematika bisa menyenangkan! Berikut beberapa fakta menarik:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-4">
                🤔 Tahukah Kamu?
              </h3>
              <div className="space-y-3 text-dark-600 dark:text-dark-300">
                <p>• Pi (π) memiliki lebih dari 31 triliun digit yang telah dihitung!</p>
                <p>• Angka 1 adalah satu-satunya angka yang jika dikalikan dengan dirinya sendiri tetap sama</p>
                <p>• Algoritma kata berasal dari nama matematikawan Persia Al-Khwarizmi</p>
                <p>• Fibonacci sequence dapat ditemukan di spiral kerang nautilus</p>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-4">
                😄 Math Joke
              </h3>
              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border-l-4 border-yellow-400">
                <p className="text-dark-700 dark:text-dark-300 mb-2">
                  <strong>Q:</strong> Mengapa matematika itu seperti cinta?
                </p>
                <p className="text-dark-600 dark:text-dark-400">
                  <strong>A:</strong> Karena keduanya melibatkan banyak masalah yang rumit, 
                  tapi hasilnya selalu indah! 💕
                </p>
              </div>
            </Card>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Team;