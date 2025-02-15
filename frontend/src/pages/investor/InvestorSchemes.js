import React, { useState } from "react";
import { FaSearch, FaFilter, FaExternalLinkAlt, FaGraduationCap, FaIndustry, FaHandHoldingUsd, FaLightbulb, FaTimes } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import './investorchemes.css';

const SCHEMES_DATA = [
    {
        id: 1,
        type: "education",
        title: "Startup India Seed Fund Scheme",
        description: "Financial assistance up to INR 20 lakhs for proof of concept, prototype development, product trials, market entry, and commercialization.",
        deadline: "31 Dec 2024",
        icon: FaGraduationCap,
        category: "Financial",
        status: "Active",
        path: "/schemes-and-policies/startup-gujarat"
    },
    {
        id: 2,
        type: "industry",
        title: "PMEGP Scheme",
        description: "Credit-linked subsidy program for setting up micro enterprises in non-farm sector with subsidies up to 35%.",
        deadline: "Ongoing",
        icon: FaIndustry,
        category: "Subsidy",
        status: "Active",
        path: "/schemes-and-policies/startup-gujarat"
    },
    {
        id: 3,
        type: "financial",
        title: "Credit Guarantee Scheme",
        description: "Collateral-free credit facility for MSMEs with credit guarantee coverage up to 85% of the credit facility.",
        deadline: "Ongoing",
        icon: FaHandHoldingUsd,
        category: "Credit",
        status: "Active",
        path: "/schemes-and-policies/startup-gujarat"
    },
    {
        id: 4,
        type: "innovation",
        title: "ASPIRE Scheme",
        description: "Promotes innovation, rural entrepreneurship through incubation and creates business accelerators.",
        deadline: "30 Jun 2024",
        icon: FaLightbulb,
        category: "Innovation",
        status: "Active",
        path: "/schemes-and-policies/startup-gujarat"
    }
];

const StartupSchemes = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("");
    const [showFilters, setShowFilters] = useState(false);
    const [filters, setFilters] = useState({
        type: [],
        category: [],
        status: []
    });

    // Get unique values for filter options
    const filterOptions = {
        type: [...new Set(SCHEMES_DATA.map(scheme => scheme.type))],
        category: [...new Set(SCHEMES_DATA.map(scheme => scheme.category))],
        status: [...new Set(SCHEMES_DATA.map(scheme => scheme.status))]
    };

    const handleFilterChange = (filterType, value) => {
        setFilters(prev => ({
            ...prev,
            [filterType]: prev[filterType].includes(value)
                ? prev[filterType].filter(item => item !== value)
                : [...prev[filterType], value]
        }));
    };

    const resetFilters = () => {
        setFilters({
            type: [],
            category: [],
            status: []
        });
        setSearchTerm("");
    };

    const filteredSchemes = SCHEMES_DATA.filter(scheme => {
        const matchesSearch = scheme.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            scheme.description.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesType = filters.type.length === 0 || filters.type.includes(scheme.type);
        const matchesCategory = filters.category.length === 0 || filters.category.includes(scheme.category);
        const matchesStatus = filters.status.length === 0 || filters.status.includes(scheme.status);

        return matchesSearch && matchesType && matchesCategory && matchesStatus;
    });

    return (
        <div className="investor-schemes-container">
            <div className="investor-schemes-page-header">
                <div className="investor-schemes-header-content">
                    <h1>Government & Private Schemes</h1>
                    <p>Explore various schemes and programs available for Investors</p>
                </div>
            </div>

            <div className="investor-schemes-search-bar">
                <div className="investor-schemes-search-input">
                    <FaSearch />
                    <input
                        type="text"
                        placeholder="Search schemes by name, type, or description..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <button
                    className={`investor-schemes-filter-button ${showFilters ? 'active' : ''}`}
                    onClick={() => setShowFilters(!showFilters)}
                >
                    {showFilters ? <FaTimes /> : <FaFilter />}
                    Filter
                </button>
            </div>

            {showFilters && (
                <div className="investor-schemes-filter-panel">
                    <div className="investor-schemes-filter-groups">
                        <div className="investor-schemes-filter-group">
                            <h3>Type</h3>
                            {filterOptions.type.map(type => (
                                <label key={type} className="investor-schemes-filter-option">
                                    <input
                                        type="checkbox"
                                        checked={filters.type.includes(type)}
                                        onChange={() => handleFilterChange('type', type)}
                                    />
                                    {type.charAt(0).toUpperCase() + type.slice(1)}
                                </label>
                            ))}
                        </div>

                        <div className="investor-schemes-filter-group">
                            <h3>Category</h3>
                            {filterOptions.category.map(category => (
                                <label key={category} className="investor-schemes-filter-option">
                                    <input
                                        type="checkbox"
                                        checked={filters.category.includes(category)}
                                        onChange={() => handleFilterChange('category', category)}
                                    />
                                    {category}
                                </label>
                            ))}
                        </div>

                        <div className="investor-schemes-filter-group">
                            <h3>Status</h3>
                            {filterOptions.status.map(status => (
                                <label key={status} className="investor-schemes-filter-option">
                                    <input
                                        type="checkbox"
                                        checked={filters.status.includes(status)}
                                        onChange={() => handleFilterChange('status', status)}
                                    />
                                    {status}
                                </label>
                            ))}
                        </div>
                    </div>

                    <button className="investor-schemes-reset-filters" onClick={resetFilters}>
                        Reset All Filters
                    </button>
                </div>
            )}

            <div className="investor-schemes-grid">
                {filteredSchemes.map((scheme) => (
                    <div key={scheme.id} className="investor-schemes-scheme-card">
                        <div className={`investor-schemes-scheme-type ${scheme.type}`}>
                            <scheme.icon />
                            {scheme.type.charAt(0).toUpperCase() + scheme.type.slice(1)}
                        </div>
                        <h3>{scheme.title}</h3>
                        <p>{scheme.description}</p>
                        <div className="investor-schemes-scheme-footer">
                            <span className="investor-schemes-deadline">Deadline: {scheme.deadline}</span>
                            <button
                                onClick={() => navigate(scheme.path)}
                                className="investor-schemes-learn-more"
                            >
                                Learn More <FaExternalLinkAlt />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StartupSchemes;
