import { Star, Quote } from 'lucide-react';
import { useState, useEffect } from 'react';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'Founder, Max Gainz Nutrition',
    image: '👤',
    rating: 5,
    text: 'Udaan Digital completely transformed our online presence. Their team delivered a stunning website and ad campaigns that tripled our revenue. Highly recommended!'
  },
  {
    name: 'Priya Sharma',
    role: 'CEO, TechStart Solutions',
    image: '👤',
    rating: 5,
    text: 'Professional, creative, and results-driven. The team at Udaan Digital understood our vision and brought it to life beautifully. Our social media engagement has skyrocketed!'
  },
  {
    name: 'Amit Patel',
    role: 'Marketing Director, GreenLeaf Organics',
    image: '👤',
    rating: 5,
    text: 'Working with Udaan Digital was a game-changer for us. Their SEO strategies and website redesign brought us 5x more leads. Exceptional service and support!'
  },
  {
    name: 'Sneha Reddy',
    role: 'Owner, Urban Fashion Hub',
    image: '👤',
    rating: 5,
    text: 'The best digital marketing agency we have worked with! Their designs are stunning and their ad campaigns delivered incredible ROI. Thank you, Udaan Digital!'
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Client <span className="text-orange-400">Testimonials</span>
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
            <Quote className="h-12 w-12 text-orange-500 mb-6" />

            <div className="mb-8">
              <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-6">
                "{testimonials[activeIndex].text}"
              </p>

              <div className="flex items-center space-x-1 mb-6">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-orange-500 text-orange-500" />
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-orange-500 rounded-full flex items-center justify-center text-3xl">
                  {testimonials[activeIndex].image}
                </div>
                <div>
                  <p className="font-bold text-blue-900 text-lg">
                    {testimonials[activeIndex].name}
                  </p>
                  <p className="text-gray-600">
                    {testimonials[activeIndex].role}
                  </p>
                </div>
              </div>

              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === activeIndex
                        ? 'bg-orange-500 w-8'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-4 gap-8 text-center">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6">
            <p className="text-4xl font-bold text-orange-400 mb-2">50+</p>
            <p className="text-blue-200">Happy Clients</p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6">
            <p className="text-4xl font-bold text-orange-400 mb-2">100+</p>
            <p className="text-blue-200">Projects Completed</p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6">
            <p className="text-4xl font-bold text-orange-400 mb-2">98%</p>
            <p className="text-blue-200">Client Retention</p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6">
            <p className="text-4xl font-bold text-orange-400 mb-2">5★</p>
            <p className="text-blue-200">Average Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
}
