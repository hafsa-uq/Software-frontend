import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale);

const dummyMetrics = {
  'Conversion Rate': [0.05, 0.06, 0.04, 0.05, 0.07],
  'Traffic Volume': [1000, 1200, 950, 1100, 1300],
};

const TargetSetting = () => {
  const [metrics] = useState(['Conversion Rate', 'Traffic Volume']);
  const [levels] = useState(['Account', 'Category', 'ASIN']);
  const [timeframes] = useState(['Weekly', 'Monthly', 'Quarterly']);
  const [selectedMetric, setSelectedMetric] = useState(metrics[0]);
  const [selectedLevel, setSelectedLevel] = useState(levels[0]);
  const [selectedTimeframe, setSelectedTimeframe] = useState(timeframes[0]);
  const [targetValue, setTargetValue] = useState('');
  const [targets, setTargets] = useState([]);
  const [alerts, setAlerts] = useState([]);

  const handleSave = () => {
    const newTarget = {
      metric: selectedMetric,
      level: selectedLevel,
      timeframe: selectedTimeframe,
      value: parseFloat(targetValue),
    };
    setTargets([...targets, newTarget]);
    setTargetValue('');
  };

  useEffect(() => {
    const newAlerts = targets.map((target) => {
      const currentMetric = dummyMetrics[target.metric];
      if (currentMetric === undefined) return null;

      const currentAverage = currentMetric.reduce((a, b) => a + b, 0) / currentMetric.length;
      const deviation = Math.abs(currentAverage - target.value);
      if (deviation > target.value * 0.1) { 
        return {
          metric: target.metric,
          level: target.level,
          timeframe: target.timeframe,
          expected: target.value,
          current: currentAverage,
          deviation,
        };
      }
      return null;
    }).filter(alert => alert);

    setAlerts(newAlerts);
  }, [targets]);


  const chartData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
    datasets: [
      {
        label: selectedMetric,
        data: dummyMetrics[selectedMetric],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h3 className="text-2xl font-bold mb-4">Target Setting and Tracking</h3>

      {/* Target Setting Interface */}
      <div className="mb-6">
        <h4 className="text-xl font-semibold mb-2">Set Target</h4>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Metric:</label>
            <select
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
              value={selectedMetric}
              onChange={(e) => setSelectedMetric(e.target.value)}
            >
              {metrics.map((metric) => (
                <option key={metric} value={metric}>{metric}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Level:</label>
            <select
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
            >
              {levels.map((level) => (
                <option key={level} value={level}>{level}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Timeframe:</label>
            <select
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
              value={selectedTimeframe}
              onChange={(e) => setSelectedTimeframe(e.target.value)}
            >
              {timeframes.map((timeframe) => (
                <option key={timeframe} value={timeframe}>{timeframe}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Target Value:</label>
            <input
              type="number"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
              value={targetValue}
              onChange={(e) => setTargetValue(e.target.value)}
            />
          </div>
          <button
            onClick={handleSave}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Save Target
          </button>
        </div>
      </div>

      <div className="mb-6">
        <h4 className="text-xl font-semibold mb-2">Target Tracking Dashboard</h4>
        <Line data={chartData} />
      </div>

      {/* Alerts */}
      <div>
        <h4 className="text-xl font-semibold mb-2">Alerts</h4>
        {alerts.length === 0 ? (
          <p>No significant deviations.</p>
        ) : (
          alerts.map((alert, index) => (
            <div key={index} className="p-4 mb-2 bg-yellow-100 border border-yellow-300 rounded-md">
              <p>
                Significant deviation for {alert.metric}: Expected {alert.expected}, but got {alert.current}. Deviation: {alert.deviation}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TargetSetting;
