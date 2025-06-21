
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
          title: "Bilingual Landing Pages",
          description: "Conversion-optimized pages in English & Spanish that turn visitors into customers",
          features: ["Mobile-responsive design", "Local SEO optimized", "A/B tested for conversions"]
        },
        {
          title: "Targeted Advertising",
          description: "Geofenced campaigns on Google LSA and Meta targeting Hispanic markets",
          features: ["Google Local Service Ads", "Facebook & Instagram ads", "Geographic targeting"]
        },
        {
          title: "AI-Powered CRM",
          description: "Automated lead nurturing that works 24/7 in both languages",
          features: ["Automatic lead qualification", "Bilingual follow-up sequences", "Smart scheduling"]
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
          title: "Páginas de Destino Bilingües",
          description: "Páginas optimizadas para conversión en inglés y español que convierten visitantes en clientes",
          features: ["Diseño responsive móvil", "Optimizado para SEO local", "Probado A/B para conversiones"]
        },
        {
          title: "Publicidad Dirigida",
          description: "Campañas geofocalizadas en Google LSA y Meta dirigidas a mercados hispanos",
          features: ["Anuncios de Servicio Local de Google", "Anuncios de Facebook e Instagram", "Orientación geográfica"]
        },
        {
          title: "CRM Impulsado por IA",
          description: "Nutrición automatizada de clientes que funciona 24/7 en ambos idiomas",
          features: ["Calificación automática de clientes", "Secuencias de seguimiento bilingües", "Programación inteligente"]
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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            {t.title}
          </h2>
          <p className="text-xl text-gray-600">
            {t.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {t.services.map((service, index) => (
            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0 hover:scale-105">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold text-gray-800 mb-2">
                  {service.title}
                </CardTitle>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
