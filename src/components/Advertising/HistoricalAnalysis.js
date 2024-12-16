import React, { useState } from "react";

const HistoricalAnalysis = () => {
  const [actions, setActions] = useState([
    {
      action: "Adjusted bid for keyword 'example'",
      date: "Oct 1, 2024",
      before: { ACoS: 30, ROAS: 4.5, totalSales: 300 },
      after: { ACoS: 25, ROAS: 5.0, totalSales: 350 },
    },
    {
      action: "Changed targeting to 'Broad'",
      date: "Oct 2, 2024",
      before: { ACoS: 28, ROAS: 4.8, totalSales: 400 },
      after: { ACoS: 20, ROAS: 6.0, totalSales: 500 },
    },
  ]);

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-semibold mb-4">Historical Action Impact Analysis</h2>
      <ul>
        {actions.map((action, index) => (
          <li key={index} className="mb-4 border-b pb-2">
            <p className="font-bold">{action.action}</p>
            <p className="text-gray-500">{action.date}</p>
            <div className="flex justify-between">
              <div>
                <p className="text-sm">Before:</p>
                <p>ACoS: {action.before.ACoS}%</p>
                <p>ROAS: {action.before.ROAS}x</p>
                <p>Total Sales: £{action.before.totalSales}</p>
              </div>
              <div>
                <p className="text-sm">After:</p>
                <p>ACoS: {action.after.ACoS}%</p>
                <p>ROAS: {action.after.ROAS}x</p>
                <p>Total Sales: £{action.after.totalSales}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HistoricalAnalysis;
