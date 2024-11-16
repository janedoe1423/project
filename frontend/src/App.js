// src/App.js
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

function App() {
    return (
        <Router>
            <Header />
            <div className="main-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/startups" element={<Startups />} />
                    <Route path="/investors" element={<Investors />} />
                    <Route path="/innovations" element={<Innovations />} />
                    <Route path="/innovators" element={<Innovators />} />
                    <Route path="/schemes" element={<Schemes />} />
                    <Route path="/ipr-rights" element={<IPR />} />
                    <Route path="/funding" element={<Funding />} />
                    {/* Add routes for Login and SignUp pages when they are ready */}
                </Routes>
            </div>
            <Footer />
        </Router>
    );
}

export default App;
