import { useNavigate } from "react-router-dom";
import FormTemplate from "../../templates/FormTemplate";
import NumberFormOrganism from "../../organisms/NumberFormOrganism";
import { useNumbers } from "../../../context/NumbersContext";

const HomePage = () => {
  const navigate = useNavigate();
  const { setFormData } = useNumbers();

  const handleSubmit = (data) => {
    setFormData(data);
    navigate("/results");
  };

  return (
    <FormTemplate title="Интересные факты о числах">
      <NumberFormOrganism onSubmit={handleSubmit} />
    </FormTemplate>
  );
};

export default HomePage;
