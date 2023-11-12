
import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react'
import './styles/App.scss';
import Dev from './pages/Dev';
import { HomePage } from './pages/home/Home';
import { Portafolio } from './pages/portfolio/Portfolio';




function App() {

  useEffect(() => {
    const script = document.createElement('script');
    script.src='../src/assets/oneko.js';
    script.async = true;

    document.body.appendChild(script);

    return () => {

      
    };
  },[]);

  
 

  return (
    <div className="Principal">
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="portfolio" element={<Portafolio />} />
        <Route path="dev" element={<Dev />} />
      </Routes>
    </div>
  );
}

export default App;
