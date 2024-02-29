import React from "react";

const Input = (
  props: React.PropsWithChildren & {
    label: React.LabelHTMLAttributes<HTMLLabelElement>;
    input: React.InputHTMLAttributes<HTMLInputElement>;
  }
) => {
  const [value, setValue] = React.useState("");

  if (props.input.type === "checkbox") {
    return (
      <>
        <label
          {...props.label}
          style={{ display: "flex", gap: "10px", padding: "1.6rem 0" }}
        >
          <input
            type="checkbox"
            onChange={({ target }) => setValue(target.value)}
            id={props.input.id}
            name={props.input.name ?? props.input.id}
            placeholder={value ? "" : props.label.htmlFor}
            value={value}
            {...props.input}
          />
          {props.children}
        </label>
      </>
    );
  }

  return (
    <div className="position-relative">
      <label
        className={`position-absolute ${value ? "filled" : ""}`}
        htmlFor={props.label.htmlFor}
        {...props.label}
      >
        {props.label.htmlFor}
      </label>
      <input
        onChange={({ target }) => setValue(target.value)}
        type={props.input.type ?? "text"}
        id={props.input.id}
        name={props.input.name ?? props.input.id}
        placeholder={value ? "" : props.label.htmlFor}
        value={value}
        {...props.input}
      />
    </div>
  );
};

export default Input;
