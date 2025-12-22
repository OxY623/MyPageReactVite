import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Mail, MessageCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

export function ContactsSection() {
  const { t } = useTranslation();

  const handleCtaClick = () => {
    window.open("https://t.me/frontender_89", "_blank");
  };

  return (
    <section id="contacts" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t("contacts.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("contacts.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Telegram */}
          <Card className="border-2 hover:border-primary/50 transition-colors">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <MessageCircle className="h-6 w-6 text-primary" />
                <CardTitle>{t("contacts.telegram")}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base mb-4">
                {t("contacts.telegramDescription")}
              </CardDescription>
              <Button
                variant="outline"
                className="w-full"
                onClick={() =>
                  window.open("https://t.me/frontender_89", "_blank")
                }
              >
                {t("contacts.openTelegram")}
              </Button>
            </CardContent>
          </Card>

          {/* Email */}
          <Card className="border-2 hover:border-primary/50 transition-colors">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Mail className="h-6 w-6 text-primary" />
                <CardTitle>{t("contacts.email")}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base mb-4">
                {t("contacts.emailDescription")}
              </CardDescription>
              <Button
                variant="outline"
                className="w-full"
                onClick={() =>
                  (window.location.href = "mailto:frontender7@gmail.com")
                }
              >
                frontender7@gmail.com
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* CTA кнопка */}
        <div className="text-center">
          <Button
            onClick={handleCtaClick}
            size="lg"
            className="text-lg px-8 py-6 h-auto"
          >
            {t("contacts.cta")}
          </Button>
        </div>
      </div>
    </section>
  );
}
