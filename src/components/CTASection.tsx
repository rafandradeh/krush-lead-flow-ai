import React from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import LeadCaptureForm from './LeadCaptureForm';

interface CTASectionProps {
  language: 'en' | 'es';
}

const CTASection: React.FC<CTASectionProps> = ({ language }) => {
  const content = {
    en: {
      title: "Ready to 3x Your Leads in 90 Days?",
      subtitle: "Join hundreds of contractors who've transformed their business with our proven system",
      benefits: [
        "No long-term contracts",
        "Full setup in 7 days",
        "90-day money-back guarantee",
        "Dedicated support team"
      ],
      urgency: "Limited spots available this month"
    },
    es: {
      title: "¿Listo para Triplicar Sus Clientes en 90 Días?",
      subtitle: "Únase a cientos de contratistas que han transformado su negocio con nuestro sistema comprobado",
      benefits: [
        "Sin contratos a largo plazo",
        "Configuración completa en 7 días",
        "Garantía de devolución de dinero de 90 días",
        "Equipo de soporte dedicado"
      ],
      urgency: "Plazas limitadas disponibles este mes"
    }
  };

  const t = content[language];

  return (
    <section id="cta-form" className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                {t.title}
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                {t.subtitle}
              </p>
              
              {/* Benefits List */}
              <div className="space-y-4 mb-8">
                {t.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
              
              {/* Urgency Badge */}
              <div className="inline-flex items-center bg-orange-500 text-white px-4 py-2 rounded-full font-semibold animate-pulse">
                <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
                {t.urgency}
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="flex justify-center">
              <LeadCaptureForm language={language} formType="seo" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
