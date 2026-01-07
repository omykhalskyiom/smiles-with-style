import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { NAV_ITEMS, CONTACT_INFO } from "@/constants";
import { useScrollToSection } from "@/hooks/useScrollToSection";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const scrollToSection = useScrollToSection();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    scrollToSection(id, () => setIsMobileMenuOpen(false));
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div
            className="flex items-center cursor-pointer"
            onClick={() => handleNavClick("hero")}
          >
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center mr-2">
              <span className="text-2xl">🦷</span>
            </div>
            <span className="text-xl lg:text-2xl font-bold text-foreground">
              DentSmile
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href={CONTACT_INFO.phoneLink}
              className="flex items-center text-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" />
              <span className="font-semibold">{CONTACT_INFO.phone}</span>
            </a>
            <Button
              onClick={() => handleNavClick("contacts")}
              className="bg-primary hover:bg-primary/90"
            >
              Записатись на прийом
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-6 px-4 bg-background/98 backdrop-blur-lg shadow-xl rounded-lg mx-4 my-2 animate-fade-in-up border border-border">
            <nav className="flex flex-col space-y-4">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="text-left text-foreground hover:text-primary hover:bg-secondary/50 transition-all font-medium py-3 px-4 rounded-lg"
                >
                  {item.label}
                </button>
              ))}
              <a
                href={CONTACT_INFO.phoneLink}
                className="flex items-center text-foreground hover:text-primary hover:bg-secondary/50 transition-all py-3 px-4 rounded-lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                <span className="font-semibold">{CONTACT_INFO.phone}</span>
              </a>
              <Button
                onClick={() => handleNavClick("contacts")}
                className="bg-primary hover:bg-primary/90 w-full mt-2"
              >
                Записатись на прийом
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
