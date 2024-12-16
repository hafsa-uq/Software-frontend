//this is without backend symbol

// import React, { useState } from 'react';
// import { Line } from 'react-chartjs-2';
// import { FaArrowUp } from 'react-icons/fa';
// import 'tailwindcss/tailwind.css';
// import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Tooltip, Legend } from 'chart.js';

// // Register components
// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   LineElement,
//   PointElement,
//   Tooltip,
//   Legend
// );

// const Dashboard = () => {
//   const [timeRange, setTimeRange] = useState('This Year');

//   const data = {
//     labels: [
//       'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
//     ],
//     datasets: [
//       {
//         label: 'Orders',
//         data: [30, 50, 70, 90, 110, 130, 150, 170, 190, 210, 230, 250],
//         fill: false,
//         backgroundColor: 'rgba(75,192,192,0.2)',
//         borderColor: 'rgba(75,192,192,1)',
//         tension: 0.1,
//       }
//     ]
//   };

//   const options = {
//     scales: {
//       y: {
//         beginAtZero: true,
//       }
//     }
//   };

//   return (
//     <div className="p-6 bg-white rounded-lg shadow-lg max-w-md mx-auto mt-7">
//       <div className="bg-green-100 p-4 rounded-lg mb-6 text-center">
//         <h2 className="text-lg font-bold">Total Orders</h2>
//         <p className="text-4xl font-extrabold">890</p>
//         <div className="space-x-2 text-green-500">
//           <FaArrowUp />
//           <span>18%</span>
//           <span className="text-gray-600">+3.8k this week</span>
//         </div>
//       </div>

//       {/* Flex container for dropdown and chart title */}
//       <div className="flex items-center justify-between mb-4">
//         <h3 className="text-lg font-semibold">Order Stats</h3>
//         <select
//           id="timeRange"
//           value={timeRange}
//           onChange={(e) => setTimeRange(e.target.value)}
//           className="bg-white border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
//         >
//           <option value="This Year">This Year</option>
//           <option value="Last 6 Months">Last 6 Months</option>
//           <option value="Last 3 Months">Last 3 Months</option>
//           <option value="This Month">This Month</option>
//           <option value="This Week">This Week</option>
//         </select>
//       </div>

//       <Line data={data} options={options} />

//     </div>
//   );
// };

// export default Dashboard;



//this is with backend symbol

import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { FaArrowUp } from 'react-icons/fa';
import 'tailwindcss/tailwind.css';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Tooltip, Legend } from 'chart.js';
import axios from 'axios';

// Register components
ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
  Legend
);

const Dashboard = ({ clientId }) => {
  const [timeRange, setTimeRange] = useState('This Year');
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch data from the backend
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/data/${clientId}`);
        const externalData = response.data.externalData;

        // Process externalData and format it for the chart
        setData({
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          datasets: [
            {
              label: 'Orders',
              data: externalData.orders, // Replace with actual data
              fill: false,
              backgroundColor: 'rgba(75,192,192,0.2)',
              borderColor: 'rgba(75,192,192,1)',
              tension: 0.1,
            }
          ]
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [clientId, timeRange]);

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      }
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg max-w-md mx-auto mt-7">
      <div className="bg-green-100 p-4 rounded-lg mb-6 text-center">
        <h2 className="text-lg font-bold">Total Orders</h2>
        <p className="text-4xl font-extrabold">890</p>
        <div className="space-x-2 text-green-500">
          <FaArrowUp />
          <span>18%</span>
          <span className="text-gray-600">+3.8k this week</span>
        </div>
      </div>

      {/* Flex container for dropdown and chart title */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Order Stats</h3>
        <select
          id="timeRange"
          value={timeRange}
          onChange={(e) => setTimeRange(e.target.value)}
          className="bg-white border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
        >
          <option value="This Year">This Year</option>
          <option value="Last 6 Months">Last 6 Months</option>
          <option value="Last 3 Months">Last 3 Months</option>
          <option value="This Month">This Month</option>
          <option value="This Week">This Week</option>
        </select>
      </div>

      {data && <Line data={data} options={options} />}
    </div>
  );
};

export default Dashboard;
