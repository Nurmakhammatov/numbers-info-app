import React from 'react';
import './Checkbox.css';

interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  id: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  disabled?: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({ 
  id,
  checked, 
  onChange, 
  label,
  disabled = false,
  className,
  ...props 
}) => {
  const labelClass = `checkbox ${disabled ? 'checkbox--disabled' : ''} ${className || ''}`.trim();

  return (
    <label 
      htmlFor={id} 
      className={labelClass}
    >
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className="checkbox__input"
        {...props}
      />
      <span className="checkbox__label">{label}</span>
    </label>
  );
};

export default Checkbox;