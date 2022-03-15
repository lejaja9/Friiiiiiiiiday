import React from "react";

export const Header = () => {
  return (
    <div className="pt-5 mx-12 flex justify-between">
      <div className="w-8 h-8 rounded-full bg-green-500" />
      <p
        className="text-gray-500 font-light text-lg"
        // style={{ color: "#A7A7A7" }}
      >
        About
      </p>
    </div>
  );
};
