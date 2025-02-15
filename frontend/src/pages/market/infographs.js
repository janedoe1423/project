import React from "react";
import Chart from "react-apexcharts";

/* Don't forget to download the CSS file too 
OR remove the following line if you're already using Tailwind */

import "./infographs.css";

const MInfographs = () => {
    return (
        <div id="webcrumbs-minfographs">
            <div className="w-[1200px] bg-gradient-to-br from-slate-50 to-gray-50 p-8 rounded-2xl shadow-xl">
                <header className="mb-12 transform hover:scale-[1.02] transition-transform duration-300">
                    <h1 className="text-4xl font-extrabold mb-4 flex items-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                        <span className="material-symbols-outlined text-4xl mr-3 text-blue-600">dashboard</span>
                        Analytics Dashboard
                    </h1>
                    <p className="text-gray-600 text-lg">Comprehensive overview of market performance and business metrics</p>
                </header>

                <div className="grid grid-rows-3 gap-8">
                    <div className="grid grid-cols-2 gap-8">
                        <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-violet-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
                            <h3 className="text-2xl font-bold mb-4 flex items-center">
                                <span className="material-symbols-outlined text-blue-600 mr-3 text-2xl">trending_up</span>
                                Market Growth Trends
                            </h3>
                            <p className="text-gray-600 mb-6">Analysis of market performance over the past 9 months</p>
                            <Chart
                                type="area"
                                height={250}
                                width="100%"
                                series={[{
                                    name: 'Market Growth',
                                    data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
                                }]}
                                options={{
                                    chart: {
                                        toolbar: { show: false },
                                        zoom: { enabled: false }
                                    },
                                    dataLabels: { enabled: false },
                                    stroke: { curve: 'smooth', width: 3 },
                                    fill: {
                                        type: 'gradient',
                                        gradient: {
                                            shadeIntensity: 1,
                                            opacityFrom: 0.8,
                                            opacityTo: 0.4,
                                            stops: [0, 90, 100]
                                        }
                                    },
                                    xaxis: {
                                        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
                                    }
                                }}
                            />
                        </div>

                        <div className="bg-gradient-to-br from-purple-50 via-fuchsia-50 to-pink-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
                            <h3 className="text-2xl font-bold mb-4 flex items-center">
                                <span className="material-symbols-outlined text-purple-600 mr-3 text-2xl">payments</span>
                                Funding Distribution
                            </h3>
                            <p className="text-gray-600 mb-6">VC funding breakdown by industry</p>
                            <Chart
                                type="donut"
                                height={250}
                                width="100%"
                                series={[30, 25, 20, 15, 10]}
                                options={{
                                    labels: ['Tech', 'Healthcare', 'Fintech', 'E-commerce', 'Others'],
                                    chart: {
                                        toolbar: { show: false }
                                    },
                                    legend: {
                                        position: 'bottom'
                                    },
                                    plotOptions: {
                                        pie: {
                                            donut: {
                                                size: '65%'
                                            }
                                        }
                                    }
                                }}
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-8">
                        <div className="bg-gradient-to-br from-rose-50 via-pink-50 to-red-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
                            <h3 className="text-2xl font-bold mb-4 flex items-center">
                                <span className="material-symbols-outlined text-rose-600 mr-3 text-2xl">error</span>
                                Startup Pitfalls
                            </h3>
                            <p className="text-gray-600 mb-6">Common reasons for startup failure</p>
                            <Chart
                                type="bar"
                                height={250}
                                width="100%"
                                series={[{
                                    name: 'Failure Rate',
                                    data: [35, 30, 25, 20, 15]
                                }]}
                                options={{
                                    chart: {
                                        toolbar: { show: false }
                                    },
                                    plotOptions: {
                                        bar: {
                                            borderRadius: 8,
                                            horizontal: true
                                        }
                                    },
                                    xaxis: {
                                        categories: ['Poor Market Fit', 'Cash Flow Issues', 'Team Problems', 'Competition', 'Pricing Issues']
                                    },
                                    dataLabels: { enabled: false }
                                }}
                            />
                        </div>

                        <div className="bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
                            <h3 className="text-2xl font-bold mb-4 flex items-center">
                                <span className="material-symbols-outlined text-emerald-600 mr-3 text-2xl">rocket_launch</span>
                                Profitable Sectors
                            </h3>
                            <p className="text-gray-600 mb-6">Industries with highest ROI</p>
                            <Chart
                                type="radar"
                                height={250}
                                width="100%"
                                series={[{
                                    name: 'ROI Percentage',
                                    data: [85, 75, 70, 65, 60, 55]
                                }]}
                                options={{
                                    chart: {
                                        toolbar: { show: false }
                                    },
                                    xaxis: {
                                        categories: ['AI/ML', 'Biotech', 'Clean Energy', 'Cybersecurity', 'IoT', 'Cloud Services']
                                    },
                                    stroke: {
                                        width: 3
                                    },
                                    markers: {
                                        size: 4
                                    }
                                }}
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-8">
                        <div className="bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
                            <h3 className="text-2xl font-bold mb-4 flex items-center">
                                <span className="material-symbols-outlined text-amber-600 mr-3 text-2xl">account_tree</span>
                                Supply Chain Analysis
                            </h3>
                            <p className="text-gray-600 mb-6">Supply chain efficiency metrics</p>
                            <Chart
                                type="radar"
                                height={250}
                                width="100%"
                                series={[{
                                    name: 'Supply Chain Metrics',
                                    data: [80, 50, 30, 40, 100, 20]
                                }]}
                                options={{
                                    chart: {
                                        toolbar: { show: false }
                                    },
                                    xaxis: {
                                        categories: ['Inventory', 'Logistics', 'Production', 'Distribution', 'Storage', 'Delivery']
                                    },
                                    stroke: {
                                        width: 3
                                    },
                                    markers: {
                                        size: 4
                                    }
                                }}
                            />
                        </div>

                        <div className="bg-gradient-to-br from-cyan-50 via-sky-50 to-blue-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
                            <h3 className="text-2xl font-bold mb-4 flex items-center">
                                <span className="material-symbols-outlined text-cyan-600 mr-3 text-2xl">groups</span>
                                Demographics
                            </h3>
                            <p className="text-gray-600 mb-6">Customer age distribution</p>
                            <Chart
                                type="pie"
                                height={250}
                                width="100%"
                                series={[44, 55, 13, 33]}
                                options={{
                                    chart: {
                                        toolbar: { show: false }
                                    },
                                    labels: ['18-24', '25-34', '35-44', '45+'],
                                    legend: {
                                        position: 'bottom',
                                        fontSize: '14px'
                                    }
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MInfographs;
