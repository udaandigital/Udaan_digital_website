import { useState } from 'react';
import { Globe, Palette, Share2, Search, Megaphone, Sparkles, ChevronDown, Check } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Website Development',
    description: 'Custom-built, responsive websites that convert visitors into customers with seamless user experiences.',
    color: 'blue',
    details: {
      overview: 'We create stunning, high-performance websites tailored to your business needs. From concept to launch, we handle everything.',
      features: [
        'Responsive design for all devices',
        'Fast loading speeds & optimization',
        'E-commerce integration',
        'Content Management Systems',
        'SEO-friendly architecture',
        'Secure hosting & maintenance'
      ],
      deliveryTime: '2-4 weeks'
    }
  },
  {
    icon: Palette,
    title: 'Graphic Design & Branding',
    description: 'Eye-catching designs and cohesive brand identities that make your business stand out from the crowd.',
    color: 'orange',
    details: {
      overview: 'Build a memorable brand identity that resonates with your audience. We craft visuals that tell your story.',
      features: [
        'Logo design & brand guidelines',
        'Marketing materials & collateral',
        'Social media graphics',
        'Packaging & product design',
        'Print & digital advertisements',
        'Brand strategy consulting'
      ],
      deliveryTime: '1-3 weeks'
    }
  },
  {
    icon: Share2,
    title: 'Social Media Management',
    description: 'Strategic content creation and community management that builds engaged audiences and drives growth.',
    color: 'blue',
    details: {
      overview: 'Grow your online presence with strategic social media management. We create content that engages and converts.',
      features: [
        'Content creation & scheduling',
        'Community engagement & management',
        'Social media strategy development',
        'Analytics & performance reporting',
        'Influencer collaboration',
        'Paid social advertising'
      ],
      deliveryTime: 'Ongoing monthly service'
    }
  },
  {
    icon: Search,
    title: 'SEO Optimization',
    description: 'Data-driven SEO strategies that boost your search rankings and increase organic traffic sustainably.',
    color: 'orange',
    details: {
      overview: 'Dominate search results with our proven SEO strategies. We help you rank higher and attract quality traffic.',
      features: [
        'Keyword research & analysis',
        'On-page SEO optimization',
        'Technical SEO audits',
        'Link building & outreach',
        'Local SEO optimization',
        'Monthly performance reports'
      ],
      deliveryTime: 'Results in 3-6 months'
    }
  },
  {
    icon: Megaphone,
    title: 'Ad Campaigns',
    description: 'Targeted advertising campaigns across platforms that maximize ROI and accelerate business growth.',
    color: 'blue',
    details: {
      overview: 'Drive immediate results with targeted ad campaigns. We manage Google Ads, Facebook Ads, Instagram Ads, and more.',
      features: [
        'Campaign strategy & planning',
        'Ad creative design & copywriting',
        'Audience targeting & segmentation',
        'A/B testing & optimization',
        'Conversion tracking & analytics',
        'Budget management & ROI reporting'
      ],
      deliveryTime: 'Launch in 1-2 weeks'
    }
  },
  {
    icon: Sparkles,
    title: 'Digital Strategy',
    description: 'Comprehensive digital marketing strategies tailored to your goals, audience, and industry needs.',
    color: 'orange',
    details: {
      overview: 'Get a complete roadmap for digital success. We analyze, plan, and execute strategies that drive real results.',
      features: [
        'Market & competitor analysis',
        'Customer journey mapping',
        'Multi-channel marketing plans',
        'Content marketing strategy',
        'Marketing automation setup',
        'Quarterly strategy reviews'
      ],
      deliveryTime: '1-2 weeks for strategy'
    }
  }
];

export default function Services() {
  const [expandedService, setExpandedService] = useState<number | null>(null);

  const toggleService = (index: number) => {
    setExpandedService(expandedService === index ? null : index);
  };

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
            const isExpanded = expandedService === index;

            return (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 ${
                  isExpanded ? 'md:col-span-2 lg:col-span-3' : ''
                }`}
              >
                <div className={isExpanded ? 'grid md:grid-cols-2 gap-8' : ''}>
                  <div>
                    <div className={`inline-block p-4 rounded-xl mb-6 ${
                      isBlue ? 'bg-blue-100' : 'bg-orange-100'
                    } transition-colors duration-300`}>
                      <Icon className={`h-8 w-8 ${
                        isBlue ? 'text-blue-900' : 'text-orange-900'
                      } transition-colors duration-300`} />
                    </div>

                    <h3 className="text-2xl font-bold text-blue-900 mb-4">
                      {service.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    <button
                      onClick={() => toggleService(index)}
                      className="flex items-center space-x-2 text-orange-500 font-medium hover:text-orange-600 transition-colors"
                    >
                      <span>{isExpanded ? 'Show less' : 'Learn more'}</span>
                      <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${
                        isExpanded ? 'rotate-180' : ''
                      }`} />
                    </button>
                  </div>

                  {isExpanded && (
                    <div className="space-y-6 animate-fade-in">
                      <div>
                        <h4 className="text-lg font-bold text-blue-900 mb-3">Overview</h4>
                        <p className="text-gray-700 leading-relaxed">
                          {service.details.overview}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-lg font-bold text-blue-900 mb-3">What's Included</h4>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {service.details.features.map((feature, idx) => (
                            <div key={idx} className="flex items-start space-x-2">
                              <Check className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-blue-50 to-orange-50 rounded-xl p-4">
                        <p className="text-sm font-semibold text-blue-900 mb-1">Typical Delivery Time</p>
                        <p className="text-gray-700">{service.details.deliveryTime}</p>
                      </div>

                      <button
                        onClick={() => {
                          const element = document.getElementById('contact');
                          if (element) element.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="w-full bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
                      >
                        Get Started
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
