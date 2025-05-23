
import './App.css';
import React, { useState } from 'react';
import logo from './logo.png';
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  return (
     <div className="App">
      <nav className="navbar">
      <div className="logo"><img src={logo} alt="DSUMUNS Logo"/> <span><span className='purple'>DSU</span>MUNS</span></div>
      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <a href="#about">About</a>
        <a href="#committees">Committees</a>
        <a href="#register">Register</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      </nav>
      <main className="main-content">
        <h1>Welcome to DSUMUNS</h1>
        <p>Formal. Inspiring. Uniting Minds.</p>
        <div className="grid-container">
      <div className="cell empty" />
      <div className="cell purple">D</div>
      <div className="cell empty" />
      <div className="cell empty" />

      <div className="cell empty" />
      <div className="cell purple">S</div>
      <div className="cell empty" />
      <div className="cell empty" />

      <div className="cell">M</div>
      <div className="cell purple">U</div>
      <div className="cell">N</div>
      <div className="cell">S</div>
    </div>

      </main>
    </div>
  );
}

export default App;
