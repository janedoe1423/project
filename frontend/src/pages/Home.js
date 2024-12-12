import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import { FaRocket, FaLightbulb, FaCertificate, FaHandshake, FaChartLine, FaShieldAlt, FaUsers, FaGlobe, FaAward, FaComments, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

function Home() {
    const [showMap, setShowMap] = useState(false);

    return (
        <div className="home-container">
            {/* Hero Section */}
            <div id="mainCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="0" className="active"></button>
                    <button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="1"></button>
                    <button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="2"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="hero-slide slide-1">
                            <div className="carousel-caption animate_animated animate_fadeInUp">
                                <h1 className="display-4 fw-bold glow-text">Innovation Gateway India</h1>
                                <p className="lead glow-text-subtle">Empowering Startups, Protecting Innovation, Building Future</p>
                                <button className="btn btn-primary btn-lg pulse-button">Get Started</button>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="hero-slide slide-2">
                            <div className="carousel-caption animate_animated animate_fadeInUp">
                                <h1 className="display-4 fw-bold glow-text">Protect Your Innovation</h1>
                                <p className="lead glow-text-subtle">Comprehensive IPR Management & Support</p>
                                <button className="btn btn-primary btn-lg pulse-button">Explore IPR Services</button>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="hero-slide slide-3">
                            <div className="carousel-caption animate_animated animate_fadeInUp">
                                <h1 className="display-4 fw-bold glow-text">Connect & Collaborate</h1>
                                <p className="lead glow-text-subtle">Join India's Largest Innovation Ecosystem</p>
                                <button className="btn btn-primary btn-lg pulse-button">Join Network</button>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#mainCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#mainCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </button>
            </div>

            {/* Stats Section */}
            <section className="stats-section py-4">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-md-3 col-6 mb-4">
                            <div className="stat-item">
                                <h2>10,000+</h2>
                                <p>Registered Startups</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-6 mb-4">
                            <div className="stat-item">
                                <h2>₹500Cr+</h2>
                                <p>Funding Facilitated</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-6 mb-4">
                            <div className="stat-item">
                                <h2>5,000+</h2>
                                <p>Patents Filed</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-6 mb-4">
                            <div className="stat-item">
                                <h2>1,000+</h2>
                                <p>Expert Mentors</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="services-section py-5">
                <div className="container">
                    <h2 className="section-title text-center mb-5">Our Services</h2>
                    <div className="row">
                        <div className="col-md-4 mb-4">
                            <div className="service-card">
                                <FaRocket className="service-icon" />
                                <h3>Startup Support</h3>
                                <p>Comprehensive support for startup registration, compliance, and growth</p>
                                <button className="btn btn-outline-primary" onClick={() => setShowMap(true)}>Learn More</button>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="service-card">
                                <FaCertificate className="service-icon" />
                                <h3>IPR Management</h3>
                                <p>End-to-end intellectual property rights management and protection</p>
                                <button className="btn btn-outline-primary" onClick={() => setShowMap(true)}>Learn More</button>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="service-card">
                                <FaHandshake className="service-icon" />
                                <h3>Investor Connect</h3>
                                <p>Connect with verified investors and secure funding opportunities</p>
                                <button className="btn btn-outline-primary">Learn More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Conditional Rendering of Gujarat Map */}
            {showMap && (
                <div className="map-container">
                    <button className="btn btn-secondary" onClick={() => setShowMap(false)}>Close Map</button>
                </div>
            )}

            {/* Features Grid */}
            <section className="features-section py-5 bg-light">
                <div className="container">
                    <h2 className="section-title text-center mb-5">Platform Features</h2>
                    <div className="row g-4">
                        {[
                            {
                                icon: <FaLightbulb />,
                                title: "Innovation Management",
                                description: "Track and manage your innovation portfolio"
                            },
                            {
                                icon: <FaChartLine />,
                                title: "Growth Analytics",
                                description: "Data-driven insights for startup growth"
                            },
                            {
                                icon: <FaShieldAlt />,
                                title: "Compliance Support",
                                description: "Stay compliant with regulatory requirements"
                            }
                            // Add more features as needed
                        ].map((feature, index) => (
                            <div key={index} className="col-md-4">
                                <div className="feature-card">
                                    <div className="feature-icon">{feature.icon}</div>
                                    <h3>{feature.title}</h3>
                                    <p>{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Success Stories */}
            <section className="success-stories py-5">
                <div className="container">
                    <h2 className="section-title text-center mb-5">Success Stories</h2>
                    <div className="row">
                        <div className="col-md-4 mb-4">
                            <div className="story-card">
                                <img src="" alt="Success Story 1" className="story-image" />
                                <div className="story-content">
                                    <h4>TechInnovate Solutions</h4>
                                    <p>Secured ₹10Cr funding through our platform</p>
                                    <button className="btn btn-link">Read More →</button>
                                </div>
                            </div>
                        </div>
                        {/* Add more success stories */}
                    </div>
                </div>
            </section>

            {/* Enhanced Features Section */}
            <section className="enhanced-features py-5">
                <div className="container">
                    <h2 className="section-title text-center mb-5">Why Choose Us</h2>
                    <div className="row g-4">
                        {[
                            {
                                icon: <FaUsers />,
                                title: "Expert Mentorship",
                                description: "Access to industry experts and successful entrepreneurs"
                            },
                            {
                                icon: <FaGlobe />,
                                title: "Global Network",
                                description: "Connect with international innovation ecosystems"
                            },
                            {
                                icon: <FaAward />,
                                title: "Government Recognition",
                                description: "Official recognition and certification support"
                            },
                            {
                                icon: <FaLightbulb />,
                                title: "Innovation Labs",
                                description: "Access to state-of-the-art testing facilities"
                            },
                            {
                                icon: <FaChartLine />,
                                title: "Market Access",
                                description: "Support in reaching target markets and scaling"
                            },
                            {
                                icon: <FaShieldAlt />,
                                title: "Legal Support",
                                description: "Comprehensive legal and compliance assistance"
                            }
                        ].map((feature, index) => (
                            <div key={index} className="col-md-4 col-lg-4">
                                <div className="enhanced-feature-card">
                                    <div className="feature-icon-wrapper">
                                        {feature.icon}
                                    </div>
                                    <h3>{feature.title}</h3>
                                    <p>{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="testimonials-section">
                <div className="container">
                    <h2 className="section-title text-center mb-5">What Our Users Say</h2>
                    <div className="row">
                        <div className="col-md-4 mb-4">
                            <div className="testimonial-card">
                                <div className="testimonial-image">
                                    <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80" 
                                         alt="Testimonial 1" />
                                </div>
                                <div className="testimonial-content">
                                    <div className="rating">★★★★★</div>
                                    <p>"The platform's IPR support helped us secure our innovation effectively. Excellent guidance throughout the process."</p>
                                    <h4>Rajesh Kumar</h4>
                                    <p className="designation">CEO, TechStart India</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="testimonial-card">
                                <div className="testimonial-image">
                                    <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80" 
                                         alt="Testimonial 2" />
                                </div>
                                <div className="testimonial-content">
                                    <div className="rating">★★★★★</div>
                                    <p>"Found amazing mentors through the platform. Their guidance was crucial for our startup's growth."</p>
                                    <h4>Priya Sharma</h4>
                                    <p className="designation">Founder, HealthTech Solutions</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="testimonial-card">
                                <div className="testimonial-image">
                                    <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80" 
                                         alt="Testimonial 3" />
                                </div>
                                <div className="testimonial-content">
                                    <div className="rating">★★★★★</div>
                                    <p>"The funding connect program helped us secure Series A funding. Incredible network of investors!"</p>
                                    <h4>Amit Patel</h4>
                                    <p className="designation">CTO, AI Innovations</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="contact-section py-5 bg-light">
                <div className="container">
                    <h2 className="section-title text-center mb-5">Get In Touch</h2>
                    <div className="row">
                        <div className="col-md-6 mb-4">
                            <div className="contact-info-card">
                                <div className="row">
                                    <div className="col-md-12 mb-4">
                                        <div className="contact-item">
                                            <FaPhone className="contact-icon" />
                                            <div>
                                                <h4>Call Us</h4>
                                                <p>+91 1800-XXX-XXXX</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12 mb-4">
                                        <div className="contact-item">
                                            <FaEnvelope className="contact-icon" />
                                            <div>
                                                <h4>Email Us</h4>
                                                <p>support@innovationportal.gov.in</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="contact-item">
                                            <FaMapMarkerAlt className="contact-icon" />
                                            <div>
                                                <h4>Visit Us</h4>
                                                <p>Innovation Hub, Technology Complex<br />New Delhi - 110001</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="contact-form-card">
                                <form>
                                    <div className="mb-3">
                                        <input type="text" className="form-control" placeholder="Your Name" />
                                    </div>
                                    <div className="mb-3">
                                        <input type="email" className="form-control" placeholder="Your Email" />
                                    </div>
                                    <div className="mb-3">
                                        <select className="form-control">
                                            <option>Select Query Type</option>
                                            <option>Startup Registration</option>
                                            <option>IPR Support</option>
                                            <option>Funding Query</option>
                                            <option>Technical Support</option>
                                            <option>Other</option>
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <textarea className="form-control" rows="4" placeholder="Your Message"></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-primary w-100">Send Message</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;