import React from 'react';
import { 
    FaIndustry, FaRocket, FaGlobeAsia, FaCopyright,
    FaChartLine, FaMicrochip, FaBookReader, FaLandmark,
    FaGlobeAmericas, FaChartBar
} from 'react-icons/fa';
import './ipr_insights.css';

const IprInsights = () => {
    const insights = [
        {
            title: "Industry Trends",
            icon: <FaIndustry />,
            description: "Sectors leading in IPR filings and innovations",
            metrics: [
                { label: "Tech Sector", value: "45%", trend: "+8% YoY" },
                { label: "Healthcare", value: "28%", trend: "+12% YoY" },
                { label: "Manufacturing", value: "17%", trend: "+5% YoY" }
            ],
            color: "#2563EB" // Blue
        },
        {
            title: "Startup Insights",
            icon: <FaRocket />,
            description: "How startups are leveraging intellectual property",
            metrics: [
                { label: "Patent Filings", value: "12,000+", trend: "+25% YoY" },
                { label: "Success Rate", value: "68%", trend: "+15% YoY" },
                { label: "Average Value", value: "₹2.5Cr", trend: "+30% YoY" }
            ],
            color: "#059669" // Green
        },
        {
            title: "Geographic Analysis",
            icon: <FaGlobeAsia />,
            description: "Regional distribution of IPR activities",
            metrics: [
                { label: "Metro Cities", value: "55%", trend: "Leading" },
                { label: "Tier 2 Cities", value: "30%", trend: "Growing" },
                { label: "Rural Areas", value: "15%", trend: "Emerging" }
            ],
            color: "#DC2626" // Red
        },
        {
            title: "Top IPR Types",
            icon: <FaCopyright />,
            description: "Distribution across different IP rights",
            metrics: [
                { label: "Patents", value: "40%", trend: "Technical" },
                { label: "Trademarks", value: "35%", trend: "Branding" },
                { label: "Copyrights", value: "25%", trend: "Creative" }
            ],
            color: "#7C3AED" // Purple
        },
        {
            title: "Success Metrics",
            icon: <FaChartLine />,
            description: "Impact of IPR on business growth",
            metrics: [
                { label: "Revenue Growth", value: "85%", trend: "Higher" },
                { label: "Market Value", value: "2.3x", trend: "Increase" },
                { label: "Funding Success", value: "73%", trend: "Better" }
            ],
            color: "#0891B2" // Cyan
        },
        {
            title: "Emerging Technologies",
            icon: <FaMicrochip />,
            description: "New tech domains in IPR landscape",
            metrics: [
                { label: "AI & ML", value: "40%", trend: "Leading" },
                { label: "Blockchain", value: "25%", trend: "Growing" },
                { label: "IoT", value: "35%", trend: "Rising" }
            ],
            color: "#9333EA" // Violet
        },
        {
            title: "Case Studies",
            icon: <FaBookReader />,
            description: "Success stories and learning examples",
            metrics: [
                { label: "Success Rate", value: "78%", trend: "High" },
                { label: "ROI Average", value: "3.2x", trend: "Strong" },
                { label: "Time to Market", value: "-40%", trend: "Faster" }
            ],
            color: "#EA580C" // Orange
        },
        {
            title: "Government Schemes",
            icon: <FaLandmark />,
            description: "Utilization of government IPR initiatives",
            metrics: [
                { label: "Scheme Usage", value: "62%", trend: "Active" },
                { label: "Grant Success", value: "45%", trend: "Moderate" },
                { label: "Support Value", value: "₹1.8Cr", trend: "Average" }
            ],
            color: "#B45309" // Amber
        },
        {
            title: "Global Comparisons",
            icon: <FaGlobeAmericas />,
            description: "International IPR filing patterns",
            metrics: [
                { label: "Global Rank", value: "#7", trend: "Rising" },
                { label: "Filing Growth", value: "+18%", trend: "YoY" },
                { label: "Success Rate", value: "71%", trend: "Good" }
            ],
            color: "#DB2777" // Pink
        },
        {
            title: "Growth Timeline",
            icon: <FaChartBar />,
            description: "IPR progression over the years",
            metrics: [
                { label: "5 Year CAGR", value: "23%", trend: "Strong" },
                { label: "New Sectors", value: "+12", trend: "Added" },
                { label: "Active IPs", value: "1.2M", trend: "Total" }
            ],
            color: "#4F46E5" // Indigo
        }
    ];

    return (
        <div className="ipr-insights">
            <div className="ipr-insights-header">
                <h1>IPR Insights & Data</h1>
                <p>Data-driven analysis of intellectual property landscape</p>
            </div>

            <div className="ipr-insights-grid">
                {insights.map((insight, index) => (
                    <div 
                        className="ipr-insights-card" 
                        key={index}
                        style={{'--insight-color': insight.color}}
                    >
                        <div className="ipr-insights-icon" style={{color: insight.color}}>
                            {insight.icon}
                        </div>
                        <h3>{insight.title}</h3>
                        <p>{insight.description}</p>
                        <div className="ipr-insights-metrics-grid">
                            {insight.metrics.map((metric, i) => (
                                <div key={i} className="ipr-insights-metric-item">
                                    <div 
                                        className="ipr-insights-metric-value" 
                                        style={{color: insight.color}}
                                    >
                                        {metric.value}
                                    </div>
                                    <div className="ipr-insights-metric-label">
                                        {metric.label}
                                    </div>
                                    <div 
                                        className="ipr-insights-metric-trend"
                                        style={{
                                            background: `${insight.color}15`,
                                            color: insight.color
                                        }}
                                    >
                                        {metric.trend}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button 
                            className="ipr-insights-button"
                            style={{backgroundColor: insight.color}}
                        >
                            View Details
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default IprInsights;