import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const SalesAnalytics = () => {
  const [activeMetric, setActiveMetric] = useState('Revenue');
  const [timeFrame, setTimeFrame] = useState('This Year');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: 'name', direction: 'ascending' });

  const [goals, setGoals] = useState({
    'Revenue': 50000,
    'Units Sold': 2500,
    'AOV': 75,
    'Conversion Rate': 5,
  });
  const [progress, setProgress] = useState({
    'Revenue': 75000,
    'Units Sold': 4000,
    'AOV': 48,
    'Conversion Rate': 4.5,
  });

  const products = [
    { name: 'Product 1', asin: 'B001', unitsSold: 100, revenue: 5000, aov: 50, conversionRate: 5, progress: { 'Revenue': 45000, 'Units Sold': 2250, 'AOV': 70, 'Conversion Rate': 4.5 } },
    { name: 'Product 2', asin: 'B002', unitsSold: 80, revenue: 4000, aov: 50, conversionRate: 4, progress: { 'Revenue': 25000, 'Units Sold': 1250, 'AOV': 60, 'Conversion Rate': 3.5 } },
    { name: 'Product 3', asin: 'B003', unitsSold: 120, revenue: 6000, aov: 50, conversionRate: 6, progress: { 'Revenue': 32000, 'Units Sold': 1600, 'AOV': 55, 'Conversion Rate': 5.5 } },
  ];

  // Sales Trend Visualization data
  const salesTrendData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: `Actual ${activeMetric}`,
        data: [5000, 6000, 7000, 8000, 9000, 10000, 11000, 12000, 13000, 14000, 15000, 16000],
        fill: false,
        borderColor: '#2684ff',
      },
      {
        label: `Goal ${activeMetric}`,
        data: [4000, 5500, 6500, 7500, 8500, 9500, 10500, 11500, 12500, 13500, 14500, 15500],
        fill: false,
        borderColor: '#ff6384', 
        borderDash: [5, 5], 
      },
    ],
  };

  const progressColor = (metric) => {
    const progressValue = Math.min((progress[metric] / goals[metric]) * 100, 100); // Cap at 100%
    if (progressValue >= 95) return '#4caf50'; 
    if (progressValue >= 75) return '#ffeb3b'; 
    if (progressValue >= 50) return '#ff9800'; 
    return '#f44336'; // Red
  };

  // Sorting logic
  const sortedProducts = [...products].sort((a, b) => {
    if (sortConfig.direction === 'ascending') {
      return a[sortConfig.key] > b[sortConfig.key] ? 1 : -1;
    } else {
      return a[sortConfig.key] < b[sortConfig.key] ? 1 : -1;
    }
  });

  const filteredProducts = sortedProducts.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSort = (key) => {
    setSortConfig((prevConfig) => ({
      key,
      direction: prevConfig.key === key && prevConfig.direction === 'ascending' ? 'descending' : 'ascending',
    }));
  };

  const handleGoalChange = (metric, value) => {
    setGoals({ ...goals, [metric]: value });
  };

  const handleSubmitGoals = () => {
    console.log('Goals submitted:', goals);
  };

  return (
    <div className="flex flex-col h-screen">
      <main className="flex-1 p-6 bg-gray-100 flex flex-col">
        <h1 className="text-3xl font-extrabold mb-6 text-gray-800">Sales Analytics</h1>

        {/* Key Metrics & Goal Tracking */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div
            className={`bg-green-100 p-4 rounded shadow-md cursor-pointer flex flex-col items-start ${activeMetric === 'Revenue' ? 'ring-2 ring-green-500' : ''}`}
            onClick={() => setActiveMetric('Revenue')}
          >
            <h2 className="text-lg font-semibold">Revenue</h2>
            <p className="text-2xl font-bold">${progress['Revenue'].toLocaleString()}</p>
            <p className="text-green-500">Goal: ${goals['Revenue'].toLocaleString()} ({((progress['Revenue'] / goals['Revenue']) * 100).toFixed(2)}%)</p>
          </div>
          <div
            className={`bg-yellow-100 p-4 rounded shadow-md cursor-pointer flex flex-col items-start ${activeMetric === 'Units Sold' ? 'ring-2 ring-yellow-500' : ''}`}
            onClick={() => setActiveMetric('Units Sold')}
          >
            <h2 className="text-lg font-semibold">Units Sold</h2>
            <p className="text-2xl font-bold">{progress['Units Sold'].toLocaleString()}</p>
            <p className="text-yellow-500">Goal: {goals['Units Sold'].toLocaleString()} ({((progress['Units Sold'] / goals['Units Sold']) * 100).toFixed(2)}%)</p>
          </div>
          <div
            className={`bg-blue-100 p-4 rounded shadow-md cursor-pointer flex flex-col items-start ${activeMetric === 'AOV' ? 'ring-2 ring-blue-500' : ''}`}
            onClick={() => setActiveMetric('AOV')}
          >
            <h2 className="text-lg font-semibold">AOV</h2>
            <p className="text-2xl font-bold">${progress['AOV'].toFixed(2)}</p>
            <p className="text-blue-500">Goal: ${goals['AOV'].toFixed(2)} ({((progress['AOV'] / goals['AOV']) * 100).toFixed(2)}%)</p>
          </div>
          <div
            className={`bg-red-100 p-4 rounded shadow-md cursor-pointer flex flex-col items-start ${activeMetric === 'Conversion Rate' ? 'ring-2 ring-red-500' : ''}`}
            onClick={() => setActiveMetric('Conversion Rate')}
          >
            <h2 className="text-lg font-semibold">Conversion Rate</h2>
            <p className="text-2xl font-bold">{progress['Conversion Rate'].toFixed(2)}%</p>
            <p className="text-red-500">Goal: {goals['Conversion Rate'].toFixed(2)}% ({((progress['Conversion Rate'] / goals['Conversion Rate']) * 100).toFixed(2)}%)</p>
          </div>
        </div>

        {/* Date Range Selector */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">{activeMetric} Stats</h2>
          <select
            className="p-2 border border-gray-300 rounded-lg bg-white"
            value={timeFrame}
            onChange={(e) => setTimeFrame(e.target.value)}
          >
            <option>This Year</option>
            <option>Last 6 Months</option>
            <option>Last 3 Months</option>
            <option>Last Month</option>
            <option>This Week</option>
          </select>
        </div>

        {/* Sales Trend Visualization */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">Sales Trend</h2>
          <Line data={salesTrendData} />
        </div>

        {/* Product Performance Table */}
        <div className="mb-6">
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-lg mb-4"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gray-100 border-b border-gray-200">
              <tr>
                <th className="py-3 px-4 border-b cursor-pointer text-left" onClick={() => handleSort('name')}>
                  Product Name/ASIN
                </th>
                <th className="py-3 px-4 border-b cursor-pointer text-left" onClick={() => handleSort('unitsSold')}>
                  Units Sold
                </th>
                <th className="py-3 px-4 border-b cursor-pointer text-left" onClick={() => handleSort('revenue')}>
                  Revenue
                </th>
                <th className="py-3 px-4 border-b cursor-pointer text-left" onClick={() => handleSort('aov')}>
                  AOV
                </th>
                <th className="py-3 px-4 border-b cursor-pointer text-left" onClick={() => handleSort('conversionRate')}>
                  Conversion Rate
                </th>
                <th className="py-3 px-4 border-b text-left">
                  Goal Progress ({activeMetric})
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((product) => (
                <tr key={product.asin} className="hover:bg-gray-50">
                  <td className="py-3 px-4 border-b">{product.name} ({product.asin})</td>
                  <td className="py-3 px-4 border-b">{product.unitsSold}</td>
                  <td className="py-3 px-4 border-b">${product.revenue.toLocaleString()}</td>
                  <td className="py-3 px-4 border-b">${product.aov.toFixed(2)}</td>
                  <td className="py-3 px-4 border-b">{product.conversionRate.toFixed(2)}%</td>
                  <td className="py-3 px-4 border-b">
                    <div className="relative pt-1">
                      <div className="flex mb-2 items-center justify-between">
                        <div className="text-xs font-semibold inline-block py-1 px-2 rounded-full text-teal-600 bg-teal-200">
                          {Math.min(((product.progress[activeMetric] / goals[activeMetric]) * 100), 100).toFixed(2)}%
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="relative w-full">
                          <div
                            className="flex flex-col"
                            style={{ height: '5px', width: `${Math.min((product.progress[activeMetric] / goals[activeMetric]) * 100, 100)}%`, backgroundColor: progressColor(activeMetric) }}
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Goal Setting & Management */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Goal Setting & Management</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {['Revenue', 'Units Sold', 'AOV', 'Conversion Rate'].map((metric) => (
              <div key={metric} className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">{metric}</h3>
                <input
                  type="number"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder={`Set ${metric} goal`}
                  value={goals[metric]}
                  onChange={(e) => handleGoalChange(metric, Number(e.target.value))}
                />
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-4">
            <button
              onClick={handleSubmitGoals}
              className="py-2 px-6 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
            >
              Submit Goals
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SalesAnalytics;
