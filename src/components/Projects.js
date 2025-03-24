import React from 'react';
import './styles/projects.css';

function Projects() {
  return (
   <section id='projects'>
    <div className='p1'>
         <div className="projects-section">
      <h1>My Projects</h1>
      <div className="projects-container">
        <div className="project-box">
          <h3>Sign Language Detection</h3><br></br>
          <p>Its aims to bridge the communication gap between deaf individuals and others using AI-powered recognition. It utilizes computer vision and deep learning to accurately interpret hand gestures in real time. The system processes video input, classifies gestures, and translates 
            them into text or speech. This project enhances accessibility, making communication more inclusive and efficient. My goal is to refine accuracy and expand the model for broader sign language support</p>
        </div>
        <div className="project-box">
          <h3>E-MENU Card Pro</h3><br></br>
          <p>E-MENU Card Pro is a digital menu application that allows users to browse, select, and order food online seamlessly. It features user authentication, an interactive menu, and a smooth ordering process to enhance the dining experience. The app is built with a Java-based frontend using NetBeans for a responsive and efficient interface. It simplifies restaurant operations by reducing manual order-taking and improving customer convenience.</p>
        </div>
        <div className="project-box">
          <h3>Job Portal</h3><br></br>
          <p>My job portal project, College to Campus, is designed to help students find job 
            opportunities, internships, hackathons, and coding contests in one place. It connects job seekers with recruiters, providing a seamless application and hiring process. 
            The platform includes user authentication, role-based access, and a dynamic job listing system. Built with modern web technologies, it ensures a responsive and user-friendly experience
            . </p>
        </div>
      </div>
    </div>

   </div>
   </section>
  );
}

export default Projects;
