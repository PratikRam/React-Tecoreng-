import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const CheckboxCard = ({ activeField, setActiveField, onCancel, onSave }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Add Checkbox Field</CardTitle>
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

        {/* Checkbox Options */}
        <div>
          <p className="mb-2">Checkbox</p>

          {activeField.options?.map((opt, index) => (
            <div key={index} className="flex gap-2 mb-2">
              <Input
                value={opt}
                placeholder={`Option ${index + 1}`}
                onChange={(e) => {
                  const updated = [...activeField.options];
                  updated[index] = e.target.value;
                  setActiveField({ ...activeField, options: updated });
                }}
              />

              <Button
                type="button"
                variant="destructive"
                onClick={() => {
                  if (activeField.options.length > 2) {
                    const updated = activeField.options.filter(
                      (_, i) => i !== index,
                    );
                    setActiveField({ ...activeField, options: updated });
                  }
                }}
              >
                ✕
              </Button>
            </div>
          ))}

          <Button
            type="button"
            variant="outline"
            onClick={() => {
              const updated = activeField.options
                ? [...activeField.options, ""]
                : [""];
              setActiveField({ ...activeField, options: updated });
            }}
          >
            + Add Option
          </Button>
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

export default CheckboxCard;
