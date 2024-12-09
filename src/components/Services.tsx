import { Globe, Palette, BarChart3, FileCode2 } from 'lucide-react';

const services = [
  {
    title: 'Static Website',
    description: 'Professional static websites with modern design and optimal performance.',
    icon: FileCode2
  },
  {
    title: 'Dynamic Website',
    description: 'Interactive and data-driven websites tailored to your business needs.',
    icon: Globe
  },
  {
    title: 'Website Hosting',
    description: 'Reliable and secure hosting solutions for your web applications.',
    icon: Globe
  },
  {
    title: 'Brochure Design',
    description: 'Eye-catching brochure designs that effectively communicate your brand message.',
    icon: Palette
  },
  {
    title: 'Logo Design',
    description: 'Unique and memorable logo designs that represent your brand identity.',
    icon: Palette
  },
  {
    title: 'Digital Marketing',
    description: 'Comprehensive digital marketing strategies to grow your online presence.',
    icon: BarChart3
  }
];

const Services = () => {
  return (
    <section id="services" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
            Our Services
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital solutions for your business growth
          </p>
        </div>

        <div className="mt-12 sm:mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center space-x-4">
                <span className="rounded-lg inline-flex p-3 bg-indigo-50 text-indigo-600 ring-4 ring-white group-hover:bg-indigo-100 transition-colors duration-300">
                  <service.icon className="h-6 w-6" />
                </span>
                <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
              </div>
              <p className="mt-4 text-base text-gray-500 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;