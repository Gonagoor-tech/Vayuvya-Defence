
import React from 'react';

const Software = () => {
  const focusAreas = [
    {
      title: 'Enterprise-Grade Solutions',
      description: 'We develop cloud-native platforms using microservice architecture that supports seamless scaling and agile iteration. These systems are engineered for critical business operations such as ERP, CRM, supply chain, and data analytics.'
    },
    {
      title: 'Startup Tech Enablement',
      description: 'We collaborate with emerging startups to convert ideas into working products. From wireframes and MVPs to full-stack solutions, we offer accelerated development cycles and long-term technology partnerships.'
    },
    {
      title: 'Custom Applications',
      description: 'Our team builds desktop, mobile, and web applications tailored to unique business domains. We incorporate the latest in UX/UI design, real-time data processing, and secure API integration to ensure top-tier functionality.'
    },
    {
      title: 'Educational & Social Impact Platforms',
      description: 'We have experience in building tools for e-learning, skill development, and digital enablement. Our platforms are used in schools, research institutions, and community initiatives.'
    }
  ];

  const whyChoose = [
    'Agile development processes with rapid delivery',
    'In-house product design and QA capabilities',
    'Integration with AI, IoT, and cloud technologies',
    'Strong data privacy and security protocols'
  ];

  const aiFocusAreas = [
    {
      title: 'Sudharshana AI Framework',
      description: 'A robust, modular AI framework built to enable fast prototyping, explainability, and deployment of machine learning models. It includes built-in tools for data preprocessing, model training, bias detection, and performance visualization.'
    },
    {
      title: 'Healthcare AI',
      description: 'We are developing advanced diagnostics and patient-assist tools using deep learning models trained on medical imaging and records. Our goal is to support clinical decisions, reduce diagnosis time, and improve accessibility in rural areas.'
    },
    {
      title: 'AI for Industry Automation',
      description: 'Our solutions optimize processes in manufacturing, logistics, and customer service. Applications include predictive maintenance, demand forecasting, and robotic process automation (RPA).'
    },
    {
      title: 'Conversational AI & NLP',
      description: 'We design intelligent chatbots, voice assistants, and NLP pipelines that enable smooth communication between users and digital systems. These are used in customer support, education, and content generation.'
    }
  ];

  const coreValues = [
    {
      title: 'Transparency',
      description: 'Explainable models and outcomes'
    },
    {
      title: 'Privacy',
      description: 'Ethical handling of sensitive data'
    },
    {
      title: 'Scalability',
      description: 'Cloud-based and on-edge AI deployments'
    },
    {
      title: 'Impact',
      description: 'AI designed to solve real-world challenges'
    }
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Software <span className="text-blue-400">Division</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Engineering Scalable Solutions for a Connected Future
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
              At Vayuvya Defence, our software division specializes in developing custom, cutting-edge applications designed to solve complex problems across industries. From startups to enterprises and educational institutions, we craft end-to-end solutions with performance, scalability, and user experience at the core.
            </p>
          </div>

          <h2 className="text-4xl font-bold text-center mb-12">Key Focus Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {focusAreas.map((area, index) => (
              <div key={index} className="bg-black/50 p-8 rounded-lg border border-gray-700">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">{area.title}</h3>
                <p className="text-gray-300">{area.description}</p>
              </div>
            ))}
          </div>

          {/* Why Choose Section */}
          <div className="bg-gradient-to-br from-blue-900/20 to-gray-900/20 p-8 rounded-lg border border-gray-700">
            <h3 className="text-3xl font-bold mb-6 text-center">Why Choose Vayuvya Software?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {whyChoose.map((reason, index) => (
                <div key={index} className="flex items-center">
                  <span className="text-blue-400 mr-3">●</span>
                  <span className="text-gray-300">{reason}</span>
                </div>
              ))}
            </div>
            <p className="text-lg text-gray-300 text-center mt-6">
              Our software team is committed to transforming ideas into technology-driven success stories.
            </p>
          </div>
        </div>
      </section>

      {/* AI Division Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Artificial Intelligence Division</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Building Responsible AI for Meaningful Change
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mt-6 leading-relaxed">
              The AI division at Vayuvya Defence focuses on creating intelligent, ethical, and human-centric solutions that improve efficiency, decision-making, and user interaction. We build AI tools that not only solve problems but do so transparently, ethically, and at scale.
            </p>
          </div>

          <h3 className="text-3xl font-bold text-center mb-12">AI Focus Areas</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {aiFocusAreas.map((area, index) => (
              <div key={index} className="bg-gray-900/50 p-8 rounded-lg border border-gray-700">
                <h4 className="text-xl font-semibold mb-4 text-blue-400">{area.title}</h4>
                <p className="text-gray-300">{area.description}</p>
              </div>
            ))}
          </div>

          {/* Core Values */}
          <div className="bg-gradient-to-br from-gray-900/20 to-black/20 p-8 rounded-lg border border-gray-700">
            <h3 className="text-3xl font-bold mb-6 text-center">Core Values in Our AI Journey</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              {coreValues.map((value, index) => (
                <div key={index} className="text-center">
                  <h4 className="text-lg font-semibold text-blue-400 mb-2">{value.title}</h4>
                  <p className="text-gray-300 text-sm">{value.description}</p>
                </div>
              ))}
            </div>
            <p className="text-lg text-gray-300 text-center">
              At Vayuvya Defence, our AI efforts are rooted in responsible innovation — ensuring that every model we build uplifts, assists, and empowers.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Software;
