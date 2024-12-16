import React, { useState } from "react";
import GoalCentricDashboard from "../components/Advertising/Dashboard"; 
import ActivityTracking from "../components/Advertising/ActivityTracking"; 
import TeamCollaboration from "../components/Advertising/TeamCollaboration"; 
import HistoricalAnalysis from "../components/Advertising/HistoricalAnalysis"; 
import CustomAlerts from "../components/Advertising/CustomAlerts"; 

const Advertising = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="flex flex-col p-6 bg-gray-100 min-h-screen"> {/* Change here */}
      <header className="mb-6">
        <h1 className="text-3xl font-bold mb-4">Advertising Management</h1>
        <nav className="flex space-x-4 border-b pb-2">
          {['dashboard', 'activity', 'collaboration', 'historical-analysis', 'custom-alerts'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-2 px-4 ${activeTab === tab ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-600 hover:text-blue-500'}`}
            >
              {tab.replace(/-/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase())}
            </button>
          ))}
        </nav>
      </header>

      <main className="flex-1">
        {activeTab === 'dashboard' && <GoalCentricDashboard />}
        {activeTab === 'activity' && <ActivityTracking />}
        {activeTab === 'collaboration' && <TeamCollaboration />}
        {activeTab === 'historical-analysis' && <HistoricalAnalysis />}
        {activeTab === 'custom-alerts' && <CustomAlerts />}
      </main>
    </div>
  );
};

export default Advertising;
