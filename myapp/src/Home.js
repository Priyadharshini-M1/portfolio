import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import ResumePDF from './PRIYADHARSHINI M_AIDS.pdf';

const Home = () => {
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

    const handleViewFullScreen = () => {
        navigate('/fullscreenresume');
    };

    const handleDownloadResume = () => {
        const downloadLink = document.createElement('a');
        downloadLink.href = ResumePDF;
        downloadLink.download = 'PRIYADHARSHINI M_AIDS.pdf';
        downloadLink.click();
    };

    return (
        <div>
            {/* Navigation Bar */}
            <nav className="navbar">
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
            <div className="home-container">
                <div className='all'>
                    <div className="left-side">
                        {/* Set your picture as background image */}
                        <div className="profile-picture"></div>
                        <p className="name">Priyadharshini M</p>
                        <p className="role"><strong>Fullstack Developer</strong></p>
                    </div>
                    <div className="right-side">
                        {/* Content wrapped in a box */}
                        <div className="about-me-box">
                            <h2>About Me</h2>
                            <p>
                                Hello! I'm Priyadharshini M, a passionate technologist currently pursuing a Bachelor of Technology in Artificial Intelligence & Data Science at Chennai Institute of Technology. With a keen interest in both cutting-edge technologies and practical application, I'm driven by the pursuit of innovative solutions to real-world problems. Alongside my focus on AI and data science, I'm also actively honing my skills in full-stack development, aiming to create seamless end-to-end solutions that leverage the power of both data-driven insights and intuitive user experiences.
                            </p>
                        </div>

                        {/* Resume Section */}
                        <div className="resume-section">
                            <h2>Resume</h2>
                            <p>View or download my resume:</p>
                            <button onClick={handleViewFullScreen} className='viewbtn'>View</button>
                            <button onClick={handleDownloadResume} className='downloadbtn'>Download</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
