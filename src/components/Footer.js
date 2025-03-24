import React from 'react';

function Footer() {
  return (
    <>
      <style>
        {`
          .footer {
            text-align: center;
            padding: 20px;
            background-color: #222;
            color: white;
            position: relative;
            bottom: 0;
            width: 100%;
          }

          .footer-links {
            margin-top: 10px;
          }

          .footer-links a {
            color: #f4f4f4;
            margin: 0 10px;
            text-decoration: none;
            font-weight: bold;
            transition: color 0.3s ease;
          }

          .footer-links a:hover {
            color: #007bff;
          }
        `}
      </style>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Rahul Satla. All Rights Reserved.</p>
        <div className="footer-links">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:rahulsatla@example.com">Email</a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
