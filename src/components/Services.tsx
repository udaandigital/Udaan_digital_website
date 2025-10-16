import { Globe, Palette, Share2, Search, Megaphone, Sparkles } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Website Development',
    description: 'Custom-built, responsive websites that convert visitors into customers with seamless user experiences.',
    color: 'blue'
  },
  {
    icon: Palette,
    title: 'Graphic Design & Branding',
    description: 'Eye-catching designs and cohesive brand identities that make your business stand out from the crowd.',
    color: 'orange'
  },
  {
    icon: Share2,
    title: 'Social Media Management',
    description: 'Strategic content creation and community management that builds engaged audiences and drives growth.',
    color: 'blue'
  },
  {
    icon: Search,
    title: 'SEO Optimization',
    description: 'Data-driven SEO strategies that boost your search rankings and increase organic traffic sustainably.',
    color: 'orange'
  },
  {
    icon: Megaphone,
    title: 'Ad Campaigns',
    description: 'Targeted advertising campaigns across platforms that maximize ROI and accelerate business growth.',
    color: 'blue'
  },
  {
    icon: Sparkles,
    title: 'Digital Strategy',
    description: 'Comprehensive digital marketing strategies tailored to your goals, audience, and industry needs.',
    color: 'orange'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Our <span className="text-orange-500">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital solutions designed to elevate your brand and drive measurable results
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isBlue = service.color === 'blue';

            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              >
                <div className={`inline-block p-4 rounded-xl mb-6 ${
                  isBlue ? 'bg-blue-100 group-hover:bg-blue-500' : 'bg-orange-100 group-hover:bg-orange-500'
                } transition-colors duration-300`}>
                  <Icon className={`h-8 w-8 ${
                    isBlue ? 'text-blue-900 group-hover:text-white' : 'text-orange-900 group-hover:text-white'
                  } transition-colors duration-300`} />
                </div>

                <h3 className="text-2xl font-bold text-blue-900 mb-4 group-hover:text-orange-500 transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>

                <div className="mt-6 flex items-center text-orange-500 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Learn more</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
