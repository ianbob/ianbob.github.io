import Navbar from "@/components/lex/Navbar";
import Hero from "@/components/lex/Hero";
import Services from "@/components/lex/Services";
import WhyUs from "@/components/lex/WhyUs";
import Locations from "@/components/lex/Locations";
import CTA from "@/components/lex/CTA";
import Footer from "@/components/lex/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Locations />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
