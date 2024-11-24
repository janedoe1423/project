import React from 'react';
import styled from 'styled-components';
import incubatorBanner from '../../assets/images/IncubatorsAcceleratorsBanner.jpg';
import { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const BannerContainer = styled.div`
  position: relative;
  height: 400px;
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url(${incubatorBanner});
    background-size: cover;
    background-position: center;
    filter: blur(8px);
    transform: scale(1.1); // Prevents blur edges
    z-index: 1;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg, 
      rgba(255, 0, 128, 0.8) 0%, 
      rgba(128, 0, 255, 0.8) 100%
    );
    z-index: 2;
  }
`;

const BannerContent = styled.div`
  position: relative;
  z-index: 3;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LeftContent = styled.div`
  flex: 1;
  color: white;
`;

const RightContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
    height: auto;
    border-radius: 10px;
  }
`;

const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: white;
  margin-top: 1rem;
  opacity: 0.9;
`;

const ClearImage = styled.img`
  max-width: 500px;
  height: auto;
  object-fit: contain;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
`;

const OverviewSection = styled.section`
  padding: 60px 20px;
  background: linear-gradient(135deg, rgba(255, 0, 128, 0.05) 0%, rgba(128, 0, 255, 0.05) 100%);
`;

const OverviewContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const CentralSectionTitle = styled.h2`
  text-align: center;
  color: #333;
  font-size: 2.5rem;
  margin-bottom: 40px;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background: linear-gradient(to right, #E91E63, #9C27B0);
    border-radius: 2px;
  }
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  margin-top: 40px;
`;

const ContentCard = styled.div`
  background: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  h3 {
    color: #7b68ee;
    font-size: 1.5rem;
    margin-bottom: 15px;
  }

  p {
    color: #666;
    line-height: 1.6;
  }
`;

const SchemesSection = styled.section`
  padding: 60px 20px;
  background: white;
`;

const SchemeCard = styled.div`
  background: white;
  border-radius: 15px;
  padding: 30px;
  margin-bottom: 30px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  border-left: 5px solid #7b68ee;
  transition: all 0.3s ease;

  &:hover {
    transform: translateX(10px);
    box-shadow: 0 6px 20px rgba(123, 104, 238, 0.15);
  }
`;

const SchemeTitle = styled.h3`
  color: #333;
  font-size: 1.5rem;
  margin-bottom: 15px;
`;

const SchemeDescription = styled.p`
  color: #666;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const SchemeDetails = styled.div`
  display: flex;
  gap: 30px;
  margin-bottom: 20px;
`;

const DetailColumn = styled.div`
  flex: 1;
`;

const DetailItem = styled.div`
  margin-bottom: 10px;
  
  strong {
    color: #7b68ee;
    display: block;
    margin-bottom: 5px;
  }
`;

const ApplyButton = styled.a`
  display: inline-block;
  padding: 12px 25px;
  background: linear-gradient(to right, #ff0080, #7b68ee);
  color: white;
  text-decoration: none;
  border-radius: 25px;
  transition: transform 0.3s ease;
  font-weight: 500;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(123, 104, 238, 0.3);
  }
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  gap: 20px;
`;

const PageButton = styled.button`
  padding: 10px 20px;
  border: none;
  background: ${props => props.active ? 
    'linear-gradient(to right, #ff0080, #7b68ee)' : 
    'white'};
  color: ${props => props.active ? 'white' : '#666'};
  border-radius: 25px;
  cursor: pointer;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(123, 104, 238, 0.2);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`;

const NavigationButton = styled(PageButton)`
  display: flex;
  align-items: center;
  gap: 8px;
`;

// Scheme data array
const schemes = [
  {
    title: "SSIP 2.0 - Student Startup & Innovation Policy",
    description: "SSIP 2.0 aims to support student innovations and startups in Gujarat's universities and educational institutions with financial assistance and mentorship support.",
    financialSupport: "Up to ₹2 Lakhs for Proof of Concept",
    duration: "12 months",
    eligibility: "Students and recent graduates from Gujarat universities",
    deadline: "Rolling applications",
    applyLink: "https://ssipgujarat.in/"
  },
  {
    title: "iCreate Startup Support Program",
    description: "International Centre for Entrepreneurship and Technology (iCreate) provides comprehensive support to technology startups including funding, mentorship, and infrastructure.",
    financialSupport: "Up to ₹50 Lakhs funding support",
    duration: "6-24 months",
    eligibility: "Early-stage technology startups",
    deadline: "Quarterly intake",
    applyLink: "https://www.icreate.org.in/"
  },
  {
    title: "GUSEC Startup Support",
    description: "Gujarat University Startup and Entrepreneurship Council (GUSEC) provides incubation support, mentoring, and seed funding to innovative startups.",
    financialSupport: "Up to ₹10 Lakhs seed funding",
    duration: "18 months",
    eligibility: "Innovative startups from any sector",
    deadline: "Monthly intake",
    applyLink: "https://gusec.edu.in/"
  },
  {
    title: "GTU Innovation Council",
    description: "Gujarat Technological University's Innovation Council supports student and faculty innovations through pre-incubation and incubation support.",
    financialSupport: "Up to ₹5 Lakhs for prototyping",
    duration: "12-24 months",
    eligibility: "GTU students and alumni",
    deadline: "Rolling basis",
    applyLink: "https://gtu.ac.in/gic/"
  },
  {
    title: "Centre for Innovation Incubation & Entrepreneurship (CIIE)",
    description: "CIIE at IIM Ahmedabad provides comprehensive incubation support to innovative startups across various sectors.",
    financialSupport: "Up to ₹25 Lakhs seed funding",
    duration: "24 months",
    eligibility: "Technology and social enterprises",
    deadline: "Bi-annual intake",
    applyLink: "https://ciie.co/"
  },
  {
    title: "Entrepreneurship Development Institute of India (EDII)",
    description: "EDII offers incubation support and entrepreneurship development programs with focus on new enterprise creation.",
    financialSupport: "Up to ₹15 Lakhs grant",
    duration: "12-18 months",
    eligibility: "First-generation entrepreneurs",
    deadline: "Quarterly basis",
    applyLink: "https://www.ediindia.org/"
  },
  {
    title: "PDPU Innovation and Incubation Centre",
    description: "Pandit Deendayal Energy University's incubation centre focuses on energy, engineering and technology startups.",
    financialSupport: "Up to ₹20 Lakhs funding",
    duration: "24 months",
    eligibility: "Energy and technology startups",
    deadline: "Rolling applications",
    applyLink: "https://www.pdpu.ac.in/"
  }
];

const CentralSchemesSection = styled.section`
  padding: 60px 20px;
  background: linear-gradient(135deg, rgba(255, 192, 203, 0.2) 0%, rgba(230, 230, 250, 0.2) 100%);
`;

const SchemesTabs = styled.div`
  display: flex;
  background: white;
  border-radius: 50px;
  padding: 5px;
  margin-bottom: 30px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const SchemeTab = styled.div`
  padding: 15px 30px;
  cursor: pointer;
  border-radius: 50px;
  color: ${props => props.active ? 'white' : '#666'};
  background: ${props => props.active ? 
    'linear-gradient(to right, #ff0080, #7b68ee)' : 
    'transparent'};
  transition: all 0.3s ease;
  font-weight: ${props => props.active ? '600' : '500'};
  text-align: center;
  flex: 1;

  &:hover {
    background: ${props => !props.active && 'rgba(255, 0, 128, 0.1)'};
  }
`;

const SchemeContentWrapper = styled.div`
  background: white;
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.05);
`;

const ObjectiveList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ObjectiveItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 15px;
  color: #666;
  line-height: 1.6;

  &:before {
    content: '✓';
    color: #ff0080;
    font-weight: bold;
    flex-shrink: 0;
    margin-top: 2px;
  }
`;

const centralSchemes = [
  {
    id: 'dst-tbi',
    title: 'DST - TBI',
    objective: [
      'The objective is to promote new technology/knowledge/innovation based startups that create jobs, wealth and business in alignment with national priorities.',
      'To provide a platform for speedy commercialisation of technologies developed by the host institution or by any academic/technical/R&D institution, or by an individual.',
      'To provide cost-effective, value-added services to startups like mentoring, legal, financial, technical, intellectual property related services.'
    ],
    eligibility: [
      'Academic/Research Institutions/Universities',
      'R&D Institutions/Organizations',
      'Start-ups and individual innovators'
    ],
    parameters: [
      'Technical feasibility',
      'Commercial viability',
      'Social impact'
    ],
    funding: 'Up to INR 256.41 lakhs',
    duration: '5 years',
    link: 'https://dst.gov.in/tbi'
  },
  {
    id: 'dbt-bionest',
    title: 'DBT - BioNest',
    objective: [
      'The objective is scaling up biotech incubation in India through BIRAC by supporting new BioNest at Academic/Research hospitals/organisations.',
      'Fostering innovation and entrepreneurship',
      'Strengthening existing incubators attached to academic institutes'
    ],
    eligibility: [
      'Academic/Research Institutions/Universities',
      'R&D Institutions/Organizations',
      'Start-ups and individual innovators'
    ],
    parameters: [
      'Technical feasibility',
      'Commercial viability',
      'Social impact'
    ],
    funding: 'Up to INR 256.41 lakhs',
    duration: '5 years',
    link: 'https://dbt.gov.in/bionest'
  },
  {
    id: 'aim-aic',
    title: 'AIM – AIC',
    objective: [
      'The objective of the scheme is to promote and establish incubation centres in India that would support and encourage start-ups in specific subjects/sectors.',
      'Support in manufacturing, transport, energy, health, education, agriculture, water, sanitation, etc.',
      'Provide necessary mentoring and support to startups.'
    ],
    eligibility: [
      'Academic/Research Institutions/Universities',
      'R&D Institutions/Organizations',
      'Start-ups and individual innovators'
    ],
    parameters: [
      'Technical feasibility',
      'Commercial viability',
      'Social impact'
    ],
    funding: 'Up to INR 256.41 lakhs',
    duration: '5 years',
    link: 'https://aim.gov.in/aic'
  },
  {
    id: 'meity-tide',
    title: 'Meity – TIDE 2.0',
    objective: [
      'The objective of the incubation centres will be to facilitate aspiring entrepreneurs and students to build high quality startups/companies.',
      'TIDE 2.0 Incubation centres will be categorised into 3 distinct groups.',
      'G1C – To offer deep support to startups, including mentoring, capacity building, and seed funding.'
    ],
    eligibility: [
      'Academic/Research Institutions/Universities',
      'R&D Institutions/Organizations',
      'Start-ups and individual innovators'
    ],
    parameters: [
      'Technical feasibility',
      'Commercial viability',
      'Social impact'
    ],
    funding: 'Up to INR 256.41 lakhs',
    duration: '5 years',
    link: 'https://meity.gov.in/tide'
  }
];

const SchemeContainer = styled.div`
  display: flex;
  background: white;
  border-radius: 15px;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.05);
  overflow: hidden;
`;

const SchemeSidebar = styled.div`
  width: 250px;
  background: linear-gradient(135deg, rgba(255, 0, 128, 0.05) 0%, rgba(128, 0, 255, 0.05) 100%);
  padding: 20px 0;
`;

const SidebarItem = styled.div`
  padding: 15px 25px;
  cursor: pointer;
  color: ${props => props.active ? '#fff' : '#666'};
  background: ${props => props.active ? 
    'linear-gradient(to right, #ff0080, #7b68ee)' : 
    'transparent'};
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => props.active ? 
      'linear-gradient(to right, #ff0080, #7b68ee)' : 
      'rgba(255, 0, 128, 0.1)'};
  }
`;

const SchemeContent = styled.div`
  flex: 1;
  padding: 30px;
`;

const SchemeSection = styled.div`
  margin-bottom: 30px;
  padding: 20px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`;

const ContentList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ContentItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  color: #666;
  line-height: 1.6;

  &:before {
    content: '✓';
    color: #ff0080;
    flex-shrink: 0;
  }
`;

const Incubator = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const schemesPerPage = 4;
  const totalPages = Math.ceil(schemes.length / schemesPerPage);
  const [activeScheme, setActiveScheme] = useState('dst-tbi');
  const [activeTab, setActiveTab] = useState('objective');

  const getCurrentSchemes = () => {
    const startIndex = (currentPage - 1) * schemesPerPage;
    const endIndex = startIndex + schemesPerPage;
    return schemes.slice(startIndex, endIndex);
  };

  const renderTabContent = (tab) => {
    return (
      <SchemeContentWrapper>
        {centralSchemes.map((scheme) => (
          <SchemeSection key={scheme.id}>
            <SchemeTitle>{scheme.title}</SchemeTitle>
            <ContentList>
              {Array.isArray(scheme[tab]) ? 
                scheme[tab].map((item, index) => (
                  <ContentItem key={index}>
                    {item}
                  </ContentItem>
                ))
                :
                <ContentItem>{scheme[tab]}</ContentItem>
              }
            </ContentList>
          </SchemeSection>
        ))}
      </SchemeContentWrapper>
    );
  };

  return (
    <>
      <BannerContainer>
        <BannerContent>
          <LeftContent>
            <Title>
              INCUBATORS &<br />
              ACCELERATORS
            </Title>
            <Subtitle>
              Empowering Innovation & Entrepreneurship
            </Subtitle>
          </LeftContent>
          
          <RightContent>
            <ClearImage 
              src={incubatorBanner} 
              alt="Incubators and Accelerators"
            />
          </RightContent>
        </BannerContent>
      </BannerContainer>

      <OverviewSection>
        <OverviewContainer>
          <CentralSectionTitle>
            <h2>Overview</h2>
          </CentralSectionTitle>

          <ContentGrid>
            <ContentCard>
              <h3>What are Incubators?</h3>
              <p>
                Business incubators are organizations that help startup companies and individual entrepreneurs develop their businesses by providing a full-scale range of services starting from management training to office space. The main aim is to help create and grow young businesses by providing them with necessary support and financial and technical services.
              </p>
            </ContentCard>

            <ContentCard>
              <h3>What are Accelerators?</h3>
              <p>
                Business accelerators are programs that give developing companies access to mentorship, investors and other support that help them become stable, self-sufficient businesses. They typically offer access to seed funding, connections, mentoring, educational components and numerous other forms of support.
              </p>
            </ContentCard>

            <ContentCard>
              <h3>Key Benefits</h3>
              <p>
                • Mentorship and guidance from industry experts<br />
                • Access to state-of-the-art infrastructure<br />
                • Networking opportunities with investors<br />
                • Technical and business support services<br />
                • Access to funding opportunities<br />
                • Market connection and visibility
              </p>
            </ContentCard>

            <ContentCard>
              <h3>Who Can Apply?</h3>
              <p>
                • Early-stage startups with innovative ideas<br />
                • Technology-driven ventures<br />
                • Scalable business models<br />
                • Registered entities in Gujarat<br />
                • Startups working in emerging technologies<br />
                • Student entrepreneurs and innovators
              </p>
            </ContentCard>
          </ContentGrid>
        </OverviewContainer>
      </OverviewSection>

      <CentralSchemesSection>
        <OverviewContainer>
          <CentralSectionTitle>
            <h2>Schemes by Central Government Departments</h2>
          </CentralSectionTitle>

          <SchemeContainer>
            <SchemeSidebar>
              <SidebarItem 
                active={activeTab === 'objective'} 
                onClick={() => setActiveTab('objective')}
              >
                Objective
              </SidebarItem>
              <SidebarItem 
                active={activeTab === 'eligibility'} 
                onClick={() => setActiveTab('eligibility')}
              >
                Eligibility Criteria
              </SidebarItem>
              <SidebarItem 
                active={activeTab === 'parameters'} 
                onClick={() => setActiveTab('parameters')}
              >
                Parameters For Evaluation
              </SidebarItem>
              <SidebarItem 
                active={activeTab === 'funding'} 
                onClick={() => setActiveTab('funding')}
              >
                Funding Support
              </SidebarItem>
              <SidebarItem 
                active={activeTab === 'duration'} 
                onClick={() => setActiveTab('duration')}
              >
                Duration Of Support
              </SidebarItem>
              <SidebarItem 
                active={activeTab === 'link'} 
                onClick={() => setActiveTab('link')}
              >
                Link
              </SidebarItem>
            </SchemeSidebar>

            <SchemeContent>
              {renderTabContent(activeTab)}
            </SchemeContent>
          </SchemeContainer>
        </OverviewContainer>
      </CentralSchemesSection>

      <SchemesSection>
        <OverviewContainer>
          <CentralSectionTitle>
            <h2>Gujarat Incubation Schemes</h2>
          </CentralSectionTitle>

          {getCurrentSchemes().map((scheme, index) => (
            <SchemeCard key={index}>
              <SchemeTitle>{scheme.title}</SchemeTitle>
              <SchemeDescription>{scheme.description}</SchemeDescription>
              <SchemeDetails>
                <DetailColumn>
                  <DetailItem>
                    <strong>Financial Support</strong>
                    {scheme.financialSupport}
                  </DetailItem>
                  <DetailItem>
                    <strong>Duration</strong>
                    {scheme.duration}
                  </DetailItem>
                </DetailColumn>
                <DetailColumn>
                  <DetailItem>
                    <strong>Eligibility</strong>
                    {scheme.eligibility}
                  </DetailItem>
                  <DetailItem>
                    <strong>Deadline</strong>
                    {scheme.deadline}
                  </DetailItem>
                </DetailColumn>
              </SchemeDetails>
              <ApplyButton href={scheme.applyLink} target="_blank">
                Apply Now
              </ApplyButton>
            </SchemeCard>
          ))}

          <PaginationContainer>
            <NavigationButton 
              onClick={() => setCurrentPage(prev => prev - 1)}
              disabled={currentPage === 1}
            >
              <FaArrowLeft /> Previous
            </NavigationButton>
            
            {[...Array(totalPages)].map((_, index) => (
              <PageButton
                key={index + 1}
                active={currentPage === index + 1}
                onClick={() => setCurrentPage(index + 1)}
              >
                {index + 1}
              </PageButton>
            ))}
            
            <NavigationButton 
              onClick={() => setCurrentPage(prev => prev + 1)}
              disabled={currentPage === totalPages}
            >
              Next <FaArrowRight />
            </NavigationButton>
          </PaginationContainer>
        </OverviewContainer>
      </SchemesSection>
    </>
  );
};

export default Incubator;
