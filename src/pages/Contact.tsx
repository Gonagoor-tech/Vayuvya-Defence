import React, { useState } from 'react';
import { Button } from "@/components/ui/button";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    scrollToTop();
    alert('Thank you for your message. We will get back to you soon!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="relative font-poppins">

      {/* Hero Section - fully visible background on mobile */}
      <section className="relative w-full flex items-center justify-center text-center overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 w-full h-full bg-contain md:bg-cover"
          style={{
            backgroundImage: `url('${import.meta.env.BASE_URL}lovable-uploads/R.png')`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            minHeight: '400px', // minimum height for mobile
            filter: 'brightness(0.6)',
          }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
          <h1 className="text-4xl md:text-5xl font-[200] mb-4">
            Contact <span className="text-blue-400">Vayuvya Defence</span>
          </h1>
          <p className="font-[200] text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Let's build together. Whether you're an OEM, defence stakeholder, investor, or technologist — we'd love to connect.
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
              <div className="space-y-6">
                <div className="bg-black/50 p-6 rounded-lg border border-gray-700">
                  <h3 className="text-xl font-semibold mb-4 text-blue-400">Registered Address</h3>
                  <div className="text-gray-300">
                    <p className="font-semibold">Vayuvya Raksha Systems Pvt. Ltd.</p>
                    <p>Bangalore</p>
                    <p>India</p>
                  </div>
                </div>
                
                <div className="bg-black/50 p-6 rounded-lg border border-gray-700">
                  <h3 className="text-xl font-semibold mb-4 text-blue-400">Contact Details</h3>
                  <div className="space-y-3 text-gray-300">
                    <div className="flex items-center space-x-3">
                      <span className="text-blue-400">📧</span>
                      <span>info@vayuvya.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-blue-400">📞</span>
                      <span>+91-7019561885</span>
                    </div>
                  </div>
                </div>

                <div className="bg-black/50 p-6 rounded-lg border border-gray-700">
                  <h3 className="text-xl font-semibold mb-4 text-blue-400">Business Hours</h3>
                  <div className="text-gray-300">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM IST</p>
                    <p>Saturday: 9:00 AM - 1:00 PM IST</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
                    placeholder="your.email@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
                    placeholder="Subject of your inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors resize-vertical"
                    placeholder="Tell us about your project, requirements, or any questions you have..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Send Message
                </Button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Partnership CTA */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">Partnership Opportunities</h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-12">
            We're always interested in collaborating with organizations that share our vision 
            of advancing India's aerospace capabilities. Let's explore how we can work together.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-900/20 to-gray-900/20 p-6 rounded-lg border border-gray-700 hover:border-blue-400 transition-all duration-300">
              <h3 className="text-lg font-semibold text-blue-400 mb-2">OEM Partners</h3>
              <p className="text-gray-300 text-sm">Integration of our engines into your platforms</p>
            </div>
            <div className="bg-gradient-to-br from-blue-900/20 to-gray-900/20 p-6 rounded-lg border border-gray-700 hover:border-blue-400 transition-all duration-300">
              <h3 className="text-lg font-semibold text-blue-400 mb-2">Research Institutions</h3>
              <p className="text-gray-300 text-sm">Collaborative R&D and technology development</p>
            </div>
            <div className="bg-gradient-to-br from-blue-900/20 to-gray-900/20 p-6 rounded-lg border border-gray-700 hover:border-blue-400 transition-all duration-300">
              <h3 className="text-lg font-semibold text-blue-400 mb-2">Investors</h3>
              <p className="text-gray-300 text-sm">Join us in building the future of defence tech</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;
