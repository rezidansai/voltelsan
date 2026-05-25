import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import Portfolio from "@/components/site/Portfolio";
import Services from "@/components/site/Services";
import TechStack from "@/components/site/TechStack";
import Contact from "@/components/site/Contact";
import Footer from "@/components/site/Footer";

const Index = () => {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <Navbar />
      <Hero />
      <Portfolio />
      <Services />
      <TechStack />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
