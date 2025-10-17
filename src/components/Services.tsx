import { Card, CardContent } from "@/components/ui/card";
import { Smile, Sparkles, Shield, Pill } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Smile,
      title: "Терапевтична стоматологія",
      description: "Лікування карієсу, пульпіту, періодонтиту. Якісні пломби з гарантією.",
    },
    {
      icon: Sparkles,
      title: "Естетична стоматологія",
      description: "Відбілювання зубів, вініри, реставрація. Голлівудська усмішка без болю.",
    },
    {
      icon: Shield,
      title: "Професійна гігієна",
      description: "Ультразвукова чистка, Air Flow, полірування та фторування емалі.",
    },
    {
      icon: Pill,
      title: "Хірургічна стоматологія",
      description: "Видалення зубів, імплантація, операції на яснах. Сучасні методи.",
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="border-0 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 bg-card group"
              >
                <CardContent className="p-6 lg:p-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
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
