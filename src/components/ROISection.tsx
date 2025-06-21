
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface ROISectionProps {
  language: 'en' | 'es';
}

const ROISection: React.FC<ROISectionProps> = ({ language }) => {
  const content = {
    en: {
      title: "The Numbers Don't Lie",
      subtitle: "See what our clients achieve in just 90 days",
      stats: [
        {
          number: "3x",
          label: "More Qualified Leads",
          description: "Triple your lead volume without increasing your workload"
        },
        {
          number: "65%",
          label: "Higher Conversion Rate",
          description: "AI qualification means better leads that actually convert"
        },
        {
          number: "90",
          label: "Days to Results",
          description: "Start seeing increased leads within the first month"
        },
        {
          number: "24/7",
          label: "Lead Nurturing",
          description: "Our AI never sleeps, always following up on your behalf"
        }
      ],
      guarantee: {
        title: "Our 90-Day Guarantee",
        description: "If you don't see a significant increase in qualified leads within 90 days, we'll work for free until you do."
      }
    },
    es: {
      title: "Los Números No Mienten",
      subtitle: "Vea lo que logran nuestros clientes en solo 90 días",
      stats: [
        {
          number: "3x",
          label: "Más Clientes Calificados",
          description: "Triple su volumen de clientes sin aumentar su carga de trabajo"
        },
        {
          number: "65%",
          label: "Mayor Tasa de Conversión",
          description: "La calificación por IA significa mejores clientes que realmente se convierten"
        },
        {
          number: "90",
          label: "Días a Resultados",
          description: "Comience a ver más clientes dentro del primer mes"
        },
        {
          number: "24/7",
          label: "Nutrición de Clientes",
          description: "Nuestra IA nunca duerme, siempre haciendo seguimiento por usted"
        }
      ],
      guarantee: {
        title: "Nuestra Garantía de 90 Días",
        description: "Si no ve un aumento significativo en clientes calificados dentro de 90 días, trabajaremos gratis hasta que lo haga."
      }
    }
  };

  const t = content[language];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            {t.title}
          </h2>
          <p className="text-xl text-gray-600">
            {t.subtitle}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {t.stats.map((stat, index) => (
            <Card key={index} className="bg-white shadow-lg border-0 text-center hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-600 mb-4">
                  {stat.number}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {stat.label}
                </h3>
                <p className="text-gray-600 text-sm">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Guarantee */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            {t.guarantee.title}
          </h3>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            {t.guarantee.description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ROISection;
