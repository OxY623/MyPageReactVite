import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { User, Code2, MessageCircle } from 'lucide-react';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import avatar from './img/photo_2025-01-07_17-44-41.jpg'

function App() {
  const [activeSection, setActiveSection] = useState('about');

  const renderContent = () => {
    switch (activeSection) {
      case 'about':
        return <About />;
      case 'projects':
        return <Projects />;
      case 'contact':
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-black/50 backdrop-blur-lg border-b border-white/10 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="h-10 w-10">
              <AvatarImage src={avatar} />
              <AvatarFallback>AA</AvatarFallback>
            </Avatar>
            <h1 className="text-xl font-bold">Артем Алексютович</h1>
          </div>
          <nav className="flex gap-6">
            <Button 
              variant={activeSection === 'about' ? 'secondary' : 'ghost'}
              onClick={() => setActiveSection('about')}
            >
              <User className="mr-2 h-4 w-4" />
              Обо мне
            </Button>
            <Button
              variant={activeSection === 'projects' ? 'secondary' : 'ghost'}
              onClick={() => setActiveSection('projects')}
            >
              <Code2 className="mr-2 h-4 w-4" />
              Проекты
            </Button>
            <Button
              variant={activeSection === 'contact' ? 'secondary' : 'ghost'}
              onClick={() => setActiveSection('contact')}
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Контакты
            </Button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-16">
        {renderContent()}
      </main>

      <footer className="border-t border-white/10 py-6 text-center text-gray-400">
        <p>© 2025 Артем Алексютович. Все права защищены.</p>
      </footer>
    </div>
  );
}

export default App;