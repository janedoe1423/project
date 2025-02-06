import React from 'react';
import React from "react";
import Chart from "react-apexcharts";
import './overview.css'

const MOverview = () => {
    return (
        <div id="webcrumbs-moverview">
            <div className="w-[1200px] bg-gradient-to-br from-slate-50 to-white rounded-xl shadow-lg p-8">
                <header className="mb-8">
                    <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Market Analysis Overview</h1>
                    <p className="text-lg text-gray-600">Comprehensive analysis of market landscape, trends, and growth potential</p>
                </header>

                <div className="space-y-8">
                    <div className="grid grid-cols-2 gap-8">
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 hover:shadow-xl transition-all duration-300 border border-blue-100">
                            <div className="flex items-center justify-between mb-6">
                                <span className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Market Size & Growth</span>
                                <span className="material-symbols-outlined text-blue-500 hover:scale-110 transition-transform">monitoring</span>
                            </div>
                            <div className="flex items-center space-x-4 mb-4">
                                <div>
                                    <h3 className="font-semibold text-gray-700">Current Market Size</h3>
                                    <p className="text-lg bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent font-semibold">$245B with 12.5% YoY growth</p>
                                </div>
                            </div>
                            <div className="h-[200px] bg-white rounded-lg p-4 shadow-sm backdrop-blur-sm bg-opacity-70">
                                <Chart type="area" height={180} series={[{ name: 'Market Size', data: [30, 40, 45, 50, 49, 60, 70, 91] }]} options={{ chart: { toolbar: { show: false } }, stroke: { curve: 'smooth' }, fill: { type: 'gradient', gradient: { shadeIntensity: 1, opacityFrom: 0.7, opacityTo: 0.3, stops: [0, 90, 100] } }, colors: ['#4F46E5'], xaxis: { categories: ['2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'] } }} />
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-lg p-6 hover:shadow-xl transition-all duration-300 border border-orange-100">
                            <div className="flex items-center justify-between mb-6">
                                <span className="text-xl font-semibold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">Competitive Landscape</span>
                                <span className="material-symbols-outlined text-orange-500 hover:scale-110 transition-transform">corporate_fare</span>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-6 bg-white bg-opacity-70 rounded-lg hover:shadow-md transition-all group">
                                    <span className="material-symbols-outlined text-blue-500 text-3xl group-hover:scale-110 transition-transform">corporate_fare</span>
                                    <h4 className="font-semibold mt-3 mb-2 text-gray-800">Market Leaders</h4>
                                    <p className="text-sm mb-2 text-gray-600">45% market share</p>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2 rounded-full" style={{ width: '45%' }}></div>
                                    </div>
                                </div>
                                <div className="p-6 bg-white bg-opacity-70 rounded-lg hover:shadow-md transition-all group">
                                    <span className="material-symbols-outlined text-green-500 text-3xl group-hover:scale-110 transition-transform">rocket_launch</span>
                                    <h4 className="font-semibold mt-3 mb-2 text-gray-800">Startups</h4>
                                    <p className="text-sm mb-2 text-gray-600">15% market share</p>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div className="bg-gradient-to-r from-green-500 to-emerald-600 h-2 rounded-full" style={{ width: '15%' }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-8">
                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6 hover:shadow-xl transition-all duration-300 border border-green-100">
                            <div className="flex items-center justify-between mb-6">
                                <span className="text-xl font-semibold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Market Opportunities</span>
                                <span className="material-symbols-outlined text-green-500 hover:scale-110 transition-transform">widgets</span>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-center space-x-3 p-4 bg-white bg-opacity-70 rounded-lg hover:bg-opacity-100 transition-all shadow-sm group">
                                    <span className="material-symbols-outlined text-blue-500 group-hover:scale-110 transition-transform">expand_circle_down</span>
                                    <div>
                                        <h4 className="font-semibold text-gray-800">Market Expansion</h4>
                                        <p className="text-sm text-gray-600">New geographical territories and demographics</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-3 p-4 bg-white bg-opacity-70 rounded-lg hover:bg-opacity-100 transition-all shadow-sm group">
                                    <span className="material-symbols-outlined text-purple-500 group-hover:scale-110 transition-transform">diversity_3</span>
                                    <div>
                                        <h4 className="font-semibold text-gray-800">Partnership Potential</h4>
                                        <p className="text-sm text-gray-600">Strategic alliances and collaborations</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-3 p-4 bg-white bg-opacity-70 rounded-lg hover:bg-opacity-100 transition-all shadow-sm group">
                                    <span className="material-symbols-outlined text-orange-500 group-hover:scale-110 transition-transform">new_releases</span>
                                    <div>
                                        <h4 className="font-semibold text-gray-800">Innovation Potential</h4>
                                        <p className="text-sm text-gray-600">Product development and technological advancement</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-purple-50 to-fuchsia-50 rounded-lg p-6 hover:shadow-xl transition-all duration-300 border border-purple-100">
                            <div className="flex items-center justify-between mb-6">
                                <span className="text-xl font-semibold bg-gradient-to-r from-purple-600 to-fuchsia-600 bg-clip-text text-transparent">Investment Analysis</span>
                                <span className="material-symbols-outlined text-purple-500 hover:scale-110 transition-transform">payments</span>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-6 bg-white bg-opacity-70 rounded-lg hover:shadow-md transition-all group">
                                    <span className="material-symbols-outlined text-purple-500 text-3xl group-hover:scale-110 transition-transform">trending_up</span>
                                    <h4 className="font-semibold mt-3 mb-2 text-gray-800">ROI Potential</h4>
                                    <p className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-fuchsia-600 bg-clip-text text-transparent">25.8%</p>
                                    <p className="text-sm text-gray-600">Average annual return</p>
                                </div>
                                <div className="p-6 bg-white bg-opacity-70 rounded-lg hover:shadow-md transition-all group">
                                    <span className="material-symbols-outlined text-fuchsia-500 text-3xl group-hover:scale-110 transition-transform">timer</span>
                                    <h4 className="font-semibold mt-3 mb-2 text-gray-800">Payback Period</h4>
                                    <p className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-fuchsia-600 bg-clip-text text-transparent">2.5 Years</p>
                                    <p className="text-sm text-gray-600">Expected timeline</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-8">
                        <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-lg p-6 hover:shadow-xl transition-all duration-300 border border-pink-100">
                            <div className="flex items-center justify-between mb-6">
                                <span className="text-xl font-semibold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">Risk Assessment</span>
                                <span className="material-symbols-outlined text-pink-500 hover:scale-110 transition-transform">warning</span>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-center space-x-3 p-4 bg-white bg-opacity-70 rounded-lg hover:bg-opacity-100 transition-all shadow-sm group">
                                    <span className="material-symbols-outlined text-red-500 group-hover:scale-110 transition-transform">gpp_maybe</span>
                                    <div>
                                        <h4 className="font-semibold text-gray-800">Market Volatility</h4>
                                        <p className="text-sm text-gray-600">Economic fluctuations impact</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-3 p-4 bg-white bg-opacity-70 rounded-lg hover:bg-opacity-100 transition-all shadow-sm group">
                                    <span className="material-symbols-outlined text-yellow-500 group-hover:scale-110 transition-transform">policy</span>
                                    <div>
                                        <h4 className="font-semibold text-gray-800">Regulatory Changes</h4>
                                        <p className="text-sm text-gray-600">Compliance and legal considerations</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-cyan-50 to-sky-50 rounded-lg p-6 hover:shadow-xl transition-all duration-300 border border-cyan-100">
                            <div className="flex items-center justify-between mb-6">
                                <span className="text-xl font-semibold bg-gradient-to-r from-cyan-600 to-sky-600 bg-clip-text text-transparent">Technology Trends</span>
                                <span className="material-symbols-outlined text-cyan-500 hover:scale-110 transition-transform">devices</span>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-6 bg-white bg-opacity-70 rounded-lg hover:shadow-md transition-all group">
                                    <span className="material-symbols-outlined text-cyan-500 text-3xl group-hover:scale-110 transition-transform">cloud</span>
                                    <h4 className="font-semibold mt-3 mb-2 text-gray-800">Cloud Adoption</h4>
                                    <p className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-sky-600 bg-clip-text text-transparent">78%</p>
                                    <p className="text-sm text-gray-600">Market penetration</p>
                                </div>
                                <div className="p-6 bg-white bg-opacity-70 rounded-lg hover:shadow-md transition-all group">
                                    <span className="material-symbols-outlined text-sky-500 text-3xl group-hover:scale-110 transition-transform">smart_toy</span>
                                    <h4 className="font-semibold mt-3 mb-2 text-gray-800">AI Integration</h4>
                                    <p className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-sky-600 bg-clip-text text-transparent">45%</p>
                                    <p className="text-sm text-gray-600">Adoption rate</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default MOverview;
