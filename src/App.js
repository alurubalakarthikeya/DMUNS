import React, { useState, useEffect } from 'react';
import './App.css';
import logo from './favicon.ico';
import '@fortawesome/fontawesome-free/css/all.min.css';
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  // Track which nav section is selected
  const [selectedSection, setSelectedSection] = useState('home'); // default to home
  useEffect(() => {
  document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  const teamNames = ["John Doe", "John Doe", "John Doe", "John Doe"];
  const roles = ["Founder & CEO", "Engineering Manager", "Product Designer", "Frontend Developer"];
  const bios = [
    "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
    "Lead engineering teams at Figma, Pitch, and Protocol Labs.",
    "Former PM for Linear, Lambda School, and On Deck.",
    "Built products at Coinbase, Cruise, and Facebook."
  ];

  const events = [
  {
    name: 'Model UN Training',
    date: 'June 15, 2025',
    description: 'Get trained for your first MUN with expert tips and mock debates.',
    image: 'https://picsum.photos/seed/mun/200/200',
    registrationLink: '#'
  },
  {
    name: 'Debate Bootcamp',
    date: 'June 20, 2025',
    description: 'Sharpen your debate skills in a hands-on workshop.',
    image: 'https://picsum.photos/seed/debate/200/200',
    registrationLink: '#'
  }
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

  const images = [
  'https://picsum.photos/id/1015/300/300',
  'https://picsum.photos/id/1016/300/300',
  'https://picsum.photos/id/1018/300/300',
  'https://picsum.photos/id/1020/300/300'
];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % images.length);
    }, 2500); // change every 2.5 seconds

    return () => clearInterval(interval);
  }, []);

  // Render content for each nav section
  const renderContent = () => {
    switch (selectedSection) {
      case 'home':
        return (
          <div className="contentBox home-section">
            <div className="info">
              <h1 className="title">Welcome to DSUMUN III</h1>
              <p className="subtitle">Formal. Inspiring. Uniting Minds.</p>
              <p className="description">
                Join us for an unforgettable experience at DSUMUN III, where
                delegates from around the world come together to discuss pressing
                global issues.
              </p>
              <button className='register-button'>Register Now</button><br></br>
              <br></br>
            </div>
            <div className="gallery-box">
              <img src={images[index]} alt={`Slide ${index}`} />
            </div>
          </div>
        );
      case 'about':
        return (
          <div className="contentBox about-section">
            <h2>About Us</h2>
            <p>Established in 2023, the Model United Nations Society at Dayananda Sagar University is committed to raising awareness about global events and influential personalities. Our mission centers on cultivating indispensable skills—diplomacy, leadership, research, and eloquence—crucial in navigating today’s complex world. In an era fraught with challenges, it is imperative to develop a perspective that accommodates all parties. Attacks on free speech, relics of a bygone era, must be consigned to history. As torchbearers of the next generation, we bear the responsibility of safeguarding principles bestowed upon us by democratic institutions, a free press, and international cooperation.</p>
          </div>
        );
      case 'dsumun-2':
        return (
          <div className="contentBox dsumun-section">
            <h2>DSUMUN-II</h2>
            <p>It is with great enthusiasm and pride that MUNSOC from DSU, in collaboration with ORG Foundation, hosts the successor conference—DSUMUN Edition II: Beyond Borders. Our event aims to uphold the cornerstone principles of the United Nations in international relations and world peace, inspiring both national and international delegations. Staying true to contemporary relevance, our event seeks to bring together excitement and diplomacy through six distinct committees, each with its own unique procedures and perspectives on compelling global agendas.</p>
            <p>Our Committees:</p>
            <ul>
              <li>Global 20 (G20)</li>
              <li>United Nations Security Council (UNSC)</li>
              <li>Disarmament and International Security Committee (DISEC)</li>
              <li>United Nations Human Rights Council (UNHRC)</li>
              <li>All India Political Parties Meet (AIPPM)</li>
              <li>International Press Corps (IPC)</li>
            </ul>
          </div>
        );
      case 'contact':
        return (
          <div className="contentBox contact-section">
            <h2>Contact</h2>
            <p>Get in touch with us for any inquiries or feedback.</p>
            <section className="social-links">
              <a href="https://www.instagram.com/dsu_munsoc/?igsh=MWwydW53a28yeTIyYw%3D%3D"><i className="fa-brands fa-instagram"></i></a>
              <a href="https://www.linkedin.com/company/dsu-munsoc"><i className="fa-brands fa-linkedin"></i></a>
            </section>
          </div>
        );
      case 'events':
        return (
          <div className="contentBox events-section">
            <h2>Events</h2>
            <section className="event-cards">
                 {events.map((event, index) => (
                 <section className="card event-card" key={index}>
                   <img src={event.image} alt={event.name} className="event-img" />
                   <span className="event-name">{event.name}</span>
                   <span className="event-date">{event.date}</span>
                   <p className="event-description">{event.description}</p>
                   <section className="event-links">
                     <button className='register-button'><a href={event.registrationLink} target="_blank" rel="noopener noreferrer">Register</a></button>
                   </section>
                 </section>
               ))}
             </section>

          </div>
        );
      case 'team':
        return (
          <div className="contentBox team-section">
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
