import Navbar from '../components/snippets/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/snippets/Footer';
import ScrollToTop from '../components/ScrollToTop';
import AnimatedSection from '../components/AnimatedSection';

const Homepage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <AnimatedSection>
          <Services />
        </AnimatedSection>
        <AnimatedSection>
          <Portfolio />
        </AnimatedSection>
        <AnimatedSection>
          <Testimonials />
        </AnimatedSection>
        <AnimatedSection>
          <About />
        </AnimatedSection>
        <AnimatedSection>
          <Contact />
        </AnimatedSection>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default Homepage;