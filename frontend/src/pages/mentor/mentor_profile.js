import React, { useState, useEffect } from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import {
    FaUser, FaHistory, FaCertificate, FaClock,
    FaStar, FaTrophy, FaCalendarAlt, FaBriefcase,
    FaEnvelope, FaCog, FaGraduationCap, FaCode,
    FaEdit, FaCamera, FaLinkedin, FaGithub,
    FaGlobe, FaMedal, FaCheckCircle, FaUsers, 
    FaPlus, FaTrash, FaTimes
} from 'react-icons/fa';
import './mentor_profile.css';

const EditProfileModal = ({ show, onClose, initialData, onSave }) => {
    const [activeTab, setActiveTab] = useState('about');
    const [localFormData, setLocalFormData] = useState({
        ...initialData,
        experience: initialData.experience || [],
        education: initialData.education || []
    });

    const handleAddItem = (section) => {
        setLocalFormData(prev => {
            const newData = { ...prev };
            
            const newItem = {
                experience: {
                    title: '',
                    organization: '',
                    duration: '',
                    industry: '',
                    location: '',
                    description: '',
                    achievements: []
                },
                education: {
                    degree: '',
                    university: '',
                    year: '',
                    recognition: '',
                    description: ''
                }
            };

            newData[section] = [...(newData[section] || []), newItem[section]];
            return newData;
        });
    };

    const handleRemoveItem = (section, index) => {
        setLocalFormData(prev => {
            const newData = { ...prev };
            newData[section] = (newData[section] || []).filter((_, i) => i !== index);
            return newData;
        });
    };

    const handleInputChange = (section, field, value, index = null) => {
        setLocalFormData(prev => {
            const newData = { ...prev };
            if (index !== null) {
                newData[section] = [...(newData[section] || [])];
                newData[section][index] = {
                    ...newData[section][index],
                    [field]: value
                };
            } else {
                newData[section] = {
                    ...(newData[section] || {}),
                    [field]: value
                };
            }
            return newData;
        });
    };

    const handleSave = () => {
        onSave(localFormData);
        onClose();
    };

    if (!show) return null;

    return (
        <div className="mentor-profile-modal">
            <div className="mentor-profile-modal-content">
                <div className="mentor-profile-modal-header">
                    <h3>Edit Profile</h3>
                    <button className="mentor-profile-modal-close" onClick={onClose}>
                        <FaTimes />
                    </button>
                </div>

                <div className="mentor-profile-modal-tabs">
                    <button 
                        className={`modal-tab ${activeTab === 'about' ? 'active' : ''}`}
                        onClick={() => setActiveTab('about')}
                    >
                        About
                    </button>
                    <button 
                        className={`modal-tab ${activeTab === 'skills' ? 'active' : ''}`}
                        onClick={() => setActiveTab('skills')}
                    >
                        Skills
                    </button>
                    <button 
                        className={`modal-tab ${activeTab === 'experience' ? 'active' : ''}`}
                        onClick={() => setActiveTab('experience')}
                    >
                        Experience
                    </button>
                    <button 
                        className={`modal-tab ${activeTab === 'education' ? 'active' : ''}`}
                        onClick={() => setActiveTab('education')}
                    >
                        Education
                    </button>
                    <button 
                        className={`modal-tab ${activeTab === 'certifications' ? 'active' : ''}`}
                        onClick={() => setActiveTab('certifications')}
                    >
                        Certifications
                    </button>
                </div>

                <div className="mentor-profile-modal-body">
                    {activeTab === 'about' && (
                        <div className="mentor-profile-form-section">
                            <div className="mentor-profile-form-row">
                                <div className="mentor-profile-form-group">
                                    <label>Name</label>
                                    <input 
                                        type="text"
                                        value={localFormData.personalInfo.name}
                                        onChange={(e) => handleInputChange('personalInfo', 'name', e.target.value)}
                                        className="mentor-profile-form-input"
                                    />
                                </div>
                                <div className="mentor-profile-form-group">
                                    <label>Title</label>
                                    <input 
                                        type="text"
                                        value={localFormData.personalInfo.title}
                                        onChange={(e) => handleInputChange('personalInfo', 'title', e.target.value)}
                                        className="mentor-profile-form-input"
                                    />
                                </div>
                            </div>
                            <div className="mentor-profile-form-group">
                                <label>Bio</label>
                                <textarea 
                                    value={localFormData.personalInfo.bio}
                                    onChange={(e) => handleInputChange('personalInfo', 'bio', e.target.value)}
                                    className="mentor-profile-form-input"
                                    rows={4}
                                />
                            </div>
                        </div>
                    )}

                    {activeTab === 'skills' && (
                        <div className="mentor-profile-form-section">
                            {localFormData.skills.map((skill, index) => (
                                <div key={index} className="mentor-profile-form-row">
                                    <div className="mentor-profile-form-group">
                                        <label>Skill</label>
                                        <input 
                                            type="text"
                                            value={skill.name}
                                            onChange={(e) => handleInputChange('skills', 'name', e.target.value, index)}
                                            className="mentor-profile-form-input"
                                        />
                                    </div>
                                    <div className="mentor-profile-form-group">
                                        <label>Level (%)</label>
                                        <input 
                                            type="number"
                                            value={skill.level}
                                            onChange={(e) => handleInputChange('skills', 'level', parseInt(e.target.value), index)}
                                            className="mentor-profile-form-input"
                                            min="0"
                                            max="100"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {activeTab === 'experience' && (
                        <div className="mentor-profile-form-section">
                            {(localFormData.experience || []).map((exp, index) => (
                                <div key={index} className="mentor-profile-form-group">
                                    <div className="mentor-profile-form-row">
                                        <div>
                                            <label>Job Title</label>
                                            <input 
                                                type="text"
                                                value={exp.title}
                                                onChange={(e) => handleInputChange('experience', 'title', e.target.value, index)}
                                                className="mentor-profile-form-input"
                                            />
                                        </div>
                                        <div>
                                            <label>Organization</label>
                                            <input 
                                                type="text"
                                                value={exp.organization}
                                                onChange={(e) => handleInputChange('experience', 'organization', e.target.value, index)}
                                                className="mentor-profile-form-input"
                                            />
                                        </div>
                                    </div>
                                    <div className="mentor-profile-form-row">
                                        <div>
                                            <label>Duration</label>
                                            <input 
                                                type="text"
                                                value={exp.duration}
                                                onChange={(e) => handleInputChange('experience', 'duration', e.target.value, index)}
                                                className="mentor-profile-form-input"
                                            />
                                        </div>
                                        <div>
                                            <label>Industry</label>
                                            <input 
                                                type="text"
                                                value={exp.industry}
                                                onChange={(e) => handleInputChange('experience', 'industry', e.target.value, index)}
                                                className="mentor-profile-form-input"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label>Description</label>
                                        <textarea 
                                            value={exp.description}
                                            onChange={(e) => handleInputChange('experience', 'description', e.target.value, index)}
                                            className="mentor-profile-form-input"
                                            rows={3}
                                        />
                                    </div>
                                    <div>
                                        <label>Achievements (one per line)</label>
                                        <textarea 
                                            value={exp.achievements.join('\n')}
                                            onChange={(e) => handleInputChange('experience', 'achievements', e.target.value.split('\n'), index)}
                                            className="mentor-profile-form-input"
                                            rows={3}
                                        />
                                    </div>
                                    <button 
                                        className="mentor-profile-delete-button"
                                        onClick={() => handleRemoveItem('experience', index)}
                                    >
                                        <FaTrash /> Remove Experience
                                    </button>
                                </div>
                            ))}
                            <button 
                                className="mentor-profile-add-button"
                                onClick={() => handleAddItem('experience')}
                            >
                                <FaPlus /> Add Experience
                            </button>
                        </div>
                    )}

                    {activeTab === 'education' && (
                        <div className="mentor-profile-form-section">
                            {(localFormData.education || []).map((edu, index) => (
                                <div key={index} className="mentor-profile-form-group">
                                    <div className="mentor-profile-form-row">
                                        <div>
                                            <label>Degree</label>
                                            <input 
                                                type="text"
                                                value={edu.degree}
                                                onChange={(e) => handleInputChange('education', 'degree', e.target.value, index)}
                                                className="mentor-profile-form-input"
                                            />
                                        </div>
                                        <div>
                                            <label>University</label>
                                            <input 
                                                type="text"
                                                value={edu.university}
                                                onChange={(e) => handleInputChange('education', 'university', e.target.value, index)}
                                                className="mentor-profile-form-input"
                                            />
                                        </div>
                                    </div>
                                    <div className="mentor-profile-form-row">
                                        <div>
                                            <label>Year</label>
                                            <input 
                                                type="text"
                                                value={edu.year}
                                                onChange={(e) => handleInputChange('education', 'year', e.target.value, index)}
                                                className="mentor-profile-form-input"
                                            />
                                        </div>
                                        <div>
                                            <label>Recognition</label>
                                            <input 
                                                type="text"
                                                value={edu.recognition}
                                                onChange={(e) => handleInputChange('education', 'recognition', e.target.value, index)}
                                                className="mentor-profile-form-input"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label>Description</label>
                                        <textarea 
                                            value={edu.description}
                                            onChange={(e) => handleInputChange('education', 'description', e.target.value, index)}
                                            className="mentor-profile-form-input"
                                            rows={3}
                                        />
                                    </div>
                                    <button 
                                        className="mentor-profile-delete-button"
                                        onClick={() => handleRemoveItem('education', index)}
                                    >
                                        <FaTrash /> Remove Education
                                    </button>
                                </div>
                            ))}
                            <button 
                                className="mentor-profile-add-button"
                                onClick={() => handleAddItem('education')}
                            >
                                <FaPlus /> Add Education
                            </button>
                        </div>
                    )}

                    {activeTab === 'certifications' && (
                        <div className="mentor-profile-form-section">
                            {localFormData.certifications.map((cert, index) => (
                                <div key={index} className="mentor-profile-form-row">
                                    <div className="mentor-profile-form-group">
                                        <label>Certification</label>
                                        <input 
                                            type="text"
                                            value={cert.name}
                                            onChange={(e) => handleInputChange('certifications', 'name', e.target.value, index)}
                                            className="mentor-profile-form-input"
                                        />
                                    </div>
                                    <div className="mentor-profile-form-group">
                                        <label>Issuer</label>
                                        <input 
                                            type="text"
                                            value={cert.issuer}
                                            onChange={(e) => handleInputChange('certifications', 'issuer', e.target.value, index)}
                                            className="mentor-profile-form-input"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <div className="mentor-profile-modal-footer">
                    <button 
                        className="mentor-profile-modal-button mentor-profile-modal-cancel"
                        onClick={onClose}
                    >
                        Cancel
                    </button>
                    <button 
                        className="mentor-profile-modal-button mentor-profile-modal-save"
                        onClick={handleSave}
                    >
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    );
};

const MentorProfile = () => {
    const [personalInfo, setPersonalInfo] = useState({
        name: "John Doe",
        title: "Senior Software Engineer",
        bio: "Passionate about teaching and mentoring in software development with 10+ years of experience",
        expertise: ["Web Development", "Machine Learning", "Cloud Architecture"],
        location: "San Francisco, CA",
        languages: ["English", "Spanish"],
        email: "john.doe@example.com",
        linkedin: "linkedin.com/in/johndoe",
        github: "github.com/johndoe",
        website: "johndoe.dev"
    });

    const [skills, setSkills] = useState([
        { name: "React.js", level: 95 },
        { name: "Node.js", level: 90 },
        { name: "Python", level: 85 },
        { name: "Machine Learning", level: 80 },
        { name: "AWS", level: 88 }
    ]);

    const [certifications, setCertifications] = useState([
        { name: "AWS Certified Solutions Architect", issuer: "Amazon", year: 2023 },
        { name: "Google Cloud Professional", issuer: "Google", year: 2022 },
        { name: "Machine Learning Specialist", issuer: "Stanford", year: 2021 }
    ]);

    const [achievements, setAchievements] = useState([
        { icon: <FaMedal />, title: "Top Mentor 2024", description: "Ranked #1 in Web Development" },
        { icon: <FaTrophy />, title: "500+ Hours", description: "Mentoring milestone achieved" },
        { icon: <FaStar />, title: "Perfect Score", description: "Maintained 5.0 rating for 3 months" }
    ]);

    const [education] = useState([
        {
            degree: "Master of Science in Computer Science",
            university: "Stanford University",
            year: "2018-2020",
            recognition: "Graduated with Distinction",
            description: "Specialized in Machine Learning and Artificial Intelligence"
        },
        {
            degree: "Bachelor of Engineering in Software Engineering",
            university: "MIT",
            year: "2014-2018",
            recognition: "Dean's List",
            description: "Focus on Software Architecture and Systems Design"
        }
    ]);

    const [experience] = useState([
        {
            title: "Senior Software Engineer",
            organization: "Google",
            duration: "2020-Present",
            industry: "Technology",
            location: "Mountain View, CA",
            description: "Leading a team of 8 engineers in developing cloud-native applications",
            achievements: [
                "Improved system performance by 40%",
                "Implemented ML-based recommendation engine",
                "Mentored 12 junior developers"
            ]
        },
        {
            title: "Software Engineer",
            organization: "Microsoft",
            duration: "2018-2020",
            industry: "Technology",
            location: "Seattle, WA",
            description: "Full-stack development for Azure cloud services",
            achievements: [
                "Developed key features for Azure DevOps",
                "Reduced deployment time by 60%",
                "Led cross-functional team projects"
            ]
        }
    ]);

    const [showEditModal, setShowEditModal] = useState(false);
    const [coverImage, setCoverImage] = useState('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2940&auto=format&fit=crop');
    const [avatarImage, setAvatarImage] = useState('https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2940&auto=format&fit=crop');

    const handleSaveProfile = (updatedData) => {
        setPersonalInfo(updatedData.personalInfo);
        setSkills(updatedData.skills);
        setCertifications(updatedData.certifications);
        setAchievements(updatedData.achievements);
    };

    const handleCoverImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setCoverImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleAvatarChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setAvatarImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="mentor-profile">
            <div className="mentor-profile-header">
                <div 
                    className="mentor-profile-cover"
                    style={{ 
                        backgroundImage: `url(${coverImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        height: '240px'
                    }}
                >
                    <div className="mentor-profile-cover-overlay">
                        <label className="mentor-profile-edit-cover">
                            <input 
                                type="file" 
                                accept="image/*" 
                                onChange={handleCoverImageChange}
                                style={{ display: 'none' }}
                            />
                            <FaCamera /> Edit Cover
                        </label>
                    </div>
                </div>
                <div className="mentor-profile-header-content">
                    <div className="mentor-profile-avatar">
                        <img src={avatarImage} alt="Mentor" />
                        <label className="mentor-profile-edit-avatar">
                            <input 
                                type="file" 
                                accept="image/*" 
                                onChange={handleAvatarChange}
                                style={{ display: 'none' }}
                            />
                            <FaCamera />
                        </label>
                    </div>
                    <div className="mentor-profile-info">
                        <h1>{personalInfo.name}</h1>
                        <h2>{personalInfo.title}</h2>
                        <div className="mentor-profile-tags">
                            {personalInfo.expertise.map((exp, index) => (
                                <span key={index} className="mentor-profile-tag">{exp}</span>
                            ))}
                        </div>
                    </div>
                    <button 
                        className="mentor-profile-edit-button"
                        onClick={() => setShowEditModal(true)}
                    >
                        <FaEdit /> Edit Profile
                    </button>
                </div>
            </div>

            <div className="mentor-profile-content">
                <div className="mentor-profile-card">
                    <div className="mentor-profile-card-header">
                        <h3><FaUser /> About Me</h3>
                    </div>
                    <div className="mentor-profile-about">
                        <p>{personalInfo.bio}</p>
                        <div className="mentor-profile-details">
                            <div className="mentor-profile-detail-item">
                                <FaGlobe /> {personalInfo.location}
                            </div>
                            <div className="mentor-profile-detail-item">
                                <FaGraduationCap /> {personalInfo.languages.join(", ")}
                            </div>
                            <div className="mentor-profile-social">
                                <a href={personalInfo.linkedin} className="mentor-profile-social-link">
                                    <FaLinkedin />
                                </a>
                                <a href={personalInfo.github} className="mentor-profile-social-link">
                                    <FaGithub />
                                </a>
                                <a href={personalInfo.website} className="mentor-profile-social-link">
                                    <FaGlobe />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mentor-profile-card">
                    <div className="mentor-profile-card-header">
                        <h3><FaCode /> Skills & Expertise</h3>
                    </div>
                    <div className="mentor-profile-skills">
                        {skills.map((skill, index) => (
                            <div key={index} className="mentor-profile-skill-item">
                                <div className="mentor-profile-skill-header">
                                    <span>{skill.name}</span>
                                    <span>{skill.level}%</span>
                                </div>
                                <div className="mentor-profile-skill-bar">
                                    <div 
                                        className="mentor-profile-skill-progress"
                                        style={{ width: `${skill.level}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mentor-profile-card">
                    <div className="mentor-profile-card-header">
                        <h3><FaCertificate /> Certifications</h3>
                    </div>
                    <div className="mentor-profile-certifications">
                        {certifications.map((cert, index) => (
                            <div key={index} className="mentor-profile-certification-item">
                                <FaCheckCircle className="mentor-profile-certification-icon" />
                                <div className="mentor-profile-certification-content">
                                    <h4>{cert.name}</h4>
                                    <p>{cert.issuer} • {cert.year}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mentor-profile-card">
                    <div className="mentor-profile-card-header">
                        <h3><FaTrophy /> Achievements</h3>
                    </div>
                    <div className="mentor-profile-achievements">
                        {achievements.map((achievement, index) => (
                            <div key={index} className="mentor-profile-achievement-item">
                                <div className="mentor-profile-achievement-icon">
                                    {achievement.icon}
                                </div>
                                <div className="mentor-profile-achievement-content">
                                    <h4>{achievement.title}</h4>
                                    <p>{achievement.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mentor-profile-card">
                    <div className="mentor-profile-card-header">
                        <h3><FaBriefcase /> Professional Experience</h3>
                    </div>
                    <div className="mentor-profile-experience">
                        {experience.map((exp, index) => (
                            <div key={index} className="mentor-profile-experience-item">
                                <div className="experience-header">
                                    <h4>{exp.title}</h4>
                                    <span className="experience-duration">{exp.duration}</span>
                                </div>
                                <div className="experience-subheader">
                                    <span className="organization">{exp.organization}</span>
                                    <span className="location">{exp.location}</span>
                                </div>
                                <div className="experience-tags">
                                    <span className="industry-tag">{exp.industry}</span>
                                </div>
                                <p className="experience-description">{exp.description}</p>
                                <ul className="experience-achievements">
                                    {exp.achievements.map((achievement, i) => (
                                        <li key={i}>{achievement}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mentor-profile-card">
                    <div className="mentor-profile-card-header">
                        <h3><FaGraduationCap /> Education</h3>
                    </div>
                    <div className="mentor-profile-education">
                        {education.map((edu, index) => (
                            <div key={index} className="mentor-profile-education-item">
                                <div className="education-header">
                                    <h4>{edu.degree}</h4>
                                    <span className="education-year">{edu.year}</span>
                                </div>
                                <div className="education-subheader">
                                    <span className="university">{edu.university}</span>
                                </div>
                                {edu.recognition && (
                                    <div className="education-recognition">
                                        <FaMedal className="recognition-icon" />
                                        <span>{edu.recognition}</span>
                                    </div>
                                )}
                                <p className="education-description">{edu.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <EditProfileModal 
                show={showEditModal} 
                onClose={() => setShowEditModal(false)}
                initialData={{
                    personalInfo,
                    skills,
                    certifications,
                    achievements,
                    experience,
                    education
                }}
                onSave={handleSaveProfile}
            />
        </div>
    );
};

export default MentorProfile;