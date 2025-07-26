import React from 'react';
import './Input.css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: 'text' | 'number' | 'email' | 'password';
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  error?: boolean;
  disabled?: boolean;
}

const Input: React.FC<InputProps> = ({ 
  type = 'text', 
  value, 
  onChange, 
  placeholder, 
  error = false,
  disabled = false,
  className,
  ...props 
}) => {
  const inputClass = `input ${error ? 'input--error' : ''} ${disabled ? 'input--disabled' : ''} ${className || ''}`.trim();

  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={inputClass}
      disabled={disabled}
      {...props}
    />
  );
};

export default Input;