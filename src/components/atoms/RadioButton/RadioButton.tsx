import React from 'react';
import './RadioButton.css';

interface RadioButtonProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  id: string;
  name: string;
  value: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  disabled?: boolean;
}

const RadioButton: React.FC<RadioButtonProps> = ({ 
  id,
  name, 
  value, 
  checked, 
  onChange, 
  label,
  disabled = false,
  className,
  ...props 
}) => {
  const labelClass = `radio-button ${disabled ? 'radio-button--disabled' : ''} ${className || ''}`.trim();

  return (
    <label 
      htmlFor={id} 
      className={labelClass}
    >
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className="radio-button__input"
        {...props}
      />
      <span className="radio-button__label">{label}</span>
    </label>
  );
};

export default RadioButton;