import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, ShoppingCart, Boxes, Brain, Globe, Laptop } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Клиентская часть магазина",
    description: "В рамках проекта разрабатывалась копия интернет-магазина на React со всем его функционалом. Для переноса на более современные технологии. Детали проекта, над которым я работал, находятся под соглашением о конфиденциальности, поэтому я не могу их обсуждать.",
    image: "https://avatars.mds.yandex.net/i?id=64194c6e9ec18d91bb0007a08442d539642e285d-7215189-images-thumbs&n=13",
    tech: ["React", "TypeScript", "Tailwind", "Redux"],
    icon: <ShoppingCart className="h-6 w-6" />
  },
  // {
  //   id: 2,
  //   title: "Task Management App",
  //   description: "Приложение для управления задачами с drag-and-drop интерфейсом и real-time обновлениями.",
  //   image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?q=80&w=600&auto=format",
  //   tech: ["React", "Firebase", "Material-UI", "React DnD"],
  //   icon: <Boxes className="h-6 w-6" />
  // },
  // {
  //   id: 3,
  //   title: "AI Chat Interface",
  //   description: "Чат-интерфейс для взаимодействия с AI моделями, поддержка различных типов контента.",
  //   image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=600&auto=format",
  //   tech: ["React", "WebSocket", "TailwindCSS", "OpenAI API"],
  //   icon: <Brain className="h-6 w-6" />
  // },
  // {
  //   id: 4,
  //   title: "Social Media Dashboard",
  //   description: "Дашборд для управления социальными сетями с аналитикой и планировщиком постов.",
  //   image: "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?q=80&w=600&auto=format",
  //   tech: ["React", "Next.js", "Graph API", "Chakra UI"],
  //   icon: <Globe className="h-6 w-6" />
  // },
  // {
  //   id: 5,
  //   title: "Code Editor Platform",
  //   description: "Онлайн IDE с поддержкой множества языков и совместным редактированием кода.",
  //   image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=600&auto=format",
  //   tech: ["React", "Monaco Editor", "WebRTC", "Docker"],
  //   icon: <Laptop className="h-6 w-6" />
  // }
];

export default function Projects() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12">Мои проекты</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="bg-zinc-900 border-zinc-800 p-6">
              <div className="mb-4">
                {project.icon}
              </div>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <Badge key={tech} variant="outline" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
              {/*<Button variant="secondary" size="sm">*/}
              {/*  <ExternalLink className="mr-2 h-4 w-4" />*/}
              {/*  Подробнее*/}
              {/*</Button>*/}
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}