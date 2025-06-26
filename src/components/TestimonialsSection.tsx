import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface TestimonialsSectionProps {
  language: 'en' | 'es';
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ language }) => {
  const content = {
    en: {
      title: "What Our Contractors Are Saying",
      testimonials: [
        {
          name: "Carlos Rodriguez",
          business: "Rodriguez HVAC",
          location: "Houston, TX",
          text: "In 90 days, we went from struggling to find customers to being booked solid for 6 weeks out. The bilingual approach really works in our market.",
          rating: 5
        },
        {
          name: "Maria Gonzalez",
          business: "Gonzalez Roofing Solutions",
          location: "Los Angeles, CA",
          text: "I was skeptical about AI marketing, but the results speak for themselves. My phone hasn't stopped ringing with qualified leads.",
          rating: 5
        },
        {
          name: "Antonio Herrera",
          business: "Herrera Plumbing",
          location: "San Antonio, TX",
          text: "Finally, a marketing company that understands our community. The Spanish campaigns brought in customers I never would have reached before.",
          rating: 5
        }
      ]
    },
    es: {
      title: "Lo Que Dicen Nuestros Contratistas",
      testimonials: [
        {
          name: "Carlos Rodriguez",
          business: "Rodriguez HVAC",
          location: "Houston, TX",
          text: "En 90 días, pasamos de luchar por encontrar clientes a estar reservados sólidamente por 6 semanas. El enfoque bilingüe realmente funciona en nuestro mercado.",
          rating: 5
        },
        {
          name: "Maria Gonzalez",
          business: "Gonzalez Roofing Solutions",
          location: "Los Angeles, CA",
          text: "Era escéptica sobre el marketing con IA, pero los resultados hablan por sí mismos. Mi teléfono no ha parado de sonar con clientes calificados.",
          rating: 5
        },
        {
          name: "Antonio Herrera",
          business: "Herrera Plumbing",
          location: "San Antonio, TX",
          text: "Finalmente, una empresa de marketing que entiende nuestra comunidad. Las campañas en español trajeron clientes que nunca habría alcanzado antes.",
          rating: 5
        }
      ]
    }
  };

  const t = content[language];

  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            {t.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {t.testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white shadow-lg border-0 hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                {/* Stars */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <div key={i} className="w-5 h-5 text-yellow-400">⭐</div>
                  ))}
                </div>
                
                {/* Testimonial Text */}
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                
                {/* Author Info */}
                <div className="border-t pt-4">
                  <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                  <p className="text-orange-600 font-semibold">{testimonial.business}</p>
                  <p className="text-gray-500 text-sm">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
