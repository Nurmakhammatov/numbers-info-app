import React from 'react';
import Spinner from '../../atoms/Spinner';
import './LoadingSpinner.css';

interface LoadingSpinnerProps {
  message?: string;
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  message = 'Загрузка...', 
  size = 'medium',
  className 
}) => {
  const spinnerClass = `loading-spinner ${className || ''}`.trim();

  return (
    <div className={spinnerClass}>
      <Spinner size={size} />
      <p className="loading-spinner__message">{message}</p>
    </div>
  );
};

export default LoadingSpinner;