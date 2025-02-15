import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Home.css';
import { FaRocket, FaLightbulb, FaCertificate, FaHandshake, FaChartLine, FaShieldAlt, FaUsers, FaGlobe, FaAward, FaComments, FaPhone, FaEnvelope, FaMapMarkerAlt, FaNewspaper, FaBriefcase, FaMedal, FaUniversity, FaIndustry, FaHandHoldingUsd } from 'react-icons/fa';

function Home() {
    useEffect(() => {
        const bootstrap = require('bootstrap');
        const carouselElement = document.querySelector('#homeMainCarousel');
        if (carouselElement) {
            new bootstrap.Carousel(carouselElement, {
                interval: 4000,
                ride: 'carousel',
                touch: true,
                pause: 'hover'
            });
        }
    }, []);

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const startCounting = (element) => {
            const target = parseInt(element.getAttribute('data-target'));
            const duration = 2000; // 2 seconds
            const steps = 50;
            const stepValue = target / steps;
            let current = 0;
            
            const updateCounter = () => {
                current += stepValue;
                if (current > target) current = target;
                element.textContent = Math.floor(current);
                
                if (current < target) {
                    requestAnimationFrame(updateCounter);
                }
            };
            
            requestAnimationFrame(updateCounter);
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const statCard = entry.target;
                    const numberElement = statCard.querySelector('.stat-number');
                    statCard.classList.add('animate');
                    startCounting(numberElement);
                    observer.unobserve(statCard);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.stat-card').forEach(card => {
            observer.observe(card);
        });

        return () => observer.disconnect();
    }, []);

    const [showMap, setShowMap] = useState(false);

    return (
        <div className="home-container">
            {/* Enhanced Hero Carousel Section */}
            <section className="home-carousel">
                <div id="homeMainCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        {[...Array(5)].map((_, index) => (
                            <button 
                                key={index}
                                type="button" 
                                data-bs-target="#homeMainCarousel" 
                                data-bs-slide-to={index} 
                                className={index === 0 ? "active" : ""} 
                                aria-current={index === 0 ? "true" : "false"}
                                aria-label={`Slide ${index + 1}`}
                            ></button>
                        ))}
                    </div>
                    <div className="carousel-inner">
                        {[
                            {
                                title: "Innovation Gateway India",
                                subtitle: "Empowering Startups, Protecting Innovation",
                                buttonText: "Get Started",
                                image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80",
                            },
                            {
                                title: "Digital Transformation Hub",
                                subtitle: "Leading the Future of Innovation",
                                buttonText: "Explore More",
                                image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1920&q=80",
                            },
                            {
                                title: "Connect & Collaborate",
                                subtitle: "Join India's Largest Innovation Network",
                                highlights: ["1000+ Members", "200+ Mentors", "50+ Events"],
                                buttonText: "Join Now",
                                image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1920&q=80",
                            },
                            {
                                title: "Startup Ecosystem",
                                subtitle: "Building Tomorrow's Success Stories",
                                highlights: ["Incubation", "Acceleration", "Growth Support"],
                                buttonText: "Learn More",
                                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1920&q=80",
                            },
                            {
                                title: "Innovation Excellence",
                                subtitle: "Driving Growth Through Technology",
                                highlights: ["Research", "Development", "Implementation"],
                                buttonText: "Discover More",
                                image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80",
                            }
                        ].map((slide, index) => (
                            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`} data-bs-interval="4000">
                                <div className="carousel-overlay"></div>
                                <div className="carousel-background" style={{ backgroundImage: `url(${slide.image})` }}></div>
                                <div className="carousel-content">
                                    <div className="carousel-text-content">
                                        <h1 className="slide-title">{slide.title}</h1>
                                        <p className="slide-subtitle">{slide.subtitle}</p>
                                        <button className="slide-button">
                                            {slide.buttonText}
                                            <span className="button-arrow">→</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#homeMainCarousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon"></span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#homeMainCarousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon"></span>
                    </button>
                </div>
            </section>

            {/* Stats Section */}
            <section className="stats-section">
                <div className="container">
                    <div className="stats-container">
                        {[
                            { number: 500, label: "Startups", suffix: "+" },
                            { number: 100, label: "Funding", prefix: "₹", suffix: "Cr+" },
                            { number: 50, label: "Patents", suffix: "+" },
                            { number: 1000, label: "Cloud Apps", suffix: "+" }
                        ].map((stat, index) => (
                            <div key={index} className="stat-card">
                                <div className="stat-number-wrapper">
                                    <span className="stat-prefix">{stat.prefix}</span>
                                    <span className="stat-number" data-target={stat.number}>0</span>
                                    <span className="stat-suffix">{stat.suffix}</span>
                                </div>
                                <span className="stat-label">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Latest Updates Section */}
            <section className="latest-updates py-5">
                <div className="container-fluid px-4">
                    <h2 className="section-title text-center mb-5">Latest Updates</h2>
                    <div className="scroll-container">
                        <div className="scroll-wrapper">
                            {[
                                {
                                    icon: <FaNewspaper />,
                                    category: "Policy Update",
                                    date: "March 15, 2024",
                                    title: "New Startup India Initiatives Launched",
                                    description: "Government announces new benefits for tech startups including tax incentives and funding support.",
                                    tags: ["Policy", "Startups", "Funding"],
                                    color: "gradient-blue"
                                },
                                {
                                    icon: <FaBriefcase />,
                                    category: "Opportunity",
                                    date: "March 14, 2024",
                                    title: "Innovation Challenge 2024",
                                    description: "₹50 Lakhs grant opportunity for startups in AI/ML and Clean Technology sectors.",
                                    tags: ["Grants", "Innovation", "Technology"],
                                    color: "gradient-purple"
                                },
                                {
                                    icon: <FaMedal />,
                                    category: "Achievement",
                                    date: "March 13, 2024",
                                    title: "National Startup Awards",
                                    description: "Applications now open for National Startup Awards 2024. Last date: April 30, 2024.",
                                    tags: ["Awards", "Recognition", "Excellence"],
                                    color: "gradient-orange"
                                },
                                {
                                    icon: <FaUniversity />,
                                    category: "Education",
                                    date: "March 12, 2024",
                                    title: "Startup Masterclass Series",
                                    description: "Free online masterclass series by industry experts starting next week.",
                                    tags: ["Education", "Mentorship", "Skills"],
                                    color: "gradient-green"
                                },
                                {
                                    icon: <FaIndustry />,
                                    category: "Industry",
                                    date: "March 11, 2024",
                                    title: "Sector Growth Report 2024",
                                    description: "Latest insights on startup ecosystem growth across different sectors.",
                                    tags: ["Report", "Analytics", "Growth"],
                                    color: "gradient-red"
                                },
                                {
                                    icon: <FaHandHoldingUsd />,
                                    category: "Funding",
                                    date: "March 10, 2024",
                                    title: "Venture Capital Connect",
                                    description: "Exclusive VC networking event for growth-stage startups next month.",
                                    tags: ["Investment", "Networking", "Scale-up"],
                                    color: "gradient-indigo"
                                }
                            ].map((update, index) => (
                                <div key={index} className="scroll-item">
                                    <div className={`update-card animate-card ${update.color}`}>
                                        <div className="update-icon">
                                            {update.icon}
                                        </div>
                                        <div className="update-content">
                                            <div className="update-header">
                                                <span className="update-category">{update.category}</span>
                                                <span className="update-date">{update.date}</span>
                                            </div>
                                            <h3>{update.title}</h3>
                                            <p>{update.description}</p>
                                            <div className="update-tags">
                                                {update.tags.map((tag, idx) => (
                                                    <span key={idx} className="update-tag">{tag}</span>
                                                ))}
                                            </div>
                                            <button className="btn-read-more">
                                                Read More
                                                <span className="arrow">→</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button className="scroll-button scroll-left" aria-label="Scroll left">
                            <span>←</span>
                        </button>
                        <button className="scroll-button scroll-right" aria-label="Scroll right">
                            <span>→</span>
                        </button>
                    </div>
                </div>
            </section>

            {/* Partners & Recognition Section */}
            <section className="partners-section py-5">
                <div className="container">
                    <h2 className="section-title text-center mb-5">Partners & Recognition</h2>
                    <div className="row align-items-center">
                        <div className="col-md-3 col-6 mb-4">
                            <div className="partner-card">
                                <FaUniversity className="partner-icon" />
                                <h4>Top Universities</h4>
                            </div>
                        </div>
                        <div className="col-md-3 col-6 mb-4">
                            <div className="partner-card">
                                <FaIndustry className="partner-icon" />
                                <h4>Industry Leaders</h4>
                            </div>
                        </div>
                        <div className="col-md-3 col-6 mb-4">
                            <div className="partner-card">
                                <FaHandHoldingUsd className="partner-icon" />
                                <h4>Investment Firms</h4>
                            </div>
                        </div>
                        <div className="col-md-3 col-6 mb-4">
                            <div className="partner-card">
                                <FaMedal className="partner-icon" />
                                <h4>Govt. Recognition</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="services-section py-5">
                <div className="container">
                    <h2 className="section-title">Our Services</h2>
                    <div className="row">
                        {[
                            {
                                icon: <FaRocket />,
                                title: "Startup Support",
                                description: "Comprehensive guidance for startup registration, compliance, and growth strategies. Get expert mentorship and resources.",
                                color: "gradient-blue"
                            },
                            {
                                icon: <FaCertificate />,
                                title: "IPR Management",
                                description: "End-to-end intellectual property rights management, patent filing, and trademark registration support.",
                                color: "gradient-purple"
                            },
                            {
                                icon: <FaHandshake />,
                                title: "Investor Connect",
                                description: "Connect with verified investors, venture capitalists, and secure funding opportunities for your startup.",
                                color: "gradient-orange"
                            },
                            {
                                icon: <FaGlobe />,
                                title: "Global Market Access",
                                description: "Expand your business globally with our international market entry support and networking opportunities.",
                                color: "gradient-green"
                            },
                            {
                                icon: <FaUniversity />,
                                title: "Academic Collaboration",
                                description: "Partner with leading universities and research institutions for innovation and development.",
                                color: "gradient-pink"
                            },
                            {
                                icon: <FaChartLine />,
                                title: "Business Analytics",
                                description: "Advanced analytics and insights to drive data-informed business decisions and growth strategies.",
                                color: "gradient-indigo"
                            }
                        ].map((service, index) => (
                            <div key={index} className="col-md-4 mb-4">
                                <div className={`service-card ${service.color}`}>
                                    <div className="service-icon-wrapper">
                                        {service.icon}
                                    </div>
                                    <h3>{service.title}</h3>
                                    <p>{service.description}</p>
                                    <a href="#" className="read-more-btn">Learn More</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Conditional Rendering of Gujarat Map */}
            {showMap && (
                <div className="map-container">
                    <button className="btn btn-secondary" onClick={() => setShowMap(false)}>Close Map</button>
                </div>
            )}

            {/* Updated Platform Features Section */}
            <section className="features-section py-5">
                <div className="container">
                    <h2 className="section-title text-center mb-5">Platform Features</h2>
                    <div className="row g-4">
                        {[
                            {
                                icon: <FaLightbulb />,
                                title: "Innovation Management",
                                description: "Track and manage your innovation portfolio with our advanced dashboard",
                                category: "Core"
                            },
                            {
                                icon: <FaChartLine />,
                                title: "Growth Analytics",
                                description: "Real-time insights and predictive analytics for informed decision making",
                                category: "Analytics"
                            },
                            {
                                icon: <FaShieldAlt />,
                                title: "Compliance Support",
                                description: "Automated compliance checks and regulatory updates",
                                category: "Legal"
                            },
                            {
                                icon: <FaUsers />,
                                title: "Collaboration Hub",
                                description: "Connect with experts and peers in your industry",
                                category: "Network"
                            },
                            {
                                icon: <FaGlobe />,
                                title: "Global Network",
                                description: "Access international markets and partnerships",
                                category: "Global"
                            },
                            {
                                icon: <FaAward />,
                                title: "Recognition Program",
                                description: "Get certified and showcase your achievements",
                                category: "Awards"
                            },
                            {
                                icon: <FaBriefcase />,
                                title: "Resource Center",
                                description: "Access comprehensive business resources and tools",
                                category: "Resources"
                            },
                            {
                                icon: <FaNewspaper />,
                                title: "Market Intelligence",
                                description: "Stay updated with market trends and industry insights",
                                category: "Intelligence"
                            },
                            {
                                icon: <FaHandHoldingUsd />,
                                title: "Funding Access",
                                description: "Direct access to government grants and funding opportunities",
                                category: "Finance"
                            }
                        ].map((feature, index) => (
                            <div key={index} className="col-md-4">
                                <div className="feature-card">
                                    <div className="feature-icon-wrapper">
                                        {feature.icon}
                                    </div>
                                    <span className="feature-category">{feature.category}</span>
                                    <h3>{feature.title}</h3>
                                    <p>{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Success Stories Section */}
            <section className="success-stories py-5">
                <div className="container">
                    <h2 className="section-title text-center mb-5">Success Stories</h2>
                    <div className="row">
                        {[
                            {
                                image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                                company: "TechInnovate AI",
                                funding: "₹10Cr",
                                tags: ["AI/ML", "Series A"],
                                description: "Revolutionizing enterprise solutions with AI. 100+ clients globally.",
                                metrics: ["100+ Clients", "5 Countries", "200% YoY Growth"],
                                founder: "Rajesh Kumar",
                                position: "Founder & CEO"
                            },
                            {
                                image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                                company: "GreenTech Solutions",
                                funding: "₹5Cr",
                                tags: ["CleanTech", "Seed"],
                                description: "Sustainable energy solutions for modern India. Present in 5 states.",
                                metrics: ["5 States", "30K+ Users", "40% Cost Reduction"],
                                founder: "Priya Sharma",
                                position: "Co-founder"
                            },
                            {
                                image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                                company: "MediTech Care",
                                funding: "₹8Cr",
                                tags: ["HealthTech", "Series A"],
                                description: "Revolutionary healthcare platform serving 50+ hospitals nationwide.",
                                metrics: ["50+ Hospitals", "1M+ Patients", "15 Cities"],
                                founder: "Dr. Amit Patel",
                                position: "Founder & CTO"
                            },
                            {
                                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                                company: "EduStart Plus",
                                funding: "₹7Cr",
                                tags: ["EdTech", "Series A"],
                                description: "AI-powered learning platform reaching millions of students.",
                                metrics: ["1M+ Students", "95% Success Rate", "12 Languages"],
                                founder: "Meera Reddy",
                                position: "CEO"
                            }
                        ].map((story, index) => (
                            <div key={index} className="col-md-6 mb-4">
                                <div className="story-card animate-card">
                                    <div className="story-image">
                                        <img src={story.image} alt={story.company} />
                                        <div className="funding-badge">
                                            <span>Secured</span>
                                            <h4>{story.funding}</h4>
                                        </div>
                                    </div>
                                    <div className="story-content">
                                        <div className="story-tags">
                                            {story.tags.map((tag, idx) => (
                                                <span key={idx} className="story-tag">{tag}</span>
                                            ))}
                                        </div>
                                        <h3>{story.company}</h3>
                                        <p className="story-description">{story.description}</p>
                                        <div className="story-metrics">
                                            {story.metrics.map((metric, idx) => (
                                                <div key={idx} className="metric">{metric}</div>
                                            ))}
                                        </div>
                                        <div className="founder-info">
                                            <div className="founder-details">
                                                <h4>{story.founder}</h4>
                                                <p>{story.position}</p>
                                            </div>
                                            <button className="btn btn-outline-primary">Read More →</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
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

            {/* Community Testimonials Section */}
            <section className="testimonials-section py-5">
                <div className="container-fluid px-4">
                    <h2 className="section-title text-center mb-5">What Our Community Says</h2>
                    <div className="scroll-container">
                        <div className="scroll-wrapper">
                            {[
                                {
                                    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
                                    name: "Rajesh Kumar",
                                    position: "CEO, TechStart India",
                                    rating: 5,
                                    testimonial: "The platform's IPR support helped us secure our innovation effectively. Excellent guidance throughout the process."
                                },
                                {
                                    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80",
                                    name: "Priya Sharma",
                                    position: "Founder, HealthTech Solutions",
                                    rating: 5,
                                    testimonial: "Found amazing mentors through the platform. Their guidance was crucial for our startup's growth."
                                },
                                {
                                    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
                                    name: "Amit Patel",
                                    position: "CTO, AI Innovations",
                                    rating: 5,
                                    testimonial: "The funding connect program helped us secure Series A funding. Incredible network of investors!"
                                },
                                {
                                    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
                                    name: "John Doe",
                                    position: "CEO, Startup Inc.",
                                    rating: 5,
                                    testimonial: "This platform has transformed our startup journey with its comprehensive support system!"
                                },
                                {
                                    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80",
                                    name: "Jane Smith",
                                    position: "Founder, Innovate Co.",
                                    rating: 5,
                                    testimonial: "Incredible support and resources for entrepreneurs. The mentorship program is outstanding."
                                },
                                {
                                    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
                                    name: "Emily Johnson",
                                    position: "CTO, Tech Solutions",
                                    rating: 5,
                                    testimonial: "A game-changer for our business growth! The platform's tools and resources are invaluable."
                                }
                            ].map((testimonial, index) => (
                                <div key={index} className="scroll-item">
                                    <div className="testimonial-card animate-card">
                                        <div className="testimonial-header">
                                            <div className="testimonial-image">
                                                <img src={testimonial.image} alt={testimonial.name} />
                                            </div>
                                            <div className="rating">
                                                {'★'.repeat(testimonial.rating)}
                                            </div>
                                        </div>
                                        <div className="testimonial-content">
                                            <p className="testimonial-text">"{testimonial.testimonial}"</p>
                                            <div className="testimonial-author">
                                                <h4>{testimonial.name}</h4>
                                                <p className="designation">{testimonial.position}</p>
                                            </div>
                                            <button className="btn btn-outline-primary mt-3">View Full Story</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button className="scroll-button scroll-left" aria-label="Scroll left">
                            <span>←</span>
                        </button>
                        <button className="scroll-button scroll-right" aria-label="Scroll right">
                            <span>→</span>
                        </button>
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