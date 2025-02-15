import React from "react";


/* Don't forget to download the CSS file too 
OR remove the following line if you're already using Tailwind */

import "./showcase.css";

const MShowcase = () => {
    return (
        <div id="webcrumbs-mshowcase">
            <div className="w-[1200px] bg-gradient-to-br from-slate-50 to-white p-8 rounded-xl">
                <header className="text-center mb-12 animate-fade-in">
                    <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-indigo-600 hover:to-violet-600 transition-all duration-500">Market Analysis Showcase</h2>
                    <p className="text-lg bg-gradient-to-r from-violet-500 to-indigo-500 bg-clip-text text-transparent animate-pulse">Discover breakthrough innovations and success stories shaping the industry</p>
                </header>

                <section className="grid grid-cols-3 gap-8 mb-12">
                    <div className="bg-gradient-to-br from-indigo-50 via-blue-50 to-violet-50 p-6 rounded-xl shadow-lg transition-all duration-500 ease-in-out transform hover:-translate-y-2 hover:scale-105 hover:shadow-2xl group">
                        <span className="material-symbols-outlined text-4xl mb-4 text-indigo-600 animate-bounce transition-all duration-300 ease-in-out group-hover:text-indigo-800 group-hover:scale-110">rocket_launch</span>
                        <h3 className="text-xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600">Featured Startups</h3>
                        <p className="mb-4 text-indigo-700">Revolutionary companies changing the landscape</p>
                        <div className="space-y-4">
                            <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg transition-all duration-300 ease-in-out hover:bg-indigo-100 hover:scale-102 hover:shadow-md group">
                                <h4 className="font-semibold group-hover:text-indigo-700">TechVision AI</h4>
                                <p className="text-sm group-hover:text-indigo-600">Achieved 300% growth in 6 months</p>
                            </div>
                            <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg transition-all duration-300 ease-in-out hover:bg-indigo-100 hover:scale-102 hover:shadow-md group">
                                <h4 className="font-semibold group-hover:text-indigo-700">EcoSmart Solutions</h4>
                                <p className="text-sm group-hover:text-indigo-600">Raised $50M Series B funding</p>
                            </div>
                            <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg transition-all duration-300 ease-in-out hover:bg-indigo-100 hover:scale-102 hover:shadow-md group">
                                <h4 className="font-semibold group-hover:text-indigo-700">CloudNova Systems</h4>
                                <p className="text-sm group-hover:text-indigo-600">Expanded to 15 new markets</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-fuchsia-50 via-purple-50 to-pink-50 p-6 rounded-xl shadow-lg transition-all duration-500 ease-in-out transform hover:-translate-y-2 hover:scale-105 hover:shadow-2xl group">
                        <span className="material-symbols-outlined text-4xl mb-4 text-fuchsia-600 animate-pulse transition-all duration-300 ease-in-out group-hover:text-fuchsia-800 group-hover:scale-110">trending_up</span>
                        <h3 className="text-xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-600 to-purple-600">Market Trends</h3>
                        <p className="mb-4 text-fuchsia-700">Leading innovations disrupting industries</p>
                        <div className="space-y-4">
                            <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg transition-all duration-300 ease-in-out hover:bg-fuchsia-100 hover:scale-102 hover:shadow-md group">
                                <h4 className="font-semibold group-hover:text-fuchsia-700">AI Integration</h4>
                                <p className="text-sm group-hover:text-fuchsia-600">85% adoption rate in 2023</p>
                            </div>
                            <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg transition-all duration-300 ease-in-out hover:bg-fuchsia-100 hover:scale-102 hover:shadow-md group">
                                <h4 className="font-semibold group-hover:text-fuchsia-700">Sustainable Tech</h4>
                                <p className="text-sm group-hover:text-fuchsia-600">$2.5B market growth</p>
                            </div>
                            <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg transition-all duration-300 ease-in-out hover:bg-fuchsia-100 hover:scale-102 hover:shadow-md group">
                                <h4 className="font-semibold group-hover:text-fuchsia-700">Quantum Computing</h4>
                                <p className="text-sm group-hover:text-fuchsia-600">$1.2B investment surge</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 p-6 rounded-xl shadow-lg transition-all duration-500 ease-in-out transform hover:-translate-y-2 hover:scale-105 hover:shadow-2xl group">
                        <span className="material-symbols-outlined text-4xl mb-4 text-emerald-600 animate-pulse transition-all duration-300 ease-in-out group-hover:text-emerald-800 group-hover:scale-110">handshake</span>
                        <h3 className="text-xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-600">Partnerships</h3>
                        <p className="mb-4 text-emerald-700">Strategic collaborations driving success</p>
                        <div className="space-y-4">
                            <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg transition-all duration-300 ease-in-out hover:bg-emerald-100 hover:scale-102 hover:shadow-md group">
                                <h4 className="font-semibold group-hover:text-emerald-700">Global Tech Alliance</h4>
                                <p className="text-sm group-hover:text-emerald-600">10 companies, $100M joint venture</p>
                            </div>
                            <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg transition-all duration-300 ease-in-out hover:bg-emerald-100 hover:scale-102 hover:shadow-md group">
                                <h4 className="font-semibold group-hover:text-emerald-700">Innovation Hub</h4>
                                <p className="text-sm group-hover:text-emerald-600">20+ startups accelerated</p>
                            </div>
                            <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg transition-all duration-300 ease-in-out hover:bg-emerald-100 hover:scale-102 hover:shadow-md group">
                                <h4 className="font-semibold group-hover:text-emerald-700">Research Network</h4>
                                <p className="text-sm group-hover:text-emerald-600">30+ universities connected</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-gradient-to-r from-indigo-100 via-violet-100 to-fuchsia-100 p-8 rounded-xl shadow-lg backdrop-blur-sm mb-12">
                    <h3 className="text-2xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-violet-600 hover:to-indigo-600 transition-all duration-500">Expert Insights</h3>
                    <div className="grid grid-cols-2 gap-6">
                        <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1 hover:bg-white/95 group">
                            <div className="flex items-center mb-4">
                                <span className="material-symbols-outlined mr-3 text-violet-600 transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:text-violet-800">person</span>
                                <div>
                                    <h4 className="font-bold group-hover:text-violet-700">Sarah Johnson</h4>
                                    <p className="text-sm group-hover:text-violet-600">CEO, Innovation Labs</p>
                                </div>
                            </div>
                            <p className="italic group-hover:text-violet-700">The future of tech lies in sustainable solutions and AI integration.</p>
                        </div>
                        <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1 hover:bg-white/95 group">
                            <div className="flex items-center mb-4">
                                <span className="material-symbols-outlined mr-3 text-indigo-600 transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:text-indigo-800">person</span>
                                <div>
                                    <h4 className="font-bold group-hover:text-indigo-700">Michael Chen</h4>
                                    <p className="text-sm group-hover:text-indigo-600">CTO, TechVision</p>
                                </div>
                            </div>
                            <p className="italic group-hover:text-indigo-700">Strategic partnerships are key to accelerating innovation.</p>
                        </div>
                    </div>
                </section>

                <section className="bg-gradient-to-r from-purple-100 via-pink-100 to-rose-100 p-8 rounded-xl shadow-lg backdrop-blur-sm">
                    <h3 className="text-2xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 hover:from-pink-600 hover:to-purple-600 transition-all duration-500">Industry Statistics</h3>
                    <div className="grid grid-cols-3 gap-6">
                        <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1 hover:bg-white/95 group">
                            <span className="material-symbols-outlined text-3xl mb-3 text-purple-600 transition-transform duration-300 ease-in-out group-hover:scale-110">analytics</span>
                            <h4 className="font-bold text-xl mb-2 group-hover:text-purple-700">$850B</h4>
                            <p className="text-sm group-hover:text-purple-600">Total market value in 2023</p>
                        </div>
                        <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1 hover:bg-white/95 group">
                            <span className="material-symbols-outlined text-3xl mb-3 text-pink-600 transition-transform duration-300 ease-in-out group-hover:scale-110">group</span>
                            <h4 className="font-bold text-xl mb-2 group-hover:text-pink-700">250K+</h4>
                            <p className="text-sm group-hover:text-pink-600">Active professionals</p>
                        </div>
                        <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1 hover:bg-white/95 group">
                            <span className="material-symbols-outlined text-3xl mb-3 text-rose-600 transition-transform duration-300 ease-in-out group-hover:scale-110">hub</span>
                            <h4 className="font-bold text-xl mb-2 group-hover:text-rose-700">1500+</h4>
                            <p className="text-sm group-hover:text-rose-600">Global partnerships formed</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}


export default MShowcase;
