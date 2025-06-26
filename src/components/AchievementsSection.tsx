import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface AchievementsSectionProps {
  language: 'en' | 'es';
}

const AchievementsSection: React.FC<AchievementsSectionProps> = ({ language }) => {
  const content = {
    en: {
      title: "Our Achievements",
      stats: [
        {
          category: "We helped",
          number: "500+",
          description: "Contractors scale their business with our proven AI marketing system."
        },
        {
          category: "Awards",
          number: "15+",
          description: "Industry recognition from Google Partners, Meta Business Partners, and local business awards."
        },
        {
          category: "Clients back",
          number: "95%",
          description: "of clients continue working with us after the first 90 days and refer new customers."
        }
      ],
      industryTitle: "Leading Home Services Industry",
      industrySubtitle: "We work with leading contractors.",
      industryDescription: "Our proven system has helped contractors across HVAC, Roofing, Plumbing, and Electrical services achieve consistent growth. We understand the unique challenges of home service businesses and deliver results that matter.",
      contactButton: "Contact us",
      testimonialsTitle: "What customers say's"
    },
    es: {
      title: "Nuestros Logros",
      stats: [
        {
          category: "Hemos ayudado",
          number: "500+",
          description: "Contratistas a escalar su negocio con nuestro sistema de marketing IA comprobado."
        },
        {
          category: "Premios",
          number: "15+",
          description: "Reconocimiento de la industria de Google Partners, Meta Business Partners y premios de negocios locales."
        },
        {
          category: "Clientes regresan",
          number: "95%",
          description: "de los clientes continúan trabajando con nosotros después de los primeros 90 días y refieren nuevos clientes."
        }
      ],
      industryTitle: "Liderando la Industria de Servicios del Hogar",
      industrySubtitle: "Trabajamos con contratistas líderes.",
      industryDescription: "Nuestro sistema comprobado ha ayudado a contratistas en HVAC, Techos, Plomería y Servicios Eléctricos a lograr crecimiento consistente. Entendemos los desafíos únicos de los negocios de servicios del hogar y entregamos resultados que importan.",
      contactButton: "Contáctanos",
      testimonialsTitle: "Lo que dicen los clientes"
    }
  };

  const t = content[language];

  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        {/* Achievements Stats */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-12">
            {t.title}
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {t.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="mb-4">
                  <span className="text-orange-500 text-sm font-medium uppercase tracking-wide">
                    {stat.category}
                  </span>
                  <div className="w-2 h-2 bg-orange-500 rounded-full mx-auto mt-2 mb-6"></div>
                </div>
                <div className="text-5xl md:text-6xl font-bold text-gray-800 dark:text-white mb-4">
                  {stat.number}
                </div>
                <p className="text-gray-600 dark:text-gray-300 max-w-sm mx-auto leading-relaxed">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Industry Leadership Section */}
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-16">
            {t.industryTitle}
          </h3>
          
          <div className="max-w-4xl mx-auto text-center">
            <h4 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6">
              {t.industrySubtitle}
            </h4>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8">
              {t.industryDescription}
            </p>
            <Button className="bg-gray-800 dark:bg-gray-700 hover:bg-gray-900 dark:hover:bg-gray-600 text-white px-8 py-3 rounded-full font-semibold">
              {t.contactButton}
            </Button>
          </div>
        </div>

        {/* Testimonials Title */}
        <div className="text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            {t.testimonialsTitle}
          </h3>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
