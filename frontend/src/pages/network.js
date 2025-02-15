import React from "react";


/* Don't forget to download the CSS file too 
OR remove the following line if you're already using Tailwind */

import "./network.css";

const NetworkPage = () => {
	return (
		<div id="webcrumbs-network">
			<div className="w-[1400px] bg-gradient-to-br from-slate-50 via-white to-blue-50 rounded-2xl p-12 shadow-xl">
				<header className="text-center mb-16">
					<h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">Connect with Your Network</h1>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">Discover opportunities, build relationships, and grow your business with our diverse network of professionals and organizations.</p>
				</header>

				<div className="grid grid-cols-3 gap-8 mb-12">
					<div className="group bg-gradient-to-br from-blue-50 via-blue-100 to-indigo-50 rounded-xl p-8 hover:shadow-2xl transition-all duration-300 cursor-pointer border border-blue-200 hover:-translate-y-2 hover:rotate-1">
						<div className="bg-gradient-to-br from-blue-400 via-blue-500 to-indigo-600 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
							<span className="material-symbols-outlined text-3xl text-white">rocket_launch</span>
						</div>
						<h2 className="text-2xl font-semibold mb-4 text-gray-800">Startups</h2>
						<p className="text-gray-600 mb-6 leading-relaxed">Connect with innovative startups looking for funding, partnerships and mentorship. Access exclusive pitch events and networking opportunities.</p>
						<ul className="mb-6 text-gray-600">
							<li className="flex items-center mb-2"><span className="material-symbols-outlined mr-2 text-blue-500">check_circle</span>Weekly pitch sessions</li>
							<li className="flex items-center mb-2"><span className="material-symbols-outlined mr-2 text-blue-500">check_circle</span>Networking events</li>
							<li className="flex items-center"><span className="material-symbols-outlined mr-2 text-blue-500">check_circle</span>Resource library</li>
						</ul>
						<div className="flex items-center text-blue-600 group-hover:translate-x-3 transition-all duration-300">
							<span className="font-medium bg-blue-100 px-4 py-2 rounded-full hover:bg-blue-200 transition-colors">Explore Startups</span>
							<span className="material-symbols-outlined ml-2 text-sm group-hover:animate-bounce">arrow_forward</span>
						</div>
						<div className="mt-6 pt-6 border-t border-blue-200 flex items-center justify-between">
							<span className="text-sm text-gray-500">500+ Active Startups</span>
							<span className="text-sm text-blue-600">Join Now</span>
						</div>
					</div>

					<div className="group bg-gradient-to-br from-emerald-50 via-green-100 to-teal-50 rounded-xl p-8 hover:shadow-2xl transition-all duration-300 cursor-pointer border border-green-200 hover:-translate-y-2 hover:rotate-1">
						<div className="bg-gradient-to-br from-emerald-400 via-green-500 to-teal-600 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
							<span className="material-symbols-outlined text-3xl text-white">payments</span>
						</div>
						<h2 className="text-2xl font-semibold mb-4 text-gray-800">Investors</h2>
						<p className="text-gray-600 mb-6 leading-relaxed">Find angel investors, venture capitalists and investment firms seeking opportunities. Get direct access to funding and strategic partnerships.</p>
						<ul className="mb-6 text-gray-600">
							<li className="flex items-center mb-2"><span className="material-symbols-outlined mr-2 text-green-500">check_circle</span>Due diligence support</li>
							<li className="flex items-center mb-2"><span className="material-symbols-outlined mr-2 text-green-500">check_circle</span>Investment matching</li>
							<li className="flex items-center"><span className="material-symbols-outlined mr-2 text-green-500">check_circle</span>Deal flow access</li>
						</ul>
						<div className="flex items-center text-green-600 group-hover:translate-x-3 transition-all duration-300">
							<span className="font-medium bg-green-100 px-4 py-2 rounded-full hover:bg-green-200 transition-colors">Meet Investors</span>
							<span className="material-symbols-outlined ml-2 text-sm group-hover:animate-bounce">arrow_forward</span>
						</div>
						<div className="mt-6 pt-6 border-t border-green-200 flex items-center justify-between">
							<span className="text-sm text-gray-500">$2B+ Available Funding</span>
							<span className="text-sm text-green-600">Connect Now</span>
						</div>
					</div>

					<div className="group bg-gradient-to-br from-purple-50 via-violet-100 to-fuchsia-50 rounded-xl p-8 hover:shadow-2xl transition-all duration-300 cursor-pointer border border-purple-200 hover:-translate-y-2 hover:rotate-1">
						<div className="bg-gradient-to-br from-purple-400 via-violet-500 to-fuchsia-600 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
							<span className="material-symbols-outlined text-3xl text-white">lightbulb</span>
						</div>
						<h2 className="text-2xl font-semibold mb-4 text-gray-800">Innovators</h2>
						<p className="text-gray-600 mb-6 leading-relaxed">Discover brilliant minds behind groundbreaking ideas and technological advances. Collaborate on cutting-edge projects.</p>
						<ul className="mb-6 text-gray-600">
							<li className="flex items-center mb-2"><span className="material-symbols-outlined mr-2 text-purple-500">check_circle</span>Research partnerships</li>
							<li className="flex items-center mb-2"><span className="material-symbols-outlined mr-2 text-purple-500">check_circle</span>Tech workshops</li>
							<li className="flex items-center"><span className="material-symbols-outlined mr-2 text-purple-500">check_circle</span>Innovation labs</li>
						</ul>
						<div className="flex items-center text-purple-600 group-hover:translate-x-3 transition-all duration-300">
							<span className="font-medium bg-purple-100 px-4 py-2 rounded-full hover:bg-purple-200 transition-colors">Find Innovators</span>
							<span className="material-symbols-outlined ml-2 text-sm group-hover:animate-bounce">arrow_forward</span>
						</div>
						<div className="mt-6 pt-6 border-t border-purple-200 flex items-center justify-between">
							<span className="text-sm text-gray-500">1000+ Innovation Patents</span>
							<span className="text-sm text-purple-600">Discover More</span>
						</div>
					</div>

					<div className="group bg-gradient-to-br from-amber-50 via-orange-100 to-yellow-50 rounded-xl p-8 hover:shadow-2xl transition-all duration-300 cursor-pointer border border-orange-200 hover:-translate-y-2 hover:rotate-1">
						<div className="bg-gradient-to-br from-amber-400 via-orange-500 to-yellow-600 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
							<span className="material-symbols-outlined text-3xl text-white">school</span>
						</div>
						<h2 className="text-2xl font-semibold mb-4 text-gray-800">Mentors</h2>
						<p className="text-gray-600 mb-6 leading-relaxed">Connect with experienced professionals offering guidance and expertise. Get personalized advice for your business growth.</p>
						<ul className="mb-6 text-gray-600">
							<li className="flex items-center mb-2"><span className="material-symbols-outlined mr-2 text-orange-500">check_circle</span>1-on-1 sessions</li>
							<li className="flex items-center mb-2"><span className="material-symbols-outlined mr-2 text-orange-500">check_circle</span>Group coaching</li>
							<li className="flex items-center"><span className="material-symbols-outlined mr-2 text-orange-500">check_circle</span>Expert insights</li>
						</ul>
						<div className="flex items-center text-orange-600 group-hover:translate-x-3 transition-all duration-300">
							<span className="font-medium bg-orange-100 px-4 py-2 rounded-full hover:bg-orange-200 transition-colors">Find Mentors</span>
							<span className="material-symbols-outlined ml-2 text-sm group-hover:animate-bounce">arrow_forward</span>
						</div>
						<div className="mt-6 pt-6 border-t border-orange-200 flex items-center justify-between">
							<span className="text-sm text-gray-500">200+ Expert Mentors</span>
							<span className="text-sm text-orange-600">Book Session</span>
						</div>
					</div>

					<div className="group bg-gradient-to-br from-cyan-50 via-indigo-100 to-blue-50 rounded-xl p-8 hover:shadow-2xl transition-all duration-300 cursor-pointer border border-indigo-200 hover:-translate-y-2 hover:rotate-1">
						<div className="bg-gradient-to-br from-cyan-400 via-indigo-500 to-blue-600 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
							<span className="material-symbols-outlined text-3xl text-white">corporate_fare</span>
						</div>
						<h2 className="text-2xl font-semibold mb-4 text-gray-800">Corporations</h2>
						<p className="text-gray-600 mb-6 leading-relaxed">Partner with established companies seeking innovation and collaboration. Access corporate resources and scale your business.</p>
						<ul className="mb-6 text-gray-600">
							<li className="flex items-center mb-2"><span className="material-symbols-outlined mr-2 text-indigo-500">check_circle</span>Enterprise solutions</li>
							<li className="flex items-center mb-2"><span className="material-symbols-outlined mr-2 text-indigo-500">check_circle</span>Corporate pilots</li>
							<li className="flex items-center"><span className="material-symbols-outlined mr-2 text-indigo-500">check_circle</span>Strategic alliances</li>
						</ul>
						<div className="flex items-center text-indigo-600 group-hover:translate-x-3 transition-all duration-300">
							<span className="font-medium bg-indigo-100 px-4 py-2 rounded-full hover:bg-indigo-200 transition-colors">View Corporations</span>
							<span className="material-symbols-outlined ml-2 text-sm group-hover:animate-bounce">arrow_forward</span>
						</div>
						<div className="mt-6 pt-6 border-t border-indigo-200 flex items-center justify-between">
							<span className="text-sm text-gray-500">100+ Fortune 500 Partners</span>
							<span className="text-sm text-indigo-600">Partner Now</span>
						</div>
					</div>

					<div className="group bg-gradient-to-br from-rose-50 via-pink-100 to-red-50 rounded-xl p-8 hover:shadow-2xl transition-all duration-300 cursor-pointer border border-pink-200 hover:-translate-y-2 hover:rotate-1">
						<div className="bg-gradient-to-br from-rose-400 via-pink-500 to-red-600 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
							<span className="material-symbols-outlined text-3xl text-white">hub</span>
						</div>
						<h2 className="text-2xl font-semibold mb-4 text-gray-800">Accelerators</h2>
						<p className="text-gray-600 mb-6 leading-relaxed">Join startup accelerators and incubators to fast-track your growth. Access mentorship programs and funding opportunities.</p>
						<ul className="mb-6 text-gray-600">
							<li className="flex items-center mb-2"><span className="material-symbols-outlined mr-2 text-pink-500">check_circle</span>Cohort programs</li>
							<li className="flex items-center mb-2"><span className="material-symbols-outlined mr-2 text-pink-500">check_circle</span>Seed funding</li>
							<li className="flex items-center"><span className="material-symbols-outlined mr-2 text-pink-500">check_circle</span>Demo days</li>
						</ul>
						<div className="flex items-center text-pink-600 group-hover:translate-x-3 transition-all duration-300">
							<span className="font-medium bg-pink-100 px-4 py-2 rounded-full hover:bg-pink-200 transition-colors">Browse Accelerators</span>
							<span className="material-symbols-outlined ml-2 text-sm group-hover:animate-bounce">arrow_forward</span>
						</div>
						<div className="mt-6 pt-6 border-t border-pink-200 flex items-center justify-between">
							<span className="text-sm text-gray-500">50+ Global Programs</span>
							<span className="text-sm text-pink-600">Apply Now</span>
						</div>
					</div>
				</div>

				<footer className="text-center">
					<p className="text-gray-500">Join our growing community of 100,000+ professionals</p>
					<div className="inline-flex items-center justify-center gap-2 mt-4 text-gray-400">
						<span className="material-symbols-outlined">verified</span>
						<span>Verified Network</span>
					</div>
				</footer>
			</div>
		</div>
	)
}

export default NetworkPage;