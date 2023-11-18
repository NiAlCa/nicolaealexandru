import { useState, useEffect } from 'react';
import { RandomThingsData } from "../../data/RandomThingsData.mock";
import "./RandomThings.scss";

export function RandomThings() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % RandomThingsData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (

      <div className="RandomThings">
        <div className="RandomThingsTitle">
          <h5>Random Things</h5>
        </div>

        <div className="RandomThingsContent">
          <div className="RandomThingsContentText">
            <p>{RandomThingsData[currentIndex].text}</p>
          </div>
        </div>
      </div>
    
  );
}
