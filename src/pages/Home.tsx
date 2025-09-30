
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
      <section className="relative min-h-screen flex items-center justify-start overflow-hidden">
        {/* Background with engine image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${import.meta.env.BASE_URL}lovable-uploads/jettin.png')`,
            filter: 'brightness(0.35)'
          }}
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/80" />
        
        {/* Content */}
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 text-left font-poppins">
          <h1 className="font-poppins text-xl sm:text-2xl md:text-3xl lg:text-4xl font-[200] mb-2 sm:mb-4 leading-tight tracking-tight">
            Empowering India's Defence with
            <span className="text-blue-400 block mt-1 font-poppins font-[200]">Advanced Technology Solutions</span>
          </h1>
          
          <p className="font-poppins font-[200] text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 mb-4 sm:mb-6 max-w-xl leading-relaxed">
          Made in India, Built for the Future
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-start max-w-md sm:max-w-none">
            <Link 
              to="/products" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 sm:px-6 py-2.5 sm:py-3.5 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center text-xs sm:text-sm"
            >
              Explore Our Products <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Link>
            <Link 
              to="/about" 
              className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black px-5 sm:px-6 py-2.5 sm:py-3.5 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 text-xs sm:text-sm"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="relative py-12 sm:py-16 md:py-20 overflow-hidden">
        {/* Space-like background */}
        <div className="absolute inset-0 bg-black">
          {/* Animated stars */}
          <div className="absolute inset-0">
            {/* Large stars */}
            <div className="absolute top-12 left-16 w-1 h-1 bg-white rounded-full animate-pulse"></div>
            <div className="absolute top-24 left-40 w-0.5 h-0.5 bg-blue-300 rounded-full animate-pulse delay-1000"></div>
            <div className="absolute top-36 left-20 w-1 h-1 bg-white rounded-full animate-pulse delay-2000"></div>
            <div className="absolute top-48 left-56 w-0.5 h-0.5 bg-blue-200 rounded-full animate-pulse delay-500"></div>
            <div className="absolute top-64 left-32 w-1 h-1 bg-white rounded-full animate-pulse delay-1500"></div>
            <div className="absolute top-80 left-48 w-0.5 h-0.5 bg-blue-300 rounded-full animate-pulse delay-3000"></div>
            <div className="absolute top-96 left-16 w-1 h-1 bg-white rounded-full animate-pulse delay-2500"></div>
            
            {/* More stars scattered */}
            <div className="absolute top-20 right-24 w-0.5 h-0.5 bg-blue-200 rounded-full animate-pulse delay-700"></div>
            <div className="absolute top-32 right-40 w-1 h-1 bg-white rounded-full animate-pulse delay-1200"></div>
            <div className="absolute top-48 right-20 w-0.5 h-0.5 bg-blue-300 rounded-full animate-pulse delay-1800"></div>
            <div className="absolute top-68 right-36 w-1 h-1 bg-white rounded-full animate-pulse delay-2200"></div>
            <div className="absolute top-88 right-28 w-0.5 h-0.5 bg-blue-200 rounded-full animate-pulse delay-800"></div>
            
            {/* Additional stars for depth */}
            <div className="absolute top-28 left-1/4 w-0.5 h-0.5 bg-blue-100 rounded-full animate-pulse delay-400"></div>
            <div className="absolute top-52 left-3/4 w-1 h-1 bg-white rounded-full animate-pulse delay-1600"></div>
            <div className="absolute top-76 left-1/3 w-0.5 h-0.5 bg-blue-300 rounded-full animate-pulse delay-2800"></div>
            <div className="absolute top-92 left-2/3 w-1 h-1 bg-white rounded-full animate-pulse delay-600"></div>
            
            {/* Distant stars for more depth */}
            <div className="absolute top-16 left-1/2 w-0.5 h-0.5 bg-blue-100 rounded-full animate-pulse delay-900"></div>
            <div className="absolute top-40 left-1/5 w-0.5 h-0.5 bg-white rounded-full animate-pulse delay-1300"></div>
            <div className="absolute top-56 left-4/5 w-0.5 h-0.5 bg-blue-200 rounded-full animate-pulse delay-1900"></div>
            <div className="absolute top-80 left-1/6 w-0.5 h-0.5 bg-blue-300 rounded-full animate-pulse delay-2400"></div>
            <div className="absolute top-96 left-5/6 w-0.5 h-0.5 bg-white rounded-full animate-pulse delay-1100"></div>
            
            {/* Very distant tiny stars */}
            <div className="absolute top-18 left-1/3 w-0.5 h-0.5 bg-blue-50 rounded-full animate-pulse delay-600"></div>
            <div className="absolute top-72 left-2/5 w-0.5 h-0.5 bg-blue-100 rounded-full animate-pulse delay-1400"></div>
            <div className="absolute top-88 left-1/8 w-0.5 h-0.5 bg-white rounded-full animate-pulse delay-2100"></div>
          </div>
          
          {/* Subtle nebula effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/5 to-indigo-900/10"></div>
          
          {/* Cosmic dust particles */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400/20 rounded-full blur-sm animate-pulse delay-2000"></div>
            <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-400/30 rounded-full blur-sm animate-pulse delay-1500"></div>
            <div className="absolute top-2/3 left-1/3 w-1.5 h-1.5 bg-indigo-400/25 rounded-full blur-sm animate-pulse delay-3000"></div>
            <div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-blue-300/20 rounded-full blur-sm animate-pulse delay-2500"></div>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center font-poppins">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-[200] mb-6 sm:mb-8 text-white">Advancing India's Technology Future</h2>
          <p className="font-[200] text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Vayuvya Defence is a technology company committed to designing and manufacturing 
            cutting-edge solutions across aerospace, software, and artificial intelligence. Our mission 
            is to power India's future in defence with reliable, innovative, and efficient systems, 
            designed and developed indigenously across multiple critical domains.
          </p>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="relative py-12 sm:py-16 md:py-20 overflow-hidden">
        {/* Full-cover background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${import.meta.env.BASE_URL}lovable-uploads/lite.png')`
          }}
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-poppins">
          <h2 className="font-poppins text-2xl sm:text-3xl md:text-4xl font-[200] text-center mb-12 sm:mb-16">Our Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="group relative bg-gradient-to-br from-gray-900/80 to-black/80 p-6 sm:p-8 rounded-xl border border-gray-700/50 backdrop-blur-sm transition-all duration-500 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2 cursor-pointer overflow-hidden">
                {/* Animated background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
                
                {/* Content */}
                <div className="relative z-10">
                  <h3 className="font-poppins text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-white group-hover:text-blue-400 transition-colors duration-300">
                    {capability.title}
                  </h3>
                  <p className="font-poppins font-normal text-gray-400 text-sm sm:text-base leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
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
      <section className="relative py-12 sm:py-16 md:py-20 overflow-hidden">
        {/* Background with engine_md.png image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${import.meta.env.BASE_URL}lovable-uploads/engine_md.png')`,
            filter: 'brightness(0.3)'
          }}
        />
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-poppins">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-[200] text-center mb-12 sm:mb-16 text-white">Why Choose Vayuvya Defence?</h2>
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
                  <h3 className="font-poppins text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-white group-hover:text-blue-400 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="font-poppins font-normal text-gray-400 text-xs sm:text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
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
      <section className="relative py-12 sm:py-16 md:py-20 overflow-hidden">
        {/* Space-like background */}
        <div className="absolute inset-0 bg-black">
          {/* Animated stars */}
          <div className="absolute inset-0">
            {/* Large stars */}
            <div className="absolute top-10 left-10 w-1 h-1 bg-white rounded-full animate-pulse"></div>
            <div className="absolute top-20 left-32 w-0.5 h-0.5 bg-blue-300 rounded-full animate-pulse delay-1000"></div>
            <div className="absolute top-32 left-16 w-1 h-1 bg-white rounded-full animate-pulse delay-2000"></div>
            <div className="absolute top-40 left-48 w-0.5 h-0.5 bg-blue-200 rounded-full animate-pulse delay-500"></div>
            <div className="absolute top-60 left-24 w-1 h-1 bg-white rounded-full animate-pulse delay-1500"></div>
            <div className="absolute top-80 left-40 w-0.5 h-0.5 bg-blue-300 rounded-full animate-pulse delay-3000"></div>
            <div className="absolute top-96 left-12 w-1 h-1 bg-white rounded-full animate-pulse delay-2500"></div>
            
            {/* More stars scattered */}
            <div className="absolute top-16 right-20 w-0.5 h-0.5 bg-blue-200 rounded-full animate-pulse delay-700"></div>
            <div className="absolute top-28 right-32 w-1 h-1 bg-white rounded-full animate-pulse delay-1200"></div>
            <div className="absolute top-44 right-16 w-0.5 h-0.5 bg-blue-300 rounded-full animate-pulse delay-1800"></div>
            <div className="absolute top-64 right-28 w-1 h-1 bg-white rounded-full animate-pulse delay-2200"></div>
            <div className="absolute top-88 right-24 w-0.5 h-0.5 bg-blue-200 rounded-full animate-pulse delay-800"></div>
            
            {/* Additional stars for depth */}
            <div className="absolute top-24 left-1/4 w-0.5 h-0.5 bg-blue-100 rounded-full animate-pulse delay-400"></div>
            <div className="absolute top-48 left-3/4 w-1 h-1 bg-white rounded-full animate-pulse delay-1600"></div>
            <div className="absolute top-72 left-1/3 w-0.5 h-0.5 bg-blue-300 rounded-full animate-pulse delay-2800"></div>
            <div className="absolute top-96 left-2/3 w-1 h-1 bg-white rounded-full animate-pulse delay-600"></div>
            
            {/* Distant stars for more depth */}
            <div className="absolute top-8 left-1/2 w-0.5 h-0.5 bg-blue-100 rounded-full animate-pulse delay-900"></div>
            <div className="absolute top-36 left-1/5 w-0.5 h-0.5 bg-white rounded-full animate-pulse delay-1300"></div>
            <div className="absolute top-52 left-4/5 w-0.5 h-0.5 bg-blue-200 rounded-full animate-pulse delay-1900"></div>
            <div className="absolute top-76 left-1/6 w-0.5 h-0.5 bg-blue-300 rounded-full animate-pulse delay-2400"></div>
            <div className="absolute top-92 left-5/6 w-0.5 h-0.5 bg-white rounded-full animate-pulse delay-1100"></div>
            
            {/* Very distant tiny stars */}
            <div className="absolute top-14 left-1/3 w-0.5 h-0.5 bg-blue-50 rounded-full animate-pulse delay-600"></div>
            <div className="absolute top-68 left-2/5 w-0.5 h-0.5 bg-blue-100 rounded-full animate-pulse delay-1400"></div>
            <div className="absolute top-84 left-1/8 w-0.5 h-0.5 bg-white rounded-full animate-pulse delay-2100"></div>
          </div>
          
          {/* Subtle nebula effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/5 to-indigo-900/10"></div>
          
          {/* Cosmic dust particles */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400/20 rounded-full blur-sm animate-pulse delay-2000"></div>
            <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-400/30 rounded-full blur-sm animate-pulse delay-1500"></div>
            <div className="absolute top-2/3 left-1/3 w-1.5 h-1.5 bg-indigo-400/25 rounded-full blur-sm animate-pulse delay-3000"></div>
            <div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-blue-300/20 rounded-full blur-sm animate-pulse delay-2500"></div>
          </div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-poppins">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-[200] mb-3 sm:mb-4 text-white">Featured Product</h2>
            <h3 className="text-xl sm:text-2xl text-blue-400 font-[200]">TRJ-M1 Micro Jet Engine</h3>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <p className="font-[200] text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                TRJ-M1 is our flagship micro turbojet engine designed for high-efficiency propulsion 
                in compact air platforms. Built with modern materials and advanced aerothermal 
                engineering, it ensures optimal performance across a range of defence applications.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                <div className="relative bg-black/60 p-3 sm:p-4 rounded-lg border border-gray-600/50 backdrop-blur-sm overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-lg"></div>
                  <div className="relative z-10">
                  <div className="text-blue-400 font-semibold text-sm sm:text-base">Thrust Output</div>
                    <div className="text-lg sm:text-2xl font-bold text-white">~4KN</div>
                  </div>
                </div>
                <div className="relative bg-black/60 p-3 sm:p-4 rounded-lg border border-gray-600/50 backdrop-blur-sm overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-lg"></div>
                  <div className="relative z-10">
                  <div className="text-blue-400 font-semibold text-sm sm:text-base">Weight</div>
                    <div className="text-lg sm:text-2xl font-bold text-white">&lt;5 kg</div>
                  </div>
                </div>
                <div className="relative bg-black/60 p-3 sm:p-4 rounded-lg border border-gray-600/50 backdrop-blur-sm overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-lg"></div>
                  <div className="relative z-10">
                  <div className="text-blue-400 font-semibold text-sm sm:text-base">Fuel Type</div>
                    <div className="text-sm sm:text-lg font-bold text-white">Jet-A1/Kerosene</div>
                  </div>
                </div>
                <div className="relative bg-black/60 p-3 sm:p-4 rounded-lg border border-gray-600/50 backdrop-blur-sm overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-lg"></div>
                  <div className="relative z-10">
                  <div className="text-blue-400 font-semibold text-sm sm:text-base">Applications</div>
                    <div className="text-xs sm:text-sm text-gray-300">UAVs, Loitering Munitions, Target Drones</div>
                  </div>
                </div>
              </div>
              
              <Link 
                to="/products" 
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base"
              >
                View Full Product <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </div>
            
            <div className="relative bg-gradient-to-br from-gray-900/30 to-black/50 p-6 sm:p-8 rounded-lg border border-gray-600/50 backdrop-blur-sm order-1 lg:order-2 overflow-hidden">
              {/* Subtle glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-lg"></div>
              
              <div className="relative z-10 text-center">
                <img 
                  src="/lovable-uploads/aab6d5f1-c76a-4509-91ed-0f70fa59cf5e.png" 
                  alt="TRJ-M1 Micro Jet Engine Technical Drawing" 
                  className="w-full h-auto max-w-md mx-auto mb-4 filter drop-shadow-2xl"
                />
                <p className="text-gray-300 text-sm sm:text-base">High-Performance Micro Turbojet Engine</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Atmanirbhar Bharat Section */}
      <section className="relative py-12 sm:py-16 md:py-20 overflow-hidden">
        {/* Jet-themed space background */}
        <div className="absolute inset-0 bg-black">
          {/* Animated stars */}
          <div className="absolute inset-0">
            {/* Large stars */}
            <div className="absolute top-14 left-18 w-1 h-1 bg-white rounded-full animate-pulse"></div>
            <div className="absolute top-26 left-42 w-0.5 h-0.5 bg-blue-300 rounded-full animate-pulse delay-1000"></div>
            <div className="absolute top-38 left-22 w-1 h-1 bg-white rounded-full animate-pulse delay-2000"></div>
            <div className="absolute top-50 left-58 w-0.5 h-0.5 bg-blue-200 rounded-full animate-pulse delay-500"></div>
            <div className="absolute top-66 left-34 w-1 h-1 bg-white rounded-full animate-pulse delay-1500"></div>
            <div className="absolute top-82 left-50 w-0.5 h-0.5 bg-blue-300 rounded-full animate-pulse delay-3000"></div>
            <div className="absolute top-98 left-18 w-1 h-1 bg-white rounded-full animate-pulse delay-2500"></div>
            
            {/* More stars scattered */}
            <div className="absolute top-22 right-26 w-0.5 h-0.5 bg-blue-200 rounded-full animate-pulse delay-700"></div>
            <div className="absolute top-34 right-42 w-1 h-1 bg-white rounded-full animate-pulse delay-1200"></div>
            <div className="absolute top-50 right-22 w-0.5 h-0.5 bg-blue-300 rounded-full animate-pulse delay-1800"></div>
            <div className="absolute top-70 right-38 w-1 h-1 bg-white rounded-full animate-pulse delay-2200"></div>
            <div className="absolute top-90 right-30 w-0.5 h-0.5 bg-blue-200 rounded-full animate-pulse delay-800"></div>
            
            {/* Additional stars for depth */}
            <div className="absolute top-30 left-1/4 w-0.5 h-0.5 bg-blue-100 rounded-full animate-pulse delay-400"></div>
            <div className="absolute top-54 left-3/4 w-1 h-1 bg-white rounded-full animate-pulse delay-1600"></div>
            <div className="absolute top-78 left-1/3 w-0.5 h-0.5 bg-blue-300 rounded-full animate-pulse delay-2800"></div>
            <div className="absolute top-94 left-2/3 w-1 h-1 bg-white rounded-full animate-pulse delay-600"></div>
            
            {/* Distant stars for more depth */}
            <div className="absolute top-18 left-1/2 w-0.5 h-0.5 bg-blue-100 rounded-full animate-pulse delay-900"></div>
            <div className="absolute top-42 left-1/5 w-0.5 h-0.5 bg-white rounded-full animate-pulse delay-1300"></div>
            <div className="absolute top-58 left-4/5 w-0.5 h-0.5 bg-blue-200 rounded-full animate-pulse delay-1900"></div>
            <div className="absolute top-82 left-1/6 w-0.5 h-0.5 bg-blue-300 rounded-full animate-pulse delay-2400"></div>
            <div className="absolute top-98 left-5/6 w-0.5 h-0.5 bg-white rounded-full animate-pulse delay-1100"></div>
            
            {/* Very distant tiny stars */}
            <div className="absolute top-20 left-1/3 w-0.5 h-0.5 bg-blue-50 rounded-full animate-pulse delay-600"></div>
            <div className="absolute top-74 left-2/5 w-0.5 h-0.5 bg-blue-100 rounded-full animate-pulse delay-1400"></div>
            <div className="absolute top-90 left-1/8 w-0.5 h-0.5 bg-white rounded-full animate-pulse delay-2100"></div>
          </div>
          
          {/* Jet exhaust trails */}
          <div className="absolute inset-0">
            {/* Main jet trail - diagonal from top-left to bottom-right */}
            <div className="absolute top-10 left-10 w-1 h-32 bg-gradient-to-b from-transparent via-blue-400/30 to-transparent transform rotate-12 animate-pulse delay-1000"></div>
            <div className="absolute top-12 left-12 w-0.5 h-28 bg-gradient-to-b from-transparent via-cyan-400/40 to-transparent transform rotate-12 animate-pulse delay-1500"></div>
            
            {/* Secondary jet trail - horizontal across middle */}
            <div className="absolute top-1/2 left-0 w-64 h-0.5 bg-gradient-to-r from-transparent via-blue-300/20 to-transparent animate-pulse delay-2000"></div>
            <div className="absolute top-1/2 left-0 w-48 h-0.5 bg-gradient-to-r from-transparent via-cyan-300/30 to-transparent animate-pulse delay-2500"></div>
            
            {/* Engine glow effects */}
            <div className="absolute top-1/4 right-1/4 w-8 h-8 bg-blue-500/10 rounded-full blur-md animate-pulse delay-500"></div>
            <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-cyan-400/20 rounded-full blur-sm animate-pulse delay-800"></div>
            
            <div className="absolute bottom-1/3 left-1/3 w-6 h-6 bg-blue-400/15 rounded-full blur-lg animate-pulse delay-1200"></div>
            <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-cyan-300/25 rounded-full blur-sm animate-pulse delay-1800"></div>
          </div>
          
          {/* Flight path lines */}
          <div className="absolute inset-0">
            {/* Curved flight path */}
            <div className="absolute top-1/4 left-1/4 w-32 h-32 border-l-2 border-t-2 border-blue-400/20 rounded-tl-full animate-pulse delay-3000"></div>
            <div className="absolute top-1/3 left-1/3 w-24 h-24 border-l border-t border-cyan-400/30 rounded-tl-full animate-pulse delay-3500"></div>
            
            {/* Straight trajectory lines */}
            <div className="absolute top-1/2 right-1/4 w-24 h-0.5 bg-gradient-to-r from-blue-400/30 to-transparent transform rotate-45 animate-pulse delay-4000"></div>
            <div className="absolute bottom-1/4 left-1/2 w-20 h-0.5 bg-gradient-to-r from-cyan-400/25 to-transparent transform -rotate-30 animate-pulse delay-4500"></div>
          </div>
          
          {/* Engine exhaust particles */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 right-1/4 w-1 h-1 bg-blue-400/40 rounded-full animate-pulse delay-600"></div>
            <div className="absolute top-1/4 right-1/4 w-0.5 h-0.5 bg-cyan-300/50 rounded-full animate-pulse delay-800"></div>
            <div className="absolute top-1/4 right-1/4 w-0.5 h-0.5 bg-white/30 rounded-full animate-pulse delay-1000"></div>
            
            <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-blue-300/35 rounded-full animate-pulse delay-1400"></div>
            <div className="absolute bottom-1/3 left-1/3 w-0.5 h-0.5 bg-cyan-400/45 rounded-full animate-pulse delay-1600"></div>
            <div className="absolute bottom-1/3 left-1/3 w-0.5 h-0.5 bg-white/25 rounded-full animate-pulse delay-1800"></div>
          </div>
          
          {/* Subtle nebula effect with jet theme */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/15 via-cyan-900/8 to-indigo-900/12"></div>
          
          {/* Cosmic dust particles with jet theme */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400/20 rounded-full blur-sm animate-pulse delay-2000"></div>
            <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-cyan-400/30 rounded-full blur-sm animate-pulse delay-1500"></div>
            <div className="absolute top-2/3 left-1/3 w-1.5 h-1.5 bg-indigo-400/25 rounded-full blur-sm animate-pulse delay-3000"></div>
            <div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-blue-300/20 rounded-full blur-sm animate-pulse delay-2500"></div>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center font-poppins">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-[200] mb-6 sm:mb-8 text-white">Atmanirbhar Bharat in Technology</h2>
          <p className="font-[200] text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We are proud contributors to India's vision of self-reliance in defence and technology. Vayuvya Defence 
            works closely with academia, industry experts, and innovators to build the next generation 
            of aerospace, software, and AI technologies that serve our nation's strategic objectives.
          </p>
        </div>
      </section>

      {/* Call to Action Sections */}
      <section className="py-12 sm:py-16 md:py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-poppins">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Careers CTA */}
            <div className="bg-gradient-to-br from-blue-900/20 to-gray-900/20 p-6 sm:p-8 rounded-lg border border-gray-700 text-center">
              <h3 className="text-xl sm:text-2xl font-[200] mb-3 sm:mb-4">Join the Defence Tech Revolution</h3>
              <p className="font-[200] text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
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
              <h3 className="text-xl sm:text-2xl font-[200] mb-3 sm:mb-4">Let's Collaborate</h3>
              <p className="font-[200] text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
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
