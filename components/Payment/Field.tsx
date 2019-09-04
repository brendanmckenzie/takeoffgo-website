import React, { ChangeEventHandler } from "react";

type FieldProps = {
  autoFocus?: boolean;
  disabled?: boolean;
  label: string;
  name: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  type?: string;
  value: string;
};

const Field: React.FC<FieldProps> = ({
  autoFocus,
  disabled,
  label,
  name,
  onChange,
  placeholder,
  type,
  value
}) => (
  <div className="field">
    <label className="label" htmlFor={name}>
      {label}
    </label>
    <div className="control">
      <input
        id={name}
        className="input"
        type={type || "text"}
        autoFocus={autoFocus}
        placeholder={placeholder}
        value={value || ""}
        onChange={onChange}
        disabled={disabled}
      />
    </div>
  </div>
);

export default Field;
