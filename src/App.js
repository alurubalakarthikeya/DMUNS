import React, { useState, useEffect } from 'react';
import './App.css';
import logo from './favicon.ico';
import '@fortawesome/fontawesome-free/css/all.min.css';
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  // Track which nav section is selected
  const [selectedSection, setSelectedSection] = useState('home'); // default to home

  const teamNames = ["John Doe", "John Doe", "John Doe", "John Doe"];
  const roles = ["Founder & CEO", "Engineering Manager", "Product Designer", "Frontend Developer"];
  const bios = [
    "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
    "Lead engineering teams at Figma, Pitch, and Protocol Labs.",
    "Former PM for Linear, Lambda School, and On Deck.",
    "Built products at Coinbase, Cruise, and Facebook."
  ];

  useEffect(() => {
    setIsOpen(false); // Close menu on section change
  }, [selectedSection]);

  // Animate for Register button (only on home)
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    if (selectedSection === 'home') {
      setAnimate(true);
      const timeout = setTimeout(() => setAnimate(false), 1000);
      return () => clearTimeout(timeout);
    }
  }, [selectedSection]);

  // Render content for each nav section
  const renderContent = () => {
    switch (selectedSection) {
      case 'home':
        return (
          <div className="contentBox">
            <div className="info">
              <h1 className="title">Welcome to DSUMUN III</h1>
              <p className="subtitle">Formal. Inspiring. Uniting Minds.</p>
              <p className="description">
                Join us for an unforgettable experience at DSUMUN III, where
                delegates from around the world come together to discuss pressing
                global issues.
              </p>
              <button
                className={`register-button ${animate ? 'animate' : ''}`}
                onClick={() =>
                  window.scrollTo({
                    top: document.getElementById('about').offsetTop,
                    behavior: 'smooth'
                  })
                }
              >
                Register Now
              </button><br></br>
              <br></br>
            </div>
          </div>
        );
      case 'about':
        return (
          <div className="contentBox">
            <h2>About Us</h2>
            <p>This is the About section content placeholder.</p>
          </div>
        );
      case 'dsumun-2':
        return (
          <div className="contentBox">
            <h2>DSUMUN-2</h2>
            <p>Details about DSUMUN-2 go here.</p>
          </div>
        );
      case 'contact':
        return (
          <div className="contentBox">
            <h2>Contact</h2>
            <p>Contact us at contact@example.com</p>
          </div>
        );
      case 'events':
        return (
          <div className="contentBox">
            <h2>Events</h2>
            <p>Information about upcoming events.</p>
          </div>
        );
      case 'team':
        return (
          <div className="contentBox team-section">
            <h2 className="team-heading">Meet our team</h2><br />
            <section className="team-cards">
              {teamNames.map((name, index) => (
                <section className="card" key={index}>
                  <img src="https://picsum.photos/200/300" alt={name} className="profile-img" />
                  <span className="name">{name}</span>
                  <span className="title">{roles[index]}</span>
                  <p className="description">{bios[index]}</p>
                  <section className="social-links">
                    <a href="#"><i className="fa-brands fa-instagram"></i></a>
                    <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                    <a href="#"><i className="fa-brands fa-discord"></i></a>
                  </section>
                </section>
              ))}
            </section>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <nav className="navbar">
          <div className="logo">
            <img src={logo} alt="DSUMUNS Logo" />
            <span><span className='purple'>DSU</span>MUNS</span>
          </div>
          <div className={`nav-links ${isOpen ? 'open' : ''}`}>
            <div className='middle'>
              <a href="#home" onClick={() => setSelectedSection('home')}>Home</a>
              <a href="#about" onClick={() => setSelectedSection('about')}>About</a>
              <a href="#dsumun-2" onClick={() => setSelectedSection('dsumun-2')}>DSUMUN-2</a>
              <a href="#contact" onClick={() => setSelectedSection('contact')}>Contact</a>
            </div>
            <div className='right'>
              <a href="#events" onClick={() => setSelectedSection('events')}>Events</a>
              <a href="#team" onClick={() => setSelectedSection('team')}>Our Team</a>
            </div>
          </div>
          <div className="menu-icon" onClick={toggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </nav>
      <main>
        {renderContent()}
      </main>
    </div>
  );
}

export default App;
