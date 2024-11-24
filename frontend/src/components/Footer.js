import React from 'react';
import { FaTwitter, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';
import '../components/css/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-4">
                        <div className="footer-brand">
                            <h3>Innovation Gateway India</h3>
                            <p>Empowering Innovation, Protecting Ideas</p>
                        </div>
                    </div>
                    
                    <div className="col-md-4 text-center">
                        <div className="social-links">
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <FaTwitter />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <FaInstagram />
                            </a>
                            <a href="mailto:contact@example.com">
                                <FaEnvelope />
                            </a>
                        </div>
                    </div>

                    <div className="col-md-4 text-end">
                        <div className="footer-links">
                            <a href="/privacy">Privacy Policy</a>
                            <a href="/terms">Terms of Use</a>
                            <a href="/contact">Contact</a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© 2024 Innovation Gateway India. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;