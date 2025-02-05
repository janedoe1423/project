import React from "react";


/* Don't forget to download the CSS file too 
OR remove the following line if you're already using Tailwind */

import "./Innovations.css";

const Innovations = () => {
    return (
        <div id="webcrumbs-innovations">
            <div className="w-[1200px] font-sans">
                <div className="relative h-[500px] overflow-hidden rounded-2xl">
                    <div className="flex transition-transform duration-[20s] animate-carousel">
                        <div className="min-w-full relative">
                            <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa" className="w-full h-[500px] object-cover transition-transform duration-500 hover:scale-110 animate-slowPulse" alt="Innovation" />
                            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 flex items-center justify-center backdrop-blur-sm transition-all duration-500 hover:backdrop-blur-none">
                                <div className="text-white text-center transform transition-all duration-500 hover:translate-y-[-8px] animate-float">
                                    <h1 className="text-7xl font-black mb-6 tracking-tight hover:scale-105 transition-transform">Future of Innovation</h1>
                                    <p className="text-2xl font-light animate-fadeIn">Transforming ideas into reality</p>
                                </div>
                            </div>
                        </div>
                        <div className="min-w-full relative">
                            <img src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e" className="w-full h-[500px] object-cover transition-transform duration-500 hover:scale-110 animate-slowPulse" alt="Technology" />
                            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 flex items-center justify-center backdrop-blur-sm transition-all duration-500 hover:backdrop-blur-none">
                                <div className="text-white text-center transform transition-all duration-500 hover:translate-y-[-8px] animate-float">
                                    <h1 className="text-7xl font-black mb-6 tracking-tight hover:scale-105 transition-transform">Leading Technology</h1>
                                    <p className="text-2xl font-light animate-fadeIn">Pushing boundaries forward</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-4 gap-8 my-16">
                    <div className="bg-gradient-to-br from-blue-500/90 to-violet-600/90 p-8 rounded-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 backdrop-blur-lg animate-bounce-slow">
                        <h3 className="text-white text-4xl font-black mb-3 animate-pulse">2000+</h3>
                        <p className="text-white/90 text-lg">Innovations Created</p>
                    </div>
                    <div className="bg-gradient-to-br from-emerald-500/90 to-teal-600/90 p-8 rounded-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/20 backdrop-blur-lg animate-bounce-slow delay-100">
                        <h3 className="text-white text-4xl font-black mb-3 animate-pulse">500+</h3>
                        <p className="text-white/90 text-lg">Active Innovators</p>
                    </div>
                    <div className="bg-gradient-to-br from-amber-500/90 to-red-600/90 p-8 rounded-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/20 backdrop-blur-lg animate-bounce-slow delay-200">
                        <h3 className="text-white text-4xl font-black mb-3 animate-pulse">150+</h3>
                        <p className="text-white/90 text-lg">Countries Reached</p>
                    </div>
                    <div className="bg-gradient-to-br from-fuchsia-500/90 to-rose-600/90 p-8 rounded-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-fuchsia-500/20 backdrop-blur-lg animate-bounce-slow delay-300">
                        <h3 className="text-white text-4xl font-black mb-3 animate-pulse">$100M+</h3>
                        <p className="text-white/90 text-lg">Funding Raised</p>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-10 mb-16">
                    <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-xl p-10 transition-all duration-500 hover:shadow-2xl hover:translate-y-[-8px] animate-float">
                        <span className="material-symbols-outlined text-6xl text-blue-600 transition-all duration-500 hover:scale-110 hover:rotate-12 animate-spin-slow">rocket_launch</span>
                        <h2 className="text-3xl font-black mt-6 mb-4 hover:scale-105 transition-transform">Latest Innovations</h2>
                        <p className="text-gray-600 text-lg">Discover groundbreaking technologies and solutions that are shaping our future.</p>
                        <button className="mt-8 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/20 hover:translate-y-[-4px] animate-pulse">Explore Now</button>
                    </div>
                    <div className="bg-gradient-to-br from-white to-green-50 rounded-2xl shadow-xl p-10 transition-all duration-500 hover:shadow-2xl hover:translate-y-[-8px] animate-float delay-150">
                        <span className="material-symbols-outlined text-6xl text-green-600 transition-all duration-500 hover:scale-110 hover:rotate-12 animate-bounce">group</span>
                        <h2 className="text-3xl font-black mt-6 mb-4 hover:scale-105 transition-transform">Top Innovators</h2>
                        <p className="text-gray-600 text-lg">Meet the brilliant minds behind revolutionary ideas and transformative solutions.</p>
                        <button className="mt-8 bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-500 hover:shadow-xl hover:shadow-green-500/20 hover:translate-y-[-4px] animate-pulse">Meet Them</button>
                    </div>
                </div>

                <div className="mb-8">
                    <div className="flex gap-4 mb-8">
                        <button className="px-6 py-3 rounded-full bg-gradient-to-r from-gray-100 to-gray-200 text-lg font-semibold transition-all duration-500 hover:shadow-lg hover:translate-y-[-4px] hover:scale-105 animate-pulse">All</button>
                        <button className="px-6 py-3 rounded-full bg-gradient-to-r from-gray-100 to-gray-200 text-lg font-semibold transition-all duration-500 hover:shadow-lg hover:translate-y-[-4px] hover:scale-105 animate-pulse delay-100">Technology</button>
                        <button className="px-6 py-3 rounded-full bg-gradient-to-r from-gray-100 to-gray-200 text-lg font-semibold transition-all duration-500 hover:shadow-lg hover:translate-y-[-4px] hover:scale-105 animate-pulse delay-200">Healthcare</button>
                        <button className="px-6 py-3 rounded-full bg-gradient-to-r from-gray-100 to-gray-200 text-lg font-semibold transition-all duration-500 hover:shadow-lg hover:translate-y-[-4px] hover:scale-105 animate-pulse delay-300">Environment</button>
                    </div>

                    <div className="grid grid-cols-3 gap-8">
                        <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:translate-y-[-8px] animate-float">
                            <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" className="w-full h-56 object-cover transition-transform duration-500 hover:scale-110" alt="Innovation" />
                            <div className="p-8">
                                <h3 className="text-2xl font-black mb-3 hover:scale-105 transition-transform">AI-Powered Healthcare</h3>
                                <p className="text-gray-600 text-lg mb-6">Revolutionary AI system for early disease detection</p>
                                <div className="flex items-center gap-3">
                                    <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80" className="w-10 h-10 rounded-full transition-transform duration-500 hover:scale-110 animate-spin-slow" alt="Innovator" />
                                    <span className="text-lg font-medium">Sarah Johnson</span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gradient-to-br from-white to-green-50 rounded-2xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:translate-y-[-8px] animate-float delay-150">
                            <img src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69" className="w-full h-56 object-cover transition-transform duration-500 hover:scale-110" alt="Innovation" />
                            <div className="p-8">
                                <h3 className="text-2xl font-black mb-3 hover:scale-105 transition-transform">Green Energy Solution</h3>
                                <p className="text-gray-600 text-lg mb-6">Sustainable power generation technology</p>
                                <div className="flex items-center gap-3">
                                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d" className="w-10 h-10 rounded-full transition-transform duration-500 hover:scale-110 animate-spin-slow" alt="Innovator" />
                                    <span className="text-lg font-medium">Michael Chen</span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gradient-to-br from-white to-purple-50 rounded-2xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:translate-y-[-8px] animate-float delay-300">
                            <img src="https://images.unsplash.com/photo-1531297484001-80022131f5a1" className="w-full h-56 object-cover transition-transform duration-500 hover:scale-110" alt="Innovation" />
                            <div className="p-8">
                                <h3 className="text-2xl font-black mb-3 hover:scale-105 transition-transform">Quantum Computing</h3>
                                <p className="text-gray-600 text-lg mb-6">Next-generation computing platform</p>
                                <div className="flex items-center gap-3">
                                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330" className="w-10 h-10 rounded-full transition-transform duration-500 hover:scale-110 animate-spin-slow" alt="Innovator" />
                                    <span className="text-lg font-medium">Emily Zhang</span>
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
