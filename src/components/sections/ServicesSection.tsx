import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useTranslation } from 'react-i18next';
import { Clock, DollarSign } from 'lucide-react';

export function ServicesSection() {
  const { t } = useTranslation();

  const services = [
    {
      id: 1,
      title: t('services.landingProduct.title'),
      description: t('services.landingProduct.description'),
      duration: t('services.landingProduct.duration'),
      price: t('services.landingProduct.price'),
      offer: t('services.landingProduct.offer'),
    },
    {
      id: 2,
      title: t('services.landingBenefits.title'),
      description: t('services.landingBenefits.description'),
      duration: t('services.landingBenefits.duration'),
      price: t('services.landingBenefits.price'),
      offer: t('services.landingBenefits.offer'),
    },
    {
      id: 3,
      title: t('services.miniSite.title'),
      description: t('services.miniSite.description'),
      duration: t('services.miniSite.duration'),
      price: t('services.miniSite.price'),
      offer: t('services.miniSite.offer'),
    },
    {
      id: 4,
      title: t('services.layout.title'),
      description: t('services.layout.description'),
      duration: t('services.layout.duration'),
      price: t('services.layout.price'),
      offer: t('services.layout.offer'),
    },
    {
      id: 5,
      title: t('services.deployment.title'),
      description: t('services.deployment.description'),
      duration: t('services.deployment.duration'),
      price: t('services.deployment.price'),
      offer: t('services.deployment.offer'),
    },
    {
      id: 6,
      title: t('services.seo.title'),
      description: t('services.seo.description'),
      duration: t('services.seo.duration'),
      price: t('services.seo.price'),
      offer: t('services.seo.offer'),
    },
  ];

  return (
    <section id="services" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('services.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card key={service.id} className="border-2 hover:border-primary/50 transition-colors flex flex-col">
              <CardHeader>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                <CardDescription className="text-base min-h-[60px]">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>{service.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-semibold">
                    <DollarSign className="h-4 w-4 text-primary" />
                    <span>{service.price}</span>
                  </div>
                </div>
                <div className="mt-auto pt-4 border-t border-border">
                  <p className="text-sm text-primary font-medium">
                    {service.offer}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

