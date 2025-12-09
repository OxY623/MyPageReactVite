import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export function Hero() {
  const { t } = useTranslation();

  const handleCtaClick = () => {
    const contactsSection = document.getElementById('contacts');
    if (contactsSection) {
      contactsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background via-background to-secondary/20 px-4 py-20">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Фото */}
          <div className="flex-shrink-0">
            <Avatar className="h-48 w-48 md:h-64 md:w-64 border-4 border-primary">
              <AvatarImage src="/photo.jpg" alt="MR.Frontender89" />
              <AvatarFallback className="text-4xl bg-primary text-primary-foreground">
                MR
              </AvatarFallback>
            </Avatar>
          </div>

          {/* Текст */}
          <div className="text-center md:text-left flex-1">
            {/* Логотип */}
            <div className="mb-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                MR.Frontender89
              </h1>
            </div>

            {/* Заголовок */}
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              {t('hero.title')}
            </h2>

            {/* Подзаголовок */}
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              {t('hero.subtitle')}
            </p>

            {/* CTA кнопка */}
            <Button
              onClick={handleCtaClick}
              size="lg"
              className="text-lg px-8 py-6 h-auto"
            >
              {t('hero.cta')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

