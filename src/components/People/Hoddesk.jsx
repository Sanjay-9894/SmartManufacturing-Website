import React from 'react';
import hodImage from "../../assets/hod-image.jpg";

const HodDesk = () => {
  const researchAreas = [
    {
      title: "Industrial IoT",
      description: "Smart factory systems with real-time monitoring and autonomous control."
    },
    {
      title: "Digital Twins",
      description: "Virtual system replicas for simulation, testing and predictive maintenance."
    },
    {
      title: "AI Manufacturing",
      description: "Machine learning applications for quality control and process optimization."
    }
  ];

  return (
    <div className="pt-24 pb-16 bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            From HOD's Desk
          </h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Main Content Card */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
          {/* Profile Section */}
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 bg-gray-50 p-8">
              <div className="text-center">
                <img
                  src={hodImage}
                  alt="Dr. K Ponappa"
                  className="w-48 h-48 rounded-full mx-auto shadow-lg object-cover mb-6"
                />
                <h2 className="text-2xl font-bold text-gray-900">Dr. K Ponappa</h2>
                <p className="text-gray-600 mt-2">Head of Department</p>
                <p className="text-blue-600 font-medium mt-1">Smart Manufacturing</p>
                
                <div className="mt-6 space-y-2 text-sm text-gray-600">
                  <p>Ph.D. in Manufacturing Engineering</p>
                  <p>20+ Years of Academic Excellence</p>
                  <p>k.ponappa@university.edu</p>
                </div>
              </div>
            </div>

            {/* Message Section */}
            <div className="md:w-2/3 p-8">
              <blockquote className="text-xl font-medium text-gray-700 italic mb-6 border-l-4 border-blue-600 pl-4">
                "Pioneering the future of manufacturing through innovation and excellence in education."
              </blockquote>

              <div className="space-y-4 text-gray-600">
                <p>
                  Welcome to the Department of Smart Manufacturing. As we navigate through the fourth industrial revolution, 
                  our department stands at the forefront of technological innovation and educational excellence.
                </p>

                <p>
                  Our mission is to cultivate future leaders in smart manufacturing by providing comprehensive education 
                  that combines theoretical knowledge with practical expertise. We emphasize hands-on experience with 
                  cutting-edge technologies and maintain strong industry connections.
                </p>

                <p>
                  The department offers programs at B.Tech, M.Tech, and Ph.D. levels, each designed to develop expertise 
                  in emerging manufacturing technologies while maintaining a strong foundation in core engineering principles.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Research Areas */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Research Focus Areas</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {researchAreas.map((area, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{area.title}</h3>
                <p className="text-gray-600">{area.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Signature */}
        <div className="text-center">
          <div className="inline-block border-t border-gray-200 pt-6">
            <p className="font-bold text-gray-900">Dr. K Ponappa</p>
            <p className="text-gray-600">Head, Department of Smart Manufacturing</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HodDesk;
