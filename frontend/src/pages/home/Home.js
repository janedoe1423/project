import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
    FaRocket, FaLightbulb, FaChartLine, 
    FaHandshake, FaDatabase, FaPlay, 
    FaArrowRight, FaCheck, FaUserGraduate,
    FaBuilding, FaChartBar, FaCogs,
    FaUserTie
} from 'react-icons/fa';
import './Home.css';

// Animation variants
const cardVariants = {
    hidden: { 
        opacity: 0, 
        y: 50,
        scale: 0.9,
        rotateX: -15
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        rotateX: 0,
        transition: {
            type: "spring",
            duration: 0.8,
            bounce: 0.35
        }
    }
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

// Animated Section Component
const AnimatedSection = ({ children, className }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        threshold: 0.2,
        triggerOnce: true
    });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    return (
        <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className={className}
        >
            {children}
        </motion.div>
    );
};

// Hero Section Component
const HeroSection = () => {
    return (
        <section className="hero-section">
            <div className="hero-overlay" />
            <AnimatedSection className="hero-content">
                <motion.h1 variants={cardVariants}>
                    Transform Gujarat into an 
                    <span className="gradient-text"> Innovation Hub</span>
                </motion.h1>
                <motion.p variants={cardVariants}>
                    Empowering researchers, entrepreneurs, and innovators through 
                    cutting-edge technology and collaboration
                </motion.p>
                <motion.div variants={cardVariants} className="hero-buttons">
                    <button className="primary-button">
                        Get Started
                        <FaArrowRight />
                    </button>
                    <button className="video-button">
                        <div className="play-icon">
                            <FaPlay />
                        </div>
                        Watch Demo
                    </button>
                </motion.div>
            </AnimatedSection>
        </section>
    );
};

// Stats Section Component
const StatsSection = () => {
    const stats = [
        { number: "500+", label: "Startups", icon: <FaRocket /> },
        { number: "₹100Cr+", label: "Funding", icon: <FaChartLine /> },
        { number: "1000+", label: "Patents", icon: <FaLightbulb /> },
        { number: "50+", label: "Partners", icon: <FaHandshake /> }
    ];

    return (
        <section className="stats-section">
            <AnimatedSection className="stats-grid">
                {stats.map((stat, index) => (
                    <motion.div 
                        key={index}
                        variants={cardVariants}
                        className="stat-card glass-card"
                    >
                        <div className="stat-icon">{stat.icon}</div>
                        <h3 className="stat-number">{stat.number}</h3>
                        <p className="stat-label">{stat.label}</p>
                    </motion.div>
                ))}
            </AnimatedSection>
        </section>
    );
};

// Features Section Component
const FeaturesSection = () => {
    const features = [
        {
            icon: <FaDatabase />,
            title: "Unified Platform",
            description: "Centralized system for managing research, innovations, and startups"
        },
        {
            icon: <FaChartBar />,
            title: "Real-time Analytics",
            description: "Advanced analytics and insights for better decision making"
        },
        {
            icon: <FaCogs />,
            title: "Automation",
            description: "Streamlined processes for increased efficiency"
        },
        {
            icon: <FaUserTie />,
            title: "Expert Mentorship",
            description: "Connect with industry leaders and experienced mentors"
        }
    ];

    return (
        <section className="features-section">
            <AnimatedSection>
                <motion.h2 variants={cardVariants} className="section-title">
                    Our Features
                </motion.h2>
                <div className="features-grid">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            className="feature-card glass-card"
                        >
                            <div className="feature-icon">{feature.icon}</div>
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </AnimatedSection>
        </section>
    );
};

// Benefits Section Component
const BenefitsSection = () => {
    const benefits = [
        {
            icon: <FaUserGraduate />,
            title: "For Researchers",
            points: ["Easy project management", "Collaboration tools", "Funding opportunities"]
        },
        {
            icon: <FaRocket />,
            title: "For Startups",
            points: ["Incubation support", "Mentor connection", "Investor access"]
        },
        {
            icon: <FaBuilding />,
            title: "For Industry",
            points: ["Innovation access", "Talent pool", "R&D collaboration"]
        }
    ];

    return (
        <section className="benefits-section">
            <AnimatedSection>
                <motion.h2 variants={cardVariants} className="section-title">
                    Who Can Benefit?
                </motion.h2>
                <div className="benefits-grid">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            className="benefit-card glass-card"
                        >
                            <div className="benefit-icon">{benefit.icon}</div>
                            <h3>{benefit.title}</h3>
                            <ul>
                                {benefit.points.map((point, idx) => (
                                    <li key={idx}>
                                        <FaCheck className="check-icon" />
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </AnimatedSection>
        </section>
    );
};

// Main Home Component
const Home = () => {
    return (
        <div className="home">
            <HeroSection />
            <StatsSection />
            <FeaturesSection />
            <BenefitsSection />
        </div>
    );
};

export default Home;