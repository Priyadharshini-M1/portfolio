import React from 'react';
import { useNavigate } from 'react-router-dom';
import ResumePDF from './PRIYADHARSHINI M_AIDS.pdf';
import './FullScreenResume.css'

const FullScreenResume = () => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1); // Navigate back to the previous page
    };

    return (
        <div className="full-screen-resume">
            <button onClick={handleGoBack}>Back</button>
            <iframe src={ResumePDF} width="100%" height="100%" title="Resume"></iframe>
        </div>
    );
}

export default FullScreenResume;
