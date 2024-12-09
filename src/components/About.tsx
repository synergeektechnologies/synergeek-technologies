import ImageSlider from './ImageSlider';

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-20 bg-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
              About Synergeek Technologies
            </h2>
            <p className="mt-4 text-lg sm:text-xl text-gray-600">
              We are a team of passionate technologists dedicated to delivering innovative solutions
              that help businesses thrive in the digital age. With years of experience and a
              commitment to excellence, we transform complex challenges into elegant solutions.
            </p>
            <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-900">Our Mission</h3>
                <p className="mt-2 text-base text-gray-600">
                  To empower businesses through cutting-edge technology solutions that drive growth
                  and innovation.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-900">Our Vision</h3>
                <p className="mt-2 text-base text-gray-600">
                  To be the leading technology partner for businesses seeking digital transformation
                  and sustainable growth.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-10 lg:mt-0">
            <ImageSlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;