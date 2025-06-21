
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

interface LeadCaptureFormProps {
  language: 'en' | 'es';
  formType: 'seo' | 'funnel';
}

const LeadCaptureForm: React.FC<LeadCaptureFormProps> = ({ language, formType }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
    service: '',
    city: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const content = {
    en: {
      seoTitle: "Get Your FREE Local SEO Score",
      funnelTitle: "Get Your FREE AI Funnel Assessment",
      name: "Full Name",
      email: "Email Address",
      phone: "Phone Number",
      business: "Business Name",
      service: "Primary Service",
      city: "City",
      submit: "Get My Free Analysis",
      submitting: "Analyzing...",
      services: {
        hvac: "HVAC",
        roofing: "Roofing",
        plumbing: "Plumbing",
        electrical: "Electrical",
        general: "General Contracting"
      }
    },
    es: {
      seoTitle: "Obtenga Su Puntuación SEO Local GRATIS",
      funnelTitle: "Obtenga Su Evaluación de Embudo AI GRATIS",
      name: "Nombre Completo",
      email: "Correo Electrónico",
      phone: "Número de Teléfono",
      business: "Nombre del Negocio",
      service: "Servicio Principal",
      city: "Ciudad",
      submit: "Obtener Mi Análisis Gratuito",
      submitting: "Analizando...",
      services: {
        hvac: "HVAC",
        roofing: "Techos",
        plumbing: "Plomería",
        electrical: "Electricidad",
        general: "Contratista General"
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: language === 'en' ? "Success!" : "¡Éxito!",
      description: language === 'en' 
        ? "We'll send your analysis within 24 hours!" 
        : "¡Enviaremos su análisis dentro de 24 horas!",
    });

    setIsSubmitting(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      business: '',
      service: '',
      city: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const t = content[language];

  return (
    <Card className="w-full max-w-md mx-auto shadow-xl border-0 bg-white">
      <CardHeader className="text-center pb-4">
        <CardTitle className="text-xl font-bold text-gray-800">
          {formType === 'seo' ? t.seoTitle : t.funnelTitle}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name" className="text-sm font-medium text-gray-700">
              {t.name} *
            </Label>
            <Input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              required
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="email" className="text-sm font-medium text-gray-700">
              {t.email} *
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              required
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
              {t.phone} *
            </Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              required
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="business" className="text-sm font-medium text-gray-700">
              {t.business} *
            </Label>
            <Input
              id="business"
              type="text"
              value={formData.business}
              onChange={(e) => handleInputChange('business', e.target.value)}
              required
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="service" className="text-sm font-medium text-gray-700">
              {t.service} *
            </Label>
            <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
              <SelectTrigger className="mt-1">
                <SelectValue placeholder={language === 'en' ? "Select service..." : "Seleccionar servicio..."} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="hvac">{t.services.hvac}</SelectItem>
                <SelectItem value="roofing">{t.services.roofing}</SelectItem>
                <SelectItem value="plumbing">{t.services.plumbing}</SelectItem>
                <SelectItem value="electrical">{t.services.electrical}</SelectItem>
                <SelectItem value="general">{t.services.general}</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="city" className="text-sm font-medium text-gray-700">
              {t.city} *
            </Label>
            <Input
              id="city"
              type="text"
              value={formData.city}
              onChange={(e) => handleInputChange('city', e.target.value)}
              required
              className="mt-1"
            />
          </div>

          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
            disabled={isSubmitting}
          >
            {isSubmitting ? t.submitting : t.submit}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default LeadCaptureForm;
