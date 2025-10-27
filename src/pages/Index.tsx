import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Benefits from "@/components/Benefits";
import Orthodontics from "@/components/Orthodontics";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Contacts from "@/components/Contacts";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import ChatWidget from "@/components/ChatWidget";
const Index = () => {
  return <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Services />
        <Benefits />
        
        <Testimonials />
        <Pricing />
        <Contacts />
      </main>
      <Footer />
      <ScrollToTop />
      <ChatWidget />
    </div>;
};
export default Index;