
import React from 'react';

const Aerospace = () => {
  const products = [
    {
      name: 'Nanoget X1',
      subtitle: 'Revolutionizing Micro-Propulsion for the NewSpace Era',
      description: 'Nanoget X1 is a next-generation miniaturized propulsion system developed specifically for nanosatellites (CubeSats and PocketQubes). Built with cutting-edge green propellants, the system delivers high-precision thrust within a compact, modular design, making it ideal for space-constrained satellite platforms.',
      features: [
        'Green Propulsion: Utilizes non-toxic, storable propellants for safe integration and handling.',
        'Precision Control: Enables fine attitude adjustments and orbital maneuvers critical for mission success.',
        'Modular Form Factor: Designed for easy integration into existing CubeSat architectures.',
        'Academic & Commercial Applications: Suitable for LEO missions involving Earth observation, technology demonstrations, and satellite formation flying.'
      ],
      conclusion: 'Nanoget X1 addresses the growing demand for cost-effective, efficient propulsion in small satellite missions, empowering educational institutions and startups to access space with ease and reliability.',
      image: '/lovable-uploads/85c115c1-3fe8-41ef-b437-0c3af6103a54.png'
    },
    {
      name: 'Skycube',
      subtitle: 'A CubeSat for Earth and Beyond – Empowering Students through Space Access',
      description: 'Skycube is a 1U–3U CubeSat platform developed through strategic academic partnerships. It serves as a hands-on educational tool and a fully operational satellite platform, enabling real-world missions in Earth observation, scientific experimentation, and amateur communication.',
      features: [
        'STEM-Driven Design: Built in collaboration with universities to train students in satellite engineering.',
        'Earth Observation Payloads: Includes sensors and cameras for imaging, weather tracking, and remote sensing applications.',
        'Open Payload Architecture: Allows plug-and-play integration of third-party experiments or research instruments.',
        'Global Communication Capability: Supports amateur radio bands and telemetry downlink for ground stations.'
      ],
      conclusion: 'Skycube is more than a satellite; it\'s a gateway for academic institutions to actively participate in space missions, develop curriculum-aligned space research, and inspire the next generation of aerospace engineers.'
    },
    {
      name: 'VayuDroid',
      subtitle: 'Aerial Intelligence for Data-Driven Missions',
      description: 'VayuDroid is an autonomous aerial robotics platform engineered for high-altitude data collection and experimental payload delivery. Designed to operate in semi-remote and sensitive environments, VayuDroid bridges the gap between UAV capabilities and scientific research needs.',
      features: [
        'High-Altitude Flight: Optimized for operations in diverse terrains and elevated atmospheric conditions.',
        'Payload Customization: Supports modular payload bays for cameras, sensors, environmental monitors, and experimental tech.',
        'AI-Based Navigation: Integrated with AI-driven guidance and stabilization algorithms for real-time decision-making.',
        'Use Cases: Agricultural surveys, environmental monitoring, defense reconnaissance, disaster response, and scientific research.'
      ],
      conclusion: 'VayuDroid empowers researchers and innovators to gather critical data from the sky, reducing costs and increasing accessibility in traditionally challenging domains.'
    }
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Aerospace <span className="text-blue-400">Division</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Pioneering space technology solutions for satellites, propulsion systems, and aerial platforms
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {products.map((product, index) => (
            <div key={product.name} className={`mb-20 ${index !== products.length - 1 ? 'border-b border-gray-700 pb-20' : ''}`}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <h2 className="text-4xl font-bold mb-4 text-blue-400">{product.name}</h2>
                  <h3 className="text-2xl font-semibold mb-6 text-white">{product.subtitle}</h3>
                  <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                    {product.description}
                  </p>
                  
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold mb-4 text-blue-400">Key Features:</h4>
                    <ul className="space-y-3">
                      {product.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-gray-300 flex items-start">
                          <span className="text-blue-400 mr-2">●</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <p className="text-lg text-gray-300 leading-relaxed">
                    {product.conclusion}
                  </p>
                </div>
                
                <div className={`bg-gradient-to-br from-blue-900/20 to-gray-900/20 p-8 rounded-lg border border-gray-700 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="text-center">
                    {product.image ? (
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-64 object-contain mx-auto mb-4 filter invert"
                      />
                    ) : (
                      <div className="w-64 h-64 mx-auto bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                        {product.name}
                      </div>
                    )}
                    <p className="text-gray-400">{product.subtitle}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Aerospace;
