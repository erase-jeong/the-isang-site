import React from "react";

export default function Input({
  type,
  id,
  placeholder,
  onChange,
  value,
  maxLength,
}) {
  return (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      className={`${
        type === "date"
          ? "text-[0.8rem]"
          : "placeholder:text-[0.9rem] text-[0.9rem]"
      } ${
        id === "search" ? "pl-14 pr-6" : "px-6"
      } w-full h-[3rem] mt-2 py-3 box-border rounded-lg border-[1px] border-solid border-[#f5aa15] outline-none placeholder:text-[#F5AA15] font-normal text-[#494545]`}
      onChange={onChange}
      value={value}
      maxLength={maxLength}
    />
  );
}
