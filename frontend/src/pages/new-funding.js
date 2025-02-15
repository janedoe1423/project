import React from "react";


/* Don't forget to download the CSS file too 
OR remove the following line if you're already using Tailwind */

import "./style.css";

export const MyPlugin = () => {
    return (
        <div id="webcrumbs">
            <div className="w-[1200px] bg-white">
                <header className="relative h-[700px] overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-700 to-pink-600">
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560179707-f14e90ef3623')] opacity-10 bg-cover bg-center mix-blend-overlay" />
                    </div>
                    <div className="relative z-10 flex flex-col items-center justify-center h-full text-white p-8">
                        <h1 className="text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-100 via-white to-indigo-200 animate-fade-in transform hover:scale-105 transition-all duration-500">Startup Funding Platform</h1>
                        <p className="text-2xl max-w-3xl text-center mb-12 leading-relaxed font-light animate-slide-up opacity-90">Connect with investors and secure the funding your startup needs to grow. Whether you're looking for seed funding, equity investment, or royalty-based financing, we've got you covered. Join thousands of successful startups who have raised over $500M through our platform.</p>

                        <div className="grid grid-cols-4 gap-8 mb-12 w-full max-w-4xl">
                            <div className="bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-xl rounded-2xl p-8 transform hover:scale-105 transition-all duration-300 hover:bg-white/20 border border-white/20 group">
                                <h3 className="text-5xl font-bold mb-2 bg-gradient-to-br from-pink-200 to-indigo-200 bg-clip-text text-transparent group-hover:from-white group-hover:to-pink-200 transition-all duration-300">500+</h3>
                                <p className="text-sm font-light">Active Investors</p>
                            </div>
                            <div className="bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-xl rounded-2xl p-8 transform hover:scale-105 transition-all duration-300 hover:bg-white/20 border border-white/20 group">
                                <h3 className="text-5xl font-bold mb-2 bg-gradient-to-br from-pink-200 to-indigo-200 bg-clip-text text-transparent group-hover:from-white group-hover:to-pink-200 transition-all duration-300">$500M</h3>
                                <p className="text-sm font-light">Total Funding Raised</p>
                            </div>
                            <div className="bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-xl rounded-2xl p-8 transform hover:scale-105 transition-all duration-300 hover:bg-white/20 border border-white/20 group">
                                <h3 className="text-5xl font-bold mb-2 bg-gradient-to-br from-pink-200 to-indigo-200 bg-clip-text text-transparent group-hover:from-white group-hover:to-pink-200 transition-all duration-300">2000+</h3>
                                <p className="text-sm font-light">Successful Startups</p>
                            </div>
                            <div className="bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-xl rounded-2xl p-8 transform hover:scale-105 transition-all duration-300 hover:bg-white/20 border border-white/20 group">
                                <h3 className="text-5xl font-bold mb-2 bg-gradient-to-br from-pink-200 to-indigo-200 bg-clip-text text-transparent group-hover:from-white group-hover:to-pink-200 transition-all duration-300">95%</h3>
                                <p className="text-sm font-light">Success Rate</p>
                            </div>
                        </div>

                        <button className="bg-gradient-to-r from-pink-500 to-indigo-600 hover:from-pink-600 hover:to-indigo-700 text-white px-12 py-5 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-pink-500/20 transform hover:scale-105 transition-all duration-300">Get Started</button>
                    </div>
                </header>

                <section className="py-24 px-8 bg-gradient-to-b from-white via-indigo-50 to-pink-50">
                    <h2 className="text-5xl font-bold text-center mb-20 bg-gradient-to-br from-indigo-600 to-pink-600 bg-clip-text text-transparent">Featured Funding Opportunities</h2>
                    <div className="grid grid-cols-3 gap-8">
                        <div className="bg-gradient-to-br from-white to-indigo-50 rounded-2xl shadow-xl p-10 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-indigo-100 group">
                            <span className="material-symbols-outlined text-6xl mb-8 text-indigo-600 bg-indigo-50 p-4 rounded-xl group-hover:bg-indigo-100 transition-all duration-300">rocket_launch</span>
                            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-br from-indigo-600 to-indigo-800 bg-clip-text text-transparent">TechStart Solutions</h3>
                            <div className="mb-6">
                                <span className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">$500K</span>
                                <span className="text-gray-600 ml-3 text-lg">Seed Round</span>
                            </div>
                            <p className="text-gray-600 mb-6 leading-relaxed text-lg">AI-powered customer service platform with proven traction:</p>
                            <ul className="text-gray-600 mb-8 space-y-3 text-lg">
                                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-indigo-600">check_circle</span>Current MRR: $50K</li>
                                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-indigo-600">check_circle</span>200+ active enterprise users</li>
                                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-indigo-600">check_circle</span>40% Month-over-Month growth</li>
                                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-indigo-600">check_circle</span>$2.5M valuation cap</li>
                                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-indigo-600">check_circle</span>SAFE agreement terms</li>
                            </ul>
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center gap-3 bg-gradient-to-r from-indigo-50 to-pink-50 p-3 rounded-xl group-hover:from-indigo-100 group-hover:to-pink-100 transition-all duration-300">
                                    <span className="material-symbols-outlined text-indigo-600">trending_up</span>
                                    <span className="text-gray-700">Series A ready by Q4 2024</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gradient-to-r from-indigo-50 to-pink-50 p-3 rounded-xl group-hover:from-indigo-100 group-hover:to-pink-100 transition-all duration-300">
                                    <span className="material-symbols-outlined text-indigo-600">groups</span>
                                    <span className="text-gray-700">Team of 15 engineers</span>
                                </div>
                                <div className="flex justify-between items-center mt-6">
                                    <span className="bg-gradient-to-r from-indigo-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-semibold">Seed Funding</span>
                                    <button className="text-indigo-600 hover:text-pink-600 flex items-center gap-2 font-semibold group">
                                        Learn More
                                        <span className="material-symbols-outlined transform group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-white to-emerald-50 rounded-2xl shadow-xl p-10 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-emerald-100 group">
                            <span className="material-symbols-outlined text-6xl mb-8 text-emerald-600 bg-emerald-50 p-4 rounded-xl group-hover:bg-emerald-100 transition-all duration-300">diversity_3</span>
                            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-br from-emerald-600 to-emerald-800 bg-clip-text text-transparent">GreenEnergy Corp</h3>
                            <div className="mb-6">
                                <span className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">$2M</span>
                                <span className="text-gray-600 ml-3 text-lg">Series A</span>
                            </div>
                            <p className="text-gray-600 mb-6 leading-relaxed text-lg">Revolutionary renewable energy solutions:</p>
                            <ul className="text-gray-600 mb-8 space-y-3 text-lg">
                                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-emerald-600">check_circle</span>3 patents pending</li>
                                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-emerald-600">check_circle</span>$1.2M annual revenue</li>
                                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-emerald-600">check_circle</span>3 utility company partnerships</li>
                                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-emerald-600">check_circle</span>$10M pre-money valuation</li>
                                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-emerald-600">check_circle</span>15% equity offered</li>
                            </ul>
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center gap-3 bg-gradient-to-r from-emerald-50 to-teal-50 p-3 rounded-xl group-hover:from-emerald-100 group-hover:to-teal-100 transition-all duration-300">
                                    <span className="material-symbols-outlined text-emerald-600">verified</span>
                                    <span className="text-gray-700">Government certified</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gradient-to-r from-emerald-50 to-teal-50 p-3 rounded-xl group-hover:from-emerald-100 group-hover:to-teal-100 transition-all duration-300">
                                    <span className="material-symbols-outlined text-emerald-600">workspace_premium</span>
                                    <span className="text-gray-700">Award-winning technology</span>
                                </div>
                                <div className="flex justify-between items-center mt-6">
                                    <span className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-2 rounded-full text-sm font-semibold">Equity</span>
                                    <button className="text-emerald-600 hover:text-teal-600 flex items-center gap-2 font-semibold group">
                                        Learn More
                                        <span className="material-symbols-outlined transform group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-white to-fuchsia-50 rounded-2xl shadow-xl p-10 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-fuchsia-100 group">
                            <span className="material-symbols-outlined text-6xl mb-8 text-fuchsia-600 bg-fuchsia-50 p-4 rounded-xl group-hover:bg-fuchsia-100 transition-all duration-300">trending_up</span>
                            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-br from-fuchsia-600 to-fuchsia-800 bg-clip-text text-transparent">HealthTech Innovations</h3>
                            <div className="mb-6">
                                <span className="text-4xl font-bold bg-gradient-to-r from-fuchsia-600 to-purple-600 bg-clip-text text-transparent">$1M</span>
                                <span className="text-gray-600 ml-3 text-lg">Royalty-based</span>
                            </div>
                            <p className="text-gray-600 mb-6 leading-relaxed text-lg">Revolutionary medical device with proven results:</p>
                            <ul className="text-gray-600 mb-8 space-y-3 text-lg">
                                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-fuchsia-600">check_circle</span>FDA approval in 6 months</li>
                                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-fuchsia-600">check_circle</span>98% success in clinical trials</li>
                                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-fuchsia-600">check_circle</span>5 hospital partnerships</li>
                                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-fuchsia-600">check_circle</span>8% royalty rate</li>
                                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-fuchsia-600">check_circle</span>3-year payback period</li>
                            </ul>
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center gap-3 bg-gradient-to-r from-fuchsia-50 to-purple-50 p-3 rounded-xl group-hover:from-fuchsia-100 group-hover:to-purple-100 transition-all duration-300">
                                    <span className="material-symbols-outlined text-fuchsia-600">health_and_safety</span>
                                    <span className="text-gray-700">Clinical trials successful</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gradient-to-r from-fuchsia-50 to-purple-50 p-3 rounded-xl group-hover:from-fuchsia-100 group-hover:to-purple-100 transition-all duration-300">
                                    <span className="material-symbols-outlined text-fuchsia-600">psychology</span>
                                    <span className="text-gray-700">Expert medical board</span>
                                </div>
                                <div className="flex justify-between items-center mt-6">
                                    <span className="bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold">Royalty</span>
                                    <button className="text-fuchsia-600 hover:text-purple-600 flex items-center gap-2 font-semibold group">
                                        Learn More
                                        <span className="material-symbols-outlined transform group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

