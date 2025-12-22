import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { LanguageToggle } from "./components/LanguageToggle";
import { ContactsSection } from "./components/sections/ContactsSection";
import { Hero } from "./components/sections/Hero";
import { PortfolioSection } from "./components/sections/PortfolioSection";
import { ServicesSection } from "./components/sections/ServicesSection";
import { ThemeToggle } from "./components/ThemeToggle";
import PortfolioPage from "./pages/PortfolioPage";

function HomePage() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 w-full bg-background/80 backdrop-blur-lg border-b border-border z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              <span className="text-black dark:text-white">MR.</span>
              <span className="text-primary">Frontender</span>
              <span className="text-black dark:text-white">_89</span>
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <nav className="hidden md:flex gap-2">
              <Button
                variant="ghost"
                onClick={() => scrollToSection("services")}
              >
                {t("nav.services")}
              </Button>
              <Button variant="ghost" onClick={() => navigate("/portfolio")}>
                {t("nav.portfolio")}
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection("contacts")}
              >
                {t("nav.contacts")}
              </Button>
            </nav>
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <Hero />
        <ServicesSection />
        <PortfolioSection />
        <ContactsSection />
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-6 text-center text-muted-foreground">
        <p>{t("footer.copyright")}</p>
      </footer>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background text-foreground">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
