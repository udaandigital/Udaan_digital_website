import { Rocket, Instagram } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Rocket className="h-10 w-10 text-orange-400" />
              <span className="text-2xl font-bold">Udaan Digital</span>
            </div>
            <p className="text-blue-200 mb-6 leading-relaxed">
              Empowering businesses to soar higher in the digital landscape.
              Your trusted partner for innovative digital marketing solutions.
            </p>
            <a
              href="https://www.instagram.com/udaann_digital/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
            >
              <Instagram className="h-5 w-5" />
              <span>Follow Us</span>
            </a>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Portfolio'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-blue-200 hover:text-orange-400 transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-blue-200">
              <li>Website Development</li>
              <li>Graphic Design</li>
              <li>Social Media</li>
              <li>SEO Optimization</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-700 mt-12 pt-8 text-center">
          <p className="text-blue-200">
            &copy; {new Date().getFullYear()} Udaan Digital. All rights reserved. | Crafted with ❤️ in Pune
          </p>
        </div>
      </div>
    </footer>
  );
}
