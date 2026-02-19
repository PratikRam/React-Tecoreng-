import { Input } from "@/components/ui/input";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

const Allforms = () => {
  const [fields, setFields] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [formData, setFormData] = useState({});
  const [submitbtn, setSubmitbtn] = useState("Submit");
  // sheet open state to control display after validation
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  useEffect(() => {
    const savedForm = JSON.parse(localStorage.getItem("myForm"));
    if (savedForm) {
      // savedForm is an object { title, description, fields }
      setTitle(savedForm.title || "");
      setDescription(savedForm.description || "");
      setFields(savedForm.fields || []);
    }
  }, []);

  const handleChange = (id, value) => {
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const validateForm = () => {
    for (const field of fields) {
      if (field.required) {
        const value = formData[field.id];

        // Check if value is empty
        if (!value || (Array.isArray(value) && value.length === 0)) {
          alert(`please enter ${field.label}`);
          return false;
        }
      }
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    console.log("Form Submitted:", formData);
    toast.success("Form has been submitted");
    setSubmitbtn("Submitted✅");
    setIsSheetOpen(true); // open sheet only after successful validation
  };

  console.log(formData);

  return (
    <form className="mt-6 p-6" onSubmit={handleSubmit}>
      {/* form title/description */}
      {title && <h2 className="text-2xl font-bold mb-2">{title}</h2>}
      {description && <p className="mb-4 text-gray-600">{description}</p>}

      {fields.map((field) => (
        <div key={field.id} className="mb-4 ">
          <div className="bg-gray-300 rounded p-3 mt-4">
            <label className="block mb-1">{field.label}</label>
            {/* TEXT */}
            {field.type === "text" && (
              <Input
                type={field.inputType || "text"}
                placeholder={field.placeholder}
                required={field.required}
                value={formData[field.id] || ""}
                onChange={(e) => handleChange(field.id, e.target.value)}
              />
            )}

            {/* DROPDOWN */}
            {field.type === "dropdown" && (
              <select
                className="border p-2 w-full"
                required={field.required}
                value={formData[field.id] || ""}
                onChange={(e) => handleChange(field.id, e.target.value)}
              >
                <option value="">Select</option>
                {field.options?.map((opt, idx) => (
                  <option key={idx} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            )}

            {/* RADIO */}
            {field.type === "radio" &&
              field.options?.map((opt, idx) => (
                <label key={idx} className="block">
                  <input
                    type="radio"
                    name={field.id}
                    value={opt}
                    checked={formData[field.id] === opt}
                    onChange={(e) => handleChange(field.id, e.target.value)}
                    required={field.required}
                  />
                  {opt}
                </label>
              ))}

            {/* CHECKBOX */}
            {field.type === "checkbox" &&
              field.options?.map((opt, idx) => (
                <label key={idx} className="block">
                  <input
                    type="checkbox"
                    value={opt}
                    checked={
                      Array.isArray(formData[field.id]) &&
                      formData[field.id].includes(opt)
                    }
                    onChange={(e) => {
                      const prev = formData[field.id] || [];
                      if (e.target.checked) {
                        handleChange(field.id, [...prev, opt]);
                      } else {
                        handleChange(
                          field.id,
                          prev.filter((v) => v !== opt),
                        );
                      }
                    }}
                  />
                  {opt}
                </label>
              ))}
          </div>
        </div>
      ))}

      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        {/* submit button outside SheetTrigger; sheet will open from handleSubmit */}
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          {submitbtn}
        </button>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>{title}</SheetTitle>
            <SheetDescription>{description}</SheetDescription>
          </SheetHeader>

          {/* display filled values */}
          <div className="mt-4 space-y-4">
            {fields.map((field) => {
              const value = formData[field.id];
              let display = "";
              if (Array.isArray(value)) display = value.join(", ");
              else display = value || "(no value)";

              return (
                <Card key={field.id} className="p-2">
                  <CardContent>
                    <CardTitle className="text-sm font-semibold">
                      {field.label}
                    </CardTitle>
                    <p className="text-gray-700 text-sm">{display}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <SheetFooter>
            <SheetClose>
              <button className="px-4 py-2 bg-gray-200 rounded">Close</button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </form>
  );
};

export default Allforms;
