import React, { useState, useEffect } from 'react';
import './App.css';
import logo from './favicon.ico';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const letters = [
    "", "", "", "D",
    "M", "U", "N", "S"
    , "", "", "", "U",
  ];

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
    const timeout = setTimeout(() => setAnimate(false), 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="App">
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="DSUMUNS Logo" />
          <span><span className='purple'>DSU</span>MUNS</span>
        </div>
        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <div className='middle'>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#dsumun-2">DSUMUN-2</a>
          <a href="#contact">Contact</a>
          </div>
          <div className='right'> 
          <a href="#events">Events</a>
          <a href="#team">Our Team</a>
          </div>
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </nav>

      <main className="main-content">
        <div className="background">
        <div className = "intro">
          <h1 className='title'>Welcome to DSUMUN III</h1>
          <p className='subtitle'>Formal. Inspiring. Uniting Minds.</p>
          <button className={`register-button ${animate ? 'animate' : ''}`} onClick={() => window.scrollTo({ top: document.getElementById('about').offsetTop, behavior: 'smooth' })}> Register Now</button>
        </div>
        <div className="grid-container">
          {letters.map((letter, index) => {
            const isEmpty = letter === "";
            const isPurple = ["D", "S", "U"].includes(letter);

            const styleVars = {
              "--random-x": Math.random().toFixed(2),
              "--random-y": Math.random().toFixed(2),
              "--random-rotate": Math.random().toFixed(2),
            };

            return (
              <div
                key={index}
                className={`cell ${isEmpty ? "empty" : ""} ${isPurple ? "purple" : ""} ${!isEmpty ? "blink-letter" : ""}`}
                style={{
                  animationDelay: `${Math.random() * 2}s`
                }}
              >
                {letter}
              </div>
            );
          })}
        </div>
        </div>
        <div className='images'>

        </div>
      </main>
    </div>
  );
}

export default App;