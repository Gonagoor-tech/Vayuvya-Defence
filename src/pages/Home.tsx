
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Home = () => {
  const capabilities = [
    {
      title: 'Indigenous Engine Design',
      description: 'Fully conceptualized and engineered in India to meet global defence standards.'
    },
    {
      title: 'High-Performance Micro Engines',
      description: 'Specialized in small turbine engines with high thrust-to-weight ratios.'
    },
    {
      title: 'Cutting-Edge R&D',
      description: 'In-house research labs with simulation, testing, and rapid prototyping facilities.'
    }
  ];

  const features = [
    {
      title: '100% Indigenous Technology',
      description: 'Fully developed in India with no foreign dependencies'
    },
    {
      title: 'Scalable Multi-Domain Solutions',
      description: 'Aerospace, software, and AI technologies for various mission requirements'
    },
    {
      title: 'Designed for Strategic Platforms',
      description: 'Optimized for UAVs, satellites, defence applications, and enterprise systems'
    },
    {
      title: 'Lightweight & Efficient',
      description: 'Maximum performance with minimal resource footprint'
    },
    {
      title: 'Versatile Fuel & Data Compatibility',
      description: 'Works with standard systems and multiple data formats'
    },
    {
      title: 'Reliable in Critical Conditions',
      description: 'Built to withstand extreme operational environments'
    }
  ];

  return (
    <div className="relative">
      {/* Hero Section with Space Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with space theme */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?q=80&w=3880&auto=format&fit=crop')`,
            filter: 'brightness(0.3)'
          }}
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/80" />
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
            Empowering India's Defence with
            <span className="text-blue-400 block mt-2">Advanced Technology Solutions</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
          Made in India, Built for the Future
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
            <Link 
              to="/products" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center text-sm sm:text-base"
            >
              Explore Our Products <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Link>
            <Link 
              to="/about" 
              className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8">Advancing India's Technology Future</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Vayuvya Defence is a technology company committed to designing and manufacturing 
            cutting-edge solutions across aerospace, software, and artificial intelligence. Our mission 
            is to power India's future in defence with reliable, innovative, and efficient systems, 
            designed and developed indigenously across multiple critical domains.
          </p>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 sm:mb-16">Our Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="group relative bg-gradient-to-br from-gray-900/80 to-black/80 p-6 sm:p-8 rounded-xl border border-gray-700/50 backdrop-blur-sm transition-all duration-500 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2 cursor-pointer overflow-hidden">
                {/* Animated background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
                
                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-white group-hover:text-blue-400 transition-colors duration-300">
                    {capability.title}
                  </h3>
                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {capability.description}
                  </p>
                </div>

                {/* Subtle glow effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section with Modern Cards */}
      <section className="py-12 sm:py-16 md:py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 sm:mb-16">Why Choose Vayuvya Defence?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="group relative bg-gradient-to-br from-gray-900/80 to-black/80 p-5 sm:p-6 rounded-xl border border-gray-700/50 backdrop-blur-sm transition-all duration-500 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2 cursor-pointer overflow-hidden"
              >
                {/* Animated background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
                
                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-white group-hover:text-blue-400 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>

                {/* Subtle glow effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Product Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Featured Product</h2>
            <h3 className="text-xl sm:text-2xl text-blue-400 font-semibold">TRJ-M1 Micro Jet Engine</h3>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                TRJ-M1 is our flagship micro turbojet engine designed for high-efficiency propulsion 
                in compact air platforms. Built with modern materials and advanced aerothermal 
                engineering, it ensures optimal performance across a range of defence applications.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                <div className="bg-black/50 p-3 sm:p-4 rounded-lg border border-gray-700">
                  <div className="text-blue-400 font-semibold text-sm sm:text-base">Thrust Output</div>
                  <div className="text-lg sm:text-2xl font-bold">~4KN</div>
                </div>
                <div className="bg-black/50 p-3 sm:p-4 rounded-lg border border-gray-700">
                  <div className="text-blue-400 font-semibold text-sm sm:text-base">Weight</div>
                  <div className="text-lg sm:text-2xl font-bold">&lt;5 kg</div>
                </div>
                <div className="bg-black/50 p-3 sm:p-4 rounded-lg border border-gray-700">
                  <div className="text-blue-400 font-semibold text-sm sm:text-base">Fuel Type</div>
                  <div className="text-sm sm:text-lg font-bold">Jet-A1/Kerosene</div>
                </div>
                <div className="bg-black/50 p-3 sm:p-4 rounded-lg border border-gray-700">
                  <div className="text-blue-400 font-semibold text-sm sm:text-base">Applications</div>
                  <div className="text-xs sm:text-sm">UAVs, Loitering Munitions, Target Drones</div>
                </div>
              </div>
              
              <Link 
                to="/products" 
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base"
              >
                View Full Product <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </div>
            
            <div className="bg-gradient-to-br from-blue-900/20 to-gray-900/20 p-6 sm:p-8 rounded-lg border border-gray-700 order-1 lg:order-2">
              <div className="text-center">
                <img 
                  src="/lovable-uploads/aab6d5f1-c76a-4509-91ed-0f70fa59cf5e.png" 
                  alt="TRJ-M1 Micro Jet Engine Technical Drawing" 
                  className="w-full h-auto max-w-md mx-auto mb-4"
                />
                <p className="text-gray-400 text-sm sm:text-base">High-Performance Micro Turbojet Engine</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Atmanirbhar Bharat Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8">Atmanirbhar Bharat in Technology</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We are proud contributors to India's vision of self-reliance in defence and technology. Vayuvya Defence 
            works closely with academia, industry experts, and innovators to build the next generation 
            of aerospace, software, and AI technologies that serve our nation's strategic objectives.
          </p>
        </div>
      </section>

      {/* Call to Action Sections */}
      <section className="py-12 sm:py-16 md:py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Careers CTA */}
            <div className="bg-gradient-to-br from-blue-900/20 to-gray-900/20 p-6 sm:p-8 rounded-lg border border-gray-700 text-center">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Join the Defence Tech Revolution</h3>
              <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
                We're hiring engineers and innovators to drive the future of propulsion.
              </p>
              <Link 
                to="/careers" 
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base"
              >
                Explore Careers <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </div>
            
            {/* Contact CTA */}
            <div className="bg-gradient-to-br from-gray-900/20 to-black/20 p-6 sm:p-8 rounded-lg border border-gray-700 text-center">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Let's Collaborate</h3>
              <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
                Have a question or proposal? Let's collaborate on India's aerospace future.
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base"
              >
                Contact Us <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
