import { LanguageToggle } from "@/components/LanguageToggle";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowLeft } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export default function PortfolioPage() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const navigate = useNavigate();

  // Проекты портфолио с галереей
  const portfolioItems = [
    {
      id: 1,
      title:
        lang === "ru"
          ? "Лендинг для бренда аксессуаров"
          : "Accessories brand landing page",
      description:
        lang === "ru"
          ? "Разработал имиджевый лендинг с акцентом на визуальный сторителлинг и премиальную подачу продукта"
          : "Built an imagery-driven landing page focused on visual storytelling and premium product presentation",
      fullDescription:
        lang === "ru"
          ? "Самостоятельно реализовал имиджевый лендинг для бренда интерьерных аксессуаров. Основной фокус — визуальная иерархия, чистая композиция и ощущение премиальности. Продумал структуру, адаптивность и UX, чтобы продукт выглядел убедительно на любых устройствах."
          : "Independently delivered an imagery-focused landing page for an interior accessories brand. The project emphasizes visual hierarchy, clean composition, and a premium feel. Designed structure, responsiveness, and UX to ensure strong product perception across all devices.",
      category: lang === "ru" ? "Лендинг" : "Landing",
      technologies: ["React", "Vite", "Tailwind CSS"],
      images: [
        { id: 1, src: "/portfolio/bookend_2.jpg", alt: "Landing preview" },
        { id: 2, src: "/portfolio/bookend_2.jpg", alt: "Landing preview" },
        { id: 3, src: "/portfolio/bookend_2.jpg", alt: "Landing preview" },
      ],
    },
    {
      id: 2,
      title:
        lang === "ru" ? "Сервис аренды квартир" : "Apartment rental service",
      description:
        lang === "ru"
          ? "Разработка интерфейсов сервиса аренды с упором на поиск, структуру данных и доверие к контенту"
          : "Developed UI for an apartment rental service with a focus on search, data structure, and user trust",
      fullDescription:
        lang === "ru"
          ? "Участвовал в разработке сервиса аренды недвижимости. Проработал UI-логику карточек объектов, навигацию и пользовательские сценарии поиска. Делал акцент на читаемость данных, понятную структуру и удобство принятия решений пользователем."
          : "Contributed to the development of a real estate rental service. Worked on property cards UI logic, navigation, and search user flows. Focused on data clarity, structure, and decision-making UX.",
      category: lang === "ru" ? "Сервис" : "Service",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      images: [{ id: 1, src: "/portfolio/rental.jpg", alt: "Service UI" }],
    },
    {
      id: 3,
      title:
        lang === "ru"
          ? "Солнечные панели GreenRobotic"
          : "GreenRobotic solar panels",
      description:
        lang === "ru"
          ? "Тестовый продуктовый лендинг для green-tech компании с фокусом на технологии и устойчивое развитие"
          : "Test product landing page for a green-tech company focused on technology and sustainability",
      fullDescription:
        lang === "ru"
          ? "Разработал тестовый лендинг для green-tech компании GreenRobotic. Проект демонстрирует умение работать с продуктовой подачей, технологическими смыслами и экологической повесткой. Сделан упор на долгосрочную ценность продукта и понятную коммуникацию."
          : "Built a test landing page for the green-tech company GreenRobotic. The project highlights product thinking, technology-driven messaging, and sustainability values, with a focus on long-term product benefits and clear communication.",
      category: lang === "ru" ? "Лендинг" : "Landing",
      technologies: ["React", "Vite", "Tailwind CSS"],
      images: [
        {
          id: 1,
          src: "/portfolio/1_green.jpg",
          alt: "GreenRobotic landing header",
        },
        {
          id: 2,
          src: "/portfolio/2_green.jpg",
          alt: "GreenRobotic landing main content",
        },
        {
          id: 3,
          src: "/portfolio/3_green.jpg",
          alt: "GreenRobotic landing footer",
        },
      ],
    },
    {
      id: 4,
      title:
        lang === "ru"
          ? "Платформа мероприятий по интересам"
          : "Interest-based events platform",
      description:
        lang === "ru"
          ? "Участие в разработке социальной платформы с фокусом на сообщества и пользовательские сценарии"
          : "Participation in the development of a social platform focused on communities and user journeys",
      fullDescription:
        lang === "ru"
          ? "Принимал участие в разработке платформы для поиска мероприятий и объединения людей по интересам. Работал над интерфейсами, логикой взаимодействия и пользовательскими сценариями. Проект про масштабируемость, комьюнити и продуктовый подход."
          : "Participated in the development of a platform for discovering events and connecting people by interests. Worked on interfaces, interaction logic, and user flows. The project focuses on scalability, community-building, and product-driven thinking.",
      category: lang === "ru" ? "Платформа" : "Platform",
      technologies: ["React", "TypeScript", "WebSockets"],
      images: [{ id: 1, src: "/portfolio/event.jpg", alt: "Events platform" }],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 w-full bg-background/80 backdrop-blur-lg border-b border-border z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" onClick={() => navigate("/")}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t("portfolioPage.back")}
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
            {t("portfolioPage.title")}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            {t("portfolioPage.description")}
          </p>
        </div>

        {/* Portfolio Items */}
        <div className="space-y-16">
          {portfolioItems.map((item) => (
            <div key={item.id} className="space-y-6">
              {/* Заголовок и категория */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-2">
                    {item.title}
                  </h2>
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
                  <CardTitle className="text-xl mb-3">
                    Описание проекта
                  </CardTitle>
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
                    <Carousel
                      className="w-full"
                      opts={{ align: "start", loop: true }}
                    >
                      <CarouselContent className="-ml-2 md:-ml-4">
                        {item.images.map((image) => (
                          <CarouselItem
                            key={image.id}
                            className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3"
                          >
                            <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden border border-border group">
                              <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                                onError={(e) => {
                                  // Если изображение не загрузилось, показываем заглушку
                                  const target = e.target as HTMLImageElement;
                                  const container = target.parentElement;
                                  if (container) {
                                    target.style.display = "none";
                                    const placeholder = container.querySelector(
                                      ".image-placeholder"
                                    ) as HTMLElement;
                                    if (placeholder) {
                                      placeholder.style.display = "flex";
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
