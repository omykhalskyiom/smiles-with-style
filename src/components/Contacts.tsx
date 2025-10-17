import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contacts = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.phone) {
      toast({
        title: "Помилка",
        description: "Будь ласка, заповніть всі обов'язкові поля",
        variant: "destructive",
      });
      return;
    }

    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    
    toast({
      title: "Дякуємо!",
      description: "Наш адміністратор скоро зв'яжеться з вами 💙",
    });

    // Reset form
    setFormData({ name: "", phone: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Адреса",
      content: "вул. Хрещатик, 25, Київ, 01001",
    },
    {
      icon: Phone,
      title: "Телефон",
      content: "044 123 45 67",
      link: "tel:+380441234567",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@dentsmile.com.ua",
      link: "mailto:info@dentsmile.com.ua",
    },
    {
      icon: Clock,
      title: "Графік роботи",
      content: "Пн-Пт: 9:00-20:00, Сб: 10:00-18:00",
    },
  ];

  return (
    <section id="contacts" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Залиште заявку — ми вам передзвонимо
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Оберіть зручний спосіб зв'язку або заповніть форму нижче
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="border-0 shadow-card">
            <CardContent className="p-6 lg:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Ваше ім'я *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Введіть ваше ім'я"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Телефон *
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+380 XX XXX XX XX"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Повідомлення
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Опишіть, що вас цікавить..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-lg py-6"
                >
                  Відправити заявку
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info & Map */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                const content = item.link ? (
                  <a
                    href={item.link}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.content}
                  </a>
                ) : (
                  <span className="text-muted-foreground">{item.content}</span>
                );

                return (
                  <Card
                    key={index}
                    className="border-0 shadow-card hover:shadow-card-hover transition-all duration-300"
                  >
                    <CardContent className="p-4 lg:p-6">
                      <div className="flex items-start">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">
                            {item.title}
                          </h4>
                          {content}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Map */}
            <Card className="border-0 shadow-card overflow-hidden h-[300px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.3514895473805!2d30.522468776850907!3d50.45016007158358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce50c93f9f93%3A0x6c8f1743b01a9211!2z0YPQuy4g0KXRgNC10YnQsNGC0LjQuiwgMjUsINCa0LjQtdCyLCAwMjAwMA!5e0!3m2!1sru!2sua!4v1699999999999!5m2!1sru!2sua"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Карта розташування клініки DentSmile"
              />
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
