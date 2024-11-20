import React, { useState } from "react";
import { Search, ChevronDown } from "lucide-react";

const mockData = [
  {
    industry: "Technology",
    type: "trademark",
    status: "Granted",
    image: "https://via.placeholder.com/150",
    description: "Advanced Machine Learning System",
    owner: "Tech Innovations Inc.",
    date: "2024-01-15",
  },
  {
    industry: "Healthcare",
    type: "trademark",
    status: "Pending",
    image: "https://via.placeholder.com/150",
    description: "EcoGreen™ - Sustainable packaging solutions",
    owner: "Green Solutions LLC",   
    date: "2024-02-20",
  },
];

const IPRDashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilter, setShowFilter] = useState(false);
  const [selectedTab, setSelectedTab] = useState("Trademarks");

  const filterCategories = {
    Industry: [
      "Technology",
      "Healthcare",
      "Manufacturing",
      "Automotive",
      "Finance",
      "Retail",
      "Energy"
    ],
    Sector: [
      "Information Technology",
      "Biotechnology",
      "Clean Energy",
      "Artificial Intelligence",
      "E-commerce",
      "Telecommunications",
      "Pharmaceuticals"
    ],
    Stage: [
      "Pending",
      "Under Review",
      "Granted",
      "Rejected",
      "Expired",
      "Opposition Filed"
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <h1 className="text-2xl font-bold text-gray-900">IPR Management Dashboard</h1>
        <div className="relative mt-4">
          <input
            type="text"
            placeholder="Search by title..."
            className="w-full px-4 py-2 pl-10 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
        </div>
      </header>

      {/* Filters and Tabs Section */}
      <main className="p-6">
        {/* Filter Dropdown */}
        <div className="relative mb-6">
          <button
            className="px-4 py-2 border border-gray-300 flex items-center gap-2 bg-white"
            onClick={() => setShowFilter(!showFilter)}
          >
            Filter
            <ChevronDown
              className={`w-4 h-4 transition-transform ${
                showFilter ? "rotate-180" : ""
              }`}
            />
          </button>
          {showFilter && (
            <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-20">
              {Object.entries(filterCategories).map(([category, options]) => (
                <div key={category} className="border-b border-gray-200 last:border-0">
                  <div className="px-4 py-2 bg-gray-50 font-medium">{category}</div>
                  <div className="py-2">
                    {options.map((option) => (
                      <label
                        key={option}
                        className="flex items-center px-4 py-2 hover:bg-gray-50 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 h-4 w-4 mr-2"
                        />
                        <span className="text-sm text-gray-700">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-6">
          {["Patents", "Trademarks", "Copyrights"].map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 rounded-md border ${
                selectedTab === tab
                  ? "bg-green-50 border-green-200 text-green-700"
                  : "bg-white border-gray-200 hover:bg-gray-50"
              }`}
              onClick={() => setSelectedTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </main>

      {/* Card Section */}
      <section className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockData.map((data, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow"
          >
            {/* Image */}
            <img
              src={data.image}
              alt={data.description}
              className="w-full h-40 object-cover rounded-t-lg"
            />

            {/* Details */}
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-900">{data.description}</h2>
              <p className="text-sm text-gray-600 mt-2">Owner: {data.owner}</p>
              <div className="flex justify-between items-center mt-4">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    data.status === "Granted"
                      ? "bg-green-100 text-green-800"
                      : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {data.status}
                </span>
                <span className="text-sm text-gray-500">Filed: {data.date}</span>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default IPRDashboard;
