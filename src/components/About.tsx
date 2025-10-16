import { Eye, Target, Users, Award } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            About <span className="text-orange-500">Udaan Digital</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering businesses to soar higher in the digital landscape
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-3xl p-8">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <Users className="h-10 w-10 text-orange-500 mb-3" />
                  <p className="text-2xl font-bold text-blue-900">50+</p>
                  <p className="text-gray-600">Happy Clients</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <Award className="h-10 w-10 text-orange-500 mb-3" />
                  <p className="text-2xl font-bold text-blue-900">100+</p>
                  <p className="text-gray-600">Projects Done</p>
                </div>
              </div>
              <div className="mt-4 bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <Target className="h-10 w-10 text-orange-500 mb-3" />
                <p className="text-2xl font-bold text-blue-900">100%</p>
                <p className="text-gray-600">Client Satisfaction</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              At Udaan Digital, we believe every business deserves to reach new heights in the digital world.
              Our name "Udaan" means "flight" in Hindi, symbolizing our commitment to helping your brand soar
              above the competition.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We're a passionate team of digital experts who combine creativity, strategy, and technology to
              deliver results that matter. From stunning websites to powerful ad campaigns, we craft digital
              experiences that drive real growth.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-3xl p-8 text-white hover:scale-105 transition-transform duration-300">
            <Eye className="h-12 w-12 text-orange-400 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-blue-100 leading-relaxed">
              To be the most trusted digital partner for businesses worldwide, enabling them to achieve
              unprecedented growth through innovative digital solutions that make a lasting impact.
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl p-8 text-white hover:scale-105 transition-transform duration-300">
            <Target className="h-12 w-12 text-white mb-4" />
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-orange-50 leading-relaxed">
              To deliver exceptional digital marketing solutions that combine creativity, strategy, and
              technology, helping businesses build strong online presence and achieve measurable results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
