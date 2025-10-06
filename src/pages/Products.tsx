import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Products: React.FC = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const products = [
    {
      name: "TRJ-M1",
      overview:
        "The TRJ-M1 is a compact turbojet engine delivering 4kN thrust, designed specifically for use in UAVs, loitering munitions, and other tactical platforms. It is lightweight, fuel-efficient, and engineered for rapid integration into airframes.",
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
      overview:
        "The TRJ-M1P is an upgraded micro turbojet engine delivering 5kN thrust, engineered for long-range UAVs, tactical missiles, and high-performance experimental air vehicles. Lightweight and highly efficient, it integrates seamlessly with advanced flight control systems.",
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
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % products.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh]">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="/engine-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Our <span className="text-blue-400">Products</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-300">
            Advanced micro jet engines engineered for tactical aerospace applications
          </p>
        </div>
      </section>

      {/* Product Carousel */}
      <section className="py-20 bg-black">
        <div className="overflow-hidden max-w-6xl mx-auto px-4">
          <div className="flex transition-transform duration-1000 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {products.map((product) => (
              <div key={product.name} className="min-w-full flex flex-col lg:flex-row items-center gap-12">
                <div className="flex-1 text-center lg:text-left">
                  <h2 className="text-4xl font-bold text-white mb-6">{product.name}</h2>
                  <h3 className="text-2xl font-semibold text-blue-400 mb-4">Product Overview</h3>
                  <p className="text-gray-300">{product.overview}</p>
                </div>
                <div className="flex-1 text-center">
                  <img src={product.image} alt={product.name} className="mx-auto rounded-lg w-full max-w-md" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications & Applications */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2">
            <h3 className="text-3xl font-bold text-white mb-6 border-l-4 border-blue-500 pl-3">Key Specifications</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {products[currentIndex].specifications.map((spec) => (
                <div key={spec.label} className="bg-gray-700 p-4 rounded-lg border border-gray-600">
                  <div className="text-blue-400 font-semibold">{spec.label}</div>
                  <div className="text-white font-bold">{spec.value}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2">
            <h3 className="text-3xl font-bold text-white mb-6 border-l-4 border-blue-500 pl-3">Applications</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {products[currentIndex].applications.map((app) => (
                <div key={app} className="bg-gray-700 p-4 rounded-lg text-center text-blue-400 font-semibold border border-gray-600">
                  {app}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Datasheet & Demo */}
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
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
