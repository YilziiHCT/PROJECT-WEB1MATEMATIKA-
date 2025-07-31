/**
 * Halaman khusus untuk AI Assistant
 */
import React from 'react';
import AIAssistant from '../components/ai/AIAssistant';

const AIAssistantPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-cyan-50 dark:from-dark-900 dark:to-dark-800 py-12">
      <div className="container mx-auto px-4">
        <AIAssistant />
      </div>
    </div>
  );
};

export default AIAssistantPage;