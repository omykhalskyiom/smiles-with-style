import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Check } from "lucide-react";
import { useScrollToSection } from "@/hooks/useScrollToSection";

const Pricing = () => {
  const scrollToSection = useScrollToSection();

  const services = [
    {
      id: "consultation",
      title: "Консультація лікаря",
      price: "150",
      features: [
        "Огляд стоматолога",
        "Діагностика проблем",
        "План лікування",
        "Рекомендації",
      ],
    },
    {
      id: "cleaning",
      title: "Професійна чистка зубів",
      price: "400-600",
      features: [
        "Ультразвукова чистка",
        "Полірування зубів",
        "Фторування емалі",
        "45-60 хвилин",
      ],
      popular: true,
    },
    {
      id: "filling",
      title: "Пломба (світлоопісна)",
      price: "250-400",
      features: [
        "Анестезія",
        "Видалення карієсу",
        "Світлова пломба",
        "Гарантія 1 рік",
      ],
    },
    {
      id: "crown",
      title: "Коронка керамічна",
      price: "2500-3500",
      features: [
        "Індивідуальне виготовлення",
        "2 сеанси",
        "Гарантія 2 роки",
        "10-15 років служби",
      ],
    },
    {
      id: "implant",
      title: "Імплантат",
      price: "5000-7000",
      features: [
        "Титановий імплант",
        "3-6 місяців лікування",
        "Гарантія 2 роки",
        "20+ років служби",
      ],
    },
    {
      id: "whitening",
      title: "Відбілювання зубів",
      price: "1500-2000",
      features: [
        "Професійне відбілювання",
        "Безпечні матеріали",
        "Ефект 5-8 тонів",
        "6-12 місяців результат",
      ],
    },
    {
      id: "braces",
      title: "Брекети (за всю систему)",
      price: "15000-25000",
      features: [
        "Металеві/керамічні/лінгвальні",
        "18-24 місяці лікування",
        "Всі корегування включені",
        "Ретейнери в подарунок",
      ],
    },
    {
      id: "aligners",
      title: "Елайнери",
      price: "12000-20000",
      features: [
        "Прозорі капи",
        "6-18 місяців лікування",
        "Невидимі",
        "Знімаються для їжі",
      ],
    },
  ];

  return (
    <section id="pricing" className="py-16 lg:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Прозорі ціни — без прихованих платежів
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Чесні ціни на якісні послуги стоматології
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 justify-items-center md:justify-items-stretch">
          {services.map((service) => (
            <Card
              key={service.id}
              className={`border-0 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 relative group flex flex-col w-full max-w-sm md:max-w-none ${service.popular ? "ring-2 ring-primary" : ""
                }`}
            >
              {service.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Популярно
                  </span>
                </div>
              )}
              <CardContent className="p-6 lg:p-8 pt-8 flex-grow">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {service.title}
                </h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-primary">
                    {service.price}
                  </span>
                  <span className="text-muted-foreground ml-2">грн</span>
                </div>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="p-6 pt-0 mt-auto">
                <Button
                  className="w-full bg-primary hover:bg-primary/90"
                  onClick={() => scrollToSection("contacts")}
                >
                  Записатись
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Не знайшли потрібну послугу? Зв'яжіться з нами для консультації
          </p>
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            onClick={() => scrollToSection("contacts")}
          >
            Отримати консультацію
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
