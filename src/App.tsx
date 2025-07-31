import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from './contexts/ThemeContext';

// Layout Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Page Components
import Home from './pages/Home';
import Materials from './pages/Materials';
import AIAssistantPage from './pages/AIAssistantPage';
import PracticeProblems from './pages/PracticeProblems';
import Calculator from './pages/Calculator';
import Quiz from './pages/Quiz';
import Team from './pages/Team';
import Contact from './pages/Contact';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-white dark:bg-dark-900 transition-colors duration-300">
          <Header />
          
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/materi" element={<Materials />} />
              <Route path="/ai-assistant" element={<AIAssistantPage />} />
              <Route path="/contoh-soal" element={<PracticeProblems />} />
              <Route path="/kalkulator" element={<Calculator />} />
              <Route path="/kuiz" element={<Quiz />} />
              <Route path="/tim-kami" element={<Team />} />
              <Route path="/kontak" element={<Contact />} />
            </Routes>
          </main>
          
          <Footer />
          
          {/* Toast Notifications */}
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: 'var(--toast-bg)',
                color: 'var(--toast-color)',
              },
              success: {
                iconTheme: {
                  primary: '#10B981',
                  secondary: '#FFFFFF',
                },
              },
              error: {
                iconTheme: {
                  primary: '#EF4444',
                  secondary: '#FFFFFF',
                },
              },
            }}
          />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;