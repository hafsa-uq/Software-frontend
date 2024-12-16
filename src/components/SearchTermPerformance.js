import React, { useState, useEffect } from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ArcElement } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ArcElement);

const dummyData = {
  topSearchTerms: [
    { term: 'Organic Coffee', traffic: 1500, conversionRate: 0.12 },
    { term: 'Green Tea', traffic: 1200, conversionRate: 0.08 },
    { term: 'Herbal Supplements', traffic: 1000, conversionRate: 0.15 },
  ],
  newVsExistingTerms: [
    { term: 'Organic Coffee', type: 'Existing' },
    { term: 'Green Tea', type: 'New' },
    { term: 'Herbal Supplements', type: 'Existing' },
  ],
  suggestedTerms: ['Matcha Powder', 'Protein Supplements', 'Eco-Friendly Tea Bags'],
};

const SearchTermPerformance = () => {
  const [searchTerms, setSearchTerms] = useState([]);
  const [newTerms, setNewTerms] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    // Set dummy data or fetch real data
    setSearchTerms(dummyData.topSearchTerms);
    setNewTerms(dummyData.newVsExistingTerms);
    setSuggestions(dummyData.suggestedTerms);
  }, []);

  const barChartData = {
    labels: searchTerms.map(term => term.term),
    datasets: [
      {
        label: 'Traffic',
        data: searchTerms.map(term => term.traffic),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const pieChartData = {
    labels: ['New Terms', 'Existing Terms'],
    datasets: [
      {
        data: [
          newTerms.filter(term => term.type === 'New').length,
          newTerms.filter(term => term.type === 'Existing').length,
        ],
        backgroundColor: ['rgba(54, 162, 235, 0.2)', 'rgba(255, 159, 64, 0.2)'],
        borderColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 159, 64, 1)'],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false, 
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-sm space-y-4">
      <h3 className="text-lg font-semibold">Search Term Performance</h3>

      {/* Top Search Terms */}
      <div className="relative h-40">
        <h4 className="text-md font-medium mb-2">Top Search Terms</h4>
        <div className="absolute inset-0">
          <Bar data={barChartData} options={chartOptions} />
        </div>
      </div>

      {/* Conversion Rates */}
      <div className="text-sm">
        <h4 className="font-medium mb-2">Conversion Rates</h4>
        <ul className="list-disc pl-4">
          {searchTerms.map((term, index) => (
            <li key={index}>
              {term.term}: {Math.round(term.conversionRate * 100)}%
            </li>
          ))}
        </ul>
      </div>

      {/* New vs Existing Terms */}
      <div className="relative h-40">
        <h4 className="text-md font-medium mb-2">New vs. Existing Terms</h4>
        <div className="absolute inset-0">
          <Pie data={pieChartData} options={chartOptions} />
        </div>
      </div>

      {/* Suggestions */}
      <div className="text-sm">
        <h4 className="font-medium mb-2">Suggestions</h4>
        <ul className="list-disc pl-4">
          {suggestions.map((suggestion, index) => (
            <li key={index}>{suggestion}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchTermPerformance;
