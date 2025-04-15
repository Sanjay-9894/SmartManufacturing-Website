import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-4 border-b border-gray-600 pb-2">Smart Manufacturing</h2>
            <p className="text-gray-300 leading-relaxed">
              Pandit Dwarka Prasad Mishra
              <br />
              Indian Institute of Information Technology
              <br />
              Design and Manufacturing, Jabalpur.
            </p>
          </div>
          
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-4 border-b border-gray-600 pb-2">Quick Links</h2>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white hover:underline transition-colors duration-300">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white hover:underline transition-colors duration-300">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white hover:underline transition-colors duration-300">Programs</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white hover:underline transition-colors duration-300">Placement</a></li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-xl font-bold mb-4 border-b border-gray-600 pb-2">Contact Us</h2>
            <div className="text-gray-300 leading-relaxed">
              <p className="flex items-center mb-2">
                <span className="mr-2">📍</span> PDPM IIITDM Jabalpur, Dumna Airport Road, Jabalpur, MP, India
              </p>
              <p className="flex items-center mb-2">
                <span className="mr-2">📞</span> +91-761-2794411
              </p>
              <p className="flex items-center mb-2">
                <span className="mr-2">✉️</span> headsm@iiitdmj.ac.in
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Smart Manufacturing, IIITDMJ. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer