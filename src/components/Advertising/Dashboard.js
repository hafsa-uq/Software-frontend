import React, { useState } from "react";
import { Line } from "react-chartjs-2";
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

const GoalCentricDashboard = () => {
  const [visibility, setVisibility] = useState({
    acos: true,
    roas: true,
    totalSales: true,
    impressions: true,
  });

  const [goals, setGoals] = useState({
    acos: 25,
    roas: 5,
    totalSales: 400,
    impressions: 1000,
  });

  const [currentValues, setCurrentValues] = useState({
    acos: 30,
    roas: 4.8,
    totalSales: 350,
    impressions: 800,
  });

  const toggleVisibility = (metric) => {
    setVisibility({ ...visibility, [metric]: !visibility[metric] });
  };

  const handleGoalChange = (metric, value) => {
    setGoals({ ...goals, [metric]: value });
  };

  const trendData = {
    labels: ["Sep 28", "Sep 29", "Sep 30", "Oct 1", "Oct 2", "Oct 3", "Oct 4"],
    datasets: [
      {
        label: "Total Sales",
        data: [300, 350, 370, 400, 390, 380, 350],
        borderColor: "rgba(75, 85, 255, 1)",
        backgroundColor: "rgba(75, 85, 255, 0.2)",
        hidden: !visibility.totalSales,
        yAxisID: "y1",
      },
      {
        label: "ACoS",
        data: [30, 28, 26, 25, 24, 29, 31],
        borderColor: "rgba(255, 165, 0, 1)",
        backgroundColor: "rgba(255, 165, 0, 0.2)",
        hidden: !visibility.acos,
        yAxisID: "y2",
      },
      {
        label: "ROAS",
        data: [5, 4.5, 4.8, 5.2, 5.1, 4.9, 4.7],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        hidden: !visibility.roas,
        yAxisID: "y3",
      },
      {
        label: "Impressions",
        data: [700, 800, 850, 900, 950, 1000, 800],
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        hidden: !visibility.impressions,
        yAxisID: "y4",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      y1: {
        type: "linear",
        display: true,
        position: "left",
        ticks: {
          callback: (value) => "£" + value,
        },
      },
      y2: {
        type: "linear",
        display: true,
        position: "right",
        grid: { drawOnChartArea: false },
        ticks: {
          callback: (value) => value + "%",
        },
      },
      y3: {
        type: "linear",
        display: true,
        position: "right",
        grid: { drawOnChartArea: false },
        ticks: {
          callback: (value) => value + "x",
        },
      },
      y4: {
        type: "linear",
        display: true,
        position: "right",
        grid: { drawOnChartArea: false },
        ticks: {
          callback: (value) => value + "K",
        },
      },
    },
  };

  const getStatus = (current, goal) => {
    const percentage = (current / goal) * 100;
    if (percentage < 50) return { status: "Needs Attention", color: "text-red-600" };
    if (percentage < 75) return { status: "On Track", color: "text-orange-600" };
    if (percentage < 100) return { status: "Very Good", color: "text-yellow-600" };
    return { status: "Exceeded", color: "text-green-600" };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Goals submitted:", goals);
  };

  return (
    <div className="p-6">
      <div className="grid grid-cols-4 gap-4 mb-6">
        {/* ACoS */}
        <div className={`p-4 border rounded-lg ${visibility.acos ? 'border-t-4 border-orange-500' : ''}`}>
          <div className="flex justify-between">
            <p className="text-gray-500">ACoS</p>
            <button onClick={() => toggleVisibility('acos')} className="text-gray-400">x</button>
          </div>
          <div className="text-2xl font-bold">{currentValues.acos}%</div>
          <div className="h-2 rounded bg-gray-300 overflow-hidden">
            <div
              className={`h-full rounded ${currentValues.acos > goals.acos ? "bg-red-500" : "bg-green-500"}`}
              style={{ width: `${Math.min((currentValues.acos / goals.acos) * 100, 100)}%` }}
            ></div>
          </div>
          <p className="text-sm">Goal: {goals.acos}%</p>
          <p className={`text-sm ${getStatus(currentValues.acos, goals.acos).color}`}>
            Status: {getStatus(currentValues.acos, goals.acos).status}
          </p>
        </div>

        {/* ROAS */}
        <div className={`p-4 border rounded-lg ${visibility.roas ? 'border-t-4 border-green-500' : ''}`}>
          <div className="flex justify-between">
            <p className="text-gray-500">ROAS</p>
            <button onClick={() => toggleVisibility('roas')} className="text-gray-400">x</button>
          </div>
          <div className="text-2xl font-bold">{currentValues.roas}x</div>
          <div className="h-2 rounded bg-gray-300 overflow-hidden">
            <div
              className={`h-full rounded ${currentValues.roas < goals.roas ? "bg-red-500" : "bg-green-500"}`}
              style={{ width: `${Math.min((currentValues.roas / goals.roas) * 100, 100)}%` }}
            ></div>
          </div>
          <p className="text-sm">Goal: {goals.roas}x</p>
          <p className={`text-sm ${getStatus(currentValues.roas, goals.roas).color}`}>
            Status: {getStatus(currentValues.roas, goals.roas).status}
          </p>
        </div>

        {/* Total Sales */}
        <div className={`p-4 border rounded-lg ${visibility.totalSales ? 'border-t-4 border-blue-500' : ''}`}>
          <div className="flex justify-between">
            <p className="text-gray-500">Total Sales</p>
            <button onClick={() => toggleVisibility('totalSales')} className="text-gray-400">x</button>
          </div>
          <div className="text-2xl font-bold">£{currentValues.totalSales}</div>
          <div className="h-2 rounded bg-gray-300 overflow-hidden">
            <div
              className={`h-full rounded ${currentValues.totalSales < goals.totalSales ? "bg-red-500" : "bg-green-500"}`}
              style={{ width: `${Math.min((currentValues.totalSales / goals.totalSales) * 100, 100)}%` }}
            ></div>
          </div>
          <p className="text-sm">Goal: £{goals.totalSales}</p>
          <p className={`text-sm ${getStatus(currentValues.totalSales, goals.totalSales).color}`}>
            Status: {getStatus(currentValues.totalSales, goals.totalSales).status}
          </p>
        </div>

        {/* Impressions */}
        <div className={`p-4 border rounded-lg ${visibility.impressions ? 'border-t-4 border-purple-500' : ''}`}>
          <div className="flex justify-between">
            <p className="text-gray-500">Impressions</p>
            <button onClick={() => toggleVisibility('impressions')} className="text-gray-400">x</button>
          </div>
          <div className="text-2xl font-bold">{currentValues.impressions}</div>
          <div className="h-2 rounded bg-gray-300 overflow-hidden">
            <div
              className={`h-full rounded ${currentValues.impressions >= goals.impressions ? "bg-green-500" : "bg-red-500"}`}
              style={{ width: `${Math.min((currentValues.impressions / goals.impressions) * 100, 100)}%` }}
            ></div>
          </div>
          <p className="text-sm">Goal: {goals.impressions}</p>
          <p className={`text-sm ${getStatus(currentValues.impressions, goals.impressions).color}`}>
            Status: {getStatus(currentValues.impressions, goals.impressions).status}
          </p>
        </div>
      </div>


      <div className="mb-6">
        <h2 className="text-xl font-bold mb-4">Trend Lines</h2>
        <Line data={trendData} options={options} />
      </div>

     {/* Custom Goal Setting */}
<div className="mb-6 p-4 border rounded-lg border-gray-300">
  <h2 className="text-xl font-bold mb-4">Set Goals</h2>
  <form onSubmit={handleSubmit}>
    <div className="grid grid-cols-2 gap-4">
      {Object.keys(goals).map((metric) => (
        <div key={metric}>
          <label className="block text-gray-700">{metric.toUpperCase()} Goal</label>
          <input
            type="number"
            value={goals[metric]}
            onChange={(e) => handleGoalChange(metric, Number(e.target.value))}
            className="mt-1 p-2 border rounded"
            placeholder="Set goal"
          />
        </div>
      ))}
    </div>
    <div className="flex justify-center mt-4">
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Submit
      </button>
    </div>
  </form>
</div>

    </div>
  );
};

export default GoalCentricDashboard;
