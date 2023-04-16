import React from "react";

const Input = (props) => {
  const { type, placeholder, ...inputProps } = props;
  return (
    <div className="w-full">
      <label className="relative block">
        <input
          type={props.type}
          className="peer w-full border-2 rounded-lg border-primary px-4 pt-2 h-14 outline-none text-sm opacity-60"
          required
          {...inputProps}
        />
        <span className="absolute left-0 top-0 text-sm px-4 flex items-center h-full peer-focus:h-7 peer-focus:text-xs peer-valid:h-7 peer-valid:text-xs opacity-60 transition-all">
          {props.placeholder}
        </span>
      </label>
    </div>
  );
};

export default Input;
