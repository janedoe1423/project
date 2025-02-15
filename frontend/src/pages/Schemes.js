import React from "react";


/* Don't forget to download the CSS file too 
OR remove the following line if you're already using Tailwind */

import "./Schemes.css";

const SchemesPage = () => {
    return (
        <div id="webcrumbs-schemes">

            <div className="w-[1200px] p-8 bg-gradient-to-br from-gray-50 to-gray-100">
                <div className="grid grid-cols-3 gap-8">
                    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105">
                        <div className="p-8 relative overflow-hidden group">
                            <div className="flex items-center space-x-4">
                                <span className="material-symbols-outlined text-5xl text-blue-600 inline-block transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 animate-bounce">assured_workload</span>
                                <span className="px-3 py-1 text-xs font-semibold bg-blue-100 text-blue-600 rounded-full">Popular</span>
                            </div>
                            <h3 className="text-2xl font-bold mt-6 mb-3 transition-all duration-300 group-hover:translate-x-2">Government Schemes</h3>
                            <p className="text-gray-600 mb-6 transition-all duration-300 group-hover:translate-x-2">Access various government initiatives and support programs designed to boost startup growth and innovation.</p>
                            <ul className="space-y-3 mb-6">
                                <li className="flex items-center space-x-2">
                                    <span className="material-symbols-outlined text-blue-500">check_circle</span>
                                    <span className="text-gray-600">Startup India Initiative</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <span className="material-symbols-outlined text-blue-500">check_circle</span>
                                    <span className="text-gray-600">MSME Support Programs</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <span className="material-symbols-outlined text-blue-500">check_circle</span>
                                    <span className="text-gray-600">Tax Benefits & Incentives</span>
                                </li>
                            </ul>
                            <div className="flex items-center justify-between border-t pt-4">
                                <div>
                                    <span className="text-sm text-gray-500 transition-all duration-300 group-hover:translate-x-2">50+ schemes available</span>
                                    <div className="flex -space-x-2 mt-2">
                                        <span className="w-8 h-8 rounded-full bg-blue-200 border-2 border-white flex items-center justify-center text-xs text-blue-600">+12</span>
                                        <span className="w-8 h-8 rounded-full bg-blue-300 border-2 border-white flex items-center justify-center text-xs text-blue-700">+38</span>
                                    </div>
                                </div>
                                <button className="group-hover:bg-blue-600 group-hover:text-white px-6 py-2 rounded-lg transition-all duration-300 flex items-center space-x-2">
                                    <span>Explore</span>
                                    <span className="material-symbols-outlined transform group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                </button>
                            </div>
                            <div className="absolute inset-0 bg-blue-600/5 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-2xl" />
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105">
                        <div className="p-8 relative overflow-hidden group">
                            <div className="flex items-center space-x-4">
                                <span className="material-symbols-outlined text-5xl text-green-600 inline-block transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 animate-pulse">payments</span>
                                <span className="px-3 py-1 text-xs font-semibold bg-green-100 text-green-600 rounded-full">Featured</span>
                            </div>
                            <h3 className="text-2xl font-bold mt-6 mb-3 transition-all duration-300 group-hover:translate-x-2">Financial Support</h3>
                            <p className="text-gray-600 mb-6 transition-all duration-300 group-hover:translate-x-2">Access comprehensive funding opportunities and financial assistance programs for your venture.</p>
                            <ul className="space-y-3 mb-6">
                                <li className="flex items-center space-x-2">
                                    <span className="material-symbols-outlined text-green-500">check_circle</span>
                                    <span className="text-gray-600">Venture Capital Access</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <span className="material-symbols-outlined text-green-500">check_circle</span>
                                    <span className="text-gray-600">Angel Investment Network</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <span className="material-symbols-outlined text-green-500">check_circle</span>
                                    <span className="text-gray-600">Government Grants</span>
                                </li>
                            </ul>
                            <div className="flex items-center justify-between border-t pt-4">
                                <div>
                                    <span className="text-sm text-gray-500 transition-all duration-300 group-hover:translate-x-2">30+ schemes available</span>
                                    <div className="flex -space-x-2 mt-2">
                                        <span className="w-8 h-8 rounded-full bg-green-200 border-2 border-white flex items-center justify-center text-xs text-green-600">+8</span>
                                        <span className="w-8 h-8 rounded-full bg-green-300 border-2 border-white flex items-center justify-center text-xs text-green-700">+22</span>
                                    </div>
                                </div>
                                <button className="group-hover:bg-green-600 group-hover:text-white px-6 py-2 rounded-lg transition-all duration-300 flex items-center space-x-2">
                                    <span>Explore</span>
                                    <span className="material-symbols-outlined transform group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                </button>
                            </div>
                            <div className="absolute inset-0 bg-green-600/5 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-2xl" />
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105">
                        <div className="p-8 relative overflow-hidden group">
                            <div className="flex items-center space-x-4">
                                <span className="material-symbols-outlined text-5xl text-purple-600 inline-block transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 animate-bounce">school</span>
                                <span className="px-3 py-1 text-xs font-semibold bg-purple-100 text-purple-600 rounded-full">New</span>
                            </div>
                            <h3 className="text-2xl font-bold mt-6 mb-3 transition-all duration-300 group-hover:translate-x-2">Educational Programs</h3>
                            <p className="text-gray-600 mb-6 transition-all duration-300 group-hover:translate-x-2">Enhance your entrepreneurial skills with our curated learning and mentorship programs.</p>
                            <ul className="space-y-3 mb-6">
                                <li className="flex items-center space-x-2">
                                    <span className="material-symbols-outlined text-purple-500">check_circle</span>
                                    <span className="text-gray-600">Mentorship Programs</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <span className="material-symbols-outlined text-purple-500">check_circle</span>
                                    <span className="text-gray-600">Skill Development</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <span className="material-symbols-outlined text-purple-500">check_circle</span>
                                    <span className="text-gray-600">Workshops & Webinars</span>
                                </li>
                            </ul>
                            <div className="flex items-center justify-between border-t pt-4">
                                <div>
                                    <span className="text-sm text-gray-500 transition-all duration-300 group-hover:translate-x-2">25+ schemes available</span>
                                    <div className="flex -space-x-2 mt-2">
                                        <span className="w-8 h-8 rounded-full bg-purple-200 border-2 border-white flex items-center justify-center text-xs text-purple-600">+10</span>
                                        <span className="w-8 h-8 rounded-full bg-purple-300 border-2 border-white flex items-center justify-center text-xs text-purple-700">+15</span>
                                    </div>
                                </div>
                                <button className="group-hover:bg-purple-600 group-hover:text-white px-6 py-2 rounded-lg transition-all duration-300 flex items-center space-x-2">
                                    <span>Explore</span>
                                    <span className="material-symbols-outlined transform group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                </button>
                            </div>
                            <div className="absolute inset-0 bg-purple-600/5 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-2xl" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SchemesPage;
