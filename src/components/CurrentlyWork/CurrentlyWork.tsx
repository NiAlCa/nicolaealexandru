import { CurrentlyWorkData } from "../../data/CurrentlyWorkData.mock";
import Boton from "../Boton/Boton";
import "./CurrentlyWork.scss";

export function CurrentlyWork() {
  const openGit = () => {
    window.open(CurrentlyWorkData[0].url, "_blank");
  };

  return (
    <div>
      <div className="CurrentlyWork">
        <div className="CurrentlyWorkTittle">
          <h5> Currently work on </h5>
        </div>

        <div className="CurrentlyWorkContent">
          <div className="CurrentlyWorkContentTittle">
            <img src={CurrentlyWorkData[0].image} />

            <h6>{CurrentlyWorkData[0].tittle}</h6>
          </div>

          <div className="CurrentlyWorkContentText">
            <p>{CurrentlyWorkData[0].text}</p>
          </div>

          <div className="CurrentlyWorkContentButton">
            <Boton
              text="View on github"
              className="tercero"
              onClick={openGit}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
