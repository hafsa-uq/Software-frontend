import React from 'react';
import { Outlet } from 'react-router-dom';

const AMDashboard = () => {
  return (
    <div>
      <h1>Account Manager Dashboard</h1>
      <Outlet />
    </div>
  );
};

export default AMDashboard;
