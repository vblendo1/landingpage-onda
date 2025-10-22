import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HeroImageMobile from './components/HeroImageMobile';
import HeroBannerCarousel from './components/HeroBannerCarousel';
import { Logos3 } from './components/ui/logos3';
import Differentials from './components/Differentials';
import ProductCatalog from './components/ProductCatalog';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import ContactForm from './components/ContactForm';
import FAQ from './components/FAQ';
import About from './components/About';
import Footer from './components/Footer';
import FormModal from './components/FormModal';
import ScrollProgress from './components/ui/ScrollProgress';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f6f6f6]">
      <ScrollProgress />
      <Navbar />
      <HeroImageMobile />
      <Hero onCTAClick={() => setIsModalOpen(true)} />
      <HeroBannerCarousel />
      <Logos3 />
      <div id="diferenciais">
        <Differentials onCTAClick={() => setIsModalOpen(true)} />
      </div>
      <div id="produtos">
        <ProductCatalog onCTAClick={() => setIsModalOpen(true)} />
      </div>
      <div id="depoimentos">
        <Testimonials onCTAClick={() => setIsModalOpen(true)} />
      </div>
      <div id="blog">
        <Blog onCTAClick={() => setIsModalOpen(true)} />
      </div>
      <div id="contato">
        <ContactForm />
      </div>
      <FAQ />
      <About />
      <Footer />
      <FormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default App;
