import React from 'react';

const About = () => {
  const values = [
    {
      title: 'Innovation with Purpose',
      description:
        "Developing cutting-edge technology that serves our nation's strategic objectives.",
    },
    {
      title: 'Excellence in Engineering',
      description:
        'Maintaining the highest standards in design, manufacturing, and testing.',
    },
    {
      title: 'Strategic National Commitment',
      description:
        "Supporting India's vision of self-reliance in critical defence technologies.",
    },
    {
      title: 'Integrity and Collaboration',
      description:
        'Building trusted partnerships with stakeholders across the aerospace ecosystem.',
    },
  ];

  return (
    <div className="relative font-poppins">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-black">
          {/* Animated stars */}
          <div className="absolute inset-0">
            <div className="absolute top-16 left-20 w-1 h-1 bg-white rounded-full animate-pulse"></div>
            <div className="absolute top-32 left-48 w-0.5 h-0.5 bg-blue-300 rounded-full animate-pulse delay-1000"></div>
          </div>

          {/* Subtle nebula */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/5 to-indigo-900/10"></div>

          {/* 🔥 Rotating engine full background */}
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
            <img
              src="/lovable-uploads/round.png"
              alt="Rotating jet engine"
              className="w-[140%] max-w-none opacity-20 animate-[spin_40s_linear_infinite]"
            />
          </div>

          {/* Cosmic dust */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400/20 rounded-full blur-sm animate-pulse delay-2000"></div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-[200] mb-6 text-white">
            About <span className="text-blue-400">Vayuvya Defence</span>
          </h1>
          <p className="font-[200] text-xl text-gray-300 max-w-3xl mx-auto">
            Pioneering indigenous technologies across aerospace, software, and
            AI for India's defence ecosystem
          </p>
        </div>
      </section>

{/* Who We Are */}
<section className="relative py-20 overflow-hidden min-h-screen flex items-center justify-center">
  {/* Background airplane aligned right */}
  <div
    className="absolute inset-0 bg-no-repeat bg-right bg-contain"
    style={{ backgroundImage: "url('/lovable-uploads/plane-bg.png.webp')" }}
  ></div>

  {/* Dark overlay for readability */}
  <div className="absolute inset-0 bg-black/70"></div>

  {/* Centered Content */}
  <div className="relative z-10 max-w-4xl text-center px-4 sm:px-6 lg:px-8 font-poppins">
    <h2 className="text-4xl font-semibold mb-16 text-white">
      Who We Are
    </h2>
    <div className="text-lg text-white leading-relaxed space-y-6 font-normal">
      <p>
        Vayuvya Defence is a private defence technology company focused on
        the indigenous development of cutting-edge solutions across
        aerospace, software, and artificial intelligence.
      </p>
      <p>
        Our company was founded with the vision of making India
        self-reliant in critical defence technologies. We specialize in
        designing and manufacturing high-performance micro jet engines,
        satellite propulsion systems, autonomous aerial platforms,
        enterprise software solutions, and responsible AI systems that
        empower tactical and strategic operations.
      </p>
    </div>
  </div>
</section>

      {/* Mission & Vision */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="relative bg-gradient-to-br from-blue-900/30 to-gray-900/30 p-8 rounded-lg border border-gray-600/50 backdrop-blur-sm">
              <h3 className="text-3xl font-semibold mb-6 text-blue-400">
                Our Mission
              </h3>
              <p className="font-normal text-lg text-gray-300 leading-relaxed">
                To provide reliable, innovative, and high-performance technology
                solutions across aerospace, software, and AI that support the
                strategic objectives of India's defence and space ecosystems.
              </p>
            </div>

            {/* Vision */}
            <div className="relative bg-gradient-to-br from-gray-900/30 to-black/50 p-8 rounded-lg border border-gray-600/50 backdrop-blur-sm">
              <h3 className="text-3xl font-semibold mb-6 text-blue-400">
                Our Vision
              </h3>
              <p className="font-normal text-lg text-gray-300 leading-relaxed">
                To be India's leading innovator in defence technologies,
                spanning aerospace propulsion, intelligent software systems, and
                responsible AI.
              </p>
            </div>
          </div>
        </div>
      </section>

{/* Core Values */}
<section
  className="relative py-20 overflow-hidden min-h-screen"
  style={{
    backgroundImage: "url('/images/aero.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }}
>
  {/* Dark overlay for readability */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-4xl font-semibold text-center mb-16 text-white">
      Core Values
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
      {values.map((value, index) => (
        <div
          key={index}
          className="relative bg-black/30 p-8 rounded-xl border border-gray-600/50 backdrop-blur-md hover:scale-105 transition-transform duration-300"
        >
          <h3 className="text-xl font-semibold mb-4 text-blue-400">
            {value.title}
          </h3>
          <p className="font-normal text-gray-300">{value.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Strategic Alignment */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-semibold mb-8 text-white">
            Strategic Alignment
          </h2>
          <p className="font-normal text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
            Our work supports key national defence objectives and aligns with
            the mission of organizations like DRDO, HAL, ISRO, and GTRE.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative bg-gradient-to-br from-blue-900/30 to-gray-900/30 p-6 rounded-lg border border-gray-600/50 backdrop-blur-sm">
              <h3 className="text-lg font-semibold text-blue-400 mb-2">
                DRDO Partnership
              </h3>
              <p className="font-normal text-gray-300 text-sm">
                Collaborative research and development initiatives
              </p>
            </div>
            <div className="relative bg-gradient-to-br from-blue-900/30 to-gray-900/30 p-6 rounded-lg border border-gray-600/50 backdrop-blur-sm">
              <h3 className="text-lg font-semibold text-blue-400 mb-2">
                ISRO Collaboration
              </h3>
              <p className="font-normal text-gray-300 text-sm">
                Supporting space technology and satellite missions
              </p>
            </div>
            <div className="relative bg-gradient-to-br from-blue-900/30 to-gray-900/30 p-6 rounded-lg border border-gray-600/50 backdrop-blur-sm">
              <h3 className="text-lg font-semibold text-blue-400 mb-2">
                GTRE Alignment
              </h3>
              <p className="font-normal text-gray-300 text-sm">
                Advanced turbine technology development
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
