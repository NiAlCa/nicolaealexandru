import React from "react";
import "./Boton.scss";
import { IoSend, IoArrowBackCircleOutline } from "react-icons/io5";

interface BotonProps {
  text: string;
  className: string;
  onClick: () => void;
}

const Boton: React.FC<BotonProps> = ({ text, className, onClick }) => {
  return (
    <div>
      <button className={className} onClick={onClick}>
      
        {className === "atras" && (
          <IoArrowBackCircleOutline className="icon" />
        )}{" "}
        <p>{text}</p>
        {className === "terceromail" && <IoSend />}
      </button>
    </div>
  );
};

export default Boton;
