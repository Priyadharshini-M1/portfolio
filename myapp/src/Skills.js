import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Skills.css';

const Skills = () => {
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

      {/* Skills Section */}
      <section className="skills-section">
        <h2 className="skills-heading">Skills</h2>
        <div className="skills-list">
          <div className="skills-category">
            <h3>Proficient</h3>
            <ul>
              <li>Python</li>
              <li>SQL</li>
            </ul>
          </div>
          <div className="skills-category">
            <h3>Basics</h3>
            <ul>
              <li>Java</li>
            </ul>
          </div>
          <div className="skills-category">
            <h3>Web Development</h3>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Node js & Express js</li>
            </ul>
          </div>
          <div className="skills-category">
            <h3>Tools</h3>
            <ul>
              <li>Figma</li>
              <li>Informatica</li>
            </ul>
          </div>
          <div className='skills-category'>
            <h3>Database</h3>
            <ul>
              <li>MySQL Woekbench</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Skills;
