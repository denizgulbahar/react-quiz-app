import React from 'react';
const LoadingIndicator: React.FC = () => {
  return (
    <div className="loading-container gap-3">
      <div className="spinner"></div>
      <p>Loading Questions...</p>
    </div>
  );
};

export default LoadingIndicator;