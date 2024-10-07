import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center py-6">
      <div className="w-10 h-10 border-4 border-dashed rounded-full animate-spin border-yellow-500"></div>
    </div>
  );
};

export default LoadingSpinner;