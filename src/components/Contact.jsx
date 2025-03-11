import React, { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitted(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      
      <div 
        className="relative h-[60vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://www.iiitdmj.ac.in/img/slider/02.jpg')"
        }}
      >
        <div className="text-center text-white space-y-6 px-4">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">Contact Us</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            Connect with the Smart Manufacturing Department at IIITDM Jabalpur
          </p>
          <div className="flex justify-center space-x-4 text-sm">
            <span>Home</span>
            <span>›</span>
            <span>Contact</span>
          </div>
        </div>
      </div>

     
      <div className="container mx-auto px-4 -mt-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Phone Card */}
          <div className="bg-white rounded-xl shadow-lg p-8 border-b-4 border-black hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="p-4 bg-black-100 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold text-gray-800">Call Us</h3>
                <p className="text-gray-500">We're here to help</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black  mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h18M3 19h18M12 3v16" />
                </svg>
                <p className="text-gray-600">Tel: 0761-279XXXX</p>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <p className="text-gray-600">Fax: +91-761-26XXXX</p>
              </div>
            </div>
          </div>

          
          <div className="bg-white rounded-xl shadow-lg p-8 border-b-4 border-black hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="p-4 bg-black-100 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold text-gray-800">Email Us</h3>
                <p className="text-gray-500">Drop us a line</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
                <p className="text-gray-600">info@iiitdmj.ac.in</p>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
                <p className="text-gray-600">support@iiitdmj.ac.in</p>
              </div>
            </div>
          </div>

   
          <div className="bg-white rounded-xl shadow-lg p-8 border-b-4 border-black hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="p-4 bg-black-100 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold text-gray-800">Visit Us</h3>
                <p className="text-gray-500">Our office location</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                <div>
                  <p className="text-gray-600">Smart Manufacturing Department</p>
                  <p className="text-gray-600">IIITDM Jabalpur</p>
                  <p className="text-gray-600">Dumna Airport Road</p>
                  <p className="text-gray-600">Jabalpur - 482005, MP</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="container mx-auto px-4 py-24">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
           
            <div className="p-8 lg:p-12">
              <h2 className="text-3xl font-bold mb-8">Find Us On Map</h2>
              <div className="h-[600px] rounded-2xl overflow-hidden shadow-lg">
                <iframe 
                  src="https://maps.google.com/maps?hl=en&amp;q=IIITDMJ&amp;ie=UTF8&amp;t=roadmap&amp;z=15&amp;iwloc=B&amp;output=embed"
                  className="w-full h-full"
                  title="IIITDM Jabalpur Location Map"
                  frameBorder="0"
                ></iframe>
              </div>
            </div>

     
            <div className="bg-gray-50 p-8 lg:p-12">
              <h2 className="text-3xl font-bold mb-8">Send Us a Message</h2>
              {submitted ? (
                <div className="text-center py-12">
                  <div className="text-black mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Thank You!</h3>
                  <p className="text-gray-600 mb-8">Your message has been sent successfully. We'll get back to you soon.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-black font-semibold hover:text-black-700 transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                    {[
                      { name: "firstName", label: "First Name", type: "text" },
                      { name: "lastName", label: "Last Name", type: "text" },
                    ].map((field) => (
                      <div key={field.name}>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          {field.label}
                        </label>
                        <input
                          type={field.type}
                          name={field.name}
                          value={formData[field.name]}
                          onChange={handleChange}
                          className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:border-black outline-none transition"
                          required
                        />
                      </div>
                    ))}
                  </div>

         
                  {[
                    { name: "email", label: "Email Address", type: "email" },
                    { name: "phone", label: "Phone Number", type: "tel" },
                  ].map((field) => (
                    <div key={field.name}>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleChange}
                        className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:border-black outline-none transition"
                        required
                      />
                    </div>
                  ))}


                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:border-black outline-none transition resize-none"
                      required
                    ></textarea>
                  </div>

 
                  <button
                    type="submit"
                    disabled={loading}
                    className={`w-full bg-black text-white py-4 rounded-xl text-lg font-semibold transition-all duration-300
                      ${loading 
                        ? 'opacity-70 cursor-not-allowed' 
                        : 'hover:bg-green-700 transform hover:-translate-y-1 hover:shadow-lg'
                      }`}
                  >
                    {loading ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
