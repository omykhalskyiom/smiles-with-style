import { useRef } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Benefits from "@/components/Benefits";
import Orthodontics from "@/components/Orthodontics";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Contacts, { ContactsRef } from "@/components/Contacts";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import ChatWidget from "@/components/ChatWidget";

const Index = () => {
  const contactsRef = useRef<ContactsRef>(null);

  const handleBookAppointment = (serviceName: string) => {
    // Прокрутити до форми контактів
    const contactsElement = document.getElementById('contacts');
    if (contactsElement) {
      contactsElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    
    // Встановити повідомлення
    setTimeout(() => {
      contactsRef.current?.setMessage(`Хочу записатись на послугу: ${serviceName}`);
    }, 500);
  };

  return <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Services onBookAppointment={handleBookAppointment} />
        <Benefits />
        
        <Testimonials />
        <Pricing />
        <Contacts ref={contactsRef} />
      </main>
      <Footer />
      <ScrollToTop />
      <ChatWidget />
    </div>;
};
export default Index;