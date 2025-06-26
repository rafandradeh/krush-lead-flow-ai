import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Users, MessageSquare, Check } from 'lucide-react';

interface ProblemsSectionProps {
  language: 'en' | 'es';
}

const ProblemsSection: React.FC<ProblemsSectionProps> = ({ language }) => {
  const content = {
    en: {
      title: "Stop Losing Money to These Common Problems",
      subtitle: "Every day you wait, your competitors are stealing your customers",
      problems: [
        {
          icon: Users,
          title: "Chasing Leads That Ghost You",
          description: "You spend hours following up on leads that never convert, wasting time you could spend on actual jobs."
        },
        {
          icon: MessageSquare,
          title: "Cash Flow Struggles During Slow Seasons",
          description: "Inconsistent lead flow means unpredictable income and stress about making payroll and covering expenses."
        },
        {
          icon: Check,
          title: "Outdated Marketing That Doesn't Work",
          description: "Your current marketing approach isn't reaching customers effectively, leaving money on the table."
        }
      ],
      solution: {
        title: "Here's How We Fix It:",
        points: [
          "AI-powered lead qualification filters out time-wasters",
          "Consistent pipeline keeps cash flowing year-round",
          "Targeted campaigns reach your ideal customers",
          "Automated follow-up nurtures leads while you work"
        ]
      }
    },
    es: {
      title: "Deje de Perder Dinero con Estos Problemas Comunes",
      subtitle: "Cada día que espera, sus competidores están robando sus clientes",
      problems: [
        {
          icon: Users,
          title: "Persiguiendo Clientes Que Desaparecen",
          description: "Pasa horas siguiendo clientes potenciales que nunca se convierten, perdiendo tiempo que podría usar en trabajos reales."
        },
        {
          icon: MessageSquare,
          title: "Problemas de Flujo de Efectivo en Temporadas Lentas",
          description: "El flujo inconsistente de clientes significa ingresos impredecibles y estrés sobre la nómina y gastos."
        },
        {
          icon: Check,
          title: "Marketing Obsoleto Que No Funciona",
          description: "Su enfoque de marketing actual no llega efectivamente a los clientes, dejando dinero sobre la mesa."
        }
      ],
      solution: {
        title: "Así Lo Solucionamos:",
        points: [
          "Calificación de clientes impulsada por IA filtra los que pierden tiempo",
          "Pipeline consistente mantiene el efectivo fluyendo todo el año",
          "Campañas dirigidas alcanzan a sus clientes ideales",
          "Seguimiento automatizado nutre clientes mientras usted trabaja"
        ]
      }
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
          <p className="text-xl text-red-600 font-semibold">
            {t.subtitle}
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {t.problems.map((problem, index) => (
            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-red-500">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-red-100 p-3 rounded-full mr-4">
                    <problem.icon className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{problem.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{problem.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Solution */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 md:p-12 text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            {t.solution.title}
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {t.solution.points.map((point, index) => (
              <div key={index} className="flex items-start">
                <Check className="w-6 h-6 text-green-300 mr-3 mt-1 flex-shrink-0" />
                <p className="text-lg">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
