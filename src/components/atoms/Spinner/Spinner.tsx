import React from 'react';
import './Spinner.css';

interface SpinnerProps {
  size?: 'small' | 'medium' | 'large';
  color?: 'primary' | 'secondary';
  className?: string;
}

const Spinner: React.FC<SpinnerProps> = ({ 
  size = 'medium', 
  color = 'primary',
  className 
}) => {
  const spinnerClass = `spinner spinner--${size} spinner--${color} ${className || ''}`.trim();

  return (
    <div className={spinnerClass}></div>
  );
};

export default Spinner;