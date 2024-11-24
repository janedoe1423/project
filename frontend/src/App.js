import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Startups from './pages/Startups';
import Investors from './pages/Investors';
import Innovations from './pages/Innovations';
import Innovators from './pages/Innovators';
import Schemes from './pages/Schemes';
import IPR from './pages/IPR';
import Funding from './pages/Funding';
import LoginPage from './pages/login';
import StartupProfilePage from './pages/startup/startup_profile_page';
import InvestorProfilePage from './pages/investor/investor_profile_page';
import IPRProfilePage from './pages/ipr-professional/ipr_prof_profile_page';
import InvestorDashboard from './pages/investor/InvestorDashboard'; // Import InvestorDashboard
import 'antd/dist/reset.css'; // for antd v5
import Researcher from './pages/researcher/researcher_profile_page';
import WomenEntrepreneurship from './pages/Schemes and policies/WomenEntrepreneurship';
import Incubator from './pages/Schemes and policies/Incubator';
import StartupGujarat from './pages/Schemes and policies/StartupGUJ';

function App() {
  return (
    <Router>
      <Header />
      <div className="main-content">
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/startups" element={<Startups />} />
          <Route path="/investors" element={<Investors />} />
          <Route path="/investor-dashboard" element={<InvestorDashboard />} /> {/* Add route for Investor Dashboard */}
          <Route path="/innovations" element={<Innovations />} />
          <Route path="/innovators" element={<Innovators />} />
          <Route path="/schemes" element={<Schemes />} />
          <Route path="/ipr-rights" element={<IPR />} />
          <Route path="/funding" element={<Funding />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/startup-profile" element={<StartupProfilePage />} />
          <Route path="/investor-profile" element={<InvestorProfilePage />} />
          <Route path="/ipr-professional-profile" element={<IPRProfilePage />} />
          <Route path="/researcher" element={<Researcher />} />
          
          <Route path="/schemes/women-entrepreneurship" element={<WomenEntrepreneurship />} />
          {/* <Route path="/schemes/startup-gujarat" element={<StartupGujarat />} /> */}
          <Route path="/schemes/incubator-framework" element={<Incubator />} />
          <Route path="/schemes/startup-gujarat" element={<StartupGujarat />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
