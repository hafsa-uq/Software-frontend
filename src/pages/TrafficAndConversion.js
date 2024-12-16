import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TrafficAndConversionDashboard from '../components/TrafficAndConversionDashboard';
import ProductTable from '../components/ProductTable';
import TargetSetting from '../components/TargetSetting';
import SearchTermPerformance from '../components/SearchTermPerformance';

const TrafficAndConversion = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());


  return (
    <div className="p-4">     
      <TrafficAndConversionDashboard startDate={startDate} endDate={endDate} />
      <ProductTable />
      <TargetSetting />
      <SearchTermPerformance />
    </div>
  );
};

export default TrafficAndConversion;
