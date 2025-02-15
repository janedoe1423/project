import React from "react";
import "./Innovations.css";

const Innovations = () => {
    return (
        <div id="webcrumbs-innovations">
            <div className="w-[1200px] bg-white">
                <div className="relative h-[400px] overflow-hidden group">
                    <div className="flex transition-transform duration-1000 ease-in-out transform hover:scale-105 h-full animate-slide">
                        <img src="https://webcrumbs-innovations.cloud/placeholder" className="w-full h-full object-cover transition-all duration-700 hover:brightness-110" alt="Innovation" />
                        <img src="https://images.unsplash.com/photo-1516110833967-0b5716ca1387" className="w-full h-full object-cover transition-all duration-700 hover:brightness-110" alt="Technology" />
                        <img src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e" className="w-full h-full object-cover transition-all duration-700 hover:brightness-110" alt="Science" />
                    </div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10">
                        <h1 className="text-6xl font-bold mb-8 animate-fade-in transition-transform duration-500 hover:scale-105">Discover Breakthrough Innovations</h1>
                        <div className="flex gap-8 justify-center">
                            <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl hover:scale-110 hover:bg-white/20 transition-all duration-500 cursor-pointer shadow-lg border border-white/20 hover:shadow-2xl">
                                <span className="text-5xl font-bold transition-all duration-500 hover:text-blue-300">2000+</span>
                                <p className="text-lg mt-2 transition-all duration-500">Innovations Listed</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl hover:scale-110 hover:bg-white/20 transition-all duration-500 cursor-pointer shadow-lg border border-white/20 hover:shadow-2xl">
                                <span className="text-5xl font-bold transition-all duration-500 hover:text-blue-300">150+</span>
                                <p className="text-lg mt-2 transition-all duration-500">Patent Pending</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl hover:scale-110 hover:bg-white/20 transition-all duration-500 cursor-pointer shadow-lg border border-white/20 hover:shadow-2xl">
                                <span className="text-5xl font-bold transition-all duration-500 hover:text-blue-300">50+</span>
                                <p className="text-lg mt-2 transition-all duration-500">Industries</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-12">
                    <div className="flex gap-6 mb-12">
                        <div className="flex-1 relative group">
                            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-blue-600 transition-all duration-300 group-hover:scale-110">search</span>
                            <input type="text" placeholder="Search innovations..." className="w-full pl-12 pr-4 py-4 border-2 rounded-xl hover:border-blue-600 focus:border-blue-600 focus:ring-4 focus:ring-blue-200 transition-all duration-300 outline-none text-lg" />
                        </div>
                        <details className="relative">
                            <summary className="list-none px-8 py-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl cursor-pointer hover:from-blue-100 hover:to-purple-100 transition-all duration-300 flex items-center gap-3 border-2 border-transparent hover:border-blue-200">
                                Category
                                <span className="material-symbols-outlined transition-transform duration-300">expand_more</span>
                            </summary>
                            <div className="absolute mt-2 bg-white shadow-xl rounded-xl p-4 min-w-[240px] z-10 border-2">
                                <label className="block p-3 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 rounded-lg cursor-pointer transition-all duration-300">
                                    <input type="checkbox" className="mr-3 accent-blue-600 transition-all duration-300" />
                                    AI & Machine Learning
                                </label>
                                <label className="block p-3 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 rounded-lg cursor-pointer transition-all duration-300">
                                    <input type="checkbox" className="mr-3 accent-blue-600 transition-all duration-300" />
                                    Clean Energy
                                </label>
                                <label className="block p-3 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 rounded-lg cursor-pointer transition-all duration-300">
                                    <input type="checkbox" className="mr-3 accent-blue-600 transition-all duration-300" />
                                    Biotechnology
                                </label>
                            </div>
                        </details>
                    </div>

                    <div className="grid grid-cols-3 gap-8">
                        <div className="border-2 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 group hover:border-blue-200 bg-gradient-to-br from-white to-blue-50/50 hover:-translate-y-2">
                            <div className="flex flex-col h-full">
                                <div className="w-full h-48 rounded-xl overflow-hidden mb-6">
                                    <img src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e" className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500" alt="Innovation" />
                                </div>
                                <h3 className="text-2xl font-bold mb-2 transition-all duration-300 group-hover:text-blue-600">QuantumAI Processor</h3>
                                <p className="text-gray-600 mb-4 text-lg transition-all duration-300">By Quantum Computing Inc.</p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-sm hover:from-blue-200 hover:to-purple-200 transition-all duration-300 cursor-pointer hover:scale-105">Quantum Computing</span>
                                    <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-sm hover:from-blue-200 hover:to-purple-200 transition-all duration-300 cursor-pointer hover:scale-105">AI</span>
                                </div>
                                <p className="text-gray-600 mb-6 line-clamp-3 transition-all duration-300">Revolutionary quantum processor that combines AI algorithms with quantum computing capabilities.</p>
                                <div className="mt-auto">
                                    <button className="w-full py-3 border-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white border-transparent hover:from-blue-600 hover:to-purple-600 transition-all duration-500 text-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105">Learn More</button>
                                </div>
                            </div>
                        </div>

                        <div className="border-2 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 group hover:border-blue-200 bg-gradient-to-br from-white to-blue-50/50 hover:-translate-y-2">
                            <div className="flex flex-col h-full">
                                <div className="w-full h-48 rounded-xl overflow-hidden mb-6">
                                    <img src="https://images.unsplash.com/photo-1516110833967-0b5716ca1387" className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500" alt="Innovation" />
                                </div>
                                <h3 className="text-2xl font-bold mb-2 transition-all duration-300 group-hover:text-blue-600">SolarFlex Panels</h3>
                                <p className="text-gray-600 mb-4 text-lg transition-all duration-300">By GreenTech Solutions</p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-sm hover:from-blue-200 hover:to-purple-200 transition-all duration-300 cursor-pointer hover:scale-105">Clean Energy</span>
                                    <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-sm hover:from-blue-200 hover:to-purple-200 transition-all duration-300 cursor-pointer hover:scale-105">Solar</span>
                                </div>
                                <p className="text-gray-600 mb-6 line-clamp-3 transition-all duration-300">Flexible solar panels with 40% higher efficiency than traditional panels.</p>
                                <div className="mt-auto">
                                    <button className="w-full py-3 border-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white border-transparent hover:from-blue-600 hover:to-purple-600 transition-all duration-500 text-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105">Learn More</button>
                                </div>
                            </div>
                        </div>

                        <div className="border-2 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 group hover:border-blue-200 bg-gradient-to-br from-white to-blue-50/50 hover:-translate-y-2">
                            <div className="flex flex-col h-full">
                                <div className="w-full h-48 rounded-xl overflow-hidden mb-6">
                                    <img src="https://webcrumbs-innovations.cloud/placeholder" className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500" alt="Innovation" />
                                </div>
                                <h3 className="text-2xl font-bold mb-2 transition-all duration-300 group-hover:text-blue-600">BioRegenX</h3>
                                <p className="text-gray-600 mb-4 text-lg transition-all duration-300">By MediGen Labs</p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-sm hover:from-blue-200 hover:to-purple-200 transition-all duration-300 cursor-pointer hover:scale-105">Biotech</span>
                                    <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-sm hover:from-blue-200 hover:to-purple-200 transition-all duration-300 cursor-pointer hover:scale-105">Healthcare</span>
                                </div>
                                <p className="text-gray-600 mb-6 line-clamp-3 transition-all duration-300">Breakthrough tissue regeneration technology using stem cell research.</p>
                                <div className="mt-auto">
                                    <button className="w-full py-3 border-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white border-transparent hover:from-blue-600 hover:to-purple-600 transition-all duration-500 text-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105">Learn More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Innovations;
