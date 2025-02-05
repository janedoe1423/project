import React from "react";


/* Don't forget to download the CSS file too 
OR remove the following line if you're already using Tailwind */

import "./Investors.css";

const Investors = () => {
    return (
        <div id="webcrumbs-investors">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <section className="relative h-[500px] overflow-hidden rounded-xl mb-16 group">
                    <div className="flex transition-all duration-1000 animate-carousel">
                        <div className="min-w-full relative">
                            <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf" alt="Investment" className="w-full h-[500px] object-cover filter brightness-95" />
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-fuchsia-900/90 via-purple-900/60 to-transparent p-12 transform transition-all duration-500 translate-y-0 hover:translate-y-2">
                                <h1 className="text-4xl font-bold text-white mb-4 tracking-tight animate-fade-in">Find Your Perfect Investment Partner</h1>
                                <p className="text-lg text-white/90 backdrop-blur-sm animate-slide-up">Connect with top investors and grow your portfolio</p>
                            </div>
                        </div>
                        <div className="min-w-full relative">
                            <img src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f" alt="Trading" className="w-full h-[500px] object-cover filter brightness-95" />
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-purple-900/90 via-fuchsia-900/60 to-transparent p-12 transform transition-all duration-500 translate-y-0 hover:translate-y-2">
                                <h1 className="text-4xl font-bold text-white mb-4 tracking-tight animate-fade-in">Experience Professional Trading</h1>
                                <p className="text-lg text-white/90 backdrop-blur-sm animate-slide-up">Access advanced trading tools and insights</p>
                            </div>
                        </div>
                        <div className="min-w-full relative">
                            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f" alt="Analytics" className="w-full h-[500px] object-cover filter brightness-95" />
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-cyan-900/90 via-purple-900/60 to-transparent p-12 transform transition-all duration-500 translate-y-0 hover:translate-y-2">
                                <h1 className="text-4xl font-bold text-white mb-4 tracking-tight animate-fade-in">Data-Driven Decisions</h1>
                                <p className="text-lg text-white/90 backdrop-blur-sm animate-slide-up">Leverage analytics for smarter investments</p>
                            </div>
                        </div>
                    </div>
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                        <span className="h-2 w-2 rounded-full bg-white/50 animate-pulse"></span>
                        <span className="h-2 w-2 rounded-full bg-white/50 animate-pulse delay-75"></span>
                        <span className="h-2 w-2 rounded-full bg-white/50 animate-pulse delay-150"></span>
                    </div>
                </section>

                <section className="grid grid-cols-4 gap-6 p-8 bg-gradient-to-br from-rose-50 via-purple-50 to-cyan-50 rounded-xl shadow-lg mb-16">
                    <div className="bg-gradient-to-br from-white via-rose-50 to-white p-8 rounded-xl transition-all duration-300 hover:shadow-xl hover:scale-105">
                        <span className="material-symbols-outlined text-4xl text-rose-500">trending_up</span>
                        <h3 className="text-2xl font-bold mt-4 bg-gradient-to-r from-rose-500 to-purple-500 bg-clip-text text-transparent">$2.5B+</h3>
                        <p className="text-gray-600 mt-2">Total Investments</p>
                    </div>
                    <div className="bg-gradient-to-br from-white via-purple-50 to-white p-8 rounded-xl transition-all duration-300 hover:shadow-xl hover:scale-105">
                        <span className="material-symbols-outlined text-4xl text-purple-500">groups</span>
                        <h3 className="text-2xl font-bold mt-4 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">500+</h3>
                        <p className="text-gray-600 mt-2">Active Investors</p>
                    </div>
                    <div className="bg-gradient-to-br from-white via-pink-50 to-white p-8 rounded-xl transition-all duration-300 hover:shadow-xl hover:scale-105">
                        <span className="material-symbols-outlined text-4xl text-pink-500">rocket_launch</span>
                        <h3 className="text-2xl font-bold mt-4 bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">1000+</h3>
                        <p className="text-gray-600 mt-2">Successful Startups</p>
                    </div>
                    <div className="bg-gradient-to-br from-white via-cyan-50 to-white p-8 rounded-xl transition-all duration-300 hover:shadow-xl hover:scale-105">
                        <span className="material-symbols-outlined text-4xl text-cyan-500">public</span>
                        <h3 className="text-2xl font-bold mt-4 bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">50+</h3>
                        <p className="text-gray-600 mt-2">Countries</p>
                    </div>
                </section>

                <section className="p-8 bg-gradient-to-br from-rose-50 via-purple-50 to-cyan-50 rounded-xl shadow-lg">
                    <div className="flex justify-between items-center mb-10">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold bg-gradient-to-r from-rose-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">Our Investors</h2>
                            <p className="text-lg text-gray-600">Find and connect with investors matching your criteria</p>
                        </div>
                        <details className="relative">
                            <summary className="list-none bg-gradient-to-r from-rose-100 to-purple-100 px-5 py-2.5 rounded-xl cursor-pointer hover:from-purple-100 hover:to-rose-100 transition-all duration-300 hover:shadow-md">
                                <span className="flex items-center gap-2 text-sm font-medium text-purple-600">
                                    <span className="material-symbols-outlined text-lg">filter_list</span>
                                    Filter Results
                                </span>
                            </summary>
                            <div className="absolute right-0 mt-2 w-72 bg-white/80 rounded-xl shadow-xl p-5 z-10 backdrop-blur-sm">
                                <div className="space-y-4">
                                    <div>
                                        <label className="block mb-2 text-sm font-medium">Investment Range</label>
                                        <input type="range" className="w-full accent-purple-500" />
                                    </div>
                                    <div>
                                        <label className="block mb-2 text-sm font-medium">Industry</label>
                                        <select className="w-full p-2.5 text-sm border rounded-xl bg-gradient-to-r from-rose-50 to-purple-50 hover:from-purple-50 hover:to-rose-50 transition-all duration-300">
                                            <option>All Industries</option>
                                            <option>Technology</option>
                                            <option>Healthcare</option>
                                            <option>Finance</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </details>
                    </div>

                    <div className="grid grid-cols-3 gap-6">
                        {[1, 2, 3, 4, 5, 6].map(i => (
                            <div key={i} className="bg-gradient-to-br from-white via-purple-50 to-white backdrop-blur-sm rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02] group">
                                <div className="p-6">
                                    <div className="flex items-center gap-4">
                                        <img src={`https://randomuser.me/api/portraits/men/${i}.jpg`} alt="Investor" className="w-16 h-16 rounded-full ring-2 ring-purple-500 group-hover:scale-110 transition-all duration-300" />
                                        <div>
                                            <h3 className="font-bold text-lg">John Smith {i}</h3>
                                            <p className="text-purple-600 text-sm">Angel Investor</p>
                                        </div>
                                    </div>
                                    <div className="mt-4 space-y-2">
                                        <p className="text-gray-600 text-sm">Investment Range: $100K - $500K</p>
                                        <p className="text-gray-600 text-sm">Industries: Technology, Healthcare</p>
                                        <p className="text-gray-600 text-sm">Previous Investments: 15+</p>
                                    </div>
                                </div>
                                <div className="border-t px-6 py-4 bg-gradient-to-r from-rose-500 via-purple-500 to-cyan-500 group-hover:from-cyan-500 group-hover:via-purple-500 group-hover:to-rose-500 transition-all duration-500">
                                    <button className="w-full bg-white/10 backdrop-blur-sm text-white py-2.5 rounded-xl text-sm font-medium hover:bg-white/20 transition-all duration-300">
                                        Connect
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    )
}


export default Investors;
