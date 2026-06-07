import React from 'react';
import './LoadingSpinner.css';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  overlay?: boolean;
  text?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  overlay = false,
  text,
}) => {
  const spinner = (
    <div className={`spinner-wrap ${overlay ? 'spinner-overlay' : ''}`}>
      <div className={`spinner spinner-${size}`}>
        <div className="spinner-ring" />
        <div className="spinner-ring spinner-ring-2" />
      </div>
      {text && <p className="spinner-text">{text}</p>}
    </div>
  );

  return spinner;
};

export default LoadingSpinner;
