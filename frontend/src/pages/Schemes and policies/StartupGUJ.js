import React from 'react';
import styled from 'styled-components';

const BannerContainer = styled.div`
  background: linear-gradient(135deg, #6f42c1 0%, #8e44ad 100%);
  padding: 3rem 2rem;
  border-radius: 0 0 20px 20px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

const TextContent = styled.div`
  color: white;
  flex: 1;
`;

const IllustrationContainer = styled.div`
  flex: 2;
  position: relative;
  height: 200px;
  
  svg {
    width: 100%;
    height: 100%;
    filter: brightness(0) invert(1);
    opacity: 0.9;
  }
`;

const Title = styled.h1`
  font-size: 2.8rem;
  margin-bottom: 1rem;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;

const Subtitle = styled.p`
  font-size: 1.3rem;
  margin-bottom: 1.5rem;
  opacity: 0.9;
`;

const GujaratPattern = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0C13.432 0 0 13.432 0 30c0 16.568 13.432 30 30 30 16.568 0 30-13.432 30-30C60 13.432 46.568 0 30 0zm0 54C16.745 54 6 43.255 6 30S16.745 6 30 6s24 10.745 24 24-10.745 24-24 24z' fill='%23ffffff' fill-opacity='0.05'/%3E%3C/svg%3E");
  opacity: 0.1;
`;

const IconsRow = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 2rem;
`;

const IconBox = styled.div`
  width: 45px;
  height: 45px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(5px);
  font-size: 1.2rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-3px);
  }
`;

const StartupBanner = () => {
  return (
    <BannerContainer>
      <GujaratPattern />
      <ContentWrapper>
        <TextContent>
          <Title>Startup Gujarat Schemes</Title>
          <Subtitle>Where Innovation Meets Tradition</Subtitle>
          <IconsRow>
            <IconBox>🚀</IconBox>
            <IconBox>💡</IconBox>
            <IconBox>🏛️</IconBox>
            <IconBox>📱</IconBox>
            <IconBox>💼</IconBox>
          </IconsRow>
        </TextContent>
        <IllustrationContainer>
          <svg viewBox="0 0 800 200">
            {/* Simplified version of your startup illustration */}
            <text x="50" y="100" fontSize="120" fontWeight="bold" letterSpacing="10">
              STARTUP
            </text>
            <g transform="translate(50, 120) scale(0.4)">
              {/* Add your startup icons/elements here */}
              <circle cx="100" cy="0" r="20" />
              <rect x="150" y="-20" width="40" height="40" />
              <path d="M250,-20 L290,20 L210,20 Z" />
            </g>
          </svg>
        </IllustrationContainer>
      </ContentWrapper>
    </BannerContainer>
  );
};

export default StartupBanner;
