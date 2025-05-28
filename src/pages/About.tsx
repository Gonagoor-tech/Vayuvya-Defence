
import React from 'react';

const About = () => {
  const values = [
    {
      title: 'Innovation with Purpose',
      description: 'Developing cutting-edge technology that serves our nation\'s strategic objectives.'
    },
    {
      title: 'Excellence in Engineering',
      description: 'Maintaining the highest standards in design, manufacturing, and testing.'
    },
    {
      title: 'Strategic National Commitment',
      description: 'Supporting India\'s vision of self-reliance in critical defence technologies.'
    },
    {
      title: 'Integrity and Collaboration',
      description: 'Building trusted partnerships with stakeholders across the aerospace ecosystem.'
    }
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About <span className="text-blue-400">Trishul Defence</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Pioneering indigenous micro jet engine technology for India's defence ecosystem
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Who We Are</h2>
          <div className="max-w-4xl mx-auto text-lg text-gray-300 leading-relaxed space-y-6">
            <p>
              Trishul Defence is a private defence technology company focused on the indigenous 
              development of micro jet engines for tactical applications. Headquartered in India, 
              our team consists of aerospace engineers, propulsion specialists, and manufacturing 
              experts committed to building next-gen turbine solutions for Indian and global defence sectors.
            </p>
            <p>
              Our company was founded with the vision of making India self-reliant in critical 
              propulsion technologies. We specialize in designing and manufacturing high-performance 
              micro jet engines that power unmanned aerial systems, loitering munitions, and other 
              advanced aerospace platforms.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-gradient-to-br from-blue-900/20 to-gray-900/20 p-8 rounded-lg border border-gray-700">
              <h3 className="text-3xl font-bold mb-6 text-blue-400">Our Mission</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                To provide reliable, compact, and high-performance propulsion systems that support 
                the strategic objectives of India's aerospace and defence ecosystems. We are committed 
                to delivering indigenous solutions that meet global standards while serving our nation's 
                security needs.
              </p>
            </div>
            
            {/* Vision */}
            <div className="bg-gradient-to-br from-gray-900/20 to-black/20 p-8 rounded-lg border border-gray-700">
              <h3 className="text-3xl font-bold mb-6 text-blue-400">Our Vision</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                To be India's leading innovator in micro jet propulsion systems, contributing to a 
                self-reliant, secure, and technologically advanced nation. We envision a future where 
                Indian-designed engines power the next generation of tactical aerospace platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-black/50 p-8 rounded-lg border border-gray-700">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Alignment */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">Strategic Alignment</h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
            Our work supports key national defence objectives and aligns with the mission of 
            organizations like DRDO, HAL, and GTRE, helping India achieve technological 
            independence in propulsion.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-900/20 to-gray-900/20 p-6 rounded-lg border border-gray-700">
              <h3 className="text-lg font-semibold text-blue-400 mb-2">DRDO Partnership</h3>
              <p className="text-gray-300 text-sm">Collaborative research and development initiatives</p>
            </div>
            <div className="bg-gradient-to-br from-blue-900/20 to-gray-900/20 p-6 rounded-lg border border-gray-700">
              <h3 className="text-lg font-semibold text-blue-400 mb-2">HAL Collaboration</h3>
              <p className="text-gray-300 text-sm">Supporting aerospace manufacturing excellence</p>
            </div>
            <div className="bg-gradient-to-br from-blue-900/20 to-gray-900/20 p-6 rounded-lg border border-gray-700">
              <h3 className="text-lg font-semibold text-blue-400 mb-2">GTRE Alignment</h3>
              <p className="text-gray-300 text-sm">Advanced turbine technology development</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
