/**
 * Halaman contoh soal dengan pembahasan lengkap
 */
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Eye, EyeOff, Award, Filter } from 'lucide-react';
import Card from '../components/ui/Card';
import { practiceProblems } from '../data/mathData';

const PracticeProblems = () => {
  const [selectedLevel, setSelectedLevel] = useState('semua');
  const [visibleSolutions, setVisibleSolutions] = useState(new Set());

  const levels = [
    { id: 'semua', name: 'Semua Level', color: 'bg-gray-500' },
    { id: 'mudah', name: 'Mudah', color: 'bg-green-500' },
    { id: 'sedang', name: 'Sedang', color: 'bg-yellow-500' },
    { id: 'sulit', name: 'Sulit', color: 'bg-red-500' }
  ];

  const filteredProblems = selectedLevel === 'semua' 
    ? practiceProblems 
    : practiceProblems.filter(problem => problem.level === selectedLevel);

  const toggleSolution = (problemId) => {
    const newVisible = new Set(visibleSolutions);
    if (newVisible.has(problemId)) {
      newVisible.delete(problemId);
    } else {
      newVisible.add(problemId);
    }
    setVisibleSolutions(newVisible);
  };

  const getLevelColor = (level) => {
    switch (level) {
      case 'mudah': return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300';
      case 'sedang': return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300';
      case 'sulit': return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300';
      default: return 'bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-300';
    }
  };

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
            Bank Soal
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-dark-900 dark:text-white mb-4">
            Contoh Soal & Pembahasan
          </h1>
          <p className="text-xl text-dark-600 dark:text-dark-300 max-w-3xl mx-auto">
            Kumpulan soal algoritma matematika dengan pembahasan lengkap untuk meningkatkan pemahamanmu
          </p>
        </motion.div>

        {/* Level Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <Card className="p-6">
            <div className="flex items-center mb-4">
              <Filter className="h-5 w-5 text-primary-600 mr-2" />
              <h3 className="text-lg font-semibold text-dark-900 dark:text-white">
                Filter Berdasarkan Level
              </h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {levels.map((level) => (
                <button
                  key={level.id}
                  onClick={() => setSelectedLevel(level.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    selectedLevel === level.id
                      ? 'bg-primary-600 text-white shadow-lg'
                      : 'bg-dark-100 dark:bg-dark-700 text-dark-600 dark:text-dark-300 hover:bg-dark-200 dark:hover:bg-dark-600'
                  }`}
                >
                  {level.name}
                </button>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Problems Grid */}
        <div className="space-y-6">
          {filteredProblems.map((problem, index) => (
            <motion.div
              key={problem.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <Card className="overflow-hidden">
                <div className="p-6">
                  {/* Problem Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                    <div className="flex items-center space-x-3 mb-2 sm:mb-0">
                      <div className="bg-gradient-to-br from-primary-600 to-cyan-500 text-white p-2 rounded-lg">
                        <Award className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-dark-900 dark:text-white">
                          {problem.title}
                        </h3>
                        <p className="text-sm text-dark-600 dark:text-dark-300">
                          {problem.category}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getLevelColor(problem.level)}`}>
                        {problem.level.charAt(0).toUpperCase() + problem.level.slice(1)}
                      </span>
                      <button
                        onClick={() => toggleSolution(problem.id)}
                        className="flex items-center space-x-2 px-4 py-2 bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 rounded-lg hover:bg-primary-200 dark:hover:bg-primary-900/70 transition-colors duration-200"
                      >
                        {visibleSolutions.has(problem.id) ? (
                          <>
                            <EyeOff className="h-4 w-4" />
                            <span className="text-sm">Sembunyikan Jawaban</span>
                          </>
                        ) : (
                          <>
                            <Eye className="h-4 w-4" />
                            <span className="text-sm">Tunjukkan Jawaban</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Problem Statement */}
                  <div className="bg-dark-50 dark:bg-dark-700/50 p-4 rounded-lg mb-6">
                    <h4 className="font-semibold text-dark-900 dark:text-white mb-2">Soal:</h4>
                    <p className="text-dark-700 dark:text-dark-300 leading-relaxed">
                      {problem.problem}
                    </p>
                  </div>

                  {/* Solution */}
                  {visibleSolutions.has(problem.id) && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="border-t border-dark-200 dark:border-dark-600 pt-6"
                    >
                      <h4 className="font-semibold text-dark-900 dark:text-white mb-4 flex items-center">
                        <Award className="h-5 w-5 text-green-500 mr-2" />
                        Pembahasan:
                      </h4>
                      <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-lg">
                        <pre className="whitespace-pre-line text-dark-700 dark:text-dark-300 leading-relaxed font-mono text-sm">
                          {problem.solution}
                        </pre>
                      </div>
                    </motion.div>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProblems.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <Card className="p-12">
              <BookOpen className="h-16 w-16 text-dark-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-dark-900 dark:text-white mb-2">
                Tidak ada soal ditemukan
              </h3>
              <p className="text-dark-600 dark:text-dark-300">
                Coba ubah filter level untuk melihat soal lainnya
              </p>
            </Card>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default PracticeProblems;