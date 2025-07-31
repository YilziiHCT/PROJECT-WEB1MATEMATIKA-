/**
 * Halaman kuiz interaktif dengan timer dan sertifikat
 */
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Clock, Trophy, Download, RotateCcw, CheckCircle, XCircle } from 'lucide-react';
import Card from '../components/ui/Card';
import { quizQuestions } from '../data/mathData';
import toast from 'react-hot-toast';

const Quiz = () => {
  const [quizState, setQuizState] = useState('start'); // 'start', 'playing', 'finished'
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(900); // 15 minutes in seconds
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  // Timer effect
  useEffect(() => {
    let timer;
    if (quizState === 'playing' && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            handleFinishQuiz();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [quizState, timeLeft]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const startQuiz = () => {
    setQuizState('playing');
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setTimeLeft(900);
    setScore(0);
    setShowResults(false);
  };

  const handleAnswerSelect = (questionId, answerIndex) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: answerIndex
    }));
  };

  const nextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      handleFinishQuiz();
    }
  };

  const previousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const handleFinishQuiz = () => {
    let correctAnswers = 0;
    quizQuestions.forEach(question => {
      if (selectedAnswers[question.id] === question.correctAnswer) {
        correctAnswers++;
      }
    });
    
    setScore(correctAnswers);
    setQuizState('finished');
    setShowResults(true);
    
    const percentage = (correctAnswers / quizQuestions.length) * 100;
    if (percentage >= 80) {
      toast.success('Selamat! Nilai Anda sangat baik!');
    } else if (percentage >= 60) {
      toast.success('Bagus! Nilai Anda cukup baik!');
    } else {
      toast.error('Tetap semangat! Coba lagi untuk hasil yang lebih baik!');
    }
  };

  const resetQuiz = () => {
    setQuizState('start');
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setTimeLeft(900);
    setScore(0);
    setShowResults(false);
  };

  const downloadCertificate = () => {
    const percentage = (score / quizQuestions.length) * 100;
    if (percentage >= 60) {
      // In a real app, this would generate and download a PDF certificate
      toast.success('Sertifikat akan didownload (fitur demo)');
    } else {
      toast.error('Sertifikat hanya tersedia untuk nilai minimal 60%');
    }
  };

  const getScoreColor = (percentage) => {
    if (percentage >= 80) return 'text-green-600';
    if (percentage >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreGrade = (percentage) => {
    if (percentage >= 90) return 'A';
    if (percentage >= 80) return 'B+';
    if (percentage >= 70) return 'B';
    if (percentage >= 60) return 'C+';
    if (percentage >= 50) return 'C';
    return 'D';
  };

  // Start Screen
  if (quizState === 'start') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-50 to-cyan-50 dark:from-dark-900 dark:to-dark-800 py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="inline-flex items-center bg-primary-100 dark:bg-primary-900/50 px-4 py-2 rounded-full text-primary-700 dark:text-primary-300 text-sm font-medium mb-6">
              <Trophy className="h-4 w-4 mr-2" />
              Kuiz Interaktif
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-dark-900 dark:text-white mb-6">
              Kuiz Algoritma Matematika
            </h1>
            
            <Card className="p-8 mb-8">
              <div className="space-y-6">
                <div className="flex items-center justify-center">
                  <div className="bg-gradient-to-br from-primary-600 to-cyan-500 p-6 rounded-full">
                    <Trophy className="h-12 w-12 text-white" />
                  </div>
                </div>
                
                <div className="text-left space-y-4">
                  <h2 className="text-2xl font-bold text-dark-900 dark:text-white mb-4">
                    Aturan Kuiz:
                  </h2>
                  <ul className="space-y-3 text-dark-600 dark:text-dark-300">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>{quizQuestions.length} soal pilihan ganda tentang algoritma</span>
                    </li>
                    <li className="flex items-start">
                      <Clock className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Waktu: 15 menit</span>
                    </li>
                    <li className="flex items-start">
                      <Trophy className="h-5 w-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Nilai minimal 60% untuk mendapat sertifikat</span>
                    </li>
                    <li className="flex items-start">
                      <Download className="h-5 w-5 text-purple-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Sertifikat digital dapat diunduh setelah selesai</span>
                    </li>
                  </ul>
                </div>
                
                <button
                  onClick={startQuiz}
                  className="w-full bg-gradient-to-r from-primary-600 to-cyan-500 hover:from-primary-700 hover:to-cyan-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-3"
                >
                  <Play className="h-6 w-6" />
                  <span>Mulai Kuiz</span>
                </button>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    );
  }

  // Quiz Playing Screen
  if (quizState === 'playing') {
    const question = quizQuestions[currentQuestion];
    const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;

    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-50 to-cyan-50 dark:from-dark-900 dark:to-dark-800 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header with Timer and Progress */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <Card className="p-6">
                <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 px-4 py-2 rounded-lg">
                      <Clock className="h-5 w-5 mr-2" />
                      <span className="font-mono text-lg">{formatTime(timeLeft)}</span>
                    </div>
                    <div className="text-dark-600 dark:text-dark-300">
                      Soal {currentQuestion + 1} dari {quizQuestions.length}
                    </div>
                  </div>
                  
                  <button
                    onClick={handleFinishQuiz}
                    className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-200"
                  >
                    Selesai Kuiz
                  </button>
                </div>
                
                {/* Progress Bar */}
                <div className="mt-4">
                  <div className="bg-dark-200 dark:bg-dark-700 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                      className="bg-gradient-to-r from-primary-600 to-cyan-500 h-2 rounded-full transition-all duration-300"
                    />
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Question */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentQuestion}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="p-8 mb-6">
                  <h2 className="text-2xl font-bold text-dark-900 dark:text-white mb-6">
                    {question.question}
                  </h2>
                  
                  <div className="space-y-4">
                    {question.options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => handleAnswerSelect(question.id, index)}
                        className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 ${
                          selectedAnswers[question.id] === index
                            ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300'
                            : 'border-dark-200 dark:border-dark-600 hover:border-primary-300 bg-white dark:bg-dark-700 text-dark-900 dark:text-white'
                        }`}
                      >
                        <div className="flex items-center">
                          <div className={`w-6 h-6 rounded-full border-2 mr-4 flex items-center justify-center ${
                            selectedAnswers[question.id] === index
                              ? 'border-primary-500 bg-primary-500'
                              : 'border-dark-300 dark:border-dark-500'
                          }`}>
                            {selectedAnswers[question.id] === index && (
                              <div className="w-2 h-2 bg-white rounded-full" />
                            )}
                          </div>
                          <span className="font-medium">
                            {String.fromCharCode(65 + index)}. {option}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </Card>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card className="p-6">
                <div className="flex justify-between">
                  <button
                    onClick={previousQuestion}
                    disabled={currentQuestion === 0}
                    className="px-6 py-2 bg-dark-200 dark:bg-dark-700 text-dark-600 dark:text-dark-300 rounded-lg hover:bg-dark-300 dark:hover:bg-dark-600 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Sebelumnya
                  </button>
                  
                  <button
                    onClick={nextQuestion}
                    disabled={selectedAnswers[question.id] === undefined}
                    className="px-6 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {currentQuestion === quizQuestions.length - 1 ? 'Selesai' : 'Selanjutnya'}
                  </button>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    );
  }

  // Results Screen
  if (quizState === 'finished') {
    const percentage = (score / quizQuestions.length) * 100;
    const grade = getScoreGrade(percentage);

    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-50 to-cyan-50 dark:from-dark-900 dark:to-dark-800 py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-4xl mx-auto"
          >
            {/* Results Header */}
            <Card className="p-8 mb-8 text-center">
              <div className="mb-6">
                <div className={`inline-flex items-center justify-center w-24 h-24 rounded-full mb-4 ${
                  percentage >= 80 
                    ? 'bg-green-100 dark:bg-green-900/30' 
                    : percentage >= 60 
                    ? 'bg-yellow-100 dark:bg-yellow-900/30' 
                    : 'bg-red-100 dark:bg-red-900/30'
                }`}>
                  {percentage >= 60 ? (
                    <Trophy className={`h-12 w-12 ${getScoreColor(percentage)}`} />
                  ) : (
                    <XCircle className={`h-12 w-12 ${getScoreColor(percentage)}`} />
                  )}
                </div>
              </div>
              
              <h1 className="text-4xl font-bold text-dark-900 dark:text-white mb-4">
                Kuiz Selesai!
              </h1>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                <div className="bg-dark-50 dark:bg-dark-700/50 p-6 rounded-xl">
                  <div className={`text-4xl font-bold mb-2 ${getScoreColor(percentage)}`}>
                    {score}/{quizQuestions.length}
                  </div>
                  <div className="text-dark-600 dark:text-dark-300">Jawaban Benar</div>
                </div>
                
                <div className="bg-dark-50 dark:bg-dark-700/50 p-6 rounded-xl">
                  <div className={`text-4xl font-bold mb-2 ${getScoreColor(percentage)}`}>
                    {percentage.toFixed(0)}%
                  </div>
                  <div className="text-dark-600 dark:text-dark-300">Persentase</div>
                </div>
                
                <div className="bg-dark-50 dark:bg-dark-700/50 p-6 rounded-xl">
                  <div className={`text-4xl font-bold mb-2 ${getScoreColor(percentage)}`}>
                    {grade}
                  </div>
                  <div className="text-dark-600 dark:text-dark-300">Grade</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {percentage >= 60 && (
                  <button
                    onClick={downloadCertificate}
                    className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 flex items-center justify-center space-x-2"
                  >
                    <Download className="h-5 w-5" />
                    <span>Download Sertifikat</span>
                  </button>
                )}
                
                <button
                  onClick={resetQuiz}
                  className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <RotateCcw className="h-5 w-5" />
                  <span>Ulangi Kuiz</span>
                </button>
              </div>
            </Card>

            {/* Detailed Results */}
            {showResults && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Card className="p-8">
                  <h2 className="text-2xl font-bold text-dark-900 dark:text-white mb-6">
                    Pembahasan Jawaban
                  </h2>
                  
                  <div className="space-y-6">
                    {quizQuestions.map((question, index) => {
                      const userAnswer = selectedAnswers[question.id];
                      const isCorrect = userAnswer === question.correctAnswer;
                      
                      return (
                        <div key={question.id} className="border-b border-dark-200 dark:border-dark-700 pb-6 last:border-b-0">
                          <div className="flex items-start space-x-3 mb-4">
                            {isCorrect ? (
                              <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                            ) : (
                              <XCircle className="h-6 w-6 text-red-500 mt-0.5 flex-shrink-0" />
                            )}
                            <div className="flex-1">
                              <h3 className="font-semibold text-dark-900 dark:text-white mb-2">
                                {index + 1}. {question.question}
                              </h3>
                              
                              <div className="text-sm space-y-1">
                                <p className="text-dark-600 dark:text-dark-300">
                                  <span className="font-medium">Jawaban Anda:</span>{' '}
                                  <span className={userAnswer !== undefined ? (isCorrect ? 'text-green-600' : 'text-red-600') : 'text-gray-500'}>
                                    {userAnswer !== undefined 
                                      ? `${String.fromCharCode(65 + userAnswer)}. ${question.options[userAnswer]}`
                                      : 'Tidak dijawab'
                                    }
                                  </span>
                                </p>
                                
                                {!isCorrect && (
                                  <p className="text-dark-600 dark:text-dark-300">
                                    <span className="font-medium">Jawaban Benar:</span>{' '}
                                    <span className="text-green-600">
                                      {String.fromCharCode(65 + question.correctAnswer)}. {question.options[question.correctAnswer]}
                                    </span>
                                  </p>
                                )}
                                
                                <p className="text-dark-500 dark:text-dark-400 italic">
                                  {question.explanation}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </Card>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    );
  }

  return null;
};

export default Quiz;