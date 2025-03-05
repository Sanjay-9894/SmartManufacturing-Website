import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Target, Lightbulb, ChartBar, Users, Building, Cpu } from 'lucide-react';

const About = () => {
  const researchAreas = [
    "Advanced Manufacturing Technologies",
    "Industry 4.0 & Smart Factory",
    "Robotics & Automation",
    "Digital Twin & Simulation",
    "AI in Manufacturing",
    "IoT & Industrial Networks"
  ];

  const achievements = [
    {
      number: "2018",
      label: "Established",
      icon: <Building className="w-6 h-6" />
    },
    {
      number: "15+",
      label: "Faculty Members",
      icon: <Users className="w-6 h-6" />
    },
    {
      number: "20+",
      label: "Industry Partners",
      icon: <ChartBar className="w-6 h-6" />
    },
    {
      number: "5+",
      label: "Research Labs",
      icon: <Cpu className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#1E2F23] via-[#2D3E33] to-[#1E2F23] text-gray-200 py-24 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]"></div>
          <div className="max-w-6xl mx-auto relative z-10">
            <h1 className="text-5xl md:text-6xl font-bold text-center mb-8 tracking-tight">
              Smart Manufacturing Engineering
            </h1>
            <p className="text-xl text-center text-gray-300 max-w-3xl mx-auto">
              Established in 2018, pioneering the future of intelligent manufacturing through innovation, research, and industry collaboration.
            </p>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <h2 className="text-3xl font-bold mb-6 text-gray-800">About Us</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  The Smart Manufacturing Engineering discipline was established in 2018 at PDPM IIITDM Jabalpur. We offer comprehensive programs at undergraduate (B.Tech), postgraduate (M.Tech), and research (PhD) levels. Our department is committed to advancing the field of smart manufacturing through cutting-edge research, industry collaboration, and innovative teaching methodologies.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We focus on key areas including Advanced Manufacturing Technologies, Industry 4.0, Robotics & Automation, Digital Twin & Simulation, AI in Manufacturing, and Industrial IoT.
                </p>
              </div>

              <div className="space-y-8">
                <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                  <div className="flex items-center mb-4">
                    <Target className="w-6 h-6 text-blue-600 mr-3" />
                    <h2 className="text-2xl font-bold text-gray-800">Mission</h2>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    To provide world-class education in smart manufacturing engineering, fostering innovation and research that addresses industrial challenges while preparing students for leadership roles in the era of Industry 4.0.
                  </p>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                  <div className="flex items-center mb-4">
                    <Lightbulb className="w-6 h-6 text-blue-600 mr-3" />
                    <h2 className="text-2xl font-bold text-gray-800">Vision</h2>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    To be recognized as a center of excellence in smart manufacturing education and research, driving technological innovation and industrial transformation through our commitment to quality, innovation, and industry collaboration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mx-auto mb-4 text-blue-600">
                    {achievement.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-800 mb-2">{achievement.number}</div>
                  <div className="text-gray-500">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Research Areas */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Research Areas</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {researchAreas.map((area, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <h3 className="text-lg font-semibold text-gray-800">{area}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

     
    </div>
  );
};

export default About;
