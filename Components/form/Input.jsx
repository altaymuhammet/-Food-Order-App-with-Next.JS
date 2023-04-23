import React from "react";

const Input = (props) => {
  const { type, placeholder, touched, errorMessage, ...inputProps } = props;
  return (
    <div className="w-full">
      <label className="relative block">
        <input
          type={type}
          className={`peer w-full ${type !== "datetime-local" ? "pt-2" : "pt-0"} border-2 ${ touched && errorMessage ? "border-red-500" : "border-primary"}  rounded-lg px-4 h-14 outline-none text-sm opacity-60`}
          required
          {...inputProps}
          min={type === "number" ? 1 : null}
        />
        <span className="absolute left-0 top-0 text-sm px-4 flex items-center h-full peer-focus:h-7 peer-focus:text-xs peer-valid:h-7 peer-valid:text-xs opacity-60 transition-all">
          {placeholder}
        </span>
      </label>
      { touched && errorMessage && <p className="text-red-500 text-sm my-3 px-3 ">{errorMessage}</p>}
    </div>
  );
};

export default Input;
