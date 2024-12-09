import Navbar from './layout/Navbar';
import Hero from './Hero';
import Services from './Services';
import Portfolio from './Portfolio';
import Testimonials from './Testimonials';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import AnimatedSection from './AnimatedSection';

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