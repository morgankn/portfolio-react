// import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Info from './components/Info';
import About from './components/About';
import Project from './components/Project';
import Footer from './components/Footer';
import Contact from './components/Contact';
// import background from './assets/background.jpg';

function App() {
  return (
    <div className="App">
     <Navbar />
     <About />
     <Info />
     <Project />
     <Contact />
     <Footer />
      </div>
     
      );
}

      export default App;
