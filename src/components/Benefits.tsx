import { Stethoscope, Sparkles, HeartPulse, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Benefits = () => {
  const benefits = [
    {
      icon: Stethoscope,
      title: "Досвідчені лікарі",
      description: "Команда кваліфікованих стоматологів з багаторічним досвідом та постійним підвищенням кваліфікації",
    },
    {
      icon: Sparkles,
      title: "Сучасне обладнання",
      description: "Новітні технології та устаткування європейського рівня для точної діагностики та лікування",
    },
    {
      icon: HeartPulse,
      title: "Безболісне лікування",
      description: "Використання сучасних методів анестезії для максимально комфортного та безболісного лікування",
    },
    {
      icon: Calendar,
      title: "Зручний онлайн-запис",
      description: "Записуйтесь на прийом в зручний для вас час онлайн або за телефоном без черг та очікування",
    },
  ];

  return (
    <section id="about" className="py-16 lg:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Чому обирають нас
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ми створюємо комфортні умови для якісного стоматологічного обслуговування
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card
                key={index}
                className="border-0 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 bg-card group"
              >
                <CardContent className="p-6 lg:p-8">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
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

export default Benefits;
