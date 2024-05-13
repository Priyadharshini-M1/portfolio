import React from 'react';
import './Projects.css';
import { useNavigate } from 'react-router-dom';

function ProjectCard({ title, description, repoLink, website }) { // Added 'website' prop
  return (
    <div className="project-card">
      <h2>{title}</h2>
      <p>{description}</p>
      <a href={repoLink} target="_blank" rel="noopener noreferrer">Repository</a>
      <a href={website} target='_blank' rel='noopener noreferrer'>Website</a>
    </div>
  );
}

function Projects() {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate('/');
  }

  const handleContact = () => {
    navigate('/Contact');
  }

  const handleEducation = () => {
    navigate('/Education');
  }

  const handleInternship = () => {
    navigate('/Experience');
  }

  const handleProject = () => {
    navigate('/Projects');
  }

  const handleSkills = () => {
    navigate('/Skills');
  }

  return (
    <div>
      <nav className="navb">
        <ul>
          <li onClick={handleHome}><a href="#home">Home</a></li>
          <li onClick={handleContact}><a href="#contact">Contact</a></li>
          <li onClick={handleProject}><a href="#projects">Projects</a></li>
          <li onClick={handleInternship}><a href="#internship">Internship Experience</a></li>
          <li onClick={handleSkills}><a href="#skills">Skills</a></li>
          <li onClick={handleEducation}><a href="#education">Education</a></li>
        </ul>
      </nav>
      <div className="projects">
        <div className='allprojects'>
          <h1>My Projects</h1>
          <div className='library'>
            <ProjectCard
              title="Library Management System"
              description="Developed a web-based library management system allowing users to manage library resources, including book cataloging, borrower management, and circulation control."
              repoLink="https://github.com/Priyadharshini-M1/library-Management-System-Hosting-.git"
              website= "https://benevolent-marzipan-62bc87.netlify.app/"
            />
          </div>
          <div className='covid'>
            <ProjectCard
              title="Covid Vaccination Booking"
              description="Created a web application for scheduling and managing Covid vaccination appointments, integrating with external APIs to check vaccine availability and booking appointments for users."
              repoLink="https://github.com/Priyadharshini-M1/covid_vaccination.git"
              website="https://covid-vaccination-bypriyadharshini.netlify.app"
            />
          </div>
          <div className='emp'>
            <ProjectCard
              title="Employee Management Form"
              description="Built an employee registration form with React, enabling HR departments to efficiently collect and manage employee information, including personal details, job history, and contact information."
              repoLink="https://github.com/Priyadharshini-M1/Employee-Form.git"
              website="https://employee-management-form-bypriya.netlify.app/"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
