import React from "react";
import styled from "styled-components";
import { FaMapMarkerAlt, FaGlobe, FaPhone, FaEnvelope, FaIndustry, FaClock, FaTrophy, FaUsers, FaChartLine } from "react-icons/fa";

// Styled Components
const ProfileContainer = styled.div`
  padding: 32px;
  max-width: 1400px;
  margin: 0 auto;
  background: linear-gradient(135deg, #e0eafc, #cfdef3);
  min-height: 100vh;
`;

const HeaderSection = styled.div`
  background: rgba(255, 255, 255, 0.9);
  border-radius: 20px;
  padding: 32px;
  margin-bottom: 24px;
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.2);
  display: flex;
  gap: 32px;
  align-items: center;
  position: relative;
  z-index: 1;
`;

const CompanyLogo = styled.div`
  width: 140px;
  height: 140px;
  border-radius: 16px;
  overflow: hidden;
  border: 2px solid #e9ecef;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  background: white;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
    
    &:hover {
      transform: scale(1.05);
    }
  }
`;

const CompanyInfo = styled.div`
  flex: 1;

  h1 {
    font-size: 32px;
    background: linear-gradient(135deg, #1a365d 0%, #2c5282 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 12px;
    font-weight: 700;
  }

  .engagement-level {
    display: inline-block;
    padding: 8px 16px;
    background: linear-gradient(135deg, #4158D0 0%, #C850C0 100%);
    color: white;
    border-radius: 25px;
    font-size: 14px;
    margin-bottom: 16px;
    font-weight: 500;
    letter-spacing: 0.5px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  }

  .company-meta {
    display: flex;
    gap: 32px;
    color: #4a5568;
    font-size: 14px;

    span {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 6px 12px;
      background: rgba(255, 255, 255, 0.8);
      border-radius: 8px;
      transition: all 0.3s ease;
      
      &:hover {
        background: rgba(255, 255, 255, 1);
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
      }

      svg {
        color: #4158D0;
      }
    }
  }
`;

const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 28px;
  margin-bottom: 32px;
  position: relative;
  z-index: 1;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const MetricCard = styled.div`
  background: ${props => props.gradient || 'linear-gradient(135deg, #4158D0 0%, #C850C0 100%)'};
  border-radius: 20px;
  padding: 28px;
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.15);
  text-align: center;
  color: white;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 60%);
    transform: rotate(45deg);
    transition: all 0.6s ease;
  }
  
  &:hover {
    transform: translateY(-4px) scale(1.02);
    box-shadow: 0 12px 40px rgba(31, 38, 135, 0.2);
    
    &:before {
      transform: rotate(45deg) translate(50%, 50%);
    }
  }

  .metric-value {
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 12px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    position: relative;
    
    &:after {
      content: '';
      position: absolute;
      bottom: -6px;
      left: 50%;
      transform: translateX(-50%);
      width: 40px;
      height: 2px;
      background: rgba(255, 255, 255, 0.5);
      border-radius: 2px;
    }
  }

  .metric-label {
    font-size: 15px;
    opacity: 0.9;
    font-weight: 500;
    letter-spacing: 0.5px;
  }
`;

const GridSection = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
  margin-bottom: 32px;
  position: relative;
  z-index: 1;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const InfoCard = styled.div`
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  padding: 28px;
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.1);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, #4158D0, #C850C0);
  }
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 40px rgba(31, 38, 135, 0.15);
  }

  h3 {
    color: #1a365d;
    font-size: 20px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    gap: 12px;
    font-weight: 600;
    position: relative;

    svg {
      color: #4158D0;
      font-size: 24px;
      background: linear-gradient(135deg, #4158D0 0%, #C850C0 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  .content {
    color: #4a5568;
    font-size: 15px;
    line-height: 1.8;

    p {
      padding: 8px 0;
      display: flex;
      align-items: center;
      gap: 12px;
      transition: all 0.2s ease;
      border-radius: 8px;
      margin: 4px 0;
      
      &:hover {
        background: rgba(65, 88, 208, 0.05);
        padding-left: 12px;
      }
      
      &:before {
        content: '•';
        color: #4158D0;
        font-weight: bold;
        font-size: 20px;
        background: linear-gradient(135deg, #4158D0 0%, #C850C0 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
  }
`;

const StartupProfile = () => {
  const metricGradients = [
    'linear-gradient(135deg, #6B73FF 0%, #000DFF 100%)',
    'linear-gradient(135deg, #FF6B6B 0%, #FF2525 100%)',
    'linear-gradient(135deg, #36D1DC 0%, #5B86E5 100%)',
    'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)'
  ];

  return (
    <ProfileContainer>
      <HeaderSection>
        <CompanyLogo>
          <img src="/company-logo.png" alt="Company Logo" />
        </CompanyLogo>
        <CompanyInfo>
          <h1>DWICHAKRA SERVICES PRIVATE LIMITED</h1>
          <div className="engagement-level">ENGAGEMENT LEVEL: EXPLORER</div>
          <div className="company-meta">
            <span><FaPhone /> 0000000000</span>
            <span><FaEnvelope /> XXXXXXX@gmail.com</span>
            <span><FaGlobe /> www.dwichakra.com</span>
            <span><FaClock /> Active since: 29/11/2024</span>
          </div>
        </CompanyInfo>
      </HeaderSection>

      <MetricsGrid>
        <MetricCard gradient={metricGradients[0]}>
          <div className="metric-value">8 Years</div>
          <div className="metric-label">Operating Experience</div>
        </MetricCard>
        <MetricCard gradient={metricGradients[1]}>
          <div className="metric-value">50+</div>
          <div className="metric-label">Team Members</div>
        </MetricCard>
        <MetricCard gradient={metricGradients[2]}>
          <div className="metric-value">₹10Cr+</div>
          <div className="metric-label">Revenue Generated</div>
        </MetricCard>
        <MetricCard gradient={metricGradients[3]}>
          <div className="metric-value">15+</div>
          <div className="metric-label">Patents Filed</div>
        </MetricCard>
      </MetricsGrid>

      <GridSection>
        <InfoCard>
          <h3><FaIndustry /> Industry Focus</h3>
          <div className="content">
            <p>Internet of Things</p>
            <p>Consumer Internet</p>
            <p>E-commerce</p>
          </div>
        </InfoCard>

        <InfoCard>
          <h3><FaMapMarkerAlt /> Location</h3>
          <div className="content">
            <p>Bengaluru Urban, Karnataka</p>
            <p>Headquarters & R&D Center</p>
          </div>
        </InfoCard>

        <InfoCard>
          <h3><FaUsers /> Service Areas</h3>
          <div className="content">
            <p>Consumer Internet</p>
            <p>E-commerce</p>
            <p>Mobile Solutions</p>
            <p>Online Aggregator</p>
            <p>Subscription Commerce</p>
          </div>
        </InfoCard>

        <InfoCard>
          <h3><FaChartLine /> Stage & Validation</h3>
          <div className="content">
            <p>Current Stage: Validation</p>
            <p>Market Validation: Completed</p>
            <p>Product Validation: In Progress</p>
          </div>
        </InfoCard>

        <InfoCard>
          <h3><FaTrophy /> Achievements</h3>
          <div className="content">
            <p>• Best IoT Startup Award 2023</p>
            <p>• Featured in Top 50 Emerging Startups</p>
            <p>• ISO 27001 Certified</p>
          </div>
        </InfoCard>

        <InfoCard>
          <h3><FaGlobe /> Market Presence</h3>
          <div className="content">
            <p>• Pan India Operations</p>
            <p>• International Markets: 5+</p>
            <p>• Active Customers: 100,000+</p>
          </div>
        </InfoCard>
      </GridSection>

      <InfoCard>
        <h3>About Company</h3>
        <div className="content">
          <p>Dwichakra represents a paradigm shift in the Indian two-wheeler industry, offering an integrated ecosystem that caters to every aspect of a rider's journey. Founded in 2016, the company has rapidly grown to become a leading player in the automotive technology space.</p>
          <br />
          <p>Our innovative solutions combine IoT technology with consumer-centric services to revolutionize the two-wheeler experience. From smart vehicle management to comprehensive rider services, we're building the future of urban mobility.</p>
        </div>
      </InfoCard>
    </ProfileContainer>
  );
};

export default StartupProfile;
