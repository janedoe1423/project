import React from "react";
import "./snapshot.css";

const MSnapshot = () => {
    return (
        <div id="webcrumbs-msnapshot">
            <div className="w-[1200px] bg-gradient-to-br from-slate-50 via-white to-slate-50 rounded-2xl shadow-xl p-10 backdrop-blur-sm">
                <header className="mb-10 hover:transform hover:scale-105 transition-all duration-300">
                    <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent animate-gradient">Market Analysis Snapshot</h1>
                    <p className="text-gray-600 text-lg font-light tracking-wide">A comprehensive overview of current market trends and insights</p>
                </header>

                <div className="grid grid-cols-3 gap-8">
                    <section className="bg-gradient-to-br from-blue-50 to-white p-7 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 backdrop-blur-sm">
                        <div className="flex items-center mb-5">
                            <span className="material-symbols-outlined text-blue-600 text-3xl transform hover:rotate-180 transition-transform duration-500">trending_up</span>
                            <h2 className="text-xl font-semibold ml-3 hover:text-blue-600 transition-colors duration-300">Industry Highlights</h2>
                        </div>
                        <ul className="space-y-4">
                            <li className="flex items-center bg-white/80 p-3 rounded-xl hover:shadow-lg transition-all duration-300 hover:bg-blue-50">
                                <span className="material-symbols-outlined text-blue-500 transform hover:scale-125 transition-transform duration-300">check_circle</span>
                                <span className="ml-3 hover:font-medium transition-all">15% YoY market growth</span>
                            </li>
                            <li className="flex items-center bg-white/80 p-3 rounded-xl hover:shadow-lg transition-all duration-300 hover:bg-blue-50">
                                <span className="material-symbols-outlined text-blue-500 transform hover:scale-125 transition-transform duration-300">check_circle</span>
                                <span className="ml-3 hover:font-medium transition-all">Emerging tech adoption up 30%</span>
                            </li>
                            <li className="flex items-center bg-white/80 p-3 rounded-xl hover:shadow-lg transition-all duration-300 hover:bg-blue-50">
                                <span className="material-symbols-outlined text-blue-500 transform hover:scale-125 transition-transform duration-300">check_circle</span>
                                <span className="ml-3 hover:font-medium transition-all">Sustainable practices implementation</span>
                            </li>
                        </ul>
                    </section>

                    <section className="bg-gradient-to-br from-violet-50 to-white p-7 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 backdrop-blur-sm">
                        <div className="flex items-center mb-5">
                            <span className="material-symbols-outlined text-violet-600 text-3xl transform hover:rotate-180 transition-transform duration-500">insights</span>
                            <h2 className="text-xl font-semibold ml-3 hover:text-violet-600 transition-colors duration-300">Key Statistics</h2>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white/80 p-5 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:scale-110 hover:bg-violet-50">
                                <p className="text-4xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">$2.5B</p>
                                <p className="text-sm text-gray-600 mt-2">Market Size</p>
                            </div>
                            <div className="bg-white/80 p-5 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:scale-110 hover:bg-violet-50">
                                <p className="text-4xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">32%</p>
                                <p className="text-sm text-gray-600 mt-2">Growth Rate</p>
                            </div>
                        </div>
                    </section>

                    <section className="bg-gradient-to-br from-amber-50 to-white p-7 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 backdrop-blur-sm">
                        <div className="flex items-center mb-5">
                            <span className="material-symbols-outlined text-amber-600 text-3xl transform hover:rotate-180 transition-transform duration-500">rocket_launch</span>
                            <h2 className="text-xl font-semibold ml-3 hover:text-amber-600 transition-colors duration-300">Top Startups</h2>
                        </div>
                        <ul className="space-y-4">
                            <li className="bg-white/80 p-4 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:bg-amber-50">
                                <div className="flex items-center justify-between">
                                    <span className="font-semibold">TechCorp</span>
                                    <span className="text-green-500 font-medium">+45% growth</span>
                                </div>
                            </li>
                            <li className="bg-white/80 p-4 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:bg-amber-50">
                                <div className="flex items-center justify-between">
                                    <span className="font-semibold">InnovateLabs</span>
                                    <span className="text-green-500 font-medium">+38% growth</span>
                                </div>
                            </li>
                        </ul>
                    </section>

                    <section className="bg-gradient-to-br from-emerald-50 to-white p-7 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 backdrop-blur-sm">
                        <div className="flex items-center mb-5">
                            <span className="material-symbols-outlined text-emerald-600 text-3xl transform hover:rotate-180 transition-transform duration-500">trending_up</span>
                            <h2 className="text-xl font-semibold ml-3 hover:text-emerald-600 transition-colors duration-300">Market Growth</h2>
                        </div>
                        <ul className="space-y-4">
                            <li className="bg-white/80 p-4 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:bg-emerald-50">
                                <span className="font-semibold">E-commerce Expansion</span>
                                <div className="w-full bg-gray-100 rounded-full h-2.5 mt-3 overflow-hidden">
                                    <div className="bg-gradient-to-r from-emerald-400 to-emerald-600 h-2.5 rounded-full animate-pulse" style={{ width: '62%' }}></div>
                                </div>
                                <p className="text-sm text-gray-600 mt-2">+62% YoY Growth</p>
                            </li>
                            <li className="bg-white/80 p-4 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:bg-emerald-50">
                                <span className="font-semibold">Digital Transformation</span>
                                <div className="w-full bg-gray-100 rounded-full h-2.5 mt-3 overflow-hidden">
                                    <div className="bg-gradient-to-r from-emerald-400 to-emerald-600 h-2.5 rounded-full animate-pulse" style={{ width: '48%' }}></div>
                                </div>
                                <p className="text-sm text-gray-600 mt-2">+48% YoY Growth</p>
                            </li>
                        </ul>
                    </section>

                    <section className="bg-gradient-to-br from-rose-50 to-white p-7 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 backdrop-blur-sm">
                        <div className="flex items-center mb-5">
                            <span className="material-symbols-outlined text-rose-600 text-3xl transform hover:rotate-180 transition-transform duration-500">business</span>
                            <h2 className="text-xl font-semibold ml-3 hover:text-rose-600 transition-colors duration-300">Industry Leaders</h2>
                        </div>
                        <div className="space-y-4">
                            <div className="bg-white/80 p-4 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:bg-rose-50">
                                <p className="font-semibold">TechGiant Corp</p>
                                <p className="text-sm text-gray-600 mt-2">Market Cap: $2.1T</p>
                            </div>
                            <div className="bg-white/80 p-4 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:bg-rose-50">
                                <p className="font-semibold">InnovateTech Inc</p>
                                <p className="text-sm text-gray-600 mt-2">Market Cap: $1.8T</p>
                            </div>
                        </div>
                    </section>

                    <section className="bg-gradient-to-br from-amber-50 to-white p-7 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 backdrop-blur-sm">
                        <div className="flex items-center mb-5">
                            <span className="material-symbols-outlined text-amber-600 text-3xl transform hover:rotate-180 transition-transform duration-500">lightbulb</span>
                            <h2 className="text-xl font-semibold ml-3 hover:text-amber-600 transition-colors duration-300">Growth Sectors</h2>
                        </div>
                        <ul className="space-y-4">
                            <li className="bg-white/80 p-4 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:bg-amber-50">
                                <span className="font-semibold">AI & ML</span>
                                <div className="w-full bg-gray-100 rounded-full h-2.5 mt-3 overflow-hidden">
                                    <div className="bg-gradient-to-r from-amber-400 to-amber-600 h-2.5 rounded-full animate-pulse" style={{ width: '85%' }}></div>
                                </div>
                            </li>
                            <li className="bg-white/80 p-4 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:bg-amber-50">
                                <span className="font-semibold">Blockchain</span>
                                <div className="w-full bg-gray-100 rounded-full h-2.5 mt-3 overflow-hidden">
                                    <div className="bg-gradient-to-r from-amber-400 to-amber-600 h-2.5 rounded-full animate-pulse" style={{ width: '75%' }}></div>
                                </div>
                            </li>
                        </ul>
                    </section>

                    <section className="bg-gradient-to-br from-indigo-50 to-white p-7 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 backdrop-blur-sm">
                        <div className="flex items-center mb-5">
                            <span className="material-symbols-outlined text-indigo-600 text-3xl transform hover:rotate-180 transition-transform duration-500">payments</span>
                            <h2 className="text-xl font-semibold ml-3 hover:text-indigo-600 transition-colors duration-300">Funded Startups</h2>
                        </div>
                        <ul className="space-y-4">
                            <li className="bg-white/80 p-4 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:bg-indigo-50">
                                <div className="flex items-center justify-between">
                                    <span className="font-semibold">AI Solutions Co</span>
                                    <span className="text-indigo-600 font-medium">$500M</span>
                                </div>
                            </li>
                            <li className="bg-white/80 p-4 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:bg-indigo-50">
                                <div className="flex items-center justify-between">
                                    <span className="font-semibold">CloudTech</span>
                                    <span className="text-indigo-600 font-medium">$350M</span>
                                </div>
                            </li>
                        </ul>
                    </section>

                    <section className="bg-gradient-to-br from-fuchsia-50 to-white p-7 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 backdrop-blur-sm">
                        <div className="flex items-center mb-5">
                            <span className="material-symbols-outlined text-fuchsia-600 text-3xl transform hover:rotate-180 transition-transform duration-500">people</span>
                            <h2 className="text-xl font-semibold ml-3 hover:text-fuchsia-600 transition-colors duration-300">Consumer Trends</h2>
                        </div>
                        <div className="space-y-4">
                            <details className="bg-white/80 p-4 rounded-xl group cursor-pointer hover:shadow-lg transition-all duration-300 hover:bg-fuchsia-50">
                                <summary className="font-semibold flex items-center">
                                    <span className="material-symbols-outlined mr-3 text-fuchsia-600 group-hover:rotate-180 transition-transform duration-500">trending_up</span>
                                    Digital Services
                                </summary>
                                <p className="mt-3 text-gray-600 pl-9">+85% adoption rate in 2023</p>
                            </details>
                            <details className="bg-white/80 p-4 rounded-xl group cursor-pointer hover:shadow-lg transition-all duration-300 hover:bg-fuchsia-50">
                                <summary className="font-semibold flex items-center">
                                    <span className="material-symbols-outlined mr-3 text-fuchsia-600 group-hover:rotate-180 transition-transform duration-500">trending_up</span>
                                    Sustainable Products
                                </summary>
                                <p className="mt-3 text-gray-600 pl-9">+65% consumer preference</p>
                            </details>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default MSnapshot;
