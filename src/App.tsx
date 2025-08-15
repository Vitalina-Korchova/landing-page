import BenefitsSection from "./components/BenefitsSection";
import CommunitySection from "./components/CommunitySection";
import HeroPage from "./components/HeroPage";
import SecuritySection from "./components/SecuritySection";
import ServicesSection from "./components/ServicesSection";
import TestimonialsSection from "./components/TestimonialsSection";

function App() {
  return (
    <>
      <HeroPage />
      <SecuritySection />
      <BenefitsSection />
      <ServicesSection />
      <CommunitySection />
      <TestimonialsSection />
    </>
  );
}

export default App;
