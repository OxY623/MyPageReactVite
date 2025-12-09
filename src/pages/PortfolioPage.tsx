import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { ThemeToggle } from '@/components/ThemeToggle';
import { LanguageToggle } from '@/components/LanguageToggle';
import { ArrowLeft } from 'lucide-react';

export default function PortfolioPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  // Проекты портфолио с галереей
  const portfolioItems = [
    {
      id: 1,
      title: 'Лендинг для студии красоты',
      description: 'Современный дизайн с онлайн-записью. Полностью адаптивный сайт с интеграцией системы бронирования. Реализована удобная форма записи, галерея работ и контактная информация.',
      fullDescription: 'Разработан полнофункциональный лендинг для студии красоты с современным дизайном. Сайт полностью адаптивен и отлично работает на всех устройствах. Интегрирована система онлайн-бронирования, которая позволяет клиентам записываться на услуги прямо с сайта. Добавлена галерея работ мастера и удобная форма обратной связи.',
      category: 'Лендинг',
      technologies: ['React', 'Tailwind CSS', 'Vite'],
      images: [
        { id: 1, src: '/portfolio/beauty-studio-1.jpg', alt: 'Главная страница' },
        { id: 2, src: '/portfolio/beauty-studio-2.jpg', alt: 'Страница услуг' },
        { id: 3, src: '/portfolio/beauty-studio-3.jpg', alt: 'Форма записи' },
      ],
    },
    {
      id: 2,
      title: 'Лендинг для кафе',
      description: 'Адаптивный сайт с меню и бронированием. Интеграция с системами онлайн-заказа и картами.',
      fullDescription: 'Разработан стильный лендинг для кафе с интерактивным меню, системой онлайн-бронирования столиков и интеграцией с картами. Сайт имеет привлекательный дизайн, который передаёт атмосферу заведения. Реализована возможность просмотра меню, бронирования столиков и заказа еды на вынос.',
      category: 'Лендинг',
      technologies: ['React', 'TypeScript', 'Tailwind CSS'],
      images: [
        { id: 1, src: '/portfolio/cafe-1.jpg', alt: 'Главная страница' },
        { id: 2, src: '/portfolio/cafe-2.jpg', alt: 'Меню' },
        { id: 3, src: '/portfolio/cafe-3.jpg', alt: 'Бронирование' },
        { id: 4, src: '/portfolio/cafe-4.jpg', alt: 'Контакты' },
      ],
    },
    {
      id: 3,
      title: 'Мини-сайт для IT-компании',
      description: 'Корпоративный сайт с информацией о компании, услугах и команде. Адаптивный дизайн и современный интерфейс.',
      fullDescription: 'Создан мини-сайт для IT-компании с полной информацией о компании, услугах и команде. Реализованы секции: о компании, услуги, портфолио, команда и контакты. Сайт полностью адаптивен и оптимизирован для поисковых систем.',
      category: 'Мини-сайт',
      technologies: ['React', 'Next.js', 'Tailwind CSS'],
      images: [
        { id: 1, src: '/portfolio/company-1.jpg', alt: 'Главная страница' },
        { id: 2, src: '/portfolio/company-2.jpg', alt: 'Страница услуг' },
        { id: 3, src: '/portfolio/company-3.jpg', alt: 'Команда' },
      ],
    },
    {
      id: 4,
      title: 'Лендинг для онлайн-курса',
      description: 'Лендинг с блоками преимуществ, отзывами и формой регистрации. Оптимизирован для конверсии.',
      fullDescription: 'Разработан продающий лендинг для онлайн-курса с секциями преимуществ, отзывов студентов и формой регистрации. Реализована система оплаты и интеграция с платформой обучения. Сайт оптимизирован для максимальной конверсии посетителей в студентов.',
      category: 'Лендинг',
      technologies: ['React', 'Vite', 'Tailwind CSS'],
      images: [
        { id: 1, src: '/portfolio/course-1.jpg', alt: 'Главная страница' },
        { id: 2, src: '/portfolio/course-2.jpg', alt: 'Преимущества' },
        { id: 3, src: '/portfolio/course-3.jpg', alt: 'Отзывы' },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 w-full bg-background/80 backdrop-blur-lg border-b border-border z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              onClick={() => navigate('/')}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t('portfolioPage.back')}
            </Button>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              MR.Frontender89
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 pt-24">
        {/* Title */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t('portfolioPage.title')}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            {t('portfolioPage.description')}
          </p>
        </div>

        {/* Portfolio Items */}
        <div className="space-y-16">
          {portfolioItems.map((item) => (
            <div key={item.id} className="space-y-6">
              {/* Заголовок и категория */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-2">{item.title}</h2>
                  <span className="inline-block text-sm text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>
                {item.technologies && (
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Описание проекта */}
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-xl mb-3">Описание проекта</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {item.fullDescription || item.description}
                  </CardDescription>
                </CardHeader>
              </Card>

              {/* Галерея с каруселью */}
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-xl">Галерея проекта</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative w-full">
                    <Carousel className="w-full" opts={{ align: 'start', loop: true }}>
                      <CarouselContent className="-ml-2 md:-ml-4">
                        {item.images.map((image) => (
                          <CarouselItem key={image.id} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                            <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden border border-border group">
                              <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                onError={(e) => {
                                  // Если изображение не загрузилось, показываем заглушку
                                  const target = e.target as HTMLImageElement;
                                  const container = target.parentElement;
                                  if (container) {
                                    target.style.display = 'none';
                                    const placeholder = container.querySelector('.image-placeholder') as HTMLElement;
                                    if (placeholder) {
                                      placeholder.style.display = 'flex';
                                    }
                                  }
                                }}
                              />
                              <div className="image-placeholder hidden absolute inset-0 w-full h-full bg-gradient-to-br from-primary/20 to-secondary rounded-lg items-center justify-center">
                                <span className="text-muted-foreground text-lg text-center px-4">
                                  {image.alt}
                                </span>
                              </div>
                            </div>
                            <p className="text-sm text-muted-foreground mt-2 text-center">
                              {image.alt}
                            </p>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      {item.images.length > 1 && (
                        <>
                          <CarouselPrevious className="left-2 md:left-4" />
                          <CarouselNext className="right-2 md:right-4" />
                        </>
                      )}
                    </Carousel>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

