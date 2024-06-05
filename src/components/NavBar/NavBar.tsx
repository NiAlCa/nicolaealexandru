import Boton from "../Boton/Boton";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";


import { LogoName } from "../LogoName/LogoName";
import { RrSs } from "../RrSs/RrSs";
import "./NavBar.scss";
import { Link, useLocation, useNavigate  } from "react-router-dom";

export const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();


  const isHomeActive = location.pathname === "/";
  const isPortfolioActive = location.pathname === "/portfolio";
  const isBlogActive = location.pathname === "/blog";

  return (
    <div className="NavBar">
      <div className="NavBarLogoName" onClick={() => navigate('/')}>
 
        <LogoName />
  
      </div>
      <div className="NavBarBotones">
        <Link to={'/'}>
        <Boton
          className={`primero ${isHomeActive ? "activo" : ""}`}
          text="Home"
          onClick={() => {}}
        /></Link>

        <Link to={'/portfolio'}>
        <Boton
          className={`primero ${isPortfolioActive ? "activo" : ""}`}
          text="Portfolio & Contact"
          onClick={() => {}}
        /></Link>
        <Link to={'/blog'}>
        <Boton
          className={`primero ${isBlogActive ? "activo" : ""}`}
          text="Blog"
          onClick={() => {}}
        /></Link>
      </div>
      <div className="NavBarIconos">
        <RrSs className={"github"} />
        <RrSs className={"linkedin"} />
        <HamburgerMenu/>
      </div>
    </div>
  );
};
