
import Boton from "../components/Boton/Boton";
import HamburgerMenu from "../components/HamburgerMenu/HamburgerMenu";

import { LogoName } from "../components/LogoName/LogoName";
import { NavBar } from "../components/NavBar/NavBar";
import { Presentacion } from "../components/Presentacion/Presentacion";
import { RrSs } from "../components/RrSs/RrSs";
import SobreMi from "../components/SobreMi/SobreMi";




function Dev() {
  return (
    <div>
      <div className="section">

        <SobreMi/>
        <LogoName />

        <Boton className={"primero"} text={"Home"}  onClick={() => {}}/>
        <Boton className={"segundo"} text={"Portafolio & contact"}   onClick={() => {}}/>

        <Boton className={"tercero"} text={"All Projects"}   onClick={() => {}}/>
      </div>

  
     

      <RrSs
      className={'github'}
      />
      <RrSs
      className={'linkedin'}
      />

      <NavBar/>

      <Presentacion/>

      <HamburgerMenu/>
    </div>
  );
}

export default Dev;