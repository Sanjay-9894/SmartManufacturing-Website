import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gear from '../assets/gear.jpeg';
import AI2 from '../assets/AI2.jpeg';
import coll from '../assets/coll.jpg';

import autodeskLogo from '../assets/autodesk logo.png';
import honeywellLogo from '../assets/honey well logo.png';
import samsungLogo from '../assets/samasung logo.png';
import siemensLogo from '../assets/Siemens-logo.png';
import solidworksLogo from '../assets/solidworks logo.png';
import abbLogo from '../assets/abb logo.png';

const HomePage = () => {
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const stats = [
    { label: "Research Projects", value: "35+" },
    { label: "Industry Partners", value: "42" },
    { label: "Publications", value: "150+" },
    { label: "Patents Filed", value: "25" }
  ];

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

  const focusAreas = [
    {
      title: "Industry 4.0 & IoT",
      desc: "Implementing connected systems and data analytics to create intelligent manufacturing environments that optimize production processes.",
      img: "https://images.unsplash.com/photo-1717386255773-1e3037c81788?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SW5kdXN0cnklMjA0LjB8ZW58MHx8MHx8fDA%3D"
    },
    {
      title: "Additive Manufacturing",
      desc: "Advancing 3D printing technologies for industrial applications, including research on materials, processes, and design optimization.",
      img: "https://plus.unsplash.com/premium_photo-1715786199807-ed84dc311939?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWRkaXRpdmUlMjBtYW51ZmFjdHVyaW5nfGVufDB8fDB8fHww"
    },
    {
      title: "AI & Robotics",
      desc: "Developing machine learning algorithms and robotic systems for autonomous quality control, predictive maintenance, and process optimization.",
      img: "https://images.unsplash.com/photo-1518314916381-77a37c2a49ae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9ib3RpY3N8ZW58MHx8MHx8fDA%3D"
    }
  ];

  const slideVariants = {
    enter: { opacity: 0, scale: 1.05 },
    center: { opacity: 1, scale: 1, transition: { duration: 1, ease: 'easeInOut' } },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.6, ease: 'easeInOut' } }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
  };

  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2, delayChildren: 0.3 } }
  };

  const itemFade = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  return (
    <div className="pt-16">
      {/* Hero Slider */}
      <div className="relative w-full h-[500px] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className="absolute w-full h-full"
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white text-center px-4">
              <motion.h1
                className="text-4xl md:text-5xl font-bold mb-4"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                {slides[currentSlide].title}
              </motion.h1>
              <motion.p
                className="text-xl md:text-2xl max-w-3xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {slides[currentSlide].description}
              </motion.p>
              <motion.button
                className="mt-8 px-6 py-3 bg-black text-white rounded-md font-medium"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                
              </motion.button>
            </div>
          </motion.div>
        </AnimatePresence>
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === currentSlide ? 'bg-white' : 'bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Welcome & Stats */}
      <motion.section
        className="py-16 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Welcome to Smart Manufacturing</h2>
          <div className="w-24 h-1 bg-black mx-auto mb-6" />
          <p className="max-w-3xl mx-auto text-lg text-gray-700">
            The Department of Smart Manufacturing at PDPM IIITDM Jabalpur is committed to pioneering research
            and education in modern manufacturing technologies. We focus on developing intelligent systems,
            automation solutions, and digital transformation strategies for the manufacturing sector.
          </p>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((s, idx) => (
              <motion.div
                key={idx}
                className="text-center p-6 bg-gray-50 rounded-lg shadow"
                variants={itemFade}
              >
                <div className="text-3xl font-bold text-black mb-2">{s.value}</div>
                <div className="text-gray-700">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Featured Areas */}
      <motion.section
        className="py-16 bg-gray-100"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Our Focus Areas</h2>
          <div className="w-24 h-1 bg-black mx-auto mb-12" />

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={stagger}
          >
            {focusAreas.map((fa, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-lg shadow-md overflow-hidden"
                variants={itemFade}
              >
                <img src={fa.img} alt={fa.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{fa.title}</h3>
                  <p className="text-gray-700">{fa.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* News & Updates */}
      <motion.section
        className="py-16 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">Latest News & Updates</h2>
              <div className="w-24 h-1 bg-black" />
            </div>
            <a href="#" className="text-black hover:underline">View All News →</a>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={stagger}
          >
            {news.map((n, i) => (
              <motion.div
                key={i}
                className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-300"
                variants={itemFade}
                whileHover={{ y: -5 }}
              >
                <div className="text-sm text-gray-500 mb-2">{n.date}</div>
                <h3 className="text-xl font-bold mb-3">{n.title}</h3>
                <p className="text-gray-700 mb-4">{n.excerpt}</p>
                <a href="#" className="text-black hover:underline">Read more</a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Industry Partners */}
      <motion.section
        className="py-16 bg-gray-100"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Our Industry Partners</h2>
          <div className="w-24 h-1 bg-black mx-auto mb-12" />

          <motion.div
            className="flex flex-wrap justify-center gap-8"
            variants={stagger}
          >
            {[autodeskLogo, honeywellLogo, samsungLogo, siemensLogo, solidworksLogo, abbLogo].map((logo, idx) => (
              <motion.div
                key={idx}
                className="bg-white p-6 rounded-lg shadow-sm w-40 h-32 flex items-center justify-center"
                variants={scaleIn}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1),0 4px 6px -2px rgba(0,0,0,0.05)'
                }}
              >
                <img src={logo} alt={`Partner logo ${idx + 1}`} className="max-h-full max-w-full object-contain" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default HomePage;
