
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ServicesSectionProps {
  language: 'en' | 'es';
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ language }) => {
  const content = {
    en: {
      title: "Complete Growth System - Everything You Need",
      subtitle: "Focus on your trade. We'll handle the marketing.",
      services: [
        {
          title: "Conversion-Optimized Landing Pages",
          description: "Professional pages designed to turn visitors into customers",
          features: ["Mobile-responsive design", "Local SEO optimized", "A/B tested for conversions"]
        },
        {
          title: "Targeted Advertising",
          description: "Geofenced campaigns on Google LSA and Meta targeting your local market",
          features: ["Google Local Service Ads", "Facebook & Instagram ads", "Geographic targeting"]
        },
        {
          title: "AI-Powered CRM",
          description: "Automated lead nurturing that works 24/7",
          features: ["Automatic lead qualification", "Smart follow-up sequences", "Intelligent scheduling"]
        },
        {
          title: "Reputation Management",
          description: "Automated review generation and reputation monitoring",
          features: ["Review request automation", "Response management", "Online reputation monitoring"]
        },
        {
          title: "Performance Dashboard",
          description: "Weekly reports showing your ROI and lead quality metrics",
          features: ["Lead conversion tracking", "ROI calculations", "Performance insights"]
        }
      ]
    },
    es: {
      title: "Sistema de Crecimiento Completo - Todo Lo Que Necesita",
      subtitle: "Concéntrese en su oficio. Nosotros manejamos el marketing.",
      services: [
        {
          title: "Páginas de Destino Optimizadas para Conversión",
          description: "Páginas profesionales diseñadas para convertir visitantes en clientes",
          features: ["Diseño responsive móvil", "Optimizado para SEO local", "Probado A/B para conversiones"]
        },
        {
          title: "Publicidad Dirigida",
          description: "Campañas geofocalizadas en Google LSA y Meta dirigidas a su mercado local",
          features: ["Anuncios de Servicio Local de Google", "Anuncios de Facebook e Instagram", "Orientación geográfica"]
        },
        {
          title: "CRM Impulsado por IA",
          description: "Nutrición automatizada de clientes que funciona 24/7",
          features: ["Calificación automática de clientes", "Secuencias de seguimiento inteligentes", "Programación inteligente"]
        },
        {
          title: "Gestión de Reputación",
          description: "Generación automatizada de reseñas y monitoreo de reputación",
          features: ["Automatización de solicitudes de reseñas", "Gestión de respuestas", "Monitoreo de reputación online"]
        },
        {
          title: "Panel de Rendimiento",
          description: "Informes semanales mostrando su ROI y métricas de calidad de clientes",
          features: ["Seguimiento de conversión de clientes", "Cálculos de ROI", "Perspectivas de rendimiento"]
        }
      ]
    }
  };

  const t = content[language];

  return (
    <section className="py-20 bg-gradient-to-br from-stone-50 via-blue-50 to-cyan-50 dark:from-stone-900 dark:via-slate-800 dark:to-blue-900 relative overflow-hidden">
      {/* Sophisticated texture overlay inspired by the branding image */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `
          radial-gradient(circle at 20% 80%, rgba(14, 165, 233, 0.08) 0%, transparent 50%), 
          radial-gradient(circle at 80% 20%, rgba(217, 119, 6, 0.06) 0%, transparent 50%),
          radial-gradient(circle at 40% 40%, rgba(168, 85, 247, 0.04) 0%, transparent 50%)
        `
      }}></div>
      
      {/* Premium geometric accents */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-cyan-400/10 to-blue-500/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-gradient-to-tr from-amber-400/10 to-orange-500/10 rounded-full blur-xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          {/* Brand accent element */}
          <div className="inline-flex items-center justify-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-slate-700 via-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center shadow-xl">
              <div className="w-4 h-4 bg-gradient-to-br from-cyan-300 to-blue-200 rounded-full"></div>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-800 via-blue-800 to-cyan-800 bg-clip-text text-transparent dark:from-slate-100 dark:via-blue-200 dark:to-cyan-200">
            {t.title}
          </h2>
          <p className="text-xl font-medium text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
          
          {/* Elegant separator */}
          <div className="mt-8 flex justify-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-[2px] bg-gradient-to-r from-transparent to-cyan-400"></div>
              <div className="w-2 h-2 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full"></div>
              <div className="w-8 h-[2px] bg-gradient-to-l from-transparent to-cyan-400"></div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {t.services.map((service, index) => (
            <Card key={index} className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm shadow-2xl hover:shadow-3xl transition-all duration-500 border-0 rounded-3xl overflow-hidden group hover:scale-105 relative">
              {/* Premium card accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600"></div>
              
              {/* Sophisticated hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <CardHeader className="pb-4 pt-8 px-8 relative z-10">
                {/* Service number badge */}
                <div className="absolute top-4 right-6">
                  <div className="w-8 h-8 bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 rounded-full flex items-center justify-center text-xs font-bold text-slate-600 dark:text-slate-300">
                    {(index + 1).toString().padStart(2, '0')}
                  </div>
                </div>
                
                <CardTitle className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4 group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-300">
                  {service.title}
                </CardTitle>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {service.description}
                </p>
              </CardHeader>
              
              <CardContent className="px-8 pb-8">
                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center group/feature">
                      <div className="w-6 h-6 bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 rounded-lg mr-4 flex items-center justify-center shadow-lg group-hover/feature:shadow-xl group-hover/feature:scale-110 transition-all duration-300">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <span className="text-sm text-slate-700 dark:text-slate-300 font-medium group-hover/feature:text-slate-900 dark:group-hover/feature:text-white transition-colors duration-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
                
                {/* Premium bottom accent */}
                <div className="mt-6 pt-4 border-t border-slate-200/50 dark:border-slate-700/50">
                  <div className="flex justify-center">
                    <div className="flex space-x-1">
                      <div className="w-1 h-1 bg-cyan-400 rounded-full"></div>
                      <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                      <div className="w-1 h-1 bg-indigo-600 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Sophisticated section footer */}
        <div className="mt-16 flex justify-center">
          <div className="bg-gradient-to-r from-slate-800 via-blue-700 to-cyan-700 rounded-full px-8 py-4 shadow-2xl">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-gradient-to-br from-cyan-300 to-blue-200 rounded-full animate-pulse"></div>
              <span className="text-white font-medium">Complete Growth System</span>
              <div className="w-3 h-3 bg-gradient-to-br from-blue-300 to-cyan-200 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
