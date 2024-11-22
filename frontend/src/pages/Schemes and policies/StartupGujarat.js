import { useState } from 'react';
import startupGujBanner from '../../assets/images/StartupGUJ.jpg'; // Adjust filename as needed

// Sample data for ministries and departments
const ministryData = {
  "MINISTRY OF ELECTRONICS AND INFORMATION TECHNOLOGY (MEITY)": [
    "Department of Electronics",
    "Department of Information Technology",
    "Digital India Corporation"
  ],
  "MINISTRY OF COMMUNICATIONS": [
    "Department of Telecommunications",
    "Department of Posts",
    "Digital Communications Commission"
  ],
  "NITI AAYOG": [
    "Development Monitoring",
    "Innovation and Entrepreneurship",
    "Policy Research"
  ],
  "CENTRAL BANK OF INDIA": [
    "Banking Regulation",
    "Financial Services",
    "Monetary Policy"
  ]
};

// Add this sample data at the top with your other constants
const schemesData = [
  {
    id: 1,
    title: "Electronics Hardware Technology Park Scheme",
    ministry: "MINISTRY OF ELECTRONICS AND INFORMATION TECHNOLOGY (MEITY)",
    department: "Department of Electronics",
    sector: "Hardware",
    brief: "The STP (Software Technology Park) and EHTP (Electronic Hardware Technology Park) schemes are initiatives aimed at promoting software and electronics hardware development for exports in India. These schemes provide specific benefits and eligibility criteria for interested units.",
    benefitTags: ["Regulatory"],
    tenure: "Active",
    benefits: [
      "The scheme offers benefits such as duty-free import of capital goods and raw materials, simplified customs procedures, and tax incentives for eligible businesses.",
      "Units operating under the STP and EHTP schemes are entitled to import specified goods duty-free, reducing operational costs and promoting the development of software and electronics hardware for exports.",
      "For specific details about the scheme and its benefits, please refer to the official document."
    ],
    applicationLink: "https://taxindiaonline.com/RC2/pdfdocs/cm/cm22d.pdf"
  },
  {
    id: 2,
    title: "Digital India Innovation Fund",
    ministry: "MINISTRY OF ELECTRONICS AND INFORMATION TECHNOLOGY (MEITY)",
    department: "Digital India Corporation",
    sector: "Technology",
    brief: "Funding support for innovative digital solutions and technologies that address various sectors including healthcare, education, and agriculture.",
    benefitTags: ["Financial", "Mentorship"],
    tenure: "Active",
    benefits: [
      "Seed funding up to INR 50 lakhs for early-stage startups",
      "Technical mentorship from industry experts",
      "Access to government market opportunities"
    ],
    applicationLink: "https://dic.gov.in/innovation-fund"
  },
  {
    id: 3,
    title: "5G Innovation Program",
    ministry: "MINISTRY OF COMMUNICATIONS",
    department: "Department of Telecommunications",
    sector: "Telecommunications",
    brief: "Support for startups working on 5G technologies and use cases to build India's capabilities in 5G and beyond.",
    benefitTags: ["Technical", "Infrastructure"],
    tenure: "Active",
    benefits: [
      "Access to 5G test beds for product development",
      "Technical collaboration with telecom partners",
      "Pilot implementation opportunities"
    ],
    applicationLink: "https://dot.gov.in/5g-innovation"
  },
  {
    id: 4,
    title: "Postal Innovation Project",
    ministry: "MINISTRY OF COMMUNICATIONS",
    department: "Department of Posts",
    sector: "Logistics",
    brief: "Modernization of postal services through technological innovations and startup partnerships.",
    benefitTags: ["Infrastructure", "Market Access"],
    tenure: "Active",
    benefits: [
      "Access to postal network infrastructure",
      "Pilot testing in postal operations",
      "Integration with national logistics network"
    ],
    applicationLink: "https://www.indiapost.gov.in/innovation"
  },
  {
    id: 5,
    title: "NITI Innovation Challenge",
    ministry: "NITI AAYOG",
    department: "Innovation and Entrepreneurship",
    sector: "Multiple Sectors",
    brief: "Platform for identifying and supporting innovative solutions to address national development challenges.",
    benefitTags: ["Financial", "Recognition"],
    tenure: "Active",
    benefits: [
      "Prize money up to INR 1 crore",
      "National level recognition",
      "Implementation support from government departments"
    ],
    applicationLink: "https://niti.gov.in/innovation-challenge"
  },
  {
    id: 6,
    title: "Digital Payment Security Initiative",
    ministry: "CENTRAL BANK OF INDIA",
    department: "Financial Services",
    sector: "Fintech",
    brief: "Program to enhance security in digital payment systems through innovative technological solutions.",
    benefitTags: ["Technical", "Regulatory"],
    tenure: "Active",
    benefits: [
      "Regulatory sandbox access",
      "Integration with UPI ecosystem",
      "Security testing infrastructure"
    ],
    applicationLink: "https://rbi.org.in/fintech-initiatives"
  },
  {
    id: 7,
    title: "AI Research Grant Program",
    ministry: "MINISTRY OF ELECTRONICS AND INFORMATION TECHNOLOGY (MEITY)",
    department: "Department of Information Technology",
    sector: "Artificial Intelligence",
    brief: "Research funding for artificial intelligence projects with potential commercial applications.",
    benefitTags: ["Financial", "Research"],
    tenure: "Active",
    benefits: [
      "Research grants up to INR 2 crores",
      "Access to government datasets",
      "Industry collaboration opportunities"
    ],
    applicationLink: "https://meity.gov.in/ai-research"
  },
  {
    id: 8,
    title: "Rural Tech Innovation Fund",
    ministry: "NITI AAYOG",
    department: "Development Monitoring",
    sector: "Rural Development",
    brief: "Supporting technology solutions specifically designed for rural India's development challenges.",
    benefitTags: ["Financial", "Implementation"],
    tenure: "Active",
    benefits: [
      "Funding support for rural pilots",
      "Connection with rural networks",
      "Implementation support in villages"
    ],
    applicationLink: "https://niti.gov.in/rural-innovation"
  },
  {
    id: 9,
    title: "Blockchain Innovation Program",
    ministry: "MINISTRY OF ELECTRONICS AND INFORMATION TECHNOLOGY (MEITY)",
    department: "Department of Information Technology",
    sector: "Blockchain",
    brief: "Support for startups developing blockchain solutions for government and enterprise applications.",
    benefitTags: ["Technical", "Infrastructure"],
    tenure: "Active",
    benefits: [
      "Access to government blockchain platform",
      "Technical consultation support",
      "Pilot opportunities with government departments"
    ],
    applicationLink: "https://meity.gov.in/blockchain"
  },
  {
    id: 10,
    title: "Green Technology Fund",
    ministry: "NITI AAYOG",
    department: "Policy Research",
    sector: "Clean Technology",
    brief: "Funding support for startups working on environmental sustainability and clean technology solutions.",
    benefitTags: ["Financial", "Sustainability"],
    tenure: "Active",
    benefits: [
      "Green technology grants",
      "Environmental impact assessment support",
      "Connection with sustainability networks"
    ],
    applicationLink: "https://niti.gov.in/green-tech"
  }
];

function StartupGujarat() {
  const [showFilter, setShowFilter] = useState(false);
  const [selectedMinistry, setSelectedMinistry] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedId, setExpandedId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Number of items to show per page

  const handleFilterClick = () => {
    setShowFilter(!showFilter);
  };

  const handleReset = () => {
    setSelectedMinistry('');
    setSelectedDepartment('');
    setSearchTerm('');
  };

  // Filter schemes based on selected ministry and department
  const filteredSchemes = schemesData.filter(scheme => {
    const matchesMinistry = !selectedMinistry || scheme.ministry === selectedMinistry;
    const matchesDepartment = !selectedDepartment || scheme.department === selectedDepartment;
    const matchesSearch = !searchTerm || 
      scheme.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      scheme.brief.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesMinistry && matchesDepartment && matchesSearch;
  });

  // Calculate pagination values
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentSchemes = filteredSchemes.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredSchemes.length / itemsPerPage);

  // Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    // Scroll to top of schemes section
    document.getElementById('schemes-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const renderPagination = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5; // Number of page buttons to show
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    // Adjust start page if we're near the end
    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
        marginTop: '30px'
      }}>
        {/* Previous button */}
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          style={{
            background: currentPage === 1 ? '#e0e0e0' : '#7B68EE',
            color: 'white',
            border: 'none',
            padding: '8px 16px',
            borderRadius: '5px',
            cursor: currentPage === 1 ? 'default' : 'pointer',
            opacity: currentPage === 1 ? 0.5 : 1
          }}
        >
          ←
        </button>

        {/* First page */}
        {startPage > 1 && (
          <>
            <button
              onClick={() => paginate(1)}
              style={{
                background: 'white',
                color: '#7B68EE',
                border: '1px solid #7B68EE',
                padding: '8px 16px',
                borderRadius: '5px',
                cursor: 'pointer'
              }}
            >
              1
            </button>
            {startPage > 2 && <span>...</span>}
          </>
        )}

        {/* Page numbers */}
        {Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i).map(number => (
          <button
            key={number}
            onClick={() => paginate(number)}
            style={{
              background: currentPage === number ? '#7B68EE' : 'white',
              color: currentPage === number ? 'white' : '#7B68EE',
              border: '1px solid #7B68EE',
              padding: '8px 16px',
              borderRadius: '5px',
              cursor: 'pointer',
              fontWeight: currentPage === number ? '600' : '400'
            }}
          >
            {number}
          </button>
        ))}

        {/* Last page */}
        {endPage < totalPages && (
          <>
            {endPage < totalPages - 1 && <span>...</span>}
            <button
              onClick={() => paginate(totalPages)}
              style={{
                background: 'white',
                color: '#7B68EE',
                border: '1px solid #7B68EE',
                padding: '8px 16px',
                borderRadius: '5px',
                cursor: 'pointer'
              }}
            >
              {totalPages}
            </button>
          </>
        )}

        {/* Next button */}
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
          style={{
            background: currentPage === totalPages ? '#e0e0e0' : '#7B68EE',
            color: 'white',
            border: 'none',
            padding: '8px 16px',
            borderRadius: '5px',
            cursor: currentPage === totalPages ? 'default' : 'pointer',
            opacity: currentPage === totalPages ? 0.5 : 1
          }}
        >
          →
        </button>
      </div>
    );
  };

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const renderSchemes = () => {
    return (
      <>
        <div id="schemes-section" style={{ 
          display: 'grid', 
          gap: '20px', 
          marginBottom: '30px' 
        }}>
          {currentSchemes.map(scheme => (
            <div key={scheme.id} style={{
              background: 'white',
              padding: '30px',
              borderRadius: '10px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              borderLeft: '5px solid #7B68EE'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start'
              }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  color: '#7B68EE',
                  marginBottom: '15px'
                }}>
                  {scheme.title}
                </h3>
                <button style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer'
                }}>
                  <span style={{
                    fontSize: '1.5rem',
                    color: '#7B68EE'
                  }}>📋</span>
                </button>
              </div>

              {/* Always visible content */}
              <div style={{ marginBottom: '15px' }}>
                <strong style={{ color: '#333' }}>Ministry:</strong>
                <p>{scheme.ministry}</p>
              </div>

              <div style={{ marginBottom: '15px' }}>
                <strong style={{ color: '#333' }}>Key Sector Covered:</strong>
                <p>{scheme.sector}</p>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <strong style={{ color: '#333' }}>Brief:</strong>
                <p style={{ 
                  lineHeight: '1.6',
                  display: '-webkit-box',
                  WebkitLineClamp: expandedId === scheme.id ? 'unset' : '2',
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden'
                }}>
                  {scheme.brief}
                </p>
              </div>

              {/* Expandable content */}
              {expandedId === scheme.id && (
                <>
                  {scheme.benefitTags && scheme.benefitTags.length > 0 && (
                    <div style={{ marginBottom: '15px' }}>
                      <strong style={{ color: '#333' }}>Benefit Tags:</strong>
                      <div style={{ display: 'flex', gap: '10px', marginTop: '5px' }}>
                        {scheme.benefitTags.map((tag, index) => (
                          <span key={index} style={{
                            background: '#7B68EE20',
                            color: '#7B68EE',
                            padding: '4px 12px',
                            borderRadius: '15px',
                            fontSize: '0.9rem'
                          }}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {scheme.tenure && (
                    <div style={{ marginBottom: '15px' }}>
                      <strong style={{ color: '#333' }}>Tenure:</strong>
                      <p style={{
                        color: scheme.tenure === 'Active' ? '#4CAF50' : '#FF5722',
                        fontWeight: '500'
                      }}>
                        {scheme.tenure}
                      </p>
                    </div>
                  )}

                  {scheme.benefits && scheme.benefits.length > 0 && (
                    <div style={{ marginBottom: '20px' }}>
                      <strong style={{ color: '#333' }}>Benefits:</strong>
                      <ul style={{ 
                        listStyle: 'disc',
                        paddingLeft: '20px',
                        marginTop: '10px'
                      }}>
                        {scheme.benefits.map((benefit, index) => (
                          <li key={index} style={{ marginBottom: '8px', lineHeight: '1.6' }}>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {scheme.applicationLink && (
                    <div>
                      <strong style={{ color: '#333' }}>Application Link:</strong>
                      <a 
                        href={scheme.applicationLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          color: '#0088cc',
                          textDecoration: 'none',
                          display: 'block',
                          marginTop: '5px'
                        }}
                      >
                        Click here to apply
                      </a>
                    </div>
                  )}
                </>
              )}

              {/* Read More / Show Less button */}
              <button
                onClick={() => toggleExpand(scheme.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#7B68EE',
                  cursor: 'pointer',
                  fontWeight: '500',
                  marginTop: '15px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px'
                }}
              >
                {expandedId === scheme.id ? 'Show Less' : 'Read More'}
                <span style={{ 
                  transform: expandedId === scheme.id ? 'rotate(180deg)' : 'none',
                  transition: 'transform 0.3s ease'
                }}>
                  ▼
                </span>
              </button>
            </div>
          ))}
        </div>

        {renderPagination()}
      </>
    );
  };

  return (
    <div style={{ 
      position: 'relative',
      padding: '20px',
      background: '#fff',
      margin: '20px',
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'relative',
        width: '100%',
        height: '300px',
        display: 'flex',
        alignItems: 'center',
        background: '#fff',
        padding: '20px'
      }}>
        {/* Purple decorative circles */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '150px',
          height: '150px',
          background: '#7B68EE',
          borderRadius: '50%',
          opacity: '0.2',
          transform: 'translate(-50%, -50%)'
        }} />
        <div style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          width: '200px',
          height: '200px',
          background: '#7B68EE',
          borderRadius: '50%',
          opacity: '0.2',
          transform: 'translate(30%, 30%)'
        }} />

        {/* Left side content */}
        <div style={{
          flex: '1',
          zIndex: '1',
          padding: '20px'
        }}>
          <h1 style={{
            fontSize: '3.5rem',
            fontWeight: 'bold',
            color: '#333',
            marginBottom: '10px'
          }}>
            STARTUP
            <br />
            <span style={{ color: '#7B68EE' }}>GUJARAT</span>
          </h1>
          <p style={{
            fontSize: '1.2rem',
            color: '#e91e63',
            fontStyle: 'italic'
          }}>
            Empowering Innovation and Entrepreneurship
          </p>
        </div>

        {/* Right side image */}
        <div style={{
          flex: '1',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: '1'
        }}>
          <img 
            src={startupGujBanner}
            alt="Startup Gujarat Illustration"
            style={{
              maxWidth: '100%',
              height: 'auto',
              objectFit: 'contain',
              border: 'none',
              outline: 'none',
              boxShadow: 'none'
            }}
          />
        </div>
      </div>

      {/* Overview Section */}
      <div style={{
        padding: '40px 20px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {/* Overview Title */}
        <div style={{
          textAlign: 'center',
          marginBottom: '50px',
          position: 'relative'
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            color: '#2a3f90',
            position: 'relative',
            display: 'inline-block',
            marginBottom: '20px'
          }}>
            Overview
          </h2>
          <div style={{
            width: '80px',
            height: '4px',
            background: '#7B68EE',
            margin: '0 auto'
          }} />
        </div>

        <div style={{
          background: 'white',
          padding: '30px',
          borderRadius: '10px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          lineHeight: '1.6'
        }}>
          <p style={{ marginBottom: '20px', fontSize: '1.1rem' }}>
            Welcome to the Central Government Schemes section of the Gujarat Portal. This section provides a list of all the schemes initiated by the Government of India to support and promote Indian startups. The information has been collated from public sources.
          </p>
          <p style={{ fontSize: '1.1rem' }}>
            The Startup Gujarat scheme is a flagship initiative by the Government of Gujarat aimed at fostering entrepreneurship and innovation in the state. It provides comprehensive support through funding, mentorship, infrastructure, and networking opportunities to help transform innovative ideas into successful businesses.
          </p>
        </div>
      </div>

      {/* Schemes & Initiatives Section */}
      <div style={{
        padding: '40px 20px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div style={{
          textAlign: 'center',
          marginBottom: '50px',
          position: 'relative'
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            color: '#2a3f90',
            position: 'relative',
            display: 'inline-block',
            marginBottom: '20px'
          }}>
            Schemes & Initiatives
          </h2>
          <div style={{
            width: '80px',
            height: '4px',
            background: '#7B68EE',
            margin: '0 auto'
          }} />
        </div>

        {/* Search and Filter Section */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          marginBottom: '30px'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '20px'
          }}>
            {/* Filter Button */}
            <div 
              onClick={handleFilterClick}
              style={{
                flex: '0 0 300px',
                background: 'white',
                padding: '15px 20px',
                borderRadius: '10px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                cursor: 'pointer'
              }}
            >
              <span style={{ fontSize: '1.2rem' }}>☰</span>
              <span style={{ fontSize: '1.1rem', color: '#666' }}>Filter</span>
            </div>

            {/* Search Bar and Buttons */}
            <div style={{
              flex: '1',
              display: 'flex',
              gap: '15px'
            }}>
              <input
                type="text"
                placeholder="Enter Keyword Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  flex: '1',
                  padding: '15px 20px',
                  borderRadius: '10px',
                  border: '1px solid #ddd',
                  fontSize: '1.1rem',
                  outline: 'none'
                }}
              />
              
              <button style={{
                padding: '15px 40px',
                background: '#0088cc',
                color: 'white',
                border: 'none',
                borderRadius: '10px',
                cursor: 'pointer',
                fontSize: '1.1rem'
              }}>
                <span>🔍</span>
              </button>

              <button 
                onClick={handleReset}
                style={{
                  padding: '15px 40px',
                  background: '#ff5722',
                  color: 'white',
                  border: 'none',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  fontSize: '1.1rem'
                }}
              >
                Reset
              </button>
            </div>
          </div>

          {/* Filter Panel */}
          {showFilter && (
            <div style={{
              background: 'white',
              padding: '20px',
              borderRadius: '10px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}>
              <div style={{
                display: 'flex',
                gap: '20px'
              }}>
                {/* Ministry Select */}
                <div style={{ flex: 1 }}>
                  <label style={{ 
                    display: 'block', 
                    marginBottom: '10px',
                    color: '#666',
                    fontSize: '0.9rem'
                  }}>
                    Select Ministry
                  </label>
                  <select
                    value={selectedMinistry}
                    onChange={(e) => {
                      setSelectedMinistry(e.target.value);
                      setSelectedDepartment('');
                    }}
                    style={{
                      width: '100%',
                      padding: '10px',
                      borderRadius: '5px',
                      border: '1px solid #ddd',
                      fontSize: '1rem'
                    }}
                  >
                    <option value="">All Ministries</option>
                    {Object.keys(ministryData).map((ministry) => (
                      <option key={ministry} value={ministry}>
                        {ministry}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Department Select */}
                <div style={{ flex: 1 }}>
                  <label style={{ 
                    display: 'block', 
                    marginBottom: '10px',
                    color: '#666',
                    fontSize: '0.9rem'
                  }}>
                    Select Department
                  </label>
                  <select
                    value={selectedDepartment}
                    onChange={(e) => setSelectedDepartment(e.target.value)}
                    disabled={!selectedMinistry}
                    style={{
                      width: '100%',
                      padding: '10px',
                      borderRadius: '5px',
                      border: '1px solid #ddd',
                      fontSize: '1rem'
                    }}
                  >
                    <option value="">All Departments</option>
                    {selectedMinistry && ministryData[selectedMinistry].map((dept) => (
                      <option key={dept} value={dept}>
                        {dept}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Scheme Card */}
        <div style={{ marginTop: '30px' }}>
          {renderSchemes()}
        </div>
      </div>
    </div>    
  );
}

export default StartupGujarat;
