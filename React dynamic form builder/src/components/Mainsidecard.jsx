import TextCard from "./TextCard";
import DropdownCard from "./DropdownCard";
import RadioCard from "./RadioCard";
import CheckboxCard from "./CheckboxCard";

const Mainsidecard = ({
  type,
  activeField,
  setActiveField,
  onCancel,
  onSave,
}) => {
  if (type === "text")
    return (
      <TextCard
        activeField={activeField}
        setActiveField={setActiveField}
        onCancel={onCancel}
        onSave={onSave}
      />
    );
  if (type === "dropdown")
    return (
      <DropdownCard
        activeField={activeField}
        setActiveField={setActiveField}
        onCancel={onCancel}
        onSave={onSave}
      />
    );
  if (type === "radio")
    return (
      <RadioCard
        activeField={activeField}
        setActiveField={setActiveField}
        onCancel={onCancel}
        onSave={onSave}
      />
    );
  if (type === "checkbox")
    return (
      <CheckboxCard
        activeField={activeField}
        setActiveField={setActiveField}
        onCancel={onCancel}
        onSave={onSave}
      />
    );

  return null;
};

export default Mainsidecard;
