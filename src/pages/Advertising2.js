import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "tailwindcss/tailwind.css";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const [visibility, setVisibility] = useState({
    sales: true,
    clicks: true,
    acos: true,
    impressions: true,
  });

  const toggleVisibility = (metric) => {
    setVisibility({ ...visibility, [metric]: !visibility[metric] });
  };

  const data = {
    labels: ["Sep 28", "Sep 29", "Sep 30", "Oct 1", "Oct 2", "Oct 3", "Oct 4"],
    datasets: [
      {
        label: "Attributed Sales",
        data: [500, 550, 580, 620, 600, 570, 430],
        borderColor: "rgba(75, 85, 255, 1)", 
        backgroundColor: "rgba(75, 85, 255, 0.2)",
        hidden: !visibility.sales,
        yAxisID: "y1",
      },
      {
        label: "Clicks",
        data: [3000, 3500, 3700, 4000, 4100, 3950, 2760],
        borderColor: "rgba(255, 99, 132, 1)", 
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        hidden: !visibility.clicks,
        yAxisID: "y2",
      },
      {
        label: "ACoS",
        data: [20, 22, 25, 27, 30, 32, 27],
        borderColor: "rgba(255, 165, 0, 1)", 
        backgroundColor: "rgba(255, 165, 0, 0.2)",
        hidden: !visibility.acos,
        yAxisID: "y3",
      },
      {
        label: "Impressions",
        data: [15000, 18000, 20000, 22000, 26000, 29000, 34486],
        borderColor: "rgba(75, 192, 192, 1)", // green
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        hidden: !visibility.impressions,
        yAxisID: "y4",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, 
      },
    },
    scales: {
      y1: {
        type: "linear",
        display: true,
        position: "left",
        ticks: {
          callback: function (value) {
            return "£" + value;
          },
        },
      },
      y2: {
        type: "linear",
        display: true,
        position: "right",
        grid: {
          drawOnChartArea: false,
        },
        ticks: {
          callback: function (value) {
            return value + "K";
          },
        },
      },
      y3: {
        type: "linear",
        display: true,
        position: "right",
        grid: {
          drawOnChartArea: false,
        },
        ticks: {
          callback: function (value) {
            return value + "%";
          },
        },
      },
      y4: {
        type: "linear",
        display: true,
        position: "right",
        grid: {
          drawOnChartArea: false,
        },
        ticks: {
          callback: function (value) {
            return value + "K";
          },
        },
      },
    },
  };

  return (
    <div className="p-6">
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className={`p-4 border rounded-lg ${visibility.sales ? 'border-t-4 border-indigo-500' : ''}`}>
          <div className="flex justify-between">
            <p className="text-gray-500">Attributed Sales</p>
            <button onClick={() => toggleVisibility('sales')} className="text-gray-400">x</button>
          </div>
          <div className="text-2xl font-bold">£429.76</div>
          <div className="flex items-center text-red-500">
            <FaArrowDown className="mr-2" />
            -17.57%
          </div>
        </div>

        {/* Clicks */}
        <div className={`p-4 border rounded-lg ${visibility.clicks ? 'border-t-4 border-pink-400' : ''}`}>
          <div className="flex justify-between">
            <p className="text-gray-500">Clicks</p>
            <button onClick={() => toggleVisibility('clicks')} className="text-gray-400">x</button>
          </div>
          <div className="text-2xl font-bold">276</div>
          <div className="flex items-center text-red-500">
            <FaArrowDown className="mr-2" />
            -6.76%
          </div>
        </div>

        {/* ACoS */}
        <div className={`p-4 border rounded-lg ${visibility.acos ? 'border-t-4 border-orange-500' : ''}`}>
          <div className="flex justify-between">
            <p className="text-gray-500">ACoS</p>
            <button onClick={() => toggleVisibility('acos')} className="text-gray-400">x</button>
          </div>
          <div className="text-2xl font-bold">27.13%</div>
          <div className="flex items-center text-orange-500">
            <FaArrowUp className="mr-2" />
            +11.86%
          </div>
        </div>

        {/* Impressions */}
        <div className={`p-4 border rounded-lg ${visibility.impressions ? 'border-t-4 border-green-500' : ''}`}>
          <div className="flex justify-between">
            <p className="text-gray-500">Impressions</p>
            <button onClick={() => toggleVisibility('impressions')} className="text-gray-400">x</button>
          </div>
          <div className="text-2xl font-bold">34,486</div>
          <div className="flex items-center text-green-500">
            <FaArrowUp className="mr-2" />
            +31.3%
          </div>
        </div>
      </div>

      {/* Line Chart */}
      <div>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default Dashboard;
