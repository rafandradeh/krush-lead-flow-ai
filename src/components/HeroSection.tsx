import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
interface HeroSectionProps {
  language: 'en' | 'es';
  onScrollToForm: () => void;
}
const HeroSection: React.FC<HeroSectionProps> = ({
  language,
  onScrollToForm
}) => {
  const content = {
    en: {
      headline: "Transform Your",
      highlightWord: "Marketing",
      subheadline: "Strategy",
      tagline: "with the Power of AI",
      description: "Boost your campaign performance, increase ROI, and unlock data-driven insights with our advanced AI marketing solutions for contractors.",
      cta: "Get Started",
      guarantee: "90-Day Results Guarantee",
      trustedBy: "40,000+",
      trustedText: "Contractors trust us to grow their business"
    },
    es: {
      headline: "Transforma Tu",
      highlightWord: "Marketing",
      subheadline: "Estrategia",
      tagline: "con el Poder de la IA",
      description: "Mejora el rendimiento de tus campañas, aumenta el ROI y desbloquea insights impulsados por datos con nuestras soluciones avanzadas de marketing IA para contratistas.",
      cta: "Comenzar",
      guarantee: "Garantía de Resultados de 90 Días",
      trustedBy: "40,000+",
      trustedText: "Contratistas confían en nosotros para hacer crecer su negocio"
    }
  };
  const t = content[language];
  return <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video className="w-full h-full object-cover opacity-20" autoPlay muted loop playsInline>
          <source src="https://videos.pexels.com/video-files/8486944/8486944-uhd_2560_1440_25fps.mp4" type="video/mp4" />
          <source src="https://videos.pexels.com/video-files/3209828/3209828-uhd_2560_1440_25fps.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" style={{
      backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.15) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)`
    }}></div>
      
      <div className="relative z-10 container mx-auto px-4 py-20 lg:py-32">
        <div className="max-w-5xl mx-auto text-center">
          {/* Welcome Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-slate-800/50 backdrop-blur-sm rounded-full text-blue-300 text-sm font-medium mb-8 border border-slate-700/50">
            Welcome to Krush Media ✨
          </div>
          
          {/* Main Headline */}
          <div className="space-y-2 mb-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl text-white leading-tight font-bold">
              {t.headline}
            </h1>
            <h1 className="text-5xl lg:text-8xl leading-tight font-bold md:text-7xl">
              <span className="text-blue-400 underline decoration-blue-400/30 decoration-4 underline-offset-8 text-center font-light text-6xl">
                {t.highlightWord}
              </span>{' '}
              <span className="text-white italic font-light">
                {t.subheadline}
              </span>
            </h1>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-light text-white/90 italic">
              {t.tagline}
            </h2>
          </div>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            {t.description}
          </p>
          
          {/* CTA Button */}
          <div className="flex flex-col items-center gap-6 mb-16">
            <Button onClick={onScrollToForm} className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-4 px-12 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-xl border-0">
              {t.cta} ✨
            </Button>
            <div className="flex items-center text-green-300 font-medium text-sm">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              {t.guarantee}
            </div>
          </div>
          
          {/* Trust Section with Logo Spaces */}
          <div className="border-t border-slate-700/30 pt-16">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              {/* Trust Stats */}
              <div className="flex flex-col items-center lg:items-start">
                <div className="text-4xl md:text-5xl font-light text-white mb-2">
                  {t.trustedBy}
                </div>
                <p className="text-slate-400 text-sm font-light max-w-xs">
                  {t.trustedText}
                </p>
              </div>
              
              {/* Vertical Divider */}
              <div className="hidden lg:block w-px h-16 bg-slate-700/50"></div>
              
              {/* Logo Placeholders */}
              <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12 opacity-60">
                {[1, 2, 3, 4, 5].map(index => <div key={index} className="flex items-center justify-center w-24 h-12 bg-slate-800/30 border border-slate-700/30 rounded-lg backdrop-blur-sm hover:bg-slate-700/30 transition-colors">
                    <div className="w-16 h-6 bg-slate-600/40 rounded"></div>
                  </div>)}
              </div>
            </div>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="w-6 h-6 text-slate-400 cursor-pointer hover:text-blue-400 transition-colors" onClick={onScrollToForm} />
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-blue-400/10 rounded-full blur-3xl"></div>
    </section>;
};
export default HeroSection;