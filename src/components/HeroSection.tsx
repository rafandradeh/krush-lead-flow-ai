
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

interface HeroSectionProps {
  language: 'en' | 'es';
  onScrollToForm: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ language, onScrollToForm }) => {
  const content = {
    en: {
      headline: "More Leads. More Jobs. No Extra Work.",
      subheadline: "AI-Powered, Bilingual Growth Engine That Fills Your Calendar and Grows Your Reputation",
      description: "Stop chasing leads that ghost you. Our proven system delivers 3x more qualified customers to Hispanic contractors in HVAC, Roofing, Plumbing, and Electrical services.",
      cta: "Get Free Analysis",
      guarantee: "90-Day Results Guarantee"
    },
    es: {
      headline: "Más Clientes. Más Trabajos. Sin Trabajo Extra.",
      subheadline: "Motor de Crecimiento Bilingüe Impulsado por IA Que Llena Su Calendario y Aumenta Su Reputación",
      description: "Deje de perseguir clientes que desaparecen. Nuestro sistema comprobado entrega 3x más clientes calificados a contratistas hispanos en HVAC, Techos, Plomería y Servicios Eléctricos.",
      cta: "Análisis Gratuito",
      guarantee: "Garantía de Resultados de 90 Días"
    }
  };

  const t = content[language];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }}
      ></div>
      
      <div className="relative z-10 container mx-auto px-4 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in">
            {t.headline}
          </h1>
          
          {/* Subheadline */}
          <h2 className="text-xl md:text-2xl lg:text-3xl text-blue-100 mb-8 font-medium animate-fade-in animation-delay-200">
            {t.subheadline}
          </h2>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-blue-200 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in animation-delay-400">
            {t.description}
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in animation-delay-600">
            <Button 
              onClick={onScrollToForm}
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              {t.cta}
            </Button>
            <div className="flex items-center text-green-300 font-semibold">
              <div className="w-3 h-3 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              {t.guarantee}
            </div>
          </div>
          
          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ArrowDown className="w-8 h-8 text-blue-300 mx-auto cursor-pointer" onClick={onScrollToForm} />
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-orange-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-blue-400/20 rounded-full blur-xl animate-pulse animation-delay-1000"></div>
    </section>
  );
};

export default HeroSection;
