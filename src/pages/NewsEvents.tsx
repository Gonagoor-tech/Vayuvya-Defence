
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
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Exhibition': return 'bg-gradient-to-r from-blue-500 to-blue-600';
      case 'Technology': return 'bg-gradient-to-r from-emerald-500 to-emerald-600';
      case 'Partnership': return 'bg-gradient-to-r from-purple-500 to-purple-600';
      case 'Media': return 'bg-gradient-to-r from-orange-500 to-orange-600';
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
                    <button className="text-blue-400 font-semibold hover:text-blue-300 transition-colors duration-200 flex items-center group/btn">
                      Read More 
                      <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-200" />
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Media Gallery */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-semibold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Event Gallery
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              `${import.meta.env.BASE_URL}lovable-uploads/9e922077-ae7e-4703-aae7-13c51fb9d879.png`,
              `${import.meta.env.BASE_URL}lovable-uploads/f3a1f760-246b-49e6-bc89-1be9744dcafb.png`,
              `${import.meta.env.BASE_URL}lovable-uploads/5b01e4a1-3015-43f0-8159-082f39414c11.png`,
              `${import.meta.env.BASE_URL}lovable-uploads/adfd63e7-92d6-4276-b7e1-b1968ece4207.png`,
              `${import.meta.env.BASE_URL}lovable-uploads/elevate.jpg`,
              `${import.meta.env.BASE_URL}lovable-uploads/productBts.jpg`,
              `${import.meta.env.BASE_URL}lovable-uploads/inspace.jpg`
            ].map((image, index) => (
              <div key={index} className="relative overflow-hidden rounded-2xl aspect-square group cursor-pointer shadow-2xl">
                <img 
                  src={image} 
                  alt={`Event ${index + 1}`}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  onError={(e) => {
                    const img = e.currentTarget as HTMLImageElement;
                    img.src = `${import.meta.env.BASE_URL}lovable-uploads/lite.png`;
                    img.style.opacity = "0.35";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-100 scale-95">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mb-4 mx-auto">
                      <ExternalLink className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-white font-semibold text-lg">View Details</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-semibold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Stay Connected
          </h2>
          <p className="font-normal text-xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
            Don't miss our latest updates and breakthrough innovations. Follow us for real-time news and insights into the future of defence technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-xl hover:shadow-blue-500/25 hover:-translate-y-1">
              <span className="flex items-center justify-center">
                Subscribe to Newsletter
                <ExternalLink className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </span>
            </button>
            <button className="group border-2 border-gray-600 hover:border-blue-400 text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-blue-400/10 hover:-translate-y-1">
              <span className="flex items-center justify-center">
                Contact Media Team
                <ExternalLink className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsEvents;
