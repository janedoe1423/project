import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './startup_data_input.css';

const StartupDataInput = () => {
  const navigate = useNavigate();
  
  const getLastFiveMonths = () => {
    const months = [];
    for (let i = 0; i < 5; i++) {
      const d = new Date();
      d.setMonth(d.getMonth() - i);
      months.unshift({
        name: d.toLocaleString('default', { month: 'long' }),
        year: d.getFullYear()
      });
    }
    return months;
  };

  const months = getLastFiveMonths();
  const [currentMetric, setCurrentMetric] = useState('revenue');
  const [currentMonthIndex, setCurrentMonthIndex] = useState(0);
  const [formData, setFormData] = useState({
    revenue: Array(5).fill(''),
    growthRate: Array(5).fill(''),
    burnRate: Array(5).fill(''),
    fundsGained: Array(5).fill(''),
    successRate: Array(5).fill(''),
    loss: Array(5).fill('')
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [missingMonths, setMissingMonths] = useState([]);
  const [submitStatus, setSubmitStatus] = useState({ show: false, message: '', type: '' });

  const metrics = [
    {
      id: 'revenue',
      title: 'Revenue',
      icon: '📈',
      unit: 'INR',
      color: '#4299E1'
    },
    {
      id: 'growthRate',
      title: 'Growth Rate',
      icon: '📊',
      unit: '%',
      min: -100,
      max: 100,
      color: '#48BB78'
    },
    {
      id: 'burnRate',
      title: 'Burn Rate',
      icon: '🔥',
      unit: 'INR/month',
      color: '#F56565'
    },
    {
      id: 'fundsGained',
      title: 'Funds Gained',
      icon: '💰',
      unit: 'INR',
      color: '#ECC94B'
    },
    {
      id: 'successRate',
      title: 'Success Rate',
      icon: '🎯',
      unit: '%',
      min: 0,
      max: 100,
      color: '#9F7AEA'
    },
    {
      id: 'loss',
      title: 'Loss',
      icon: '📉',
      unit: 'INR',
      color: '#ED8936'
    }
  ];

  const handleInputChange = (value, index) => {
    setFormData(prev => ({
      ...prev,
      [currentMetric]: prev[currentMetric].map((v, i) => 
        i === index ? value : v
      )
    }));
  };

  const isCurrentMetricComplete = () => {
    return formData[currentMetric].every(value => value !== '');
  };

  const getMissingMonths = () => {
    const missing = [];
    formData[currentMetric].forEach((value, index) => {
      if (value === '') {
        missing.push(months[index].name);
      }
    });
    return missing;
  };

  const handleNext = () => {
    if (!isCurrentMetricComplete()) {
      setMissingMonths(getMissingMonths());
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000);
      return;
    }
    const nextMetricIndex = metrics.findIndex(m => m.id === currentMetric) + 1;
    setCurrentMetric(metrics[nextMetricIndex].id);
  };

  const handleSkip = () => {
    setShowPopup(false);
    const nextMetricIndex = metrics.findIndex(m => m.id === currentMetric) + 1;
    if (nextMetricIndex < metrics.length) {
      setCurrentMetric(metrics[nextMetricIndex].id);
    }
  };

  const handleSkipAndSubmit = async () => {
    setIsLoading(true);
    try {
      const filteredFormData = {};
      Object.entries(formData).forEach(([key, value]) => {
        if (value.some(v => v !== '')) {
          filteredFormData[key] = value.map(v => v === '' ? '0' : v);
        }
      });

      if (Object.keys(filteredFormData).length === 0) {
        throw new Error('Please provide data for at least one metric');
      }

      const response = await fetch('http://localhost:5000/api/startup/metrics', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(filteredFormData)
      });

      if (!response.ok) {
        throw new Error('Failed to save data');
      }

      const result = await response.json();
      console.log('Data saved:', result);
      
      setSubmitStatus({
        show: true,
        message: 'Data saved successfully! Redirecting...',
        type: 'success'
      });

      setTimeout(() => {
        navigate('/startup-profile#dashboard');
      }, 2000);

    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus({
        show: true,
        message: error.message || 'Failed to save data. Please try again.',
        type: 'error'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleFinalSubmit = async () => {
    setIsLoading(true);
    try {
      const filteredFormData = {};
      Object.entries(formData).forEach(([key, value]) => {
        if (value.some(v => v !== '')) {
          filteredFormData[key] = value.map(v => v === '' ? '0' : v);
        }
      });

      if (Object.keys(filteredFormData).length === 0) {
        throw new Error('Please provide data for at least one metric');
      }

      const response = await fetch('http://localhost:5000/api/startup/metrics', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(filteredFormData)
      });

      if (!response.ok) {
        throw new Error('Failed to save data');
      }

      const result = await response.json();
      console.log('Data saved:', result);
      
      setSubmitStatus({
        show: true,
        message: 'Data saved successfully! Redirecting...',
        type: 'success'
      });

      setTimeout(() => {
        navigate('/startup-profile#dashboard');
      }, 2000);

    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus({
        show: true,
        message: error.message || 'Failed to save data. Please try again.',
        type: 'error'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const currentMetricData = metrics.find(m => m.id === currentMetric);

  return (
    <div className="modern-input-container">
      <div className="metrics-nav">
        {metrics.map(metric => (
          <div 
            key={metric.id}
            className={`metric-tab ${currentMetric === metric.id ? 'active' : ''}`}
            onClick={() => setCurrentMetric(metric.id)}
            style={{'--metric-color': metric.color}}
          >
            <span className="metric-icon">{metric.icon}</span>
            <span className="metric-name">{metric.title}</span>
          </div>
        ))}
      </div>

      <div className="input-section" style={{'--metric-color': currentMetricData.color}}>
        <div className="metric-header">
          <h2>{currentMetricData.title}</h2>
          <span className="unit-badge">{currentMetricData.unit}</span>
        </div>

        <div className="compact-input-grid">
          {months.map((month, index) => (
            <div key={index} className="compact-input-row">
              <div className="month-label">
                <span className="month-name">{month.name}</span>
                <span className="year">{month.year}</span>
              </div>
              <div className="input-wrapper">
                <input
                  type="number"
                  value={formData[currentMetric][index]}
                  onChange={(e) => handleInputChange(e.target.value, index)}
                  min={currentMetricData.min}
                  max={currentMetricData.max}
                  placeholder="0"
                  className="minimal-input"
                />
                <span className="unit">{currentMetricData.unit}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="button-container">
          <button className="skip-button" onClick={handleSkip}>
            Skip
          </button>
          
          {currentMetric === 'loss' ? (
            <button 
              className="submit-button"
              onClick={handleSkipAndSubmit}
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="loading-spinner"></span>
              ) : (
                'Submit All Data'
              )}
            </button>
          ) : (
            <button 
              className={`next-button ${isCurrentMetricComplete() ? 'complete' : ''}`}
              onClick={handleNext}
            >
              <span>Next</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          )}
        </div>
      </div>

      {showPopup && (
        <div className="popup-notification">
          <div className="popup-content">
            <div className="popup-icon">⚠️</div>
            <div className="popup-message">
              <h4>Missing Data</h4>
              <p>Please fill in data for: {missingMonths.join(', ')}</p>
            </div>
            <button 
              className="close-popup" 
              onClick={() => setShowPopup(false)}
            >
              ×
            </button>
          </div>
        </div>
      )}

      {submitStatus.show && (
        <div className={`popup-notification ${submitStatus.type}`}>
          <div className="popup-content">
            <div className="popup-icon">{submitStatus.type === 'success' ? '✅' : '❌'}</div>
            <div className="popup-message">
              <h4>{submitStatus.message}</h4>
            </div>
            <button 
              className="close-popup" 
              onClick={() => setSubmitStatus({ ...submitStatus, show: false })}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default StartupDataInput;