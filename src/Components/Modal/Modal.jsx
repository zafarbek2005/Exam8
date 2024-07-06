import React from "react";
import { IoMdClose } from "react-icons/io";

const Model = ({ children, setModulToggle }) => {
  return (
    <div>
      <div onClick={() => setModulToggle(false)} className="overflow"></div>
      <div className="model">
        {children}
        <IoMdClose
          onClick={() => setModulToggle(false)}
          className="phone__close"
        />
      </div>
    </div>
  );
};

export default Model;