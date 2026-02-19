import React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Label } from "./ui/label";

const AddFieldMenu = ({ addField }) => {
  return (
    <DropdownMenu>
      <div className="flex flex-col items-center ">
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="h-20 w-20 rounded-full text-2xl">
            +
          </Button>
        </DropdownMenuTrigger>
        <Label className="text-xl ">Click + to add your first field</Label>
      </div>
      <DropdownMenuContent>
        <DropdownMenuGroup className="w-60 flex flex-col gap-2">
          <DropdownMenuItem onClick={() => addField("text")}>
            Input Field
          </DropdownMenuItem>

          <DropdownMenuItem onClick={() => addField("dropdown")}>
            Dropdown
          </DropdownMenuItem>

          <DropdownMenuItem onClick={() => addField("radio")}>
            Radio Buttons
          </DropdownMenuItem>

          <DropdownMenuItem onClick={() => addField("checkbox")}>
            Checkbox
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AddFieldMenu;
