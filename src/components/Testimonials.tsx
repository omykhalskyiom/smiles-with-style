import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CLINIC_STATS } from "@/constants";

const Testimonials = () => {
  const testimonials = [
    {
      id: "olena",
      name: "Олена Петренко",
      text: "Чудова клініка! Лікарі дуже уважні та професійні. Вперше не боялася йти до стоматолога. Все пройшло швидко та абсолютно безболісно. Дякую!",
      rating: 5,
      avatar: "ОП",
    },
    {
      id: "andrii",
      name: "Андрій Коваль",
      text: "Робив професійну чистку зубів. Результат перевершив очікування! Сучасне обладнання, привітний персонал. Рекомендую всім!",
      rating: 5,
      avatar: "АК",
    },
    {
      id: "maryna",
      name: "Марина Іваненко",
      text: "Лікувала карієс у дітей. Лікарі знайшли підхід до дитини, все пояснили і зробили процедуру максимально комфортною. Будемо тільки сюди!",
      rating: 5,
      avatar: "МІ",
    },
    {
      id: "serhii",
      name: "Сергій Мельник",
      text: "Зробив відбілювання зубів. Неймовірний результат! Швидко, професійно, без дискомфорту. Усмішка тепер як у голлівудських зірок!",
      rating: 5,
      avatar: "СМ",
    },
    {
      id: "nataliia",
      name: "Наталія Романова",
      text: "Поставила імплант. Весь процес пройшов бездоганно. Лікар детально все пояснив, супроводжував на всіх етапах. Дуже задоволена!",
      rating: 5,
      avatar: "НР",
    },
  ];

  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Відгуки наших пацієнтів
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ваша довіра — наша найкраща нагорода
          </p>
        </div>

        <div className="w-full max-w-5xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full relative"
          >
            <CarouselContent className="flex items-center">
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3 flex justify-center">
                  <Card className="border-0 shadow-card hover:shadow-card-hover transition-all duration-300 h-full w-full max-w-sm md:max-w-none">
                    <CardContent className="p-6 lg:p-8">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                          <span className="text-primary font-semibold">
                            {testimonial.avatar}
                          </span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">
                            {testimonial.name}
                          </h4>
                          <div className="flex gap-1 mt-1">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star
                                key={i}
                                className="w-4 h-4 fill-primary text-primary"
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {testimonial.text}
                      </p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="flex" />
            <CarouselNext className="flex" />
          </Carousel>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 lg:mt-16 max-w-3xl mx-auto">
          {CLINIC_STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
