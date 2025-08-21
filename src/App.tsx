import { useEffect } from "react";
import BenefitsSection from "./components/BenefitsSection";
import CommunitySection from "./components/CommunitySection";
import FaqSection from "./components/FaqSection";
import Footer from "./components/Footer";
import HeroPage from "./components/HeroPage";
import SecuritySection from "./components/SecuritySection";
import ServicesSection from "./components/ServicesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 0,
    });
  }, []);
  return (
    <>
      <HeroPage />
      <SecuritySection />
      <BenefitsSection />
      <ServicesSection />
      <CommunitySection />
      <TestimonialsSection />
      <FaqSection />
      <Footer />
    </>
  );
}

export default App;
