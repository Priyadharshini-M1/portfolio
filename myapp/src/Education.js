import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Education.css';

const Education = () => {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate('/');
  }

  const handleContact = () => {
    navigate('/Contact');
  }

  const handleProjects = () => {
    navigate('/Projects');
  }

  const handleExperience = () => {
    navigate('/Experience');
  }

  const handleSkills = () => {
    navigate('/Skills');
  }

  const handleEducation = () => {
    navigate('/Education');
  }

  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navb">
        <ul>
          <li onClick={handleHome}><a href="#home">Home</a></li>
          <li onClick={handleContact}><a href="#contact">Contact</a></li>
          <li onClick={handleProjects}><a href="#projects">Projects</a></li>
          <li onClick={handleExperience}><a href="#internship">Internship Experience</a></li>
          <li onClick={handleSkills}><a href="#skills">Skills</a></li>
          <li onClick={handleEducation}><a href="#education">Education</a></li>
        </ul>
      </nav>

      {/* Education Content */}
      <div className="education-container">
        <div className="education-content">
          <h2>Education</h2>
          <p>Bachelor of Technology in Artificial Intelligence & Data Science</p>
          <p>Chennai Institute of Technology, Chennai, Tamil Nadu (2021-2025)</p>
          <p>CGPA: 9.12</p>
        </div>
      </div>
    </div>
  );
}

export default Education;
