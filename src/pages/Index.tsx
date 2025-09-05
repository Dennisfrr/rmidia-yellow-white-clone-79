import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import PlatformSection from "@/components/PlatformSection";
import ModulesSection from "@/components/ModulesSection";
import IntegrationsSection from "@/components/IntegrationsSection";
import FeaturesGrid from "@/components/FeaturesGrid";
import PricingSection from "@/components/PricingSection";
import TrialSection from "@/components/TrialSection";
import WhatsAppApiSection from "@/components/WhatsAppApiSection";
import FinalCTASection from "@/components/FinalCTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <BenefitsSection />
        <PlatformSection />
        <ModulesSection />
        <IntegrationsSection />
        <FeaturesGrid />
        <PricingSection />
        <TrialSection />
        <WhatsAppApiSection />
        <FinalCTASection />
      </main>
    </div>
  );
};

export default Index;
