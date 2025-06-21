
import React from 'react';

interface FooterProps {
  language: 'en' | 'es';
}

const Footer: React.FC<FooterProps> = ({ language }) => {
  const content = {
    en: {
      company: "Krush Media",
      tagline: "AI-Powered Growth for Hispanic Contractors",
      phone: "(555) 123-KRUSH",
      email: "hello@krushmedia.com",
      address: "Houston, TX | Los Angeles, CA | Miami, FL",
      copyright: "© 2024 Krush Media. All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Service"
    },
    es: {
      company: "Krush Media",
      tagline: "Crecimiento Impulsado por IA para Contratistas Hispanos",
      phone: "(555) 123-KRUSH",
      email: "hola@krushmedia.com",
      address: "Houston, TX | Los Angeles, CA | Miami, FL",
      copyright: "© 2024 Krush Media. Todos los derechos reservados.",
      privacy: "Política de Privacidad",
      terms: "Términos de Servicio"
    }
  };

  const t = content[language];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-2">{t.company}</h3>
          <p className="text-gray-400 mb-6">{t.tagline}</p>
          
          <div className="space-y-2 mb-8">
            <p className="text-lg font-semibold">{t.phone}</p>
            <p className="text-gray-400">{t.email}</p>
            <p className="text-gray-400">{t.address}</p>
          </div>
          
          <div className="border-t border-gray-800 pt-6">
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
              <p className="text-gray-400">{t.copyright}</p>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  {t.privacy}
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  {t.terms}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
