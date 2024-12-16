import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const lineData = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 500 },
  { name: 'Apr', value: 700 },
];

const LineChartPage = () => (
  <div className="min-h-screen bg-gray-100 p-6">
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold">Line Chart</h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={lineData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#0052CC" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  </div>
);

export default LineChartPage;
