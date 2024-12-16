
import React from 'react';

const ProgressBar = ({ progress }) => {
  const clampedProgress = Math.max(0, Math.min(progress, 100)); 
  return (
    <div className="w-full bg-gray-200 rounded-full h-4">
      <div
        className="bg-blue-600 h-4 rounded-full"
        style={{ width: `${clampedProgress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
