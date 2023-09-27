import React from "react";
import { Checkbox as ChadCheckbox } from "./ui/checkbox";

type Props = {
  id: string;
  label: string;
};

export const Checkbox = ({ id, label }: Props) => {
  // const checkboxRef = useRef(null);

  return (
    <div className="flex items-center">
      <ChadCheckbox id={id} />
      <label htmlFor={id} className="text-sm font-bold ml-2 cursor-pointer">
        {label}
      </label>
    </div>
  );
};
