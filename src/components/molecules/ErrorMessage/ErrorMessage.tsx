import React from 'react';
import './ErrorMessage.css';

interface ErrorMessageProps {
  message?: string;
  show?: boolean;
  className?: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ 
  message, 
  show = false,
  className 
}) => {
  if (!show || !message) return null;

  const errorClass = `error-message ${className || ''}`.trim();

  return (
    <span className={errorClass}>
      {message}
    </span>
  );
};

export default ErrorMessage;