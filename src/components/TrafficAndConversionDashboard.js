import React, { useState, useEffect } from 'react'; 
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend);

const TrafficAndConversionDashboard = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [metricsData, setMetricsData] = useState({
    pageViews: [],
    uniqueVisitors: [],
    sessions: [],
    ctr: [],
    conversionRate: [],
    addToCartRate: [],
    unitsOrdered: [],
    comparisonData: {
      previousPeriod: {
        pageViews: [],
        uniqueVisitors: [],
        sessions: [],
        ctr: [],
        conversionRate: [],
        addToCartRate: [],
        unitsOrdered: [],
      }
    }
  });

  useEffect(() => {
    fetchMetricsData();
  }, []);

  const fetchMetricsData = () => {
    // Mock data for demonstration purposes
    setMetricsData({
      pageViews: [200, 300, 250, 400, 350, 500, 450, 600, 550, 700, 650, 800],
      uniqueVisitors: [150, 200, 180, 300, 270, 350, 330, 400, 380, 420, 410, 450],
      sessions: [100, 150, 130, 200, 180, 250, 240, 300, 270, 320, 310, 350],
      ctr: [1.5, 2.0, 1.8, 2.5, 2.2, 2.8, 2.6, 3.0, 2.9, 3.2, 3.1, 3.5],
      conversionRate: [0.5, 0.6, 0.55, 0.7, 0.65, 0.75, 0.7, 0.8, 0.75, 0.85, 0.8, 0.9],
      addToCartRate: [2.0, 2.5, 2.3, 3.0, 2.8, 3.2, 3.1, 3.5, 3.3, 3.8, 3.6, 4.0],
      unitsOrdered: [50, 75, 60, 90, 80, 100, 95, 110, 105, 120, 115, 130],
      comparisonData: {
        previousPeriod: {
          pageViews: [180, 290, 240, 380, 340, 450, 420, 580, 500, 680, 620, 780],
          uniqueVisitors: [140, 190, 170, 290, 260, 340, 320, 390, 360, 410, 390, 430],
          sessions: [90, 140, 120, 190, 170, 230, 220, 290, 250, 310, 290, 340],
          ctr: [1.4, 1.9, 1.7, 2.4, 2.1, 2.7, 2.5, 2.9, 2.8, 3.1, 3.0, 3.4],
          conversionRate: [0.45, 0.55, 0.5, 0.65, 0.6, 0.7, 0.65, 0.75, 0.7, 0.8, 0.75, 0.85],
          addToCartRate: [1.8, 2.4, 2.2, 2.9, 2.7, 3.1, 3.0, 3.4, 3.2, 3.7, 3.5, 3.9],
          unitsOrdered: [45, 70, 55, 85, 75, 95, 90, 105, 100, 115, 110, 125],
        }
      }
    });
  };

  const dateOptions = {
    today: [new Date(), new Date()],
    yesterday: [new Date(new Date().setDate(new Date().getDate() - 1)), new Date(new Date().setDate(new Date().getDate() - 1))],
    last7Days: [new Date(new Date().setDate(new Date().getDate() - 6)), new Date()],
    last30Days: [new Date(new Date().setDate(new Date().getDate() - 29)), new Date()],
  };

  const filterDataByDateRange = (data, start, end) => {
    // For demonstration, assuming data is monthly and there are 12 months.
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const filteredData = {
      labels: months,
      pageViews: data.pageViews,
      uniqueVisitors: data.uniqueVisitors,
      sessions: data.sessions,
      ctr: data.ctr,
      conversionRate: data.conversionRate,
      addToCartRate: data.addToCartRate,
      unitsOrdered: data.unitsOrdered
    };

    return filteredData;
  };

  const handleDateRangeChange = (range) => {
    if (range === 'custom') return; 
    const [start, end] = dateOptions[range];
    setStartDate(start);
    setEndDate(end);
    const filteredData = filterDataByDateRange(metricsData, start, end);
   
    setMetricsData(filteredData);
  };

  const createChartData = (dataSets) => ({
    labels: [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ],
    datasets: dataSets.map(({ label, data, comparisonData, borderColor, backgroundColor }) => ({
      label,
      data,
      borderColor,
      backgroundColor,
      fill: true,
      borderWidth: 2
    })).concat(
      dataSets.map(({ label, comparisonData }) => ({
        label: `Previous Period ${label}`,
        data: comparisonData,
        borderColor: '#d1d5db',
        backgroundColor: 'rgba(209, 213, 219, 0.2)',
        borderWidth: 2
      }))
    )
  });

  return (
    <div className="p-4">
      <div className="mb-4">
        <DatePicker
          selectsRange
          startDate={startDate}
          endDate={endDate}
          onChange={dates => {
            const [start, end] = dates;
            setStartDate(start);
            setEndDate(end);
            const filteredData = filterDataByDateRange(metricsData, start, end);
            setMetricsData(filteredData);
          }}
          isClearable
          dateFormat="MMMM d, yyyy"
          className="p-2 border border-gray-300 rounded mb-4 w-full"
        />
        <div className="mb-4">
          <button onClick={() => handleDateRangeChange('today')} className="mr-2 px-4 py-2 border rounded">Today</button>
          <button onClick={() => handleDateRangeChange('yesterday')} className="mr-2 px-4 py-2 border rounded">Yesterday</button>
          <button onClick={() => handleDateRangeChange('last7Days')} className="mr-2 px-4 py-2 border rounded">Last 7 Days</button>
          <button onClick={() => handleDateRangeChange('last30Days')} className="mr-2 px-4 py-2 border rounded">Last 30 Days</button>
          <button onClick={() => handleDateRangeChange('custom')} className="px-4 py-2 border rounded">Custom</button>
        </div>
      </div>

      {/* Charts */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Traffic Metrics Over Time</h3>
        <Line data={createChartData([
          { label: 'Page Views', data: metricsData.pageViews, comparisonData: metricsData.comparisonData?.previousPeriod?.pageViews, borderColor: '#2684ff', backgroundColor: 'rgba(38, 132, 255, 0.2)' },
          { label: 'Unique Visitors', data: metricsData.uniqueVisitors, comparisonData: metricsData.comparisonData?.previousPeriod?.uniqueVisitors, borderColor: '#34d399', backgroundColor: 'rgba(52, 211, 153, 0.2)' },
          { label: 'Sessions', data: metricsData.sessions, comparisonData: metricsData.comparisonData?.previousPeriod?.sessions, borderColor: '#fbbf24', backgroundColor: 'rgba(251, 191, 36, 0.2)' }
        ])} />
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Conversion Metrics Over Time</h3>
        <Line data={createChartData([
          { label: 'CTR', data: metricsData.ctr, comparisonData: metricsData.comparisonData?.previousPeriod?.ctr, borderColor: '#60a5fa', backgroundColor: 'rgba(96, 165, 250, 0.2)' },
          { label: 'Conversion Rate', data: metricsData.conversionRate, comparisonData: metricsData.comparisonData?.previousPeriod?.conversionRate, borderColor: '#e11d48', backgroundColor: 'rgba(225, 29, 72, 0.2)' },
          { label: 'Add to Cart Rate', data: metricsData.addToCartRate, comparisonData: metricsData.comparisonData?.previousPeriod?.addToCartRate, borderColor: '#8b5cf6', backgroundColor: 'rgba(139, 92, 246, 0.2)' }
        ])} />
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Units Ordered Over Time</h3>
        <Line data={createChartData([
          { label: 'Units Ordered', data: metricsData.unitsOrdered, comparisonData: metricsData.comparisonData?.previousPeriod?.unitsOrdered, borderColor: '#f87171', backgroundColor: 'rgba(248, 113, 113, 0.2)' }
        ])} />
      </div>
    </div>
  );
};

export default TrafficAndConversionDashboard;
