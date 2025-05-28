
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Home = () => {
  const capabilities = [
    {
      icon: '🛠',
      title: 'Indigenous Engine Design',
      description: 'Fully conceptualized and engineered in India to meet global defence standards.'
    },
    {
      icon: '🚀',
      title: 'High-Performance Micro Engines',
      description: 'Specialized in small turbine engines with high thrust-to-weight ratios.'
    },
    {
      icon: '🔬',
      title: 'Cutting-Edge R&D',
      description: 'In-house research labs with simulation, testing, and rapid prototyping facilities.'
    }
  ];

  const features = [
    {
      icon: '🇮🇳',
      title: '100% Indigenous Technology',
      description: 'Fully developed in India with no foreign dependencies'
    },
    {
      icon: '⚡',
      title: 'Scalable Thrust Configurations',
      description: 'Adaptable designs for various mission requirements'
    },
    {
      icon: '🎯',
      title: 'Designed for Tactical Platforms',
      description: 'Optimized for UAVs, drones, and defense applications'
    },
    {
      icon: '🪶',
      title: 'Lightweight & Compact',
      description: 'Maximum performance in minimal form factor'
    },
    {
      icon: '⛽',
      title: 'Jet-A1/Kerosene Fuel Compatible',
      description: 'Works with standard aviation fuel systems'
    },
    {
      icon: '🛡️',
      title: 'Reliable in Harsh Mission Conditions',
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
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Empowering India's Defence with
            <span className="text-blue-400 block">Indigenous Jet Engine Technology</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Advanced Micro Jet Engines | Made in India, Built for the Future
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/products" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              Explore Our Products <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/about" 
              className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">Advancing India's Aerospace Future</h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Trishul Defence is a propulsion technology company committed to designing and manufacturing 
            micro jet engines for unmanned aerial systems (UAS), loitering munitions, and other aerospace 
            platforms. Our mission is to power India's future in defence with reliable, compact, and 
            efficient jet engines, designed and developed indigenously.
          </p>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Our Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="bg-black/50 p-8 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl mb-4">{capability.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-blue-400">{capability.title}</h3>
                <p className="text-gray-300">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section with Modern Cards */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Why Choose Trishul Defence?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="group relative bg-gradient-to-br from-gray-900/80 to-black/80 p-6 rounded-xl border border-gray-700/50 backdrop-blur-sm transition-all duration-500 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2 cursor-pointer overflow-hidden"
              >
                {/* Animated background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="text-3xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-white group-hover:text-blue-400 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
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
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Featured Product</h2>
            <h3 className="text-2xl text-blue-400 font-semibold">TRJ-M1 Micro Jet Engine</h3>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xl text-gray-300 mb-8">
                TRJ-M1 is our flagship micro turbojet engine designed for high-efficiency propulsion 
                in compact air platforms. Built with modern materials and advanced aerothermal 
                engineering, it ensures optimal performance across a range of defence applications.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-black/50 p-4 rounded-lg border border-gray-700">
                  <div className="text-blue-400 font-semibold">Thrust Output</div>
                  <div className="text-2xl font-bold">~250N</div>
                </div>
                <div className="bg-black/50 p-4 rounded-lg border border-gray-700">
                  <div className="text-blue-400 font-semibold">Weight</div>
                  <div className="text-2xl font-bold">&lt;5 kg</div>
                </div>
                <div className="bg-black/50 p-4 rounded-lg border border-gray-700">
                  <div className="text-blue-400 font-semibold">Fuel Type</div>
                  <div className="text-lg font-bold">Jet-A1/Kerosene</div>
                </div>
                <div className="bg-black/50 p-4 rounded-lg border border-gray-700">
                  <div className="text-blue-400 font-semibold">Applications</div>
                  <div className="text-sm">UAVs, Loitering Munitions, Target Drones</div>
                </div>
              </div>
              
              <Link 
                to="/products" 
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                View Full Product <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            
            <div className="bg-gradient-to-br from-blue-900/20 to-gray-900/20 p-8 rounded-lg border border-gray-700">
              <div className="text-center">
                <div className="w-48 h-48 mx-auto bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-6xl font-bold">
                  TRJ-M1
                </div>
                <p className="text-gray-400 mt-4">High-Performance Micro Turbojet Engine</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Atmanirbhar Bharat Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">Atmanirbhar Bharat in Aerospace</h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            We are proud contributors to India's vision of self-reliance in defence. Trishul Defence 
            works closely with academia, industry experts, and innovators to build the next generation 
            of propulsion technologies.
          </p>
        </div>
      </section>

      {/* Call to Action Sections */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Careers CTA */}
            <div className="bg-gradient-to-br from-blue-900/20 to-gray-900/20 p-8 rounded-lg border border-gray-700 text-center">
              <h3 className="text-2xl font-bold mb-4">Join the Defence Tech Revolution</h3>
              <p className="text-gray-300 mb-6">
                We're hiring engineers and innovators to drive the future of propulsion.
              </p>
              <Link 
                to="/careers" 
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Explore Careers <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            
            {/* Contact CTA */}
            <div className="bg-gradient-to-br from-gray-900/20 to-black/20 p-8 rounded-lg border border-gray-700 text-center">
              <h3 className="text-2xl font-bold mb-4">Let's Collaborate</h3>
              <p className="text-gray-300 mb-6">
                Have a question or proposal? Let's collaborate on India's aerospace future.
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black px-6 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Contact Us <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
