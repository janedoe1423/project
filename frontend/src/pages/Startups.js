import React from "react";
import Chart from "react-apexcharts";

/* Don't forget to download the CSS file too 
OR remove the following line if you're already using Tailwind */

import "./Startups.css";

const Startups = () => {
    return (
        <div id="webcrumbs-startups">
            <div className="w-[1200px] bg-gray-50">
                <div className="relative h-[500px] overflow-hidden">
                    <div className="flex animate-slide">
                        <div className="min-w-full relative">
                            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c" className="w-full h-[500px] object-cover transition-transform duration-300 hover:scale-105" alt="startup" />
                        </div>
                        <div className="min-w-full relative">
                            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f" className="w-full h-[500px] object-cover transition-transform duration-300 hover:scale-105" alt="startup" />
                        </div>
                        <div className="min-w-full relative">
                            <img src="https://images.unsplash.com/photo-1515187029135-18ee286d815b" className="w-full h-[500px] object-cover transition-transform duration-300 hover:scale-105" alt="startup" />
                        </div>
                    </div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10">
                        <h1 className="text-5xl font-bold mb-12 animate-fade-in">Discover Amazing Startups</h1>
                        <div className="flex gap-8 justify-center items-center">
                            <div className="text-center transform hover:-translate-y-2 transition-all duration-300 bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-4 rounded-xl backdrop-blur-sm">
                                <span className="text-4xl font-bold block mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">1000+</span>
                                <p className="text-lg opacity-80">Startups</p>
                            </div>
                            <div className="h-12 w-[1px] bg-white/30"></div>
                            <div className="text-center transform hover:-translate-y-2 transition-all duration-300 bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-4 rounded-xl backdrop-blur-sm">
                                <span className="text-4xl font-bold block mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">50M+</span>
                                <p className="text-lg opacity-80">Investment</p>
                            </div>
                            <div className="h-12 w-[1px] bg-white/30"></div>
                            <div className="text-center transform hover:-translate-y-2 transition-all duration-300 bg-gradient-to-br from-pink-500/20 to-red-500/20 p-4 rounded-xl backdrop-blur-sm">
                                <span className="text-4xl font-bold block mb-2 bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent">200+</span>
                                <p className="text-lg opacity-80">Industries</p>
                            </div>
                            <div className="h-12 w-[1px] bg-white/30"></div>
                            <div className="text-center transform hover:-translate-y-2 transition-all duration-300 bg-gradient-to-br from-red-500/20 to-orange-500/20 p-4 rounded-xl backdrop-blur-sm">
                                <span className="text-4xl font-bold block mb-2 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">5000+</span>
                                <p className="text-lg opacity-80">Employees</p>
                            </div>
                            <div className="h-12 w-[1px] bg-white/30"></div>
                            <div className="text-center transform hover:-translate-y-2 transition-all duration-300 bg-gradient-to-br from-orange-500/20 to-yellow-500/20 p-4 rounded-xl backdrop-blur-sm">
                                <span className="text-4xl font-bold block mb-2 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">150+</span>
                                <p className="text-lg opacity-80">Countries</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-8">
                    <div className="flex gap-4 mb-8">
                        <div className="flex-1 relative">
                            <span className="material-symbols-outlined absolute left-4 top-3 text-gray-400">search</span>
                            <input type="text" placeholder="Search startups..." className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" />
                        </div>
                        <details className="relative group">
                            <summary className="list-none px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg cursor-pointer hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all shadow-lg hover:shadow-blue-500/25">
                                <span className="flex items-center gap-2">
                                    <span className="material-symbols-outlined">filter_list</span>
                                    Filters
                                </span>
                            </summary>
                            <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 p-4 z-20 animate-fade-in">
                                <div className="space-y-4">
                                    <div>
                                        <label className="font-medium">Industry</label>
                                        <select className="w-full mt-1 rounded-md border border-gray-200 p-2 hover:border-blue-500 transition-all">
                                            <option>All Industries</option>
                                            <option>Technology</option>
                                            <option>Healthcare</option>
                                            <option>Finance</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="font-medium">Funding Stage</label>
                                        <select className="w-full mt-1 rounded-md border border-gray-200 p-2 hover:border-blue-500 transition-all">
                                            <option>All Stages</option>
                                            <option>Seed</option>
                                            <option>Series A</option>
                                            <option>Series B</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </details>
                    </div>

                    <div className="grid grid-cols-3 gap-6">
                        <div className="bg-gradient-to-br from-white to-blue-50 rounded-xl p-6 shadow-sm hover:shadow-xl transition-all relative">
                            <div className="flex items-center gap-4 mb-4">
                                <img src="https://logo.clearbit.com/stripe.com" className="w-12 h-12 rounded-lg transition-transform hover:scale-110" alt="company logo" />
                                <div>
                                    <h3 className="text-xl font-semibold">Stripe</h3>
                                    <p className="text-sm text-gray-500">San Francisco, CA</p>
                                </div>
                            </div>
                            <p className="text-gray-600 mb-4">Financial infrastructure for the internet</p>
                            <div className="space-y-3 mb-4">
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-500 flex items-center gap-2">
                                        <span className="material-symbols-outlined text-sm">calendar_today</span>Founded
                                    </span>
                                    <span className="font-medium">2010</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-500 flex items-center gap-2">
                                        <span className="material-symbols-outlined text-sm">payments</span>Total Funding
                                    </span>
                                    <span className="font-medium">$2.2B</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-500 flex items-center gap-2">
                                        <span className="material-symbols-outlined text-sm">group</span>Employees
                                    </span>
                                    <span className="font-medium">7000+</span>
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 py-1 rounded-full text-sm shadow-sm">Fintech</span>
                                <button className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all shadow-sm hover:shadow-blue-500/25">
                                    <span className="material-symbols-outlined">visibility</span>
                                    View Details
                                </button>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-white to-purple-50 rounded-xl p-6 shadow-sm hover:shadow-xl transition-all relative">
                            <div className="flex items-center gap-4 mb-4">
                                <img src="https://logo.clearbit.com/notion.so" className="w-12 h-12 rounded-lg transition-transform hover:scale-110" alt="company logo" />
                                <div>
                                    <h3 className="text-xl font-semibold">Notion</h3>
                                    <p className="text-sm text-gray-500">San Francisco, CA</p>
                                </div>
                            </div>
                            <p className="text-gray-600 mb-4">All-in-one workspace for notes and collaboration</p>
                            <div className="space-y-3 mb-4">
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-500 flex items-center gap-2">
                                        <span className="material-symbols-outlined text-sm">calendar_today</span>Founded
                                    </span>
                                    <span className="font-medium">2016</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-500 flex items-center gap-2">
                                        <span className="material-symbols-outlined text-sm">payments</span>Total Funding
                                    </span>
                                    <span className="font-medium">$275M</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-500 flex items-center gap-2">
                                        <span className="material-symbols-outlined text-sm">group</span>Employees
                                    </span>
                                    <span className="font-medium">400+</span>
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm shadow-sm">Productivity</span>
                                <button className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-purple-600 hover:to-purple-700 transition-all shadow-sm hover:shadow-purple-500/25">
                                    <span className="material-symbols-outlined">visibility</span>
                                    View Details
                                </button>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-white to-green-50 rounded-xl p-6 shadow-sm hover:shadow-xl transition-all relative">
                            <div className="flex items-center gap-4 mb-4">
                                <img src="https://logo.clearbit.com/vercel.com" className="w-12 h-12 rounded-lg transition-transform hover:scale-110" alt="company logo" />
                                <div>
                                    <h3 className="text-xl font-semibold">Vercel</h3>
                                    <p className="text-sm text-gray-500">San Francisco, CA</p>
                                </div>
                            </div>
                            <p className="text-gray-600 mb-4">Frontend development platform</p>
                            <div className="space-y-3 mb-4">
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-500 flex items-center gap-2">
                                        <span className="material-symbols-outlined text-sm">calendar_today</span>Founded
                                    </span>
                                    <span className="font-medium">2015</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-500 flex items-center gap-2">
                                        <span className="material-symbols-outlined text-sm">payments</span>Total Funding
                                    </span>
                                    <span className="font-medium">$313M</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-500 flex items-center gap-2">
                                        <span className="material-symbols-outlined text-sm">group</span>Employees
                                    </span>
                                    <span className="font-medium">400+</span>
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="bg-gradient-to-r from-green-500 to-green-600 text-white px-3 py-1 rounded-full text-sm shadow-sm">Developer Tools</span>
                                <button className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-lg hover:from-green-600 hover:to-green-700 transition-all shadow-sm hover:shadow-green-500/25">
                                    <span className="material-symbols-outlined">visibility</span>
                                    View Details
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Startups;