import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, DollarSign, Users, Star } from "lucide-react";

const Orthodontics = () => {
  const orthodonticServices = [
    {
      title: "Брекет-системи",
      subtitle: "Металеві, керамічні, лінгвальні",
      duration: "18-24 місяці",
      price: "15000-25000 грн",
      description: "Брекети виправляють положення зубів та прикусу. Це довгостроковий процес, але результат трансформує посмішку.",
      types: [
        { name: "Металеві", price: "15000-18000 грн", description: "Найбільш надійні, видимі, найменш дорогі" },
        { name: "Керамічні", price: "18000-22000 грн", description: "Менш видимі, дорожче" },
        { name: "Лінгвальні", price: "20000-25000 грн", description: "Встановлюються з внутрішнього боку, невидимі" }
      ],
      stages: [
        "Діагностика та планування",
        "Підготовка",
        "Встановлення брекетів",
        "Періодичні корегування",
        "Видалення брекетів",
        "Утримування результату"
      ],
      popular: true
    },
    {
      title: "Елайнери",
      subtitle: "Прозорі капи",
      duration: "6-18 місяців",
      price: "12000-20000 грн",
      description: "Невидимі прозорі капи для виправлення положення зубів. Абсолютно невидимі, знімаються для їдання та чищення.",
      advantages: [
        "Абсолютно невидимі",
        "Знімаються для їдання та чищення",
        "Більш комфортні ніж брекети",
        "Більш естетичні"
      ],
      limitations: [
        "Потребують дисципліни (20-22 години на день)",
        "Дорожчі за брекети",
        "Не підходять для дуже складних випадків"
      ]
    },
    {
      title: "Пластинки для дітей",
      subtitle: "Знімні ортодонтичні апарати",
      duration: "1-3 роки",
      price: "2000-5000 грн",
      description: "Знімні ортодонтичні апарати для виправлення прикусу у дітей під час росту.",
      advantages: [
        "Недорогі",
        "Знімаються для їдання та чищення",
        "Ефективні у дітей з активним ростом",
        "Простіше ніж брекети"
      ],
      recommendation: "Зазвичай використовуються перед встановленням брекетів для підготовки"
    },
    {
      title: "Консультація ортодонта",
      subtitle: "Оцінка потреби в лікуванні",
      duration: "30-45 хвилин",
      price: "200-300 грн",
      description: "Встаниця консультація для оцінки потреби в ортодонтичному лікуванні.",
      includes: [
        "Огляд та діагностика",
        "Фотографія",
        "Пальпація щелеп",
        "Опитування",
        "Рекомендації",
        "Кошторисна вартості",
        "Відповіді на запитання"
      ]
    }
  ];

  return (
    <section id="orthodontics" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Ортодонтія
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Виправлення прикусу та вирівнювання зубів для красивої посмішки
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {orthodonticServices.map((service, index) => (
            <Card
              key={index}
              className={`border-0 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 ${service.popular ? "ring-2 ring-primary" : ""
                }`}
            >
              {service.popular && (
                <div className="absolute -top-3 left-4">
                  <Badge className="bg-primary text-primary-foreground">
                    <Star className="w-3 h-3 mr-1" />
                    Популярно
                  </Badge>
                </div>
              )}
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <CardTitle className="text-xl font-bold text-foreground mb-2">
                      {service.title}
                    </CardTitle>
                    <p className="text-muted-foreground text-sm mb-3">
                      {service.subtitle}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{service.duration}</span>
                  </div>
                  <div className="flex items-center gap-1 text-primary font-semibold">
                    <DollarSign className="w-4 h-4" />
                    <span>{service.price}</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>

                {service.types && (
                  <div className="mb-4">
                    <h4 className="font-semibold text-foreground mb-2">Типи брекетів:</h4>
                    <div className="space-y-2">
                      {service.types.map((type, i) => (
                        <div key={i} className="flex justify-between items-center p-2 bg-secondary/50 rounded-md">
                          <div>
                            <span className="font-medium text-foreground">{type.name}</span>
                            <p className="text-xs text-muted-foreground">{type.description}</p>
                          </div>
                          <span className="text-sm font-semibold text-primary">{type.price}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {service.stages && (
                  <div className="mb-4">
                    <h4 className="font-semibold text-foreground mb-2">Етапи лікування:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {service.stages.map((stage, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-muted-foreground">{stage}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {service.advantages && (
                  <div className="mb-4">
                    <h4 className="font-semibold text-foreground mb-2">Переваги:</h4>
                    <div className="space-y-1">
                      {service.advantages.map((advantage, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0"></div>
                          <span className="text-muted-foreground">{advantage}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {service.limitations && (
                  <div className="mb-4">
                    <h4 className="font-semibold text-foreground mb-2">Обмеження:</h4>
                    <div className="space-y-1">
                      {service.limitations.map((limitation, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-orange-500 rounded-full flex-shrink-0"></div>
                          <span className="text-muted-foreground">{limitation}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {service.includes && (
                  <div className="mb-4">
                    <h4 className="font-semibold text-foreground mb-2">Що включено:</h4>
                    <div className="space-y-1">
                      {service.includes.map((item, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-muted-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {service.recommendation && (
                  <div className="p-3 bg-primary/10 border border-primary/20 rounded-md">
                    <p className="text-sm text-foreground">
                      <strong>Рекомендація:</strong> {service.recommendation}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-primary/10 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Готові до красивої посмішки?
            </h3>
            <p className="text-muted-foreground mb-6">
              Записуйтесь на консультацію ортодонта та отримайте індивідуальний план лікування
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Users className="w-4 h-4" />
                <span>Досвідчені ортодонти</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Star className="w-4 h-4" />
                <span>Сучасні методи лікування</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span>Зручний графік</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Orthodontics;

