import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Achievements from "./Achievements";

const Home: React.FC = () => {
  const capabilities = [
    { title: "Indigenous Engine Design", description: "Fully conceptualized and engineered in India to meet global defence standards." },
    { title: "High-Performance Micro Engines", description: "Specialized in small turbine engines with high thrust-to-weight ratios." },
    { title: "Cutting-Edge R&D", description: "In-house research labs with simulation, testing, and rapid prototyping facilities." }
  ];

  const features = [
    { title: "100% Indigenous Technology", description: "Fully developed in India with no foreign dependencies" },
    { title: "Scalable Multi-Domain Solutions", description: "Aerospace, software, and AI technologies for various mission requirements" },
    { title: "Designed for Strategic Platforms", description: "Optimized for UAVs, satellites, defence applications, and enterprise systems" },
    { title: "Lightweight & Efficient", description: "Maximum performance with minimal resource footprint" },
    { title: "Versatile Fuel & Data Compatibility", description: "Works with standard systems and multiple data formats" },
    { title: "Reliable in Critical Conditions", description: "Built to withstand extreme operational environments" }
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-start overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full bg-center bg-no-repeat bg-contain md:bg-cover"
          style={{ backgroundImage: `url('${import.meta.env.BASE_URL}lovable-uploads/jettin.png')`, filter: "brightness(0.35)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/80" />
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 text-left font-poppins">
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-[200] mb-2 sm:mb-4 leading-tight tracking-tight">
            Empowering India's Defence with
            <span className="text-blue-400 block mt-1 font-[200] text-sm sm:text-base md:text-lg lg:text-2xl">
              Advanced Technology Solutions
            </span>
          </h1>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 mb-4 sm:mb-6 max-w-xl leading-relaxed">
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

      {/* Achievements inserted here */}
      <Achievements />

      {/* Introduction */}
      <section className="relative py-12 sm:py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black">
          <div className="absolute inset-0">
            <div className="hidden md:block absolute top-12 left-16 w-1 h-1 bg-white rounded-full animate-pulse" />
            <div className="hidden md:block absolute top-24 left-40 w-0.5 h-0.5 bg-blue-300 rounded-full animate-pulse delay-1000" />
            <div className="hidden md:block absolute top-36 left-20 w-1 h-1 bg-white rounded-full animate-pulse delay-2000" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/5 to-indigo-900/10" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center font-poppins">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-[200] mb-6 sm:mb-8 text-white">Advancing India's Technology Future</h2>
          <p className="font-[200] text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Vayuvya Defence is a technology company committed to designing and manufacturing cutting-edge solutions across aerospace, software, and AI. Our mission is to power India's future in defence with reliable, innovative, and efficient systems.
          </p>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="relative py-12 sm:py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('${import.meta.env.BASE_URL}lovable-uploads/lite.png')` }} />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-poppins">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-[200] text-center mb-12 sm:mb-16 text-white">Our Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="group relative bg-gradient-to-br from-gray-900/80 to-black/80 p-6 sm:p-8 rounded-xl border border-gray-700/50 backdrop-blur-sm transition-all duration-500 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2 cursor-pointer overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
                <div className="relative z-10">
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-white group-hover:text-blue-400 transition-colors duration-300">{capability.title}</h3>
                  <p className="text-sm sm:text-base text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{capability.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-12 sm:py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('${import.meta.env.BASE_URL}lovable-uploads/engine_md.png')`, filter: "brightness(0.3)" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-poppins">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-[200] text-center mb-12 sm:mb-16 text-white">Why Choose Vayuvya Defence?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group relative bg-gradient-to-br from-gray-900/80 to-black/80 p-5 sm:p-6 rounded-xl border border-gray-700/50 backdrop-blur-sm transition-all duration-500 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2 cursor-pointer overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-white group-hover:text-blue-400 transition-colors duration-300">{feature.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
