import { ArrowRight, Zap, TrendingUp, Target } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 animate-float">
          <Zap className="h-16 w-16 text-orange-500" />
        </div>
        <div className="absolute top-40 right-20 animate-float-delayed">
          <TrendingUp className="h-20 w-20 text-orange-400" />
        </div>
        <div className="absolute bottom-40 left-1/4 animate-float">
          <Target className="h-12 w-12 text-orange-300" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="inline-block bg-orange-500 bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 animate-fade-in">
              <span className="text-orange-300 font-medium">🚀 Your Digital Growth Partner</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight animate-slide-up">
              Empower Your Brand's{' '}
              <span className="text-orange-400">Digital Journey</span>
            </h1>

            <p className="text-xl mb-8 text-blue-100 animate-slide-up-delayed">
              We build websites, manage ads, and create stunning designs that grow your business.
            </p>

            <button
              onClick={scrollToContact}
              className="group bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center space-x-2 animate-slide-up-more-delayed"
            >
              <span>Get a Free Consultation</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="relative hidden md:block animate-fade-in-delayed">
            <div className="relative w-full h-96">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl transform rotate-6 opacity-20 blur-xl"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl transform -rotate-3 opacity-30 blur-xl"></div>
              <div className="relative bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-8 border border-white border-opacity-20 h-full flex items-center justify-center">
                <div className="text-center space-y-6">
                  <div className="flex justify-center space-x-4">
                    <div className="bg-orange-500 bg-opacity-20 p-4 rounded-2xl animate-pulse">
                      <Zap className="h-12 w-12 text-orange-400" />
                    </div>
                    <div className="bg-blue-500 bg-opacity-20 p-4 rounded-2xl animate-pulse-delayed">
                      <TrendingUp className="h-12 w-12 text-blue-400" />
                    </div>
                  </div>
                  <div className="text-white">
                    <p className="text-3xl font-bold">Digital Excellence</p>
                    <p className="text-blue-200 mt-2">Innovation • Creativity • Growth</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-24 fill-white">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
}
