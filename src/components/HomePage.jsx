import React from 'react';
import { useState, useEffect } from 'react';
import gear from '../assets/gear.jpeg';
import AI2 from '../assets/AI2.jpeg';
import coll from '../assets/coll.jpg'

const HomePage = () => {
  // For hero slider functionality
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: coll,
      title: "Advancing Manufacturing Through Innovation",
      description: "Creating the future of intelligent production systems"
    },
    {
      image: gear,
      title: "Industry 4.0 Solutions",
      description: "Implementing smart technology for tomorrow's factories"
    },
    {
      image: AI2,
      title: "Artificial Intelligence",
      description: "Bridging academia and industry for practical innovations"
    }
  ];

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 2500);
    return () => clearInterval(interval);
  }, [slides.length]);

  // Stats data
  const stats = [
    { label: "Research Projects", value: "35+" },
    { label: "Industry Partners", value: "42" },
    { label: "Publications", value: "150+" },
    { label: "Patents Filed", value: "25" }
  ];

  // News and updates
  const news = [
    {
      date: "Feb 28, 2025",
      title: "Smart Manufacturing Lab Receives National Recognition",
      excerpt: "Our department's work on sustainable manufacturing processes has been recognized by the Ministry of Technology."
    },
    {
      date: "Feb 15, 2025",
      title: "Industry Collaboration with Leading Automotive Manufacturer",
      excerpt: "New partnership aims to develop AI-driven quality control systems for production lines."
    },
    {
      date: "Jan 30, 2025",
      title: "Research Paper Accepted at International Conference",
      excerpt: "Faculty team's research on digital twin technology will be presented at the Global Manufacturing Summit."
    }
  ];

  return (
    <div className="pt-16"> {/* Add padding to account for fixed navbar */}
      {/* Hero Slider Section */}
      <div className="relative w-full h-[500px] overflow-hidden">
        {slides.map((slide, index) => (
          <div 
            key={index}
            className={`absolute w-full h-full transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
            <img 
              src={slide.image} 
              alt={slide.title} 
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-white text-center px-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{slide.title}</h1>
              <p className="text-xl md:text-2xl max-w-3xl">{slide.description}</p>
              <button className="mt-8 px-6 py-3 bg-black hover:bg-gray-800 text-white rounded-md transition-colors duration-300 font-medium">
                Explore Programs
              </button>
            </div>
          </div>
        ))}
        
        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentSlide ? "bg-white" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Welcome Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Welcome to Smart Manufacturing</h2>
            <div className="w-24 h-1 bg-black mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-lg text-gray-700">
              The Department of Smart Manufacturing at PDPM IIITDM Jabalpur is committed to pioneering research 
              and education in modern manufacturing technologies. We focus on developing intelligent systems, 
              automation solutions, and digital transformation strategies for the manufacturing sector.
            </p>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-black mb-2">{stat.value}</div>
                <div className="text-gray-700">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Areas */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Our Focus Areas</h2>
          <div className="w-24 h-1 bg-black mx-auto mb-12"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="/api/placeholder/600/300" alt="Industry 4.0" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Industry 4.0 & IoT</h3>
                <p className="text-gray-700">
                  Implementing connected systems and data analytics to create intelligent manufacturing environments that optimize production processes.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="/api/placeholder/600/300" alt="Additive Manufacturing" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Additive Manufacturing</h3>
                <p className="text-gray-700">
                  Advancing 3D printing technologies for industrial applications, including research on materials, processes, and design optimization.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="/api/placeholder/600/300" alt="AI in Manufacturing" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">AI & Robotics</h3>
                <p className="text-gray-700">
                  Developing machine learning algorithms and robotic systems for autonomous quality control, predictive maintenance, and process optimization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News & Updates */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">Latest News & Updates</h2>
              <div className="w-24 h-1 bg-black mb-4"></div>
            </div>
            <a href="#" className="text-black hover:underline">View All News →</a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {news.map((item, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-300">
                <div className="text-sm text-gray-500 mb-2">{item.date}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-700 mb-4">{item.excerpt}</p>
                <a href="#" className="text-black hover:underline">Read more</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Partners */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Our Industry Partners</h2>
          <div className="w-24 h-1 bg-black mx-auto mb-12"></div>
          
          <div className="flex flex-wrap justify-center gap-8">
            {[1, 2, 3, 4, 5, 6,7,8].map((item) => (
              <div key={item} className="bg-white p-6 rounded-lg shadow-sm w-40 h-32 flex items-center justify-center">
                <div className="text-gray-400 font-semibold">Partner Logo</div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default HomePage;