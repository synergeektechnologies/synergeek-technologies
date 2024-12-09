import { Star, Quote } from 'lucide-react';
import garuda from '../assets/garuda.jpg';
import teju from '../assets/teju.jpg';
import vip from '../assets/vip.jpg';

const testimonials = [
  {
    name: 'Garuda Krishna M',
    role: 'CEO, Vital Flare Media',
    content:
      'Synergeek Technologies delivered a modern, dynamic website that perfectly represents our digital marketing agency and its services.',
    rating: 4,
    image:
      garuda,
  },
  {
    name: 'Fawaz',
    role: 'CEO, VIP Polymers',
    content:
      'Synergeek Technologies designed a visually striking brochure that effectively highlighted our polymer products, reflecting our brand perfectly.',
    rating: 5,
    image:
      vip,
  },
  {
    name: 'Tejasswin S',
    role: 'CEO, Horizon Digital Solutions',
    content:
      'A modern and visually appealing website was designed, showcasing our portfolio in a way that highlights our technical expertise and innovative projects.',
    rating: 4,
    image:
      teju,
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
            Client Testimonials
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say
            about working with us.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 transform hover:-translate-y-1 transition-all duration-300"
            >
              <Quote className="h-8 w-8 text-indigo-400 mb-4" />
              <p className="text-gray-600 mb-6">{testimonial.content}</p>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
