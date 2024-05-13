import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Education from './Education';
import Projects from './Projects';
import Certifications from './Certifications';
import Experience from './Experience';
import Skills from './Skills';
import Home from './Home';
import Contact from './Contact';
import FullScreenResume from './FullScreenResume';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/education" element={<Education />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} /> {/* Fixed lowercase 'contact' */}
        <Route path='/FullScreenResume' element={<FullScreenResume/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

