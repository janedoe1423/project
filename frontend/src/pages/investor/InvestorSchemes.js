import React, { useState } from "react";
import "./investorschemes.css";

const InvestorSchemes = () => {
  const [selectedScheme, setSelectedScheme] = useState(null);
  const [showRegistration, setShowRegistration] = useState(false);

  const investorSchemes = [
    {
      id: 1,
      name: "Angel Investment Program",
      minInvestment: "₹25 Lakhs",
      returns: "18-25% Expected ROI",
      duration: "3-5 years",
      description: "Connect with promising early-stage startups across technology sectors",
      highlights: [
        "Direct equity participation",
        "Quarterly performance reviews",
        "Exit opportunity through secondary sales",
        "Co-investment opportunities"
      ],
      benefits: [
        "Priority access to vetted startups",
        "Portfolio diversification across sectors",
        "Professional due diligence support",
        "Regular performance monitoring",
        "Networking events with founders",
        "Quarterly investor meetings",
        "Annual startup showcase events",
        "Access to deal flow pipeline"
      ],
      eligibility: [
        "Minimum net worth of ₹2 Crore",
        "Investment experience preferred",
        "Accredited investor status",
        "Ability to hold investments for 3-5 years",
        "Understanding of startup ecosystem",
        "Willingness to mentor portfolio companies"
      ],
      investmentTerms: {
        minTicketSize: "₹25 Lakhs",
        maxTicketSize: "₹1 Crore",
        expectedReturns: "18-25% IRR",
        exitTimeline: "3-5 years",
        investmentInstrument: "Compulsory Convertible Preference Shares (CCPS)",
        valuationCap: "Based on startup stage and traction",
        rightOfFirstRefusal: "Yes",
        proRataRights: "Yes",
        boardObserverRights: "For investments above ₹50 Lakhs"
      },
      process: [
        {
          step: "Submit investor profile",
          description: "Complete detailed investor profile including investment preferences and accreditation status"
        },
        {
          step: "Complete accreditation",
          description: "Verify investor status and complete KYC process"
        },
        {
          step: "Access startup portfolio",
          description: "Review curated startup deals and detailed investment memorandums"
        },
        {
          step: "Due diligence",
          description: "Participate in due diligence process with professional team"
        },
        {
          step: "Investment commitment",
          description: "Sign investment agreements and transfer funds"
        },
        {
          step: "Portfolio management",
          description: "Regular updates and portfolio monitoring through dashboard"
        }
      ],
      sectors: [
        {
          name: "Technology",
          focus: ["SaaS", "Deep Tech", "AI/ML", "Blockchain"]
        },
        {
          name: "Healthcare",
          focus: ["HealthTech", "BioTech", "Medical Devices"]
        },
        {
          name: "Fintech",
          focus: ["Payment Solutions", "WealthTech", "InsurTech"]
        },
        {
          name: "E-commerce",
          focus: ["D2C Brands", "Marketplaces", "Supply Chain"]
        }
      ],
      documents: {
        required: [
          "PAN Card",
          "Aadhar Card",
          "Net Worth Certificate",
          "Bank Statements (6 months)",
          "Investment Declaration",
          "Accredited Investor Certificate"
        ],
        additional: [
          "Previous Investment Portfolio",
          "Tax Returns (2 years)",
          "Company Registration (if investing through entity)",
          "Board Resolution (if applicable)"
        ]
      },
      support: {
        dedicated: "Personal Investment Manager",
        portal: "24/7 Investor Dashboard Access",
        reporting: "Monthly Performance Reports",
        events: [
          "Quarterly Investor Meets",
          "Annual Startup Showcase",
          "Networking Events",
          "Expert Sessions"
        ]
      },
      risks: [
        "High-risk investment in early-stage companies",
        "Limited liquidity options",
        "Potential for capital loss",
        "Long investment horizon required",
        "Market and execution risks"
      ],
      taxBenefits: [
        "Section 80CCG benefits available",
        "Long-term capital gains advantages",
        "Angel Investment tax benefits"
      ],
      exitOptions: [
        "Secondary Sales",
        "Company Buyback",
        "M&A Opportunities",
        "IPO (in rare cases)"
      ]
    },
    {
      id: 2,
      name: "Venture Capital Partnership",
      minInvestment: "₹1 Crore",
      returns: "20-30% Target IRR",
      duration: "5-7 years",
      description: "Join as a limited partner in our venture capital fund focusing on growth-stage startups",
      highlights: [
        "Professional fund management",
        "Diversified portfolio approach",
        "Quarterly distributions",
        "Strategic co-investment rights"
      ],
      benefits: [
        "Professional fund management",
        "Diversified startup portfolio",
        "Quarterly performance reports",
        "Networking events",
        "Access to deal flow",
        "Co-investment opportunities",
        "Industry expertise access",
        "Portfolio company benefits"
      ],
      eligibility: [
        "Minimum net worth of ₹5 Crore",
        "Long-term investment horizon",
        "Understanding of VC investments",
        "Accredited investor status",
        "Commitment to fund tenure",
        "Professional investment experience preferred"
      ],
      process: [
        {
          step: "Initial consultation",
          description: "Detailed discussion about investment strategy and fund objectives"
        },
        {
          step: "Due diligence",
          description: "Review of fund documents and track record"
        },
        {
          step: "Partnership agreement",
          description: "Legal documentation and investment terms finalization"
        },
        {
          step: "Capital commitment",
          description: "Formal commitment and initial capital call"
        },
        {
          step: "Portfolio access",
          description: "Integration into fund operations and portfolio monitoring"
        }
      ],
      sectors: [
        {
          name: "Deep Tech",
          focus: ["AI/ML", "Blockchain", "IoT", "Quantum Computing"]
        },
        {
          name: "SaaS",
          focus: ["Enterprise Software", "B2B Solutions", "Cloud Infrastructure"]
        },
        {
          name: "Clean Energy",
          focus: ["Renewable Energy", "Energy Storage", "Clean Tech"]
        },
        {
          name: "Digital Health",
          focus: ["Telemedicine", "Health Tech", "Digital Therapeutics"]
        }
      ],
      documents: {
        required: [
          "Identity Proof",
          "PAN Card",
          "Net Worth Certificate",
          "Bank Statements",
          "Investment Declaration",
          "KYC Documents"
        ],
        additional: [
          "Financial Statements",
          "Investment History",
          "Partnership Deed",
          "Tax Returns"
        ]
      },
      support: {
        dedicated: "Fund Relationship Manager",
        portal: "Investor Portal Access",
        reporting: "Quarterly Financial Reports",
        events: [
          "Annual LP Meeting",
          "Quarterly Updates",
          "Portfolio Company Showcases",
          "Industry Networking Events"
        ]
      },
      risks: [
        "Illiquid investment",
        "Long-term capital lock-in",
        "Market risks",
        "Fund management risks",
        "Portfolio company risks"
      ],
      taxBenefits: [
        "Pass-through taxation",
        "Long-term capital gains benefits",
        "Investment deductions under specific sections"
      ],
      exitOptions: [
        "Fund tenure completion",
        "Secondary sale to other LPs",
        "GP-led secondary process",
        "Portfolio company exits"
      ]
    }
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    investmentCapacity: "",
    investmentExperience: "",
    preferredSectors: "",
    message: ""
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="investor-schemes-container">
      <div className="header-section">
        <h1>Investment Opportunities</h1>
        <p>Join our exclusive network of investors and access premium startup investments</p>
      </div>

      <div className="schemes-grid">
        {investorSchemes.map((scheme) => (
          <div key={scheme.id} className="scheme-card">
            <div className="scheme-header">
              <h3>{scheme.name}</h3>
              <div className="investment-tag">Min: {scheme.minInvestment}</div>
            </div>
            <div className="scheme-details">
              <p className="returns">{scheme.returns}</p>
              <p className="duration">{scheme.duration}</p>
              <p className="description">{scheme.description}</p>
            </div>
            <div className="scheme-actions">
              <button 
                className="view-details-btn"
                onClick={() => setSelectedScheme(scheme)}
              >
                View Details
              </button>
              <button 
                className="register-interest-btn"
                onClick={() => {
                  setSelectedScheme(scheme);
                  setShowRegistration(true);
                }}
              >
                Register Interest
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedScheme && !showRegistration && (
        <div className="popup-overlay" onClick={() => setSelectedScheme(null)}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <div className="popup-header">
              <h2>{selectedScheme.name}</h2>
            </div>
            
            <div className="popup-body">
              <div className="info-section">
                <h3>Investment Overview</h3>
                <div className="info-grid">
                  <div className="info-item">
                    <span>Minimum Investment</span>
                    <strong>{selectedScheme.minInvestment}</strong>
                  </div>
                  <div className="info-item">
                    <span>Expected Returns</span>
                    <strong>{selectedScheme.returns}</strong>
                  </div>
                  <div className="info-item">
                    <span>Duration</span>
                    <strong>{selectedScheme.duration}</strong>
                  </div>
                </div>
                <p className="description">{selectedScheme.description}</p>
              </div>

              {selectedScheme.highlights && selectedScheme.highlights.length > 0 && (
                <div className="details-section">
                  <h3>Key Highlights</h3>
                  <ul className="highlights-list">
                    {selectedScheme.highlights.map((highlight, index) => (
                      <li key={index}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedScheme.benefits && selectedScheme.benefits.length > 0 && (
                <div className="details-section">
                  <h3>Benefits</h3>
                  <ul className="benefits-list">
                    {selectedScheme.benefits.map((benefit, index) => (
                      <li key={index}>{benefit}</li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedScheme.eligibility && selectedScheme.eligibility.length > 0 && (
                <div className="details-section">
                  <h3>Eligibility Criteria</h3>
                  <ul className="eligibility-list">
                    {selectedScheme.eligibility.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedScheme.process && selectedScheme.process.length > 0 && (
                <div className="details-section">
                  <h3>Investment Process</h3>
                  <div className="process-steps">
                    {selectedScheme.process.map((step, index) => (
                      <div key={index} className="process-step">
                        <div className="step-number">{index + 1}</div>
                        <div className="step-content">
                          <h4>{typeof step === 'object' ? step.step : step}</h4>
                          {typeof step === 'object' && step.description && (
                            <p>{step.description}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {selectedScheme.sectors && selectedScheme.sectors.length > 0 && (
                <div className="details-section">
                  <h3>Sector Focus</h3>
                  <div className="sectors-grid">
                    {selectedScheme.sectors.map((sector, index) => (
                      <div key={index} className="sector-card">
                        <h4>{typeof sector === 'object' ? sector.name : sector}</h4>
                        {sector.focus && sector.focus.length > 0 && (
                          <ul>
                            {sector.focus.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {selectedScheme.documents && (
                <div className="details-section">
                  <h3>Required Documents</h3>
                  <div className="documents-container">
                    {selectedScheme.documents.required && (
                      <div className="doc-section">
                        <h4>Mandatory Documents</h4>
                        <ul>
                          {selectedScheme.documents.required.map((doc, index) => (
                            <li key={index}>{doc}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {selectedScheme.documents.additional && (
                      <div className="doc-section">
                        <h4>Additional Documents</h4>
                        <ul>
                          {selectedScheme.documents.additional.map((doc, index) => (
                            <li key={index}>{doc}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {selectedScheme.support && (
                <div className="details-section">
                  <h3>Investor Support</h3>
                  <div className="support-details">
                    {selectedScheme.support.dedicated && (
                      <p><strong>Dedicated Support:</strong> {selectedScheme.support.dedicated}</p>
                    )}
                    {selectedScheme.support.portal && (
                      <p><strong>Portal Access:</strong> {selectedScheme.support.portal}</p>
                    )}
                    {selectedScheme.support.reporting && (
                      <p><strong>Reporting:</strong> {selectedScheme.support.reporting}</p>
                    )}
                    {selectedScheme.support.events && selectedScheme.support.events.length > 0 && (
                      <>
                        <h4>Events & Networking</h4>
                        <ul>
                          {selectedScheme.support.events.map((event, index) => (
                            <li key={index}>{event}</li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                </div>
              )}

              {selectedScheme.risks && selectedScheme.risks.length > 0 && (
                <div className="details-section risk-section">
                  <h3>Risk Factors</h3>
                  <ul className="risk-list">
                    {selectedScheme.risks.map((risk, index) => (
                      <li key={index}>{risk}</li>
                    ))}
                  </ul>
                </div>
              )}

              {(selectedScheme.taxBenefits || selectedScheme.exitOptions) && (
                <div className="details-section">
                  <h3>Tax Benefits & Exit Options</h3>
                  <div className="benefits-grid">
                    {selectedScheme.taxBenefits && selectedScheme.taxBenefits.length > 0 && (
                      <div className="benefits-section">
                        <h4>Tax Benefits</h4>
                        <ul>
                          {selectedScheme.taxBenefits.map((benefit, index) => (
                            <li key={index}>{benefit}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {selectedScheme.exitOptions && selectedScheme.exitOptions.length > 0 && (
                      <div className="benefits-section">
                        <h4>Exit Options</h4>
                        <ul>
                          {selectedScheme.exitOptions.map((option, index) => (
                            <li key={index}>{option}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {showRegistration && (
        <div className="popup-overlay" onClick={() => setShowRegistration(false)}>
          <div className="popup-content registration-form" onClick={(e) => e.stopPropagation()}>
            <h2>Register Interest in {selectedScheme.name}</h2>
            <form className="interest-form">
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Investment Capacity</label>
                <select
                  name="investmentCapacity"
                  value={formData.investmentCapacity}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Range</option>
                  <option value="25-50L">₹25-50 Lakhs</option>
                  <option value="50L-1Cr">₹50 Lakhs - 1 Crore</option>
                  <option value="1Cr+">Above ₹1 Crore</option>
                </select>
              </div>
              <div className="form-group">
                <label>Investment Experience</label>
                <select
                  name="investmentExperience"
                  value={formData.investmentExperience}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Experience</option>
                  <option value="novice">New to Investing</option>
                  <option value="intermediate">Some Experience</option>
                  <option value="experienced">Experienced Investor</option>
                </select>
              </div>
              <div className="form-group">
                <label>Message (Optional)</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                ></textarea>
              </div>
              <div className="form-actions">
                <button type="submit" className="submit-btn">Submit Interest</button>
                <button 
                  type="button" 
                  className="cancel-btn"
                  onClick={() => setShowRegistration(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default InvestorSchemes;
