import React from 'react';
import RadioButton from '../../atoms/RadioButton';
import './RadioGroup.css';

interface RadioOption {
  value: string;
  label: string;
}

interface RadioGroupProps {
  label?: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  options?: RadioOption[];
  disabled?: boolean;
  className?: string;
}

const RadioGroup: React.FC<RadioGroupProps> = ({ 
  label, 
  name, 
  value, 
  onChange, 
  options = [],
  disabled = false,
  className,
  ...props 
}) => {
  const groupClass = `radio-group ${className || ''}`.trim();

  return (
    <div className={groupClass}>
      {label && (
        <label className="radio-group__label">
          {label}
        </label>
      )}
      <div className="radio-group__options">
        {options.map((option) => (
          <RadioButton
            key={option.value}
            id={`${name}-${option.value}`}
            name={name}
            value={option.value}
            checked={value === option.value}
            onChange={onChange}
            label={option.label}
            disabled={disabled}
            {...props}
          />
        ))}
      </div>
    </div>
  );
};

export default RadioGroup;