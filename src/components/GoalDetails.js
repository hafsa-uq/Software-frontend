import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { FiPlusCircle, FiDownload, FiMessageCircle } from 'react-icons/fi';
import { GiShoppingCart } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip as ChartTooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, ChartTooltip, Legend);

const GoalDetails = () => {
  const barData = [
    { name: 'Feb 1st', uv: 6, pv: 3, amt: 2 },
    { name: 'Feb 2nd', uv: 8, pv: 4, amt: 4 },
    { name: 'Feb 3rd', uv: 10, pv: 6, amt: 5 },
    { name: 'Feb 4th', uv: 12, pv: 8, amt: 6 },
    { name: 'Feb 6th', uv: 9, pv: 7, amt: 5 },
  ];

  const ordersData = [
    { name: 'Feb 1st', uv: 30000, pv: 20000, amt: 18000 },
    { name: 'Feb 2nd', uv: 40000, pv: 32000, amt: 25000 },
    { name: 'Feb 3rd', uv: 35000, pv: 29000, amt: 22000 },
    { name: 'Feb 4th', uv: 42000, pv: 36000, amt: 30000 },
    { name: 'Feb 6th', uv: 38000, pv: 34000, amt: 27000 },
  ];

  const donutData = {
    labels: ['PPC Ads', 'Brand Store', 'Optimized Listing'],
    datasets: [
      {
        data: [44.4, 33.3, 22.2],
        backgroundColor: ['#1E3A8A', '#4B5563', '#2563EB'], 
        borderWidth: 0,
      },
    ],
  };

  const donutOptions = {
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          color: '#333',
          boxWidth: 20,
        },
      },
    },
    cutout: '70%',
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="p-6 bg-gray-100">
      {/* Stats Section */}
      <div className="flex justify-around mb-8">
        <div className="bg-blue-600 text-white text-center px-6 py-4 rounded-lg shadow-md flex-1 mx-2">
          <h2 className="text-xl">Active Goals</h2>
          <p className="text-4xl font-bold">10</p>
        </div>
        <div className="bg-blue-600 text-white text-center px-6 py-4 rounded-lg shadow-md flex-1 mx-2">
          <h2 className="text-xl">Completed Goals</h2>
          <p className="text-4xl font-bold">10</p>
        </div>
        <div className="bg-blue-600 text-white text-center px-6 py-4 rounded-lg shadow-md flex-1 mx-2">
          <h2 className="text-xl">Success Rate</h2>
          <p className="text-4xl font-bold">98%</p>
        </div>
      </div>

      {/* Active Goals Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <div className="flex justify-between items-center border-b pb-4 mb-4">
          <h3 className="text-2xl font-bold text-gray-700">Active Goals</h3>
          <div className="flex items-center space-x-4">
            <Link to="/new-goal" className="flex items-center text-blue-600 font-bold">
              <FiPlusCircle className="w-6 h-6 mr-2 text-blue-600" />
              New Goal
            </Link>
            <Link to="/download" className="flex items-center text-blue-600 font-bold">
              <FiDownload className="w-6 h-6 mr-2 text-blue-600" />
              Download
            </Link>
            <Link to="/last-month" className="text-blue-600 font-bold">
              Last Month
            </Link>
            <Link to="/this-month" className="text-blue-600 font-bold">
              This Month
            </Link>
            <Link to="/see-all" className="text-blue-600 font-bold">
              See All
            </Link>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2">Name</th>
                <th className="p-2">Start Date</th>
                <th className="p-2">AM</th>
                <th className="p-2">Status</th>
                <th className="p-2">Deadline</th>
                <th className="p-2">Chat</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-2 flex items-center">
                  <div className="flex items-center text-gray-800 font-bold">
                    <GiShoppingCart className="w-6 h-6 mr-2 text-blue-600" />
                    <span>Order Increase</span>
                  </div>
                </td>
                <td className="p-2">Mar 1st, 2024</td>
                <td className="p-2">Alfredo Torres</td>
                <td className="p-2">
                  <div className="relative w-32 h-8 bg-green-500 rounded-lg">
                    <span className="absolute top-0 left-2 text-white">Success</span>
                  </div>
                </td>
                <td className="p-2">0 days left</td>
                <td className="p-2 text-center">
                  <FiMessageCircle className="text-blue-600" size={20} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Charts Section */}
      <div className="flex justify-between items-start mb-8">
        {/* Donut Chart */}
        <div className="w-1/3 p-4">
          <h3 className="text-lg font-bold text-gray-700 mb-2">Overall Time Breakdown</h3>
          <div className="relative" style={{ height: '250px' }}>
            <Doughnut data={donutData} options={donutOptions} />
          </div>
        </div>

        {/* Daily Task Breakdown */}
        <div className="w-2/3 p-4">
          <h3 className="text-lg font-bold text-gray-700 mb-2">Daily Task Breakdown</h3>
          <BarChart
            width={500}
            height={250}
            data={barData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="pv" stackId="a" fill="#2563EB" />
            <Bar dataKey="uv" stackId="a" fill="#1D4ED8" />
            <Bar dataKey="amt" fill="#4B5563" />
          </BarChart>
        </div>
      </div>

      {/* Number of Orders */}
      <div className="w-full p-4">
        <h3 className="text-lg font-bold text-gray-700 mb-2">Number of Orders</h3>
        <BarChart
          width={750}
          height={250}
          data={ordersData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="pv" fill="#2563EB" />
          <Bar dataKey="uv" fill="#1D4ED8" />
          <Bar dataKey="amt" fill="#4B5563" />
        </BarChart>
      </div>
    </div>
  );
};

export default GoalDetails;
