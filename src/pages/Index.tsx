
import React, { useState, useRef } from 'react';
import HeroSection from '@/components/HeroSection';
import ProblemsSection from '@/components/ProblemsSection';
import ServicesSection from '@/components/ServicesSection';
import ROISection from '@/components/ROISection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import LanguageToggle from '@/components/LanguageToggle';

const Index = () => {
  const [language, setLanguage] = useState<'en' | 'es'>('en');
  const ctaRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    ctaRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <div className="min-h-screen">
      {/* Fixed Language Toggle */}
      <div className="fixed top-4 right-4 z-50">
        <LanguageToggle 
          currentLanguage={language} 
          onLanguageChange={setLanguage} 
        />
      </div>

      {/* Page Sections */}
      <HeroSection language={language} onScrollToForm={scrollToForm} />
      <ProblemsSection language={language} />
      <ServicesSection language={language} />
      <ROISection language={language} />
      <TestimonialsSection language={language} />
      
      <div ref={ctaRef}>
        <CTASection language={language} />
      </div>
      
      <Footer language={language} />
    </div>
  );
};

export default Index;
