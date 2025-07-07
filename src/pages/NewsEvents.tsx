
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin, Users, Trophy } from 'lucide-react';

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
      image: "/lovable-uploads/9e922077-ae7e-4703-aae7-13c51fb9d879.png",
      category: "Exhibition"
    },
    {
      id: 2,
      title: "Technical Deep Dive: Advanced Propulsion Systems for Defence Applications",
      date: "December 2024",
      location: "Mysuru Big Tech Show",
      description: "Engaging discussions with industry professionals about our cutting-edge micro turbine engines and their applications in UAVs, loitering munitions, and tactical aerospace platforms.",
      image: "/lovable-uploads/f3a1f760-246b-49e6-bc89-1be9744dcafb.png",
      category: "Technology"
    },
    {
      id: 3,
      title: "Innovation Spotlight: Gonagoor Tech Partnership展示",
      date: "December 2024",
      location: "Tech Exhibition",
      description: "Highlighting our collaboration with Gonagoor Tech in developing next-generation AI-powered aerospace solutions and showcasing our comprehensive technology portfolio.",
      image: "/lovable-uploads/5b01e4a1-3015-43f0-8159-082f39414c11.png",
      category: "Partnership"
    },
    {
      id: 4,
      title: "Industry Recognition: Media Coverage of Our Breakthrough Technologies",
      date: "December 2024",
      location: "Mysuru Event",
      description: "Vayuvya Defence receives extensive media coverage for our innovative approach to indigenous defence technology development and our contribution to Atmanirbhar Bharat.",
      image: "/lovable-uploads/1af7ec95-8e51-4d54-8ad0-e73af0686cc1.png",
      category: "Media"
    }
  ];

  const upcomingEvents = [
    {
      title: "Defence Technology Summit 2025",
      date: "February 15-17, 2025",
      location: "Bangalore, India",
      description: "Join us at India's premier defence technology conference where we'll be presenting our latest innovations."
    },
    {
      title: "Aerospace Innovation Expo",
      date: "March 10-12, 2025",
      location: "Hyderabad, India",
      description: "Showcasing next-generation propulsion systems and AI-driven aerospace solutions."
    },
    {
      title: "Startup India Defence Conclave",
      date: "April 5-7, 2025",
      location: "New Delhi, India",
      description: "Participating in discussions about indigenous defence technology development."
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Exhibition': return 'bg-blue-500';
      case 'Technology': return 'bg-green-500';
      case 'Partnership': return 'bg-purple-500';
      case 'Media': return 'bg-orange-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            News & <span className="text-blue-400">Events</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay updated with Vayuvya Defence's latest achievements, exhibitions, and upcoming events
          </p>
        </div>
      </section>

      {/* Recent News */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Recent News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {newsItems.map((item) => (
              <Card key={item.id} className="bg-black/50 border-gray-700 hover:border-blue-400 transition-all duration-300 overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${getCategoryColor(item.category)}`}>
                      {item.category}
                    </span>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center text-sm text-gray-400 mb-2">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="mr-4">{item.date}</span>
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{item.location}</span>
                  </div>
                  <CardTitle className="text-white text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="bg-gray-900/50 border-gray-700 hover:border-blue-400 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full mb-4 mx-auto">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-white text-xl text-center">{event.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="flex items-center justify-center text-blue-400 mb-2">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="font-semibold">{event.date}</span>
                  </div>
                  <div className="flex items-center justify-center text-gray-400 mb-4">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{event.location}</span>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{event.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Media Gallery */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Event Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "/lovable-uploads/9e922077-ae7e-4703-aae7-13c51fb9d879.png",
              "/lovable-uploads/f3a1f760-246b-49e6-bc89-1be9744dcafb.png",
              "/lovable-uploads/5b01e4a1-3015-43f0-8159-082f39414c11.png",
              "/lovable-uploads/adfd63e7-92d6-4276-b7e1-b1968ece4207.png"
            ].map((image, index) => (
              <div key={index} className="relative overflow-hidden rounded-lg aspect-square group">
                <img 
                  src={image} 
                  alt={`Event ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold">View Details</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Stay Connected</h2>
          <p className="text-xl text-gray-300 mb-8">
            Don't miss our latest updates and upcoming events. Follow us for real-time news and insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              Subscribe to Newsletter
            </button>
            <button className="border border-gray-600 hover:border-blue-400 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              Contact Media Team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsEvents;
