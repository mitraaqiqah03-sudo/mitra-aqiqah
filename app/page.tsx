import Header from '../components/Header';
import Hero from '../components/Hero';
import PackageSection from '../components/PackageSection';
import FoodSection from '../components/FoodSection';
import WhyMitra from '../components/WhyMitra';
import HowToOrder from '../components/HowToOrder';
import Testimonials from '../components/Testimonials';
import Location from '../components/Location';
import FAQ from '../components/FAQ';
import FinalCTA from '../components/FinalCTA';
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <PackageSection />
      <FoodSection />
      <WhyMitra />
      <HowToOrder />
      <Testimonials />
      <Location />
      <FAQ />
      <FinalCTA />
      <Footer />
      <a
  href="https://wa.me/6285102473444"
  target="_blank"
  rel="noopener noreferrer"
  className="package-whatsapp"
>
  <span className="package-whatsapp-icon">
    💬
  </span>

  <span className="package-whatsapp-text">
    <small>Butuh bantuan?</small>
    <strong>Konsultasi WhatsApp</strong>
  </span>
</a>
    </main>
  );
}
