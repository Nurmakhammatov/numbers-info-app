import "./ResultsTemplate.css";

const ResultsTemplate = ({ children }) => {
  return (
    <div className="results-template">
      <div className="results-template__content">{children}</div>
    </div>
  );
};

export default ResultsTemplate;
