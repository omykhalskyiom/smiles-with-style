import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Smile, Sparkles, Shield, Pill, Heart, Baby, Wrench, Crown, Check } from "lucide-react";
import { useState } from "react";

const Services = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const services = [
    {
      icon: Shield,
      title: "Профілактика та гігієна",
      description: "Професійна чистка зубів, фторування, герметизація фісур, індивідуальна гігієнічна консультація.",
      price: "400-600 грн",
      duration: "45-60 хв",
      details: [
        { name: "Професійна чистка зубів ультразвуком", price: "500-600 грн" },
        { name: "Видалення зубного каменю", price: "400-500 грн" },
        { name: "Фторування емалі", price: "150-200 грн" },
        { name: "Герметизація фісур", price: "200-300 грн" },
        { name: "Полірування зубів", price: "включено" },
        { name: "Індивідуальна консультація з гігієни", price: "безкоштовно" },
        { name: "Підбір засобів догляду", price: "включено" }
      ]
    },
    {
      icon: Smile,
      title: "Терапевтичне лікування",
      description: "Лікування карієсу, пульпіту, періодонтиту, відбілювання зубів. Якісні пломби з гарантією.",
      price: "250-2000 грн",
      duration: "30-90 хв",
      details: [
        { name: "Лікування карієсу всіх стадій", price: "250-800 грн" },
        { name: "Лікування пульпіту та періодонтиту", price: "800-1500 грн" },
        { name: "Естетичні пломби з композитних матеріалів", price: "400-1200 грн" },
        { name: "Реставрація зубів", price: "1000-2000 грн" },
        { name: "Професійне відбілювання", price: "1500-3000 грн" },
        { name: "Ендодонтичне лікування", price: "800-1800 грн" },
        { name: "Гарантія на всі роботи", price: "включено" }
      ]
    },
    {
      icon: Crown,
      title: "Ортопедія та протезування",
      description: "Коронки, мости, імплантація, знімні протези, вініри. Сучасні матеріали та методи.",
      price: "2000-7000 грн",
      duration: "2-6 місяців",
      details: [
        { name: "Металокерамічні коронки", price: "2000-3500 грн" },
        { name: "Циркониєві коронки", price: "4000-7000 грн" },
        { name: "Мостовидні протези", price: "від 5000 грн" },
        { name: "Вініри та люмініри", price: "3000-8000 грн" },
        { name: "Імплантація зубів", price: "від 8000 грн" },
        { name: "Знімні протези", price: "2000-6000 грн" },
        { name: "Цифрове моделювання посмішки", price: "безкоштовно" }
      ]
    },
    {
      icon: Wrench,
      title: "Ортодонтія",
      description: "Брекет-системи, елайнери, пластинки для дітей. Виправлення прикусу та вирівнювання зубів.",
      price: "2000-25000 грн",
      duration: "6-24 місяці",
      details: [
        { name: "Металеві брекет-системи", price: "2000-8000 грн" },
        { name: "Керамічні брекети", price: "8000-15000 грн" },
        { name: "Сапфірові брекети", price: "12000-18000 грн" },
        { name: "Лінгвальні брекети", price: "15000-25000 грн" },
        { name: "Елайнери (прозорі капи)", price: "від 20000 грн" },
        { name: "Пластинки для дітей", price: "2000-4000 грн" },
        { name: "Ретейнери після лікування", price: "1500-3000 грн" }
      ]
    },
    {
      icon: Pill,
      title: "Хірургічна стоматологія",
      description: "Видалення зубів, синус-ліфтинг, пластика м'яких тканин. Безболісні операції.",
      price: "500-3000 грн",
      duration: "30-60 хв",
      details: [
        { name: "Видалення зубів будь-якої складності", price: "500-1500 грн" },
        { name: "Видалення зубів мудрості", price: "800-2000 грн" },
        { name: "Синус-ліфтинг", price: "від 5000 грн" },
        { name: "Пластика м'яких тканин", price: "1500-3000 грн" },
        { name: "Резекція верхівки кореня", price: "1200-2500 грн" },
        { name: "Імплантація кісткової тканини", price: "від 4000 грн" },
        { name: "Безболісна анестезія", price: "включено" }
      ]
    },
    {
      icon: Baby,
      title: "Дитяча стоматологія",
      description: "Лікування молочних зубів, герметизація, профілактика. Безболісне лікування в ігровій формі.",
      price: "150-500 грн",
      duration: "20-45 хв",
      details: [
        { name: "Лікування молочних зубів", price: "150-400 грн" },
        { name: "Герметизація фісур", price: "200-350 грн" },
        { name: "Фторування дитячих зубів", price: "150-250 грн" },
        { name: "Профілактичні огляди", price: "безкоштовно" },
        { name: "Навчання гігієні в ігровій формі", price: "включено" },
        { name: "Адаптація дитини до стоматолога", price: "безкоштовно" },
        { name: "Безболісне лікування", price: "включено" }
      ]
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
                className="border-0 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 bg-card group cursor-pointer"
                onClick={() => setSelectedService(index)}
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

        <Dialog open={selectedService !== null} onOpenChange={(open) => !open && setSelectedService(null)}>
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
            {selectedService !== null && (
              <>
                <DialogHeader>
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      {(() => {
                        const Icon = services[selectedService].icon;
                        return <Icon className="w-7 h-7 text-primary" />;
                      })()}
                    </div>
                    <div>
                      <DialogTitle className="text-2xl">{services[selectedService].title}</DialogTitle>
                      <div className="flex items-center gap-4 mt-2">
                        <span className="bg-primary/10 text-primary px-3 py-1 rounded-md font-medium text-sm">
                          {services[selectedService].price}
                        </span>
                        <span className="text-muted-foreground text-sm">
                          {services[selectedService].duration}
                        </span>
                      </div>
                    </div>
                  </div>
                  <DialogDescription className="text-base mt-4">
                    {services[selectedService].description}
                  </DialogDescription>
                </DialogHeader>
                
                <div className="mt-6">
                  <h4 className="text-lg font-semibold text-foreground mb-4">Що входить у послугу:</h4>
                  <ul className="space-y-3">
                    {services[selectedService].details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        <div className="flex-1 flex items-start justify-between gap-4">
                          <span className="text-muted-foreground leading-relaxed">{detail.name}</span>
                          <span className="text-primary font-medium text-sm whitespace-nowrap">{detail.price}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Services;
