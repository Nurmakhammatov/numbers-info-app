import { useState, useEffect } from "react";
import Button from "../../atoms/Button";
import LoadingSpinner from "../../molecules/LoadingSpinner";
import "./ResultsDisplayOrganism.css";

const ResultsDisplayOrganism = ({ formData, onBack }) => {
  const [numberFact, setNumberFact] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [actualNumber, setActualNumber] = useState(null);

  useEffect(() => {
    fetchNumberFact();
  }, [formData]);

  const fetchNumberFact = async () => {
    setLoading(true);
    setError("");

    try {
      const number = formData.useRandomNumber ? "random" : formData.number;
      const url = `http://numbersapi.com/${number}/${formData.type}`;

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Не удалось получить данные с сервера");
      }

      const text = await response.text();
      setNumberFact(text);

      if (formData.useRandomNumber) {
        const numberMatch = text.match(/^(\d+)/);
        if (numberMatch) {
          setActualNumber(parseInt(numberMatch[1]));
        }
      } else {
        setActualNumber(formData.number);
      }
    } catch (err) {
      setError(err.message || "Произошла ошибка при получении данных");
    } finally {
      setLoading(false);
    }
  };

  const getTypeDisplayName = () => {
    switch (formData.type) {
      case "trivia":
        return "Общие факты";
      case "math":
        return "Математические свойства";
      case "date":
        return "События в истории";
      case "year":
        return "События определенного года";
      default:
        return formData.type;
    }
  };

  return (
    <div className="results-display-organism">
      <div className="results-display-organism__header">
        <h1>Результаты поиска</h1>
        <Button variant="secondary" onClick={onBack}>
          ← Назад к форме
        </Button>
      </div>

      <div className="results-display-organism__summary">
        <h2>Ваш запрос:</h2>
        <div className="summary-details">
          <p>
            <strong>Тип информации:</strong> {getTypeDisplayName()}
          </p>
          <p>
            <strong>Число:</strong>{" "}
            {formData.useRandomNumber
              ? `Случайное число ${actualNumber ? `(${actualNumber})` : ""}`
              : formData.number}
          </p>
        </div>
      </div>

      <div className="results-display-organism__content">
        {loading && <LoadingSpinner message="Загружаем интересные факты..." />}

        {error && (
          <div className="error-container">
            <h3>Ошибка</h3>
            <p>{error}</p>
            <Button variant="error" onClick={fetchNumberFact}>
              Попробовать снова
            </Button>
          </div>
        )}

        {!loading && !error && numberFact && (
          <div className="fact-container">
            <h3>Интересный факт о числе {actualNumber}:</h3>
            <div className="fact-text">{numberFact}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResultsDisplayOrganism;
