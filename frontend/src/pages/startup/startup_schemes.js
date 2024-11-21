import React, { useState } from "react";
import "./startup_schemes.css";

const StartupSchemes = () => {
  const [selectedScheme, setSelectedScheme] = useState(null);

  // Sample data - replace with your actual data
  const schemes = [
    {
      id: 1,
      name: "Startup India Seed Fund",
      status: "Accepted",
      appliedDate: "2024-01-15",
      amount: "₹25 Lakhs",
      description: "Financial assistance for early-stage startups",
      category: "Government Scheme",
      sector: "Technology",
      duration: "12 months",
      deadline: "2024-12-31",
      eligibility: [
        "DPIIT registered startups",
        "Incorporated less than 2 years ago",
        "Annual turnover less than ₹1 Crore"
      ],
      benefits: [
        "Seed funding up to ₹25 Lakhs",
        "Mentorship support",
        "Network access",
        "Incubation facilities"
      ],
      documents: [
        "Company Registration Certificate",
        "PAN Card",
        "Business Plan",
        "Financial Projections"
      ],
      timeline: "4-6 weeks for processing",
      contactPerson: "Mr. Rahul Kumar",
      contactEmail: "rahul.kumar@startup.gov.in",
      details: "The Startup India Seed Fund Scheme aims to provide financial assistance..."
    },
    {
      id: 2,
      name: "MSME Technology Innovation Scheme",
      status: "Pending",
      appliedDate: "2024-02-20",
      amount: "₹15 Lakhs",
      description: "Support for innovative technology projects in manufacturing",
      category: "Government Scheme",
      sector: "Manufacturing",
      duration: "18 months",
      deadline: "2024-11-30",
      eligibility: [
        "MSME registered companies",
        "Minimum 2 years of operation",
        "Innovation in manufacturing sector"
      ],
      benefits: [
        "Financial support up to ₹15 Lakhs",
        "Technical mentorship",
        "Industry partnerships",
        "Patent filing support"
      ],
      documents: [
        "MSME Registration",
        "Project Proposal",
        "Past Performance Records",
        "Innovation Details"
      ],
      timeline: "6-8 weeks",
      contactPerson: "Mrs. Priya Singh",
      contactEmail: "priya.singh@msme.gov.in"
    },
    {
      id: 3,
      name: "Digital India Startup Grant",
      status: "Accepted",
      appliedDate: "2024-01-30",
      amount: "₹20 Lakhs",
      description: "Supporting digital transformation initiatives",
      category: "Government Grant",
      sector: "Digital Technology",
      duration: "12 months",
      deadline: "2024-10-15",
      eligibility: [
        "Tech startups less than 5 years old",
        "Digital solution focus",
        "Revenue under ₹5 Crore"
      ],
      benefits: [
        "Direct funding support",
        "Cloud credits worth ₹5 Lakhs",
        "Digital marketing support",
        "Government marketplace access"
      ],
      documents: [
        "Company Profile",
        "Digital Solution Documentation",
        "Team Structure",
        "Market Analysis"
      ],
      timeline: "3-4 weeks",
      contactPerson: "Mr. Arun Joshi",
      contactEmail: "arun.joshi@digitalindia.gov.in"
    },
    {
      id: 4,
      name: "Green Energy Innovation Fund",
      status: "Pending",
      appliedDate: "2024-03-05",
      amount: "₹30 Lakhs",
      description: "Supporting clean energy and sustainability projects",
      category: "Private Sector Grant",
      sector: "Clean Energy",
      duration: "24 months",
      deadline: "2024-12-31",
      eligibility: [
        "Clean energy focus",
        "Prototype ready",
        "Environmental impact proof"
      ],
      benefits: [
        "Project funding",
        "Lab testing facilities",
        "Industry connections",
        "International exposure"
      ],
      documents: [
        "Environmental Impact Assessment",
        "Technology Blueprint",
        "Sustainability Metrics",
        "Energy Efficiency Data"
      ],
      timeline: "8-10 weeks",
      contactPerson: "Dr. Sneha Patel",
      contactEmail: "sneha.patel@greeninnovation.org"
    },
    {
      id: 5,
      name: "Women Entrepreneur Fund",
      status: "Accepted",
      appliedDate: "2024-02-10",
      amount: "₹12 Lakhs",
      description: "Empowering women-led startups and businesses",
      category: "Private-Public Partnership",
      sector: "All Sectors",
      duration: "12 months",
      deadline: "2024-09-30",
      eligibility: [
        "Women-owned business",
        "51% female shareholding",
        "Operational for 1+ year"
      ],
      benefits: [
        "Seed funding",
        "Women entrepreneur network",
        "Business skills training",
        "Marketing support"
      ],
      documents: [
        "Ownership Proof",
        "Business Registration",
        "Growth Plan",
        "Team Structure"
      ],
      timeline: "4-5 weeks",
      contactPerson: "Ms. Ritu Sharma",
      contactEmail: "ritu.sharma@wefund.in"
    },
    {
      id: 6,
      name: "AI & ML Innovation Grant",
      status: "Pending",
      appliedDate: "2024-03-15",
      amount: "₹40 Lakhs",
      description: "Supporting artificial intelligence and machine learning projects",
      category: "Corporate Grant",
      sector: "Technology",
      duration: "15 months",
      deadline: "2024-11-15",
      eligibility: [
        "AI/ML focused solution",
        "Working prototype",
        "Technical team in place"
      ],
      benefits: [
        "Development funding",
        "GPU credits worth ₹10 Lakhs",
        "AI expert mentorship",
        "Enterprise client access"
      ],
      documents: [
        "Technical Architecture",
        "AI/ML Model Documentation",
        "Team Credentials",
        "Use Case Analysis"
      ],
      timeline: "6-7 weeks",
      contactPerson: "Mr. Vikram Mehta",
      contactEmail: "vikram.mehta@aiinnovate.in"
    }
  ];

  return (
    <div className="schemes-container">
      <h2 className="schemes-title">Your Startup Schemes</h2>
      
      <div className="schemes-grid">
        {schemes.map((scheme) => (
          <div key={scheme.id} className="scheme-card">
            <div className={`status-badge ${scheme.status.toLowerCase()}`}>
              {scheme.status}
            </div>
            <h3>{scheme.name}</h3>
            <p className="applied-date">Applied: {scheme.appliedDate}</p>
            <p className="amount">Amount: {scheme.amount}</p>
            <p className="description">{scheme.description}</p>
            <button 
              className="details-button"
              onClick={() => setSelectedScheme(scheme)}
            >
              View Details
            </button>
          </div>
        ))}
      </div>

      {selectedScheme && (
        <div className="popup-overlay" onClick={() => setSelectedScheme(null)}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <div className="popup-header">
              <h2>{selectedScheme.name}</h2>
              <div className={`status-badge ${selectedScheme.status.toLowerCase()}`}>
                {selectedScheme.status}
              </div>
            </div>

            <div className="popup-body">
              <div className="popup-section">
                <h3>Basic Information</h3>
                <div className="info-grid">
                  <div className="info-item">
                    <span className="info-label">Category:</span>
                    <span className="info-value">{selectedScheme.category}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Sector:</span>
                    <span className="info-value">{selectedScheme.sector}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Duration:</span>
                    <span className="info-value">{selectedScheme.duration}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Amount:</span>
                    <span className="info-value">{selectedScheme.amount}</span>
                  </div>
                </div>
              </div>

              <div className="popup-section">
                <h3>Eligibility Criteria</h3>
                <ul className="details-list">
                  {selectedScheme.eligibility.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="popup-section">
                <h3>Benefits</h3>
                <ul className="details-list">
                  {selectedScheme.benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </div>

              <div className="popup-section">
                <h3>Required Documents</h3>
                <ul className="details-list">
                  {selectedScheme.documents.map((doc, index) => (
                    <li key={index}>{doc}</li>
                  ))}
                </ul>
              </div>

              <div className="popup-section">
                <h3>Contact Information</h3>
                <div className="contact-info">
                  <p><strong>Contact Person:</strong> {selectedScheme.contactPerson}</p>
                  <p><strong>Email:</strong> {selectedScheme.contactEmail}</p>
                  <p><strong>Processing Timeline:</strong> {selectedScheme.timeline}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StartupSchemes;
