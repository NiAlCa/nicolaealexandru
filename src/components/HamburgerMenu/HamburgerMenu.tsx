import { useState } from "react";
import "./HamburgerMenu.scss";
import { IoMenu, IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import Boton from "../Boton/Boton";
import { LogoName } from "../LogoName/LogoName";

const HamburgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Determina si la ruta actual coincide con los botones del menú
  const isHomeActive = window.location.pathname === "/";
  const isPortfolioActive = window.location.pathname === "/portfolio";
  const isBlogActive = window.location.pathname === "/blog";

  return (
    <div className="HamburgerMenu">
      <button onClick={toggleMenu} className="HamburgerMenuButton">
        <IoMenu />
      </button>
      {menuOpen && (
        <div className="HamburgerLinks open">
          <div className="menuHamburguer">
            <LogoName />
            <div className="menuHamburguerMenu">
              <Link to="/" className={`link ${isHomeActive ? "activo" : ""}`}>
                <Boton
                  text="Home"
                  onClick={() => console.log(isHomeActive)}
                  className=""
                />
              </Link>
              <Link
                to="portfolio"
                className={`link ${isPortfolioActive ? "activo" : ""}`}
              >
                <Boton
                  text="Portfolio & Contact"
                  onClick={() => console.log(isHomeActive)}
                  className=""
                />
              </Link>
              <Link
                to="/blog"
                className={`link ${isBlogActive ? "activo" : ""}`}
              >
                <Boton
                  text="Blog"
                  onClick={() => console.log(isHomeActive)}
                  className=""
                />
              </Link>

              <button onClick={toggleMenu} className="HamburgerMenuButton">
                <IoClose />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
