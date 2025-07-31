/**
 * Halaman utama dengan banner dan navigasi cepat
 */
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Calculator, 
  BrainCircuit, 
  Users, 
  Trophy,
  ArrowRight,
  Sparkles,
  Target
} from 'lucide-react';
import Card from '../components/ui/Card';

const Home = () => {
  const quickLinks = [
    {
      title: 'Materi Algoritma',
      description: 'Pelajari konsep dasar algoritma dengan penjelasan yang mudah dipahami',
      icon: BookOpen,
      path: '/materi',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'AI Assistant',
      description: 'Tanyakan apapun tentang matematika kepada asisten AI',
      icon: BrainCircuit,
      path: '/ai-assistant',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Kalkulator',
      description: 'Gunakan kalkulator canggih untuk menyelesaikan perhitungan',
      icon: Calculator,
      path: '/kalkulator',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Kuiz Interaktif',
      description: 'Uji pemahamanmu dengan kuiz yang menarik dan menantang',
      icon: Trophy,
      path: '/kuiz',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const features = [
    {
      title: 'Pembelajaran Interaktif',
      description: 'Belajar matematika dengan cara yang menyenangkan dan interaktif',
      icon: Target
    },
    {
      title: 'AI-Powered Assistant',
      description: 'Dapatkan bantuan instan dari asisten AI yang cerdas',
      icon: Sparkles
    },
    {
      title: 'Tim Profesional',
      description: 'Dikembangkan oleh tim siswa SMK TI yang berpengalaman',
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-cyan-50 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-cyan-500/20 dark:from-primary-900/30 dark:to-cyan-800/30"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center bg-primary-100 dark:bg-primary-900/50 px-4 py-2 rounded-full text-primary-700 dark:text-primary-300 text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4 mr-2" />
              SMK TI Pelita Nusantara Kediri
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-dark-900 dark:text-white mb-6 leading-tight">
              Matematika Kelas 10
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-cyan-500">
                Algoritma
              </span>
            </h1>
            
            <p className="text-xl text-dark-600 dark:text-dark-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Jelajahi dunia algoritma dan matematika dengan cara yang menyenangkan. 
              Dilengkapi dengan AI Assistant, kalkulator canggih, dan kuiz interaktif 
              untuk mendukung pembelajaran yang efektif.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/materi"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-600 to-cyan-500 hover:from-primary-700 hover:to-cyan-600 text-white font-semibold rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Mulai Belajar
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              
              <Link
                to="/ai-assistant"
                className="inline-flex items-center px-8 py-4 bg-white dark:bg-dark-800 text-dark-900 dark:text-white font-semibold rounded-xl border-2 border-primary-200 dark:border-primary-700 hover:border-primary-400 dark:hover:border-primary-500 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <BrainCircuit className="mr-2 h-5 w-5 text-primary-600" />
                Coba AI Assistant
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-white mb-4">
              Fitur Unggulan
            </h2>
            <p className="text-xl text-dark-600 dark:text-dark-300 max-w-2xl mx-auto">
              Akses cepat ke semua fitur pembelajaran yang telah kami siapkan untuk Anda
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => (
              <motion.div
                key={link.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <Link to={link.path}>
                  <Card className="p-6 h-full hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${link.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}>
                      <link.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-dark-900 dark:text-white mb-3">
                      {link.title}
                    </h3>
                    <p className="text-dark-600 dark:text-dark-300 leading-relaxed">
                      {link.description}
                    </p>
                    <div className="mt-4 flex items-center text-primary-600 dark:text-primary-400 group-hover:translate-x-2 transition-transform duration-200">
                      <span className="text-sm font-medium">Pelajari lebih lanjut</span>
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-dark-50 dark:bg-dark-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-white mb-4">
              Mengapa Pilih Platform Kami?
            </h2>
            <p className="text-xl text-dark-600 dark:text-dark-300 max-w-2xl mx-auto">
              Dibuat khusus untuk siswa SMK dengan pendekatan pembelajaran yang modern dan efektif
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <Card className="p-8 text-center h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-cyan-100 dark:from-primary-900 dark:to-cyan-900 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="h-8 w-8 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-dark-900 dark:text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-dark-600 dark:text-dark-300 leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;