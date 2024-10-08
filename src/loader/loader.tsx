import React from 'react';
import './loader.scss';

export const Loader: React.FC = () => {
  return (
    <div className="loader-container">
      <div className="loading-indicator"></div>
    </div>
  );
};
