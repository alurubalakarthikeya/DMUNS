import React, { useState, useEffect } from 'react';
import './App.css';
import logo from './favicon.ico';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const letters = [
    "", "D", "", "",
    "", "S", "", "",
    "M", "U", "N", "S"
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
        <div className="background">
        <div className = "intro">
          <h1 className={`title ${animate ? 'animate' : ''}`}>Welcome to DSUMUNS</h1>
          <p className={`subtitle ${animate ? 'animate' : ''}`}>Formal. Inspiring. Uniting Minds.</p>
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
      </main>
    </div>
  );
}

export default App;