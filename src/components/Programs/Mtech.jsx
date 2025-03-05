import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { Check, GraduationCap, BookOpen, Building, Users } from 'lucide-react';

const MTech = () => {
  const semesterCourses = [
    {
      semester: "First Semester",
      courses: [
        { id: "CS5001", name: "Advanced Algorithms (3L+ 1T)", credits: 4 },
        { id: "CS5002", name: "Machine Learning (3L + 1T)", credits: 4 },
        { id: "CS5003", name: "Advanced Database Systems (3L)", credits: 3 },
        { id: "CS5004", name: "Research Methodology (2L + 1T)", credits: 3 },
        { id: "OE5001", name: "Open Elective I (3L)", credits: 3 },
      ]
    },
    {
      semester: "Second Semester",
      courses: [
        { id: "CS5005", name: "Advanced Computer Architecture (3L + 1T)", credits: 4 },
        { id: "CS5006", name: "Distributed Systems (3L + 1T)", credits: 4 },
        { id: "DE5001", name: "Department Elective I (3L)", credits: 3 },
        { id: "DE5002", name: "Department Elective II (3L)", credits: 3 },
        { id: "OE5002", name: "Open Elective II (3L)", credits: 3 },
      ]
    },
    {
      semester: "Third Semester",
      courses: [
        { id: "CS6001", name: "Thesis Part I", credits: 12 },
        { id: "DE6001", name: "Department Elective III (3L)", credits: 3 },
      ]
    },
    {
      semester: "Fourth Semester",
      courses: [
        { id: "CS6002", name: "Thesis Part II", credits: 16 },
      ]
    }
  ];

  const highlights = [
    "Research-focused curriculum",
    "Industry collaboration",
    "Advanced laboratories",
    "Expert supervision",
    "Publication opportunities",
    "Global networking"
  ];

  const admissionInfo = [
    {
      title: "GATE Admission",
      content: "Primary admission through valid GATE score in relevant disciplines. Selection based on GATE score, academic performance, and interview.",
      icon: <GraduationCap className="w-6 h-6" />,
      bullets: [
        "Valid GATE score mandatory",
        "Merit-based selection",
        "Interview process",
        "Academic record evaluation"
      ]
    },
    {
      title: "Eligibility Criteria",
      content: "B.Tech/BE degree in relevant discipline with minimum 60% marks or 6.5 CGPA on a 10-point scale.",
      icon: <BookOpen className="w-6 h-6" />,
      bullets: [
        "Bachelor's degree in relevant field",
        "Minimum 60% marks or 6.5 CGPA",
        "Valid GATE score",
        "No active backlogs"
      ]
    },
    {
      title: "Sponsored Candidates",
      content: "Special quota for industry-sponsored candidates with minimum 2 years of work experience.",
      icon: <Building className="w-6 h-6" />,
      bullets: [
        "Minimum 2 years experience",
        "Company sponsorship letter",
        "NOC from employer",
        "Interview performance"
      ]
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
              M.Tech in Smart Manufacturing Engineering
            </h1>
            <div className="grid md:grid-cols-2 gap-12 mt-16">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 hover:bg-white/20 transition-all duration-300">
                <h2 className="text-2xl font-semibold mb-4">Program Overview</h2>
                <p className="text-gray-200 leading-relaxed">
                  A comprehensive two-year postgraduate program designed for advanced research and specialization. The curriculum combines advanced theoretical knowledge with practical research experience.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 hover:bg-white/20 transition-all duration-300">
                <h2 className="text-2xl font-semibold mb-4">Program Highlights</h2>
                <div className="grid grid-cols-2 gap-4">
                  {highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                      <span className="text-gray-200">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Course Structure */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
              Course Structure
            </h2>

            {semesterCourses.map((semester, index) => (
              <div key={index} className="mb-16">
                <div className="flex items-center mb-8 group">
                  <div className="flex items-center">
                    <div className="relative">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg 
                                    flex items-center justify-center shadow-lg 
                                    group-hover:scale-105 transition-all duration-300">
                        <span className="text-2xl font-bold text-white">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-400 rounded-full opacity-50"></div>
                        <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-blue-300 rounded-full opacity-50"></div>
                      </div>
                    </div>
                    <div className="h-0.5 w-8 bg-gradient-to-r from-blue-500 to-transparent mx-4"></div>
                  </div>

                  <div className="flex flex-col">
                    <h3 className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 
                                transition-colors duration-300">
                      {semester.semester}
                    </h3>
                    <p className="text-sm font-medium text-blue-500 tracking-wider">COURSES</p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Course ID</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Course Name</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Credits</th>
                      </tr>
                    </thead>
                    <tbody>
                      {semester.courses.map((course, i) => (
                        <tr key={i} className="border-t hover:bg-gray-50 transition-colors duration-200">
                          <td className="px-6 py-4 text-blue-600 font-medium">{course.id}</td>
                          <td className="px-6 py-4 text-gray-700">{course.name}</td>
                          <td className="px-6 py-4 text-gray-600">{course.credits}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Admission Information */}
        <section className="bg-white py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
              Admission Information
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {admissionInfo.map((info, index) => (
                <div key={index} 
                     className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 text-blue-600">
                    {info.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-800">{info.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{info.content}</p>
                  <ul className="space-y-3">
                    {info.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-center text-gray-600">
                        <Check size={16} className="text-green-500 mr-2 flex-shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MTech;
