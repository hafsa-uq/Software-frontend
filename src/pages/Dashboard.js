import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import RecentTask from '../components/RecentTask'
// import MessageCard from '../components/MessageCard'

const Dashboard = () => {
  const [activeMetric, setActiveMetric] = useState('Total Orders');
  const [timeFrame, setTimeFrame] = useState('This year');

  const data = {
    'Total Orders': {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [
        {
          label: 'Total Orders',
          data: [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160],
          fill: false,
          borderColor: 'rgba(75, 192, 192, 1)',
        },
      ],
    },
    'Total Revenue': {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [
        {
          label: 'Total Revenue',
          data: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60],
          fill: false,
          borderColor: 'rgba(255, 206, 86, 1)',
        },
      ],
    },
    'Average Ranking': {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [
        {
          label: 'Average Ranking',
          data: [600, 580, 570, 550, 530, 520, 510, 500, 490, 480, 470, 460],
          fill: false,
          borderColor: 'rgba(29, 78, 216, 1)', 
        },
      ],
    },
    'Category Market Share': {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [
        {
          label: 'Category Market Share',
          data: [25, 27, 26, 28, 30, 32, 31, 29, 28, 27, 29, 30],
          fill: false,
          borderColor: 'rgba(255, 99, 132, 1)',
        },
      ],
    },
  };

  return (
    <div className="flex"> 
      {/* <Sidebar /> */}
      <main className="flex-1 p-6 bg-gray-100 flex flex-col">
        {/* <Header /> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          <div 
            className={`bg-green-100 p-4 rounded shadow-md cursor-pointer ${activeMetric === 'Total Orders' ? 'ring-2 ring-green-500' : ''}`}
            onClick={() => setActiveMetric('Total Orders')}
          >
            <h2 className="text-xl font-bold">Total Orders</h2>
            <p className="text-3xl font-semibold">890</p>
            <p className="text-green-500">+18% +3.8k this week</p>
          </div>
          <div 
            className={`bg-yellow-100 p-4 rounded shadow-md cursor-pointer ${activeMetric === 'Total Revenue' ? 'ring-2 ring-yellow-500' : ''}`}
            onClick={() => setActiveMetric('Total Revenue')}
          >
            <h2 className="text-xl font-bold">Total Revenue</h2>
            <p className="text-3xl font-semibold">1.234</p>
            <p className="text-green-500">+18% +2.8k this week</p>
          </div>
          <div 
            className={`bg-blue-100 p-4 rounded shadow-md cursor-pointer ${activeMetric === 'Average Ranking' ? 'ring-2 ring-blue-500' : ''}`}
            onClick={() => setActiveMetric('Average Ranking')}
          >
            <h2 className="text-xl font-bold">Average Ranking</h2>
            <p className="text-3xl font-semibold">567</p>
            <p className="text-green-500">+18% +7.8k this week</p>
          </div>
          <div 
            className={`bg-red-100 p-4 rounded shadow-md cursor-pointer ${activeMetric === 'Category Market Share' ? 'ring-2 ring-red-500' : ''}`}
            onClick={() => setActiveMetric('Category Market Share')}
          >
            <h2 className="text-xl font-bold">Category Market Share</h2>
            <p className="text-3xl font-semibold">27%</p>
            <p className="text-green-500">+18% +1.2k this week</p>
          </div>
        </div>
        <div className="mt-6 flex-grow">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">{activeMetric} Stats</h2>
            <select 
              className="p-2 border rounded" 
              value={timeFrame} 
              onChange={(e) => setTimeFrame(e.target.value)}
            >
              <option>This year</option>
              <option>Last 6 months</option>
              <option>Last 3 months</option>
              <option>Last month</option>
              <option>This week</option>
            </select>
          </div>
          <div className="flex items-start mt-4"> {/* Flex container */}
            {/* Graph */}
            <div className="relative flex-grow" style={{ maxWidth: '60%' }}> {/* Adjust width as needed */}
              <Line 
                data={data[activeMetric]} 
                options={{ 
                  maintainAspectRatio: false,
                  responsive: true,
                  scales: {
                    x: {
                      ticks: {
                        maxRotation: 45,
                        minRotation: 45
                      }
                    },
                    y: {
                      ticks: {
                        stepSize: 50
                      }
                    }
                  }
                }} 
                style={{ width: '100%', height: '300px' }} 
              />
            </div>
            {/* Progress Bar */}
            <div className="ml-4 flex-none " style={{ width: '30%' }}> 
              <h2 className="text-xl font-bold">Progress</h2>
              <div className="mt-4">
                <div className="flex items-center mb-2">
                  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '25%' }}></div>
                  </div>
                  <span className="ml-2">25%</span>
                </div>
                <div className="flex items-center mb-2">
                  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '50%' }}></div>
                  </div>
                  <span className="ml-2">50%</span>
                </div>
                <div className="flex items-center mb-2">
                  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div className="bg-yellow-600 h-2.5 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                  <span className="ml-2">75%</span>
                </div>
                <div className="flex items-center mb-2">
                  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div className="bg-red-600 h-2.5 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                  <span className="ml-2">100%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* don't remove the communication part */}
        {/* <div className="bg-white p-4 rounded shadow-md mb-40 w-[35%] ml-auto ">
  <h2 className="text-xl font-bold">Recent Task</h2>
  <div className="mt-4">
    <div className="flex items-center mb-2">
      <img src="/images/face.jpeg" alt="User Avatar" className="w-10 h-10 rounded-full"/>
      <div className="ml-2">
        <p className="font-semibold">Alfredo</p>
        <p className="text-gray-500 text-sm">04:47 PM</p>
      </div>
      <p className="ml-auto text-gray-500 text-sm">Added 20+ keywords to the campaign</p>
    </div>
    <div className="flex items-center mb-2">
      <img src="/images/face.jpeg" alt="User Avatar" className="w-10 h-10 rounded-full"/>
      <div className="ml-2">
        <p className="font-semibold">Alfredo</p>
        <p className="text-gray-500 text-sm">25/07/2024</p>
      </div>
      <p className="ml-auto text-gray-500 text-sm">Image updated, and Brand Store is launched</p>
    </div>
    <div className="bg-gray-100 p-2 rounded mt-4">
      <div className="flex items-center mb-2">
        <img src="/images/face.jpeg" alt="User Avatar" className="w-10 h-10 rounded-full"/>
        <div className="ml-2">
          <p className="font-semibold">Alfredo Torres</p>
          <p className="text-gray-500 text-sm">We're seeing a 10% increase week after week. Goal will be reached by the end of August.</p>
        </div>
      </div>
      <button className="bg-blue-500 text-white p-2 rounded mt-2">Reply</button>
    </div>
  </div>
</div> */}



 <div className="bg-gray-100 flex items-center justify-end ">
 <RecentTask />
    </div>

      </main>
    </div>
  );
};

export default Dashboard;
