import React from "react";


/* Don't forget to download the CSS file too 
OR remove the following line if you're already using Tailwind */

import "./network.css";

const NetworkPage = () => {
    return (
        <div id="webcrumbs-network">
            <div className="w-full min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50 via-purple-50 to-pink-50 p-8 font-sans">
                <div className="max-w-7xl mx-auto space-y-16">
                    <header className="text-center space-y-4 relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-purple-200 blur-3xl opacity-30 -z-10 animate-pulse" />
                        <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent transform hover:scale-105 transition-transform duration-300">Network Hub</h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">Connect with key players in the innovation ecosystem - from groundbreaking startups to visionary investors and brilliant innovators.</p>
                    </header>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 perspective-1000">
                        <div className="group relative overflow-hidden rounded-3xl bg-white/80 backdrop-blur-lg p-8 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-200 transform hover:rotate-1">
                            <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 opacity-10 transition-all duration-500 group-hover:scale-150 group-hover:opacity-20" />
                            <span className="material-symbols-outlined mb-6 text-7xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 transform group-hover:scale-110 transition-transform duration-300">rocket_launch</span>
                            <h2 className="mb-4 text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Startups</h2>
                            <p className="mb-8 text-lg text-gray-600">Connect with innovative startups revolutionizing industries through cutting-edge technology and disruptive solutions.</p>
                            <a href="/startups" className="group inline-flex items-center rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:from-blue-600 hover:to-blue-700 hover:shadow-lg hover:shadow-blue-200/50">
                                <span>Browse Startups</span>
                                <span className="material-symbols-outlined ml-2 transition-transform duration-300 group-hover:translate-x-1">arrow_forward</span>
                            </a>
                        </div>

                        <div className="group relative overflow-hidden rounded-3xl bg-white/80 backdrop-blur-lg p-8 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-200 transform hover:rotate-1">
                            <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 opacity-10 transition-all duration-500 group-hover:scale-150 group-hover:opacity-20" />
                            <span className="material-symbols-outlined mb-6 text-7xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600 transform group-hover:scale-110 transition-transform duration-300">trending_up</span>
                            <h2 className="mb-4 text-3xl font-extrabold bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">Investors</h2>
                            <p className="mb-8 text-lg text-gray-600">Meet venture capitalists, angel investors, and investment firms looking for the next big opportunity in technology.</p>
                            <a href="/investors" className="group inline-flex items-center rounded-xl bg-gradient-to-r from-purple-500 to-purple-600 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:from-purple-600 hover:to-purple-700 hover:shadow-lg hover:shadow-purple-200/50">
                                <span>Meet Investors</span>
                                <span className="material-symbols-outlined ml-2 transition-transform duration-300 group-hover:translate-x-1">arrow_forward</span>
                            </a>
                        </div>

                        <div className="group relative overflow-hidden rounded-3xl bg-white/80 backdrop-blur-lg p-8 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-pink-200 transform hover:rotate-1">
                            <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 opacity-10 transition-all duration-500 group-hover:scale-150 group-hover:opacity-20" />
                            <span className="material-symbols-outlined mb-6 text-7xl text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-pink-600 transform group-hover:scale-110 transition-transform duration-300">lightbulb</span>
                            <h2 className="mb-4 text-3xl font-extrabold bg-gradient-to-r from-pink-600 to-pink-400 bg-clip-text text-transparent">Innovators</h2>
                            <p className="mb-8 text-lg text-gray-600">Join a community of creative minds, entrepreneurs, and tech visionaries shaping the future through innovation.</p>
                            <a href="/innovators" className="group inline-flex items-center rounded-xl bg-gradient-to-r from-pink-500 to-pink-600 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:from-pink-600 hover:to-pink-700 hover:shadow-lg hover:shadow-pink-200/50">
                                <span>Connect with Innovators</span>
                                <span className="material-symbols-outlined ml-2 transition-transform duration-300 group-hover:translate-x-1">arrow_forward</span>
                            </a>
                        </div>
                    </div>

                    <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-12 shadow-lg hover:shadow-xl transition-all duration-300">
                            <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Latest Success Stories</h2>
                            <div className="space-y-6">
                                <div className="group p-6 rounded-2xl bg-gradient-to-r from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100 transition-all duration-300">
                                    <h3 className="text-2xl font-bold mb-2">TechVision Raises $50M</h3>
                                    <p className="text-gray-600">Revolutionary AI platform secures Series B funding led by top venture capitals.</p>
                                </div>
                                <div className="group p-6 rounded-2xl bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 transition-all duration-300">
                                    <h3 className="text-2xl font-bold mb-2">GreenTech Acquisition</h3>
                                    <p className="text-gray-600">Sustainable energy startup acquired by industry leader for $200M.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-12 shadow-lg hover:shadow-xl transition-all duration-300">
                            <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Upcoming Events</h2>
                            <div className="space-y-6">
                                <div className="group p-6 rounded-2xl bg-gradient-to-r from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100 transition-all duration-300">
                                    <h3 className="text-2xl font-bold mb-2">Innovation Summit 2024</h3>
                                    <p className="text-gray-600">Join industry leaders for our annual technology and innovation conference.</p>
                                    <div className="flex items-center mt-4 text-gray-500">
                                        <span className="material-symbols-outlined mr-2">calendar_today</span>
                                        <span>March 15-17, 2024</span>
                                    </div>
                                </div>
                                <div className="group p-6 rounded-2xl bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 transition-all duration-300">
                                    <h3 className="text-2xl font-bold mb-2">Startup Pitch Night</h3>
                                    <p className="text-gray-600">Watch promising startups pitch their ideas to top investors.</p>
                                    <div className="flex items-center mt-4 text-gray-500">
                                        <span className="material-symbols-outlined mr-2">calendar_today</span>
                                        <span>April 5, 2024</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default NetworkPage;