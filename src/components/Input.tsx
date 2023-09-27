import React, { useRef } from "react";
import { Textarea as ChadTextarea, TextareaProps } from "./ui/textarea";
import { Copy, Trash } from "lucide-react";

type Props = {
  id: string;
  label: string;
  placeholder: string;
  copy?: boolean;
  deleteAll?: boolean;
} & TextareaProps;

export const Textarea = ({
  id,
  label,
  placeholder,
  copy,
  deleteAll,
  ...rest
}: Props) => {
  const textAreaRef = useRef(null);

  const copiar = () => {
    textAreaRef.current.select();
    document.execCommand("copy");
    textAreaRef.current.target.focus();
  };

  const deletarTudo = () => {
    textAreaRef.current.value = "";
  };

  return (
    <div className="relative">
      <label
        className="cursor-pointer mb-2 text-base font-bold block"
        htmlFor={id}
      >
        {label}
      </label>

      <ChadTextarea
        id={id}
        rows={10}
        placeholder={placeholder}
        ref={textAreaRef}
        {...rest}
      />

      <div className="absolute top-0 right-0 mt-9 mr-3">
        {copy && <Copy onClick={copiar} className="cursor-pointer w-6 h-6" />}
      </div>

      <div className="absolute bottom-0 right-0 mb-3 mr-3">
        {deleteAll && (
          <Trash onClick={deletarTudo} className="cursor-pointer  w-6 h-6" />
        )}
      </div>
    </div>
  );
};
