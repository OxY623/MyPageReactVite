import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export function PortfolioSection() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const navigate = useNavigate();

  // Заглушки для портфолио
  const portfolioItems = [
    {
      id: 1,
      title:
        lang == "ru"
          ? "Лендинг для бренда аксессуаров"
          : "Landing page for accessories brand",
      description:
        lang == "ru"
          ? "Имиджевый сайт-витрина для бренда латунных интерьерных аксессуаров с акцентом на визуальную подачу продукта"
          : "Imagery website showcase for a brand of brass interior accessories with an emphasis on visual product presentation",
      category: lang == "ru" ? "Лендинг" : "Landing",
      image: "./portfolio/bookend_2.jpg",
    },
    {
      id: 2,
      title:
        lang == "ru" ? "Сайт по аренде квартир" : "Apartment rental website",
      description:
        lang == "ru"
          ? "Сервис подбора и аренды квартир с удобной навигацией, карточками объектов и акцентом на быстрый поиск и доверие к предложениям"
          : "Apartment rental service with intuitive navigation, property cards, and a strong focus on fast search and trust in listings",
      category: lang == "ru" ? "Сервис" : "Service",
      image: "./portfolio/rental.jpg",
    },
    {
      id: 3,
      title:
        lang == "ru"
          ? "Солнечные панели GreenRobotic"
          : "GreenRobotic solar panels",
      description:
        lang == "ru"
          ? "Тестовый лендинг для компании GreenRobotic, демонстрирующий решения в области солнечной энергетики с акцентом на экологичность, технологии и долгосрочную эффективность"
          : "Test landing page for GreenRobotic showcasing solar energy solutions with a focus on sustainability, technology, and long-term efficiency",
      category: lang == "ru" ? "Лендинг" : "Landing",
      image: "./portfolio/green.jpg",
    },
    {
      id: 4,
      title:
        lang == "ru"
          ? "Платформа для поиска мероприятий по интересам"
          : "Interest-based events platform",
      description:
        lang == "ru"
          ? "Участие в разработке платформы для поиска мероприятий по интересам, создания встреч и объединения людей в тематические сообщества онлайн и офлайн"
          : "Participation in the development of a platform for discovering interest-based events, creating gatherings, and connecting like-minded people through online and offline communities",
      category: lang == "ru" ? "Платформа" : "Platform",
      image: "./portfolio/event.jpg",
    },
    {
      id: 5,
      title:
        lang == "ru"
          ? "Бренд унисекс-одежды Foxy&OxY"
          : "Foxy&OxY unisex clothing brand",
      description:
        lang == "ru"
          ? "Разработка и запуск бренда унисекс-одежды с собственным сайтом, ориентированного на современный городской стиль и социальную ответственность. Проект включает онлайн-продажи, проработанную визуальную айдентику и благотворительную инициативу — 10% прибыли направляется в фонд помощи диким животным."
          : "Development and launch of a unisex clothing brand with a custom-built website, focused on modern urban style and social responsibility. The project includes online sales, a strong visual identity, and a charity initiative, with 10% of profits donated to wildlife conservation funds.",
      category: lang == "ru" ? "Бренд / E-commerce" : "Brand / E-commerce",
      image: "./portfolio/fox.jpg",
    },
  ];

  return (
    <section id="portfolio" className="py-20 px-4 bg-secondary/10">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t("portfolio.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("portfolio.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {portfolioItems.map((item) => (
            <Card
              key={item.id}
              className="border-2 hover:border-primary/50 transition-colors"
            >
              <CardHeader>
                <div
                  className="w-full h-48 bg-gradient-to-br from-primary/20 to-secondary rounded-lg mb-4 flex items-center justify-center"
                  style={{
                    backgroundImage: `url(${item.image})`,
                    backgroundPosition: "center",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <span className="text-muted-foreground text-sm" hidden>
                    Изображение
                  </span>
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
            onClick={() => navigate("/portfolio")}
            size="lg"
            className="text-lg px-8 py-6 h-auto"
          >
            {t("portfolio.viewDetails")}
          </Button>
        </div>
      </div>
    </section>
  );
}
