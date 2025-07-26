import React from 'react';
import Input from '../../atoms/Input';
import ErrorMessage from '../ErrorMessage';
import './InputField.css';

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  id: string;
  error?: boolean | string;
  errorMessage?: string;
  type?: 'text' | 'number' | 'email' | 'password';
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({ 
  label, 
  id,
  error, 
  errorMessage,
  className,
  ...inputProps 
}) => {
  const fieldClass = `input-field ${className || ''}`.trim();

  return (
    <div className={fieldClass}>
      {label && (
        <label htmlFor={id} className="input-field__label">
          {label}
        </label>
      )}
      <Input
        id={id}
        error={!!error}
        {...inputProps}
      />
      <ErrorMessage message={errorMessage} show={!!error} />
    </div>
  );
};

export default InputField;