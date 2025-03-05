import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { Check, GraduationCap, BookOpen, Brain, Microscope } from 'lucide-react';

const PhD = () => {
  const highlights = [
    "Original research contribution",
    "Expert faculty mentorship",
    "Advanced research facilities",
    "Publication opportunities",
    "International collaborations",
    "Industry partnerships"
  ];

  const researchAreas = [/* ... your existing research areas ... */];

  const programPhases = [
    {
      title: "Phase 1: Coursework",
      description: "Advanced coursework to build strong research foundation",
      points: [
        "Advanced core courses in computer science",
        "Specialized courses in research area",
        "Research methodology and ethics",
        "Seminar presentations and literature review"
      ]
    },
    {
      title: "Phase 2: Comprehensive Examination",
      description: "Evaluation of knowledge and research potential",
      points: [
        "Written examination on core concepts",
        "Research proposal presentation",
        "Oral defense of research proposal",
        "Formation of doctoral committee"
      ]
    },
    {
      title: "Phase 3: Research and Dissertation",
      description: "Conducting original research under faculty guidance",
      points: [
        "Implementation of research methodology",
        "Regular progress presentations",
        "Publication of research findings",
        "Writing and defending dissertation"
      ]
    },
    {
      title: "Phase 4: Dissertation Defense",
      description: "Final presentation and defense of research work",
      points: [
        "Submission of dissertation",
        "Public presentation of findings",
        "Defense before committee",
        "Final revisions and submission"
      ]
    }
  ];

  const admissionInfo = [
    {
      title: "Admission Process",
      content: "Selection based on academic record, research potential, and interview performance. Admissions twice a year - July and January.",
      icon: <GraduationCap className="w-6 h-6" />,
      bullets: [
        "Academic excellence",
        "Research aptitude",
        "Interview performance",
        "Fellowship opportunities"
      ]
    },
    {
      title: "Eligibility Criteria",
      content: "M.Tech/ME in relevant discipline or exceptional B.Tech candidates with research potential.",
      icon: <BookOpen className="w-6 h-6" />,
      bullets: [
        "M.Tech/ME in relevant field",
        "Valid GATE/NET score",
        "Research background",
        "Academic excellence"
      ]
    },
    {
      title: "Financial Support",
      content: "Various fellowship opportunities and assistantships available for qualified candidates.",
      icon: <Brain className="w-6 h-6" />,
      bullets: [
        "Institute fellowship",
        "Research assistantship",
        "Teaching assistantship",
        "External funding"
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
              PhD in Smart Manufacturing Engineering
            </h1>
            <div className="grid md:grid-cols-2 gap-12 mt-16">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 hover:bg-white/20 transition-all duration-300">
                <h2 className="text-2xl font-semibold mb-4">Program Overview</h2>
                <p className="text-gray-200 leading-relaxed">
                  Our PhD program is designed to cultivate research scholars who can make significant contributions to the field through original research, critical thinking, and innovation.
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

        {/* Program Phases */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
              Program Structure
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {programPhases.map((phase, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-600">
                      <Microscope className="w-6 h-6" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-bold text-gray-800">{phase.title}</h3>
                      <p className="text-sm text-gray-500">{phase.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {phase.points.map((point, i) => (
                      <li key={i} className="flex items-center text-gray-600">
                        <Check size={16} className="text-green-500 mr-2 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Research Areas */}
        <section className="py-20 px-4 bg-white">
          {/* ... Your existing research areas section with updated styling ... */}
        </section>

        {/* Admission Information */}
        <section className="py-20 px-4">
          {/* ... Your existing admission section with updated styling ... */}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PhD;
