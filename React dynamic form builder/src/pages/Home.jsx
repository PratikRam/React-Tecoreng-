import React, { useState } from "react";
import AddFieldMenu from "../components/AddFieldMenu";
import FieldRenderer from "../components/FieldRenderer";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import Mainsidecard from "@/components/Mainsidecard";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [fields, setFields] = useState([]);
  const [activeField, setActiveField] = useState(null);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const navigate = useNavigate();

  React.useEffect(() => {
    const saved = localStorage.getItem("myForm");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setTitle(parsed.title || "");
        setDescription(parsed.description || "");
        setFields(parsed.fields || []);
      } catch (e) {
        console.warn("failed to parse saved form", e);
      }
    }
  }, []);

  React.useEffect(() => {
    const data = { title, description, fields };
    localStorage.setItem("myForm", JSON.stringify(data));
  }, [title, description, fields]);

  
  //  When user selects Text / Dropdown / etc
  const handleAddField = (type) => {
    let newField;

    console.log(type);

    if (type === "text") {
      newField = {
        id: Date.now(),

        type: "text",
        label: "Text",
        placeholder: "",
        required: false,
      };
    }

    if (type === "dropdown") {
      newField = {
        id: Date.now(),
        type: "dropdown",
        label: "Dropdown",
        options: ["", ""],
        required: false,
      };
    }

    if (type === "radio") {
      newField = {
        id: Date.now(),

        type: "radio",
        label: "Radio",
        options: ["", ""],
        required: false,
      };
    }

    if (type === "checkbox") {
      newField = {
        id: Date.now(),

        type: "checkbox",
        label: "Checkbox",
        options: ["", ""],
        required: false,
      };
    }

    setActiveField(newField);
    setIsSheetOpen(true);
    console.log(activeField);
  };

  console.log(fields);

  const handlePublish = () => {
    const finalForm = {
      title,
      description,
      fields,
    };
    console.log(finalForm);

    localStorage.setItem("myForm", JSON.stringify(finalForm));
    navigate("/allforms");
  };

  // SAVE
  const handleSave = () => {
    // Validate title
    if (title.trim() === "") {
      alert("please enter a Title");
      return;
    }
    // Validate label
    if (activeField.label.trim() === "") {
      alert("please enter a Label");
      return;
    }
    // Validate options for dropdown, radio, checkbox
    const type = activeField.type;

    if (type === "dropdown" || type === "radio" || type === "checkbox") {
      for (let option of activeField.options) {
        if (option.trim() === "") {
          alert("Please fill all options");
          return;
        }
      }
    }

    setIsSheetOpen(false);
    setFields([...fields, activeField]);
  };

  // CANCEL
  function handleCancel() {
    setIsSheetOpen(false);
  }

  return (
    <div className="flex h-screen">
      {/* LEFT SIDE PREVIEW */}
      <div className="w-1/2 p-10 border-r">
        <h2 className="text-2xl font-medium mb-5">Dynamic Form builder 📃</h2>
        <div className="flex flex-col gap-3 mb-6">
          <Input
            placeholder="Form Title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <Input
            placeholder="Description"
            className="h-20"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </div>

        <FieldRenderer
          fields={fields}
          setFields={setFields}
          title={title}
          description={description}
          onpublish={handlePublish}

          // formData={formData}
          // setFormData={setFormData}
        />
      </div>

      {/* CENTER + BUTTON */}
      <div className="w-1/2 flex items-center justify-center">
        <AddFieldMenu addField={handleAddField} />
      </div>

      {/* RIGHT SIDE SHEET */}
      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Add {activeField?.type} Field</SheetTitle>
          </SheetHeader>

          {activeField && (
            <Mainsidecard
              type={activeField.type}
              activeField={activeField}
              setActiveField={setActiveField}
              onCancel={handleCancel}
              onSave={handleSave}
            />
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Home;
