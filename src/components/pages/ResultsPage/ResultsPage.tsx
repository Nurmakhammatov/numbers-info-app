import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ResultsTemplate from "../../templates/ResultsTemplate";
import ResultsDisplayOrganism from "../../organisms/ResultsDisplayOrganism";
import { useNumbers } from "../../../context/NumbersContext";

const ResultsPage = () => {
  const navigate = useNavigate();
  const { formData } = useNumbers();

  useEffect(() => {
    if (!formData) {
      navigate("/");
    }
  }, [formData, navigate]);

  const handleBack = () => {
    navigate("/");
  };

  if (!formData) {
    return null;
  }

  return (
    <ResultsTemplate>
      <ResultsDisplayOrganism formData={formData} onBack={handleBack} />
    </ResultsTemplate>
  );
};

export default ResultsPage;
