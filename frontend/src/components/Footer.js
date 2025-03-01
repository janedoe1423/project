import React from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaLinkedin, FaInstagram, FaGithub, FaEnvelope } from 'react-icons/fa';
import './css/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-12">
                        <div className="footer-brand">
                            <h3>StartupHub</h3>
                            <p>Empowering Innovation, Protecting Ideas</p>
                            <p>Building Tomorrow's Success Stories</p>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-md-12">
                        <div className="social-links">
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                                <FaTwitter />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <FaLinkedin />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <FaInstagram />
                            </a>
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                <FaGithub />
                            </a>
                            <a href="mailto:contact@startuphub.com" aria-label="Email">
                                <FaEnvelope />
                            </a>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-12">
                        <div className="footer-links">
                            <Link to="/about">About Us</Link>
                            <Link to="/privacy">Privacy Policy</Link>
                            <Link to="/terms">Terms of Use</Link>
                            <Link to="/contact">Contact</Link>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© {new Date().getFullYear()} StartupHub. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;