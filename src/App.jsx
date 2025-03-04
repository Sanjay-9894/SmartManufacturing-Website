import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './components/HomePage';

export default function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar/>
      
      <HomePage/>
      
      <Footer/>
    </div>
  );
}