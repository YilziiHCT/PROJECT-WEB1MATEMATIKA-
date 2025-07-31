/**
 * Komponen AI Assistant menggunakan Gemini 2.5 Flash
 */
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Bot, User, Loader2, MessageSquare } from 'lucide-react';
import { model, MATH_SYSTEM_PROMPT } from '../../config/ai';
import toast from 'react-hot-toast';
import Card from '../ui/Card';

const AIAssistant = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'ai',
      content: 'Halo! Saya asisten AI untuk matematika kelas 10. Apa yang ingin kamu pelajari hari ini?',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const exampleQuestions = [
    "Jelaskan algoritma pencarian nilai maksimum",
    "Bagaimana cara menyelesaikan persamaan kuadrat?",
    "Apa itu deret fibonacci?",
    "Contoh algoritma sorting sederhana"
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: input.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const prompt = `${MATH_SYSTEM_PROMPT}\n\nPertanyaan siswa: ${userMessage.content}`;
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const aiResponse = response.text();

      const aiMessage = {
        id: Date.now() + 1,
        type: 'ai',
        content: aiResponse,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error('Error calling AI:', error);
      toast.error('Maaf, terjadi kesalahan. Pastikan API key Gemini sudah dikonfigurasi dengan benar.');
      
      const errorMessage = {
        id: Date.now() + 1,
        type: 'ai',
        content: 'Maaf, saya mengalami kesalahan teknis. Silakan coba lagi atau hubungi guru untuk bantuan.',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleExampleClick = (question) => {
    setInput(question);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <div className="bg-gradient-to-br from-primary-600 to-cyan-500 p-3 rounded-full">
            <Bot className="h-8 w-8 text-white" />
          </div>
        </div>
        <h2 className="text-3xl font-bold text-dark-900 dark:text-white mb-2">
          AI Assistant Matematika
        </h2>
        <p className="text-dark-600 dark:text-dark-300">
          Tanyakan apapun tentang matematika kelas 10 dan algoritma
        </p>
      </div>

      {/* Example Questions */}
      <Card className="mb-6 p-6">
        <h3 className="text-lg font-semibold text-dark-900 dark:text-white mb-4 flex items-center">
          <MessageSquare className="h-5 w-5 mr-2 text-primary-600" />
          Contoh Pertanyaan
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {exampleQuestions.map((question, index) => (
            <button
              key={index}
              onClick={() => handleExampleClick(question)}
              className="text-left p-3 bg-primary-50 dark:bg-dark-700 hover:bg-primary-100 dark:hover:bg-dark-600 rounded-lg text-sm text-dark-700 dark:text-dark-300 transition-colors duration-200"
            >
              "{question}"
            </button>
          ))}
        </div>
      </Card>

      {/* Chat Interface */}
      <Card className="overflow-hidden">
        {/* Messages */}
        <div className="h-96 overflow-y-auto p-6 space-y-4 bg-dark-50 dark:bg-dark-900">
          <AnimatePresence>
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex max-w-xs lg:max-w-md ${message.type === 'user' ? 'flex-row-reverse' : 'flex-row'} space-x-3`}>
                  <div className={`flex-shrink-0 ${message.type === 'user' ? 'ml-3' : 'mr-3'}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      message.type === 'user' 
                        ? 'bg-primary-600' 
                        : 'bg-gradient-to-br from-cyan-500 to-primary-600'
                    }`}>
                      {message.type === 'user' ? 
                        <User className="h-4 w-4 text-white" /> : 
                        <Bot className="h-4 w-4 text-white" />
                      }
                    </div>
                  </div>
                  <div className={`px-4 py-2 rounded-2xl ${
                    message.type === 'user'
                      ? 'bg-primary-600 text-white'
                      : 'bg-white dark:bg-dark-800 text-dark-900 dark:text-white border border-dark-200 dark:border-dark-700'
                  }`}>
                    <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                    <p className={`text-xs mt-1 ${
                      message.type === 'user' ? 'text-primary-200' : 'text-dark-500 dark:text-dark-400'
                    }`}>
                      {message.timestamp.toLocaleTimeString('id-ID', { 
                        hour: '2-digit', 
                        minute: '2-digit' 
                      })}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          
          {isLoading && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-start"
            >
              <div className="flex space-x-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-primary-600 flex items-center justify-center">
                  <Bot className="h-4 w-4 text-white" />
                </div>
                <div className="bg-white dark:bg-dark-800 px-4 py-2 rounded-2xl border border-dark-200 dark:border-dark-700">
                  <div className="flex items-center space-x-2">
                    <Loader2 className="h-4 w-4 animate-spin text-primary-600" />
                    <span className="text-sm text-dark-600 dark:text-dark-300">
                      Sedang berpikir...
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Input Form */}
        <div className="p-6 border-t border-dark-200 dark:border-dark-700">
          <form onSubmit={handleSubmit} className="flex space-x-4">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ketik pertanyaan matematika di sini..."
              className="flex-1 px-4 py-2 border border-dark-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-800 text-dark-900 dark:text-white placeholder-dark-500 dark:placeholder-dark-400"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="px-6 py-2 bg-primary-600 hover:bg-primary-700 disabled:bg-dark-400 text-white rounded-lg transition-colors duration-200 flex items-center space-x-2"
            >
              <Send className="h-4 w-4" />
              <span className="hidden sm:inline">Kirim</span>
            </button>
          </form>
        </div>
      </Card>
    </div>
  );
};

export default AIAssistant;