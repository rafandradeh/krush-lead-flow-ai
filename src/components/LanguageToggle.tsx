
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

interface LanguageToggleProps {
  onLanguageChange: (lang: 'en' | 'es') => void;
  currentLanguage: 'en' | 'es';
}

const LanguageToggle: React.FC<LanguageToggleProps> = ({ onLanguageChange, currentLanguage }) => {
  return (
    <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full p-1">
      <Button
        variant={currentLanguage === 'en' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => onLanguageChange('en')}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
          currentLanguage === 'en' 
            ? 'bg-white text-blue-600 shadow-md' 
            : 'text-white hover:bg-white/20'
        }`}
      >
        EN
      </Button>
      <Button
        variant={currentLanguage === 'es' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => onLanguageChange('es')}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
          currentLanguage === 'es' 
            ? 'bg-white text-blue-600 shadow-md' 
            : 'text-white hover:bg-white/20'
        }`}
      >
        ES
      </Button>
    </div>
  );
};

export default LanguageToggle;
