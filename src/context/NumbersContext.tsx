import React, { createContext, useContext, useState, ReactNode } from 'react';
import { FormData, NumbersContextType } from '../types';

const NumbersContext = createContext<NumbersContextType | undefined>(undefined);

export const useNumbers = (): NumbersContextType => {
  const context = useContext(NumbersContext);
  if (!context) {
    throw new Error('useNumbers must be used within a NumbersProvider');
  }
  return context;
};

interface NumbersProviderProps {
  children: ReactNode;
}

export const NumbersProvider: React.FC<NumbersProviderProps> = ({ children }) => {
  const [formData, setFormData] = useState<FormData | null>(null);
  const [results, setResults] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const clearResults = (): void => {
    setResults(null);
    setError(null);
    setIsLoading(false);
  };

  const reset = (): void => {
    setFormData(null);
    setResults(null);
    setIsLoading(false);
    setError(null);
  };

  const value: NumbersContextType = {
    formData,
    results,
    isLoading,
    error,
    setFormData,
    setResults,
    setIsLoading,
    setError,
    clearResults,
    reset
  };

  return (
    <NumbersContext.Provider value={value}>
      {children}
    </NumbersContext.Provider>
  );
};