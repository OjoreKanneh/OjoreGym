// import React from 'react'

// const Footer = () => {
//   return (
//     <div>Footer</div>
//   )
// }

// export default Footer


import React from 'react';
import '../Footer.css'; // Import the CSS file for Footer styles (create this file in your project)

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        Made by <span className="footer-name">Ojore</span>
      </div>
    </footer>
  );
};

export default Footer;