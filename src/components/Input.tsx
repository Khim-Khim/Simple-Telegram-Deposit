import { ChangeEventHandler } from "react";

type TPropsInput = {
  label: string;
  type?: string;
  placeholder?: string;
  value?: string | number;
  maxLength?: number;
  step?: string;
  min?: string;
  onChange?: ChangeEventHandler | any;
};

export default function Input({
  label,
  maxLength,
  min,
  placeholder,
  step,
  type = "text",
  value,
  onChange,
}: TPropsInput) {
  return (
    <div className="mb-6 flex flex-col">
      <label className="mb-3 text-sm lg:text-base font-bold">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="py-1 px-4 lg:py-2 lg:px-5 rounded"
        maxLength={maxLength}
        min={min}
        step={step}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
