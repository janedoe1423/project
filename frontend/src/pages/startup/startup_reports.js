import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaTimes, FaChartLine, FaMoneyBillWave, FaChartBar, FaHandshake, 
  FaCertificate, FaClipboardList, FaUsers, FaBalanceScale,
  FaCog, FaDownload, FaSearch, FaFilter, FaPlus,
  FaCalendarAlt, FaFilePdf, FaFileExcel, FaFilePowerpoint, FaDollarSign, FaCopyright, FaCogs
} from "react-icons/fa";
import jsPDF from 'jspdf';
import * as XLSX from 'xlsx';
import PptxGenJS from 'pptxgenjs';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  ComposedChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import {
  differenceInDays,
  differenceInMonths,
  differenceInYears
} from 'date-fns';

// Define MOCK_REPORT_DATA at the top
const MOCK_REPORT_DATA = {
  performance: {
    title: 'Performance Reports',
    description: 'Comprehensive analysis of revenue, growth, and user acquisition metrics',
    sections: {
      // ... your performance data ...
    },
    keyInsights: [
      // ... your key insights ...
    ],
    recommendations: [
      // ... your recommendations ...
    ]
  },
  // Add similar mock data for other report types if needed
};

// First, add this mock data structure for performance metrics
const MOCK_PERFORMANCE_DATA = {
  revenueMetrics: {
    data: [
      { month: 'Jan', revenue: 120000, growth: 15 },
      { month: 'Feb', revenue: 150000, growth: 25 },
      { month: 'Mar', revenue: 180000, growth: 20 },
      { month: 'Apr', revenue: 200000, growth: 11 },
      { month: 'May', revenue: 250000, growth: 25 },
      { month: 'Jun', revenue: 300000, growth: 20 }
    ],
    summary: {
      totalRevenue: 1200000,
      averageGrowth: 19.3,
      projectedGrowth: 22
    }
  },
  growthMetrics: {
    data: [
      { quarter: 'Q1', marketShare: 12, competitorShare: 15 },
      { quarter: 'Q2', marketShare: 15, competitorShare: 14 },
      { quarter: 'Q3', marketShare: 18, competitorShare: 13 },
      { quarter: 'Q4', marketShare: 22, competitorShare: 12 }
    ],
    summary: {
      marketPenetration: 22,
      yearOverYearGrowth: 83,
      industryRank: 3
    }
  },
  userAcquisition: {
    data: [
      { month: 'Jan', newUsers: 1500, activeUsers: 1200, churnRate: 5 },
      { month: 'Feb', newUsers: 1800, activeUsers: 1600, churnRate: 4.5 },
      { month: 'Mar', newUsers: 2200, activeUsers: 2000, churnRate: 4.2 },
      { month: 'Apr', newUsers: 2600, activeUsers: 2400, churnRate: 3.8 },
      { month: 'May', newUsers: 3000, activeUsers: 2800, churnRate: 3.5 },
      { month: 'Jun', newUsers: 3500, activeUsers: 3300, churnRate: 3.2 }
    ],
    summary: {
      totalUsers: 3300,
      averageChurnRate: 4.03,
      userRetention: 94.3
    }
  }
};

// Add these export utility functions at the top of the file
const exportToPDF = async (reportData) => {
  try {
    const doc = new jsPDF();
    
    // Add content to PDF
    doc.text(`Report: ${reportData.title}`, 10, 10);
    doc.text(`Description: ${reportData.description}`, 10, 20);
    
    // Save the PDF
    const fileName = `report_${Date.now()}.pdf`;
    doc.save(fileName);
    return fileName;
  } catch (error) {
    console.error('PDF Export failed:', error);
    throw new Error('Failed to export as PDF');
  }
};

const exportToPPT = async (reportData) => {
  try {
    const pres = new PptxGenJS();
    
    // Add a new slide
    const slide = pres.addSlide();
    
    // Add content to the slide
    slide.addText(reportData.title, { x: 1, y: 1, fontSize: 24 });
    slide.addText(reportData.description, { x: 1, y: 2, fontSize: 14 });
    
    // Save the presentation
    const fileName = `presentation_${Date.now()}.pptx`;
    await pres.writeFile({ fileName });
    return fileName;
  } catch (error) {
    console.error('PowerPoint Export failed:', error);
    throw new Error('Failed to export as PowerPoint');
  }
};

const exportToExcel = async (reportData) => {
  try {
    // Create workbook and worksheet
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet([reportData]);
    
    // Add worksheet to workbook
    XLSX.utils.book_append_sheet(wb, ws, "Report");
    
    // Save the file
    const fileName = `report_${Date.now()}.xlsx`;
    XLSX.writeFile(wb, fileName);
    return fileName;
  } catch (error) {
    console.error('Excel Export failed:', error);
    throw new Error('Failed to export as Excel');
  }
};

// Add these report type definitions
const REPORT_TYPES = {
  PERFORMANCE: {
    id: 'performance',
    title: 'Performance Reports',
    description: 'Revenue, growth, and user acquisition metrics',
    icon: FaChartLine,
    metrics: {
      revenue: { label: 'Revenue Metrics' },
      growth: { label: 'Growth Metrics' },
      acquisition: { label: 'Acquisition Metrics' }
    }
  },
  FUNDING: {
    id: 'funding',
    title: 'Funding Reports',
    description: 'Funding received and allocation details',
    icon: FaDollarSign,
    metrics: {
      investment: { label: 'Investment Metrics' },
      allocation: { label: 'Fund Allocation' },
      runway: { label: 'Runway Analysis' }
    }
  },
  MARKET_TRENDS: {
    id: 'market',
    title: 'Market Trends',
    description: 'Industry and sectoral analysis reports',
    icon: FaChartBar,
    metrics: {
      industry: { label: 'Industry Analysis' },
      competition: { label: 'Competitive Analysis' },
      market_share: { label: 'Market Share' },
      sector_growth: { label: 'Sector Growth' }
    }
  },
  COLLABORATION: {
    id: 'collaboration',
    title: 'Collaboration Reports',
    description: 'Metrics on partnerships and their outcomes',
    icon: FaHandshake,
    metrics: {
      partnerships: { label: 'Partnership Metrics' },
      outcomes: { label: 'Collaboration Outcomes' },
      impact: { label: 'Partnership Impact' },
      engagement: { label: 'Partner Engagement' }
    }
  },
  IPR: {
    id: 'ipr',
    title: 'IPR Reports',
    description: 'Status and impact analysis of IP filings',
    icon: FaCopyright,
    metrics: {
      patents: { label: 'Patent Analysis' },
      trademarks: { label: 'Trademark Status' },
      impact: { label: 'IP Impact' },
      portfolio: { label: 'IP Portfolio' }
    }
  },
  RESOURCE: {
    id: 'resource',
    title: 'Resource Utilization',
    description: 'Statistics on allocated resource usage',
    icon: FaCogs,
    metrics: {
      human_capital: { label: 'Human Capital' },
      infrastructure: { label: 'Infrastructure' },
      technology: { label: 'Technology Usage' },
      efficiency: { label: 'Resource Efficiency' }
    }
  },
  ENGAGEMENT: {
    id: 'engagement',
    title: 'Engagement Reports',
    description: 'Platform activity and user engagement insights',
    icon: FaUsers,
    metrics: {
      user_activity: { label: 'User Activity' },
      retention: { label: 'Retention Metrics' },
      satisfaction: { label: 'User Satisfaction' },
      interaction: { label: 'Platform Interaction' }
    }
  },
  POLICY: {
    id: 'policy',
    title: 'Policy Impact Reports',
    description: 'Analysis of government policy effects',
    icon: FaBalanceScale,
    metrics: {
      compliance: { label: 'Compliance Status' },
      impact: { label: 'Policy Impact' },
      opportunities: { label: 'Policy Opportunities' },
      risk: { label: 'Regulatory Risk' }
    }
  }
};

// Custom Hook for Startup Preferences
const useStartupPreferences = (startupId) => {
  const [preferences, setPreferences] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPreferences = async () => {
      try {
        // Replace with actual API call
        const response = await fetch(`/api/startups/${startupId}/preferences`);
        const data = await response.json();
        setPreferences(data);
      } catch (error) {
        console.error('Error fetching startup preferences:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPreferences();
  }, [startupId]);

  return { preferences, loading, setPreferences };
};

// Add custom hook for startup ID
const useStartupId = () => {
  // Replace this with your actual implementation to get startup ID
  // Could come from context, redux, or route params
  return '123'; // Placeholder return
};

// Styled Components
const Container = styled.div`
  padding: 32px;
  max-width: 1400px;
  margin: 0 auto;
  background: linear-gradient(135deg, #f6f8fd 0%, #e9f0f8 100%);
  min-height: 100vh;
`;

const PageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
  background: white;
  padding: 24px;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  .header-content {
    h1 {
      font-size: 28px;
      color: #1a365d;
      margin-bottom: 8px;
      background: linear-gradient(135deg, #1a365d 0%, #2c5282 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    p {
      color: #4a5568;
      font-size: 16px;
    }
  }

  .header-actions {
    display: flex;
    gap: 16px;
  }
`;

const ActionButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  border-radius: 12px;
  border: none;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  background: ${props => props.primary ? 
    'linear-gradient(135deg, #4158D0 0%, #C850C0 100%)' : 
    'white'};
  color: ${props => props.primary ? 'white' : '#4a5568'};
  box-shadow: ${props => props.primary ? 
    '0 4px 15px rgba(0, 0, 0, 0.2)' : 
    '0 2px 8px rgba(0, 0, 0, 0.1)'};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  }

  svg {
    font-size: 16px;
  }
`;

const SearchBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
  padding: 10px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);

  .search-input {
    display: flex;
    align-items: center;
    flex: 1;
    margin-right: 20px;

    svg {
      margin-right: 10px;
      color: #666;
    }

    input {
      flex: 1;
      border: none;
      outline: none;
      padding: 8px;
      font-size: 16px;
    }
  }

  .filters {
    display: flex;
    gap: 10px;

    .filter-dropdown {
      padding: 8px;
      border: 1px solid #ddd;
      border-radius: 4px;
      outline: none;
      background: #fff;
      cursor: pointer;

      &:hover {
        border-color: #999;
      }
    }
  }
`;

const FilterButton = styled(ActionButton)`
  background: white;
  border: 1px solid #e2e8f0;
  padding: 12px 16px;
`;

const ReportsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
  margin-top: 24px;
`;

const ReportCard = styled.div`
  background: white;
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  .card-header {
    margin-bottom: 16px;

    h3 {
      color: #1a365d;
      margin-bottom: 8px;
    }

    p {
      color: #4a5568;
      font-size: 14px;
    }
  }

  .metrics-summary {
    display: flex;
    flex-direction: column;
    gap: 12px;

    .metric-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 8px;
      background: #f8fafc;
      border-radius: 8px;

      .metric-label {
        color: #4a5568;
        font-size: 14px;
      }

      .metric-value {
        color: #1a365d;
        font-weight: 500;
      }
    }
  }
`;

const ReportPreview = styled.div`
  h3 {
    font-size: 18px;
    color: #1a365d;
    margin-bottom: 8px;
  }

  .description {
    color: #4a5568;
    font-size: 14px;
    line-height: 1.5;
  }
`;

const ReportInfo = styled.div`
  padding: 16px 20px;
  background: #f8fafc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  color: #64748b;

  .report-type {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 4px 12px;
    background: #e2e8f0;
    border-radius: 20px;
    font-weight: 500;
  }
`;

const ExportIconButton = styled.button`
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.color || '#64748b'};

  svg {
    width: 16px;
    height: 16px;
  }

  &:hover {
    background: ${props => props.color || '#e2e8f0'};
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

const ReportTypesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  padding: 24px;
`;

const ReportTypeCard = styled(motion.div)`
  background: white;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  }

  .card-header {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 16px;

    svg {
      font-size: 24px;
      color: #4158D0;
    }

    h3 {
      font-size: 18px;
      color: #1a365d;
      margin: 0;
    }
  }

  .description {
    color: #4a5568;
    font-size: 14px;
    line-height: 1.6;
    margin-bottom: 16px;
  }

  .metrics {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;

    span {
      background: #f1f5f9;
      padding: 4px 12px;
      border-radius: 20px;
      font-size: 12px;
      color: #64748b;
      transition: all 0.2s ease;

      &:hover {
        background: #e2e8f0;
        color: #1a365d;
      }
    }
  }
`;

// Custom Hook for Report Data
const useReportData = (reportType) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReportData = async () => {
      try {
        // Replace with actual API call
        const response = await fetch(`/api/reports/${reportType}`);
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchReportData();
  }, [reportType]);

  return { data, loading, error };
};

// Add this generateReport function before the ReportGenerator component
const generateReport = async (reportType, selectedMetrics, dateRange) => {
  try {
    // Validate inputs
    if (!reportType || !selectedMetrics || !dateRange) {
      throw new Error('Missing required parameters for report generation');
    }

    // Get report type configuration
    const reportConfig = REPORT_TYPES[reportType.toUpperCase()];
    if (!reportConfig) {
      throw new Error('Invalid report type');
    }

    // Prepare report data structure
    const reportData = {
      id: `${reportType}_${Date.now()}`,
      type: reportType,
      title: reportConfig.title,
      description: reportConfig.description,
      generatedAt: new Date().toISOString(),
      dateRange: {
        start: dateRange.start,
        end: dateRange.end
      },
      metrics: {},
      summary: ''
    };

    // Fetch metric data for selected metrics
    for (const metric of selectedMetrics) {
      try {
        // Replace this with actual API calls to fetch metric data
        const metricData = await fetchMetricData(metric, dateRange);
        reportData.metrics[metric] = metricData;
      } catch (error) {
        console.error(`Failed to fetch data for metric: ${metric}`, error);
        reportData.metrics[metric] = { error: 'Failed to fetch data' };
      }
    }

    // Generate report summary
    reportData.summary = generateReportSummary(reportData);

    return reportData;
  } catch (error) {
    console.error('Report generation failed:', error);
    throw new Error(`Failed to generate ${reportType} report: ${error.message}`);
  }
};

// Helper function to fetch metric data
const fetchMetricData = async (metric, dateRange) => {
  // Replace with actual API call
  try {
    const response = await fetch(`/api/metrics/${metric}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        startDate: dateRange.start,
        endDate: dateRange.end,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching metric data for ${metric}:`, error);
    throw error;
  }
};

// Helper function to generate report summary
const generateReportSummary = (reportData) => {
  try {
    let summary = `${reportData.title} - Generated on ${new Date(reportData.generatedAt).toLocaleDateString()}\n\n`;
    
    // Add date range information
    summary += `Period: ${new Date(reportData.dateRange.start).toLocaleDateString()} to ${new Date(reportData.dateRange.end).toLocaleDateString()}\n\n`;
    
    // Add metrics summary
    summary += 'Key Metrics:\n';
    Object.entries(reportData.metrics).forEach(([metric, data]) => {
      if (data.error) {
        summary += `${metric}: Data unavailable\n`;
      } else {
        summary += `${metric}: ${summarizeMetricData(data)}\n`;
      }
    });

    return summary;
  } catch (error) {
    console.error('Error generating report summary:', error);
    return 'Failed to generate report summary';
  }
};

// Helper function to summarize metric data
const summarizeMetricData = (data) => {
  // Implement logic to summarize different types of metric data
  // This is a placeholder implementation
  if (typeof data === 'object') {
    return JSON.stringify(data);
  }
  return String(data);
};

// Add these styled components
const ReportGeneratorContainer = styled.div`
  background: white;
  border-radius: 16px;
  padding: 24px;
  margin-top: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const MetricsSelector = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 24px;
`;

const MetricGroup = styled.div`
  h4 {
    color: #1a365d;
    margin-bottom: 12px;
    font-size: 16px;
  }
`;

const SubMetricsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const SubMetricItem = styled.div`
  padding: 8px 12px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  background: ${props => props.selected ? 'rgba(65, 88, 208, 0.1)' : 'transparent'};
  color: ${props => props.selected ? '#4158D0' : '#4a5568'};
  border: 1px solid ${props => props.selected ? '#4158D0' : '#e2e8f0'};

  &:hover {
    background: rgba(65, 88, 208, 0.05);
    transform: translateX(4px);
  }
`;

const CustomizationPanel = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 24px;
  padding: 20px;
  background: #f8fafc;
  border-radius: 12px;
`;

const DateRangePicker = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  input {
    padding: 8px 12px;
    border-radius: 8px;
    border: 1px solid #e2e8f0;
    font-size: 14px;

    &:focus {
      outline: none;
      border-color: #4158D0;
      box-shadow: 0 0 0 3px rgba(65, 88, 208, 0.1);
    }
  }
`;

const VisualizationSelector = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  select {
    padding: 8px 12px;
    border-radius: 8px;
    border: 1px solid #e2e8f0;
    font-size: 14px;
    background: white;

    &:focus {
      outline: none;
      border-color: #4158D0;
      box-shadow: 0 0 0 3px rgba(65, 88, 208, 0.1);
    }
  }
`;

const ComparisonSelector = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  select {
    padding: 8px 12px;
    border-radius: 8px;
    border: 1px solid #e2e8f0;
    font-size: 14px;
    background: white;

    &:focus {
      outline: none;
      border-color: #4158D0;
      box-shadow: 0 0 0 3px rgba(65, 88, 208, 0.1);
    }
  }
`;

const GenerateButton = styled.button`
  background: linear-gradient(135deg, #4158D0 0%, #C850C0 100%);
  color: white;
  padding: 12px 24px;
  border-radius: 12px;
  border: none;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  width: fit-content;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  svg {
    font-size: 16px;
  }
`;

// Add these functional components
const DateRangePickerComponent = ({ startDate, endDate, onChange }) => (
  <DateRangePicker>
    <label>Date Range</label>
    <input
      type="date"
      value={startDate}
      onChange={(e) => onChange({ start: e.target.value, end: endDate })}
    />
    <input
      type="date"
      value={endDate}
      onChange={(e) => onChange({ start: startDate, end: e.target.value })}
    />
  </DateRangePicker>
);

const VisualizationSelectorComponent = ({ options, onChange }) => (
  <VisualizationSelector>
    <label>Visualization Type</label>
    <select onChange={(e) => onChange(e.target.value)}>
      {options.map(option => (
        <option key={option} value={option}>
          {option.charAt(0).toUpperCase() + option.slice(1)}
        </option>
      ))}
    </select>
  </VisualizationSelector>
);

const ComparisonSelectorComponent = ({ options, onChange }) => (
  <ComparisonSelector>
    <label>Comparison Type</label>
    <select onChange={(e) => onChange(e.target.value)}>
      {options.map(option => (
        <option key={option} value={option}>
          {option.toUpperCase()}
        </option>
      ))}
    </select>
  </ComparisonSelector>
);

// Enhanced Report Generator Component
const ReportGenerator = ({ reportType, startupId, onGenerate }) => {
  const [selectedMetrics, setSelectedMetrics] = useState([]);
  const [dateRange, setDateRange] = useState({ start: null, end: null });
  const [customizations, setCustomizations] = useState({});
  const { preferences, loading: prefsLoading } = useStartupPreferences(startupId);

  const handleMetricSelection = (metric, subMetrics) => {
    setSelectedMetrics(prev => ({
      ...prev,
      [metric]: subMetrics
    }));
  };

  const handleCustomizationChange = (key, value) => {
    setCustomizations(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const generateCustomReport = async () => {
    try {
      const reportData = await generateReport(
        reportType,
        selectedMetrics,
        dateRange,
        customizations,
        preferences
      );
      onGenerate(reportData);
    } catch (error) {
      console.error('Custom report generation failed:', error);
    }
  };

  return (
    <ReportGeneratorContainer>
      <MetricsSelector>
        {Object.entries(REPORT_TYPES[reportType].metrics).map(([metric, config]) => (
          <MetricGroup key={metric}>
            <h4>{config.label}</h4>
            <SubMetricsList>
              {config.subMetrics.map(subMetric => (
                <SubMetricItem
                  key={subMetric}
                  onClick={() => handleMetricSelection(metric, subMetric)}
                  selected={selectedMetrics[metric]?.includes(subMetric)}
                >
                  {subMetric.replace('_', ' ')}
                </SubMetricItem>
              ))}
            </SubMetricsList>
          </MetricGroup>
        ))}
      </MetricsSelector>

      <CustomizationPanel>
        <DateRangePickerComponent
          startDate={dateRange.start}
          endDate={dateRange.end}
          onChange={setDateRange}
        />
        
        <VisualizationSelectorComponent
          options={REPORT_TYPES[reportType].customizationOptions.visualizations}
          onChange={(viz) => handleCustomizationChange('visualization', viz)}
        />
        
        <ComparisonSelectorComponent
          options={REPORT_TYPES[reportType].customizationOptions.comparisons}
          onChange={(comp) => handleCustomizationChange('comparison', comp)}
        />
      </CustomizationPanel>

      <GenerateButton onClick={generateCustomReport}>
        Generate Custom Report
      </GenerateButton>
    </ReportGeneratorContainer>
  );
};

// Create a specialized Performance Report Modal
const PerformanceReportModal = ({ onClose }) => {
  return (
    <motion.div 
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div 
        className="modal-content"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
      >
        <div className="modal-header">
          <h2>Performance Reports</h2>
          <button onClick={onClose}><FaTimes /></button>
        </div>

        <div className="modal-body">
          {/* Revenue Section */}
          <section className="report-section">
            <h3>Revenue & Growth Analysis</h3>
            <div className="chart-container">
              <ComposedChart
                width={800}
                height={300}
                data={MOCK_PERFORMANCE_DATA.revenueMetrics.data}
                margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Legend />
                <Bar yAxisId="left" dataKey="revenue" fill="#8884d8" name="Revenue ($)" />
                <Line yAxisId="right" dataKey="growth" stroke="#82ca9d" name="Growth (%)" />
              </ComposedChart>
            </div>
            <div className="metrics-summary">
              <div className="metric-card">
                <h4>Total Revenue</h4>
                <p>${MOCK_PERFORMANCE_DATA.revenueMetrics.summary.totalRevenue.toLocaleString()}</p>
              </div>
              <div className="metric-card">
                <h4>Average Growth</h4>
                <p>{MOCK_PERFORMANCE_DATA.revenueMetrics.summary.averageGrowth}%</p>
              </div>
              <div className="metric-card">
                <h4>Projected Growth</h4>
                <p>{MOCK_PERFORMANCE_DATA.revenueMetrics.summary.projectedGrowth}%</p>
              </div>
            </div>
          </section>

          {/* User Acquisition Section */}
          <section className="report-section">
            <h3>User Acquisition Metrics</h3>
            <div className="chart-container">
              <LineChart
                width={800}
                height={300}
                data={MOCK_PERFORMANCE_DATA.userAcquisition.data}
                margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="newUsers" stroke="#8884d8" name="New Users" />
                <Line type="monotone" dataKey="activeUsers" stroke="#82ca9d" name="Active Users" />
                <Line type="monotone" dataKey="churnRate" stroke="#ffc658" name="Churn Rate (%)" />
              </LineChart>
            </div>
            <div className="metrics-summary">
              <div className="metric-card">
                <h4>Total Active Users</h4>
                <p>{MOCK_PERFORMANCE_DATA.userAcquisition.summary.totalUsers.toLocaleString()}</p>
              </div>
              <div className="metric-card">
                <h4>Avg Churn Rate</h4>
                <p>{MOCK_PERFORMANCE_DATA.userAcquisition.summary.averageChurnRate}%</p>
              </div>
              <div className="metric-card">
                <h4>User Retention</h4>
                <p>{MOCK_PERFORMANCE_DATA.userAcquisition.summary.userRetention}%</p>
              </div>
            </div>
          </section>

          {/* Market Growth Section */}
          <section className="report-section">
            <h3>Market Growth Analysis</h3>
            <div className="chart-container">
              <BarChart
                width={800}
                height={300}
                data={MOCK_PERFORMANCE_DATA.growthMetrics.data}
                margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="quarter" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="marketShare" fill="#8884d8" name="Market Share (%)" />
                <Bar dataKey="competitorShare" fill="#82ca9d" name="Competitor Share (%)" />
              </BarChart>
            </div>
            <div className="metrics-summary">
              <div className="metric-card">
                <h4>Market Penetration</h4>
                <p>{MOCK_PERFORMANCE_DATA.growthMetrics.summary.marketPenetration}%</p>
              </div>
              <div className="metric-card">
                <h4>YoY Growth</h4>
                <p>{MOCK_PERFORMANCE_DATA.growthMetrics.summary.yearOverYearGrowth}%</p>
              </div>
              <div className="metric-card">
                <h4>Industry Rank</h4>
                <p>#{MOCK_PERFORMANCE_DATA.growthMetrics.summary.industryRank}</p>
              </div>
            </div>
          </section>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Add this mock data for funding metrics
const MOCK_FUNDING_DATA = {
  fundingRounds: {
    data: [
      { round: 'Seed', amount: 500000, investors: 3, valuation: 2000000, date: '2023-01' },
      { round: 'Series A', amount: 2000000, investors: 5, valuation: 8000000, date: '2023-06' },
      { round: 'Series B', amount: 5000000, investors: 4, valuation: 20000000, date: '2023-12' }
    ],
    summary: {
      totalFunding: 7500000,
      totalInvestors: 12,
      latestValuation: 20000000
    }
  },
  fundAllocation: {
    data: [
      { category: 'R&D', allocated: 2500000, utilized: 2000000 },
      { category: 'Marketing', allocated: 1500000, utilized: 1200000 },
      { category: 'Operations', allocated: 2000000, utilized: 1800000 },
      { category: 'HR', allocated: 1000000, utilized: 800000 },
      { category: 'Infrastructure', allocated: 500000, utilized: 400000 }
    ],
    summary: {
      totalAllocated: 7500000,
      totalUtilized: 6200000,
      utilizationRate: 82.67
    }
  },
  burnRate: {
    monthly: [
      { month: 'Jan', burn: 180000, runway: 24 },
      { month: 'Feb', burn: 190000, runway: 22 },
      { month: 'Mar', burn: 185000, runway: 20 },
      { month: 'Apr', burn: 195000, runway: 18 },
      { month: 'May', burn: 200000, runway: 16 },
      { month: 'Jun', burn: 210000, runway: 14 }
    ],
    summary: {
      averageBurnRate: 193333,
      currentRunway: 14,
      cashBalance: 2700000
    }
  },
  investorMetrics: {
    data: [
      { type: 'VC Firms', count: 5, amount: 4500000 },
      { type: 'Angel Investors', count: 4, amount: 2000000 },
      { type: 'Strategic Investors', count: 2, amount: 800000 },
      { type: 'Others', count: 1, amount: 200000 }
    ],
    summary: {
      leadInvestors: 3,
      followOnRate: 75,
      averageTicketSize: 625000
    }
  }
};

// Create Funding Report Modal Component
const FundingReportModal = ({ onClose }) => {
  return (
    <motion.div 
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div 
        className="modal-content"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
      >
        <div className="modal-header">
          <h2>Funding Reports</h2>
          <button onClick={onClose}><FaTimes /></button>
        </div>

        <div className="modal-body">
          {/* Funding Rounds Section */}
          <section className="report-section">
            <h3>Funding Rounds Overview</h3>
            <div className="chart-container">
              <ComposedChart
                width={800}
                height={300}
                data={MOCK_FUNDING_DATA.fundingRounds.data}
                margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="round" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Legend />
                <Bar yAxisId="left" dataKey="amount" fill="#8884d8" name="Funding Amount ($)" />
                <Line yAxisId="right" dataKey="valuation" stroke="#82ca9d" name="Valuation ($)" />
              </ComposedChart>
            </div>
            <div className="metrics-summary">
              <div className="metric-card">
                <h4>Total Funding</h4>
                <p>${MOCK_FUNDING_DATA.fundingRounds.summary.totalFunding.toLocaleString()}</p>
              </div>
              <div className="metric-card">
                <h4>Total Investors</h4>
                <p>{MOCK_FUNDING_DATA.fundingRounds.summary.totalInvestors}</p>
              </div>
              <div className="metric-card">
                <h4>Latest Valuation</h4>
                <p>${MOCK_FUNDING_DATA.fundingRounds.summary.latestValuation.toLocaleString()}</p>
              </div>
            </div>
          </section>

          {/* Fund Allocation Section */}
          <section className="report-section">
            <h3>Fund Allocation Analysis</h3>
            <div className="chart-container">
              <BarChart
                width={800}
                height={300}
                data={MOCK_FUNDING_DATA.fundAllocation.data}
                margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="category" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="allocated" fill="#8884d8" name="Allocated ($)" />
                <Bar dataKey="utilized" fill="#82ca9d" name="Utilized ($)" />
              </BarChart>
            </div>
            <div className="metrics-summary">
              <div className="metric-card">
                <h4>Total Allocated</h4>
                <p>${MOCK_FUNDING_DATA.fundAllocation.summary.totalAllocated.toLocaleString()}</p>
              </div>
              <div className="metric-card">
                <h4>Total Utilized</h4>
                <p>${MOCK_FUNDING_DATA.fundAllocation.summary.totalUtilized.toLocaleString()}</p>
              </div>
              <div className="metric-card">
                <h4>Utilization Rate</h4>
                <p>{MOCK_FUNDING_DATA.fundAllocation.summary.utilizationRate}%</p>
              </div>
            </div>
          </section>

          {/* Burn Rate & Runway Section */}
          <section className="report-section">
            <h3>Burn Rate & Runway Analysis</h3>
            <div className="chart-container">
              <ComposedChart
                width={800}
                height={300}
                data={MOCK_FUNDING_DATA.burnRate.monthly}
                margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Legend />
                <Bar yAxisId="left" dataKey="burn" fill="#8884d8" name="Monthly Burn ($)" />
                <Line yAxisId="right" dataKey="runway" stroke="#82ca9d" name="Runway (Months)" />
              </ComposedChart>
            </div>
            <div className="metrics-summary">
              <div className="metric-card">
                <h4>Average Burn Rate</h4>
                <p>${MOCK_FUNDING_DATA.burnRate.summary.averageBurnRate.toLocaleString()}/mo</p>
              </div>
              <div className="metric-card">
                <h4>Current Runway</h4>
                <p>{MOCK_FUNDING_DATA.burnRate.summary.currentRunway} months</p>
              </div>
              <div className="metric-card">
                <h4>Cash Balance</h4>
                <p>${MOCK_FUNDING_DATA.burnRate.summary.cashBalance.toLocaleString()}</p>
              </div>
            </div>
          </section>

          {/* Investor Analysis Section */}
          <section className="report-section">
            <h3>Investor Analysis</h3>
            <div className="chart-container">
              <PieChart width={800} height={300}>
                <Pie
                  data={MOCK_FUNDING_DATA.investorMetrics.data}
                  cx={400}
                  cy={150}
                  labelLine={false}
                  outerRadius={120}
                  fill="#8884d8"
                  dataKey="amount"
                  nameKey="type"
                >
                  {MOCK_FUNDING_DATA.investorMetrics.data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={['#8884d8', '#82ca9d', '#ffc658', '#ff7300'][index]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </div>
            <div className="metrics-summary">
              <div className="metric-card">
                <h4>Lead Investors</h4>
                <p>{MOCK_FUNDING_DATA.investorMetrics.summary.leadInvestors}</p>
              </div>
              <div className="metric-card">
                <h4>Follow-on Rate</h4>
                <p>{MOCK_FUNDING_DATA.investorMetrics.summary.followOnRate}%</p>
              </div>
              <div className="metric-card">
                <h4>Avg Ticket Size</h4>
                <p>${MOCK_FUNDING_DATA.investorMetrics.summary.averageTicketSize.toLocaleString()}</p>
              </div>
            </div>
          </section>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Add mock data for market trends
const MOCK_MARKET_TRENDS_DATA = {
  industryAnalysis: {
    data: [
      { quarter: 'Q1 2023', marketSize: 5.2, growthRate: 12, competitors: 15 },
      { quarter: 'Q2 2023', marketSize: 5.8, growthRate: 15, competitors: 18 },
      { quarter: 'Q3 2023', marketSize: 6.5, growthRate: 18, competitors: 20 },
      { quarter: 'Q4 2023', marketSize: 7.2, growthRate: 22, competitors: 23 }
    ],
    summary: {
      totalMarketSize: 7.2,
      averageGrowthRate: 16.75,
      competitorCount: 23
    }
  },
  marketShare: {
    data: [
      { company: 'Your Company', share: 15 },
      { company: 'Competitor A', share: 25 },
      { company: 'Competitor B', share: 20 },
      { company: 'Competitor C', share: 18 },
      { company: 'Others', share: 22 }
    ],
    summary: {
      yourShare: 15,
      marketPosition: 4,
      yearOverYearGrowth: 5.2
    }
  },
  sectorTrends: {
    data: [
      { month: 'Jan', investment: 120, adoption: 65, innovation: 45 },
      { month: 'Feb', investment: 150, adoption: 70, innovation: 48 },
      { month: 'Mar', investment: 180, adoption: 75, innovation: 52 },
      { month: 'Apr', investment: 200, adoption: 78, innovation: 55 },
      { month: 'May', investment: 220, adoption: 82, innovation: 58 },
      { month: 'Jun', investment: 250, adoption: 85, innovation: 62 }
    ],
    summary: {
      investmentGrowth: 108.33,
      adoptionRate: 85,
      innovationIndex: 62
    }
  },
  competitiveAnalysis: {
    data: [
      { factor: 'Product Features', yourScore: 8.5, industryAvg: 7.2 },
      { factor: 'Price Point', yourScore: 7.8, industryAvg: 7.5 },
      { factor: 'Customer Service', yourScore: 9.0, industryAvg: 7.8 },
      { factor: 'Market Reach', yourScore: 7.2, industryAvg: 8.1 },
      { factor: 'Innovation', yourScore: 8.8, industryAvg: 7.4 }
    ],
    summary: {
      overallScore: 8.26,
      strengthAreas: 2,
      improvementAreas: 1
    }
  }
};

// Create Market Trends Report Modal Component
const MarketTrendsReportModal = ({ onClose }) => {
  return (
    <motion.div 
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div 
        className="modal-content"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
      >
        <div className="modal-header">
          <h2>Market Trends Report</h2>
          <button onClick={onClose}><FaTimes /></button>
        </div>

        <div className="modal-body">
          {/* Industry Analysis Section */}
          <section className="report-section">
            <h3>Industry Growth Analysis</h3>
            <div className="chart-container">
              <ComposedChart
                width={800}
                height={300}
                data={MOCK_MARKET_TRENDS_DATA.industryAnalysis.data}
                margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="quarter" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Legend />
                <Bar yAxisId="left" dataKey="marketSize" fill="#8884d8" name="Market Size (B$)" />
                <Line yAxisId="right" dataKey="growthRate" stroke="#82ca9d" name="Growth Rate (%)" />
                <Line yAxisId="right" dataKey="competitors" stroke="#ffc658" name="Competitors" />
              </ComposedChart>
            </div>
            <div className="metrics-summary">
              <div className="metric-card">
                <h4>Total Market Size</h4>
                <p>${MOCK_MARKET_TRENDS_DATA.industryAnalysis.summary.totalMarketSize}B</p>
              </div>
              <div className="metric-card">
                <h4>Avg Growth Rate</h4>
                <p>{MOCK_MARKET_TRENDS_DATA.industryAnalysis.summary.averageGrowthRate}%</p>
              </div>
              <div className="metric-card">
                <h4>Competitors</h4>
                <p>{MOCK_MARKET_TRENDS_DATA.industryAnalysis.summary.competitorCount}</p>
              </div>
            </div>
          </section>

          {/* Market Share Section */}
          <section className="report-section">
            <h3>Market Share Distribution</h3>
            <div className="chart-container">
              <PieChart width={800} height={300}>
                <Pie
                  data={MOCK_MARKET_TRENDS_DATA.marketShare.data}
                  cx={400}
                  cy={150}
                  labelLine={false}
                  outerRadius={120}
                  fill="#8884d8"
                  dataKey="share"
                  nameKey="company"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {MOCK_MARKET_TRENDS_DATA.marketShare.data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={['#8884d8', '#82ca9d', '#ffc658', '#ff7300', '#0088FE'][index]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </div>
            <div className="metrics-summary">
              <div className="metric-card">
                <h4>Your Market Share</h4>
                <p>{MOCK_MARKET_TRENDS_DATA.marketShare.summary.yourShare}%</p>
              </div>
              <div className="metric-card">
                <h4>Market Position</h4>
                <p>#{MOCK_MARKET_TRENDS_DATA.marketShare.summary.marketPosition}</p>
              </div>
              <div className="metric-card">
                <h4>YoY Growth</h4>
                <p>{MOCK_MARKET_TRENDS_DATA.marketShare.summary.yearOverYearGrowth}%</p>
              </div>
            </div>
          </section>

          {/* Sector Trends Section */}
          <section className="report-section">
            <h3>Sector Trends Analysis</h3>
            <div className="chart-container">
              <LineChart
                width={800}
                height={300}
                data={MOCK_MARKET_TRENDS_DATA.sectorTrends.data}
                margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="investment" stroke="#8884d8" name="Investment Index" />
                <Line type="monotone" dataKey="adoption" stroke="#82ca9d" name="Adoption Rate" />
                <Line type="monotone" dataKey="innovation" stroke="#ffc658" name="Innovation Index" />
              </LineChart>
            </div>
            <div className="metrics-summary">
              <div className="metric-card">
                <h4>Investment Growth</h4>
                <p>{MOCK_MARKET_TRENDS_DATA.sectorTrends.summary.investmentGrowth}%</p>
              </div>
              <div className="metric-card">
                <h4>Adoption Rate</h4>
                <p>{MOCK_MARKET_TRENDS_DATA.sectorTrends.summary.adoptionRate}%</p>
              </div>
              <div className="metric-card">
                <h4>Innovation Index</h4>
                <p>{MOCK_MARKET_TRENDS_DATA.sectorTrends.summary.innovationIndex}</p>
              </div>
            </div>
          </section>

          {/* Competitive Analysis Section */}
          <section className="report-section">
            <h3>Competitive Analysis</h3>
            <div className="chart-container">
              <BarChart
                width={800}
                height={300}
                data={MOCK_MARKET_TRENDS_DATA.competitiveAnalysis.data}
                margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="factor" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="yourScore" fill="#8884d8" name="Your Score" />
                <Bar dataKey="industryAvg" fill="#82ca9d" name="Industry Average" />
              </BarChart>
            </div>
            <div className="metrics-summary">
              <div className="metric-card">
                <h4>Overall Score</h4>
                <p>{MOCK_MARKET_TRENDS_DATA.competitiveAnalysis.summary.overallScore}/10</p>
              </div>
              <div className="metric-card">
                <h4>Strength Areas</h4>
                <p>{MOCK_MARKET_TRENDS_DATA.competitiveAnalysis.summary.strengthAreas}</p>
              </div>
              <div className="metric-card">
                <h4>Improvement Areas</h4>
                <p>{MOCK_MARKET_TRENDS_DATA.competitiveAnalysis.summary.improvementAreas}</p>
              </div>
            </div>
          </section>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Add mock data for collaboration metrics
const MOCK_COLLABORATION_DATA = {
  partnershipMetrics: {
    data: [
      { quarter: 'Q1 2023', active: 12, new: 4, completed: 2, success: 85 },
      { quarter: 'Q2 2023', active: 14, new: 5, completed: 3, success: 88 },
      { quarter: 'Q3 2023', active: 16, new: 6, completed: 4, success: 92 },
      { quarter: 'Q4 2023', active: 18, new: 4, completed: 5, success: 90 }
    ],
    summary: {
      totalPartnerships: 18,
      successRate: 89,
      avgDuration: 8.5
    }
  },
  partnerTypes: {
    data: [
      { type: 'Technology', count: 8, value: 1200000 },
      { type: 'Research', count: 5, value: 800000 },
      { type: 'Marketing', count: 4, value: 600000 },
      { type: 'Distribution', count: 3, value: 400000 },
      { type: 'Other', count: 2, value: 200000 }
    ],
    summary: {
      totalValue: 3200000,
      mostValuable: 'Technology',
      avgValue: 640000
    }
  },
  collaborationOutcomes: {
    data: [
      { month: 'Jan', revenue: 150000, innovation: 75, market: 62 },
      { month: 'Feb', revenue: 180000, innovation: 78, market: 65 },
      { month: 'Mar', revenue: 220000, innovation: 82, market: 70 },
      { month: 'Apr', revenue: 250000, innovation: 85, market: 73 },
      { month: 'May', revenue: 280000, innovation: 88, market: 76 },
      { month: 'Jun', revenue: 320000, innovation: 92, market: 80 }
    ],
    summary: {
      totalRevenue: 1400000,
      innovationScore: 92,
      marketExpansion: 80
    }
  },
  partnerEngagement: {
    data: [
      { level: 'High', partners: 7, satisfaction: 95, retention: 98 },
      { level: 'Medium', partners: 6, satisfaction: 85, retention: 90 },
      { level: 'Low', partners: 5, satisfaction: 70, retention: 75 }
    ],
    summary: {
      avgSatisfaction: 85,
      retentionRate: 88,
      topEngagement: 7
    }
  }
};

// Create Collaboration Report Modal Component
const CollaborationReportModal = ({ onClose }) => {
  return (
    <motion.div 
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div 
        className="modal-content"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
      >
        <div className="modal-header">
          <h2>Collaboration Reports</h2>
          <button onClick={onClose}><FaTimes /></button>
        </div>

        <div className="modal-body">
          {/* Partnership Metrics Section */}
          <section className="report-section">
            <h3>Partnership Overview</h3>
            <div className="chart-container">
              <ComposedChart
                width={800}
                height={300}
                data={MOCK_COLLABORATION_DATA.partnershipMetrics.data}
                margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="quarter" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Legend />
                <Bar yAxisId="left" dataKey="active" fill="#8884d8" name="Active Partnerships" />
                <Bar yAxisId="left" dataKey="new" fill="#82ca9d" name="New Partnerships" />
                <Line yAxisId="right" dataKey="success" stroke="#ffc658" name="Success Rate (%)" />
              </ComposedChart>
            </div>
            <div className="metrics-summary">
              <div className="metric-card">
                <h4>Total Partnerships</h4>
                <p>{MOCK_COLLABORATION_DATA.partnershipMetrics.summary.totalPartnerships}</p>
              </div>
              <div className="metric-card">
                <h4>Success Rate</h4>
                <p>{MOCK_COLLABORATION_DATA.partnershipMetrics.summary.successRate}%</p>
              </div>
              <div className="metric-card">
                <h4>Avg Duration</h4>
                <p>{MOCK_COLLABORATION_DATA.partnershipMetrics.summary.avgDuration} months</p>
              </div>
            </div>
          </section>

          {/* Partner Types Section */}
          <section className="report-section">
            <h3>Partnership Types & Value</h3>
            <div className="chart-container">
              <PieChart width={800} height={300}>
                <Pie
                  data={MOCK_COLLABORATION_DATA.partnerTypes.data}
                  cx={400}
                  cy={150}
                  labelLine={false}
                  outerRadius={120}
                  fill="#8884d8"
                  dataKey="value"
                  nameKey="type"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {MOCK_COLLABORATION_DATA.partnerTypes.data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={['#8884d8', '#82ca9d', '#ffc658', '#ff7300', '#0088FE'][index]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </div>
            <div className="metrics-summary">
              <div className="metric-card">
                <h4>Total Value</h4>
                <p>${MOCK_COLLABORATION_DATA.partnerTypes.summary.totalValue.toLocaleString()}</p>
              </div>
              <div className="metric-card">
                <h4>Most Valuable Type</h4>
                <p>{MOCK_COLLABORATION_DATA.partnerTypes.summary.mostValuable}</p>
              </div>
              <div className="metric-card">
                <h4>Average Value</h4>
                <p>${MOCK_COLLABORATION_DATA.partnerTypes.summary.avgValue.toLocaleString()}</p>
              </div>
            </div>
          </section>

          {/* Collaboration Outcomes Section */}
          <section className="report-section">
            <h3>Collaboration Outcomes</h3>
            <div className="chart-container">
              <LineChart
                width={800}
                height={300}
                data={MOCK_COLLABORATION_DATA.collaborationOutcomes.data}
                margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Legend />
                <Line yAxisId="left" type="monotone" dataKey="revenue" stroke="#8884d8" name="Revenue ($)" />
                <Line yAxisId="right" type="monotone" dataKey="innovation" stroke="#82ca9d" name="Innovation Score" />
                <Line yAxisId="right" type="monotone" dataKey="market" stroke="#ffc658" name="Market Reach" />
              </LineChart>
            </div>
            <div className="metrics-summary">
              <div className="metric-card">
                <h4>Total Revenue</h4>
                <p>${MOCK_COLLABORATION_DATA.collaborationOutcomes.summary.totalRevenue.toLocaleString()}</p>
              </div>
              <div className="metric-card">
                <h4>Innovation Score</h4>
                <p>{MOCK_COLLABORATION_DATA.collaborationOutcomes.summary.innovationScore}/100</p>
              </div>
              <div className="metric-card">
                <h4>Market Expansion</h4>
                <p>{MOCK_COLLABORATION_DATA.collaborationOutcomes.summary.marketExpansion}%</p>
              </div>
            </div>
          </section>

          {/* Partner Engagement Section */}
          <section className="report-section">
            <h3>Partner Engagement Analysis</h3>
            <div className="chart-container">
              <BarChart
                width={800}
                height={300}
                data={MOCK_COLLABORATION_DATA.partnerEngagement.data}
                margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="level" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="partners" fill="#8884d8" name="Number of Partners" />
                <Bar dataKey="satisfaction" fill="#82ca9d" name="Satisfaction Score" />
                <Bar dataKey="retention" fill="#ffc658" name="Retention Rate (%)" />
              </BarChart>
            </div>
            <div className="metrics-summary">
              <div className="metric-card">
                <h4>Avg Satisfaction</h4>
                <p>{MOCK_COLLABORATION_DATA.partnerEngagement.summary.avgSatisfaction}%</p>
              </div>
              <div className="metric-card">
                <h4>Retention Rate</h4>
                <p>{MOCK_COLLABORATION_DATA.partnerEngagement.summary.retentionRate}%</p>
              </div>
              <div className="metric-card">
                <h4>High Engagement</h4>
                <p>{MOCK_COLLABORATION_DATA.partnerEngagement.summary.topEngagement} partners</p>
              </div>
            </div>
          </section>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Add these styles
const modalStyles = `
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.75);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    padding: 20px;
  }

  .modal-content {
    background: white;
    border-radius: 12px;
    padding: 24px;
    width: 100%;
    max-width: 1000px;
    max-height: 90vh;
    overflow-y: auto;
  }

  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
    padding-bottom: 16px;
    border-bottom: 1px solid #e2e8f0;
  }

  .modal-header h2 {
    font-size: 24px;
    color: #1a365d;
  }

  .modal-header button {
    background: none;
    border: none;
    font-size: 20px;
    cursor: pointer;
    color: #64748b;
  }

  .report-section {
    margin-bottom: 32px;
  }

  .report-section h3 {
    color: #2d3748;
    margin-bottom: 16px;
  }

  .chart-container {
    background: #f8fafc;
    padding: 20px;
    border-radius: 8px;
    margin-bottom: 20px;
  }

  .metrics-summary {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 16px;
  }

  .metric-card {
    background: #f1f5f9;
    padding: 16px;
    border-radius: 8px;
    text-align: center;
  }

  .metric-card h4 {
    color: #64748b;
    font-size: 14px;
    margin-bottom: 8px;
  }

  .metric-card p {
    color: #1e293b;
    font-size: 24px;
    font-weight: 600;
  }
`;

// Add mock data for IPR metrics
const MOCK_IPR_DATA = {
  patentMetrics: {
    data: [
      { quarter: 'Q1 2023', filed: 3, granted: 1, pending: 5, value: 250000 },
      { quarter: 'Q2 2023', filed: 4, granted: 2, pending: 7, value: 400000 },
      { quarter: 'Q3 2023', filed: 5, granted: 3, pending: 9, value: 600000 },
      { quarter: 'Q4 2023', filed: 6, granted: 4, pending: 11, value: 800000 }
    ],
    summary: {
      totalPatents: 18,
      grantedPatents: 10,
      pendingApplications: 11,
      totalValue: 2050000
    }
  },
  trademarkStatus: {
    data: [
      { status: 'Registered', count: 12, value: 300000 },
      { status: 'Pending', count: 5, value: 150000 },
      { status: 'In Review', count: 3, value: 80000 },
      { status: 'Opposition', count: 2, value: 50000 },
      { status: 'Renewal Due', count: 1, value: 20000 }
    ],
    summary: {
      totalTrademarks: 23,
      activeTrademarks: 12,
      renewalsDue: 1
    }
  },
  iprPortfolio: {
    data: [
      { month: 'Jan', patents: 8, trademarks: 10, copyrights: 5 },
      { month: 'Feb', patents: 10, trademarks: 12, copyrights: 6 },
      { month: 'Mar', patents: 12, trademarks: 15, copyrights: 7 },
      { month: 'Apr', patents: 15, trademarks: 18, copyrights: 8 },
      { month: 'May', patents: 16, trademarks: 20, copyrights: 10 },
      { month: 'Jun', patents: 18, trademarks: 23, copyrights: 12 }
    ],
    summary: {
      totalAssets: 53,
      portfolioValue: 2600000,
      growthRate: 28.5
    }
  },
  iprImpact: {
    data: [
      { category: 'Market Share', withIPR: 85, withoutIPR: 60 },
      { category: 'Revenue', withIPR: 92, withoutIPR: 65 },
      { category: 'Valuation', withIPR: 88, withoutIPR: 55 },
      { category: 'Competition', withIPR: 78, withoutIPR: 45 },
      { category: 'Innovation', withIPR: 95, withoutIPR: 70 }
    ],
    summary: {
      averageImpact: 32.6,
      topImpactArea: 'Revenue',
      competitiveAdvantage: 'High'
    }
  }
};

// Create IPR Report Modal Component
const IPRReportModal = ({ onClose }) => {
  return (
    <motion.div 
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div 
        className="modal-content"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
      >
        <div className="modal-header">
          <h2>IPR Reports</h2>
          <button onClick={onClose}><FaTimes /></button>
        </div>

        <div className="modal-body">
          {/* Patent Metrics Section */}
          <section className="report-section">
            <h3>Patent Analytics</h3>
            <div className="chart-container">
              <ComposedChart
                width={800}
                height={300}
                data={MOCK_IPR_DATA.patentMetrics.data}
                margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="quarter" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Legend />
                <Bar yAxisId="left" dataKey="filed" fill="#8884d8" name="Filed Patents" />
                <Bar yAxisId="left" dataKey="granted" fill="#82ca9d" name="Granted Patents" />
                <Line yAxisId="right" dataKey="value" stroke="#ffc658" name="Value ($)" />
              </ComposedChart>
            </div>
            <div className="metrics-summary">
              <div className="metric-card">
                <h4>Total Patents</h4>
                <p>{MOCK_IPR_DATA.patentMetrics.summary.totalPatents}</p>
              </div>
              <div className="metric-card">
                <h4>Granted Patents</h4>
                <p>{MOCK_IPR_DATA.patentMetrics.summary.grantedPatents}</p>
              </div>
              <div className="metric-card">
                <h4>Portfolio Value</h4>
                <p>${MOCK_IPR_DATA.patentMetrics.summary.totalValue.toLocaleString()}</p>
              </div>
            </div>
          </section>

          {/* Trademark Status Section */}
          <section className="report-section">
            <h3>Trademark Status</h3>
            <div className="chart-container">
              <PieChart width={800} height={300}>
                <Pie
                  data={MOCK_IPR_DATA.trademarkStatus.data}
                  cx={400}
                  cy={150}
                  labelLine={false}
                  outerRadius={120}
                  fill="#8884d8"
                  dataKey="value"
                  nameKey="status"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {MOCK_IPR_DATA.trademarkStatus.data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={['#8884d8', '#82ca9d', '#ffc658', '#ff7300', '#0088FE'][index]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </div>
            <div className="metrics-summary">
              <div className="metric-card">
                <h4>Total Trademarks</h4>
                <p>{MOCK_IPR_DATA.trademarkStatus.summary.totalTrademarks}</p>
              </div>
              <div className="metric-card">
                <h4>Active Trademarks</h4>
                <p>{MOCK_IPR_DATA.trademarkStatus.summary.activeTrademarks}</p>
              </div>
              <div className="metric-card">
                <h4>Renewals Due</h4>
                <p>{MOCK_IPR_DATA.trademarkStatus.summary.renewalsDue}</p>
              </div>
            </div>
          </section>

          {/* IPR Portfolio Section */}
          <section className="report-section">
            <h3>IPR Portfolio Growth</h3>
            <div className="chart-container">
              <LineChart
                width={800}
                height={300}
                data={MOCK_IPR_DATA.iprPortfolio.data}
                margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="patents" stroke="#8884d8" name="Patents" />
                <Line type="monotone" dataKey="trademarks" stroke="#82ca9d" name="Trademarks" />
                <Line type="monotone" dataKey="copyrights" stroke="#ffc658" name="Copyrights" />
              </LineChart>
            </div>
            <div className="metrics-summary">
              <div className="metric-card">
                <h4>Total Assets</h4>
                <p>{MOCK_IPR_DATA.iprPortfolio.summary.totalAssets}</p>
              </div>
              <div className="metric-card">
                <h4>Portfolio Value</h4>
                <p>${MOCK_IPR_DATA.iprPortfolio.summary.portfolioValue.toLocaleString()}</p>
              </div>
              <div className="metric-card">
                <h4>Growth Rate</h4>
                <p>{MOCK_IPR_DATA.iprPortfolio.summary.growthRate}%</p>
              </div>
            </div>
          </section>

          {/* IPR Impact Section */}
          <section className="report-section">
            <h3>Business Impact Analysis</h3>
            <div className="chart-container">
              <BarChart
                width={800}
                height={300}
                data={MOCK_IPR_DATA.iprImpact.data}
                margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="category" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="withIPR" fill="#8884d8" name="With IPR (%)" />
                <Bar dataKey="withoutIPR" fill="#82ca9d" name="Without IPR (%)" />
              </BarChart>
            </div>
            <div className="metrics-summary">
              <div className="metric-card">
                <h4>Average Impact</h4>
                <p>{MOCK_IPR_DATA.iprImpact.summary.averageImpact}%</p>
              </div>
              <div className="metric-card">
                <h4>Top Impact Area</h4>
                <p>{MOCK_IPR_DATA.iprImpact.summary.topImpactArea}</p>
              </div>
              <div className="metric-card">
                <h4>Competitive Edge</h4>
                <p>{MOCK_IPR_DATA.iprImpact.summary.competitiveAdvantage}</p>
              </div>
            </div>
          </section>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Add mock data for Resource Utilization
const MOCK_RESOURCE_DATA = {
  humanCapital: {
    data: [
      { month: 'Jan', allocated: 45, utilized: 42, efficiency: 93 },
      { month: 'Feb', allocated: 48, utilized: 45, efficiency: 94 },
      { month: 'Mar', allocated: 52, utilized: 49, efficiency: 94 },
      { month: 'Apr', allocated: 55, utilized: 52, efficiency: 95 },
      { month: 'May', allocated: 58, utilized: 55, efficiency: 95 },
      { month: 'Jun', allocated: 60, utilized: 58, efficiency: 97 }
    ],
    summary: {
      totalHeadcount: 60,
      utilizationRate: 95.8,
      productivityScore: 92
    }
  },
  infrastructureUsage: {
    data: [
      { type: 'Cloud Services', capacity: 100, used: 85, cost: 12000 },
      { type: 'Development Tools', capacity: 100, used: 78, cost: 8000 },
      { type: 'Office Space', capacity: 100, used: 65, cost: 15000 },
      { type: 'Equipment', capacity: 100, used: 72, cost: 10000 },
      { type: 'Software Licenses', capacity: 100, used: 90, cost: 9000 }
    ],
    summary: {
      totalCost: 54000,
      avgUtilization: 78,
      costEfficiency: 85
    }
  },
  resourceAllocation: {
    data: [
      { department: 'R&D', allocated: 35, utilized: 33, roi: 145 },
      { department: 'Marketing', allocated: 25, utilized: 23, roi: 128 },
      { department: 'Operations', allocated: 20, utilized: 19, roi: 115 },
      { department: 'Sales', allocated: 15, utilized: 14, roi: 135 },
      { department: 'Support', allocated: 5, utilized: 5, roi: 110 }
    ],
    summary: {
      totalAllocation: 100,
      avgUtilization: 94,
      avgROI: 126.6
    }
  },
  efficiencyMetrics: {
    data: [
      { quarter: 'Q1', costEfficiency: 82, timeEfficiency: 85, qualityScore: 88 },
      { quarter: 'Q2', costEfficiency: 85, timeEfficiency: 87, qualityScore: 90 },
      { quarter: 'Q3', costEfficiency: 88, timeEfficiency: 90, qualityScore: 92 },
      { quarter: 'Q4', costEfficiency: 90, timeEfficiency: 92, qualityScore: 94 }
    ],
    summary: {
      overallEfficiency: 89,
      qualityIndex: 91,
      optimizationScore: 88
    }
  }
};

// Create Resource Utilization Report Modal Component
const ResourceUtilizationReportModal = ({ onClose }) => {
  return (
    <motion.div 
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div 
        className="modal-content"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
      >
        <div className="modal-header">
          <h2>Resource Utilization Report</h2>
          <button onClick={onClose}><FaTimes /></button>
        </div>

        <div className="modal-body">
          {/* Human Capital Section */}
          <section className="report-section">
            <h3>Human Capital Utilization</h3>
            <div className="chart-container">
              <ComposedChart
                width={800}
                height={300}
                data={MOCK_RESOURCE_DATA.humanCapital.data}
                margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Legend />
                <Bar yAxisId="left" dataKey="allocated" fill="#8884d8" name="Allocated Resources" />
                <Bar yAxisId="left" dataKey="utilized" fill="#82ca9d" name="Utilized Resources" />
                <Line yAxisId="right" dataKey="efficiency" stroke="#ffc658" name="Efficiency (%)" />
              </ComposedChart>
            </div>
            <div className="metrics-summary">
              <div className="metric-card">
                <h4>Total Headcount</h4>
                <p>{MOCK_RESOURCE_DATA.humanCapital.summary.totalHeadcount}</p>
              </div>
              <div className="metric-card">
                <h4>Utilization Rate</h4>
                <p>{MOCK_RESOURCE_DATA.humanCapital.summary.utilizationRate}%</p>
              </div>
              <div className="metric-card">
                <h4>Productivity Score</h4>
                <p>{MOCK_RESOURCE_DATA.humanCapital.summary.productivityScore}/100</p>
              </div>
            </div>
          </section>

          {/* Infrastructure Usage Section */}
          <section className="report-section">
            <h3>Infrastructure Utilization</h3>
            <div className="chart-container">
              <BarChart
                width={800}
                height={300}
                data={MOCK_RESOURCE_DATA.infrastructureUsage.data}
                margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="type" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="used" fill="#8884d8" name="Usage (%)" />
                <Bar dataKey="capacity" fill="#82ca9d" name="Capacity (%)" />
              </BarChart>
            </div>
            <div className="metrics-summary">
              <div className="metric-card">
                <h4>Total Cost</h4>
                <p>${MOCK_RESOURCE_DATA.infrastructureUsage.summary.totalCost.toLocaleString()}</p>
              </div>
              <div className="metric-card">
                <h4>Avg Utilization</h4>
                <p>{MOCK_RESOURCE_DATA.infrastructureUsage.summary.avgUtilization}%</p>
              </div>
              <div className="metric-card">
                <h4>Cost Efficiency</h4>
                <p>{MOCK_RESOURCE_DATA.infrastructureUsage.summary.costEfficiency}%</p>
              </div>
            </div>
          </section>

          {/* Resource Allocation Section */}
          <section className="report-section">
            <h3>Departmental Resource Allocation</h3>
            <div className="chart-container">
              <PieChart width={800} height={300}>
                <Pie
                  data={MOCK_RESOURCE_DATA.resourceAllocation.data}
                  cx={400}
                  cy={150}
                  labelLine={false}
                  outerRadius={120}
                  fill="#8884d8"
                  dataKey="allocated"
                  nameKey="department"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {MOCK_RESOURCE_DATA.resourceAllocation.data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={['#8884d8', '#82ca9d', '#ffc658', '#ff7300', '#0088FE'][index]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </div>
            <div className="metrics-summary">
              <div className="metric-card">
                <h4>Total Allocation</h4>
                <p>{MOCK_RESOURCE_DATA.resourceAllocation.summary.totalAllocation}%</p>
              </div>
              <div className="metric-card">
                <h4>Avg Utilization</h4>
                <p>{MOCK_RESOURCE_DATA.resourceAllocation.summary.avgUtilization}%</p>
              </div>
              <div className="metric-card">
                <h4>Avg ROI</h4>
                <p>{MOCK_RESOURCE_DATA.resourceAllocation.summary.avgROI}%</p>
              </div>
            </div>
          </section>

          {/* Efficiency Metrics Section */}
          <section className="report-section">
            <h3>Efficiency Analysis</h3>
            <div className="chart-container">
              <LineChart
                width={800}
                height={300}
                data={MOCK_RESOURCE_DATA.efficiencyMetrics.data}
                margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="quarter" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="costEfficiency" stroke="#8884d8" name="Cost Efficiency" />
                <Line type="monotone" dataKey="timeEfficiency" stroke="#82ca9d" name="Time Efficiency" />
                <Line type="monotone" dataKey="qualityScore" stroke="#ffc658" name="Quality Score" />
              </LineChart>
            </div>
            <div className="metrics-summary">
              <div className="metric-card">
                <h4>Overall Efficiency</h4>
                <p>{MOCK_RESOURCE_DATA.efficiencyMetrics.summary.overallEfficiency}%</p>
              </div>
              <div className="metric-card">
                <h4>Quality Index</h4>
                <p>{MOCK_RESOURCE_DATA.efficiencyMetrics.summary.qualityIndex}/100</p>
              </div>
              <div className="metric-card">
                <h4>Optimization Score</h4>
                <p>{MOCK_RESOURCE_DATA.efficiencyMetrics.summary.optimizationScore}/100</p>
              </div>
            </div>
          </section>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Add mock data for Engagement Report
const MOCK_ENGAGEMENT_DATA = {
  userActivity: {
    data: [
      { month: 'Jan', activeUsers: 1200, newUsers: 300, sessions: 4500 },
      { month: 'Feb', activeUsers: 1300, newUsers: 350, sessions: 4800 },
      { month: 'Mar', activeUsers: 1400, newUsers: 400, sessions: 5000 },
      { month: 'Apr', activeUsers: 1500, newUsers: 450, sessions: 5200 },
      { month: 'May', activeUsers: 1600, newUsers: 500, sessions: 5500 },
      { month: 'Jun', activeUsers: 1700, newUsers: 550, sessions: 5800 }
    ],
    summary: {
      totalActiveUsers: 1700,
      totalSessions: 5800,
      avgSessionDuration: 35
    }
  },
  engagementMetrics: {
    data: [
      { type: 'Likes', count: 12000, growth: 15 },
      { type: 'Comments', count: 8000, growth: 12 },
      { type: 'Shares', count: 5000, growth: 10 },
      { type: 'Mentions', count: 3000, growth: 8 },
      { type: 'Reactions', count: 15000, growth: 18 }
    ],
    summary: {
      totalEngagements: 43000,
      engagementGrowth: 12.6,
      topEngagementType: 'Reactions'
    }
  },
  platformUsage: {
    data: [
      { platform: 'Web', users: 800, sessions: 2500, duration: 40 },
      { platform: 'Mobile', users: 900, sessions: 3300, duration: 30 },
      { platform: 'Tablet', users: 200, sessions: 1000, duration: 25 }
    ],
    summary: {
      totalUsers: 1900,
      avgSessionDuration: 32,
      mostUsedPlatform: 'Mobile'
    }
  },
  retentionRates: {
    data: [
      { cohort: 'Jan', retention: 85 },
      { cohort: 'Feb', retention: 88 },
      { cohort: 'Mar', retention: 90 },
      { cohort: 'Apr', retention: 92 },
      { cohort: 'May', retention: 93 },
      { cohort: 'Jun', retention: 95 }
    ],
    summary: {
      avgRetention: 90.5,
      highestRetention: 95,
      lowestRetention: 85
    }
  }
};

// Create Engagement Report Modal Component
const EngagementReportModal = ({ onClose }) => {
  return (
    <motion.div 
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div 
        className="modal-content"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
      >
        <div className="modal-header">
          <h2>Engagement Report</h2>
          <button onClick={onClose}><FaTimes /></button>
        </div>

        <div className="modal-body">
          {/* User Activity Section */}
          <section className="report-section">
            <h3>User Activity Overview</h3>
            <div className="chart-container">
              <ComposedChart
                width={800}
                height={300}
                data={MOCK_ENGAGEMENT_DATA.userActivity.data}
                margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Legend />
                <Bar yAxisId="left" dataKey="activeUsers" fill="#8884d8" name="Active Users" />
                <Bar yAxisId="left" dataKey="newUsers" fill="#82ca9d" name="New Users" />
                <Line yAxisId="right" dataKey="sessions" stroke="#ffc658" name="Sessions" />
              </ComposedChart>
            </div>
            <div className="metrics-summary">
              <div className="metric-card">
                <h4>Total Active Users</h4>
                <p>{MOCK_ENGAGEMENT_DATA.userActivity.summary.totalActiveUsers}</p>
              </div>
              <div className="metric-card">
                <h4>Total Sessions</h4>
                <p>{MOCK_ENGAGEMENT_DATA.userActivity.summary.totalSessions}</p>
              </div>
              <div className="metric-card">
                <h4>Avg Session Duration</h4>
                <p>{MOCK_ENGAGEMENT_DATA.userActivity.summary.avgSessionDuration} mins</p>
              </div>
            </div>
          </section>

          {/* Engagement Metrics Section */}
          <section className="report-section">
            <h3>Engagement Metrics</h3>
            <div className="chart-container">
              <BarChart
                width={800}
                height={300}
                data={MOCK_ENGAGEMENT_DATA.engagementMetrics.data}
                margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="type" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="count" fill="#8884d8" name="Engagement Count" />
                <Bar dataKey="growth" fill="#82ca9d" name="Growth (%)" />
              </BarChart>
            </div>
            <div className="metrics-summary">
              <div className="metric-card">
                <h4>Total Engagements</h4>
                <p>{MOCK_ENGAGEMENT_DATA.engagementMetrics.summary.totalEngagements}</p>
              </div>
              <div className="metric-card">
                <h4>Engagement Growth</h4>
                <p>{MOCK_ENGAGEMENT_DATA.engagementMetrics.summary.engagementGrowth}%</p>
              </div>
              <div className="metric-card">
                <h4>Top Engagement Type</h4>
                <p>{MOCK_ENGAGEMENT_DATA.engagementMetrics.summary.topEngagementType}</p>
              </div>
            </div>
          </section>

          {/* Platform Usage Section */}
          <section className="report-section">
            <h3>Platform Usage</h3>
            <div className="chart-container">
              <PieChart width={800} height={300}>
                <Pie
                  data={MOCK_ENGAGEMENT_DATA.platformUsage.data}
                  cx={400}
                  cy={150}
                  labelLine={false}
                  outerRadius={120}
                  fill="#8884d8"
                  dataKey="users"
                  nameKey="platform"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {MOCK_ENGAGEMENT_DATA.platformUsage.data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={['#8884d8', '#82ca9d', '#ffc658'][index]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </div>
            <div className="metrics-summary">
              <div className="metric-card">
                <h4>Total Users</h4>
                <p>{MOCK_ENGAGEMENT_DATA.platformUsage.summary.totalUsers}</p>
              </div>
              <div className="metric-card">
                <h4>Avg Session Duration</h4>
                <p>{MOCK_ENGAGEMENT_DATA.platformUsage.summary.avgSessionDuration} mins</p>
              </div>
              <div className="metric-card">
                <h4>Most Used Platform</h4>
                <p>{MOCK_ENGAGEMENT_DATA.platformUsage.summary.mostUsedPlatform}</p>
              </div>
            </div>
          </section>

          {/* Retention Rates Section */}
          <section className="report-section">
            <h3>Retention Rates</h3>
            <div className="chart-container">
              <LineChart
                width={800}
                height={300}
                data={MOCK_ENGAGEMENT_DATA.retentionRates.data}
                margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="cohort" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="retention" stroke="#8884d8" name="Retention Rate (%)" />
              </LineChart>
            </div>
            <div className="metrics-summary">
              <div className="metric-card">
                <h4>Avg Retention</h4>
                <p>{MOCK_ENGAGEMENT_DATA.retentionRates.summary.avgRetention}%</p>
              </div>
              <div className="metric-card">
                <h4>Highest Retention</h4>
                <p>{MOCK_ENGAGEMENT_DATA.retentionRates.summary.highestRetention}%</p>
              </div>
              <div className="metric-card">
                <h4>Lowest Retention</h4>
                <p>{MOCK_ENGAGEMENT_DATA.retentionRates.summary.lowestRetention}%</p>
              </div>
            </div>
          </section>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Add mock data for Policy Impact Report
const MOCK_POLICY_DATA = {
  policyChanges: {
    data: [
      { policy: 'Tax Reform', impact: 8, compliance: 90, cost: 50000 },
      { policy: 'Labor Law', impact: 7, compliance: 85, cost: 30000 },
      { policy: 'Trade Regulation', impact: 9, compliance: 92, cost: 40000 },
      { policy: 'Environmental Policy', impact: 6, compliance: 88, cost: 20000 },
      { policy: 'Data Protection', impact: 8, compliance: 95, cost: 35000 }
    ],
    summary: {
      avgImpact: 7.6,
      avgCompliance: 90,
      totalCost: 175000
    }
  },
  regulatoryCompliance: {
    data: [
      { quarter: 'Q1', audits: 3, issues: 1, resolved: 1 },
      { quarter: 'Q2', audits: 4, issues: 2, resolved: 2 },
      { quarter: 'Q3', audits: 5, issues: 3, resolved: 3 },
      { quarter: 'Q4', audits: 6, issues: 2, resolved: 2 }
    ],
    summary: {
      totalAudits: 18,
      issuesResolved: 8,
      complianceRate: 88
    }
  },
  policyAdoption: {
    data: [
      { department: 'Finance', adopted: 5, pending: 2, success: 90 },
      { department: 'HR', adopted: 4, pending: 1, success: 85 },
      { department: 'Operations', adopted: 6, pending: 3, success: 88 },
      { department: 'Sales', adopted: 3, pending: 1, success: 92 },
      { department: 'IT', adopted: 7, pending: 2, success: 95 }
    ],
    summary: {
      totalAdopted: 25,
      avgSuccessRate: 90,
      pendingPolicies: 9
    }
  },
  impactAnalysis: {
    data: [
      { area: 'Revenue', positive: 85, negative: 15 },
      { area: 'Cost', positive: 70, negative: 30 },
      { area: 'Efficiency', positive: 90, negative: 10 },
      { area: 'Innovation', positive: 80, negative: 20 },
      { area: 'Market Reach', positive: 75, negative: 25 }
    ],
    summary: {
      avgPositiveImpact: 80,
      avgNegativeImpact: 20,
      mostImpactedArea: 'Efficiency'
    }
  }
};

// Create Policy Impact Report Modal Component
const PolicyImpactReportModal = ({ onClose }) => {
  return (
    <motion.div 
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div 
        className="modal-content"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
      >
        <div className="modal-header">
          <h2>Policy Impact Report</h2>
          <button onClick={onClose}><FaTimes /></button>
        </div>

        <div className="modal-body">
          {/* Policy Changes Section */}
          <section className="report-section">
            <h3>Policy Changes Impact</h3>
            <div className="chart-container">
              <BarChart
                width={800}
                height={300}
                data={MOCK_POLICY_DATA.policyChanges.data}
                margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="policy" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="impact" fill="#8884d8" name="Impact Score" />
                <Bar dataKey="compliance" fill="#82ca9d" name="Compliance (%)" />
              </BarChart>
            </div>
            <div className="metrics-summary">
              <div className="metric-card">
                <h4>Avg Impact</h4>
                <p>{MOCK_POLICY_DATA.policyChanges.summary.avgImpact}</p>
              </div>
              <div className="metric-card">
                <h4>Avg Compliance</h4>
                <p>{MOCK_POLICY_DATA.policyChanges.summary.avgCompliance}%</p>
              </div>
              <div className="metric-card">
                <h4>Total Cost</h4>
                <p>${MOCK_POLICY_DATA.policyChanges.summary.totalCost.toLocaleString()}</p>
              </div>
            </div>
          </section>

          {/* Regulatory Compliance Section */}
          <section className="report-section">
            <h3>Regulatory Compliance</h3>
            <div className="chart-container">
              <ComposedChart
                width={800}
                height={300}
                data={MOCK_POLICY_DATA.regulatoryCompliance.data}
                margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="quarter" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Legend />
                <Bar yAxisId="left" dataKey="audits" fill="#8884d8" name="Audits" />
                <Bar yAxisId="left" dataKey="issues" fill="#82ca9d" name="Issues" />
                <Line yAxisId="right" dataKey="resolved" stroke="#ffc658" name="Resolved Issues" />
              </ComposedChart>
            </div>
            <div className="metrics-summary">
              <div className="metric-card">
                <h4>Total Audits</h4>
                <p>{MOCK_POLICY_DATA.regulatoryCompliance.summary.totalAudits}</p>
              </div>
              <div className="metric-card">
                <h4>Issues Resolved</h4>
                <p>{MOCK_POLICY_DATA.regulatoryCompliance.summary.issuesResolved}</p>
              </div>
              <div className="metric-card">
                <h4>Compliance Rate</h4>
                <p>{MOCK_POLICY_DATA.regulatoryCompliance.summary.complianceRate}%</p>
              </div>
            </div>
          </section>

          {/* Policy Adoption Section */}
          <section className="report-section">
            <h3>Policy Adoption</h3>
            <div className="chart-container">
              <PieChart width={800} height={300}>
                <Pie
                  data={MOCK_POLICY_DATA.policyAdoption.data}
                  cx={400}
                  cy={150}
                  labelLine={false}
                  outerRadius={120}
                  fill="#8884d8"
                  dataKey="adopted"
                  nameKey="department"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {MOCK_POLICY_DATA.policyAdoption.data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={['#8884d8', '#82ca9d', '#ffc658', '#ff7300', '#0088FE'][index]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </div>
            <div className="metrics-summary">
              <div className="metric-card">
                <h4>Total Adopted</h4>
                <p>{MOCK_POLICY_DATA.policyAdoption.summary.totalAdopted}</p>
              </div>
              <div className="metric-card">
                <h4>Avg Success Rate</h4>
                <p>{MOCK_POLICY_DATA.policyAdoption.summary.avgSuccessRate}%</p>
              </div>
              <div className="metric-card">
                <h4>Pending Policies</h4>
                <p>{MOCK_POLICY_DATA.policyAdoption.summary.pendingPolicies}</p>
              </div>
            </div>
          </section>

          {/* Impact Analysis Section */}
          <section className="report-section">
            <h3>Impact Analysis</h3>
            <div className="chart-container">
              <BarChart
                width={800}
                height={300}
                data={MOCK_POLICY_DATA.impactAnalysis.data}
                margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="area" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="positive" fill="#8884d8" name="Positive Impact (%)" />
                <Bar dataKey="negative" fill="#82ca9d" name="Negative Impact (%)" />
              </BarChart>
            </div>
            <div className="metrics-summary">
              <div className="metric-card">
                <h4>Avg Positive Impact</h4>
                <p>{MOCK_POLICY_DATA.impactAnalysis.summary.avgPositiveImpact}%</p>
              </div>
              <div className="metric-card">
                <h4>Avg Negative Impact</h4>
                <p>{MOCK_POLICY_DATA.impactAnalysis.summary.avgNegativeImpact}%</p>
              </div>
              <div className="metric-card">
                <h4>Most Impacted Area</h4>
                <p>{MOCK_POLICY_DATA.impactAnalysis.summary.mostImpactedArea}</p>
              </div>
            </div>
          </section>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Update the handleReportClick function in your main component
const StartupReports = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [reports, setReports] = useState([]);
  const [filteredReports, setFilteredReports] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedReportType, setSelectedReportType] = useState(null);
  const [generatedReports, setGeneratedReports] = useState([]);
  const [selectedReport, setSelectedReport] = useState(null);
  const navigate = useNavigate();
  const startupId = useStartupId();

  // Add these state variables in your StartupReports component
  const [filters, setFilters] = useState({
    type: 'all',
    date: 'all',
    status: 'all'
  });

  // Add these filter options
  const FILTER_OPTIONS = {
    type: ['all', 'performance', 'funding', 'market', 'collaboration', 'ipr', 'resource', 'engagement', 'policy'],
    date: ['all', 'last7days', 'last30days', 'last3months', 'last6months', 'lastyear'],
    status: ['all', 'draft', 'published', 'archived']
  };

  // Add these filter functions
  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const filterReports = (reports) => {
    return reports.filter(report => {
      const typeMatch = filters.type === 'all' || report.type === filters.type;
      const dateMatch = filters.date === 'all' || isWithinDateRange(report.date, filters.date);
      const statusMatch = filters.status === 'all' || report.status === filters.status;
      return typeMatch && dateMatch && statusMatch;
    });
  };

  const isWithinDateRange = (date, range) => {
    const reportDate = new Date(date);
    const now = new Date();
    switch (range) {
      case 'last7days':
        return differenceInDays(now, reportDate) <= 7;
      case 'last30days':
        return differenceInDays(now, reportDate) <= 30;
      case 'last3months':
        return differenceInMonths(now, reportDate) <= 3;
      case 'last6months':
        return differenceInMonths(now, reportDate) <= 6;
      case 'lastyear':
        return differenceInYears(now, reportDate) <= 1;
      default:
        return true;
    }
  };

  useEffect(() => {
    // Simulated API call to fetch reports
    const fetchReports = async () => {
      try {
        // Replace with actual API call
        const response = await fetch('/api/reports');
        const data = await response.json();
        setReports(data);
        setFilteredReports(data);
      } catch (error) {
        console.error('Error fetching reports:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchReports();
  }, []);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    
    const filtered = reports
      .filter(report => 
        report.title.toLowerCase().includes(term) ||
        report.description.toLowerCase().includes(term) ||
        report.type.toLowerCase().includes(term)
      );
    
    setFilteredReports(filterReports(filtered));
  };

  const handleExport = async (format, reportData) => {
    try {
      let storageKey;
      switch(format) {
        case 'pdf':
          storageKey = await exportToPDF(reportData);
          break;
        case 'ppt':
          storageKey = await exportToPPT(reportData);
          break;
        case 'excel':
          storageKey = await exportToExcel(reportData);
          break;
        default:
          console.warn('Unknown export format:', format);
      }

      if (storageKey) {
        console.log('Export saved with key:', storageKey);
      }
    } catch (error) {
      console.error('Export failed:', error);
      alert('Failed to export. Please try again.');
    }
  };

  const handleReportTypeSelect = (type) => {
    setSelectedReportType(type);
    navigate(`/reports/${type}`);
  };

  const handleReportClick = (reportType) => {
    setSelectedReport({
      type: reportType
    });
  };

  return (
    <Container>
      <PageHeader>
        <div className="header-content">
          <h1>Startup Reports</h1>
          <p>Generate and analyze comprehensive startup reports</p>
        </div>
        <div className="header-actions">
          <ActionButton onClick={() => navigate('/reports/customize')}>
            <FaCog /> Customize
          </ActionButton>
          <ActionButton primary onClick={() => navigate('/reports/new')}>
            <FaPlus /> New Report
          </ActionButton>
        </div>
      </PageHeader>

      <SearchBar>
        <div className="search-input">
          <FaSearch />
          <input
            type="text"
            placeholder="Search reports..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        <div className="filters">
          <FilterDropdown
            type="type"
            options={FILTER_OPTIONS.type}
            value={filters.type}
            onChange={handleFilterChange}
          />
          <FilterDropdown
            type="date"
            options={FILTER_OPTIONS.date}
            value={filters.date}
            onChange={handleFilterChange}
          />
          <FilterDropdown
            type="status"
            options={FILTER_OPTIONS.status}
            value={filters.status}
            onChange={handleFilterChange}
          />
        </div>
      </SearchBar>

      <ReportTypesGrid>
        {Object.entries(REPORT_TYPES).map(([key, type]) => (
          <ReportTypeCard
            key={type.id}
            onClick={() => handleReportClick(type.id)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="card-header">
              <type.icon />
              <h3>{type.title}</h3>
            </div>
            <p className="description">{type.description}</p>
            <div className="metrics">
              {Object.entries(type.metrics).map(([metricKey, value]) => (
                <span key={metricKey}>{value.label}</span>
              ))}
            </div>
          </ReportTypeCard>
        ))}
      </ReportTypesGrid>

      {selectedReportType && (
        <ReportGenerator
          reportType={selectedReportType}
          startupId={startupId}
          onGenerate={(report) => setGeneratedReports(prev => [...prev, report])}
        />
      )}

      {/* <ReportsGrid>
        {generatedReports.map((report) => (
          <ReportCard key={report.id}>
            <div className="card-header">
              <h3>{report.title}</h3>
              <p>{report.description}</p>
            </div>
            <div className="metrics-summary">
              {Object.entries(report.metrics).map(([key, value]) => (
                <div key={key} className="metric-item">
                  <span className="metric-label">{key}</span>
                  <span className="metric-value">{value}</span>
                </div>
              ))}
            </div>
          </ReportCard>
        ))}
      </ReportsGrid> */}

      <AnimatePresence>
        {selectedReport && (
          <div>
            {selectedReport.type === 'performance' && (
              <PerformanceReportModal onClose={() => setSelectedReport(null)} />
            )}
            {selectedReport.type === 'funding' && (
              <FundingReportModal onClose={() => setSelectedReport(null)} />
            )}
            {selectedReport.type === 'market' && (
              <MarketTrendsReportModal onClose={() => setSelectedReport(null)} />
            )}
            {selectedReport.type === 'collaboration' && (
              <CollaborationReportModal onClose={() => setSelectedReport(null)} />
            )}
            {selectedReport.type === 'ipr' && (
              <IPRReportModal onClose={() => setSelectedReport(null)} />
            )}
            {selectedReport.type === 'resource' && (
              <ResourceUtilizationReportModal onClose={() => setSelectedReport(null)} />
            )}
            {selectedReport.type === 'engagement' && (
              <EngagementReportModal onClose={() => setSelectedReport(null)} />
            )}
            {selectedReport.type === 'policy' && (
              <PolicyImpactReportModal onClose={() => setSelectedReport(null)} />
            )}
          </div>
        )}
      </AnimatePresence>
    </Container>
  );
};

// Add the modal styles to the document
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = modalStyles;
document.head.appendChild(styleSheet);

// Add the FilterDropdown component definition
const FilterDropdown = ({ type, options, value, onChange }) => {
  return (
    <select
      value={value}
      onChange={(e) => onChange(type, e.target.value)}
      className="filter-dropdown"
    >
      {options.map(option => (
        <option key={option} value={option}>
          {option.charAt(0).toUpperCase() + option.slice(1)}
        </option>
      ))}
    </select>
  );
};

export default StartupReports;

