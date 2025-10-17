import { Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-foreground/5 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center mr-2">
                <span className="text-2xl">🦷</span>
              </div>
              <span className="text-xl font-bold text-foreground">
                DentSmile
              </span>
            </div>
            <p className="text-muted-foreground text-sm">
              Сучасна стоматологія для вашої здорової та красивої усмішки
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Навігація</h3>
            <ul className="space-y-2">
              {[
                { label: "Послуги", id: "services" },
                { label: "Про нас", id: "about" },
                { label: "Відгуки", id: "testimonials" },
                { label: "Ціни", id: "pricing" },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Контакти</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>вул. Хрещатик, 25</li>
              <li>Київ, 01001</li>
              <li>
                <a
                  href="tel:+380441234567"
                  className="hover:text-primary transition-colors"
                >
                  044 123 45 67
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@dentsmile.com.ua"
                  className="hover:text-primary transition-colors"
                >
                  info@dentsmile.com.ua
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Schedule */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Графік роботи</h3>
            <ul className="space-y-2 text-sm text-muted-foreground mb-6">
              <li>Понеділок - П'ятниця: 9:00-20:00</li>
              <li>Субота: 10:00-18:00</li>
              <li>Неділя: Вихідний</li>
            </ul>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© {currentYear} DentSmile. Всі права захищені.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
