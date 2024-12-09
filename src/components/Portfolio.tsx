import { Star } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured online shopping platform with modern UI/UX',
    image:
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80',
    tags: ['React', 'Node.js', 'MongoDB'],
    rating: 4, // Rating out of 5
  },
  {
    title: 'Healthcare Portal',
    description: 'Patient management system with telemedicine features',
    image:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    tags: ['Vue.js', 'Express', 'PostgreSQL'],
    rating: 5, // Rating out of 5
  },
  {
    title: 'Real Estate App',
    description: 'Property listing and management application',
    image:
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80',
    tags: ['React Native', 'Firebase'],
    rating: 3, // Rating out of 5
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
            Our Portfolio
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Explore some of our recent projects and see how we've helped
            businesses grow.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-semibold text-white">
                      {project.title}
                    </h3>
                    <p className="text-gray-200 mt-2">{project.description}</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-sm bg-indigo-50 text-indigo-600 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Star Rating */}
                <div className="mt-4 flex items-center">
                  {[...Array(5)].map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      className={`h-5 w-5 ${
                        starIndex < project.rating
                          ? 'text-yellow-500'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
