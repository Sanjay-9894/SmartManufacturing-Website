import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import Btech from './components/Programs/btech';
import Mtech from './components/Programs/mtech';
import Phd from './components/Programs/phd';
import About from './components/About';
import HodDesk from './components/People/Hoddesk';
import ContactPage from './components/Contact';
import Placements from './components/placements';






export default function App() {
  return (
    <Router>
      <div className="overflow-x-hidden">
        <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/btech" element={<Btech />} />
          <Route path="/mtech" element={<Mtech />} />
          <Route path="/phd" element={<Phd />} />
          <Route path="/about" element={<About />} />
          <Route path="/hoddesk" element={<HodDesk />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/placements" element={<Placements />} />

        </Routes>
      </div>
        <Footer/>
    </Router>

  );
}
