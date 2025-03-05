import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';

const BTech = () => {
  const semesterCourses = [
    {
      semester: "First Semester",
      courses: [
        { id: "NS1001", name: "Mathematics-I (3L+ 2T)", credits: 4 },
        { id: "NS1002", name: "Physics-I (3L + 1T + 2P)", credits: 4 },
        { id: "HS1001", name: "Effective Communication Skills (2L)", credits: 2 },
        { id: "IT1001", name: "Introduction to Programming inPython (2L + 3P)", credits: 3 },
        { id: "SM1001", name: "Introduction to Profession (1L)", credits: 1 },
        { id: "PR1001", name: "Innovation Theory and Practice (1L + 2P) (Year Long Courses)", credits: 2 },
        { id: "PC1001", name: "Professional Development Course (1L) (Year Long Courses)", credits: 1 },
      ]
    },
    {
      semester: "Second Semester",
      courses: [
        
        { id: "NS103b", name: "MAthematics-II (3L + 2 T)", credits: 4 },
        { id: "NS1004", name: "Physics-II (3L + 1T + 2P)", credits: 4 },
        { id: "PC1002", name: "Professional Development Course (Year Long Course)", credits: 1 },
        { id: "HC1002", name: "Indian Culture, Ethics and Human Values (2L+2T)", credits: 3 },
        { id: "ES1003", name: "Basic Electronics (3L + 2P)", credits: 4 },
        { id: "ES1004", name: "Engineering Graphics (2L + 3P)", credits: 3 },
        { id: "PR1001", name: "Innovation Theory and Practice (1L + 2P) (Year Long Courses)", credits: 2 },
      ]
    },
    {
      semester: "Third Semester",
      courses: [
        { id: "SM2002", name: "Manufacturing Processes (3L + 2P)", credits: 3 },
        { id: "SM2003", name: "Solid Mechanics + Design of Mechanical Components (3L + 1T + 2P)", credits: 4 },
        { id: "SM2004", name: "Engineering Thermodynamics + Heat Transfer (3L + 1T)", credits: 4 },
        { id: "IT2002", name: "DSA in Python (3L + 2P)", credits: 4 },
        { id: "IT2S01", name: "IT Workshop 1 (covers contents related to drawing/drafting/modelling and kinematic/ dynamic modelling) (2P)", credits: 2 },
      ]
    },
    {
      semester: "Fourth Semester",
      courses: [
        { id: "SM2005", name: "Engineering Materials and Characterization (3L)", credits: 3 },
        { id: "SM2006", name: "Kinematics and Dynamics of Machines (3L + 1T + 2P)", credits: 4 },
        { id: "SM2007", name: "Cyber Physical Production Systems (2L + 2P)", credits: 3 },
        { id: "CS2009", name: "Control Systems (2L + 2P)", credits: 3 },
        { id: "IT2S02", name: "IT Workshop II (covers contents related to solid modelling and manufacturing) (2P)", credits: 2 },
      ]
    },
    {
      semester: "Fifth Semester",
      courses: [
        { id: "SM3009", name: "Additive and Subtractive Manufacturing Processes (2L + 2P)", credits: 3 },
        { id: "SM3010", name: "Computer Aided Product Development (2L + 2P)", credits: 4 },
        { id: "SM3011", name: "Industrial Automation (2L + 2P)", credits: 3 },
        { id: "SM3012", name: "Advanced Cyber Physical System (2L + 2P)", credits: 3 },
        { id: "IT3S01", name: "IT Workshop III (covers contents related to simulation) (2P)", credits: 2 },
      ]
    },
    {
      semester: "Sixth Semester",
      courses: [
        { id: "SM3009", name: "IT Workshop IV (covers contents related to CAE) (2P)", credits: 2 },
      ]
    }
  ];

  const highlights = [
    "Expert faculty members",
    "State-of-the-art laboratories",
    "Industry collaborations",
    "Research opportunities",
    "Modern infrastructure",
    "Global exposure"
  ];

  const admissionInfo = [
    {
      title: "Regular Admissions",
      content: "Admissions through JEE (Main) conducted by Central Board of Secondary Education. Requires 10+2 with Physics, Mathematics, and one optional subject.",
      icon: "📚"
    },
    {
      title: "International Students",
      content: "Admissions through DASA (Direct Admission of Students Abroad) scheme.",
      bullets: [
        "Complete course curriculum",
        "Required documentation",
        "Seat distribution",
        "Eligibility criteria"
      ],
      icon: "🌏"
    },
    {
      title: "Reservation Policy",
      content: "Following Government of India guidelines for SC, ST, OBC, and PH candidates.",
      icon: "📋"
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
              B.Tech in Smart Manufacturing Engineering
            </h1>
            <div className="grid md:grid-cols-2 gap-12 mt-16">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 hover:bg-white/20 transition-all duration-300">
                <h2 className="text-2xl font-semibold mb-4">Program Overview</h2>
                <p className="text-gray-200 leading-relaxed">
                  A comprehensive four-year undergraduate program designed to create future technology leaders. Our curriculum combines core computer science principles with cutting-edge technological advances.
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
      {/* Updated Modern Number Label */}
      <div className="flex items-center">
        <div className="relative">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg 
                        flex items-center justify-center shadow-lg 
                        group-hover:scale-105 transition-all duration-300">
            <span className="text-2xl font-bold text-white">
              {String(index + 1).padStart(2, '0')}
            </span>
            {/* Decorative elements */}
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-400 rounded-full opacity-50"></div>
            <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-blue-300 rounded-full opacity-50"></div>
          </div>
        </div>
        
        {/* Connecting line */}
        <div className="h-0.5 w-8 bg-gradient-to-r from-blue-500 to-transparent mx-4"></div>
      </div>

      {/* Semester Information */}
      <div className="flex flex-col">
        <h3 className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 
                     transition-colors duration-300">
          {semester.semester}
        </h3>
        <p className="text-sm font-medium text-blue-500 tracking-wider">COURSES</p>
      </div>
    </div>

    {/* Course Table - remains the same */}
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
                  <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6">
                    <span className="text-2xl">{info.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-800">{info.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{info.content}</p>
                  {info.bullets && (
                    <ul className="space-y-2">
                      {info.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-center text-gray-600">
                          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      
    </div>
  );
};

export default BTech;
