import React from "react";
import "./Investors.css";

const Investors = () => {
    return (
        <div id="webcrumbs-investors">
            <div className="w-[1200px] bg-white">
                <div className="relative h-[400px] overflow-hidden group">
                    <div className="flex transition-transform duration-1000 ease-in-out transform hover:scale-105 h-full animate-slide">
                        <img src="https://images.unsplash.com/photo-1579532537598-459ecdaf39cc" className="w-full h-full object-cover transition-opacity duration-500" alt="Investment" />
                        <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f" className="w-full h-full object-cover transition-opacity duration-500" alt="Business" />
                        <img src="https://images.unsplash.com/photo-1604594849809-dfedbc827105" className="w-full h-full object-cover transition-opacity duration-500" alt="Finance" />
                    </div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10">
                        <h1 className="text-6xl font-bold mb-8 animate-fade-in">Find Your Perfect Investor</h1>
                        <div className="flex gap-8 justify-center">
                            <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl hover:scale-110 hover:bg-white/20 transition-all duration-300 cursor-pointer shadow-lg border border-white/20">
                                <span className="text-5xl font-bold">500+</span>
                                <p className="text-lg mt-2">Active Investors</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl hover:scale-110 hover:bg-white/20 transition-all duration-300 cursor-pointer shadow-lg border border-white/20">
                                <span className="text-5xl font-bold">$2B+</span>
                                <p className="text-lg mt-2">Investments Made</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl hover:scale-110 hover:bg-white/20 transition-all duration-300 cursor-pointer shadow-lg border border-white/20">
                                <span className="text-5xl font-bold">1000+</span>
                                <p className="text-lg mt-2">Successful Deals</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-12">
                    <div className="flex gap-6 mb-12">
                        <div className="flex-1 relative group">
                            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-blue-600 transition-colors">search</span>
                            <input type="text" placeholder="Search investors..." className="w-full pl-12 pr-4 py-4 border-2 rounded-xl hover:border-blue-600 focus:border-blue-600 focus:ring-4 focus:ring-blue-200 transition-all outline-none text-lg" />
                        </div>
                        <details className="relative">
                            <summary className="list-none px-8 py-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl cursor-pointer hover:from-blue-100 hover:to-purple-100 transition-all flex items-center gap-3 border-2 border-transparent hover:border-blue-200">
                                Industry
                                <span className="material-symbols-outlined transition-transform duration-300">expand_more</span>
                            </summary>
                            <div className="absolute mt-2 bg-white shadow-xl rounded-xl p-4 min-w-[240px] z-10 border-2">
                                <label className="block p-3 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 rounded-lg cursor-pointer transition-colors">
                                    <input type="checkbox" className="mr-3 accent-blue-600" />
                                    Technology
                                </label>
                                <label className="block p-3 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 rounded-lg cursor-pointer transition-colors">
                                    <input type="checkbox" className="mr-3 accent-blue-600" />
                                    Healthcare
                                </label>
                                <label className="block p-3 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 rounded-lg cursor-pointer transition-colors">
                                    <input type="checkbox" className="mr-3 accent-blue-600" />
                                    Finance
                                </label>
                            </div>
                        </details>
                    </div>

                    <div className="grid grid-cols-3 gap-8">
                        <div className="border-2 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 group hover:border-blue-200 bg-gradient-to-br from-white to-blue-50/50">
                            <div className="flex flex-col h-full">
                                <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7" className="w-24 h-24 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300 ring-4 ring-blue-100 group-hover:ring-blue-300" alt="Profile" />
                                <h3 className="text-2xl font-bold mb-2">John Anderson</h3>
                                <p className="text-gray-600 mb-4 text-lg">Angel Investor | Technology</p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-sm hover:from-blue-200 hover:to-purple-200 transition-colors cursor-pointer">SaaS</span>
                                    <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-sm hover:from-blue-200 hover:to-purple-200 transition-colors cursor-pointer">AI</span>
                                    <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-sm hover:from-blue-200 hover:to-purple-200 transition-colors cursor-pointer">Fintech</span>
                                </div>
                                <p className="text-gray-600 mb-6 line-clamp-3">Invested in 20+ startups with 3 successful exits. Focus on early-stage tech companies.</p>
                                <div className="mt-auto">
                                    <button className="w-full py-3 border-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white border-transparent hover:from-blue-600 hover:to-purple-600 transition-all duration-300 text-lg font-semibold shadow-lg hover:shadow-xl">View Profile</button>
                                </div>
                            </div>
                        </div>

                        <div className="border-2 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 group hover:border-blue-200 bg-gradient-to-br from-white to-blue-50/50">
                            <div className="flex flex-col h-full">
                                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2" className="w-24 h-24 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300 ring-4 ring-blue-100 group-hover:ring-blue-300" alt="Profile" />
                                <h3 className="text-2xl font-bold mb-2">Sarah Chen</h3>
                                <p className="text-gray-600 mb-4 text-lg">VC Partner | Healthcare</p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-sm hover:from-blue-200 hover:to-purple-200 transition-colors cursor-pointer">Biotech</span>
                                    <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-sm hover:from-blue-200 hover:to-purple-200 transition-colors cursor-pointer">MedTech</span>
                                    <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-sm hover:from-blue-200 hover:to-purple-200 transition-colors cursor-pointer">Digital Health</span>
                                </div>
                                <p className="text-gray-600 mb-6 line-clamp-3">Leading healthcare investments at top VC firm. Portfolio includes breakthrough medical technologies.</p>
                                <div className="mt-auto">
                                    <button className="w-full py-3 border-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white border-transparent hover:from-blue-600 hover:to-purple-600 transition-all duration-300 text-lg font-semibold shadow-lg hover:shadow-xl">View Profile</button>
                                </div>
                            </div>
                        </div>

                        <div className="border-2 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 group hover:border-blue-200 bg-gradient-to-br from-white to-blue-50/50">
                            <div className="flex flex-col h-full">
                                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e" className="w-24 h-24 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300 ring-4 ring-blue-100 group-hover:ring-blue-300" alt="Profile" />
                                <h3 className="text-2xl font-bold mb-2">Michael Roberts</h3>
                                <p className="text-gray-600 mb-4 text-lg">Private Equity | Finance</p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-sm hover:from-blue-200 hover:to-purple-200 transition-colors cursor-pointer">Real Estate</span>
                                    <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-sm hover:from-blue-200 hover:to-purple-200 transition-colors cursor-pointer">Banking</span>
                                    <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-sm hover:from-blue-200 hover:to-purple-200 transition-colors cursor-pointer">Insurance</span>
                                </div>
                                <p className="text-gray-600 mb-6 line-clamp-3">Managing $500M+ investment portfolio. Specializes in late-stage growth companies.</p>
                                <div className="mt-auto">
                                    <button className="w-full py-3 border-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white border-transparent hover:from-blue-600 hover:to-purple-600 transition-all duration-300 text-lg font-semibold shadow-lg hover:shadow-xl">View Profile</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Investors;
