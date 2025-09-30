import React from 'react';
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

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

  return (
    <div className="relative">
      {/* Hero Section with Video Background */}
      <section className="relative h-screen flex items-center justify-center text-center">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/engine-bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay for better contrast */}
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 max-w-4xl px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Our <span className="text-blue-400">Products</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Advanced micro jet engines engineered for tactical aerospace applications
          </p>
        </div>
      </section>

     {/* TRJ-M1 Product Section */}
<section className="py-20 bg-black">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-8">
      <h2 className="text-4xl font-bold text-white">TRJ-M1</h2>
    </div>

    <Carousel className="relative">
      <CarouselContent>
        <CarouselItem>
          {/* Product Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h4 className="text-3xl font-bold mb-6 text-white">Product Overview</h4>
              <p className="text-lg text-gray-300 leading-relaxed">
                The TRJ-M1 is a compact turbojet engine delivering 4kN thrust, designed specifically 
                for use in UAVs, loitering munitions, and other tactical platforms. It is lightweight, 
                fuel-efficient, and engineered for rapid integration into airframes.
              </p>
            </div>
            
            <div className="bg-black p-8 rounded-lg border border-gray-700">
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
          <div className="mb-20 bg-black p-8 rounded-lg border border-gray-700">
            <h4 className="text-3xl font-bold text-center mb-12 text-white">Key Specifications</h4>
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
          <div className="mb-20 bg-black p-8 rounded-lg border border-gray-700">
            <h4 className="text-3xl font-bold text-center mb-12 text-white">Applications</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {applications.map((app, index) => (
                <div key={index} className="bg-black/50 p-6 rounded-lg border border-gray-700 text-center hover:border-blue-400 transition-all duration-300">
                  <div className="text-lg font-semibold text-blue-400">{app}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Future Developments */}
          <div className="bg-black/50 p-8 rounded-lg border border-gray-700">
            <h4 className="text-3xl font-bold mb-6 text-center text-white">Future Developments</h4>
            <p className="text-lg text-gray-300 text-center max-w-4xl mx-auto">
              We're actively working on higher-thrust variants and hybrid turbine-electric systems 
              for longer-range and heavier platforms. Our roadmap includes enhanced fuel efficiency, 
              improved durability, and advanced control systems.
            </p>
          </div>
        </CarouselItem>
      </CarouselContent>

      <CarouselPrevious className="-left-6" />
      <CarouselNext className="-right-6" />
    </Carousel>
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
                onClick={scrollToTop}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Request Datasheet
              </Button>
            </div>
            
            <div className="bg-gradient-to-br from-gray-900/20 to-black/20 p-8 rounded-lg border border-gray-700 text-center">
              <h3 className="text-xl font-semibold mb-4">Schedule Demo</h3>
              <p className="text-gray-300 mb-6">Arrange a demonstration or technical discussion</p>
              <Button 
                onClick={scrollToTop}
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
