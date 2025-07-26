import React, { useState } from 'react';
import Button from '../../atoms/Button';
import Checkbox from '../../atoms/Checkbox';
import RadioGroup from '../../molecules/RadioGroup';
import InputField from '../../molecules/InputField';
import { FormData } from '../../../types';
import './NumberFormOrganism.css';

interface NumberFormOrganismProps {
  onSubmit: (data: FormData) => void;
}

interface FormErrors {
  number?: string;
}

const NumberFormOrganism: React.FC<NumberFormOrganismProps> = ({ onSubmit }) => {
  const [selectedType, setSelectedType] = useState<FormData['type']>('trivia');
  const [useRandomNumber, setUseRandomNumber] = useState<boolean>(false);
  const [number, setNumber] = useState<string>('');
  const [errors, setErrors] = useState<FormErrors>({});

  const typeOptions = [
    { value: 'trivia', label: 'Trivia (общие факты)' },
    { value: 'math', label: 'Math (математические свойства)' },
    { value: 'date', label: 'Date (события в истории)' },
    { value: 'year', label: 'Year (события определенного года)' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors: FormErrors = {};
    
    if (!useRandomNumber && !number.trim()) {
      newErrors.number = 'Необходимо ввести число или выбрать случайное число';
    } else if (!useRandomNumber && isNaN(Number(number))) {
      newErrors.number = 'Число должно быть в виде цифры';
    } else if (!useRandomNumber && (parseInt(number) < 0 || parseInt(number) > 9999)) {
      newErrors.number = 'Число должно быть от 0 до 9999';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    
    const formData: FormData = {
      type: selectedType,
      number: useRandomNumber ? 'random' as const : parseInt(number),
      useRandomNumber
    };

    onSubmit(formData);
  };

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(e.target.value);
    if (errors.number) {
      setErrors({ ...errors, number: '' });
    }
  };

  const handleRandomToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUseRandomNumber(e.target.checked);
    if (e.target.checked && errors.number) {
      setErrors({ ...errors, number: '' });
    }
  };

  const handleTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedType(e.target.value as FormData['type']);
  };

  return (
    <form onSubmit={handleSubmit} className="number-form-organism">
      <RadioGroup
        label="Выберите тип информации:"
        name="infoType"
        value={selectedType}
        onChange={handleTypeChange}
        options={typeOptions}
      />

      <Checkbox
        id="randomNumber"
        checked={useRandomNumber}
        onChange={handleRandomToggle}
        label="Использовать случайное число"
      />

      {!useRandomNumber && (
        <InputField
          label="Введите число (0-9999):"
          id="numberInput"
          type="text"
          value={number}
          onChange={handleNumberChange}
          placeholder="Например: 42"
          error={errors.number}
          errorMessage={errors.number}
        />
      )}

      <div className="number-form-organism__submit">
        <Button type="submit" variant="primary">
          Получить информацию
        </Button>
      </div>
    </form>
  );
};

export default NumberFormOrganism;