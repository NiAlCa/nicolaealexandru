
import { Link } from "react-router-dom";
import Avatar from "../Avatar/Avatar";
import Boton from "../Boton/Boton";
import Saludo from "../Saludo/Saludo";
import "./Presentacion.scss";

export const Presentacion = () => {
  const handlePortfolioClick = () => {
  
    console.log("Portfolio d");
  };

  const handleBlogClick = () => {
    
    console.log("Blog");
  };

  return (
    <div className="Presentacion">
      <div className="PresentacionContenedor">
        <div className="PresentacionTextContenedor">
          <h3>
            <Saludo />
          </h3>
          <h1>Nicolae Alexandru</h1>
          <h2>Full Stack Developer</h2>
        </div>
        <div className="PresentacionBotones">

        <Link to="portfolio">
                

          <Boton className={"segundo"} text={"Portfolio, project & contact"} onClick={handlePortfolioClick} /> 
          </Link>

          <Link to="blog">
                
          <Boton className={"segundo"} text={"Blog"} onClick={handleBlogClick} />
          </Link>
          
         
        </div>
      </div>

      <div className="PresentacionAvatar">
        <Avatar />
      </div>
    </div>
  );
};
