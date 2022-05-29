import React from 'react';
import './App.css';
import Content from './Components/Content';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import NavBar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
