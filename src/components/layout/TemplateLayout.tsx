import { BrandingConfig } from '../../config';

export default function TemplateLayout({ branding, modules }: { branding: BrandingConfig; modules: string[] }) {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-primary">{branding.businessName}</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-primary transition">Home</a>
              <a href="#about" className="text-gray-700 hover:text-primary transition">About</a>
              <a href="#services" className="text-gray-700 hover:text-primary transition">Services</a>
              <a href="#contact" className="text-gray-700 hover:text-primary transition">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      {modules.includes('hero') && (
        <section id="home" className="bg-gradient-to-r from-primary to-accent text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-5xl font-bold mb-6">Welcome to {branding.businessName}</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Professional services delivered with excellence and care. We're here to serve you with the highest quality and dedication.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                Get Started
              </a>
              <a href="#about" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition">
                Learn More
              </a>
            </div>
          </div>
        </section>
      )}

      {/* About Section */}
      {modules.includes('about') && (
        <section id="about" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">About Us</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We are dedicated to providing exceptional service and creating lasting relationships with our clients.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                <p className="text-gray-600">To deliver outstanding results that exceed expectations and build trust with every interaction.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">⭐</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Quality</h3>
                <p className="text-gray-600">We maintain the highest standards in everything we do, ensuring excellence in every project.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🤝</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Partnership</h3>
                <p className="text-gray-600">We work closely with our clients to understand their needs and deliver personalized solutions.</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a comprehensive range of services designed to meet your needs and exceed your expectations.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Service 1</h3>
              <p className="text-gray-600">Professional service delivered with expertise and attention to detail.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl">💡</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Service 2</h3>
              <p className="text-gray-600">Innovative solutions tailored to your specific requirements and goals.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl">🛠️</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Service 3</h3>
              <p className="text-gray-600">Comprehensive support and maintenance to ensure long-term success.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      {modules.includes('contact') && (
        <section id="contact" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Ready to get started? Get in touch with us today and let's discuss how we can help you achieve your goals.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-4">
                      <span className="text-white text-sm">📍</span>
                    </div>
                    <div>
                      <p className="font-semibold">Address</p>
                      <p className="text-gray-600">123 Business Street, City, State 12345</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center mr-4">
                      <span className="text-white text-sm">📧</span>
                    </div>
                    <div>
                      <p className="font-semibold">Email</p>
                                             <p className="text-gray-600">info@robs trampolines.com</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-4">
                      <span className="text-white text-sm">📞</span>
                    </div>
                    <div>
                      <p className="font-semibold">Phone</p>
                      <p className="text-gray-600">(555) 123-4567</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"></textarea>
                  </div>
                  <button type="submit" className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      {modules.includes('footer') && (
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">{branding.businessName}</h3>
                <p className="text-gray-400">
                  Professional services delivered with excellence and care.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Services</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white transition">Service 1</a></li>
                  <li><a href="#" className="hover:text-white transition">Service 2</a></li>
                  <li><a href="#" className="hover:text-white transition">Service 3</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Company</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#about" className="hover:text-white transition">About</a></li>
                  <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
                  <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Connect</h4>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-white transition">📘</a>
                  <a href="#" className="text-gray-400 hover:text-white transition">📷</a>
                  <a href="#" className="text-gray-400 hover:text-white transition">🐦</a>
                  <a href="#" className="text-gray-400 hover:text-white transition">💼</a>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                             <p>&copy; 2024 Robs Trampolines. All rights reserved.</p>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}