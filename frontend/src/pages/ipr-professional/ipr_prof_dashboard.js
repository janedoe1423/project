import React, { useState } from "react";
import { Search, ChevronDown, FileText } from "lucide-react";
import './ipr_dashboard.css';

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
  const [selectedTab, setSelectedTab] = useState("Trademarks");
  const [selectedIndustry, setSelectedIndustry] = useState("All");
  const [selectedSector, setSelectedSector] = useState("All");
  const [selectedStage, setSelectedStage] = useState("All");

  const filterCategories = {
    Industry: [
      "Technology",
      "Healthcare",
      "Manufacturing",
      "Automotive",
      "Finance",
      "Retail",
      "Energy",
    ],
    Sector: [
      "Information Technology",
      "Biotechnology",
      "Clean Energy",
      "Artificial Intelligence",
      "E-commerce",
      "Telecommunications",
      "Pharmaceuticals",
    ],
    Stage: [
      "Pending",
      "Under Review",
      "Granted",
      "Rejected",
      "Expired",
      "Opposition Filed",
    ],
  };

  // Filtered data based on selected filters
  const filteredData = mockData.filter(
    (item) =>
      (selectedIndustry === "All" || item.industry === selectedIndustry) &&
      (selectedStage === "All" || item.status === selectedStage)
  );

  const FilterSelect = ({ label, value, onChange, options }) => {
    return (
      <div className="filter-select-container">
        <label className="filter-label">
          {label}
        </label>
        <div className="relative">
          <select
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="filter-select"
          >
            <option value="All">All {label}s</option>
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <ChevronDown className="select-icon" />
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <h1 className="text-2xl font-bold text-gray-900">IPR Management Dashboard</h1>
      </header>

      <main className="p-6">
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

        {/* Filter Section */}
        <div className="filter-container">
          <div className="filter-header">
            <h2 className="filter-title">Filters</h2>
          </div>
          <div className="filters-wrapper">
            <FilterSelect
              label="Industry"
              value={selectedIndustry}
              onChange={setSelectedIndustry}
              options={filterCategories.Industry}
            />
            <FilterSelect
              label="Sector"
              value={selectedSector}
              onChange={setSelectedSector}
              options={filterCategories.Sector}
            />
            <FilterSelect
              label="Stage"
              value={selectedStage}
              onChange={setSelectedStage}
              options={filterCategories.Stage}
            />
          </div>
        </div>

        {/* Card Section */}
        <section className="cards-grid">
          {filteredData.map((data, index) => (
            <div key={index} className="card">
              <div className="card-content">
                <div>
                  <h2 className="card-title">{data.description}</h2>
                </div>
                
                <div className="card-footer">
                  <div className="footer-company">
                    <svg 
                      className="company-icon" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                    </svg>
                    <span className="company-name">{data.owner}</span>
                  </div>
                  
                  <div className="footer-details">
                    <span className={`status-badge ${data.status.toLowerCase()}`}>
                      {data.status}
                    </span>
                    <div className="card-date">
                      {new Date(data.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })}
                    </div>
                  </div>
                </div>

                {/* New Button Section */}
                <div className="card-actions">
                  <button 
                    className="view-docs-button"
                    onClick={() => {/* Add your view documents handler here */}}
                  >
                    <FileText className="button-icon" />
                    View Documents
                  </button>
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default IPRDashboard;
