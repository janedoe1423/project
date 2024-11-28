import React, { useState } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { useNavigate } from 'react-router-dom';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const StartupFunding = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    companyName: '',
    fundingNeeded: '',
    revenueHistory: ['', '', ''], // Last 3 years
    projectedGrowth: ['', '', ''], // Next 3 years
    marketSize: '',
    currentValuation: '',
    sector: '',
    subSector: '',
    totalShares: '',
    faceValue: '',
    description: '',
    keyMetrics: {
      totalRiders: '',
      totalDeliveries: '',
      totalKilometers: '',
      activeClients: ''
    },
    financialProjections: {
      revenue: ['', '', ''], // Next 3 years
      profit: ['', '', ''], // Next 3 years
      margins: ['', '', ''] // Next 3 years
    }
  });

  const [showGraphs, setShowGraphs] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleArrayInputChange = (e, index, field) => {
    const { value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [field]: prev[field].map((item, i) => (i === index ? value : item)),
    }));
  };

  const generateGraphData = () => {
    const revenueData = {
      labels: ['Year -3', 'Year -2', 'Year -1', 'Current', 'Year +1', 'Year +2', 'Year +3'],
      datasets: [
        {
          label: 'Revenue & Projections',
          data: [...formData.revenueHistory, formData.currentValuation, ...formData.projectedGrowth],
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1,
        },
        {
          label: 'Profit Margins',
          data: [...formData.financialProjections.margins],
          borderColor: 'rgb(255, 99, 132)',
          tension: 0.1,
        }
      ],
    };

    return revenueData;
  };

  const handleGenerateReport = () => {
    setShowGraphs(true);
  };

  const handlePublish = () => {
    // Create the report object
    const report = {
      ...formData,
      graphs: generateGraphData(),
      dateGenerated: new Date().toISOString(),
    };

    // Here you would typically save the report to your backend
    // For now, we'll just navigate to the funding page
    navigate('/funding', { state: { report } });
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Startup Funding Application</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Basic Information */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Company Information</h2>
          
          <div className="form-group">
            <label>Company Name</label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label>Sector</label>
            <input
              type="text"
              name="sector"
              value={formData.sector}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label>Sub-sector</label>
            <input
              type="text"
              name="subSector"
              value={formData.subSector}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label>Company Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className="form-control"
              rows={4}
            />
          </div>
        </div>

        {/* Financial Information */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Financial Information</h2>
          
          <div className="form-group">
            <label>Funding Needed ($)</label>
            <input
              type="number"
              name="fundingNeeded"
              value={formData.fundingNeeded}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label>Current Valuation ($)</label>
            <input
              type="number"
              name="currentValuation"
              value={formData.currentValuation}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label>Face Value per Share ($)</label>
            <input
              type="number"
              name="faceValue"
              value={formData.faceValue}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label>Total Shares</label>
            <input
              type="number"
              name="totalShares"
              value={formData.totalShares}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>
        </div>

        {/* Key Metrics */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Key Metrics</h2>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="form-group">
              <label>Total Riders</label>
              <input
                type="number"
                name="keyMetrics.totalRiders"
                value={formData.keyMetrics.totalRiders}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label>Total Deliveries</label>
              <input
                type="number"
                name="keyMetrics.totalDeliveries"
                value={formData.keyMetrics.totalDeliveries}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label>Total Kilometers</label>
              <input
                type="number"
                name="keyMetrics.totalKilometers"
                value={formData.keyMetrics.totalKilometers}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label>Active Clients</label>
              <input
                type="number"
                name="keyMetrics.activeClients"
                value={formData.keyMetrics.activeClients}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
          </div>
        </div>

        {/* Historical & Projected Data */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Financial History & Projections</h2>
          
          <div className="form-group">
            <label>Revenue History (Last 3 Years)</label>
            {formData.revenueHistory.map((value, index) => (
              <input
                key={index}
                type="number"
                value={value}
                onChange={(e) => handleArrayInputChange(e, index, 'revenueHistory')}
                className="form-control mt-2"
                placeholder={`Year ${-3 + index}`}
              />
            ))}
          </div>

          <div className="form-group">
            <label>Projected Growth (Next 3 Years)</label>
            {formData.projectedGrowth.map((value, index) => (
              <input
                key={index}
                type="number"
                value={value}
                onChange={(e) => handleArrayInputChange(e, index, 'projectedGrowth')}
                className="form-control mt-2"
                placeholder={`Year ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-8 space-x-4">
        <button
          onClick={handleGenerateReport}
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
        >
          Preview Report
        </button>

        {showGraphs && (
          <>
            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-4">Financial Projections</h2>
              <div className="h-96">
                <Line data={generateGraphData()} />
              </div>
            </div>

            <button
              onClick={handlePublish}
              className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 mt-4"
            >
              Publish Report
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default StartupFunding;