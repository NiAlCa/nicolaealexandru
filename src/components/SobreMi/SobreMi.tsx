import yo from "../../assets/yo.png";
import "./SobreMi.scss";
import useSWR from "swr";
import curriculum from '../../assets/curriculum.pdf';

import {
  IoLocationSharp,
  IoBook,
  IoSchool,
  IoLogoGithub,
  IoLogoLinkedin,
  IoNewspaper,
  
} from "react-icons/io5";
import Boton from "../Boton/Boton";

export default function SobreMi() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data, error } = useSWR(
    "https://api.github.com/users/NiAlCa",
    fetcher
  );

  if (error) return <div>Error al cargar los datos</div>;
  if (!data) return <div>Cargando...</div>;




  
  const openEmail = () => {
    const mailtoLink = `mailto:casiean2it@gmail.com`;
    window.open(mailtoLink, '_blank');
  };


  const openLinkedin = () => {
    window.open("https://www.linkedin.com/in/nicolae-alexandru-casiean-991973254/", '_blank');
  };

  const openGit = () => {
    window.open("https://github.com/NiAlCa", '_blank');
  };

  const DownloadCv = () => {
    window.open(curriculum, '_blank');
  };
  


  return (
    <div className="SobreMi">
      <div className="SobreMiAvatar">
        <img src={yo} />
      </div>
      <div className="SobreMiName">
        <h2>Nicolae Alexandru Casiean</h2>
      </div>

      <div className="SobreMiInfo">
        <div className="SobreMiInfoLocalidad SobreMiInfoContainer">
          <div className="SobreMiInfoContainerIcon">
            <IoLocationSharp />
          </div>

          <div className="SobreMiInfoContainerText">
            <p>Valencia, Spain</p>
          </div>
        </div>

        <div className="SobreMiInfoFull SobreMiInfoContainer">
          <div className="SobreMiInfoContainerIcon">
            <IoSchool />
          </div>

          <div className="SobreMiInfoContainerText">
            <p>Full Stack Developer</p>
          </div>
        </div>

        <div className="SobreMiInfoStudy SobreMiInfoContainer">
          <div className="SobreMiInfoContainerIcon">
            <IoBook />
          </div>

          <div className="SobreMiInfoContainerText">
            <p>Develhope</p>
          </div>
        </div>
      </div>

      <div className="separator"></div>

      <div className="SobreMiContact">
        <div className="SobreMiContactText">
          <h5>Contact</h5>
        </div>

        <div className="SobreMiContactContacts">
          <div className="SobreMiContactContactsLinkedin SobreMiContactContactsContainer " onClick={openLinkedin}>
            <div className="SobreMiContactContactsContainerIcon">
              <IoLogoLinkedin />
            </div>

            <div className="SobreMiContactContactsContainerText">
              <p>Nicolae Alexandru Casiean</p>
            </div>
          </div>

          <div className="SobreMiContactContactsGit SobreMiContactContactsContainer " onClick={openGit}>
            <div className="SobreMiContactContactsContainerIcon">
              <IoLogoGithub />
            </div>

            <div className="SobreMiContactContactsContainerText">
              <p>{data.login}</p>
            </div>
          </div>


          <div className="SobreMiContactContactsGit SobreMiContactContactsContainer " onClick={DownloadCv}>
            <div className="SobreMiContactContactsContainerIcon">
              <IoNewspaper />
            </div>

            <div className="SobreMiContactContactsContainerText">
            <p>CV</p>
            </div>
            
          </div>
          <div className="SobreMiContactContactsContainer ">
          <Boton
        text = "Send me an email!"
        className="tercero mail"
        onClick={openEmail}
        />
        </div>
        </div>
        
      
      </div>

    </div>
  );
}
