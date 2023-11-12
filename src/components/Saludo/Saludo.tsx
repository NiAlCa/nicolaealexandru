import { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import './Saludo.scss';

const Saludo = () => {
  const saludos = ['Hello there!', '¡Hola, bienvenido!', 'Bine-ați venit!', '¡Bon dia!'];
  const [saludoIndex, setSaludoIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSaludoIndex((saludoIndex + 1) % saludos.length);
    }, 3000); // Cambiar de saludo cada 3 segundos

    return () => {
      clearInterval(intervalId);
    };
  }, [saludoIndex]);

  return (
    <div>
      <div className="Saludo">
        <h3>
          <Typewriter
            options={{
              strings: saludos, 
              autoStart: true,
              loop: true,
            }}
          />
        </h3>
      </div>
    </div>
  );
};

export default Saludo;
