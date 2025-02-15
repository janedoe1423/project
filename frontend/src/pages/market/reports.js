import React from "react";


/* Don't forget to download the CSS file too 
OR remove the following line if you're already using Tailwind */

import "./reports.css";

const MReports  = () => {
    return (
        <div id="webcrumbs-mreports">
            <div className="w-[1200px] bg-gradient-to-br from-indigo-50 via-white to-purple-50 rounded-xl shadow-lg p-8">
                <header className="mb-8">
                    <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">Reports Dashboard</h1>
                    <p className="text-gray-600">Access comprehensive market research and analytical reports</p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-blue-100">
                        <span className="material-symbols-outlined text-4xl mb-4 text-blue-600 bg-blue-100 p-2 rounded-lg">analytics</span>
                        <h2 className="text-xl font-semibold mb-3 text-blue-700">Industry Research Reports</h2>
                        <p className="text-gray-600 mb-4">Detailed sector-specific insights and market analysis</p>
                        <button className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg">
                            <span className="material-symbols-outlined">download</span>
                            Download Report
                        </button>
                    </div>

                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-purple-100">
                        <span className="material-symbols-outlined text-4xl mb-4 text-purple-600 bg-purple-100 p-2 rounded-lg">compare</span>
                        <h2 className="text-xl font-semibold mb-3 text-purple-700">Competitor Benchmarking</h2>
                        <p className="text-gray-600 mb-4">Comprehensive competitive analysis and insights</p>
                        <button className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-2 rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 shadow-md hover:shadow-lg">
                            <span className="material-symbols-outlined">download</span>
                            Download Report
                        </button>
                    </div>

                    <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-green-100">
                        <span className="material-symbols-outlined text-4xl mb-4 text-green-600 bg-green-100 p-2 rounded-lg">group</span>
                        <h2 className="text-xl font-semibold mb-3 text-green-700">Consumer Behavior Analysis</h2>
                        <p className="text-gray-600 mb-4">Deep insights into consumer trends and demands</p>
                        <button className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-teal-600 text-white px-4 py-2 rounded-lg hover:from-green-600 hover:to-teal-700 transition-all duration-300 shadow-md hover:shadow-lg">
                            <span className="material-symbols-outlined">download</span>
                            Download Report
                        </button>
                    </div>

                    <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-amber-100">
                        <span className="material-symbols-outlined text-4xl mb-4 text-amber-600 bg-amber-100 p-2 rounded-lg">payments</span>
                        <h2 className="text-xl font-semibold mb-3 text-amber-700">Investment Trends</h2>
                        <p className="text-gray-600 mb-4">Latest funding and investment pattern analysis</p>
                        <button className="flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white px-4 py-2 rounded-lg hover:from-amber-600 hover:to-orange-700 transition-all duration-300 shadow-md hover:shadow-lg">
                            <span className="material-symbols-outlined">download</span>
                            Download Report
                        </button>
                    </div>

                    <div className="bg-gradient-to-br from-red-50 to-rose-50 rounded-xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-red-100">
                        <span className="material-symbols-outlined text-4xl mb-4 text-red-600 bg-red-100 p-2 rounded-lg">policy</span>
                        <h2 className="text-xl font-semibold mb-3 text-red-700">Policy Impact Assessment</h2>
                        <p className="text-gray-600 mb-4">Regulatory changes and their market impact</p>
                        <button className="flex items-center gap-2 bg-gradient-to-r from-red-500 to-rose-600 text-white px-4 py-2 rounded-lg hover:from-red-600 hover:to-rose-700 transition-all duration-300 shadow-md hover:shadow-lg">
                            <span className="material-symbols-outlined">download</span>
                            Download Report
                        </button>
                    </div>

                    <div className="bg-gradient-to-br from-cyan-50 to-sky-50 rounded-xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-cyan-100">
                        <span className="material-symbols-outlined text-4xl mb-4 text-cyan-600 bg-cyan-100 p-2 rounded-lg">trending_up</span>
                        <h2 className="text-xl font-semibold mb-3 text-cyan-700">Market Demand Analysis</h2>
                        <p className="text-gray-600 mb-4">Comprehensive market demand forecasting</p>
                        <button className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-sky-600 text-white px-4 py-2 rounded-lg hover:from-cyan-600 hover:to-sky-700 transition-all duration-300 shadow-md hover:shadow-lg">
                            <span className="material-symbols-outlined">download</span>
                            Download Report
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default MReports;
