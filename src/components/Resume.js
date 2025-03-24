import React from 'react';
import './styles/Resume.css'; // Add CSS if needed

function Resume() {
  const handleDownload = () => {
    const resumeUrl = process.env.PUBLIC_URL + '/resume.pdf'; // Resume must be in the public folder
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'resume.pdf'; // Change filename as needed
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="resume-container">
      <button className="resume-btn" onClick={handleDownload}>Download Resume</button>
    </div>
  );
}

export default Resume;
