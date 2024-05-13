import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Experience.css';

const internships = [
  {
    id: 1,
    title: 'Data Science Intern at AJWORKS-Chennai',
    date: 'May 2023 - July 2023'
  },
  {
    id: 2,
    title: 'Data Science Intern at DATAVISION.AI-Hyderabad',
    date: 'Aug 2023 – Sep 2023'
  },
  {
    id: 3,
    title: 'Web Development Intern at LETSGROWMORE COMMUNITY',
    date: 'May 2023 – June 2023'
  }
];

const InternshipExperience = () => {
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

      {/* Internship Experience */}
      <div className="internship-container">
        {internships.map(internship => (
          <section key={internship.id} className="internship-experience">
            <h2>{internship.title}</h2>
            <p>{internship.date}</p>
          </section>
        ))}
      </div>
    </div>
  );
}

export default InternshipExperience;
