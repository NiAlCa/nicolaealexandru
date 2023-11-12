import "./RrSs.scss";
import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io5";

export const RrSs = ({ className }: { className: string }) => {
  return (
    <div className="iconContenedor">
      {className === "github" && (
        <a>
          <IoLogoGithub />{" "}
        </a>
      )}
      {className === "linkedin" && (
        <a href="https://www.linkedin.com/in/nicolae-alexandru-casiean-991973254/" target="_blank">
          <IoLogoLinkedin />
        </a>
      )}
    </div>
  );
};
