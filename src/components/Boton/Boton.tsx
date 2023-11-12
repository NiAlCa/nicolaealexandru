import React from "react";
import "./Boton.scss";
import { IoSend } from "react-icons/io5";

interface BotonProps {
  text: string;
  className: string;
  onClick: () => void;
}

const Boton: React.FC<BotonProps> = ({ text, className, onClick }) => {
  return (
    <div>
      <button className={className} onClick={onClick}>
        {className === 'tercero mail' && (<IoSend/>)}
        <p>{text}</p>
      </button>
    </div>
  );
};

export default Boton;
