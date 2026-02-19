import React from "react";
import { Input } from "@/components/ui/input";

const FieldRenderer = ({ fields, onpublish }) => {
  return (
    <div className="mt-6">
      {fields.map((field) => (
        <div key={field.id} className="mb-4">
          <label className="block mb-1">{field.label}</label>

          {field.type === "text" && (
            <Input
              type={field.inputType || "text"}
              placeholder={field.placeholder}
              required={field.required}
            />
          )}

          {field.type === "dropdown" && (
            <select className="border p-2 w-full" required={field.required}>
              {(field.options || []).map((opt, idx) => (
                <option key={idx} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          )}

          {field.type === "radio" &&
            field.options?.map((opt, idx) => (
              <label key={idx} className="block">
                <input
                  type="radio"
                  name={field.id}
                  value={opt}
                  required={field.required}
                />
                {opt}
              </label>
            ))}

          {field.type === "checkbox" &&
            field.options?.map((opt, idx) => (
              <label key={idx} className="block">
                <input type="checkbox" value={opt} />
                {opt}
              </label>
            ))}
        </div>
      ))}

      {fields.length > 0 && (
        <button
          type="button"
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={onpublish}
        >
          Save form
        </button>
      )}
    </div>
  );
};

export default FieldRenderer;
