import { Card, CardContent } from "@/components/ui/card";
import { Smile, Sparkles, Shield, Pill, Heart, Baby, Wrench, Crown } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: "Профілактика та гігієна",
      description: "Професійна чистка зубів, фторування, герметизація фісур, індивідуальна гігієнічна консультація.",
      price: "400-600 грн",
      duration: "45-60 хв"
    },
    {
      icon: Smile,
      title: "Терапевтичне лікування",
      description: "Лікування карієсу, пульпіту, періодонтиту, відбілювання зубів. Якісні пломби з гарантією.",
      price: "250-2000 грн",
      duration: "30-90 хв"
    },
    {
      icon: Crown,
      title: "Ортопедія та протезування",
      description: "Коронки, мости, імплантація, знімні протези, вініри. Сучасні матеріали та методи.",
      price: "2000-7000 грн",
      duration: "2-6 місяців"
    },
    {
      icon: Wrench,
      title: "Ортодонтія",
      description: "Брекет-системи, елайнери, пластинки для дітей. Виправлення прикусу та вирівнювання зубів.",
      price: "2000-25000 грн",
      duration: "6-24 місяці"
    },
    {
      icon: Pill,
      title: "Хірургічна стоматологія",
      description: "Видалення зубів, синус-ліфтинг, пластика м'яких тканин. Безболісні операції.",
      price: "500-3000 грн",
      duration: "30-60 хв"
    },
    {
      icon: Baby,
      title: "Дитяча стоматологія",
      description: "Лікування молочних зубів, герметизація, профілактика. Безболісне лікування в ігровій формі.",
      price: "150-500 грн",
      duration: "20-45 хв"
    },
  ];

  return (
    <section id="services" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Наші послуги
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Повний спектр стоматологічних послуг для всієї родини
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="border-0 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 bg-card group"
              >
                <CardContent className="p-6 lg:p-8">
                  <div className="flex items-start mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mr-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300 flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {service.title}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <span className="bg-primary/10 text-primary px-2 py-1 rounded-md font-medium">
                          {service.price}
                        </span>
                        <span className="text-muted-foreground">
                          {service.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
