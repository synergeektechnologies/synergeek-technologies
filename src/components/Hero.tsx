import { ArrowRight } from 'lucide-react';
import video from '../assets/video.mp4';
import { FaWhatsapp } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-16 sm:pt-20 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <video
          className="object-cover w-full h-full"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/30 via-indigo-800/20 to-indigo-900/30"></div>
      <div className="relative max-w-7xl mx-auto px-7 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight font-extrabold drop-shadow-lg">
            <span className="block text-[#f8f9fa] text-shadow-lg mb-2">
              Transform Your Ideas Into
            </span>
            <span className="block text-[#4F46E5] text-shadow-lg bg-clip-text">
              Digital Reality
            </span>
          </h1>
          <p className="mt-6 max-w-lg mx-auto text-xl sm:text-2xl text-[#f8f9fa] sm:max-w-3xl drop-shadow-lg font-medium">
            We craft innovative solutions that drive business growth and digital
            transformation. Let's build something amazing together.
          </p>
          <div className="mt-8 sm:mt-12 flex justify-center space-x-4">
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-3 sm:px-10 sm:py-4 border border-transparent text-base sm:text-lg font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center px-8 py-3 sm:px-10 sm:py-4 border-2 border-white text-base sm:text-lg font-medium rounded-lg text-white bg-transparent hover:bg-white hover:text-indigo-600 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg"
            >
              Our Services
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 right-3">
        <a
          href="https://wa.me/919677561597"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-1 right-1 bg-green-500 text-white rounded-lg px-6 py-2 shadow-lg hover:bg-green-600 transition-all duration-300 text-sm sm:text-base font-medium"
          aria-label="Contact on WhatsApp"
          >
          <span className="flex items-center space-x-2 font-bold text-lg">
            <FaWhatsapp />
            <span>WhatsApp</span>
          </span>
        </a>
      </div>
    </section>
  );
};

export default Hero;
