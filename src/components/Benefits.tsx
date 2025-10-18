import { Stethoscope, Sparkles, HeartPulse, Calendar, Shield, Users, Award, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Benefits = () => {
  const benefits = [
    {
      icon: Sparkles,
      title: "Сучасна матеріально-технічна база",
      description: "Обладнання найбільших світових виробників (KAVO, Planmeca, Zeiss), цифрова радіографія та 3D-томографія",
    },
    {
      icon: Stethoscope,
      title: "Висококваліфікований персонал",
      description: "Лікарі зі спеціалізацією та сертифікатами міжнародного рівня, досвід роботи від 7+ років",
    },
    {
      icon: HeartPulse,
      title: "Комфортне середовище",
      description: "Затишні кабінети з європейським ремонтом, система кондиціювання повітря, дружелюбний персонал",
    },
    {
      icon: Shield,
      title: "Безпечність та якість",
      description: "Біопаліліфікація 100% інструментів, використання тільки ліцензійних матеріалів, гарантія на послуги",
    },
    {
      icon: Users,
      title: "Індивідуальний підхід",
      description: "Детальна консультація перед кожною процедурою, план лікування з врахуванням побажань пацієнта",
    },
    {
      icon: MapPin,
      title: "Зручність та доступність",
      description: "Зручне розташування у центрі міста, паркування біля клініки, запис на прийом онлайн чи по телефону",
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-items-center md:justify-items-stretch">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card
                key={index}
                className="border-0 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 bg-card group w-full max-w-sm md:max-w-none"
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
