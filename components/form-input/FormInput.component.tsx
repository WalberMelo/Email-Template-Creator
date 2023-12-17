import React from "react";

interface FormFieldProps {
  label: string;
  type: string;
  name: string;
  value?: string;
  placeholder?: string;
  required: boolean;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

export const FormInput = ({
  value,
  label,
  type,
  name,
  placeholder,
  required,
  onChange,
}: FormFieldProps) => {
  return (
    <div className="mt-4">
      <label htmlFor={name} className="text-gray-700 text-sm font-medium">
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          data-testid="text-area"
          id={name}
          name={name}
          className="w-full p-2 border rounded-md focus:border-indigo-500"
          required={required}
          placeholder={placeholder}
          onChange={onChange}
        />
      ) : (
        <input
          data-testid="form-input"
          type={type}
          id={name}
          name={name}
          value={value}
          placeholder={placeholder}
          className="w-full p-2 border rounded-md focus:border-indigo-500"
          required={required}
          onChange={onChange}
        />
      )}
    </div>
  );
};
