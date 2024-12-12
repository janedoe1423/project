import React, { useState } from 'react';
import { Container, Button, Form, Table, InputGroup } from 'react-bootstrap';
import '../../components/css/WomenEntrepreneurship.css';
import womenFoundersImage from '../../assets/images/women-founders-banner.png';

const WomenEntrepreneurship = () => {
    const [activeGovernment, setActiveGovernment] = useState('central');
    const [searchTerm, setSearchTerm] = useState('');

    const centralSchemes = [
        {
            scheme: "Stand Up India",
            ministry: "Ministry of Finance",
            department: "Department of Financial Services",
            benefit: "Loans between ₹10 lakh and ₹1 crore for women entrepreneurs",
            eligibility: "Women entrepreneurs above 18 years starting new enterprises",
            website: "https://www.standupmitra.in"
        },
        {
            scheme: "MUDRA Yojana",
            ministry: "Ministry of Finance",
            department: "Micro Units Development & Refinance Agency",
            benefit: "Loans up to ₹10 lakh for micro enterprises",
            eligibility: "Women entrepreneurs running small businesses",
            website: "https://www.mudra.org.in"
        },
        {
            scheme: "Mahila Udyam Nidhi",
            ministry: "Ministry of Micro, Small & Medium Enterprises",
            department: "MSME Development",
            benefit: "Soft loans up to ₹10 lakhs to set up new small and tiny enterprises",
            eligibility: "Women entrepreneurs between 18-45 years",
            website: "https://msme.gov.in"
        },
        {
            scheme: "Stree Shakti Package",
            ministry: "State Bank of India",
            department: "SBI Women Entrepreneurship",
            benefit: "0.05% concession on interest rate for loans above ₹2 lakhs",
            eligibility: "Women entrepreneurs with majority ownership in business",
            website: "https://www.sbi.co.in"
        },
        {
            scheme: "Dena Shakti Scheme",
            ministry: "Ministry of Finance",
            department: "Dena Bank",
            benefit: "Additional interest concession of 0.25% on loans",
            eligibility: "Women entrepreneurs in agriculture, manufacturing, micro-credit",
            website: "https://www.denabank.com"
        },
        {
            scheme: "TREAD Scheme",
            ministry: "Ministry of MSME",
            department: "Development Commissioner (MSME)",
            benefit: "Up to 30% of total project cost as government grant",
            eligibility: "NGOs/Women Self Help Groups",
            website: "https://msme.gov.in"
        },
        {
            scheme: "Mahila E-haat",
            ministry: "Ministry of Women & Child Development",
            department: "Women Empowerment Cell",
            benefit: "Online marketing platform for women entrepreneurs",
            eligibility: "Women entrepreneurs, Self Help Groups",
            website: "https://mahilaehaat-rmk.gov.in"
        },
        {
            scheme: "Bharatiya Mahila Bank Business Loan",
            ministry: "Ministry of Finance",
            department: "Bharatiya Mahila Bank",
            benefit: "Collateral-free loans up to ₹20 lakhs",
            eligibility: "Women entrepreneurs with business plan",
            website: "https://www.sbi.co.in"
        },
        {
            scheme: "Cent Kalyani Scheme",
            ministry: "Central Bank of India",
            department: "Women Entrepreneurship Cell",
            benefit: "Loans up to ₹100 lakhs for women",
            eligibility: "Women entrepreneurs in small business sectors",
            website: "https://www.centralbankofindia.co.in"
        },
        {
            scheme: "SIDBI Mahila Udyam Nidhi",
            ministry: "SIDBI",
            department: "Women Entrepreneurship Development",
            benefit: "Loans up to ₹25 lakhs at preferential rates",
            eligibility: "Small scale women entrepreneurs",
            website: "https://www.sidbi.in"
        }
    ];

    // Updated State Government Schemes
    const stateSchemes = [
        {
            scheme: "Maharashtra State Women Entrepreneurship Development",
            ministry: "Industries Department",
            department: "MSME Development",
            benefit: "30% subsidy on capital investment",
            eligibility: "Women entrepreneurs in Maharashtra",
            website: "https://www.maharashtra.gov.in"
        },
        {
            scheme: "Kerala Women Entrepreneurs Scheme",
            ministry: "Kerala Financial Corporation",
            department: "Women Development",
            benefit: "Loans up to ₹25 lakhs at 7% interest",
            eligibility: "Women entrepreneurs in Kerala",
            website: "https://www.kerala.gov.in"
        },
        {
            scheme: "Tamil Nadu Entrepreneur Development Scheme",
            ministry: "TANSIDCO",
            department: "Women Entrepreneurship Wing",
            benefit: "25% capital subsidy for eligible projects",
            eligibility: "Women entrepreneurs in Tamil Nadu",
            website: "https://www.tansidco.tn.gov.in"
        },
        {
            scheme: "Karnataka Mahila Udyami Yojane",
            ministry: "Karnataka State Women's Development Corporation",
            department: "Women Entrepreneurship Cell",
            benefit: "Subsidized loans up to ₹5 lakhs",
            eligibility: "Women entrepreneurs in Karnataka",
            website: "https://www.karnataka.gov.in"
        },
        {
            scheme: "Gujarat Women Start-up Program",
            ministry: "Industries Commissionerate",
            department: "Women Enterprise Development",
            benefit: "Seed funding up to ₹15 lakhs",
            eligibility: "Women-led startups in Gujarat",
            website: "https://www.gujarat.gov.in"
        },
        {
            scheme: "Telangana Stree Nidhi",
            ministry: "Telangana State Women Co-operative Development Corporation",
            department: "Women Entrepreneurship Development",
            benefit: "Loans up to ₹25 lakhs at preferential rates",
            eligibility: "Women entrepreneurs in Telangana",
            website: "https://www.telangana.gov.in"
        }
    ];

    const currentSchemes = activeGovernment === 'central' ? centralSchemes : stateSchemes;
    
    const filteredSchemes = currentSchemes.filter(scheme =>
        Object.values(scheme).some(value =>
            value.toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    // Add state policies data
    const statesPolicies = [
        {
            state: "Gujarat",
            image: "/assets/images/gujarat-statue.jpg",
            description: "The state offers monthly sustenance allowance to women founders post meeting the eligibility criteria.",
            readMoreLink: "#"
        },
        {
            state: "Andaman and Nicobar Islands",
            image: "/assets/images/andaman.jpg",
            description: "Special incentives and support for women entrepreneurs in island territories.",
            readMoreLink: "#"
        },
        {
            state: "Andhra Pradesh",
            image: "/assets/images/andhra-coast.jpg",
            description: "Comprehensive support system for women-led startups including financial aid.",
            readMoreLink: "#"
        },
        
    ];

    // Add this blogs data near your other data constants
    const womenBlogs = [
        {
            date: "15th September, 2020",
            title: "Lessons for Entrepreneurship by Women in HealthTech",
            author: "Geetha Majumnath | Shilpa Malik",
            image: "/assets/images/healthtech-blog.png"
        },
        {
            date: "26th March, 2020",
            title: "Extending Support to Navigate the COVID-19",
            author: "Sairee Chahal, Founder - CEO | SHEROES",
            image: "/assets/images/sheroes-blog.png"
        },
        {
            date: "14th April, 2020",
            title: "Bare Necessaties",
            author: "Sahar Mansoor | founder & CEO, Bare Necessities",
            image: "/assets/images/bare-necessities-blog.png"
        }
    ];

    return (
        <Container className="my-5">
            {/* Hero Section */}
            <div className="hero-section">
                <img src={womenFoundersImage} alt="Women Entrepreneurs" className="hero-image" />
            </div>
             {/* Introduction Section */}
        <div className="intro-section">
            <h1 className="intro-title">Women Entrepreneurship in India</h1>
            <div className="intro-content">
                <p>
                    The increasing presence of women as entrepreneurs has led to significant business and economic growth in the country. 
                    Women-owned business enterprises are playing a prominent role in society by generating employment opportunities in the country, 
                    bringing in demographic shifts and inspiring the next generation of women founders.
                </p>
                <p>
                    With a vision to promote the sustainable development of women entrepreneurs for balanced growth in the country, 
                    Startup India is committed towards strengthening women entrepreneurship in India through initiatives, schemes, 
                    creation of enabling networks and communities and activating partnerships among diverse stakeholders in the startup ecosystem.
                </p>
            </div>
        </div>

            {/* State Policies Section - Moved above the table */}
            <section className="state-policies-section">
                <h2 className="section-title">States with Startup Policies for Women</h2>
                
                <div className="states-grid">
                    {statesPolicies.map((state, index) => (
                        <div key={index} className="state-card">
                            <div className="state-image-container">
                                <img src={state.image} alt={state.state} className="state-image" />
                                <h3 className="state-name">{state.state}</h3>
                            </div>
                            <div className="state-content">
                                <p>{state.description}</p>
                                <a href={state.readMoreLink} className="read-more-link">Read more</a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Government Schemes Section */}
            <div className="government-buttons">
                <Button
                    className={`btn-government ${activeGovernment === 'central' ? 'active' : ''}`}
                    onClick={() => setActiveGovernment('central')}
                >
                    Central Government
                </Button>
                <Button
                    className={`btn-government ${activeGovernment === 'state' ? 'active' : ''}`}
                    onClick={() => setActiveGovernment('state')}
                >
                    State Government
                </Button>
            </div>

            {/* Search Section */}
            <div className="search-section">
                <Form.Group>
                    <InputGroup>
                        <Form.Control
                            type="text"
                            placeholder="Search schemes..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </InputGroup>
                </Form.Group>
            </div>

            {/* Schemes Table */}
            <div className="schemes-table">
                <Table responsive>
                    <thead>
                        <tr>
                            <th>Schemes</th>
                            <th>Ministry</th>
                            <th>Department</th>
                            <th>Benefit</th>
                            <th>Eligibility Criteria</th>
                            <th>External Website</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredSchemes.map((scheme, index) => (
                            <tr key={index}>
                                <td>{scheme.scheme}</td>
                                <td>{scheme.ministry}</td>
                                <td>{scheme.department}</td>
                                <td>{scheme.benefit}</td>
                                <td>{scheme.eligibility}</td>
                                <td>
                                    <a 
                                        href={scheme.website} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="website-link"
                                    >
                                        Visit Website
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>

            {/* Blogs Section */}
            <section className="blogs-section">
                <h2 className="section-title">Blogs by Women</h2>
                
                <div className="blogs-grid">
                    {womenBlogs.map((blog, index) => (
                        <div key={index} className="blog-card">
                            <div className="blog-image-container">
                                <img src={blog.image} alt={blog.title} className="blog-image" />
                            </div>
                            <div className="blog-content">
                                <div className="blog-date">{blog.date}</div>
                                <h3 className="blog-title">{blog.title}</h3>
                                <div className="blog-author">{blog.author}</div>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="see-all-blogs">
                    <Button className="see-all-button">SEE ALL BLOGS</Button>
                </div>
            </section>
        </Container>
    );
};

export default WomenEntrepreneurship;
