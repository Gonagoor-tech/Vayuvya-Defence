
import React from 'react';
import { Button } from "@/components/ui/button";

const Products = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const specifications = [
    { label: 'Thrust', value: '4 kN' },
    { label: 'Dry Weight', value: '<5 kg' },
    { label: 'Fuel Type', value: 'Jet-A1 / Aviation Kerosene' },
    { label: 'Design Life', value: '20+ operational hours' },
    { label: 'Start Mechanism', value: 'Electric start system' },
    { label: 'Control System', value: 'Digital Electronic Engine Controller (DEEC)' }
  ];

  const applications = [
    'Tactical UAVs',
    'Cruise Missiles',
    'Target Drones',
    'Experimental Air Vehicles'
  ];

  const handleDatasheetRequest = () => {
    scrollToTop();
    // Add functionality for datasheet request
    console.log('Datasheet requested');
  };

  const handleScheduleDemo = () => {
    scrollToTop();
    // Add functionality for scheduling demo
    console.log('Demo scheduled');
  };

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="text-blue-400">Products</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Advanced micro jet engines engineered for tactical aerospace applications
          </p>
        </div>
      </section>

      {/* TRJ-M1 Product Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">TRJ-M1</h2>
            <h3 className="text-2xl text-blue-400 font-semibold">Micro Turbojet Engine</h3>
          </div>

          {/* Product Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h3 className="text-3xl font-bold mb-6">Product Overview</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                The TRJ-M1 is a compact turbojet engine delivering 4kN thrust, designed specifically 
                for use in UAVs, loitering munitions, and other tactical platforms. It is lightweight, 
                fuel-efficient, and engineered for rapid integration into airframes.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-900/20 to-gray-900/20 p-8 rounded-lg border border-gray-700">
              <div className="text-center">
                <img 
                  src="/lovable-uploads/aab6d5f1-c76a-4509-91ed-0f70fa59cf5e.png" 
                  alt="TRJ-M1 Micro Jet Engine Technical Drawing" 
                  className="w-full h-auto max-w-lg mx-auto mb-4"
                />
                <p className="text-gray-400">Micro Turbojet Engine Technical Specifications</p>
              </div>
            </div>
          </div>

          {/* Key Specifications */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-center mb-12">Key Specifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {specifications.map((spec, index) => (
                <div key={index} className="bg-black/50 p-6 rounded-lg border border-gray-700 hover:border-blue-400 transition-all duration-300">
                  <div className="text-blue-400 font-semibold mb-2">{spec.label}</div>
                  <div className="text-xl font-bold text-white">{spec.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Applications */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-center mb-12">Applications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {applications.map((app, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-900/20 to-gray-900/20 p-6 rounded-lg border border-gray-700 text-center hover:border-blue-400 transition-all duration-300">
                  <div className="text-lg font-semibold text-blue-400">{app}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Future Developments */}
          <div className="bg-black/50 p-8 rounded-lg border border-gray-700">
            <h3 className="text-3xl font-bold mb-6 text-center">Future Developments</h3>
            <p className="text-lg text-gray-300 text-center max-w-4xl mx-auto">
              We're actively working on higher-thrust variants and hybrid turbine-electric systems 
              for longer-range and heavier platforms. Our roadmap includes enhanced fuel efficiency, 
              improved durability, and advanced control systems.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Get More Information</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Interested in technical specifications or scheduling a demonstration?
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-900/20 to-gray-900/20 p-8 rounded-lg border border-gray-700 text-center">
              <h3 className="text-xl font-semibold mb-4">Technical Datasheet</h3>
              <p className="text-gray-300 mb-6">Download detailed specifications and performance data</p>
              <Button 
                onClick={handleDatasheetRequest}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Request Datasheet
              </Button>
            </div>
            
            <div className="bg-gradient-to-br from-gray-900/20 to-black/20 p-8 rounded-lg border border-gray-700 text-center">
              <h3 className="text-xl font-semibold mb-4">Schedule Demo</h3>
              <p className="text-gray-300 mb-6">Arrange a demonstration or technical discussion</p>
              <Button 
                onClick={handleScheduleDemo}
                variant="outline"
                className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black px-6 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Schedule Discussion
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
