import { Star } from 'lucide-react';

const projects = [
  {
    title: 'Car Rental App',
    description: 'A full-featured Car Rental Application with modern UI/UX',
    image: 'https://plus.unsplash.com/premium_photo-1661385829433-2d020b9cd8b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI3fHx8ZW58MHx8fHx8',
    tags: ['React', 'GraphQL','Hygraph'],
    rating: 4,
    link: 'https://car-rental-beta-weld.vercel.app/',
  },
  {
    title: 'VIP Polymer Brochure',
    description: 'Simple and Elegant Brochure for VIP Polymers',
    image: 'https://images.unsplash.com/photo-1658863025658-4a259cc68fc9?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['Adobe Illustrator', 'Canva'],
    rating: 5,
    link: 'https://drive.google.com/file/d/17ESOzFygflFEsiRfMDonOHuGHaa-LES9/view?usp=sharing',
  },
  {
    title: 'Badminton Ecommerce Website',
    description: 'A modern Ecommerce Website for Badminton Lovers',
    image: 'https://themehunk.com/wp-content/uploads/2021/08/sport-shop-m-shop-pro.png',
    tags: ['React', 'Tailwind CSS','Django'],
    rating: 3,
    link: 'https://themehunk.com/wp-content/uploads/2021/08/sport-shop-m-shop-pro.png',
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
              <a href={project.link} target="_blank" rel="noopener noreferrer">
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
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;