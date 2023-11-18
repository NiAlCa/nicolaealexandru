
import Boton from "../components/Boton/Boton";
import { CurrentlyWork } from "../components/CurrentlyWork/CurrentlyWork";
import { Description } from "../components/Description/Description";
import HamburgerMenu from "../components/HamburgerMenu/HamburgerMenu";
import { Info } from "../components/Info/Info";
import { LastSong } from "../components/LastSong/LastSong";

import { LogoName } from "../components/LogoName/LogoName";
import { NavBar } from "../components/NavBar/NavBar";
import { Presentacion } from "../components/Presentacion/Presentacion";
import { RandomThings } from "../components/RandomThings/RandomThings";
import { RrSs } from "../components/RrSs/RrSs";
import { Skills } from "../components/Skills/Skills";
import SobreMi from "../components/SobreMi/SobreMi";
import { SomeProjects } from "../components/SomeProjects/SomeProjects";




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

      <Description/>

      <Skills/>

      <CurrentlyWork/>

      <SomeProjects/>

      <LastSong/>

      <RandomThings/>

      <Info/>
    </div>
  );
}

export default Dev;