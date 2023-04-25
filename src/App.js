import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Info from './components/Info';
import Footer from './components/Footer';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Portfolio from './components/pages/Portfolio';

  export default function App() {
    const [currentPage, setCurrentPage] = useState('');
  
    const renderPage = () => {
      if (currentPage === 'About') {
        return <About />;
      }
      if (currentPage === 'Contact') {
        return <Contact />;
      }
      if (currentPage === 'Portfolio') {
        return <Portfolio />;
      }
      // return <Resume />;
    };
  
    const handlePageChange = (page) => setCurrentPage(page);
  
    return (
      <div className='App'>
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      <Info />
      {renderPage()}
      <br />
      <Footer />
      </div>
    );
  }
  



