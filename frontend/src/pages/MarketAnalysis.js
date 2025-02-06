import React, { useState } from "react";

/* Don't forget to download the CSS file too 
OR remove the following line if you're already using Tailwind */

import "./MarketAnalysis.css";

// Import the content for each page
// Import the content for each page
import MOverview from "./market/overview"; // Change 'Overview' to 'overview'
import MSnapshot from "./market/snapshot";
import MInfographs from "./market/infographs";
import MReports from "./market/reports";
import MShowcase from "./market/showcase";

const MarketAnalysis = () => {
    const [selectedPage, setSelectedPage] = useState("Overview"); // Default page

    const handleMenuClick = (page) => {
        setSelectedPage(page); // Update the selected page
    };

    return (
        <div id="webcrumbs-market">
            <div className="ema-container w-[1600px]">
                <section className="ema-hero relative h-[500px] rounded-b-[40px] overflow-hidden animate-gradient-x bg-gradient-to-br from-blue-700 via-indigo-800 to-violet-900">
                    <div className="ema-overlay-radial absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-400/30 via-transparent to-transparent"></div>
                    <div className="ema-overlay-image absolute inset-0 bg-[url('https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f')] bg-cover bg-center mix-blend-overlay opacity-30"></div>
                    <div className="ema-overlay-pattern absolute inset-0 bg-[linear-gradient(45deg,rgba(99,102,241,0.15)_25%,transparent_25%,transparent_75%,rgba(99,102,241,0.15)_75%,rgba(99,102,241,0.15))] bg-[length:12px_12px]"></div>
                    <div className="ema-content relative p-16 text-center">
                        <h1 className="ema-title text-5xl font-bold text-white mb-6 tracking-tight animate-fade-in">Enterprise Market Analytics</h1>
                        <p className="ema-subtitle text-xl text-white/90 max-w-3xl mx-auto font-medium mb-12 animate-fade-in-delayed">Advanced insights and real-time market intelligence platform for data-driven decision making and strategic business growth.</p>
                        <div className="ema-stats-grid grid grid-cols-5 gap-6 mt-12">
                            <div className="ema-stat-card-market bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/20 transition-all duration-500 cursor-pointer border border-white/30 hover:border-cyan-400/50 hover:translate-y-[-8px] hover:scale-105 shadow-xl hover:shadow-cyan-500/30 group">
                                <span className="ema-icon-market material-symbols-outlined text-4xl text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">trending_up</span>
                                <h3 className="ema-stat-title-market text-white text-lg font-semibold mb-2 group-hover:text-cyan-300">Market Growth</h3>
                                <p className="ema-stat-value-market text-white text-base group-hover:text-white/90">+32.5% vs Last Quarter</p>
                            </div>
                            <div className="ema-stat-card-users bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/20 transition-all duration-500 cursor-pointer border border-white/30 hover:border-purple-400/50 hover:translate-y-[-8px] hover:scale-105 shadow-xl hover:shadow-purple-500/30 group">
                                <span className="ema-icon-users material-symbols-outlined text-4xl text-white mb-4 group-hover:text-purple-400 transition-colors duration-300">monitoring</span>
                                <h3 className="ema-stat-title-users text-white text-lg font-semibold mb-2 group-hover:text-purple-300">Active Users</h3>
                                <p className="ema-stat-value-users text-white text-base group-hover:text-white/90">18.7K Daily Average</p>
                            </div>
                            <div className="ema-stat-card-revenue bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/20 transition-all duration-500 cursor-pointer border border-white/30 hover:border-emerald-400/50 hover:translate-y-[-8px] hover:scale-105 shadow-xl hover:shadow-emerald-500/30 group">
                                <span className="ema-icon-revenue material-symbols-outlined text-4xl text-white mb-4 group-hover:text-emerald-400 transition-colors duration-300">business_center</span>
                                <h3 className="ema-stat-title-revenue text-white text-lg font-semibold mb-2 group-hover:text-emerald-300">Revenue</h3>
                                <p className="ema-stat-value-revenue text-white text-base group-hover:text-white/90">$3.8M This Month</p>
                            </div>
                            <div className="ema-stat-card-clients bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/20 transition-all duration-500 cursor-pointer border border-white/30 hover:border-pink-400/50 hover:translate-y-[-8px] hover:scale-105 shadow-xl hover:shadow-pink-500/30 group">
                                <span className="ema-icon-clients material-symbols-outlined text-4xl text-white mb-4 group-hover:text-pink-400 transition-colors duration-300">group</span>
                                <h3 className="ema-stat-title-clients text-white text-lg font-semibold mb-2 group-hover:text-pink-300">New Clients</h3>
                                <p className="ema-stat-value-clients text-white text-base group-hover:text-white/90">+245 This Week</p>
                            </div>
                            <div className="ema-stat-card-products bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/20 transition-all duration-500 cursor-pointer border border-white/30 hover:border-amber-400/50 hover:translate-y-[-8px] hover:scale-105 shadow-xl hover:shadow-amber-500/30 group">
                                <span className="ema-icon-products material-symbols-outlined text-4xl text-white mb-4 group-hover:text-amber-400 transition-colors duration-300">inventory</span>
                                <h3 className="ema-stat-title-products text-white text-lg font-semibold mb-2 group-hover:text-amber-300">Products</h3>
                                <p className="ema-stat-value-products text-white text-base group-hover:text-white/90">4.2K Total Items</p>
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
    )
}

export default MarketAnalysis;