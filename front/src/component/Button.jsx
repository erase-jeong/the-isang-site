import React from "react";
import { FcGoogle } from "react-icons/fc";

export default function Button({
  type,
  onClick,
  buttonText,
  disabled,
  dataComeIn,
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${
        (buttonText === "로그인" || buttonText === "회원가입") && dataComeIn
          ? "h-[3.75rem] bg-[#F5AA15] rounded-lg text-[1.125rem] text-white font-bold"
          : (buttonText === "로그인" || buttonText === "회원가입") &&
            !dataComeIn
          ? "h-[3.75rem] bg-[#d0d0d0] rounded-lg text-[1.125rem] text-white font-bold"
          : buttonText === "구글"
          ? "h-[3.75rem] rounded-lg border-[1px] border-solid border-[#ccc] text-[1.125rem] font-bold"
          : ""
      } w-full p-3 box-border text-center relative transition-all duration-700`}
    >
      {buttonText === "구글" ? (
        <FcGoogle className="text-[2.4rem] absolute left-4 top-[20%]" />
      ) : (
        <></>
      )}
      {buttonText}
    </button>
  );
}
