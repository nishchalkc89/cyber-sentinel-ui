import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WelcomeSection from "@/components/WelcomeSection";
import MissionSection from "@/components/MissionSection";
import ServicesSection from "@/components/ServicesSection";
import DifferentiatorsSection from "@/components/DifferentiatorsSection";
import PastPerformanceSection from "@/components/PastPerformanceSection";
import FederalResourcesSection from "@/components/FederalResourcesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <WelcomeSection />
      <MissionSection />
      <ServicesSection />
      <DifferentiatorsSection />
      <PastPerformanceSection />
      <FederalResourcesSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
