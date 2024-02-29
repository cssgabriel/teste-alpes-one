import React from "react";

const Input = (
  props: React.PropsWithChildren &
    React.InputHTMLAttributes<HTMLInputElement> &
    React.LabelHTMLAttributes<HTMLLabelElement>
) => {
  const [value, setValue] = React.useState("");
  return (
    <div>
      <label htmlFor={props.htmlFor}>{props.htmlFor}</label>
      <input
        onChange={({ target }) => setValue(target.value)}
        type={props.type ?? "text"}
        id={props.id}
        name={props.name ?? props.id}
        value={value}
        {...props}
      />
    </div>
  );
};

export default Input;
