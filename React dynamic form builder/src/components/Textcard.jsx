import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const TextCard = ({ activeField, setActiveField, onCancel, onSave }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Add Text Field</CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col gap-4">
        {/* Label */}
        <div>
          <p>Label</p>
          <Input
            value={activeField.label || ""}
            onChange={(e) =>
              setActiveField({
                ...activeField,
                label: e.target.value,
              })
            }
          />
        </div>

        {/* Input Type */}
        <div>
          <p>Input Type</p>
          <select
            className="w-full border p-2 rounded"
            value={activeField.inputType || "text"}
            onChange={(e) =>
              setActiveField({
                ...activeField,
                inputType: e.target.value,
              })
            }
          >
            <option value="text">Text</option>
            <option value="number">Number</option>
            <option value="email">Email</option>
          </select>
        </div>

        {/* Placeholder */}
        <div>
          <p>Placeholder</p>
          <Input
            value={activeField.placeholder || ""}
            onChange={(e) =>
              setActiveField({
                ...activeField,
                placeholder: e.target.value,
              })
            }
          />
        </div>

        {/* Required */}
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={activeField.required || false}
            onChange={(e) =>
              setActiveField({
                ...activeField,
                required: e.target.checked,
              })
            }
          />
          <span>Required</span>
        </div>
      </CardContent>

      <CardFooter className="flex justify-end gap-3">
        <Button variant="outline" onClick={onCancel}>
          Cancel
        </Button>

        <Button onClick={onSave}>Save</Button>
      </CardFooter>
    </Card>
  );
};

export default TextCard;
