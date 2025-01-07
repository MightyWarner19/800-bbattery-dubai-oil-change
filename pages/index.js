import Feature from "../components/Feature";
import Hero from "../components/Hero";
import ContactForm from "../components/ContactForm";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";
import GoogleReviewsCard from "../components/misc/GoogleReviewsCard";
import HowItWorks from "../components/Layout/HowItWorks";
import TrustSection from "../components/Layout/TrustSection";
import Emergency from "../components/Emergency";
import BatterySection from "../components/BatterySection";
import Faqs from "../components/Faqs";
import Services from "../components/Services";
import WhyChoose from "../components/WhyChoose";
import StatsCounter from "../components/StatsCounter";
import Feedback from "../components/Feedback";
import FixedContactButton from "../components/Layout/FixedContactButton";
import AboutUS from "../components/AboutUS";

export default function Home() {
  return (
    <>
      <SeoHead title='24x7 Car Battery Replacement | 800 Bbattery' />
      <Layout>
        <Hero />
        <ContactForm />
        <AboutUS />
        <Services />
        <TrustSection />
        <Feature />
        <WhyChoose />
        <Feedback />
        <StatsCounter />
        <HowItWorks />
        <Faqs />
        <BatterySection />
        <Emergency />
        <FixedContactButton />
        <GoogleReviewsCard /> 
        
      </Layout>
    </>
  );
}
