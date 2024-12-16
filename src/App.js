import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Login from './components/Login';
import Register from './components/Register';
import ForgotPassword from './components/ForgotPassword';
import Analytics from './pages/Analytics';
import Goal from './pages/Goal';
import GoalDetails from './components/GoalDetails';
import SalesAnalytics from './pages/SalesAnylitics';
import TrafficAndConversion from './pages/TrafficAndConversion';
import Inventory from './pages/Inventory';
import Advertising from './pages/Advertising';
import CustomerSupport from './pages/CustomerSupport';
import Advertising2 from './pages/Advertising2';
import Advertising3 from './pages/Advertising3';
import AMDashboard from './pages/AM/AMDashboard';
const AppContent = () => {
  const location = useLocation();

  const hideSidebarAndHeaderRoutes = ['/login', '/register', '/forgot-password'];

  const shouldHideSidebarAndHeader = hideSidebarAndHeaderRoutes.includes(location.pathname);

  return (
    <div className="flex">
      {!shouldHideSidebarAndHeader && <Sidebar />}
      <div className="flex-grow">
        {!shouldHideSidebarAndHeader && <Header />}
        <Routes>
          <Route path="/" element={<Dashboard clientId={1} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/Analytics" element={<Analytics />} />
          <Route path="/goal" element={<Goal />} />
          <Route path="/goal/goaldetails" element={<GoalDetails />} />
          <Route path="/sales" element={<SalesAnalytics />} />
          <Route path="/traffic" element={<TrafficAndConversion />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/Advertising" element={<Advertising />} />
          <Route path="/support" element={<CustomerSupport />} />
          <Route path="/adver" element={<Advertising2 />} />
          <Route path="/adver3" element={<Advertising3 />} />

          {/* Grouping AM routes under /AM */}
          <Route path="/AM" element={<AMDashboard />}>
            <Route path="sales" element={<SalesAnalytics />} />
            <Route path="advertising" element={<Advertising />} />
            <Route path="inventory" element={<Inventory />} />
            <Route path="reports" element={<div>Reports Component</div>} /> {/* Placeholder */}
            <Route path="goal" element={<Goal />} />
            <Route path="customer-support" element={<CustomerSupport />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
