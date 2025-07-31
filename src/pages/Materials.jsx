/**
 * Halaman materi algoritma dengan visualisasi dan contoh
 */
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ChevronRight, Code, Lightbulb, ArrowDown } from 'lucide-react';
import Card from '../components/ui/Card';
import { algorithmMaterials } from '../data/mathData';

const Materials = () => {
  const [selectedMaterial, setSelectedMaterial] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-cyan-50 dark:from-dark-900 dark:to-dark-800 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center bg-primary-100 dark:bg-primary-900/50 px-4 py-2 rounded-full text-primary-700 dark:text-primary-300 text-sm font-medium mb-6">
            <BookOpen className="h-4 w-4 mr-2" />
            Materi Pembelajaran
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-dark-900 dark:text-white mb-4">
            Algoritma Matematika
          </h1>
          <p className="text-xl text-dark-600 dark:text-dark-300 max-w-3xl mx-auto">
            Pelajari konsep dasar algoritma dalam matematika dengan penjelasan yang mudah dipahami 
            dan contoh-contoh praktis yang relevan dengan kehidupan sehari-hari.
          </p>
        </motion.div>

        {/* Algorithm Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <Card className="p-8 bg-gradient-to-r from-primary-500 to-cyan-500 text-white">
            <div className="flex items-start space-x-6">
              <div className="bg-white/20 p-4 rounded-xl">
                <Lightbulb className="h-8 w-8 text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-4">Apa itu Algoritma?</h2>
                <p className="text-lg leading-relaxed mb-4">
                  Algoritma adalah serangkaian langkah-langkah yang teratur dan logis untuk menyelesaikan suatu masalah. 
                  Dalam matematika, algoritma membantu kita memecahkan soal dengan cara yang sistematis dan efisien.
                </p>
                <div className="bg-white/10 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Contoh sederhana dalam kehidupan sehari-hari:</h3>
                  <p className="text-sm">
                    Resep masakan adalah algoritma! Setiap langkah yang tertulis dalam resep 
                    memberikan instruksi yang jelas untuk menghasilkan masakan yang diinginkan.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Algorithm Flow Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <Card className="p-8">
            <h2 className="text-2xl font-bold text-dark-900 dark:text-white mb-6 text-center">
              Visualisasi Alur Algoritma Sederhana
            </h2>
            <div className="flex flex-col items-center space-y-4 max-w-2xl mx-auto">
              {/* Step 1 */}
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-4 rounded-xl text-center font-semibold">
                1. MULAI: Tentukan Masalah
              </div>
              <ArrowDown className="h-6 w-6 text-primary-600" />
              
              {/* Step 2 */}
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-4 rounded-xl text-center font-semibold">
                2. INPUT: Masukkan Data
              </div>
              <ArrowDown className="h-6 w-6 text-primary-600" />
              
              {/* Step 3 */}
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-4 rounded-xl text-center font-semibold">
                3. PROSES: Olah Data
              </div>
              <ArrowDown className="h-6 w-6 text-primary-600" />
              
              {/* Step 4 */}
              <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-4 rounded-xl text-center font-semibold">
                4. OUTPUT: Tampilkan Hasil
              </div>
              <ArrowDown className="h-6 w-6 text-primary-600" />
              
              {/* Step 5 */}
              <div className="bg-gradient-to-r from-gray-600 to-gray-700 text-white px-6 py-4 rounded-xl text-center font-semibold">
                5. SELESAI
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Material Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {algorithmMaterials.map((material, index) => (
            <motion.div
              key={material.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <Card 
                className="p-6 cursor-pointer"
                onClick={() => setSelectedMaterial(material)}
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-dark-900 dark:text-white">
                    {material.title}
                  </h3>
                  <ChevronRight className="h-5 w-5 text-primary-600 flex-shrink-0" />
                </div>
                
                <p className="text-dark-600 dark:text-dark-300 leading-relaxed mb-4">
                  {material.content.substring(0, 200)}...
                </p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-dark-900 dark:text-white text-sm">
                    Contoh Penerapan:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {material.examples.slice(0, 2).map((example, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 text-xs rounded-full"
                      >
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Pseudocode Example */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="p-8">
            <div className="flex items-center mb-6">
              <Code className="h-6 w-6 text-primary-600 mr-3" />
              <h2 className="text-2xl font-bold text-dark-900 dark:text-white">
                Contoh Pseudocode: Mencari Nilai Terbesar
              </h2>
            </div>
            
            <div className="bg-dark-900 dark:bg-black p-6 rounded-xl text-green-400 font-mono text-sm overflow-x-auto">
              <pre>{`ALGORITMA CariNilaiTerbesar
DEKLARASI:
    n : integer         // jumlah bilangan
    bilangan : array    // array untuk menyimpan bilangan
    max : integer       // nilai terbesar
    i : integer         // counter

DESKRIPSI:
    INPUT n
    FOR i = 1 TO n DO
        INPUT bilangan[i]
    END FOR
    
    max = bilangan[1]
    FOR i = 2 TO n DO
        IF bilangan[i] > max THEN
            max = bilangan[i]
        END IF
    END FOR
    
    OUTPUT max
END`}</pre>
            </div>
            
            <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 rounded-r-lg">
              <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
                💡 Penjelasan:
              </h4>
              <p className="text-yellow-700 dark:text-yellow-300 text-sm">
                Algoritma ini bekerja dengan cara membandingkan setiap bilangan dengan nilai maksimum sementara. 
                Jika ditemukan bilangan yang lebih besar, maka nilai maksimum diperbarui.
              </p>
            </div>
          </Card>
        </motion.div>

        {/* Modal for Selected Material */}
        {selectedMaterial && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedMaterial(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white dark:bg-dark-800 rounded-xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-2xl font-bold text-dark-900 dark:text-white mb-4">
                {selectedMaterial.title}
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="whitespace-pre-line text-dark-600 dark:text-dark-300">
                  {selectedMaterial.content}
                </p>
                
                <h3 className="text-lg font-semibold text-dark-900 dark:text-white mt-6 mb-3">
                  Contoh Penerapan:
                </h3>
                <ul className="space-y-2">
                  {selectedMaterial.examples.map((example, idx) => (
                    <li key={idx} className="text-dark-600 dark:text-dark-300">
                      • {example}
                    </li>
                  ))}
                </ul>
              </div>
              
              <button
                onClick={() => setSelectedMaterial(null)}
                className="mt-6 px-6 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors duration-200"
              >
                Tutup
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Materials;