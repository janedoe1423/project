import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
  return (
    <footer className="bg-light py-3 mt-4 border-top">
      <div className="container text-center">
        <p className="mb-0">&copy; {new Date().getFullYear()} StartupHub. All Rights Reserved.</p>
        <p className="small">
          <a href="#privacy-policy">Privacy Policy</a> | 
          <a href="#terms-of-service"> Terms of Service</a> | 
          <a href="#contact-us"> Contact Us</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
