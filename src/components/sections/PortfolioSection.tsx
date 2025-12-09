import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export function PortfolioSection() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  // Заглушки для портфолио
  const portfolioItems = [
    {
      id: 1,
      title: 'Лендинг для студии красоты',
      description: 'Современный дизайн с онлайн-записью',
      category: 'Лендинг',
    },
    {
      id: 2,
      title: 'Лендинг для кафе',
      description: 'Адаптивный сайт с меню и бронированием',
      category: 'Лендинг',
    },
    {
      id: 3,
      title: 'Мини-сайт для IT-компании',
      description: 'Корпоративный сайт с информацией о компании',
      category: 'Мини-сайт',
    },
    {
      id: 4,
      title: 'Лендинг для онлайн-курса',
      description: 'Продающий лендинг с отзывами и формой регистрации',
      category: 'Лендинг',
    },
  ];

  return (
    <section id="portfolio" className="py-20 px-4 bg-secondary/10">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('portfolio.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('portfolio.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {portfolioItems.map((item) => (
            <Card key={item.id} className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-secondary rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-muted-foreground text-sm">Изображение</span>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </div>
                <span className="text-xs text-primary bg-primary/10 px-2 py-1 rounded">
                  {item.category}
                </span>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {item.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            onClick={() => navigate('/portfolio')}
            size="lg"
            className="text-lg px-8 py-6 h-auto"
          >
            {t('portfolio.viewDetails')}
          </Button>
        </div>
      </div>
    </section>
  );
}

