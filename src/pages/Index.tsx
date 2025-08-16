import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface CaseStudy {
  id: number;
  title: string;
  description: string;
  category: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  technologies: string[];
  image: string;
  featured: boolean;
}

const mockCases: CaseStudy[] = [
  {
    id: 1,
    title: "E-commerce Platform Redesign",
    description: "Полное переосмысление пользовательского опыта интернет-магазина с увеличением конверсии на 40%",
    category: "UI/UX Design",
    difficulty: "Advanced",
    technologies: ["React", "TypeScript", "Figma", "Analytics"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    featured: true
  },
  {
    id: 2,
    title: "Mobile Banking App",
    description: "Разработка интуитивного мобильного приложения для банковских операций",
    category: "Mobile Development",
    difficulty: "Intermediate",
    technologies: ["React Native", "Node.js", "MongoDB"],
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
    featured: false
  },
  {
    id: 3,
    title: "AI Dashboard Interface",
    description: "Создание dashboard для визуализации данных машинного обучения",
    category: "Data Visualization",
    difficulty: "Advanced",
    technologies: ["Python", "D3.js", "TensorFlow", "React"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    featured: true
  },
  {
    id: 4,
    title: "Brand Identity System",
    description: "Комплексная разработка фирменного стиля для стартапа в сфере экологии",
    category: "Branding",
    difficulty: "Beginner",
    technologies: ["Illustrator", "Photoshop", "After Effects"],
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop",
    featured: false
  },
  {
    id: 5,
    title: "SaaS Platform Development",
    description: "Создание масштабируемой SaaS платформы для управления проектами",
    category: "Web Development",
    difficulty: "Advanced",
    technologies: ["Next.js", "PostgreSQL", "Docker", "AWS"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    featured: true
  },
  {
    id: 6,
    title: "Cryptocurrency Wallet",
    description: "Безопасный кошелек для хранения и обмена криптовалют",
    category: "Blockchain",
    difficulty: "Advanced",
    technologies: ["Solidity", "Web3.js", "React", "MetaMask"],
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&h=400&fit=crop",
    featured: false
  }
];

const categories = ["Все", "UI/UX Design", "Mobile Development", "Web Development", "Data Visualization", "Branding", "Blockchain"];
const difficulties = ["Все", "Beginner", "Intermediate", "Advanced"];
const technologies = ["Все", "React", "TypeScript", "Python", "Figma", "Node.js", "Next.js", "React Native"];

export default function Index() {
  const [selectedCategory, setSelectedCategory] = useState("Все");
  const [selectedDifficulty, setSelectedDifficulty] = useState("Все");
  const [selectedTechnology, setSelectedTechnology] = useState("Все");

  const filteredCases = mockCases.filter(caseStudy => {
    const categoryMatch = selectedCategory === "Все" || caseStudy.category === selectedCategory;
    const difficultyMatch = selectedDifficulty === "Все" || caseStudy.difficulty === selectedDifficulty;
    const technologyMatch = selectedTechnology === "Все" || caseStudy.technologies.includes(selectedTechnology);
    
    return categoryMatch && difficultyMatch && technologyMatch;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800 border-green-200';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Advanced': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-cyan-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-orange-500 via-orange-400 to-cyan-400 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container mx-auto px-6 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent">
              OPEN CASES
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
              Изучайте реальные кейсы разработки, вдохновляйтесь и создавайте собственные проекты
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-white/90 text-lg px-8 py-3">
                <Icon name="Rocket" className="mr-2" size={20} />
                Начать изучение
              </Button>
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-3">
                <Icon name="Github" className="mr-2" size={20} />
                Посмотреть на GitHub
              </Button>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-cyan-300/20 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-orange-300/20 rounded-full blur-lg"></div>
      </section>

      {/* Filters Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Найдите идеальный кейс для изучения
          </h2>
          
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12 border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Category Filter */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  <Icon name="FolderOpen" className="inline mr-2" size={16} />
                  Категория
                </label>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedCategory(category)}
                      className={selectedCategory === category 
                        ? "bg-orange-500 hover:bg-orange-600 text-white" 
                        : "border-gray-200 text-gray-700 hover:border-orange-300 hover:text-orange-600"
                      }
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Difficulty Filter */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  <Icon name="BarChart3" className="inline mr-2" size={16} />
                  Сложность
                </label>
                <div className="flex flex-wrap gap-2">
                  {difficulties.map((difficulty) => (
                    <Button
                      key={difficulty}
                      variant={selectedDifficulty === difficulty ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedDifficulty(difficulty)}
                      className={selectedDifficulty === difficulty 
                        ? "bg-cyan-500 hover:bg-cyan-600 text-white" 
                        : "border-gray-200 text-gray-700 hover:border-cyan-300 hover:text-cyan-600"
                      }
                    >
                      {difficulty}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Technology Filter */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  <Icon name="Code2" className="inline mr-2" size={16} />
                  Технологии
                </label>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <Button
                      key={tech}
                      variant={selectedTechnology === tech ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedTechnology(tech)}
                      className={selectedTechnology === tech 
                        ? "bg-gradient-to-r from-orange-500 to-cyan-500 hover:from-orange-600 hover:to-cyan-600 text-white" 
                        : "border-gray-200 text-gray-700 hover:border-orange-300 hover:text-orange-600"
                      }
                    >
                      {tech}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-100 flex justify-between items-center">
              <span className="text-sm text-gray-600">
                Найдено кейсов: <span className="font-semibold text-orange-600">{filteredCases.length}</span>
              </span>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => {
                  setSelectedCategory("Все");
                  setSelectedDifficulty("Все");
                  setSelectedTechnology("Все");
                }}
                className="text-gray-500 hover:text-gray-700"
              >
                <Icon name="RotateCcw" className="mr-2" size={16} />
                Сбросить фильтры
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Cases Gallery */}
      <section className="container mx-auto px-6 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCases.map((caseStudy, index) => (
              <Card 
                key={caseStudy.id} 
                className={`group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl border-0 overflow-hidden ${
                  caseStudy.featured ? 'ring-2 ring-orange-200' : ''
                }`}
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={caseStudy.image} 
                    alt={caseStudy.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  {caseStudy.featured && (
                    <Badge className="absolute top-4 left-4 bg-orange-500 text-white border-0">
                      <Icon name="Star" className="mr-1" size={12} />
                      Рекомендуем
                    </Badge>
                  )}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="sm" className="bg-white/90 text-gray-900 hover:bg-white">
                      <Icon name="ArrowRight" size={16} />
                    </Button>
                  </div>
                </div>
                
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {caseStudy.category}
                    </Badge>
                    <Badge 
                      variant="outline" 
                      className={`text-xs ${getDifficultyColor(caseStudy.difficulty)}`}
                    >
                      {caseStudy.difficulty}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg leading-tight group-hover:text-orange-600 transition-colors">
                    {caseStudy.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <CardDescription className="text-sm mb-4 leading-relaxed">
                    {caseStudy.description}
                  </CardDescription>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {caseStudy.technologies.slice(0, 3).map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="outline" 
                        className="text-xs bg-gradient-to-r from-orange-50 to-cyan-50 border-orange-200/50 text-gray-700"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {caseStudy.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs text-gray-500">
                        +{caseStudy.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                  
                  <div className="flex gap-2 pt-2">
                    <Button size="sm" className="flex-1 bg-gradient-to-r from-orange-500 to-cyan-500 hover:from-orange-600 hover:to-cyan-600 text-white border-0">
                      <Icon name="Eye" className="mr-2" size={14} />
                      Изучить
                    </Button>
                    <Button variant="outline" size="sm" className="border-gray-200 hover:border-orange-300">
                      <Icon name="BookOpen" size={14} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {filteredCases.length === 0 && (
            <div className="text-center py-16">
              <Icon name="Search" size={48} className="mx-auto text-gray-300 mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">Кейсы не найдены</h3>
              <p className="text-gray-500">Попробуйте изменить параметры фильтрации</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Готовы поделиться своим кейсом?
            </h2>
            <p className="text-xl mb-8 text-gray-300">
              Помогите сообществу учиться на ваших проектах и получите обратную связь от экспертов
            </p>
            <Button size="lg" className="bg-gradient-to-r from-orange-500 to-cyan-500 hover:from-orange-600 hover:to-cyan-600 text-white border-0 text-lg px-8 py-3">
              <Icon name="Plus" className="mr-2" size={20} />
              Добавить кейс
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}