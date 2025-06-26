import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Users, MessageSquare, Check } from 'lucide-react';
interface ProblemsSectionProps {
  language: 'en' | 'es';
}
const ProblemsSection: React.FC<ProblemsSectionProps> = ({
  language
}) => {
  const content = {
    en: {
      title: "Stop Losing Money to These Common Problems",
      subtitle: "Every day you wait, your competitors are stealing your customers",
      problems: [{
        icon: Users,
        title: "Chasing Leads That Ghost You",
        description: "You spend hours following up on leads that never convert, wasting time you could spend on actual jobs."
      }, {
        icon: MessageSquare,
        title: "Cash Flow Struggles During Slow Seasons",
        description: "Inconsistent lead flow means unpredictable income and stress about making payroll and covering expenses."
      }, {
        icon: Check,
        title: "Outdated Marketing That Doesn't Work",
        description: "Your current marketing approach isn't reaching customers effectively, leaving money on the table."
      }],
      solution: {
        title: "Here's How We Fix It:",
        points: ["AI-powered lead qualification filters out time-wasters", "Consistent pipeline keeps cash flowing year-round", "Targeted campaigns reach your ideal customers", "Automated follow-up nurtures leads while you work"]
      }
    },
    es: {
      title: "Deje de Perder Dinero con Estos Problemas Comunes",
      subtitle: "Cada día que espera, sus competidores están robando sus clientes",
      problems: [{
        icon: Users,
        title: "Persiguiendo Clientes Que Desaparecen",
        description: "Pasa horas siguiendo clientes potenciales que nunca se convierten, perdiendo tiempo que podría usar en trabajos reales."
      }, {
        icon: MessageSquare,
        title: "Problemas de Flujo de Efectivo en Temporadas Lentas",
        description: "El flujo inconsistente de clientes significa ingresos impredecibles y estrés sobre la nómina y gastos."
      }, {
        icon: Check,
        title: "Marketing Obsoleto Que No Funciona",
        description: "Su enfoque de marketing actual no llega efectivamente a los clientes, dejando dinero sobre la mesa."
      }],
      solution: {
        title: "Así Lo Solucionamos:",
        points: ["Calificación de clientes impulsada por IA filtra los que pierden tiempo", "Pipeline consistente mantiene el efectivo fluyendo todo el año", "Campañas dirigidas alcanzan a sus clientes ideales", "Seguimiento automatizado nutre clientes mientras usted trabaja"]
      }
    }
  };
  const t = content[language];
  return <section className="py-20 bg-gradient-to-br from-stone-50 via-amber-50 to-cyan-50 dark:from-stone-900 dark:via-stone-800 dark:to-slate-900 relative overflow-hidden">
      {/* Subtle texture overlay inspired by the image */}
      <div style={{
      backgroundImage: `radial-gradient(circle at 20% 80%, rgba(217, 119, 6, 0.1) 0%, transparent 50%), 
                         radial-gradient(circle at 80% 20%, rgba(14, 165, 233, 0.1) 0%, transparent 50%),
                         radial-gradient(circle at 40% 40%, rgba(168, 85, 247, 0.05) 0%, transparent 50%)`
    }} className="absolute inset-0 opacity-30 bg-gray-950"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-600 to-orange-600 rounded-full mb-6 shadow-xl">
            <div className="w-6 h-6 bg-white rounded-full"></div>
          </div>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-stone-800 via-amber-800 to-stone-900 bg-clip-text dark:from-stone-100 dark:via-amber-200 dark:to-stone-100 text-zinc-50 md:text-6xl">
            {t.title}
          </h2>
          <p className="text-xl font-semibold text-orange-600 dark:text-orange-400">
            {t.subtitle}
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {t.problems.map((problem, index) => <Card key={index} className="bg-white/80 dark:bg-stone-900/80 backdrop-blur-sm shadow-2xl hover:shadow-3xl transition-all duration-500 border-0 rounded-2xl overflow-hidden group hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardContent className="p-8 relative z-10">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-br from-red-500 to-orange-600 p-4 rounded-2xl mr-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <problem.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-stone-800 dark:text-stone-100 group-hover:text-stone-900 dark:group-hover:text-white transition-colors duration-300">
                    {problem.title}
                  </h3>
                </div>
                <p className="text-stone-600 dark:text-stone-300 leading-relaxed text-base">
                  {problem.description}
                </p>
              </CardContent>
            </Card>)}
        </div>

        {/* Solution - Updated with sophisticated branding aesthetic */}
        <div className="bg-gradient-to-br from-slate-800 via-stone-700 to-amber-800 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden border border-amber-200/20">
          {/* Sophisticated texture overlay inspired by the branding image */}
          <div style={{
          backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(14, 165, 233, 0.15) 0%, transparent 40%),
              radial-gradient(circle at 75% 75%, rgba(217, 119, 6, 0.12) 0%, transparent 40%),
              linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, transparent 50%)
            `
        }} className="absolute inset-0 opacity-20 bg-gray-950"></div>
          
          {/* Elegant geometric accents */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-cyan-400/10 to-blue-500/10 rounded-full -translate-y-20 translate-x-20 blur-xl"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-amber-400/10 to-orange-500/10 rounded-full translate-y-16 -translate-x-16 blur-lg"></div>
          
          {/* Premium brand accent */}
          <div className="absolute top-6 left-6">
            <div className="w-3 h-3 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full shadow-lg"></div>
          </div>
          
          <div className="relative z-10">
            <div className="flex items-center justify-center mb-8">
              <div className="w-1 h-12 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full mr-4"></div>
              <h3 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-white via-cyan-100 to-blue-100 bg-clip-text text-transparent">
                {t.solution.title}
              </h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {t.solution.points.map((point, index) => <div key={index} className="flex items-start bg-white/8 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/12 hover:border-cyan-400/30 transition-all duration-300 group">
                  <div className="bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 p-2.5 rounded-xl mr-4 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-lg text-gray-100 leading-relaxed group-hover:text-white transition-colors duration-300">
                    {point}
                  </p>
                </div>)}
            </div>
            
            {/* Sophisticated bottom accent */}
            <div className="mt-8 flex justify-center">
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ProblemsSection;