import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const Products = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const products = [
    {
      name: "TRJ-M1",
      overview: "The TRJ-M1 is a compact turbojet engine delivering 4kN thrust...",
      image: "/lovable-uploads/aab6d5f1-c76a-4509-91ed-0f70fa59cf5e.png",
      specifications: [
        { label: "Thrust", value: "4 kN" },
        { label: "Dry Weight", value: "<5 kg" },
        { label: "Fuel Type", value: "Jet-A1 / Aviation Kerosene" },
        { label: "Design Life", value: "20+ operational hours" },
        { label: "Start Mechanism", value: "Electric start system" },
        { label: "Control System", value: "Digital Electronic Engine Controller (DEEC)" },
      ],
      applications: ["Tactical UAVs", "Cruise Missiles", "Target Drones", "Experimental Air Vehicles"],
    },
    {
      name: "TRJ-M1P",
      overview: "The TRJ-M1P is an upgraded micro turbojet engine delivering 5kN thrust...",
      image: "/lovable-uploads/aab6d5f1-c76a-4509-91ed-0f70fa59cf5e.png",
      specifications: [
        { label: "Thrust", value: "5 kN" },
        { label: "Dry Weight", value: "≈5.5 kg" },
        { label: "Fuel Type", value: "Jet-A1 / Aviation Kerosene" },
        { label: "Design Life", value: "25+ operational hours" },
        { label: "Start Mechanism", value: "Electric start system" },
        { label: "Control System", value: "Advanced DEEC with AI Optimization" },
      ],
      applications: ["Tactical UAVs", "Long-Range Missiles", "Target Drones", "Experimental Air Vehicles"],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setCurrentIndex((prev) => (prev + 1) % products.length), 10000);
    return () => clearInterval(interval);
  }, [products.length]);

  return (
    <div className="relative">
      {/* Hero Section - Our Products */}
      <section className="hero-section relative h-screen flex items-center justify-center text-center">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-contain md:object-cover"
        >
          <source src="/engine-bg.mp4" type="video/mp4" />
        </video>
        {/* Overlay only for desktop */}
        <div className="hidden md:block absolute inset-0 bg-black/50"></div>

        <div className="hero-content relative z-10 text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Our <span className="text-blue-400">Products</span>
          </h1>
          <p className="text-md md:text-xl">
            Advanced micro jet engines engineered for tactical aerospace applications
          </p>
        </div>
      </section>

      {/* Carousel Section - NO BACKGROUND VIDEO */}
      <section className="py-20 bg-black">
        <div className="container max-w-full mx-auto relative z-10 overflow-hidden">
          <div className="flex transition-transform duration-1000 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {products.map((product, index) => (
              <div key={index} className="carousel-item min-w-full px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-6">{product.name}</h2>
                <div className="flex flex-col lg:flex-row gap-12 items-center">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4">Product Overview</h3>
                    <p className="text-gray-300">{product.overview}</p>
                  </div>
                  <div className="flex-1 text-center">
                    <img src={product.image} alt={product.name} className="w-full h-auto max-w-md mx-auto rounded-lg" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specs & Applications */}
      <section className="py-20 bg-gray-900 px-4">
        <div className="container max-w-5xl mx-auto flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2">
            <h3 className="text-3xl font-bold text-white mb-6 border-l-4 border-blue-500 pl-3">Key Specifications</h3>
            <div className="specs-grid grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {products[currentIndex].specifications.map((spec, i) => (
                <div key={i} className="bg-gray-700 p-4 rounded-lg border border-gray-600">
                  <div className="text-blue-400 font-semibold">{spec.label}</div>
                  <div className="text-white font-bold">{spec.value}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2">
            <h3 className="text-3xl font-bold text-white mb-6 border-l-4 border-blue-500 pl-3">Applications</h3>
            <div className="apps-grid grid grid-cols-1 md:grid-cols-2 gap-4">
              {products[currentIndex].applications.map((app, i) => (
                <div key={i} className="bg-gray-700 p-4 rounded-lg text-center text-blue-400 font-semibold border border-gray-600">{app}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Datasheet & Demo */}
      <section className="py-20 bg-black px-4">
        <div className="container max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-blue-900/20 to-gray-900/20 p-8 rounded-lg border border-gray-700 text-center">
            <h3 className="text-xl font-semibold mb-4">Technical Datasheet</h3>
            <p className="text-gray-300 mb-6">Download detailed specifications and performance data</p>
            <Button onClick={scrollToTop} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">Request Datasheet</Button>
          </div>
          <div className="bg-gradient-to-br from-gray-900/20 to-black/20 p-8 rounded-lg border border-gray-700 text-center">
            <h3 className="text-xl font-semibold mb-4">Schedule Demo</h3>
            <p className="text-gray-300 mb-6">Arrange a demonstration or technical discussion</p>
            <Button onClick={scrollToTop} variant="outline" className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black px-6 py-3 rounded-lg font-semibold transition-all duration-300">Schedule Discussion</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
