import Header from "../components/header"
import HeroSection from "../components/hero-section"
import BackgroundImage from "../components/background-image"
import DescriptionSection from "../components/description-section"
import AluminumSystemsSection from "../components/aluminum-systems-section"
import FeaturesSection from "../components/features-section"
import ServicesSection from "../components/services-section"
import BespokeSystemsSection from "../components/bespoke-systems-section"
import ProjectVideo from "../components/project-video"
import MaterialsSection from "../components/materials-section"
import ProjectInquirySection from "../components/project-inquiry-section"
import FAQSection from "../components/faq-section"
import OtherServicesSection from "../components/other-services-section"
import FooterSection from "../components/footer-section"


export default function HomePage() {
  return (
    <>
      <div className="min-h-screen relative">
        <BackgroundImage />
        <Header />
        <HeroSection />
        
      </div>
      <div className="w-full">
        <DescriptionSection />
        <AluminumSystemsSection />
        <FeaturesSection />
        <ServicesSection />
        <BespokeSystemsSection />
        <ProjectVideo />
        <MaterialsSection />
        <div className="py-[140px] px-12">
           <ProjectInquirySection />
        </div>
       <FAQSection /> 
       <OtherServicesSection />
      </div>
      <FooterSection />
    </>
  )
}
