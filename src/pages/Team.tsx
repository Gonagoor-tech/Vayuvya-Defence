import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Team = () => {
  const teamMembers = [
    {
      name: 'Prashanth Raghu',
      role: 'Angel Investor & SME',
      bio: 'Strategic expertise and investment support for innovation and growth, specializing in secure AI and software systems for aerospace and enterprise applications.',
      image: '/lovable-uploads/96b943e9-cb1f-4542-89e9-80f85ad9c037.png',
      initials: 'PR'
    },
    {
      name: 'Dhanush D B',
      role: 'Co-Founder & CEO',
      bio: 'Aerospace engineer with expertise in propulsion systems and advanced manufacturing. Leading the vision for indigenous defence technology development.',
      image: '/lovable-uploads/39a2fdae-d96c-404c-91b3-c9d798d32f97.png',
      initials: 'DD'
    },
     {
      name: 'Nishant Kumar Dean',
      role: ' CSO – Chief Strategy Officer',
      bio: 'Experienced engineer contributing to cutting-edge aerospace technology development and system optimization for defence applications.',
      image: '/lovable-uploads/6065d473-f5ae-4551-9c0c-7354ed4dc584.png',
      initials: 'NK'
    },
    {
      name: 'Raghavendra',
      role: 'Co-Founder & CTO',
      bio: 'Leads technology strategy, driving innovative and secure aerospace and defense solutions. Focused on turning advanced concepts into practical, high-performance systems.',
      image: '/lovable-uploads/3ad36d1d-996e-499e-9477-efd313c72130.png',
      initials: 'RG'
    }
  ];

  const advisors = [
    {
      name: 'Pruthviraj',
      role: 'Strategic Advisor',
      bio: 'Industry veteran with extensive experience in defence technology and strategic partnerships. Provides guidance on business development and market expansion.',
      image: '/lovable-uploads/de66633b-c246-4a31-9c0d-273536ff816b.png',
      initials: 'PV'
    },
    {
      name: ' Ramesh Kumar ',
      role: 'Technical Advisor',
      bio: 'Seasoned expert in aerospace engineering and technology development. Provides valuable insights on technical strategy and innovation.',
      image: '/lovable-uploads/e6b9e2e2-fccc-4e27-81c9-1fbb67e33d1a.png',
      initials: 'RM'
    }
  ];

  const interns = [
    {
      name: 'Vijay Vittal',
      role: 'Embedded Intern',
      bio: 'Embedded systems intern focusing on firmware for microcontrollers, RTOS applications, hardware bring-up, C/C++ drivers and sensor integration for aerospace and defence platforms.',
      image: '/lovable-uploads/vijay vittal.png',
      initials: 'VV'
    }
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="py-32 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Meet Our <span className="text-blue-400">Team</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The brilliant minds behind Vayuvya Defence's innovative technologies and solutions
          </p>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="relative py-20 bg-black overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=3870&auto=format&fit=crop')",
            filter: 'brightness(0.35)'
          }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/80" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="bg-black/50 border-gray-700 hover:border-blue-400 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <Avatar className="w-32 h-32 mx-auto mb-6">
                    <AvatarImage src={member.image} alt={member.name} />
                    <AvatarFallback className="text-2xl bg-blue-600">{member.initials}</AvatarFallback>
                  </Avatar>
                  <h3 className="text-2xl font-bold mb-2 text-white">{member.name}</h3>
                  <p className="text-blue-400 font-semibold mb-4">{member.role}</p>
                  <p className="text-gray-300 leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Advisory Board</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {advisors.map((advisor, index) => (
              <Card key={index} className="bg-gray-900/50 border-gray-700 hover:border-blue-400 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <Avatar className="w-32 h-32 mx-auto mb-6">
                    <AvatarImage src={advisor.image} alt={advisor.name} />
                    <AvatarFallback className="text-2xl bg-blue-600">{advisor.initials}</AvatarFallback>
                  </Avatar>
                  <h3 className="text-2xl font-bold mb-2 text-white">{advisor.name}</h3>
                  <p className="text-blue-400 font-semibold mb-4">{advisor.role}</p>
                  <p className="text-gray-300 leading-relaxed">{advisor.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Intern Team */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Intern Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {interns.map((intern, index) => (
              <Card key={index} className="bg-black/50 border-gray-700 hover:border-blue-400 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <Avatar className="w-32 h-32 mx-auto mb-6">
                    <AvatarImage src={intern.image} alt={intern.name} />
                    <AvatarFallback className="text-2xl bg-blue-600">{intern.initials}</AvatarFallback>
                  </Avatar>
                  <h3 className="text-2xl font-bold mb-2 text-white">{intern.name}</h3>
                  <p className="text-blue-400 font-semibold mb-4">{intern.role}</p>
                  <p className="text-gray-300 leading-relaxed">{intern.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">Our Culture</h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
            At Vayuvya Defence, we foster an environment of innovation, collaboration, and excellence. 
            Our team is united by a shared vision of making India self-reliant in critical defence technologies 
            while pushing the boundaries of what's possible in aerospace engineering.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black/50 p-6 rounded-lg border border-gray-700">
              <h3 className="text-lg font-semibold text-blue-400 mb-2">Innovation First</h3>
              <p className="text-gray-300 text-sm">Encouraging creative thinking and breakthrough solutions</p>
            </div>
            <div className="bg-black/50 p-6 rounded-lg border border-gray-700">
              <h3 className="text-lg font-semibold text-blue-400 mb-2">Collaborative Spirit</h3>
              <p className="text-gray-300 text-sm">Working together across disciplines to achieve common goals</p>
            </div>
            <div className="bg-black/50 p-6 rounded-lg border border-gray-700">
              <h3 className="text-lg font-semibold text-blue-400 mb-2">Excellence Driven</h3>
              <p className="text-gray-300 text-sm">Maintaining the highest standards in everything we do</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
