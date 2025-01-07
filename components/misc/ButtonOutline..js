import React from "react";

const ButtonOutline = ({ children }) => {
  return (
    <button className="font-medium tracking-wide py-2 px-5 sm:px-8 border border-white-500 text-white-500 bg-yellow-500 outline-none rounded-l-full rounded-r-full capitalize hover:bg-[#000] hover:text-white-500 transition-all hover:shadow-yellow ">
      {" "}
      {children}
    </button>
  );
};

export default ButtonOutline;
