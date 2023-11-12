import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/index.scss'


import { NavBar } from "./components/NavBar/NavBar.tsx";


ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <NavBar/>
    <App />
 
    
  </BrowserRouter>,
)
