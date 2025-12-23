import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const NewsEvents = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  React.useEffect(() => {
    scrollToTop();
  }, []);

  const newsItems = [
    {
      id: 1,
      title: "Vayuvya Defence Showcases Revolutionary Micro Jet Engine Technology",
      date: "December 2024",
      location: "Mysuru Big Tech Show",
      description: "Our team demonstrated India's first indigenous micro jet engine at the prestigious Mysuru Big Tech Show, attracting significant attention from industry experts and potential partners.",
      image: `${import.meta.env.BASE_URL}lovable-uploads/9e922077-ae7e-4703-aae7-13c51fb9d879.png`,
      category: "Exhibition"
    },
    {
      id: 2,
      title: "Technical Deep Dive: Advanced Propulsion Systems for Defence Applications",
      date: "December 2024",
      location: "Mysuru Big Tech Show",
      description: "Engaging discussions with industry professionals about our cutting-edge micro turbine engines and their applications in UAVs, loitering munitions, and tactical aerospace platforms.",
      image: `${import.meta.env.BASE_URL}lovable-uploads/f3a1f760-246b-49e6-bc89-1be9744dcafb.png`,
      category: "Technology"
    },
    {
      id: 3,
      title: "Innovation Spotlight: Gonagoor Tech Partnership展示",
      date: "December 2024",
      location: "Tech Exhibition",
      description: "Highlighting our collaboration with Gonagoor Tech in developing next-generation AI-powered aerospace solutions and showcasing our comprehensive technology portfolio.",
      image: `${import.meta.env.BASE_URL}lovable-uploads/5b01e4a1-3015-43f0-8159-082f39414c11.png`,
      category: "Partnership"
    },
    {
      id: 4,
      title: "Industry Recognition: Media Coverage of Our Breakthrough Technologies",
      date: "December 2024",
      location: "Mysuru Event",
      description: "Vayuvya Defence receives extensive media coverage for our innovative approach to indigenous defence technology development and our contribution to Atmanirbhar Bharat.",
      image: `${import.meta.env.BASE_URL}lovable-uploads/1af7ec95-8e51-4d54-8ad0-e73af0686cc1.png`,
      category: "Media"
    },
    {
      id: 5,
      title: "Vayuvya Defence's MicroJet Engine",
      date: "December 2025",
      location: "South Park Commons India",
      description: "Vayuvya Defence's MicroJet Engine delivers 4 kN thrust with dual combustion chambers and Jet A1 / Jet-4 fuel. Designed for drones & micro-UAVs, it can be assembled in under 2 mins.",
      image: `${import.meta.env.BASE_URL}lovable-uploads/Alpha.jpeg`,
      category: "Innovation",
      link: "https://x.com/alpha_defense/status/1999692285362208961"
    },
    {
      id: 7,
      title: "Vayuvya Defence Unveils TRJ-M1: India’s Indigenous Micro Turbojet Engine",
      date: "December 2025",
      location: "Bengaluru, India",
      description: "Bengaluru-based Vayuvya Defence developed India’s first indigenous micro turbojet for UAVs and experimental aerial vehicles, featuring modular design and rapid assembly.",
      image: `${import.meta.env.BASE_URL}lovable-uploads/image.png`,
      category: "Innovation",
      link: "https://x.com/i/status/2000046196724043903"
    },
    {
      id: 8,
      title: "India Accelerates Indigenous Defence Push with TRJ-M1 Engine and Meteor Missile Procurement",
      date: "December 2025",
      location: "Bangalore, India",
      description: "Bengaluru-based Vayuvya Defence has unveiled India’s first fully indigenous micro-turbojet engine, TRJ-M1, strengthening domestic aerospace propulsion capabilities. Simultaneously, the Indian Air Force is fast-tracking the acquisition of 1,200 Meteor beyond-visual-range missiles to enhance the combat effectiveness of its Tejas, Su-30MKI, and Rafale fleets, marking a decisive shift toward strategic self-reliance.",
      image: `${import.meta.env.BASE_URL}lovable-uploads/pri.jpeg`,
      category: "Defence & Aerospace",
      link: "https://youtu.be/M5AlTrXXnxU?si=_2S3Vdgz7iVAlIUy"
    },
    {
      id: 9,
      title: "India’s Silent Engine Breakthrough | Make in India Game Changer",
      date: "December 2025",
      location: "Bangalore, India",
      description: "India has unveiled a fully indigenous micro-turbofan engine that could redefine air warfare. Designed for drones, missiles, and swarm systems, this compact engine boosts speed, stealth, and affordability while ending dependence on foreign propulsion. A major step toward complete defence self-reliance.",
      image: `${import.meta.env.BASE_URL}lovable-uploads/india.jpeg`,
      category: "Defence Innovation",
      link: "https://youtu.be/LoJeG3qt9p8?si=uLBbZw7WOnTaoIOV"
    },
    {
      id: 10,
      title: "Vayuvya Defence MicroJet Engine – Key Specs",
      date: "December 2025",
      location: "Alpha Defence",
      description: "A compact, high-performance indigenous MicroJet engine designed for UAVs, loitering munitions, and target drones, offering quick assembly and reliable thrust for modern defense applications.",
      image: `${import.meta.env.BASE_URL}lovable-uploads/micro.jpeg`,
      category: "Aerospace Innovation",
      link: "https://x.com/i/status/1999692285362208961"
    },
    {
      id: 11,
      title: "Vayuvya Defence TRJ-M1 MicroJet Engine Showcased",
      date: "December 2025",
      location: "TheDCIndia",
      description: "Vayuvya Defence has unveiled the indigenous TRJ-M1 MicroJet Engine for UAVs, target drones, and loitering munitions, offering 4 kN thrust in a compact ~20 kg design with rapid field maintainability.",
      image: `${import.meta.env.BASE_URL}lovable-uploads/def.jpeg`,
      category: "Defense Technology",
      link: "https://x.com/TheDCIndia/status/1999888798772277420"
    },
    {
      id: 12,
      title: "India’s New Breakthrough – Micro Turbojet Engine & Major Defence Updates",
      date: "December 2025",
      location: "Bangalore, India",
      description: "This video covers India’s indigenous TRJ-M1 micro turbojet engine by Vayuvya Defence, S-400 modernization lessons from the Ukraine war, General Atomics’ Gambit-2 combat drone pitch to India, DRDO’s marine-grade AC compressor under TDF, and the Indian Army’s SAKSHAM counter-UAS expansion—highlighting India’s growing defence self-reliance.",
      image: `${import.meta.env.BASE_URL}lovable-uploads/iit.jpeg`,
      category: "Defense & Strategic Affairs",
      link: "https://youtu.be/RrEawwh9XOI?si=grZ0vDSx9svoXBq-"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Exhibition': return 'bg-gradient-to-r from-blue-500 to-blue-600';
      case 'Technology': return 'bg-gradient-to-r from-emerald-500 to-emerald-600';
      case 'Partnership': return 'bg-gradient-to-r from-purple-500 to-purple-600';
      case 'Media': return 'bg-gradient-to-r from-orange-500 to-orange-600';
      case 'Innovation': return 'bg-gradient-to-r from-red-500 to-red-600';
      case 'UAV': return 'bg-gradient-to-r from-teal-500 to-teal-600';
      default: return 'bg-gradient-to-r from-gray-500 to-gray-600';
    }
  };

  return (
    <div className="relative font-poppins">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl md:text-7xl font-[200] mb-8 bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
            News & <span className="text-blue-400">Events</span>
          </h1>
          <p className="font-[200] text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Stay updated with Vayuvya Defence's latest achievements, exhibitions, and breakthrough innovations
          </p>
        </div>
      </section>

      {/* Recent News */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-semibold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Latest Updates
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {newsItems.map((item) => (
              <Card key={item.id} className="group bg-black/40 backdrop-blur-sm border-gray-700/50 hover:border-blue-400/50 transition-all duration-500 overflow-hidden rounded-2xl shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2">
                <div className="relative h-72 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    onError={(e) => {
                      const img = e.currentTarget as HTMLImageElement;
                      img.src = `${import.meta.env.BASE_URL}lovable-uploads/lite.png`;
                      img.style.opacity = "0.35";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute top-6 left-6">
                    <span className={`px-4 py-2 rounded-full text-sm font-semibold text-white ${getCategoryColor(item.category)} shadow-lg backdrop-blur-sm`}>
                      {item.category}
                    </span>
                  </div>
                  <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <ExternalLink className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
                
                <CardHeader className="p-8">
                  <div className="flex items-center text-sm text-blue-300/80 mb-4 space-x-6">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="font-normal">{item.date}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span className="font-normal">{item.location}</span>
                    </div>
                  </div>
                  <CardTitle className="text-white text-2xl font-semibold leading-tight mb-4 group-hover:text-blue-300 transition-colors duration-300">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="px-8 pb-8">
                  <p className="text-gray-300 leading-relaxed text-lg font-normal">
                    {item.description}
                  </p>
                  <div className="mt-6">
                    {item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 font-semibold hover:text-blue-300 transition-colors duration-200 flex items-center group/btn"
                      >
                        Read More 
                        <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-200" />
                      </a>
                    ) : (
                      <button className="text-blue-400 font-semibold hover:text-blue-300 transition-colors duration-200 flex items-center group/btn">
                        Read More 
                        <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-200" />
                      </button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Media Gallery and Call to Action remain unchanged */}
    </div>
  );
};

export default NewsEvents;
