import React from "react";
import Chart from "react-apexcharts";

/* Don't forget to download the CSS file too 
OR remove the following line if you're already using Tailwind */

import "./Startups.css";

const Startups = () => {
    return (
        <div id="webcrumbs-startups">
            <div className="w-[1200px] bg-gray-50">
                <div className="relative h-[400px] overflow-hidden rounded-2xl shadow-lg">
                    <div className="flex transition-transform duration-500 animate-carousel">
                        <div className="min-w-full">
                            <img src="https://images.unsplash.com/photo-1531973576160-7125cd663d86" alt="Startup 1" className="w-full h-[400px] object-cover" />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/80 to-transparent p-8">
                                <h1 className="text-4xl font-bold text-white mb-2">Discover Innovative Startups</h1>
                                <p className="text-white/90">Connect with groundbreaking companies reshaping the future</p>
                            </div>
                        </div>
                        <div className="min-w-full">
                            <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0" alt="Startup 2" className="w-full h-[400px] object-cover" />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/80 to-transparent p-8">
                                <h1 className="text-4xl font-bold text-white mb-2">Future of Innovation</h1>
                                <p className="text-white/90">Explore cutting-edge technologies and solutions</p>
                            </div>
                        </div>
                        <div className="min-w-full">
                            <img src="https://images.unsplash.com/photo-1556761175-4b46a572b786" alt="Startup 3" className="w-full h-[400px] object-cover" />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/80 to-transparent p-8">
                                <h1 className="text-4xl font-bold text-white mb-2">Transform Industries</h1>
                                <p className="text-white/90">See how startups are revolutionizing traditional sectors</p>
                            </div>
                        </div>
                    </div>
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                        <button className="w-2.5 h-2.5 rounded-full bg-white/60 hover:bg-white transition-colors" />
                        <button className="w-2.5 h-2.5 rounded-full bg-white/60 hover:bg-white transition-colors" />
                        <button className="w-2.5 h-2.5 rounded-full bg-white/60 hover:bg-white transition-colors" />
                    </div>
                </div>

                <div className="mt-12 grid grid-cols-2 gap-8">
                    <div className="rounded-2xl bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
                        <h2 className="text-xl font-semibold mb-6">Monthly Startup Growth</h2>
                        <Chart
                            type="area"
                            height={240}
                            series={[{
                                name: 'Startups Growth',
                                data: [30, 40, 45, 50, 49, 60, 70, 91]
                            }]}
                            options={{
                                chart: {
                                    toolbar: { show: false },
                                },
                                stroke: { curve: 'smooth' },
                                fill: { type: 'gradient', gradient: { shadeIntensity: 0.6 } },
                                xaxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'] }
                            }}
                        />
                    </div>
                    <div className="rounded-2xl bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
                        <h2 className="text-xl font-semibold mb-6">Industry Distribution</h2>
                        <Chart
                            type="donut"
                            height={240}
                            series={[44, 55, 13, 33]}
                            options={{
                                labels: ['Tech', 'Finance', 'Healthcare', 'Others'],
                                toolbar: { show: false }
                            }}
                        />
                    </div>
                </div>

                <div className="mt-12">
                    <div className="flex items-center justify-between mb-8">
                        <div className="flex gap-4">
                            <details className="relative">
                                <summary className="px-5 py-2.5 rounded-lg bg-white border border-gray-200 cursor-pointer hover:border-gray-300 transition-colors">
                                    Industry
                                    <span className="material-symbols-outlined align-middle ml-2 text-gray-500">expand_more</span>
                                </summary>
                                <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-xl rounded-xl p-2 z-10">
                                    <div className="p-2.5 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors">Technology</div>
                                    <div className="p-2.5 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors">Healthcare</div>
                                    <div className="p-2.5 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors">Finance</div>
                                    <div className="p-2.5 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors">E-commerce</div>
                                    <div className="p-2.5 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors">Education</div>
                                </div>
                            </details>
                            <details className="relative">
                                <summary className="px-5 py-2.5 rounded-lg bg-white border border-gray-200 cursor-pointer hover:border-gray-300 transition-colors">
                                    Stage
                                    <span className="material-symbols-outlined align-middle ml-2 text-gray-500">expand_more</span>
                                </summary>
                                <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-xl rounded-xl p-2 z-10">
                                    <div className="p-2.5 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors">Pre-seed</div>
                                    <div className="p-2.5 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors">Seed</div>
                                    <div className="p-2.5 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors">Series A</div>
                                    <div className="p-2.5 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors">Series B+</div>
                                    <div className="p-2.5 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors">Growth</div>
                                </div>
                            </details>
                            <details className="relative">
                                <summary className="px-5 py-2.5 rounded-lg bg-white border border-gray-200 cursor-pointer hover:border-gray-300 transition-colors">
                                    Location
                                    <span className="material-symbols-outlined align-middle ml-2 text-gray-500">expand_more</span>
                                </summary>
                                <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-xl rounded-xl p-2 z-10">
                                    <div className="p-2.5 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors">North America</div>
                                    <div className="p-2.5 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors">Europe</div>
                                    <div className="p-2.5 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors">Asia</div>
                                    <div className="p-2.5 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors">Other</div>
                                </div>
                            </details>
                        </div>
                        <div className="relative">
                            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">search</span>
                            <input type="text" placeholder="Search startups..." className="w-64 pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-shadow" />
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-6">
                        <div className="rounded-2xl bg-white border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                            <img src="https://images.unsplash.com/photo-1551434678-e076c223a692" alt="Startup" className="w-full h-48 object-cover" />
                            <div className="p-8">
                                <div className="flex items-center gap-4 mb-4">
                                    <img src="https://api.dicebear.com/6.x/initials/svg?seed=TF" alt="Logo" className="w-12 h-12 rounded-full shadow-sm" />
                                    <div>
                                        <h3 className="text-xl font-semibold">TechFlow</h3>
                                        <p className="text-sm text-gray-500">San Francisco, CA</p>
                                    </div>
                                </div>
                                <p className="text-gray-600 mb-6">AI-powered workflow automation platform revolutionizing team productivity</p>
                                <div className="flex items-center justify-between">
                                    <span className="px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-medium">Series A</span>
                                    <div className="flex items-center gap-3">
                                        <span className="material-symbols-outlined cursor-pointer hover:scale-110 transition-transform text-gray-500 hover:text-gray-700">bookmark</span>
                                        <span className="material-symbols-outlined cursor-pointer hover:scale-110 transition-transform text-gray-500 hover:text-gray-700">share</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-2xl bg-white border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                            <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0" alt="Startup" className="w-full h-48 object-cover" />
                            <div className="p-8">
                                <div className="flex items-center gap-4 mb-4">
                                    <img src="https://api.dicebear.com/6.x/initials/svg?seed=HS" alt="Logo" className="w-12 h-12 rounded-full shadow-sm" />
                                    <div>
                                        <h3 className="text-xl font-semibold">HealthSync</h3>
                                        <p className="text-sm text-gray-500">Boston, MA</p>
                                    </div>
                                </div>
                                <p className="text-gray-600 mb-6">Next-generation digital health monitoring solutions for remote patient care</p>
                                <div className="flex items-center justify-between">
                                    <span className="px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-600 text-sm font-medium">Seed</span>
                                    <div className="flex items-center gap-3">
                                        <span className="material-symbols-outlined cursor-pointer hover:scale-110 transition-transform text-gray-500 hover:text-gray-700">bookmark</span>
                                        <span className="material-symbols-outlined cursor-pointer hover:scale-110 transition-transform text-gray-500 hover:text-gray-700">share</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-2xl bg-white border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                            <img src="https://images.unsplash.com/photo-1556761175-4b46a572b786" alt="Startup" className="w-full h-48 object-cover" />
                            <div className="p-8">
                                <div className="flex items-center gap-4 mb-4">
                                    <img src="https://api.dicebear.com/6.x/initials/svg?seed=FE" alt="Logo" className="w-12 h-12 rounded-full shadow-sm" />
                                    <div>
                                        <h3 className="text-xl font-semibold">FinEdge</h3>
                                        <p className="text-sm text-gray-500">London, UK</p>
                                    </div>
                                </div>
                                <p className="text-gray-600 mb-6">Revolutionary blockchain-based financial technology platform</p>
                                <div className="flex items-center justify-between">
                                    <span className="px-4 py-1.5 rounded-full bg-purple-50 text-purple-600 text-sm font-medium">Series B</span>
                                    <div className="flex items-center gap-3">
                                        <span className="material-symbols-outlined cursor-pointer hover:scale-110 transition-transform text-gray-500 hover:text-gray-700">bookmark</span>
                                        <span className="material-symbols-outlined cursor-pointer hover:scale-110 transition-transform text-gray-500 hover:text-gray-700">share</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <style>{`
    	    @keyframes carousel {
    	      0% { transform: translateX(0); }
    	      33.33% { transform: translateX(-100%); }
    	      66.66% { transform: translateX(-200%); }
    	      100% { transform: translateX(0); }
    	    }
    	    .animate-carousel {
    	      animation: carousel 15s infinite;
    	    }
    	  `}</style>
            </div>
        </div>
    )
}

export default Startups;