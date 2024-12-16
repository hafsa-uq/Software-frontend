import React, { useState } from "react";

const CustomAlerts = () => {
  const [alerts, setAlerts] = useState([]);
  const [metric, setMetric] = useState("ACoS");
  const [threshold, setThreshold] = useState("");

  const handleAddAlert = () => {
    if (threshold) {
      setAlerts([...alerts, { metric, threshold }]);
      setThreshold("");
    }
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-semibold mb-4">Custom Alerts and Notifications</h2>

      <div className="mb-6">
        <label className="block text-gray-700">Select Metric</label>
        <select value={metric} onChange={(e) => setMetric(e.target.value)} className="mt-1 p-2 border border-gray-300 rounded">
          <option value="ACoS">ACoS</option>
          <option value="ROAS">ROAS</option>
          <option value="Total Sales">Total Sales</option>
          <option value="Impressions">Impressions</option>
        </select>
      </div>

      <div className="mb-6">
        <label className="block text-gray-700">Set Threshold</label>
        <input
          type="number"
          value={threshold}
          onChange={(e) => setThreshold(e.target.value)}
          placeholder="Set alert threshold"
          className="mt-1 p-2 border border-gray-300 rounded"
        />
      </div>

      <button onClick={handleAddAlert} className="px-4 py-2 bg-blue-500 text-white rounded">Add Alert</button>

      <h3 className="text-xl mt-6 mb-2">Current Alerts</h3>
      <ul className="list-disc pl-5">
        {alerts.map((alert, index) => (
          <li key={index} className="text-gray-700">
            {alert.metric} threshold set at {alert.threshold}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomAlerts;
