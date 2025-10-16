import { ExternalLink, Award, TrendingUp, Users } from 'lucide-react';

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Our <span className="text-orange-500">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Success stories that showcase our commitment to excellence
          </p>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                ⭐ Featured Client
              </div>

              <h3 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                Max Gainz Nutrition
              </h3>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                A comprehensive digital transformation for a leading nutrition brand, including
                website development, e-commerce integration, social media management, and
                targeted ad campaigns that drove exceptional growth.
              </p>

              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center">
                  <div className="bg-white rounded-xl p-4 shadow-lg mb-2">
                    <TrendingUp className="h-8 w-8 text-orange-500 mx-auto" />
                  </div>
                  <p className="text-2xl font-bold text-blue-900">300%</p>
                  <p className="text-sm text-gray-600">Traffic Growth</p>
                </div>
                <div className="text-center">
                  <div className="bg-white rounded-xl p-4 shadow-lg mb-2">
                    <Users className="h-8 w-8 text-orange-500 mx-auto" />
                  </div>
                  <p className="text-2xl font-bold text-blue-900">50K+</p>
                  <p className="text-sm text-gray-600">New Customers</p>
                </div>
                <div className="text-center">
                  <div className="bg-white rounded-xl p-4 shadow-lg mb-2">
                    <Award className="h-8 w-8 text-orange-500 mx-auto" />
                  </div>
                  <p className="text-2xl font-bold text-blue-900">250%</p>
                  <p className="text-sm text-gray-600">ROI Increase</p>
                </div>
              </div>

              <a
                href="https://maxgainznutrition.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                <span>Visit Website</span>
                <ExternalLink className="h-5 w-5" />
              </a>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl transform rotate-3 opacity-20 blur-xl"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
                <div className="bg-gradient-to-br from-blue-900 to-blue-800 p-8 text-white">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="flex space-x-1">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="flex-1 bg-blue-700 rounded px-3 py-1 text-sm">
                      maxgainznutrition.com
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-orange-500 bg-opacity-20 rounded-lg p-4">
                      <p className="font-semibold mb-2">Key Deliverables:</p>
                      <ul className="space-y-1 text-sm text-blue-100">
                        <li>✓ Custom E-commerce Website</li>
                        <li>✓ Brand Identity & Logo Design</li>
                        <li>✓ Social Media Strategy</li>
                        <li>✓ Google & Facebook Ads</li>
                        <li>✓ SEO Optimization</li>
                      </ul>
                    </div>
                    <div className="bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
                      <p className="text-orange-300 font-semibold mb-2">Client Testimonial:</p>
                      <p className="text-sm italic text-blue-100">
                        "Udaan Digital transformed our online presence completely.
                        Outstanding results!"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 text-lg">
            Want to see your business featured here?{' '}
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-orange-500 font-semibold hover:text-orange-600 transition-colors"
            >
              Let's talk →
            </button>
          </p>
        </div>
      </div>
    </section>
  );
}
