import React from "react";

const ButtonPrimary = ({ children, addClass }) => {
  return (
    <button
      className={
        "py-3 lg:py-3 px-12 lg:px-16 text-white-500 font-semibold rounded-lg bg-green-600 hover:shadow-yellow-md transition-all outline-none " +
        addClass
      }
    >
      {children}
    </button>
  );
};

export default ButtonPrimary;
