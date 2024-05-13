import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Contact.css'

function Contact() {
  const navigate = useNavigate();

  const handlehome = () => {
    navigate('/');
  }

  const handlecontact = () => {
    navigate('/Contact');
  }

  const handleproject = () => {
    navigate('/Projects');
  }

  const handleinternship = () => {
    navigate('/Experience');
  }

  const handleskills = () => {
    navigate('/Skills');
  }

  const handleeducation = () => {
    navigate('/Education');
  }

  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navb">
        <ul>
          <li onClick={handlehome}><a href="#home">Home</a></li>
          <li onClick={handlecontact}><a href="#contact">Contact</a></li>
          <li onClick={handleproject}><a href="#projects">Projects</a></li>
          <li onClick={handleinternship}><a href="#internship">Internship Experience</a></li>
          <li onClick={handleskills}><a href="#skills">Skills</a></li>
          <li onClick={handleeducation}><a href="#education">Education</a></li>
        </ul>
      </nav>

      {/* Main Content */}
      <div className="contact-container">
        <h1>Contact Me</h1>
        <p>Email: priyadharshinimathivannan@gmail.com</p>
        <p>Phone: +91 6381510446</p>
        <p>Address: Chennai</p>
      </div>
    </div>
  );
}

export default Contact;
