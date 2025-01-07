import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import avatar from '@/img/photo_2025-01-07_17-44-41.jpg'

const skills = [
  "React", "TypeScript", "Next.js", "Redux", "TailwindCSS",
  "Node.js", "GraphQL", "REST API", "Git", "CI/CD",
  "Jest", "React Testing Library", "Webpack", "Vite"
];

export default function About() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <Avatar className="h-32 w-32 mx-auto mb-8">
            <AvatarImage src={avatar} />
            <AvatarFallback>AA</AvatarFallback>
          </Avatar>
          <h1 className="text-4xl font-bold mb-4">Артем Алексютович</h1>
          <h2 className="text-2xl text-gray-400 mb-6">Frontend-разработчик | React, Redux</h2>
        </div>

        <div className="space-y-8">
          <section>
            <h3 className="text-xl font-semibold mb-4">О себе</h3>
            <p className="text-gray-400 leading-relaxed">
              Постоянно изучаю новые технологии и подходы, чтобы делать продукты более
              комфортными для пользователей и эффективными для бизнеса.
              В свободное время увлекаюсь настольными играми, которые развивают стратегическое
              мышление, а также изучаю дизайн, чтобы лучше понимать работу коллег и предлагать
              креативные решения. Люблю путешествовать и наблюдать за тем, как разные культуры
              находят уникальные подходы к решению привычных задач
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-4">Опыт работы</h3>
            <div className="space-y-6">
              <div className="border border-white/10 rounded-lg p-6">
                <h4 className="font-semibold">Frontend-разработчик</h4>
                <p className="text-gray-400">ООО "TechSolutions" (аутсорсинг для GreenRoad) • 2022 - 2023</p>
                <ul className="list-disc list-inside text-gray-400 mt-2">
                  <li>Разработка и поддержка интерфейсов для веб-платформы GreenRoad, которая предоставляет
                    решения для управления автопарками и оптимизации дорожной безопасности</li>
                  <li>Миграция ключевых модулей платформы с JavaScript на TypeScript для повышения
                    надежности и масштабируемости</li>
                  <li>Создание модульных UI-компонентов с использованием React и TailwindCSS,
                    адаптированных под требования международных клиентов.</li>
                  <li>Менторинг junior разработчиков</li>
                  <li>Проведение код-ревью и технических собеседований</li>
                </ul>
              </div>
              
              <div className="border border-white/10 rounded-lg p-6">
                <h4 className="font-semibold">Frontend-разработчик</h4>
                <p className="text-gray-400">ООО "РЭД КОД" • 2020 - 2022</p>
                <ul className="list-disc list-inside text-gray-400 mt-2">
                  <li>Разработка клиентских интерфейсов для CRM-системы компании с использованием React и
                    Redux.</li>
                  <li> Создание многостраничного приложения с формами обратной связи, включая сложные
                    формы с валидацией на React Hook Form и Yup</li>
                  <li> Настройка автоматизации разработки: ESLint, Prettier, Husky</li>
                  <li> Разработка конструкторов товаров на HTML5 Canvas для интеграции в бизнес-процессы
                    компании</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-4">Навыки</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge key={skill} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}