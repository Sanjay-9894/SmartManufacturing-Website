import { Building2, BriefcaseIcon, Users, GraduationCap, Mail, Phone, MapPin, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Figure1 from "../assets/Figure_1.png";
import Figure2 from "../assets/Figure_2.png";

const Index = () => {
  const stats = [
    {
      icon: BriefcaseIcon,
      value: "47",
      label: "Total Students",
    },
    {
      icon: Building2,
      value: "35",
      label: "Placed Students",
    },
    {
      icon: Users,
      value: "74.5%",
      label: "Placement Rate",
    },
    {
      icon: GraduationCap,
      value: "12 LPA",
      label: "Average Package",
    },
  ];

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50">
      {/* Hero Section */}
      <motion.section 
        className="bg-white py-20 px-4 shadow-sm"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h1 
            className="text-5xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-700"
            variants={fadeInUp}
          >
            Smart Manufacturing Placements
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 text-center max-w-3xl mx-auto leading-relaxed"
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
          >
            Our program boasts an excellent placement record with leading companies in both core manufacturing and IT sectors. Our students are trained to bridge the gap between traditional manufacturing and digital transformation.
          </motion.p>
        </div>
      </motion.section>

      {/* Quick Stats */}
      <motion.section 
        className="py-16 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerChildren}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-white rounded-lg border-none shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden p-6">
                <div className="flex flex-col items-center">
                  <div className="bg-blue-100 p-4 rounded-full mb-4">
                    <stat.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <motion.h3 
                    className="text-4xl font-bold text-gray-800"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  >
                    {stat.value}
                  </motion.h3>
                  <p className="text-gray-600 font-medium mt-2">{stat.label}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Statistics Section */}
      <motion.section 
        className="bg-white py-20 px-4 shadow-sm"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerChildren}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-center mb-4"
            variants={fadeInUp}
          >
            Placement Statistics
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-blue-600 mx-auto mb-12 rounded-full"
            variants={fadeInUp}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div variants={fadeInUp} transition={{ delay: 0.2 }}>
              <div className="bg-white rounded-lg border-none shadow-lg hover:shadow-xl transition-all duration-300 h-full overflow-hidden">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 border-b border-gray-100">
                  <h3 className="text-2xl font-bold text-gray-800">Company Distribution</h3>
                  <p className="text-gray-600 mt-1">Core vs IT Companies</p>
                </div>
                <div className="p-6">
                  <motion.img 
                    src={Figure2} 
                    alt="Core vs IT Companies Distribution"
                    className="w-full h-auto rounded-lg"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} transition={{ delay: 0.3 }}>
              <div className="bg-white rounded-lg border-none shadow-lg hover:shadow-xl transition-all duration-300 h-full overflow-hidden">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 border-b border-gray-100">
                  <h3 className="text-2xl font-bold text-gray-800">Placement Status</h3>
                  <p className="text-gray-600 mt-1">Students Placed vs Unplaced</p>
                </div>
                <div className="p-6">
                  <motion.img 
                    src={Figure1} 
                    alt="Placement Status Distribution"
                    className="w-full h-auto rounded-lg"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Companies Section */}
      <motion.section 
        className="py-20 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerChildren}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-center mb-4"
            variants={fadeInUp}
          >
            Past Recruiters
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-blue-600 mx-auto mb-12 rounded-full"
            variants={fadeInUp}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div variants={fadeInUp} transition={{ delay: 0.2 }}>
              <div className="bg-gradient-to-br from-white to-blue-50 rounded-lg border-none shadow-lg hover:shadow-xl transition-all duration-300 h-full overflow-hidden">
                <div className="border-b border-blue-100 p-6">
                  <h3 className="text-2xl font-bold text-blue-800 flex items-center">
                    <Building2 className="h-6 w-6 mr-2" />
                    Core Companies
                  </h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {["IIT Kanpur", "Samsung", "DRDO", "Sutra.ai", "STEMpedia"].map((company, index) => (
                      <motion.li 
                        key={company}
                        className="flex items-center p-3 bg-white rounded-lg shadow-sm hover:shadow transition-all"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * index }}
                        whileHover={{ x: 5 }}
                      >
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                        <span className="font-medium text-gray-700">{company}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} transition={{ delay: 0.3 }}>
              <div className="bg-gradient-to-br from-white to-indigo-50 rounded-lg border-none shadow-lg hover:shadow-xl transition-all duration-300 h-full overflow-hidden">
                <div className="border-b border-indigo-100 p-6">
                  <h3 className="text-2xl font-bold text-indigo-800 flex items-center">
                    <BriefcaseIcon className="h-6 w-6 mr-2" />
                    IT and Startup Companies
                  </h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {["Turing", "Metropolitan", "Meesho", "Opsight", "Morphle Labs", "Agoda", "Startup"].map((company, index) => (
                      <motion.li 
                        key={company}
                        className="flex items-center p-3 bg-white rounded-lg shadow-sm hover:shadow transition-all"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * index }}
                        whileHover={{ x: 5 }}
                      >
                        <div className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></div>
                        <span className="font-medium text-gray-700">{company}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        className="bg-white py-20 px-4 shadow-sm"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2 
            className="text-3xl font-bold mb-4"
            variants={fadeInUp}
          >
            Contact Placement Cell
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-blue-600 mx-auto mb-8 rounded-full"
            variants={fadeInUp}
          />
          <motion.p 
            className="text-xl text-gray-600 mb-12"
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
          >
            For any placement related queries, please contact our placement office.
          </motion.p>
          <motion.div 
            className="space-y-6 bg-blue-50 p-8 rounded-2xl shadow-md"
            variants={fadeInUp}
            transition={{ delay: 0.3 }}
            whileHover={{ y: -5 }}
          >
            <p className="flex items-center justify-center gap-2 text-lg">
              <span className="bg-blue-100 p-2 rounded-full">
                <Mail className="h-6 w-6 text-blue-600" />
              </span>
              <strong>Email:</strong> placements@smartmanufacturing.edu
            </p>
            <p className="flex items-center justify-center gap-2 text-lg">
              <span className="bg-blue-100 p-2 rounded-full">
                <Phone className="h-6 w-6 text-blue-600" />
              </span>
              <strong>Phone:</strong> +91-XXX-XXX-XXXX
            </p>
            <p className="flex items-center justify-center gap-2 text-lg">
              <span className="bg-blue-100 p-2 rounded-full">
                <MapPin className="h-6 w-6 text-blue-600" />
              </span>
              <strong>Location:</strong> Smart Manufacturing Department, Main Building
            </p>
          </motion.div>
          <motion.button
            className="mt-12 px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center mx-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            variants={fadeInUp}
            transition={{ delay: 0.4 }}
          >
            Request Information
            <ChevronRight className="ml-2 h-5 w-5" />
          </motion.button>
        </div>
      </motion.section>
      
      {/* Footer */}
     
    </div>
  );
};

export default Index;