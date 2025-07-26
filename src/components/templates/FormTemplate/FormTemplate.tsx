import "./FormTemplate.css";

const FormTemplate = ({ title, children }) => {
  return (
    <div className="form-template">
      <div className="form-template__container">
        {title && <h1 className="form-template__title">{title}</h1>}
        <div className="form-template__content">{children}</div>
      </div>
    </div>
  );
};

export default FormTemplate;
