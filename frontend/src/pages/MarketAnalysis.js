import React, { useState } from "react";
import "./MarketAnalysis.css";
import MOverview from "./market/overview";
import MSnapshot from "./market/snapshot";
import MInfographs from "./market/infographs";
import MReports from "./market/reports";
import MShowcase from "./market/showcase";
import { FaChartLine, FaUsers, FaMoneyBillWave, FaClipboardList, FaStar } from 'react-icons/fa';

const MarketAnalysis = () => {
    const [selectedPage, setSelectedPage] = useState("Overview");

    const handleMenuClick = (page) => {
        setSelectedPage(page);
    };

    return (
        <div id="webcrumbs-market">
            <div className="ema-container">
                <section className="ema-hero">
                    <div className="ema-overlay-radial"></div>
                    <div className="ema-overlay-image"></div>
                    <div className="ema-overlay-pattern"></div>
                    <div className="ema-content">
                        <h1 className="ema-title">Enterprise Market Analytics</h1>
                        <p className="ema-subtitle">Advanced insights and real-time market intelligence platform for data-driven decision making and strategic business growth.</p>
                        <div className="ema-stats-grid">
                            <div className="ema-stat-card">
                                <FaChartLine className="ema-icon" />
                                <h3 className="ema-stat-title">Market Growth</h3>
                                <p className="ema-stat-value">+32.5% vs Last Quarter</p>
                            </div>
                            <div className="ema-stat-card">
                                <FaUsers className="ema-icon" />
                                <h3 className="ema-stat-title">Active Users</h3>
                                <p className="ema-stat-value">18.7K Daily Average</p>
                            </div>
                            <div className="ema-stat-card">
                                <FaMoneyBillWave className="ema-icon" />
                                <h3 className="ema-stat-title">Revenue</h3>
                                <p className="ema-stat-value">$3.8M This Month</p>
                            </div>
                            <div className="ema-stat-card">
                                <FaStar className="ema-icon" />
                                <h3 className="ema-stat-title">New Clients</h3>
                                <p className="ema-stat-value">+245 This Week</p>
                            </div>
                            <div className="ema-stat-card">
                                <span className="ema-icon material-symbols-outlined">inventory</span>
                                <h3 className="ema-stat-title">Products</h3>
                                <p className="ema-stat-value">4.2K Total Items</p>
                            </div>
                        </div>
                    </div>
                </section>

                <nav className="ema-navigation bg-gradient-to-r from-white via-slate-50 to-white shadow-xl rounded-3xl mx-12 mt-8 relative border border-slate-200">
                    <ul className="ema-nav-list flex justify-around items-center p-4">
                        <li className="ema-nav-item">
                            <a onClick={() => handleMenuClick("Overview")} className="ema-nav-link-overview flex items-center gap-3 px-6 py-3 rounded-xl hover:bg-indigo-50 transition-all duration-300 text-slate-700 hover:text-indigo-600 hover:scale-105">
                                <span className="ema-nav-icon material-symbols-outlined text-2xl">dashboard</span>
                                <span className="ema-nav-text font-semibold text-lg">Overview</span>
                            </a>
                        </li>
                        <li className="ema-nav-item">
                            <a onClick={() => handleMenuClick("Snapshot")} className="ema-nav-link-snapshot flex items-center gap-3 px-6 py-3 rounded-xl hover:bg-purple-50 transition-all duration-300 text-slate-700 hover:text-purple-600 hover:scale-105">
                                <span className="ema-nav-icon material-symbols-outlined text-2xl">analytics</span>
                                <span className="ema-nav-text font-semibold text-lg">Snapshot</span>
                            </a>
                        </li>
                        <li className="ema-nav-item">
                            <a onClick={() => handleMenuClick("Infographs")} className="ema-nav-link-infographs flex items-center gap-3 px-6 py-3 rounded-xl hover:bg-blue-50 transition-all duration-300 text-slate-700 hover:text-blue-600 hover:scale-105">
                                <span className="ema-nav-icon material-symbols-outlined text-2xl">bar_chart</span>
                                <span className="ema-nav-text font-semibold text-lg">Infographs</span>
                            </a>
                        </li>
                        <li className="ema-nav-item">
                            <a onClick={() => handleMenuClick("Reports")} className="ema-nav-link-reports flex items-center gap-3 px-6 py-3 rounded-xl hover:bg-emerald-50 transition-all duration-300 text-slate-700 hover:text-emerald-600 hover:scale-105">
                                <span className="ema-nav-icon material-symbols-outlined text-2xl">description</span>
                                <span className="ema-nav-text font-semibold text-lg">Reports</span>
                            </a>
                        </li>
                        <li className="ema-nav-item">
                            <a onClick={() => handleMenuClick("Showcase")} className="ema-nav-link-showcase flex items-center gap-3 px-6 py-3 rounded-xl hover:bg-pink-50 transition-all duration-300 text-slate-700 hover:text-pink-600 hover:scale-105">
                                <span className="ema-nav-icon material-symbols-outlined text-2xl">view_carousel</span>
                                <span className="ema-nav-text font-semibold text-lg">Showcase</span>
                            </a>
                        </li>
                    </ul>
                </nav>
                {/* Render the selected page content */}
                {selectedPage === "Overview" && <MOverview />}
                {selectedPage === "Snapshot" && <MSnapshot />}
                {selectedPage === "Infographs" && <MInfographs />}
                {selectedPage === "Reports" && <MReports />}
                {selectedPage === "Showcase" && <MShowcase />}
            </div>
        </div>
    );
};

export default MarketAnalysis;